# wodo-nodejs-persistence

https://isidoro-ferreiro.medium.com/share-your-prisma-client-across-projects-44d1c7aca6fd

As we developed more services we found that each of our services had its own individual Prisma Client. And since all of our services are currently connected to the same database this wasn’t the cleanest solution. As you can imagine, whenever we made any database schema changes or even just updated our Prisma dependencies — this meant we had to repeat the same task multiple times. As programmers we couldn’t break the cardinal sin of staying DRY.
To solve this we moved our reused Prisma Client as an internal package with organisation level scope. The package simply exports the context so that we can plug and play it into any of our projects.
With this approach, making schema changes or updating Prisma versions is now as simple as releasing a new version of our internal package and updating the version used by the relevant projects. We don’t even need to have Prisma installed as a dependency in the other projects anymore. Hopefully the programming gods will forgive us now.

##  Publishing your package

https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry

We do this by using github actions to create a new private package for our organisation, a great guide into how to do so can be found here.
In the root of your new project create a file under .github/workflows/release-package.yml

Push your changes, you can now finally create a new package by creating a new release in github:

By default, GitHub Packages publishes a package in the GitHub repository you specify in the name field of the package.json file. For example, you would publish a package named @my-org/test to the my-org/test GitHub repository. You can set up the scope mapping for your project using either a local .npmrc file in the project or using the publishConfig option in the package.json. GitHub Packages only supports scoped npm packages. Scoped packages have names with the format of @owner/name. Scoped packages always begin with an @ symbol. You may need to update the name in your package.json to use the scoped name. For example, "name": "@codertocat/hello-world-npm".

Version in the package.json file should match with the release tag version while releasing the proejct on the github

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