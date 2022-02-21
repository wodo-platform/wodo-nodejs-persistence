<p align="center">
  <a href="https://wodo.io/" target="blank"><img src="https://github.com/wodo-platform/wg-web-ui/blob/master/app/img/_src/branding/logo_purple.png" width="320" alt="Wodo Platform" /></a>
</p>

<div align="center">
<h2> Wodo NodeJS Persistence Repo </h2>
</div>

<div align="center">
  <h4>
    <a href="https://wodo.io/">
      Website
    </a>
    <span> | </span>
    <a href="#">
      Product Docs
    </a>
    <span> | </span>
    <a href="#">
      Architecture Docs
    </a>
    <span> | </span>
    <!-- <a href="#"> -->
    <!--   CLI -->
    <!-- </a> -->
    <!-- <span> | </span> -->
    <a href="#/CONTRIBUTING.md">
      Contributing
    </a>
    <span> | </span>
    <a href="https://twitter.com/wodoio">
      Twitter
    </a>
    <span> | </span>
    <a href="https://t.me/wodoio">
      Telegram
    </a>
    <span> | </span>
    <a href="https://discord.gg/fbyns8Egpb">
      Discourd
    </a>
    <span> | </span>
    <a href="https://wodoio.medium.com/">
      Medium
    </a>
    <span> | </span>
    <a href="https://www.reddit.com/r/wodoio">
      Reddit
    </a>
  </h4>
</div>


<h3> Table of Contents </h3> 

- [Overview](#overview)
- [Instantiate MySQL Instance for Development Purpose](#instantiate-mysql-instance-for-development-purpose)
- [Generate Prisma artifacts](#generate-prisma-artifacts)
- [Publishing your package](#publishing-your-package)
- [Adding wodo-nodejs-persistance dependency to other projects](#adding-wodo-nodejs-persistance-dependency-to-other-projects)


---

## Overview

This module contains database schema definitions for both wodo-platform and wodo-gaming. It is a limitation of prisma ORM package. It generat3es data base clients with one unique nmae "PrismaClient" so that it is not possible to split the repository.

https://isidoro-ferreiro.medium.com/share-your-prisma-client-across-projects-44d1c7aca6fd

As we developed more services we found that each of our services had its own individual Prisma Client. And since all of our services are currently connected to the same database this wasn’t the cleanest solution. As you can imagine, whenever we made any database schema changes or even just updated our Prisma dependencies — this meant we had to repeat the same task multiple times. As programmers we couldn’t break the cardinal sin of staying DRY.
To solve this we moved our reused Prisma Client as an internal package with organisation level scope. The package simply exports the context so that we can plug and play it into any of our projects.
With this approach, making schema changes or updating Prisma versions is now as simple as releasing a new version of our internal package and updating the version used by the relevant projects. We don’t even need to have Prisma installed as a dependency in the other projects anymore. Hopefully the programming gods will forgive us now.

<p>
Prisma Migrate needs to connect a running MySQL instance in order to generate schema sql files. When you run "prisma migrate dev" to create a new migration, Prisma Migrate uses the shadow database to check that no manual changes have been made to the development database. For the first run, there is no dev database yet so that Prisma Migrate creates a shadow database, generate sql file and creates a final dev database that can be used in development process. More info: https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database
</p>

## Instantiate MySQL Instance for Development Purpose

We use "docker-compose" to run MySQL instances locally. It is a more comprehensive way to leverage docker. All MySQL configurations are defined in ".env" in the project root directory. The same env file is used by "prisma migrate" which is explained in the next section. Ultimately we consolidate all required configurations in one simple env file.

```bash 
MYSQLDB_ROOT_USER=root
MYSQLDB_ROOT_PASSWORD=password
MYSQLDB_WODO_USER=wodo
MYSQLDB_WODO_PASSWORD=123456
MYSQLDB_WODO_DATABASE=wodo_db
MYSQLDB_LOCAL_PORT=3306
MYSQLDB_DOCKER_PORT=3306

# in case node application is configured in the same docker-compose.yaml file.Not used at the moment in this repo
NODE_LOCAL_PORT=3000
NODE_DOCKER_PORT=3000 

# prisma migarte DB url in the form of DATABASE_URL="mysql://$MYSQLDB_WODO_USER:$MYSQLDB_WODO_PASSWORD@localhost:$MYSQLDB_LOCAL_PORT/$MYSQLDB_WODO_DATABASE"
DATABASE_URL="mysql://wodo:123456@127.0.0.1:3306/wodo_db"
```

We build our own MySql docker image. All definition files are stored in "db" folder. Docker Compose builds the docker image and instantiates it when "docker-compose up" command is executed.

docker-compose.yaml file contains all definitions/configurations to run MySQL DB instance. Important configurations:

- " build: ./db" --> Builds our own MySQL docker image using the files in db folder.
- "command: --default-authentication-plugin=mysql_native_password" --> Adjust default auth type to "mysql_native_password" since MySQL 8.x version uses sha encrypted auth model by defaul. It is quick tweak to adjust the configuration
- "env_file: ./.env" --> passing our main conf file to docker-compose. The confs are consolidated in one simple file.
- " environment: .... "  --> Setting up root user password, creating wodo user with password and creating default wodo database
- "ports: ... " --> Port forwarding from our local env to docker container
- "volumes:" --> Creating persistance storage to not loose MySQL confs and data when we shut MySQL down

To start MySQL instance, run the following command. It prints logs to console. To stop MySQL, just hit "ctrl+C"

```bash 
docker-compose up
```

You need to run this command in the project root directory where docker-compose.yaml file resides. You can keep your console running and continue development on other consoles.

To validate MySql instance, run the following commands. It lets you open a mysql command line session in the running docker container. First find out your running MySQL docker container name

```bash 
docker ps
```
From the command output, copy the container name. In the sample case, it is "wodo-nodejs-persistence_mysqldb_1". The value is used in the command below to instantiate a MySQL command line session.

```bash 
docker container exec -it wodo-nodejs-persistence_mysqldb_1 mysql -u root -p
```

Once you are connected to MySql command line, run the following commands one by one. We need to give permission to our new user "wodo" to be able to run "prisma migrate" properly.

```bash 
GRANT ALL PRIVILEGES ON *.* to 'wodo'@'%';
flush privileges;
```

Run exit command to terminate the sessiom

```bash 
exit;
```

In case you need to wipe out everything and start over, run the following command. It will remove MySql confs, volumes and everything else.

```bash 
docker-compose down -v
```


## Generate Prisma artifacts

Prisma Migrate tool needs a running MySQL db instance. If you do not have one, please follow the instructions in the previous section. All required prisma commands are defined in "package.json" file as it is the main build and packaging tool.

```json 
    "scripts": {
        "db:migrate": "dotenv -e ../.env -- npx prisma migrate dev --name init",
        "db:introspect": "dotenv -- prisma introspect",
        "db:generate": "dotenv -- prisma generate",
        "test": "echo \"Error: no test specified\" && exit 0",
        "lib-generate": "npx prisma generate"
    },
```

".env" file in the project root directory contains the conf parameter "DATABASE_URL" that is needed by "prisma migrate" command. You need to set up correct values based on your definitions. 

```bash 
DATABASE_URL="mysql://wodo:123456@127.0.0.1:3306/wodo_db"
```

Note: If your DB user does not have proper rights to create a database, please run the following SQL commands with root user. Replace db user "wodo" with your db user.

```bash 
GRANT ALL PRIVILEGES ON *.* to 'wodo'@'%';
flush privileges;
```

To create all tables in the new database make the database migration from the prisma schema defined in prisma/schema.prisma

```bash 
npm run db:migrate
```
The command invokes the line defined in package.json file. If you are doing an update you need to change --name param value, init is not good anymore. 

```bash 
"db:migrate": "dotenv -e ../.env -- npx prisma migrate dev --name init" 
```

It creates a new SQL migration file for this migration and runs the SQL migration file against your dev database that you defined within "MYSQLDB_WODO_USER" in ".env" file.


More info can be found at this link https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate

Now generate the prisma client from the migrated database with the following command

    npx prisma generate

The database tables are now set up and the prisma client is generated. For more information see the docs:

- https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project-typescript-mysql





##  Publishing your package

https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry

We do this by using github actions to create a new private package for our organisation, a great guide into how to do so can be found here.
In the root of your new project create a file under .github/workflows/release-package.yml

Push your changes, you can now finally create a new package by creating a new release in github:

By default, GitHub Packages publishes a package in the GitHub repository you specify in the name field of the package.json file. For example, you would publish a package named @my-org/test to the my-org/test GitHub repository. You can set up the scope mapping for your project using either a local .npmrc file in the project or using the publishConfig option in the package.json. GitHub Packages only supports scoped npm packages. Scoped packages have names with the format of @owner/name. Scoped packages always begin with an @ symbol. You may need to update the name in your package.json to use the scoped name. For example, "name": "@codertocat/hello-world-npm".

Version in the package.json file should match with the release tag version while releasing the proejct on the github. It should be imcreased or changed in every release.

##  Adding wodo-nodejs-persistance dependency to other projects 

https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package

you should create a .npmrc file as shown here in any of the projects where you wish to install it. This allows npm to resolve your package name.
Now we can remove Prisma from all of our other projects and simply use our new package instead, we can import the context and context types from it as well as any of the prisma client generated types.

You can install packages from GitHub Packages by adding the packages as dependencies in the package.json file for your project. For more information on using a package.json in your project, see "Working with package.json" in the npm documentation.

By default, you can add packages from one organization. For more information, see "Installing packages from other organizations."

You also need to add the .npmrc file to your project so all requests to install packages will go through GitHub Packages. When you route all package requests through GitHub Packages, you can use both scoped and unscoped packages from npmjs.com. For more information, see "npm-scope" in the npm documentation.

Authenticate to GitHub Packages. For more information, see "Authenticating to GitHub Packages."

In the same directory as your package.json file, create or edit an .npmrc file to include a line specifying GitHub Packages URL and the account owner. Replace OWNER with the name of the user or organization account that owns the repository containing your project.

@OWNER:registry=https://npm.pkg.github.com
Add the .npmrc file to the repository where GitHub Packages can find your project. For more information, see "Adding a file to a repository using the command line."

Configure package.json in your project to use the package you are installing. To add your package dependencies to the package.json file for GitHub Packages, specify the full-scoped package name, such as @my-org/server. For packages from npmjs.com, specify the full name, such as @babel/core or @lodash. For example, this following package.json uses the @octo-org/octo-app package as a dependency.


{
  "name": "@my-org/server",
  "version": "1.0.0",
  "description": "Server app that uses the @octo-org/octo-app package",
  "main": "index.js",
  "author": "",
  "license": "MIT",
  "dependencies": {
    "@octo-org/octo-app": "1.0.0"
  }
}


To authenticate by logging in to npm, use the npm login command, replacing USERNAME with your GitHub username, TOKEN with your personal access token, and PUBLIC-EMAIL-ADDRESS with your email address.

If GitHub Packages is not your default package registry for using npm and you want to use the npm audit command, we recommend you use the --scope flag with the owner of the package when you authenticate to GitHub Packages.

$ npm login --scope=@wodo-platform --registry=https://npm.pkg.github.com

> Username: your_git_user
> Password: your_git_access_token
> Email: noreply@wodo-platform.github.com


Install the package.

$ npm install
Installing packages from other organizations
By default, you can only use GitHub Packages packages from one organization. If you'd like to route package requests to multiple organizations and users, you can add additional lines to your .npmrc file, replacing OWNER with the name of the user or organization account that owns the repository containing your project.

@OWNER:registry=https://npm.pkg.github.com
@OWNER:registry=https://npm.pkg.github.com