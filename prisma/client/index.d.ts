
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Demo
 */

export type Demo = {
  id: number
  name: string
  deleted: boolean
  description: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Tenant
 */

export type Tenant = {
  id: number
  name: string | null
  email: string
  image: string | null
  password: string | null
  username: string | null
  description: string
  deleted: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model User
 */

export type User = {
  id: number
  email: string
  image: string | null
  password: string | null
  username: string | null
  deleted: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Wallet
 */

export type Wallet = {
  id: number
  name: string
  description: string
  balance: number
  pending: number
  enabled: boolean
  createdAt: Date
  updatedAt: Date
  seed: string | null
  mnemonic: string | null
  deleted: boolean
  userId: number
}

/**
 * Model Account
 */

export type Account = {
  id: number
  name: string
  address: string
  description: string
  balance: number
  pending: number
  enabled: boolean
  createdAt: Date
  updatedAt: Date
  deleted: boolean
  walletId: number
}

/**
 * Model WalletType
 */

export type WalletType = {
  id: number
  name: string
  type: number
  description: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model TransactionHistory
 */

export type TransactionHistory = {
  id: number
  senderId: number
  senderAccountId: number
  receiverId: number
  receiverAccountId: number
  assetId: number
  amount: number
  createdAt: Date
}

/**
 * Model GameServer
 */

export type GameServer = {
  id: number
  type: number
  assetId: number
  data: Prisma.JsonValue
  totalAmount: number
  revenue: number
  createdAt: Date
  startedAt: Date
  finishedAt: Date
}

/**
 * Model GameServerData
 */

export type GameServerData = {
  id: number
  type: number
  assetId: number
  data: Prisma.JsonValue
  totalAmount: number
  revenue: number
  createdAt: Date
  startedAt: Date
  finishedAt: Date
}

/**
 * Model GameServerUser
 */

export type GameServerUser = {
  id: number
  userId: number
  gameServerId: number
  assetId: number
  status: number
  amount: number
  joinedAt: Date
  leftAt: Date
}

/**
 * Model GameServerUserData
 */

export type GameServerUserData = {
  id: number
  userId: number
  gameServerId: number
  gameType: number
  assetId: number
  amount: number
  reward: number
  joinedAt: Date
  leftAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Demos
 * const demos = await prisma.demo.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Demos
   * const demos = await prisma.demo.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;


      /**
   * `prisma.demo`: Exposes CRUD operations for the **Demo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Demos
    * const demos = await prisma.demo.findMany()
    * ```
    */
  get demo(): Prisma.DemoDelegate<GlobalReject>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<GlobalReject>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.walletType`: Exposes CRUD operations for the **WalletType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletTypes
    * const walletTypes = await prisma.walletType.findMany()
    * ```
    */
  get walletType(): Prisma.WalletTypeDelegate<GlobalReject>;

  /**
   * `prisma.transactionHistory`: Exposes CRUD operations for the **TransactionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionHistories
    * const transactionHistories = await prisma.transactionHistory.findMany()
    * ```
    */
  get transactionHistory(): Prisma.TransactionHistoryDelegate<GlobalReject>;

  /**
   * `prisma.gameServer`: Exposes CRUD operations for the **GameServer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameServers
    * const gameServers = await prisma.gameServer.findMany()
    * ```
    */
  get gameServer(): Prisma.GameServerDelegate<GlobalReject>;

  /**
   * `prisma.gameServerData`: Exposes CRUD operations for the **GameServerData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameServerData
    * const gameServerData = await prisma.gameServerData.findMany()
    * ```
    */
  get gameServerData(): Prisma.GameServerDataDelegate<GlobalReject>;

  /**
   * `prisma.gameServerUser`: Exposes CRUD operations for the **GameServerUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameServerUsers
    * const gameServerUsers = await prisma.gameServerUser.findMany()
    * ```
    */
  get gameServerUser(): Prisma.GameServerUserDelegate<GlobalReject>;

  /**
   * `prisma.gameServerUserData`: Exposes CRUD operations for the **GameServerUserData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameServerUserData
    * const gameServerUserData = await prisma.gameServerUserData.findMany()
    * ```
    */
  get gameServerUserData(): Prisma.GameServerUserDataDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.2.1
   * Query Engine version: b71d8cb16c4ddc7e3e9821f42fd09b0f82d7934c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Demo: 'Demo',
    Tenant: 'Tenant',
    User: 'User',
    Wallet: 'Wallet',
    Account: 'Account',
    WalletType: 'WalletType',
    TransactionHistory: 'TransactionHistory',
    GameServer: 'GameServer',
    GameServerData: 'GameServerData',
    GameServerUser: 'GameServerUser',
    GameServerUserData: 'GameServerUserData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    wallets: number
  }

  export type UserCountOutputTypeSelect = {
    wallets?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type WalletCountOutputType
   */


  export type WalletCountOutputType = {
    accounts: number
  }

  export type WalletCountOutputTypeSelect = {
    accounts?: boolean
  }

  export type WalletCountOutputTypeGetPayload<
    S extends boolean | null | undefined | WalletCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? WalletCountOutputType
    : S extends undefined
    ? never
    : S extends WalletCountOutputTypeArgs
    ?'include' extends U
    ? WalletCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof WalletCountOutputType ?WalletCountOutputType [P]
  : 
     never
  } 
    : WalletCountOutputType
  : WalletCountOutputType




  // Custom InputTypes

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WalletCountOutputType
     * 
    **/
    select?: WalletCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Demo
   */


  export type AggregateDemo = {
    _count: DemoCountAggregateOutputType | null
    _avg: DemoAvgAggregateOutputType | null
    _sum: DemoSumAggregateOutputType | null
    _min: DemoMinAggregateOutputType | null
    _max: DemoMaxAggregateOutputType | null
  }

  export type DemoAvgAggregateOutputType = {
    id: number | null
  }

  export type DemoSumAggregateOutputType = {
    id: number | null
  }

  export type DemoMinAggregateOutputType = {
    id: number | null
    name: string | null
    deleted: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DemoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    deleted: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DemoCountAggregateOutputType = {
    id: number
    name: number
    deleted: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DemoAvgAggregateInputType = {
    id?: true
  }

  export type DemoSumAggregateInputType = {
    id?: true
  }

  export type DemoMinAggregateInputType = {
    id?: true
    name?: true
    deleted?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DemoMaxAggregateInputType = {
    id?: true
    name?: true
    deleted?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DemoCountAggregateInputType = {
    id?: true
    name?: true
    deleted?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DemoAggregateArgs = {
    /**
     * Filter which Demo to aggregate.
     * 
    **/
    where?: DemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demos to fetch.
     * 
    **/
    orderBy?: Enumerable<DemoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Demos
    **/
    _count?: true | DemoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DemoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DemoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemoMaxAggregateInputType
  }

  export type GetDemoAggregateType<T extends DemoAggregateArgs> = {
        [P in keyof T & keyof AggregateDemo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemo[P]>
      : GetScalarType<T[P], AggregateDemo[P]>
  }


    
    
  export type DemoGroupByArgs = {
    where?: DemoWhereInput
    orderBy?: Enumerable<DemoOrderByWithAggregationInput>
    by: Array<DemoScalarFieldEnum>
    having?: DemoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemoCountAggregateInputType | true
    _avg?: DemoAvgAggregateInputType
    _sum?: DemoSumAggregateInputType
    _min?: DemoMinAggregateInputType
    _max?: DemoMaxAggregateInputType
  }


  export type DemoGroupByOutputType = {
    id: number
    name: string
    deleted: boolean
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: DemoCountAggregateOutputType | null
    _avg: DemoAvgAggregateOutputType | null
    _sum: DemoSumAggregateOutputType | null
    _min: DemoMinAggregateOutputType | null
    _max: DemoMaxAggregateOutputType | null
  }

  type GetDemoGroupByPayload<T extends DemoGroupByArgs> = Promise<
    Array<
      PickArray<DemoGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof DemoGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], DemoGroupByOutputType[P]> 
            : GetScalarType<T[P], DemoGroupByOutputType[P]>
        }
      > 
    >


  export type DemoSelect = {
    id?: boolean
    name?: boolean
    deleted?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DemoGetPayload<
    S extends boolean | null | undefined | DemoArgs,
    U = keyof S
      > = S extends true
        ? Demo
    : S extends undefined
    ? never
    : S extends DemoArgs | DemoFindManyArgs
    ?'include' extends U
    ? Demo 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Demo ?Demo [P]
  : 
     never
  } 
    : Demo
  : Demo


  type DemoCountArgs = Merge<
    Omit<DemoFindManyArgs, 'select' | 'include'> & {
      select?: DemoCountAggregateInputType | true
    }
  >

  export interface DemoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Demo that matches the filter.
     * @param {DemoFindUniqueArgs} args - Arguments to find a Demo
     * @example
     * // Get one Demo
     * const demo = await prisma.demo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DemoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DemoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Demo'> extends True ? CheckSelect<T, Prisma__DemoClient<Demo>, Prisma__DemoClient<DemoGetPayload<T>>> : CheckSelect<T, Prisma__DemoClient<Demo | null >, Prisma__DemoClient<DemoGetPayload<T> | null >>

    /**
     * Find the first Demo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoFindFirstArgs} args - Arguments to find a Demo
     * @example
     * // Get one Demo
     * const demo = await prisma.demo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DemoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DemoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Demo'> extends True ? CheckSelect<T, Prisma__DemoClient<Demo>, Prisma__DemoClient<DemoGetPayload<T>>> : CheckSelect<T, Prisma__DemoClient<Demo | null >, Prisma__DemoClient<DemoGetPayload<T> | null >>

    /**
     * Find zero or more Demos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Demos
     * const demos = await prisma.demo.findMany()
     * 
     * // Get first 10 Demos
     * const demos = await prisma.demo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const demoWithIdOnly = await prisma.demo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DemoFindManyArgs>(
      args?: SelectSubset<T, DemoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Demo>>, PrismaPromise<Array<DemoGetPayload<T>>>>

    /**
     * Create a Demo.
     * @param {DemoCreateArgs} args - Arguments to create a Demo.
     * @example
     * // Create one Demo
     * const Demo = await prisma.demo.create({
     *   data: {
     *     // ... data to create a Demo
     *   }
     * })
     * 
    **/
    create<T extends DemoCreateArgs>(
      args: SelectSubset<T, DemoCreateArgs>
    ): CheckSelect<T, Prisma__DemoClient<Demo>, Prisma__DemoClient<DemoGetPayload<T>>>

    /**
     * Create many Demos.
     *     @param {DemoCreateManyArgs} args - Arguments to create many Demos.
     *     @example
     *     // Create many Demos
     *     const demo = await prisma.demo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DemoCreateManyArgs>(
      args?: SelectSubset<T, DemoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Demo.
     * @param {DemoDeleteArgs} args - Arguments to delete one Demo.
     * @example
     * // Delete one Demo
     * const Demo = await prisma.demo.delete({
     *   where: {
     *     // ... filter to delete one Demo
     *   }
     * })
     * 
    **/
    delete<T extends DemoDeleteArgs>(
      args: SelectSubset<T, DemoDeleteArgs>
    ): CheckSelect<T, Prisma__DemoClient<Demo>, Prisma__DemoClient<DemoGetPayload<T>>>

    /**
     * Update one Demo.
     * @param {DemoUpdateArgs} args - Arguments to update one Demo.
     * @example
     * // Update one Demo
     * const demo = await prisma.demo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DemoUpdateArgs>(
      args: SelectSubset<T, DemoUpdateArgs>
    ): CheckSelect<T, Prisma__DemoClient<Demo>, Prisma__DemoClient<DemoGetPayload<T>>>

    /**
     * Delete zero or more Demos.
     * @param {DemoDeleteManyArgs} args - Arguments to filter Demos to delete.
     * @example
     * // Delete a few Demos
     * const { count } = await prisma.demo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DemoDeleteManyArgs>(
      args?: SelectSubset<T, DemoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Demos
     * const demo = await prisma.demo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DemoUpdateManyArgs>(
      args: SelectSubset<T, DemoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Demo.
     * @param {DemoUpsertArgs} args - Arguments to update or create a Demo.
     * @example
     * // Update or create a Demo
     * const demo = await prisma.demo.upsert({
     *   create: {
     *     // ... data to create a Demo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Demo we want to update
     *   }
     * })
    **/
    upsert<T extends DemoUpsertArgs>(
      args: SelectSubset<T, DemoUpsertArgs>
    ): CheckSelect<T, Prisma__DemoClient<Demo>, Prisma__DemoClient<DemoGetPayload<T>>>

    /**
     * Count the number of Demos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoCountArgs} args - Arguments to filter Demos to count.
     * @example
     * // Count the number of Demos
     * const count = await prisma.demo.count({
     *   where: {
     *     // ... the filter for the Demos we want to count
     *   }
     * })
    **/
    count<T extends DemoCountArgs>(
      args?: Subset<T, DemoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Demo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DemoAggregateArgs>(args: Subset<T, DemoAggregateArgs>): PrismaPromise<GetDemoAggregateType<T>>

    /**
     * Group by Demo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DemoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemoGroupByArgs['orderBy'] }
        : { orderBy?: DemoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DemoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Demo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DemoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Demo findUnique
   */
  export type DemoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Demo
     * 
    **/
    select?: DemoSelect | null
    /**
     * Throw an Error if a Demo can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Demo to fetch.
     * 
    **/
    where: DemoWhereUniqueInput
  }


  /**
   * Demo findFirst
   */
  export type DemoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Demo
     * 
    **/
    select?: DemoSelect | null
    /**
     * Throw an Error if a Demo can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Demo to fetch.
     * 
    **/
    where?: DemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demos to fetch.
     * 
    **/
    orderBy?: Enumerable<DemoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demos.
     * 
    **/
    cursor?: DemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demos.
     * 
    **/
    distinct?: Enumerable<DemoScalarFieldEnum>
  }


  /**
   * Demo findMany
   */
  export type DemoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Demo
     * 
    **/
    select?: DemoSelect | null
    /**
     * Filter, which Demos to fetch.
     * 
    **/
    where?: DemoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demos to fetch.
     * 
    **/
    orderBy?: Enumerable<DemoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Demos.
     * 
    **/
    cursor?: DemoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DemoScalarFieldEnum>
  }


  /**
   * Demo create
   */
  export type DemoCreateArgs = {
    /**
     * Select specific fields to fetch from the Demo
     * 
    **/
    select?: DemoSelect | null
    /**
     * The data needed to create a Demo.
     * 
    **/
    data: XOR<DemoCreateInput, DemoUncheckedCreateInput>
  }


  /**
   * Demo createMany
   */
  export type DemoCreateManyArgs = {
    data: Enumerable<DemoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Demo update
   */
  export type DemoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Demo
     * 
    **/
    select?: DemoSelect | null
    /**
     * The data needed to update a Demo.
     * 
    **/
    data: XOR<DemoUpdateInput, DemoUncheckedUpdateInput>
    /**
     * Choose, which Demo to update.
     * 
    **/
    where: DemoWhereUniqueInput
  }


  /**
   * Demo updateMany
   */
  export type DemoUpdateManyArgs = {
    data: XOR<DemoUpdateManyMutationInput, DemoUncheckedUpdateManyInput>
    where?: DemoWhereInput
  }


  /**
   * Demo upsert
   */
  export type DemoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Demo
     * 
    **/
    select?: DemoSelect | null
    /**
     * The filter to search for the Demo to update in case it exists.
     * 
    **/
    where: DemoWhereUniqueInput
    /**
     * In case the Demo found by the `where` argument doesn't exist, create a new Demo with this data.
     * 
    **/
    create: XOR<DemoCreateInput, DemoUncheckedCreateInput>
    /**
     * In case the Demo was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DemoUpdateInput, DemoUncheckedUpdateInput>
  }


  /**
   * Demo delete
   */
  export type DemoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Demo
     * 
    **/
    select?: DemoSelect | null
    /**
     * Filter which Demo to delete.
     * 
    **/
    where: DemoWhereUniqueInput
  }


  /**
   * Demo deleteMany
   */
  export type DemoDeleteManyArgs = {
    where?: DemoWhereInput
  }


  /**
   * Demo without action
   */
  export type DemoArgs = {
    /**
     * Select specific fields to fetch from the Demo
     * 
    **/
    select?: DemoSelect | null
  }



  /**
   * Model Tenant
   */


  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantAvgAggregateOutputType = {
    id: number | null
  }

  export type TenantSumAggregateOutputType = {
    id: number | null
  }

  export type TenantMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    image: string | null
    password: string | null
    username: string | null
    description: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    image: string | null
    password: string | null
    username: string | null
    description: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    password: number
    username: number
    description: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantAvgAggregateInputType = {
    id?: true
  }

  export type TenantSumAggregateInputType = {
    id?: true
  }

  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    password?: true
    username?: true
    description?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    password?: true
    username?: true
    description?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    password?: true
    username?: true
    description?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs = {
    /**
     * Filter which Tenant to aggregate.
     * 
    **/
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     * 
    **/
    orderBy?: Enumerable<TenantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }


    
    
  export type TenantGroupByArgs = {
    where?: TenantWhereInput
    orderBy?: Enumerable<TenantOrderByWithAggregationInput>
    by: Array<TenantScalarFieldEnum>
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _avg?: TenantAvgAggregateInputType
    _sum?: TenantSumAggregateInputType
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }


  export type TenantGroupByOutputType = {
    id: number
    name: string | null
    email: string
    image: string | null
    password: string | null
    username: string | null
    description: string
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Promise<
    Array<
      PickArray<TenantGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TenantGroupByOutputType[P]> 
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      > 
    >


  export type TenantSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    password?: boolean
    username?: boolean
    description?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantGetPayload<
    S extends boolean | null | undefined | TenantArgs,
    U = keyof S
      > = S extends true
        ? Tenant
    : S extends undefined
    ? never
    : S extends TenantArgs | TenantFindManyArgs
    ?'include' extends U
    ? Tenant 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Tenant ?Tenant [P]
  : 
     never
  } 
    : Tenant
  : Tenant


  type TenantCountArgs = Merge<
    Omit<TenantFindManyArgs, 'select' | 'include'> & {
      select?: TenantCountAggregateInputType | true
    }
  >

  export interface TenantDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TenantFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TenantFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tenant'> extends True ? CheckSelect<T, Prisma__TenantClient<Tenant>, Prisma__TenantClient<TenantGetPayload<T>>> : CheckSelect<T, Prisma__TenantClient<Tenant | null >, Prisma__TenantClient<TenantGetPayload<T> | null >>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TenantFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TenantFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tenant'> extends True ? CheckSelect<T, Prisma__TenantClient<Tenant>, Prisma__TenantClient<TenantGetPayload<T>>> : CheckSelect<T, Prisma__TenantClient<Tenant | null >, Prisma__TenantClient<TenantGetPayload<T> | null >>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TenantFindManyArgs>(
      args?: SelectSubset<T, TenantFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Tenant>>, PrismaPromise<Array<TenantGetPayload<T>>>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
    **/
    create<T extends TenantCreateArgs>(
      args: SelectSubset<T, TenantCreateArgs>
    ): CheckSelect<T, Prisma__TenantClient<Tenant>, Prisma__TenantClient<TenantGetPayload<T>>>

    /**
     * Create many Tenants.
     *     @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     *     @example
     *     // Create many Tenants
     *     const tenant = await prisma.tenant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TenantCreateManyArgs>(
      args?: SelectSubset<T, TenantCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
    **/
    delete<T extends TenantDeleteArgs>(
      args: SelectSubset<T, TenantDeleteArgs>
    ): CheckSelect<T, Prisma__TenantClient<Tenant>, Prisma__TenantClient<TenantGetPayload<T>>>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TenantUpdateArgs>(
      args: SelectSubset<T, TenantUpdateArgs>
    ): CheckSelect<T, Prisma__TenantClient<Tenant>, Prisma__TenantClient<TenantGetPayload<T>>>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TenantDeleteManyArgs>(
      args?: SelectSubset<T, TenantDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TenantUpdateManyArgs>(
      args: SelectSubset<T, TenantUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
    **/
    upsert<T extends TenantUpsertArgs>(
      args: SelectSubset<T, TenantUpsertArgs>
    ): CheckSelect<T, Prisma__TenantClient<Tenant>, Prisma__TenantClient<TenantGetPayload<T>>>

    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TenantClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Tenant
     * 
    **/
    select?: TenantSelect | null
    /**
     * Throw an Error if a Tenant can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tenant to fetch.
     * 
    **/
    where: TenantWhereUniqueInput
  }


  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Tenant
     * 
    **/
    select?: TenantSelect | null
    /**
     * Throw an Error if a Tenant can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tenant to fetch.
     * 
    **/
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     * 
    **/
    orderBy?: Enumerable<TenantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     * 
    **/
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     * 
    **/
    distinct?: Enumerable<TenantScalarFieldEnum>
  }


  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tenant
     * 
    **/
    select?: TenantSelect | null
    /**
     * Filter, which Tenants to fetch.
     * 
    **/
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     * 
    **/
    orderBy?: Enumerable<TenantOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     * 
    **/
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TenantScalarFieldEnum>
  }


  /**
   * Tenant create
   */
  export type TenantCreateArgs = {
    /**
     * Select specific fields to fetch from the Tenant
     * 
    **/
    select?: TenantSelect | null
    /**
     * The data needed to create a Tenant.
     * 
    **/
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }


  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs = {
    data: Enumerable<TenantCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tenant update
   */
  export type TenantUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tenant
     * 
    **/
    select?: TenantSelect | null
    /**
     * The data needed to update a Tenant.
     * 
    **/
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     * 
    **/
    where: TenantWhereUniqueInput
  }


  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs = {
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    where?: TenantWhereInput
  }


  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tenant
     * 
    **/
    select?: TenantSelect | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     * 
    **/
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     * 
    **/
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }


  /**
   * Tenant delete
   */
  export type TenantDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tenant
     * 
    **/
    select?: TenantSelect | null
    /**
     * Filter which Tenant to delete.
     * 
    **/
    where: TenantWhereUniqueInput
  }


  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs = {
    where?: TenantWhereInput
  }


  /**
   * Tenant without action
   */
  export type TenantArgs = {
    /**
     * Select specific fields to fetch from the Tenant
     * 
    **/
    select?: TenantSelect | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    image: string | null
    password: string | null
    username: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    image: string | null
    password: string | null
    username: string | null
    deleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    image: number
    password: number
    username: number
    deleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    image?: true
    password?: true
    username?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    image?: true
    password?: true
    username?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    image?: true
    password?: true
    username?: true
    deleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }


    
    
  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    image: string | null
    password: string | null
    username: string | null
    deleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UserGroupByOutputType[P]> 
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      > 
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    image?: boolean
    password?: boolean
    username?: boolean
    deleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallets?: boolean | WalletFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    wallets?: boolean | WalletFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'wallets'
        ? Array < WalletGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'wallets'
        ? Array < WalletGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    wallets<T extends WalletFindManyArgs = {}>(args?: Subset<T, WalletFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Wallet>>, PrismaPromise<Array<WalletGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Wallet
   */


  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    id: number | null
    balance: number | null
    pending: number | null
    userId: number | null
  }

  export type WalletSumAggregateOutputType = {
    id: number | null
    balance: number | null
    pending: number | null
    userId: number | null
  }

  export type WalletMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    balance: number | null
    pending: number | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    seed: string | null
    mnemonic: string | null
    deleted: boolean | null
    userId: number | null
  }

  export type WalletMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    balance: number | null
    pending: number | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    seed: string | null
    mnemonic: string | null
    deleted: boolean | null
    userId: number | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    name: number
    description: number
    balance: number
    pending: number
    enabled: number
    createdAt: number
    updatedAt: number
    seed: number
    mnemonic: number
    deleted: number
    userId: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    id?: true
    balance?: true
    pending?: true
    userId?: true
  }

  export type WalletSumAggregateInputType = {
    id?: true
    balance?: true
    pending?: true
    userId?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    balance?: true
    pending?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    seed?: true
    mnemonic?: true
    deleted?: true
    userId?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    balance?: true
    pending?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    seed?: true
    mnemonic?: true
    deleted?: true
    userId?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    balance?: true
    pending?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    seed?: true
    mnemonic?: true
    deleted?: true
    userId?: true
    _all?: true
  }

  export type WalletAggregateArgs = {
    /**
     * Filter which Wallet to aggregate.
     * 
    **/
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     * 
    **/
    orderBy?: Enumerable<WalletOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }


    
    
  export type WalletGroupByArgs = {
    where?: WalletWhereInput
    orderBy?: Enumerable<WalletOrderByWithAggregationInput>
    by: Array<WalletScalarFieldEnum>
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }


  export type WalletGroupByOutputType = {
    id: number
    name: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt: Date
    updatedAt: Date
    seed: string | null
    mnemonic: string | null
    deleted: boolean
    userId: number
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Promise<
    Array<
      PickArray<WalletGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], WalletGroupByOutputType[P]> 
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      > 
    >


  export type WalletSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    balance?: boolean
    pending?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    seed?: boolean
    mnemonic?: boolean
    deleted?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    accounts?: boolean | AccountFindManyArgs
    _count?: boolean | WalletCountOutputTypeArgs
  }

  export type WalletInclude = {
    user?: boolean | UserArgs
    accounts?: boolean | AccountFindManyArgs
    _count?: boolean | WalletCountOutputTypeArgs
  }

  export type WalletGetPayload<
    S extends boolean | null | undefined | WalletArgs,
    U = keyof S
      > = S extends true
        ? Wallet
    : S extends undefined
    ? never
    : S extends WalletArgs | WalletFindManyArgs
    ?'include' extends U
    ? Wallet  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'user'
        ? UserGetPayload<S['include'][P]> :
        P extends 'accounts'
        ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? WalletCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Wallet ?Wallet [P]
  : 
          P extends 'user'
        ? UserGetPayload<S['select'][P]> :
        P extends 'accounts'
        ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? WalletCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Wallet
  : Wallet


  type WalletCountArgs = Merge<
    Omit<WalletFindManyArgs, 'select' | 'include'> & {
      select?: WalletCountAggregateInputType | true
    }
  >

  export interface WalletDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WalletFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WalletFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Wallet'> extends True ? CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>> : CheckSelect<T, Prisma__WalletClient<Wallet | null >, Prisma__WalletClient<WalletGetPayload<T> | null >>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WalletFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WalletFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Wallet'> extends True ? CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>> : CheckSelect<T, Prisma__WalletClient<Wallet | null >, Prisma__WalletClient<WalletGetPayload<T> | null >>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WalletFindManyArgs>(
      args?: SelectSubset<T, WalletFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Wallet>>, PrismaPromise<Array<WalletGetPayload<T>>>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
    **/
    create<T extends WalletCreateArgs>(
      args: SelectSubset<T, WalletCreateArgs>
    ): CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>>

    /**
     * Create many Wallets.
     *     @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     *     @example
     *     // Create many Wallets
     *     const wallet = await prisma.wallet.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WalletCreateManyArgs>(
      args?: SelectSubset<T, WalletCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
    **/
    delete<T extends WalletDeleteArgs>(
      args: SelectSubset<T, WalletDeleteArgs>
    ): CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WalletUpdateArgs>(
      args: SelectSubset<T, WalletUpdateArgs>
    ): CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WalletDeleteManyArgs>(
      args?: SelectSubset<T, WalletDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WalletUpdateManyArgs>(
      args: SelectSubset<T, WalletUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
    **/
    upsert<T extends WalletUpsertArgs>(
      args: SelectSubset<T, WalletUpsertArgs>
    ): CheckSelect<T, Prisma__WalletClient<Wallet>, Prisma__WalletClient<WalletGetPayload<T>>>

    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WalletClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    accounts<T extends AccountFindManyArgs = {}>(args?: Subset<T, AccountFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * Throw an Error if a Wallet can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Wallet to fetch.
     * 
    **/
    where: WalletWhereUniqueInput
  }


  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * Throw an Error if a Wallet can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Wallet to fetch.
     * 
    **/
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     * 
    **/
    orderBy?: Enumerable<WalletOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     * 
    **/
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     * 
    **/
    distinct?: Enumerable<WalletScalarFieldEnum>
  }


  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * Filter, which Wallets to fetch.
     * 
    **/
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     * 
    **/
    orderBy?: Enumerable<WalletOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     * 
    **/
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WalletScalarFieldEnum>
  }


  /**
   * Wallet create
   */
  export type WalletCreateArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * The data needed to create a Wallet.
     * 
    **/
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }


  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs = {
    data: Enumerable<WalletCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Wallet update
   */
  export type WalletUpdateArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * The data needed to update a Wallet.
     * 
    **/
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     * 
    **/
    where: WalletWhereUniqueInput
  }


  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs = {
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    where?: WalletWhereInput
  }


  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     * 
    **/
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     * 
    **/
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }


  /**
   * Wallet delete
   */
  export type WalletDeleteArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
    /**
     * Filter which Wallet to delete.
     * 
    **/
    where: WalletWhereUniqueInput
  }


  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs = {
    where?: WalletWhereInput
  }


  /**
   * Wallet without action
   */
  export type WalletArgs = {
    /**
     * Select specific fields to fetch from the Wallet
     * 
    **/
    select?: WalletSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WalletInclude | null
  }



  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    balance: number | null
    pending: number | null
    walletId: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    balance: number | null
    pending: number | null
    walletId: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    description: string | null
    balance: number | null
    pending: number | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: boolean | null
    walletId: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    description: string | null
    balance: number | null
    pending: number | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deleted: boolean | null
    walletId: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    name: number
    address: number
    description: number
    balance: number
    pending: number
    enabled: number
    createdAt: number
    updatedAt: number
    deleted: number
    walletId: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    balance?: true
    pending?: true
    walletId?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    balance?: true
    pending?: true
    walletId?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    balance?: true
    pending?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    walletId?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    balance?: true
    pending?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    walletId?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    balance?: true
    pending?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
    deleted?: true
    walletId?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }


    
    
  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: Array<AccountScalarFieldEnum>
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: number
    name: string
    address: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt: Date
    updatedAt: Date
    deleted: boolean
    walletId: number
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Promise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], AccountGroupByOutputType[P]> 
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      > 
    >


  export type AccountSelect = {
    id?: boolean
    name?: boolean
    address?: boolean
    description?: boolean
    balance?: boolean
    pending?: boolean
    enabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleted?: boolean
    wallet?: boolean | WalletArgs
    walletId?: boolean
  }

  export type AccountInclude = {
    wallet?: boolean | WalletArgs
  }

  export type AccountGetPayload<
    S extends boolean | null | undefined | AccountArgs,
    U = keyof S
      > = S extends true
        ? Account
    : S extends undefined
    ? never
    : S extends AccountArgs | AccountFindManyArgs
    ?'include' extends U
    ? Account  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'wallet'
        ? WalletGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Account ?Account [P]
  : 
          P extends 'wallet'
        ? WalletGetPayload<S['select'][P]> : never
  } 
    : Account
  : Account


  type AccountCountArgs = Merge<
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }
  >

  export interface AccountDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>> : CheckSelect<T, Prisma__AccountClient<Account | null >, Prisma__AccountClient<AccountGetPayload<T> | null >>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Account>>, PrismaPromise<Array<AccountGetPayload<T>>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): CheckSelect<T, Prisma__AccountClient<Account>, Prisma__AccountClient<AccountGetPayload<T>>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    wallet<T extends WalletArgs = {}>(args?: Subset<T, WalletArgs>): CheckSelect<T, Prisma__WalletClient<Wallet | null >, Prisma__WalletClient<WalletGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Throw an Error if a Account can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Throw an Error if a Account can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     * 
    **/
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     * 
    **/
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     * 
    **/
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     * 
    **/
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
  }



  /**
   * Model WalletType
   */


  export type AggregateWalletType = {
    _count: WalletTypeCountAggregateOutputType | null
    _avg: WalletTypeAvgAggregateOutputType | null
    _sum: WalletTypeSumAggregateOutputType | null
    _min: WalletTypeMinAggregateOutputType | null
    _max: WalletTypeMaxAggregateOutputType | null
  }

  export type WalletTypeAvgAggregateOutputType = {
    id: number | null
    type: number | null
  }

  export type WalletTypeSumAggregateOutputType = {
    id: number | null
    type: number | null
  }

  export type WalletTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletTypeCountAggregateOutputType = {
    id: number
    name: number
    type: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WalletTypeAvgAggregateInputType = {
    id?: true
    type?: true
  }

  export type WalletTypeSumAggregateInputType = {
    id?: true
    type?: true
  }

  export type WalletTypeMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletTypeMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletTypeCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletTypeAggregateArgs = {
    /**
     * Filter which WalletType to aggregate.
     * 
    **/
    where?: WalletTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<WalletTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WalletTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletTypes
    **/
    _count?: true | WalletTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletTypeMaxAggregateInputType
  }

  export type GetWalletTypeAggregateType<T extends WalletTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletType[P]>
      : GetScalarType<T[P], AggregateWalletType[P]>
  }


    
    
  export type WalletTypeGroupByArgs = {
    where?: WalletTypeWhereInput
    orderBy?: Enumerable<WalletTypeOrderByWithAggregationInput>
    by: Array<WalletTypeScalarFieldEnum>
    having?: WalletTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletTypeCountAggregateInputType | true
    _avg?: WalletTypeAvgAggregateInputType
    _sum?: WalletTypeSumAggregateInputType
    _min?: WalletTypeMinAggregateInputType
    _max?: WalletTypeMaxAggregateInputType
  }


  export type WalletTypeGroupByOutputType = {
    id: number
    name: string
    type: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: WalletTypeCountAggregateOutputType | null
    _avg: WalletTypeAvgAggregateOutputType | null
    _sum: WalletTypeSumAggregateOutputType | null
    _min: WalletTypeMinAggregateOutputType | null
    _max: WalletTypeMaxAggregateOutputType | null
  }

  type GetWalletTypeGroupByPayload<T extends WalletTypeGroupByArgs> = Promise<
    Array<
      PickArray<WalletTypeGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof WalletTypeGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], WalletTypeGroupByOutputType[P]> 
            : GetScalarType<T[P], WalletTypeGroupByOutputType[P]>
        }
      > 
    >


  export type WalletTypeSelect = {
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WalletTypeGetPayload<
    S extends boolean | null | undefined | WalletTypeArgs,
    U = keyof S
      > = S extends true
        ? WalletType
    : S extends undefined
    ? never
    : S extends WalletTypeArgs | WalletTypeFindManyArgs
    ?'include' extends U
    ? WalletType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof WalletType ?WalletType [P]
  : 
     never
  } 
    : WalletType
  : WalletType


  type WalletTypeCountArgs = Merge<
    Omit<WalletTypeFindManyArgs, 'select' | 'include'> & {
      select?: WalletTypeCountAggregateInputType | true
    }
  >

  export interface WalletTypeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one WalletType that matches the filter.
     * @param {WalletTypeFindUniqueArgs} args - Arguments to find a WalletType
     * @example
     * // Get one WalletType
     * const walletType = await prisma.walletType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WalletTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WalletTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WalletType'> extends True ? CheckSelect<T, Prisma__WalletTypeClient<WalletType>, Prisma__WalletTypeClient<WalletTypeGetPayload<T>>> : CheckSelect<T, Prisma__WalletTypeClient<WalletType | null >, Prisma__WalletTypeClient<WalletTypeGetPayload<T> | null >>

    /**
     * Find the first WalletType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTypeFindFirstArgs} args - Arguments to find a WalletType
     * @example
     * // Get one WalletType
     * const walletType = await prisma.walletType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WalletTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WalletTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WalletType'> extends True ? CheckSelect<T, Prisma__WalletTypeClient<WalletType>, Prisma__WalletTypeClient<WalletTypeGetPayload<T>>> : CheckSelect<T, Prisma__WalletTypeClient<WalletType | null >, Prisma__WalletTypeClient<WalletTypeGetPayload<T> | null >>

    /**
     * Find zero or more WalletTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletTypes
     * const walletTypes = await prisma.walletType.findMany()
     * 
     * // Get first 10 WalletTypes
     * const walletTypes = await prisma.walletType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletTypeWithIdOnly = await prisma.walletType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WalletTypeFindManyArgs>(
      args?: SelectSubset<T, WalletTypeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<WalletType>>, PrismaPromise<Array<WalletTypeGetPayload<T>>>>

    /**
     * Create a WalletType.
     * @param {WalletTypeCreateArgs} args - Arguments to create a WalletType.
     * @example
     * // Create one WalletType
     * const WalletType = await prisma.walletType.create({
     *   data: {
     *     // ... data to create a WalletType
     *   }
     * })
     * 
    **/
    create<T extends WalletTypeCreateArgs>(
      args: SelectSubset<T, WalletTypeCreateArgs>
    ): CheckSelect<T, Prisma__WalletTypeClient<WalletType>, Prisma__WalletTypeClient<WalletTypeGetPayload<T>>>

    /**
     * Create many WalletTypes.
     *     @param {WalletTypeCreateManyArgs} args - Arguments to create many WalletTypes.
     *     @example
     *     // Create many WalletTypes
     *     const walletType = await prisma.walletType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WalletTypeCreateManyArgs>(
      args?: SelectSubset<T, WalletTypeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a WalletType.
     * @param {WalletTypeDeleteArgs} args - Arguments to delete one WalletType.
     * @example
     * // Delete one WalletType
     * const WalletType = await prisma.walletType.delete({
     *   where: {
     *     // ... filter to delete one WalletType
     *   }
     * })
     * 
    **/
    delete<T extends WalletTypeDeleteArgs>(
      args: SelectSubset<T, WalletTypeDeleteArgs>
    ): CheckSelect<T, Prisma__WalletTypeClient<WalletType>, Prisma__WalletTypeClient<WalletTypeGetPayload<T>>>

    /**
     * Update one WalletType.
     * @param {WalletTypeUpdateArgs} args - Arguments to update one WalletType.
     * @example
     * // Update one WalletType
     * const walletType = await prisma.walletType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WalletTypeUpdateArgs>(
      args: SelectSubset<T, WalletTypeUpdateArgs>
    ): CheckSelect<T, Prisma__WalletTypeClient<WalletType>, Prisma__WalletTypeClient<WalletTypeGetPayload<T>>>

    /**
     * Delete zero or more WalletTypes.
     * @param {WalletTypeDeleteManyArgs} args - Arguments to filter WalletTypes to delete.
     * @example
     * // Delete a few WalletTypes
     * const { count } = await prisma.walletType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WalletTypeDeleteManyArgs>(
      args?: SelectSubset<T, WalletTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletTypes
     * const walletType = await prisma.walletType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WalletTypeUpdateManyArgs>(
      args: SelectSubset<T, WalletTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one WalletType.
     * @param {WalletTypeUpsertArgs} args - Arguments to update or create a WalletType.
     * @example
     * // Update or create a WalletType
     * const walletType = await prisma.walletType.upsert({
     *   create: {
     *     // ... data to create a WalletType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletType we want to update
     *   }
     * })
    **/
    upsert<T extends WalletTypeUpsertArgs>(
      args: SelectSubset<T, WalletTypeUpsertArgs>
    ): CheckSelect<T, Prisma__WalletTypeClient<WalletType>, Prisma__WalletTypeClient<WalletTypeGetPayload<T>>>

    /**
     * Count the number of WalletTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTypeCountArgs} args - Arguments to filter WalletTypes to count.
     * @example
     * // Count the number of WalletTypes
     * const count = await prisma.walletType.count({
     *   where: {
     *     // ... the filter for the WalletTypes we want to count
     *   }
     * })
    **/
    count<T extends WalletTypeCountArgs>(
      args?: Subset<T, WalletTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletTypeAggregateArgs>(args: Subset<T, WalletTypeAggregateArgs>): PrismaPromise<GetWalletTypeAggregateType<T>>

    /**
     * Group by WalletType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletTypeGroupByArgs['orderBy'] }
        : { orderBy?: WalletTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletTypeGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WalletTypeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * WalletType findUnique
   */
  export type WalletTypeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the WalletType
     * 
    **/
    select?: WalletTypeSelect | null
    /**
     * Throw an Error if a WalletType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which WalletType to fetch.
     * 
    **/
    where: WalletTypeWhereUniqueInput
  }


  /**
   * WalletType findFirst
   */
  export type WalletTypeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the WalletType
     * 
    **/
    select?: WalletTypeSelect | null
    /**
     * Throw an Error if a WalletType can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which WalletType to fetch.
     * 
    **/
    where?: WalletTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<WalletTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTypes.
     * 
    **/
    cursor?: WalletTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTypes.
     * 
    **/
    distinct?: Enumerable<WalletTypeScalarFieldEnum>
  }


  /**
   * WalletType findMany
   */
  export type WalletTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the WalletType
     * 
    **/
    select?: WalletTypeSelect | null
    /**
     * Filter, which WalletTypes to fetch.
     * 
    **/
    where?: WalletTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<WalletTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletTypes.
     * 
    **/
    cursor?: WalletTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WalletTypeScalarFieldEnum>
  }


  /**
   * WalletType create
   */
  export type WalletTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the WalletType
     * 
    **/
    select?: WalletTypeSelect | null
    /**
     * The data needed to create a WalletType.
     * 
    **/
    data: XOR<WalletTypeCreateInput, WalletTypeUncheckedCreateInput>
  }


  /**
   * WalletType createMany
   */
  export type WalletTypeCreateManyArgs = {
    data: Enumerable<WalletTypeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WalletType update
   */
  export type WalletTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the WalletType
     * 
    **/
    select?: WalletTypeSelect | null
    /**
     * The data needed to update a WalletType.
     * 
    **/
    data: XOR<WalletTypeUpdateInput, WalletTypeUncheckedUpdateInput>
    /**
     * Choose, which WalletType to update.
     * 
    **/
    where: WalletTypeWhereUniqueInput
  }


  /**
   * WalletType updateMany
   */
  export type WalletTypeUpdateManyArgs = {
    data: XOR<WalletTypeUpdateManyMutationInput, WalletTypeUncheckedUpdateManyInput>
    where?: WalletTypeWhereInput
  }


  /**
   * WalletType upsert
   */
  export type WalletTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the WalletType
     * 
    **/
    select?: WalletTypeSelect | null
    /**
     * The filter to search for the WalletType to update in case it exists.
     * 
    **/
    where: WalletTypeWhereUniqueInput
    /**
     * In case the WalletType found by the `where` argument doesn't exist, create a new WalletType with this data.
     * 
    **/
    create: XOR<WalletTypeCreateInput, WalletTypeUncheckedCreateInput>
    /**
     * In case the WalletType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WalletTypeUpdateInput, WalletTypeUncheckedUpdateInput>
  }


  /**
   * WalletType delete
   */
  export type WalletTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the WalletType
     * 
    **/
    select?: WalletTypeSelect | null
    /**
     * Filter which WalletType to delete.
     * 
    **/
    where: WalletTypeWhereUniqueInput
  }


  /**
   * WalletType deleteMany
   */
  export type WalletTypeDeleteManyArgs = {
    where?: WalletTypeWhereInput
  }


  /**
   * WalletType without action
   */
  export type WalletTypeArgs = {
    /**
     * Select specific fields to fetch from the WalletType
     * 
    **/
    select?: WalletTypeSelect | null
  }



  /**
   * Model TransactionHistory
   */


  export type AggregateTransactionHistory = {
    _count: TransactionHistoryCountAggregateOutputType | null
    _avg: TransactionHistoryAvgAggregateOutputType | null
    _sum: TransactionHistorySumAggregateOutputType | null
    _min: TransactionHistoryMinAggregateOutputType | null
    _max: TransactionHistoryMaxAggregateOutputType | null
  }

  export type TransactionHistoryAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    senderAccountId: number | null
    receiverId: number | null
    receiverAccountId: number | null
    assetId: number | null
    amount: number | null
  }

  export type TransactionHistorySumAggregateOutputType = {
    id: number | null
    senderId: number | null
    senderAccountId: number | null
    receiverId: number | null
    receiverAccountId: number | null
    assetId: number | null
    amount: number | null
  }

  export type TransactionHistoryMinAggregateOutputType = {
    id: number | null
    senderId: number | null
    senderAccountId: number | null
    receiverId: number | null
    receiverAccountId: number | null
    assetId: number | null
    amount: number | null
    createdAt: Date | null
  }

  export type TransactionHistoryMaxAggregateOutputType = {
    id: number | null
    senderId: number | null
    senderAccountId: number | null
    receiverId: number | null
    receiverAccountId: number | null
    assetId: number | null
    amount: number | null
    createdAt: Date | null
  }

  export type TransactionHistoryCountAggregateOutputType = {
    id: number
    senderId: number
    senderAccountId: number
    receiverId: number
    receiverAccountId: number
    assetId: number
    amount: number
    createdAt: number
    _all: number
  }


  export type TransactionHistoryAvgAggregateInputType = {
    id?: true
    senderId?: true
    senderAccountId?: true
    receiverId?: true
    receiverAccountId?: true
    assetId?: true
    amount?: true
  }

  export type TransactionHistorySumAggregateInputType = {
    id?: true
    senderId?: true
    senderAccountId?: true
    receiverId?: true
    receiverAccountId?: true
    assetId?: true
    amount?: true
  }

  export type TransactionHistoryMinAggregateInputType = {
    id?: true
    senderId?: true
    senderAccountId?: true
    receiverId?: true
    receiverAccountId?: true
    assetId?: true
    amount?: true
    createdAt?: true
  }

  export type TransactionHistoryMaxAggregateInputType = {
    id?: true
    senderId?: true
    senderAccountId?: true
    receiverId?: true
    receiverAccountId?: true
    assetId?: true
    amount?: true
    createdAt?: true
  }

  export type TransactionHistoryCountAggregateInputType = {
    id?: true
    senderId?: true
    senderAccountId?: true
    receiverId?: true
    receiverAccountId?: true
    assetId?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionHistoryAggregateArgs = {
    /**
     * Filter which TransactionHistory to aggregate.
     * 
    **/
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<TransactionHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionHistories
    **/
    _count?: true | TransactionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionHistoryMaxAggregateInputType
  }

  export type GetTransactionHistoryAggregateType<T extends TransactionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionHistory[P]>
      : GetScalarType<T[P], AggregateTransactionHistory[P]>
  }


    
    
  export type TransactionHistoryGroupByArgs = {
    where?: TransactionHistoryWhereInput
    orderBy?: Enumerable<TransactionHistoryOrderByWithAggregationInput>
    by: Array<TransactionHistoryScalarFieldEnum>
    having?: TransactionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionHistoryCountAggregateInputType | true
    _avg?: TransactionHistoryAvgAggregateInputType
    _sum?: TransactionHistorySumAggregateInputType
    _min?: TransactionHistoryMinAggregateInputType
    _max?: TransactionHistoryMaxAggregateInputType
  }


  export type TransactionHistoryGroupByOutputType = {
    id: number
    senderId: number
    senderAccountId: number
    receiverId: number
    receiverAccountId: number
    assetId: number
    amount: number
    createdAt: Date
    _count: TransactionHistoryCountAggregateOutputType | null
    _avg: TransactionHistoryAvgAggregateOutputType | null
    _sum: TransactionHistorySumAggregateOutputType | null
    _min: TransactionHistoryMinAggregateOutputType | null
    _max: TransactionHistoryMaxAggregateOutputType | null
  }

  type GetTransactionHistoryGroupByPayload<T extends TransactionHistoryGroupByArgs> = Promise<
    Array<
      PickArray<TransactionHistoryGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TransactionHistoryGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TransactionHistoryGroupByOutputType[P]> 
            : GetScalarType<T[P], TransactionHistoryGroupByOutputType[P]>
        }
      > 
    >


  export type TransactionHistorySelect = {
    id?: boolean
    senderId?: boolean
    senderAccountId?: boolean
    receiverId?: boolean
    receiverAccountId?: boolean
    assetId?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type TransactionHistoryGetPayload<
    S extends boolean | null | undefined | TransactionHistoryArgs,
    U = keyof S
      > = S extends true
        ? TransactionHistory
    : S extends undefined
    ? never
    : S extends TransactionHistoryArgs | TransactionHistoryFindManyArgs
    ?'include' extends U
    ? TransactionHistory 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof TransactionHistory ?TransactionHistory [P]
  : 
     never
  } 
    : TransactionHistory
  : TransactionHistory


  type TransactionHistoryCountArgs = Merge<
    Omit<TransactionHistoryFindManyArgs, 'select' | 'include'> & {
      select?: TransactionHistoryCountAggregateInputType | true
    }
  >

  export interface TransactionHistoryDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one TransactionHistory that matches the filter.
     * @param {TransactionHistoryFindUniqueArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransactionHistoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TransactionHistoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TransactionHistory'> extends True ? CheckSelect<T, Prisma__TransactionHistoryClient<TransactionHistory>, Prisma__TransactionHistoryClient<TransactionHistoryGetPayload<T>>> : CheckSelect<T, Prisma__TransactionHistoryClient<TransactionHistory | null >, Prisma__TransactionHistoryClient<TransactionHistoryGetPayload<T> | null >>

    /**
     * Find the first TransactionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryFindFirstArgs} args - Arguments to find a TransactionHistory
     * @example
     * // Get one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransactionHistoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TransactionHistoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TransactionHistory'> extends True ? CheckSelect<T, Prisma__TransactionHistoryClient<TransactionHistory>, Prisma__TransactionHistoryClient<TransactionHistoryGetPayload<T>>> : CheckSelect<T, Prisma__TransactionHistoryClient<TransactionHistory | null >, Prisma__TransactionHistoryClient<TransactionHistoryGetPayload<T> | null >>

    /**
     * Find zero or more TransactionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionHistories
     * const transactionHistories = await prisma.transactionHistory.findMany()
     * 
     * // Get first 10 TransactionHistories
     * const transactionHistories = await prisma.transactionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionHistoryWithIdOnly = await prisma.transactionHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TransactionHistoryFindManyArgs>(
      args?: SelectSubset<T, TransactionHistoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<TransactionHistory>>, PrismaPromise<Array<TransactionHistoryGetPayload<T>>>>

    /**
     * Create a TransactionHistory.
     * @param {TransactionHistoryCreateArgs} args - Arguments to create a TransactionHistory.
     * @example
     * // Create one TransactionHistory
     * const TransactionHistory = await prisma.transactionHistory.create({
     *   data: {
     *     // ... data to create a TransactionHistory
     *   }
     * })
     * 
    **/
    create<T extends TransactionHistoryCreateArgs>(
      args: SelectSubset<T, TransactionHistoryCreateArgs>
    ): CheckSelect<T, Prisma__TransactionHistoryClient<TransactionHistory>, Prisma__TransactionHistoryClient<TransactionHistoryGetPayload<T>>>

    /**
     * Create many TransactionHistories.
     *     @param {TransactionHistoryCreateManyArgs} args - Arguments to create many TransactionHistories.
     *     @example
     *     // Create many TransactionHistories
     *     const transactionHistory = await prisma.transactionHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransactionHistoryCreateManyArgs>(
      args?: SelectSubset<T, TransactionHistoryCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TransactionHistory.
     * @param {TransactionHistoryDeleteArgs} args - Arguments to delete one TransactionHistory.
     * @example
     * // Delete one TransactionHistory
     * const TransactionHistory = await prisma.transactionHistory.delete({
     *   where: {
     *     // ... filter to delete one TransactionHistory
     *   }
     * })
     * 
    **/
    delete<T extends TransactionHistoryDeleteArgs>(
      args: SelectSubset<T, TransactionHistoryDeleteArgs>
    ): CheckSelect<T, Prisma__TransactionHistoryClient<TransactionHistory>, Prisma__TransactionHistoryClient<TransactionHistoryGetPayload<T>>>

    /**
     * Update one TransactionHistory.
     * @param {TransactionHistoryUpdateArgs} args - Arguments to update one TransactionHistory.
     * @example
     * // Update one TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransactionHistoryUpdateArgs>(
      args: SelectSubset<T, TransactionHistoryUpdateArgs>
    ): CheckSelect<T, Prisma__TransactionHistoryClient<TransactionHistory>, Prisma__TransactionHistoryClient<TransactionHistoryGetPayload<T>>>

    /**
     * Delete zero or more TransactionHistories.
     * @param {TransactionHistoryDeleteManyArgs} args - Arguments to filter TransactionHistories to delete.
     * @example
     * // Delete a few TransactionHistories
     * const { count } = await prisma.transactionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransactionHistoryDeleteManyArgs>(
      args?: SelectSubset<T, TransactionHistoryDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionHistories
     * const transactionHistory = await prisma.transactionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransactionHistoryUpdateManyArgs>(
      args: SelectSubset<T, TransactionHistoryUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TransactionHistory.
     * @param {TransactionHistoryUpsertArgs} args - Arguments to update or create a TransactionHistory.
     * @example
     * // Update or create a TransactionHistory
     * const transactionHistory = await prisma.transactionHistory.upsert({
     *   create: {
     *     // ... data to create a TransactionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionHistory we want to update
     *   }
     * })
    **/
    upsert<T extends TransactionHistoryUpsertArgs>(
      args: SelectSubset<T, TransactionHistoryUpsertArgs>
    ): CheckSelect<T, Prisma__TransactionHistoryClient<TransactionHistory>, Prisma__TransactionHistoryClient<TransactionHistoryGetPayload<T>>>

    /**
     * Count the number of TransactionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryCountArgs} args - Arguments to filter TransactionHistories to count.
     * @example
     * // Count the number of TransactionHistories
     * const count = await prisma.transactionHistory.count({
     *   where: {
     *     // ... the filter for the TransactionHistories we want to count
     *   }
     * })
    **/
    count<T extends TransactionHistoryCountArgs>(
      args?: Subset<T, TransactionHistoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionHistoryAggregateArgs>(args: Subset<T, TransactionHistoryAggregateArgs>): PrismaPromise<GetTransactionHistoryAggregateType<T>>

    /**
     * Group by TransactionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TransactionHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionHistoryGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TransactionHistoryClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * TransactionHistory findUnique
   */
  export type TransactionHistoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     * 
    **/
    select?: TransactionHistorySelect | null
    /**
     * Throw an Error if a TransactionHistory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TransactionHistory to fetch.
     * 
    **/
    where: TransactionHistoryWhereUniqueInput
  }


  /**
   * TransactionHistory findFirst
   */
  export type TransactionHistoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     * 
    **/
    select?: TransactionHistorySelect | null
    /**
     * Throw an Error if a TransactionHistory can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TransactionHistory to fetch.
     * 
    **/
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<TransactionHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionHistories.
     * 
    **/
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionHistories.
     * 
    **/
    distinct?: Enumerable<TransactionHistoryScalarFieldEnum>
  }


  /**
   * TransactionHistory findMany
   */
  export type TransactionHistoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     * 
    **/
    select?: TransactionHistorySelect | null
    /**
     * Filter, which TransactionHistories to fetch.
     * 
    **/
    where?: TransactionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionHistories to fetch.
     * 
    **/
    orderBy?: Enumerable<TransactionHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionHistories.
     * 
    **/
    cursor?: TransactionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionHistories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionHistories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TransactionHistoryScalarFieldEnum>
  }


  /**
   * TransactionHistory create
   */
  export type TransactionHistoryCreateArgs = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     * 
    **/
    select?: TransactionHistorySelect | null
    /**
     * The data needed to create a TransactionHistory.
     * 
    **/
    data: XOR<TransactionHistoryCreateInput, TransactionHistoryUncheckedCreateInput>
  }


  /**
   * TransactionHistory createMany
   */
  export type TransactionHistoryCreateManyArgs = {
    data: Enumerable<TransactionHistoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TransactionHistory update
   */
  export type TransactionHistoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     * 
    **/
    select?: TransactionHistorySelect | null
    /**
     * The data needed to update a TransactionHistory.
     * 
    **/
    data: XOR<TransactionHistoryUpdateInput, TransactionHistoryUncheckedUpdateInput>
    /**
     * Choose, which TransactionHistory to update.
     * 
    **/
    where: TransactionHistoryWhereUniqueInput
  }


  /**
   * TransactionHistory updateMany
   */
  export type TransactionHistoryUpdateManyArgs = {
    data: XOR<TransactionHistoryUpdateManyMutationInput, TransactionHistoryUncheckedUpdateManyInput>
    where?: TransactionHistoryWhereInput
  }


  /**
   * TransactionHistory upsert
   */
  export type TransactionHistoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     * 
    **/
    select?: TransactionHistorySelect | null
    /**
     * The filter to search for the TransactionHistory to update in case it exists.
     * 
    **/
    where: TransactionHistoryWhereUniqueInput
    /**
     * In case the TransactionHistory found by the `where` argument doesn't exist, create a new TransactionHistory with this data.
     * 
    **/
    create: XOR<TransactionHistoryCreateInput, TransactionHistoryUncheckedCreateInput>
    /**
     * In case the TransactionHistory was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TransactionHistoryUpdateInput, TransactionHistoryUncheckedUpdateInput>
  }


  /**
   * TransactionHistory delete
   */
  export type TransactionHistoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     * 
    **/
    select?: TransactionHistorySelect | null
    /**
     * Filter which TransactionHistory to delete.
     * 
    **/
    where: TransactionHistoryWhereUniqueInput
  }


  /**
   * TransactionHistory deleteMany
   */
  export type TransactionHistoryDeleteManyArgs = {
    where?: TransactionHistoryWhereInput
  }


  /**
   * TransactionHistory without action
   */
  export type TransactionHistoryArgs = {
    /**
     * Select specific fields to fetch from the TransactionHistory
     * 
    **/
    select?: TransactionHistorySelect | null
  }



  /**
   * Model GameServer
   */


  export type AggregateGameServer = {
    _count: GameServerCountAggregateOutputType | null
    _avg: GameServerAvgAggregateOutputType | null
    _sum: GameServerSumAggregateOutputType | null
    _min: GameServerMinAggregateOutputType | null
    _max: GameServerMaxAggregateOutputType | null
  }

  export type GameServerAvgAggregateOutputType = {
    id: number | null
    type: number | null
    assetId: number | null
    totalAmount: number | null
    revenue: number | null
  }

  export type GameServerSumAggregateOutputType = {
    id: number | null
    type: number | null
    assetId: number | null
    totalAmount: number | null
    revenue: number | null
  }

  export type GameServerMinAggregateOutputType = {
    id: number | null
    type: number | null
    assetId: number | null
    totalAmount: number | null
    revenue: number | null
    createdAt: Date | null
    startedAt: Date | null
    finishedAt: Date | null
  }

  export type GameServerMaxAggregateOutputType = {
    id: number | null
    type: number | null
    assetId: number | null
    totalAmount: number | null
    revenue: number | null
    createdAt: Date | null
    startedAt: Date | null
    finishedAt: Date | null
  }

  export type GameServerCountAggregateOutputType = {
    id: number
    type: number
    assetId: number
    data: number
    totalAmount: number
    revenue: number
    createdAt: number
    startedAt: number
    finishedAt: number
    _all: number
  }


  export type GameServerAvgAggregateInputType = {
    id?: true
    type?: true
    assetId?: true
    totalAmount?: true
    revenue?: true
  }

  export type GameServerSumAggregateInputType = {
    id?: true
    type?: true
    assetId?: true
    totalAmount?: true
    revenue?: true
  }

  export type GameServerMinAggregateInputType = {
    id?: true
    type?: true
    assetId?: true
    totalAmount?: true
    revenue?: true
    createdAt?: true
    startedAt?: true
    finishedAt?: true
  }

  export type GameServerMaxAggregateInputType = {
    id?: true
    type?: true
    assetId?: true
    totalAmount?: true
    revenue?: true
    createdAt?: true
    startedAt?: true
    finishedAt?: true
  }

  export type GameServerCountAggregateInputType = {
    id?: true
    type?: true
    assetId?: true
    data?: true
    totalAmount?: true
    revenue?: true
    createdAt?: true
    startedAt?: true
    finishedAt?: true
    _all?: true
  }

  export type GameServerAggregateArgs = {
    /**
     * Filter which GameServer to aggregate.
     * 
    **/
    where?: GameServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameServers to fetch.
     * 
    **/
    orderBy?: Enumerable<GameServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GameServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameServers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameServers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameServers
    **/
    _count?: true | GameServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameServerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameServerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameServerMaxAggregateInputType
  }

  export type GetGameServerAggregateType<T extends GameServerAggregateArgs> = {
        [P in keyof T & keyof AggregateGameServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameServer[P]>
      : GetScalarType<T[P], AggregateGameServer[P]>
  }


    
    
  export type GameServerGroupByArgs = {
    where?: GameServerWhereInput
    orderBy?: Enumerable<GameServerOrderByWithAggregationInput>
    by: Array<GameServerScalarFieldEnum>
    having?: GameServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameServerCountAggregateInputType | true
    _avg?: GameServerAvgAggregateInputType
    _sum?: GameServerSumAggregateInputType
    _min?: GameServerMinAggregateInputType
    _max?: GameServerMaxAggregateInputType
  }


  export type GameServerGroupByOutputType = {
    id: number
    type: number
    assetId: number
    data: JsonValue
    totalAmount: number
    revenue: number
    createdAt: Date
    startedAt: Date
    finishedAt: Date
    _count: GameServerCountAggregateOutputType | null
    _avg: GameServerAvgAggregateOutputType | null
    _sum: GameServerSumAggregateOutputType | null
    _min: GameServerMinAggregateOutputType | null
    _max: GameServerMaxAggregateOutputType | null
  }

  type GetGameServerGroupByPayload<T extends GameServerGroupByArgs> = Promise<
    Array<
      PickArray<GameServerGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof GameServerGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], GameServerGroupByOutputType[P]> 
            : GetScalarType<T[P], GameServerGroupByOutputType[P]>
        }
      > 
    >


  export type GameServerSelect = {
    id?: boolean
    type?: boolean
    assetId?: boolean
    data?: boolean
    totalAmount?: boolean
    revenue?: boolean
    createdAt?: boolean
    startedAt?: boolean
    finishedAt?: boolean
  }

  export type GameServerGetPayload<
    S extends boolean | null | undefined | GameServerArgs,
    U = keyof S
      > = S extends true
        ? GameServer
    : S extends undefined
    ? never
    : S extends GameServerArgs | GameServerFindManyArgs
    ?'include' extends U
    ? GameServer 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof GameServer ?GameServer [P]
  : 
     never
  } 
    : GameServer
  : GameServer


  type GameServerCountArgs = Merge<
    Omit<GameServerFindManyArgs, 'select' | 'include'> & {
      select?: GameServerCountAggregateInputType | true
    }
  >

  export interface GameServerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GameServer that matches the filter.
     * @param {GameServerFindUniqueArgs} args - Arguments to find a GameServer
     * @example
     * // Get one GameServer
     * const gameServer = await prisma.gameServer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameServerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GameServerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GameServer'> extends True ? CheckSelect<T, Prisma__GameServerClient<GameServer>, Prisma__GameServerClient<GameServerGetPayload<T>>> : CheckSelect<T, Prisma__GameServerClient<GameServer | null >, Prisma__GameServerClient<GameServerGetPayload<T> | null >>

    /**
     * Find the first GameServer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerFindFirstArgs} args - Arguments to find a GameServer
     * @example
     * // Get one GameServer
     * const gameServer = await prisma.gameServer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameServerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GameServerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GameServer'> extends True ? CheckSelect<T, Prisma__GameServerClient<GameServer>, Prisma__GameServerClient<GameServerGetPayload<T>>> : CheckSelect<T, Prisma__GameServerClient<GameServer | null >, Prisma__GameServerClient<GameServerGetPayload<T> | null >>

    /**
     * Find zero or more GameServers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameServers
     * const gameServers = await prisma.gameServer.findMany()
     * 
     * // Get first 10 GameServers
     * const gameServers = await prisma.gameServer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameServerWithIdOnly = await prisma.gameServer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameServerFindManyArgs>(
      args?: SelectSubset<T, GameServerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GameServer>>, PrismaPromise<Array<GameServerGetPayload<T>>>>

    /**
     * Create a GameServer.
     * @param {GameServerCreateArgs} args - Arguments to create a GameServer.
     * @example
     * // Create one GameServer
     * const GameServer = await prisma.gameServer.create({
     *   data: {
     *     // ... data to create a GameServer
     *   }
     * })
     * 
    **/
    create<T extends GameServerCreateArgs>(
      args: SelectSubset<T, GameServerCreateArgs>
    ): CheckSelect<T, Prisma__GameServerClient<GameServer>, Prisma__GameServerClient<GameServerGetPayload<T>>>

    /**
     * Create many GameServers.
     *     @param {GameServerCreateManyArgs} args - Arguments to create many GameServers.
     *     @example
     *     // Create many GameServers
     *     const gameServer = await prisma.gameServer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameServerCreateManyArgs>(
      args?: SelectSubset<T, GameServerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GameServer.
     * @param {GameServerDeleteArgs} args - Arguments to delete one GameServer.
     * @example
     * // Delete one GameServer
     * const GameServer = await prisma.gameServer.delete({
     *   where: {
     *     // ... filter to delete one GameServer
     *   }
     * })
     * 
    **/
    delete<T extends GameServerDeleteArgs>(
      args: SelectSubset<T, GameServerDeleteArgs>
    ): CheckSelect<T, Prisma__GameServerClient<GameServer>, Prisma__GameServerClient<GameServerGetPayload<T>>>

    /**
     * Update one GameServer.
     * @param {GameServerUpdateArgs} args - Arguments to update one GameServer.
     * @example
     * // Update one GameServer
     * const gameServer = await prisma.gameServer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameServerUpdateArgs>(
      args: SelectSubset<T, GameServerUpdateArgs>
    ): CheckSelect<T, Prisma__GameServerClient<GameServer>, Prisma__GameServerClient<GameServerGetPayload<T>>>

    /**
     * Delete zero or more GameServers.
     * @param {GameServerDeleteManyArgs} args - Arguments to filter GameServers to delete.
     * @example
     * // Delete a few GameServers
     * const { count } = await prisma.gameServer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameServerDeleteManyArgs>(
      args?: SelectSubset<T, GameServerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameServers
     * const gameServer = await prisma.gameServer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameServerUpdateManyArgs>(
      args: SelectSubset<T, GameServerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GameServer.
     * @param {GameServerUpsertArgs} args - Arguments to update or create a GameServer.
     * @example
     * // Update or create a GameServer
     * const gameServer = await prisma.gameServer.upsert({
     *   create: {
     *     // ... data to create a GameServer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameServer we want to update
     *   }
     * })
    **/
    upsert<T extends GameServerUpsertArgs>(
      args: SelectSubset<T, GameServerUpsertArgs>
    ): CheckSelect<T, Prisma__GameServerClient<GameServer>, Prisma__GameServerClient<GameServerGetPayload<T>>>

    /**
     * Count the number of GameServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerCountArgs} args - Arguments to filter GameServers to count.
     * @example
     * // Count the number of GameServers
     * const count = await prisma.gameServer.count({
     *   where: {
     *     // ... the filter for the GameServers we want to count
     *   }
     * })
    **/
    count<T extends GameServerCountArgs>(
      args?: Subset<T, GameServerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameServerAggregateArgs>(args: Subset<T, GameServerAggregateArgs>): PrismaPromise<GetGameServerAggregateType<T>>

    /**
     * Group by GameServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameServerGroupByArgs['orderBy'] }
        : { orderBy?: GameServerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameServerGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameServer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameServerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GameServer findUnique
   */
  export type GameServerFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GameServer
     * 
    **/
    select?: GameServerSelect | null
    /**
     * Throw an Error if a GameServer can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GameServer to fetch.
     * 
    **/
    where: GameServerWhereUniqueInput
  }


  /**
   * GameServer findFirst
   */
  export type GameServerFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GameServer
     * 
    **/
    select?: GameServerSelect | null
    /**
     * Throw an Error if a GameServer can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GameServer to fetch.
     * 
    **/
    where?: GameServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameServers to fetch.
     * 
    **/
    orderBy?: Enumerable<GameServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameServers.
     * 
    **/
    cursor?: GameServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameServers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameServers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameServers.
     * 
    **/
    distinct?: Enumerable<GameServerScalarFieldEnum>
  }


  /**
   * GameServer findMany
   */
  export type GameServerFindManyArgs = {
    /**
     * Select specific fields to fetch from the GameServer
     * 
    **/
    select?: GameServerSelect | null
    /**
     * Filter, which GameServers to fetch.
     * 
    **/
    where?: GameServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameServers to fetch.
     * 
    **/
    orderBy?: Enumerable<GameServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameServers.
     * 
    **/
    cursor?: GameServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameServers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameServers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GameServerScalarFieldEnum>
  }


  /**
   * GameServer create
   */
  export type GameServerCreateArgs = {
    /**
     * Select specific fields to fetch from the GameServer
     * 
    **/
    select?: GameServerSelect | null
    /**
     * The data needed to create a GameServer.
     * 
    **/
    data: XOR<GameServerCreateInput, GameServerUncheckedCreateInput>
  }


  /**
   * GameServer createMany
   */
  export type GameServerCreateManyArgs = {
    data: Enumerable<GameServerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GameServer update
   */
  export type GameServerUpdateArgs = {
    /**
     * Select specific fields to fetch from the GameServer
     * 
    **/
    select?: GameServerSelect | null
    /**
     * The data needed to update a GameServer.
     * 
    **/
    data: XOR<GameServerUpdateInput, GameServerUncheckedUpdateInput>
    /**
     * Choose, which GameServer to update.
     * 
    **/
    where: GameServerWhereUniqueInput
  }


  /**
   * GameServer updateMany
   */
  export type GameServerUpdateManyArgs = {
    data: XOR<GameServerUpdateManyMutationInput, GameServerUncheckedUpdateManyInput>
    where?: GameServerWhereInput
  }


  /**
   * GameServer upsert
   */
  export type GameServerUpsertArgs = {
    /**
     * Select specific fields to fetch from the GameServer
     * 
    **/
    select?: GameServerSelect | null
    /**
     * The filter to search for the GameServer to update in case it exists.
     * 
    **/
    where: GameServerWhereUniqueInput
    /**
     * In case the GameServer found by the `where` argument doesn't exist, create a new GameServer with this data.
     * 
    **/
    create: XOR<GameServerCreateInput, GameServerUncheckedCreateInput>
    /**
     * In case the GameServer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GameServerUpdateInput, GameServerUncheckedUpdateInput>
  }


  /**
   * GameServer delete
   */
  export type GameServerDeleteArgs = {
    /**
     * Select specific fields to fetch from the GameServer
     * 
    **/
    select?: GameServerSelect | null
    /**
     * Filter which GameServer to delete.
     * 
    **/
    where: GameServerWhereUniqueInput
  }


  /**
   * GameServer deleteMany
   */
  export type GameServerDeleteManyArgs = {
    where?: GameServerWhereInput
  }


  /**
   * GameServer without action
   */
  export type GameServerArgs = {
    /**
     * Select specific fields to fetch from the GameServer
     * 
    **/
    select?: GameServerSelect | null
  }



  /**
   * Model GameServerData
   */


  export type AggregateGameServerData = {
    _count: GameServerDataCountAggregateOutputType | null
    _avg: GameServerDataAvgAggregateOutputType | null
    _sum: GameServerDataSumAggregateOutputType | null
    _min: GameServerDataMinAggregateOutputType | null
    _max: GameServerDataMaxAggregateOutputType | null
  }

  export type GameServerDataAvgAggregateOutputType = {
    id: number | null
    type: number | null
    assetId: number | null
    totalAmount: number | null
    revenue: number | null
  }

  export type GameServerDataSumAggregateOutputType = {
    id: number | null
    type: number | null
    assetId: number | null
    totalAmount: number | null
    revenue: number | null
  }

  export type GameServerDataMinAggregateOutputType = {
    id: number | null
    type: number | null
    assetId: number | null
    totalAmount: number | null
    revenue: number | null
    createdAt: Date | null
    startedAt: Date | null
    finishedAt: Date | null
  }

  export type GameServerDataMaxAggregateOutputType = {
    id: number | null
    type: number | null
    assetId: number | null
    totalAmount: number | null
    revenue: number | null
    createdAt: Date | null
    startedAt: Date | null
    finishedAt: Date | null
  }

  export type GameServerDataCountAggregateOutputType = {
    id: number
    type: number
    assetId: number
    data: number
    totalAmount: number
    revenue: number
    createdAt: number
    startedAt: number
    finishedAt: number
    _all: number
  }


  export type GameServerDataAvgAggregateInputType = {
    id?: true
    type?: true
    assetId?: true
    totalAmount?: true
    revenue?: true
  }

  export type GameServerDataSumAggregateInputType = {
    id?: true
    type?: true
    assetId?: true
    totalAmount?: true
    revenue?: true
  }

  export type GameServerDataMinAggregateInputType = {
    id?: true
    type?: true
    assetId?: true
    totalAmount?: true
    revenue?: true
    createdAt?: true
    startedAt?: true
    finishedAt?: true
  }

  export type GameServerDataMaxAggregateInputType = {
    id?: true
    type?: true
    assetId?: true
    totalAmount?: true
    revenue?: true
    createdAt?: true
    startedAt?: true
    finishedAt?: true
  }

  export type GameServerDataCountAggregateInputType = {
    id?: true
    type?: true
    assetId?: true
    data?: true
    totalAmount?: true
    revenue?: true
    createdAt?: true
    startedAt?: true
    finishedAt?: true
    _all?: true
  }

  export type GameServerDataAggregateArgs = {
    /**
     * Filter which GameServerData to aggregate.
     * 
    **/
    where?: GameServerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameServerData to fetch.
     * 
    **/
    orderBy?: Enumerable<GameServerDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GameServerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameServerData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameServerData.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameServerData
    **/
    _count?: true | GameServerDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameServerDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameServerDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameServerDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameServerDataMaxAggregateInputType
  }

  export type GetGameServerDataAggregateType<T extends GameServerDataAggregateArgs> = {
        [P in keyof T & keyof AggregateGameServerData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameServerData[P]>
      : GetScalarType<T[P], AggregateGameServerData[P]>
  }


    
    
  export type GameServerDataGroupByArgs = {
    where?: GameServerDataWhereInput
    orderBy?: Enumerable<GameServerDataOrderByWithAggregationInput>
    by: Array<GameServerDataScalarFieldEnum>
    having?: GameServerDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameServerDataCountAggregateInputType | true
    _avg?: GameServerDataAvgAggregateInputType
    _sum?: GameServerDataSumAggregateInputType
    _min?: GameServerDataMinAggregateInputType
    _max?: GameServerDataMaxAggregateInputType
  }


  export type GameServerDataGroupByOutputType = {
    id: number
    type: number
    assetId: number
    data: JsonValue
    totalAmount: number
    revenue: number
    createdAt: Date
    startedAt: Date
    finishedAt: Date
    _count: GameServerDataCountAggregateOutputType | null
    _avg: GameServerDataAvgAggregateOutputType | null
    _sum: GameServerDataSumAggregateOutputType | null
    _min: GameServerDataMinAggregateOutputType | null
    _max: GameServerDataMaxAggregateOutputType | null
  }

  type GetGameServerDataGroupByPayload<T extends GameServerDataGroupByArgs> = Promise<
    Array<
      PickArray<GameServerDataGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof GameServerDataGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], GameServerDataGroupByOutputType[P]> 
            : GetScalarType<T[P], GameServerDataGroupByOutputType[P]>
        }
      > 
    >


  export type GameServerDataSelect = {
    id?: boolean
    type?: boolean
    assetId?: boolean
    data?: boolean
    totalAmount?: boolean
    revenue?: boolean
    createdAt?: boolean
    startedAt?: boolean
    finishedAt?: boolean
  }

  export type GameServerDataGetPayload<
    S extends boolean | null | undefined | GameServerDataArgs,
    U = keyof S
      > = S extends true
        ? GameServerData
    : S extends undefined
    ? never
    : S extends GameServerDataArgs | GameServerDataFindManyArgs
    ?'include' extends U
    ? GameServerData 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof GameServerData ?GameServerData [P]
  : 
     never
  } 
    : GameServerData
  : GameServerData


  type GameServerDataCountArgs = Merge<
    Omit<GameServerDataFindManyArgs, 'select' | 'include'> & {
      select?: GameServerDataCountAggregateInputType | true
    }
  >

  export interface GameServerDataDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GameServerData that matches the filter.
     * @param {GameServerDataFindUniqueArgs} args - Arguments to find a GameServerData
     * @example
     * // Get one GameServerData
     * const gameServerData = await prisma.gameServerData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameServerDataFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GameServerDataFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GameServerData'> extends True ? CheckSelect<T, Prisma__GameServerDataClient<GameServerData>, Prisma__GameServerDataClient<GameServerDataGetPayload<T>>> : CheckSelect<T, Prisma__GameServerDataClient<GameServerData | null >, Prisma__GameServerDataClient<GameServerDataGetPayload<T> | null >>

    /**
     * Find the first GameServerData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerDataFindFirstArgs} args - Arguments to find a GameServerData
     * @example
     * // Get one GameServerData
     * const gameServerData = await prisma.gameServerData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameServerDataFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GameServerDataFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GameServerData'> extends True ? CheckSelect<T, Prisma__GameServerDataClient<GameServerData>, Prisma__GameServerDataClient<GameServerDataGetPayload<T>>> : CheckSelect<T, Prisma__GameServerDataClient<GameServerData | null >, Prisma__GameServerDataClient<GameServerDataGetPayload<T> | null >>

    /**
     * Find zero or more GameServerData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameServerData
     * const gameServerData = await prisma.gameServerData.findMany()
     * 
     * // Get first 10 GameServerData
     * const gameServerData = await prisma.gameServerData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameServerDataWithIdOnly = await prisma.gameServerData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameServerDataFindManyArgs>(
      args?: SelectSubset<T, GameServerDataFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GameServerData>>, PrismaPromise<Array<GameServerDataGetPayload<T>>>>

    /**
     * Create a GameServerData.
     * @param {GameServerDataCreateArgs} args - Arguments to create a GameServerData.
     * @example
     * // Create one GameServerData
     * const GameServerData = await prisma.gameServerData.create({
     *   data: {
     *     // ... data to create a GameServerData
     *   }
     * })
     * 
    **/
    create<T extends GameServerDataCreateArgs>(
      args: SelectSubset<T, GameServerDataCreateArgs>
    ): CheckSelect<T, Prisma__GameServerDataClient<GameServerData>, Prisma__GameServerDataClient<GameServerDataGetPayload<T>>>

    /**
     * Create many GameServerData.
     *     @param {GameServerDataCreateManyArgs} args - Arguments to create many GameServerData.
     *     @example
     *     // Create many GameServerData
     *     const gameServerData = await prisma.gameServerData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameServerDataCreateManyArgs>(
      args?: SelectSubset<T, GameServerDataCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GameServerData.
     * @param {GameServerDataDeleteArgs} args - Arguments to delete one GameServerData.
     * @example
     * // Delete one GameServerData
     * const GameServerData = await prisma.gameServerData.delete({
     *   where: {
     *     // ... filter to delete one GameServerData
     *   }
     * })
     * 
    **/
    delete<T extends GameServerDataDeleteArgs>(
      args: SelectSubset<T, GameServerDataDeleteArgs>
    ): CheckSelect<T, Prisma__GameServerDataClient<GameServerData>, Prisma__GameServerDataClient<GameServerDataGetPayload<T>>>

    /**
     * Update one GameServerData.
     * @param {GameServerDataUpdateArgs} args - Arguments to update one GameServerData.
     * @example
     * // Update one GameServerData
     * const gameServerData = await prisma.gameServerData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameServerDataUpdateArgs>(
      args: SelectSubset<T, GameServerDataUpdateArgs>
    ): CheckSelect<T, Prisma__GameServerDataClient<GameServerData>, Prisma__GameServerDataClient<GameServerDataGetPayload<T>>>

    /**
     * Delete zero or more GameServerData.
     * @param {GameServerDataDeleteManyArgs} args - Arguments to filter GameServerData to delete.
     * @example
     * // Delete a few GameServerData
     * const { count } = await prisma.gameServerData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameServerDataDeleteManyArgs>(
      args?: SelectSubset<T, GameServerDataDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameServerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameServerData
     * const gameServerData = await prisma.gameServerData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameServerDataUpdateManyArgs>(
      args: SelectSubset<T, GameServerDataUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GameServerData.
     * @param {GameServerDataUpsertArgs} args - Arguments to update or create a GameServerData.
     * @example
     * // Update or create a GameServerData
     * const gameServerData = await prisma.gameServerData.upsert({
     *   create: {
     *     // ... data to create a GameServerData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameServerData we want to update
     *   }
     * })
    **/
    upsert<T extends GameServerDataUpsertArgs>(
      args: SelectSubset<T, GameServerDataUpsertArgs>
    ): CheckSelect<T, Prisma__GameServerDataClient<GameServerData>, Prisma__GameServerDataClient<GameServerDataGetPayload<T>>>

    /**
     * Count the number of GameServerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerDataCountArgs} args - Arguments to filter GameServerData to count.
     * @example
     * // Count the number of GameServerData
     * const count = await prisma.gameServerData.count({
     *   where: {
     *     // ... the filter for the GameServerData we want to count
     *   }
     * })
    **/
    count<T extends GameServerDataCountArgs>(
      args?: Subset<T, GameServerDataCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameServerDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameServerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameServerDataAggregateArgs>(args: Subset<T, GameServerDataAggregateArgs>): PrismaPromise<GetGameServerDataAggregateType<T>>

    /**
     * Group by GameServerData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameServerDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameServerDataGroupByArgs['orderBy'] }
        : { orderBy?: GameServerDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameServerDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameServerDataGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameServerData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameServerDataClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GameServerData findUnique
   */
  export type GameServerDataFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GameServerData
     * 
    **/
    select?: GameServerDataSelect | null
    /**
     * Throw an Error if a GameServerData can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GameServerData to fetch.
     * 
    **/
    where: GameServerDataWhereUniqueInput
  }


  /**
   * GameServerData findFirst
   */
  export type GameServerDataFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GameServerData
     * 
    **/
    select?: GameServerDataSelect | null
    /**
     * Throw an Error if a GameServerData can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GameServerData to fetch.
     * 
    **/
    where?: GameServerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameServerData to fetch.
     * 
    **/
    orderBy?: Enumerable<GameServerDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameServerData.
     * 
    **/
    cursor?: GameServerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameServerData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameServerData.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameServerData.
     * 
    **/
    distinct?: Enumerable<GameServerDataScalarFieldEnum>
  }


  /**
   * GameServerData findMany
   */
  export type GameServerDataFindManyArgs = {
    /**
     * Select specific fields to fetch from the GameServerData
     * 
    **/
    select?: GameServerDataSelect | null
    /**
     * Filter, which GameServerData to fetch.
     * 
    **/
    where?: GameServerDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameServerData to fetch.
     * 
    **/
    orderBy?: Enumerable<GameServerDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameServerData.
     * 
    **/
    cursor?: GameServerDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameServerData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameServerData.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GameServerDataScalarFieldEnum>
  }


  /**
   * GameServerData create
   */
  export type GameServerDataCreateArgs = {
    /**
     * Select specific fields to fetch from the GameServerData
     * 
    **/
    select?: GameServerDataSelect | null
    /**
     * The data needed to create a GameServerData.
     * 
    **/
    data: XOR<GameServerDataCreateInput, GameServerDataUncheckedCreateInput>
  }


  /**
   * GameServerData createMany
   */
  export type GameServerDataCreateManyArgs = {
    data: Enumerable<GameServerDataCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GameServerData update
   */
  export type GameServerDataUpdateArgs = {
    /**
     * Select specific fields to fetch from the GameServerData
     * 
    **/
    select?: GameServerDataSelect | null
    /**
     * The data needed to update a GameServerData.
     * 
    **/
    data: XOR<GameServerDataUpdateInput, GameServerDataUncheckedUpdateInput>
    /**
     * Choose, which GameServerData to update.
     * 
    **/
    where: GameServerDataWhereUniqueInput
  }


  /**
   * GameServerData updateMany
   */
  export type GameServerDataUpdateManyArgs = {
    data: XOR<GameServerDataUpdateManyMutationInput, GameServerDataUncheckedUpdateManyInput>
    where?: GameServerDataWhereInput
  }


  /**
   * GameServerData upsert
   */
  export type GameServerDataUpsertArgs = {
    /**
     * Select specific fields to fetch from the GameServerData
     * 
    **/
    select?: GameServerDataSelect | null
    /**
     * The filter to search for the GameServerData to update in case it exists.
     * 
    **/
    where: GameServerDataWhereUniqueInput
    /**
     * In case the GameServerData found by the `where` argument doesn't exist, create a new GameServerData with this data.
     * 
    **/
    create: XOR<GameServerDataCreateInput, GameServerDataUncheckedCreateInput>
    /**
     * In case the GameServerData was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GameServerDataUpdateInput, GameServerDataUncheckedUpdateInput>
  }


  /**
   * GameServerData delete
   */
  export type GameServerDataDeleteArgs = {
    /**
     * Select specific fields to fetch from the GameServerData
     * 
    **/
    select?: GameServerDataSelect | null
    /**
     * Filter which GameServerData to delete.
     * 
    **/
    where: GameServerDataWhereUniqueInput
  }


  /**
   * GameServerData deleteMany
   */
  export type GameServerDataDeleteManyArgs = {
    where?: GameServerDataWhereInput
  }


  /**
   * GameServerData without action
   */
  export type GameServerDataArgs = {
    /**
     * Select specific fields to fetch from the GameServerData
     * 
    **/
    select?: GameServerDataSelect | null
  }



  /**
   * Model GameServerUser
   */


  export type AggregateGameServerUser = {
    _count: GameServerUserCountAggregateOutputType | null
    _avg: GameServerUserAvgAggregateOutputType | null
    _sum: GameServerUserSumAggregateOutputType | null
    _min: GameServerUserMinAggregateOutputType | null
    _max: GameServerUserMaxAggregateOutputType | null
  }

  export type GameServerUserAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    gameServerId: number | null
    assetId: number | null
    status: number | null
    amount: number | null
  }

  export type GameServerUserSumAggregateOutputType = {
    id: number | null
    userId: number | null
    gameServerId: number | null
    assetId: number | null
    status: number | null
    amount: number | null
  }

  export type GameServerUserMinAggregateOutputType = {
    id: number | null
    userId: number | null
    gameServerId: number | null
    assetId: number | null
    status: number | null
    amount: number | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type GameServerUserMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    gameServerId: number | null
    assetId: number | null
    status: number | null
    amount: number | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type GameServerUserCountAggregateOutputType = {
    id: number
    userId: number
    gameServerId: number
    assetId: number
    status: number
    amount: number
    joinedAt: number
    leftAt: number
    _all: number
  }


  export type GameServerUserAvgAggregateInputType = {
    id?: true
    userId?: true
    gameServerId?: true
    assetId?: true
    status?: true
    amount?: true
  }

  export type GameServerUserSumAggregateInputType = {
    id?: true
    userId?: true
    gameServerId?: true
    assetId?: true
    status?: true
    amount?: true
  }

  export type GameServerUserMinAggregateInputType = {
    id?: true
    userId?: true
    gameServerId?: true
    assetId?: true
    status?: true
    amount?: true
    joinedAt?: true
    leftAt?: true
  }

  export type GameServerUserMaxAggregateInputType = {
    id?: true
    userId?: true
    gameServerId?: true
    assetId?: true
    status?: true
    amount?: true
    joinedAt?: true
    leftAt?: true
  }

  export type GameServerUserCountAggregateInputType = {
    id?: true
    userId?: true
    gameServerId?: true
    assetId?: true
    status?: true
    amount?: true
    joinedAt?: true
    leftAt?: true
    _all?: true
  }

  export type GameServerUserAggregateArgs = {
    /**
     * Filter which GameServerUser to aggregate.
     * 
    **/
    where?: GameServerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameServerUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<GameServerUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GameServerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameServerUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameServerUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameServerUsers
    **/
    _count?: true | GameServerUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameServerUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameServerUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameServerUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameServerUserMaxAggregateInputType
  }

  export type GetGameServerUserAggregateType<T extends GameServerUserAggregateArgs> = {
        [P in keyof T & keyof AggregateGameServerUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameServerUser[P]>
      : GetScalarType<T[P], AggregateGameServerUser[P]>
  }


    
    
  export type GameServerUserGroupByArgs = {
    where?: GameServerUserWhereInput
    orderBy?: Enumerable<GameServerUserOrderByWithAggregationInput>
    by: Array<GameServerUserScalarFieldEnum>
    having?: GameServerUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameServerUserCountAggregateInputType | true
    _avg?: GameServerUserAvgAggregateInputType
    _sum?: GameServerUserSumAggregateInputType
    _min?: GameServerUserMinAggregateInputType
    _max?: GameServerUserMaxAggregateInputType
  }


  export type GameServerUserGroupByOutputType = {
    id: number
    userId: number
    gameServerId: number
    assetId: number
    status: number
    amount: number
    joinedAt: Date
    leftAt: Date
    _count: GameServerUserCountAggregateOutputType | null
    _avg: GameServerUserAvgAggregateOutputType | null
    _sum: GameServerUserSumAggregateOutputType | null
    _min: GameServerUserMinAggregateOutputType | null
    _max: GameServerUserMaxAggregateOutputType | null
  }

  type GetGameServerUserGroupByPayload<T extends GameServerUserGroupByArgs> = Promise<
    Array<
      PickArray<GameServerUserGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof GameServerUserGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], GameServerUserGroupByOutputType[P]> 
            : GetScalarType<T[P], GameServerUserGroupByOutputType[P]>
        }
      > 
    >


  export type GameServerUserSelect = {
    id?: boolean
    userId?: boolean
    gameServerId?: boolean
    assetId?: boolean
    status?: boolean
    amount?: boolean
    joinedAt?: boolean
    leftAt?: boolean
  }

  export type GameServerUserGetPayload<
    S extends boolean | null | undefined | GameServerUserArgs,
    U = keyof S
      > = S extends true
        ? GameServerUser
    : S extends undefined
    ? never
    : S extends GameServerUserArgs | GameServerUserFindManyArgs
    ?'include' extends U
    ? GameServerUser 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof GameServerUser ?GameServerUser [P]
  : 
     never
  } 
    : GameServerUser
  : GameServerUser


  type GameServerUserCountArgs = Merge<
    Omit<GameServerUserFindManyArgs, 'select' | 'include'> & {
      select?: GameServerUserCountAggregateInputType | true
    }
  >

  export interface GameServerUserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GameServerUser that matches the filter.
     * @param {GameServerUserFindUniqueArgs} args - Arguments to find a GameServerUser
     * @example
     * // Get one GameServerUser
     * const gameServerUser = await prisma.gameServerUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameServerUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GameServerUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GameServerUser'> extends True ? CheckSelect<T, Prisma__GameServerUserClient<GameServerUser>, Prisma__GameServerUserClient<GameServerUserGetPayload<T>>> : CheckSelect<T, Prisma__GameServerUserClient<GameServerUser | null >, Prisma__GameServerUserClient<GameServerUserGetPayload<T> | null >>

    /**
     * Find the first GameServerUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerUserFindFirstArgs} args - Arguments to find a GameServerUser
     * @example
     * // Get one GameServerUser
     * const gameServerUser = await prisma.gameServerUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameServerUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GameServerUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GameServerUser'> extends True ? CheckSelect<T, Prisma__GameServerUserClient<GameServerUser>, Prisma__GameServerUserClient<GameServerUserGetPayload<T>>> : CheckSelect<T, Prisma__GameServerUserClient<GameServerUser | null >, Prisma__GameServerUserClient<GameServerUserGetPayload<T> | null >>

    /**
     * Find zero or more GameServerUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameServerUsers
     * const gameServerUsers = await prisma.gameServerUser.findMany()
     * 
     * // Get first 10 GameServerUsers
     * const gameServerUsers = await prisma.gameServerUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameServerUserWithIdOnly = await prisma.gameServerUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameServerUserFindManyArgs>(
      args?: SelectSubset<T, GameServerUserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GameServerUser>>, PrismaPromise<Array<GameServerUserGetPayload<T>>>>

    /**
     * Create a GameServerUser.
     * @param {GameServerUserCreateArgs} args - Arguments to create a GameServerUser.
     * @example
     * // Create one GameServerUser
     * const GameServerUser = await prisma.gameServerUser.create({
     *   data: {
     *     // ... data to create a GameServerUser
     *   }
     * })
     * 
    **/
    create<T extends GameServerUserCreateArgs>(
      args: SelectSubset<T, GameServerUserCreateArgs>
    ): CheckSelect<T, Prisma__GameServerUserClient<GameServerUser>, Prisma__GameServerUserClient<GameServerUserGetPayload<T>>>

    /**
     * Create many GameServerUsers.
     *     @param {GameServerUserCreateManyArgs} args - Arguments to create many GameServerUsers.
     *     @example
     *     // Create many GameServerUsers
     *     const gameServerUser = await prisma.gameServerUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameServerUserCreateManyArgs>(
      args?: SelectSubset<T, GameServerUserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GameServerUser.
     * @param {GameServerUserDeleteArgs} args - Arguments to delete one GameServerUser.
     * @example
     * // Delete one GameServerUser
     * const GameServerUser = await prisma.gameServerUser.delete({
     *   where: {
     *     // ... filter to delete one GameServerUser
     *   }
     * })
     * 
    **/
    delete<T extends GameServerUserDeleteArgs>(
      args: SelectSubset<T, GameServerUserDeleteArgs>
    ): CheckSelect<T, Prisma__GameServerUserClient<GameServerUser>, Prisma__GameServerUserClient<GameServerUserGetPayload<T>>>

    /**
     * Update one GameServerUser.
     * @param {GameServerUserUpdateArgs} args - Arguments to update one GameServerUser.
     * @example
     * // Update one GameServerUser
     * const gameServerUser = await prisma.gameServerUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameServerUserUpdateArgs>(
      args: SelectSubset<T, GameServerUserUpdateArgs>
    ): CheckSelect<T, Prisma__GameServerUserClient<GameServerUser>, Prisma__GameServerUserClient<GameServerUserGetPayload<T>>>

    /**
     * Delete zero or more GameServerUsers.
     * @param {GameServerUserDeleteManyArgs} args - Arguments to filter GameServerUsers to delete.
     * @example
     * // Delete a few GameServerUsers
     * const { count } = await prisma.gameServerUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameServerUserDeleteManyArgs>(
      args?: SelectSubset<T, GameServerUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameServerUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameServerUsers
     * const gameServerUser = await prisma.gameServerUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameServerUserUpdateManyArgs>(
      args: SelectSubset<T, GameServerUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GameServerUser.
     * @param {GameServerUserUpsertArgs} args - Arguments to update or create a GameServerUser.
     * @example
     * // Update or create a GameServerUser
     * const gameServerUser = await prisma.gameServerUser.upsert({
     *   create: {
     *     // ... data to create a GameServerUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameServerUser we want to update
     *   }
     * })
    **/
    upsert<T extends GameServerUserUpsertArgs>(
      args: SelectSubset<T, GameServerUserUpsertArgs>
    ): CheckSelect<T, Prisma__GameServerUserClient<GameServerUser>, Prisma__GameServerUserClient<GameServerUserGetPayload<T>>>

    /**
     * Count the number of GameServerUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerUserCountArgs} args - Arguments to filter GameServerUsers to count.
     * @example
     * // Count the number of GameServerUsers
     * const count = await prisma.gameServerUser.count({
     *   where: {
     *     // ... the filter for the GameServerUsers we want to count
     *   }
     * })
    **/
    count<T extends GameServerUserCountArgs>(
      args?: Subset<T, GameServerUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameServerUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameServerUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameServerUserAggregateArgs>(args: Subset<T, GameServerUserAggregateArgs>): PrismaPromise<GetGameServerUserAggregateType<T>>

    /**
     * Group by GameServerUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameServerUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameServerUserGroupByArgs['orderBy'] }
        : { orderBy?: GameServerUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameServerUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameServerUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameServerUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameServerUserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GameServerUser findUnique
   */
  export type GameServerUserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GameServerUser
     * 
    **/
    select?: GameServerUserSelect | null
    /**
     * Throw an Error if a GameServerUser can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GameServerUser to fetch.
     * 
    **/
    where: GameServerUserWhereUniqueInput
  }


  /**
   * GameServerUser findFirst
   */
  export type GameServerUserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GameServerUser
     * 
    **/
    select?: GameServerUserSelect | null
    /**
     * Throw an Error if a GameServerUser can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GameServerUser to fetch.
     * 
    **/
    where?: GameServerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameServerUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<GameServerUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameServerUsers.
     * 
    **/
    cursor?: GameServerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameServerUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameServerUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameServerUsers.
     * 
    **/
    distinct?: Enumerable<GameServerUserScalarFieldEnum>
  }


  /**
   * GameServerUser findMany
   */
  export type GameServerUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the GameServerUser
     * 
    **/
    select?: GameServerUserSelect | null
    /**
     * Filter, which GameServerUsers to fetch.
     * 
    **/
    where?: GameServerUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameServerUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<GameServerUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameServerUsers.
     * 
    **/
    cursor?: GameServerUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameServerUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameServerUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GameServerUserScalarFieldEnum>
  }


  /**
   * GameServerUser create
   */
  export type GameServerUserCreateArgs = {
    /**
     * Select specific fields to fetch from the GameServerUser
     * 
    **/
    select?: GameServerUserSelect | null
    /**
     * The data needed to create a GameServerUser.
     * 
    **/
    data: XOR<GameServerUserCreateInput, GameServerUserUncheckedCreateInput>
  }


  /**
   * GameServerUser createMany
   */
  export type GameServerUserCreateManyArgs = {
    data: Enumerable<GameServerUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GameServerUser update
   */
  export type GameServerUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the GameServerUser
     * 
    **/
    select?: GameServerUserSelect | null
    /**
     * The data needed to update a GameServerUser.
     * 
    **/
    data: XOR<GameServerUserUpdateInput, GameServerUserUncheckedUpdateInput>
    /**
     * Choose, which GameServerUser to update.
     * 
    **/
    where: GameServerUserWhereUniqueInput
  }


  /**
   * GameServerUser updateMany
   */
  export type GameServerUserUpdateManyArgs = {
    data: XOR<GameServerUserUpdateManyMutationInput, GameServerUserUncheckedUpdateManyInput>
    where?: GameServerUserWhereInput
  }


  /**
   * GameServerUser upsert
   */
  export type GameServerUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the GameServerUser
     * 
    **/
    select?: GameServerUserSelect | null
    /**
     * The filter to search for the GameServerUser to update in case it exists.
     * 
    **/
    where: GameServerUserWhereUniqueInput
    /**
     * In case the GameServerUser found by the `where` argument doesn't exist, create a new GameServerUser with this data.
     * 
    **/
    create: XOR<GameServerUserCreateInput, GameServerUserUncheckedCreateInput>
    /**
     * In case the GameServerUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GameServerUserUpdateInput, GameServerUserUncheckedUpdateInput>
  }


  /**
   * GameServerUser delete
   */
  export type GameServerUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the GameServerUser
     * 
    **/
    select?: GameServerUserSelect | null
    /**
     * Filter which GameServerUser to delete.
     * 
    **/
    where: GameServerUserWhereUniqueInput
  }


  /**
   * GameServerUser deleteMany
   */
  export type GameServerUserDeleteManyArgs = {
    where?: GameServerUserWhereInput
  }


  /**
   * GameServerUser without action
   */
  export type GameServerUserArgs = {
    /**
     * Select specific fields to fetch from the GameServerUser
     * 
    **/
    select?: GameServerUserSelect | null
  }



  /**
   * Model GameServerUserData
   */


  export type AggregateGameServerUserData = {
    _count: GameServerUserDataCountAggregateOutputType | null
    _avg: GameServerUserDataAvgAggregateOutputType | null
    _sum: GameServerUserDataSumAggregateOutputType | null
    _min: GameServerUserDataMinAggregateOutputType | null
    _max: GameServerUserDataMaxAggregateOutputType | null
  }

  export type GameServerUserDataAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    gameServerId: number | null
    gameType: number | null
    assetId: number | null
    amount: number | null
    reward: number | null
  }

  export type GameServerUserDataSumAggregateOutputType = {
    id: number | null
    userId: number | null
    gameServerId: number | null
    gameType: number | null
    assetId: number | null
    amount: number | null
    reward: number | null
  }

  export type GameServerUserDataMinAggregateOutputType = {
    id: number | null
    userId: number | null
    gameServerId: number | null
    gameType: number | null
    assetId: number | null
    amount: number | null
    reward: number | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type GameServerUserDataMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    gameServerId: number | null
    gameType: number | null
    assetId: number | null
    amount: number | null
    reward: number | null
    joinedAt: Date | null
    leftAt: Date | null
  }

  export type GameServerUserDataCountAggregateOutputType = {
    id: number
    userId: number
    gameServerId: number
    gameType: number
    assetId: number
    amount: number
    reward: number
    joinedAt: number
    leftAt: number
    _all: number
  }


  export type GameServerUserDataAvgAggregateInputType = {
    id?: true
    userId?: true
    gameServerId?: true
    gameType?: true
    assetId?: true
    amount?: true
    reward?: true
  }

  export type GameServerUserDataSumAggregateInputType = {
    id?: true
    userId?: true
    gameServerId?: true
    gameType?: true
    assetId?: true
    amount?: true
    reward?: true
  }

  export type GameServerUserDataMinAggregateInputType = {
    id?: true
    userId?: true
    gameServerId?: true
    gameType?: true
    assetId?: true
    amount?: true
    reward?: true
    joinedAt?: true
    leftAt?: true
  }

  export type GameServerUserDataMaxAggregateInputType = {
    id?: true
    userId?: true
    gameServerId?: true
    gameType?: true
    assetId?: true
    amount?: true
    reward?: true
    joinedAt?: true
    leftAt?: true
  }

  export type GameServerUserDataCountAggregateInputType = {
    id?: true
    userId?: true
    gameServerId?: true
    gameType?: true
    assetId?: true
    amount?: true
    reward?: true
    joinedAt?: true
    leftAt?: true
    _all?: true
  }

  export type GameServerUserDataAggregateArgs = {
    /**
     * Filter which GameServerUserData to aggregate.
     * 
    **/
    where?: GameServerUserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameServerUserData to fetch.
     * 
    **/
    orderBy?: Enumerable<GameServerUserDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GameServerUserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameServerUserData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameServerUserData.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameServerUserData
    **/
    _count?: true | GameServerUserDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameServerUserDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameServerUserDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameServerUserDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameServerUserDataMaxAggregateInputType
  }

  export type GetGameServerUserDataAggregateType<T extends GameServerUserDataAggregateArgs> = {
        [P in keyof T & keyof AggregateGameServerUserData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameServerUserData[P]>
      : GetScalarType<T[P], AggregateGameServerUserData[P]>
  }


    
    
  export type GameServerUserDataGroupByArgs = {
    where?: GameServerUserDataWhereInput
    orderBy?: Enumerable<GameServerUserDataOrderByWithAggregationInput>
    by: Array<GameServerUserDataScalarFieldEnum>
    having?: GameServerUserDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameServerUserDataCountAggregateInputType | true
    _avg?: GameServerUserDataAvgAggregateInputType
    _sum?: GameServerUserDataSumAggregateInputType
    _min?: GameServerUserDataMinAggregateInputType
    _max?: GameServerUserDataMaxAggregateInputType
  }


  export type GameServerUserDataGroupByOutputType = {
    id: number
    userId: number
    gameServerId: number
    gameType: number
    assetId: number
    amount: number
    reward: number
    joinedAt: Date
    leftAt: Date
    _count: GameServerUserDataCountAggregateOutputType | null
    _avg: GameServerUserDataAvgAggregateOutputType | null
    _sum: GameServerUserDataSumAggregateOutputType | null
    _min: GameServerUserDataMinAggregateOutputType | null
    _max: GameServerUserDataMaxAggregateOutputType | null
  }

  type GetGameServerUserDataGroupByPayload<T extends GameServerUserDataGroupByArgs> = Promise<
    Array<
      PickArray<GameServerUserDataGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof GameServerUserDataGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], GameServerUserDataGroupByOutputType[P]> 
            : GetScalarType<T[P], GameServerUserDataGroupByOutputType[P]>
        }
      > 
    >


  export type GameServerUserDataSelect = {
    id?: boolean
    userId?: boolean
    gameServerId?: boolean
    gameType?: boolean
    assetId?: boolean
    amount?: boolean
    reward?: boolean
    joinedAt?: boolean
    leftAt?: boolean
  }

  export type GameServerUserDataGetPayload<
    S extends boolean | null | undefined | GameServerUserDataArgs,
    U = keyof S
      > = S extends true
        ? GameServerUserData
    : S extends undefined
    ? never
    : S extends GameServerUserDataArgs | GameServerUserDataFindManyArgs
    ?'include' extends U
    ? GameServerUserData 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof GameServerUserData ?GameServerUserData [P]
  : 
     never
  } 
    : GameServerUserData
  : GameServerUserData


  type GameServerUserDataCountArgs = Merge<
    Omit<GameServerUserDataFindManyArgs, 'select' | 'include'> & {
      select?: GameServerUserDataCountAggregateInputType | true
    }
  >

  export interface GameServerUserDataDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GameServerUserData that matches the filter.
     * @param {GameServerUserDataFindUniqueArgs} args - Arguments to find a GameServerUserData
     * @example
     * // Get one GameServerUserData
     * const gameServerUserData = await prisma.gameServerUserData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameServerUserDataFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GameServerUserDataFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GameServerUserData'> extends True ? CheckSelect<T, Prisma__GameServerUserDataClient<GameServerUserData>, Prisma__GameServerUserDataClient<GameServerUserDataGetPayload<T>>> : CheckSelect<T, Prisma__GameServerUserDataClient<GameServerUserData | null >, Prisma__GameServerUserDataClient<GameServerUserDataGetPayload<T> | null >>

    /**
     * Find the first GameServerUserData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerUserDataFindFirstArgs} args - Arguments to find a GameServerUserData
     * @example
     * // Get one GameServerUserData
     * const gameServerUserData = await prisma.gameServerUserData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameServerUserDataFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GameServerUserDataFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GameServerUserData'> extends True ? CheckSelect<T, Prisma__GameServerUserDataClient<GameServerUserData>, Prisma__GameServerUserDataClient<GameServerUserDataGetPayload<T>>> : CheckSelect<T, Prisma__GameServerUserDataClient<GameServerUserData | null >, Prisma__GameServerUserDataClient<GameServerUserDataGetPayload<T> | null >>

    /**
     * Find zero or more GameServerUserData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerUserDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameServerUserData
     * const gameServerUserData = await prisma.gameServerUserData.findMany()
     * 
     * // Get first 10 GameServerUserData
     * const gameServerUserData = await prisma.gameServerUserData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameServerUserDataWithIdOnly = await prisma.gameServerUserData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameServerUserDataFindManyArgs>(
      args?: SelectSubset<T, GameServerUserDataFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GameServerUserData>>, PrismaPromise<Array<GameServerUserDataGetPayload<T>>>>

    /**
     * Create a GameServerUserData.
     * @param {GameServerUserDataCreateArgs} args - Arguments to create a GameServerUserData.
     * @example
     * // Create one GameServerUserData
     * const GameServerUserData = await prisma.gameServerUserData.create({
     *   data: {
     *     // ... data to create a GameServerUserData
     *   }
     * })
     * 
    **/
    create<T extends GameServerUserDataCreateArgs>(
      args: SelectSubset<T, GameServerUserDataCreateArgs>
    ): CheckSelect<T, Prisma__GameServerUserDataClient<GameServerUserData>, Prisma__GameServerUserDataClient<GameServerUserDataGetPayload<T>>>

    /**
     * Create many GameServerUserData.
     *     @param {GameServerUserDataCreateManyArgs} args - Arguments to create many GameServerUserData.
     *     @example
     *     // Create many GameServerUserData
     *     const gameServerUserData = await prisma.gameServerUserData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameServerUserDataCreateManyArgs>(
      args?: SelectSubset<T, GameServerUserDataCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GameServerUserData.
     * @param {GameServerUserDataDeleteArgs} args - Arguments to delete one GameServerUserData.
     * @example
     * // Delete one GameServerUserData
     * const GameServerUserData = await prisma.gameServerUserData.delete({
     *   where: {
     *     // ... filter to delete one GameServerUserData
     *   }
     * })
     * 
    **/
    delete<T extends GameServerUserDataDeleteArgs>(
      args: SelectSubset<T, GameServerUserDataDeleteArgs>
    ): CheckSelect<T, Prisma__GameServerUserDataClient<GameServerUserData>, Prisma__GameServerUserDataClient<GameServerUserDataGetPayload<T>>>

    /**
     * Update one GameServerUserData.
     * @param {GameServerUserDataUpdateArgs} args - Arguments to update one GameServerUserData.
     * @example
     * // Update one GameServerUserData
     * const gameServerUserData = await prisma.gameServerUserData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameServerUserDataUpdateArgs>(
      args: SelectSubset<T, GameServerUserDataUpdateArgs>
    ): CheckSelect<T, Prisma__GameServerUserDataClient<GameServerUserData>, Prisma__GameServerUserDataClient<GameServerUserDataGetPayload<T>>>

    /**
     * Delete zero or more GameServerUserData.
     * @param {GameServerUserDataDeleteManyArgs} args - Arguments to filter GameServerUserData to delete.
     * @example
     * // Delete a few GameServerUserData
     * const { count } = await prisma.gameServerUserData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameServerUserDataDeleteManyArgs>(
      args?: SelectSubset<T, GameServerUserDataDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameServerUserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerUserDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameServerUserData
     * const gameServerUserData = await prisma.gameServerUserData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameServerUserDataUpdateManyArgs>(
      args: SelectSubset<T, GameServerUserDataUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GameServerUserData.
     * @param {GameServerUserDataUpsertArgs} args - Arguments to update or create a GameServerUserData.
     * @example
     * // Update or create a GameServerUserData
     * const gameServerUserData = await prisma.gameServerUserData.upsert({
     *   create: {
     *     // ... data to create a GameServerUserData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameServerUserData we want to update
     *   }
     * })
    **/
    upsert<T extends GameServerUserDataUpsertArgs>(
      args: SelectSubset<T, GameServerUserDataUpsertArgs>
    ): CheckSelect<T, Prisma__GameServerUserDataClient<GameServerUserData>, Prisma__GameServerUserDataClient<GameServerUserDataGetPayload<T>>>

    /**
     * Count the number of GameServerUserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerUserDataCountArgs} args - Arguments to filter GameServerUserData to count.
     * @example
     * // Count the number of GameServerUserData
     * const count = await prisma.gameServerUserData.count({
     *   where: {
     *     // ... the filter for the GameServerUserData we want to count
     *   }
     * })
    **/
    count<T extends GameServerUserDataCountArgs>(
      args?: Subset<T, GameServerUserDataCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameServerUserDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameServerUserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerUserDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameServerUserDataAggregateArgs>(args: Subset<T, GameServerUserDataAggregateArgs>): PrismaPromise<GetGameServerUserDataAggregateType<T>>

    /**
     * Group by GameServerUserData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameServerUserDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameServerUserDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameServerUserDataGroupByArgs['orderBy'] }
        : { orderBy?: GameServerUserDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameServerUserDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameServerUserDataGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameServerUserData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameServerUserDataClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GameServerUserData findUnique
   */
  export type GameServerUserDataFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GameServerUserData
     * 
    **/
    select?: GameServerUserDataSelect | null
    /**
     * Throw an Error if a GameServerUserData can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GameServerUserData to fetch.
     * 
    **/
    where: GameServerUserDataWhereUniqueInput
  }


  /**
   * GameServerUserData findFirst
   */
  export type GameServerUserDataFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GameServerUserData
     * 
    **/
    select?: GameServerUserDataSelect | null
    /**
     * Throw an Error if a GameServerUserData can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GameServerUserData to fetch.
     * 
    **/
    where?: GameServerUserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameServerUserData to fetch.
     * 
    **/
    orderBy?: Enumerable<GameServerUserDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameServerUserData.
     * 
    **/
    cursor?: GameServerUserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameServerUserData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameServerUserData.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameServerUserData.
     * 
    **/
    distinct?: Enumerable<GameServerUserDataScalarFieldEnum>
  }


  /**
   * GameServerUserData findMany
   */
  export type GameServerUserDataFindManyArgs = {
    /**
     * Select specific fields to fetch from the GameServerUserData
     * 
    **/
    select?: GameServerUserDataSelect | null
    /**
     * Filter, which GameServerUserData to fetch.
     * 
    **/
    where?: GameServerUserDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameServerUserData to fetch.
     * 
    **/
    orderBy?: Enumerable<GameServerUserDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameServerUserData.
     * 
    **/
    cursor?: GameServerUserDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameServerUserData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameServerUserData.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GameServerUserDataScalarFieldEnum>
  }


  /**
   * GameServerUserData create
   */
  export type GameServerUserDataCreateArgs = {
    /**
     * Select specific fields to fetch from the GameServerUserData
     * 
    **/
    select?: GameServerUserDataSelect | null
    /**
     * The data needed to create a GameServerUserData.
     * 
    **/
    data: XOR<GameServerUserDataCreateInput, GameServerUserDataUncheckedCreateInput>
  }


  /**
   * GameServerUserData createMany
   */
  export type GameServerUserDataCreateManyArgs = {
    data: Enumerable<GameServerUserDataCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GameServerUserData update
   */
  export type GameServerUserDataUpdateArgs = {
    /**
     * Select specific fields to fetch from the GameServerUserData
     * 
    **/
    select?: GameServerUserDataSelect | null
    /**
     * The data needed to update a GameServerUserData.
     * 
    **/
    data: XOR<GameServerUserDataUpdateInput, GameServerUserDataUncheckedUpdateInput>
    /**
     * Choose, which GameServerUserData to update.
     * 
    **/
    where: GameServerUserDataWhereUniqueInput
  }


  /**
   * GameServerUserData updateMany
   */
  export type GameServerUserDataUpdateManyArgs = {
    data: XOR<GameServerUserDataUpdateManyMutationInput, GameServerUserDataUncheckedUpdateManyInput>
    where?: GameServerUserDataWhereInput
  }


  /**
   * GameServerUserData upsert
   */
  export type GameServerUserDataUpsertArgs = {
    /**
     * Select specific fields to fetch from the GameServerUserData
     * 
    **/
    select?: GameServerUserDataSelect | null
    /**
     * The filter to search for the GameServerUserData to update in case it exists.
     * 
    **/
    where: GameServerUserDataWhereUniqueInput
    /**
     * In case the GameServerUserData found by the `where` argument doesn't exist, create a new GameServerUserData with this data.
     * 
    **/
    create: XOR<GameServerUserDataCreateInput, GameServerUserDataUncheckedCreateInput>
    /**
     * In case the GameServerUserData was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GameServerUserDataUpdateInput, GameServerUserDataUncheckedUpdateInput>
  }


  /**
   * GameServerUserData delete
   */
  export type GameServerUserDataDeleteArgs = {
    /**
     * Select specific fields to fetch from the GameServerUserData
     * 
    **/
    select?: GameServerUserDataSelect | null
    /**
     * Filter which GameServerUserData to delete.
     * 
    **/
    where: GameServerUserDataWhereUniqueInput
  }


  /**
   * GameServerUserData deleteMany
   */
  export type GameServerUserDataDeleteManyArgs = {
    where?: GameServerUserDataWhereInput
  }


  /**
   * GameServerUserData without action
   */
  export type GameServerUserDataArgs = {
    /**
     * Select specific fields to fetch from the GameServerUserData
     * 
    **/
    select?: GameServerUserDataSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DemoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    deleted: 'deleted',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DemoScalarFieldEnum = (typeof DemoScalarFieldEnum)[keyof typeof DemoScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    password: 'password',
    username: 'username',
    description: 'description',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    image: 'image',
    password: 'password',
    username: 'username',
    deleted: 'deleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    balance: 'balance',
    pending: 'pending',
    enabled: 'enabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    seed: 'seed',
    mnemonic: 'mnemonic',
    deleted: 'deleted',
    userId: 'userId'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    description: 'description',
    balance: 'balance',
    pending: 'pending',
    enabled: 'enabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleted: 'deleted',
    walletId: 'walletId'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const WalletTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WalletTypeScalarFieldEnum = (typeof WalletTypeScalarFieldEnum)[keyof typeof WalletTypeScalarFieldEnum]


  export const TransactionHistoryScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    senderAccountId: 'senderAccountId',
    receiverId: 'receiverId',
    receiverAccountId: 'receiverAccountId',
    assetId: 'assetId',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type TransactionHistoryScalarFieldEnum = (typeof TransactionHistoryScalarFieldEnum)[keyof typeof TransactionHistoryScalarFieldEnum]


  export const GameServerScalarFieldEnum: {
    id: 'id',
    type: 'type',
    assetId: 'assetId',
    data: 'data',
    totalAmount: 'totalAmount',
    revenue: 'revenue',
    createdAt: 'createdAt',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt'
  };

  export type GameServerScalarFieldEnum = (typeof GameServerScalarFieldEnum)[keyof typeof GameServerScalarFieldEnum]


  export const GameServerDataScalarFieldEnum: {
    id: 'id',
    type: 'type',
    assetId: 'assetId',
    data: 'data',
    totalAmount: 'totalAmount',
    revenue: 'revenue',
    createdAt: 'createdAt',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt'
  };

  export type GameServerDataScalarFieldEnum = (typeof GameServerDataScalarFieldEnum)[keyof typeof GameServerDataScalarFieldEnum]


  export const GameServerUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gameServerId: 'gameServerId',
    assetId: 'assetId',
    status: 'status',
    amount: 'amount',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt'
  };

  export type GameServerUserScalarFieldEnum = (typeof GameServerUserScalarFieldEnum)[keyof typeof GameServerUserScalarFieldEnum]


  export const GameServerUserDataScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gameServerId: 'gameServerId',
    gameType: 'gameType',
    assetId: 'assetId',
    amount: 'amount',
    reward: 'reward',
    joinedAt: 'joinedAt',
    leftAt: 'leftAt'
  };

  export type GameServerUserDataScalarFieldEnum = (typeof GameServerUserDataScalarFieldEnum)[keyof typeof GameServerUserDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: 'JsonNull'
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: 'DbNull',
    JsonNull: 'JsonNull',
    AnyNull: 'AnyNull'
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Deep Input Types
   */


  export type DemoWhereInput = {
    AND?: Enumerable<DemoWhereInput>
    OR?: Enumerable<DemoWhereInput>
    NOT?: Enumerable<DemoWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    deleted?: BoolFilter | boolean
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DemoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    deleted?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemoWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type DemoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    deleted?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DemoCountOrderByAggregateInput
    _avg?: DemoAvgOrderByAggregateInput
    _max?: DemoMaxOrderByAggregateInput
    _min?: DemoMinOrderByAggregateInput
    _sum?: DemoSumOrderByAggregateInput
  }

  export type DemoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DemoScalarWhereWithAggregatesInput>
    OR?: Enumerable<DemoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DemoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    deleted?: BoolWithAggregatesFilter | boolean
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TenantWhereInput = {
    AND?: Enumerable<TenantWhereInput>
    OR?: Enumerable<TenantWhereInput>
    NOT?: Enumerable<TenantWhereInput>
    id?: IntFilter | number
    name?: StringNullableFilter | string | null
    email?: StringFilter | string
    image?: StringNullableFilter | string | null
    password?: StringNullableFilter | string | null
    username?: StringNullableFilter | string | null
    description?: StringFilter | string
    deleted?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    description?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantWhereUniqueInput = {
    id?: number
    name?: string
    email?: string
    username?: string
  }

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    description?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _avg?: TenantAvgOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
    _sum?: TenantSumOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TenantScalarWhereWithAggregatesInput>
    OR?: Enumerable<TenantScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TenantScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    password?: StringNullableWithAggregatesFilter | string | null
    username?: StringNullableWithAggregatesFilter | string | null
    description?: StringWithAggregatesFilter | string
    deleted?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    image?: StringNullableFilter | string | null
    password?: StringNullableFilter | string | null
    username?: StringNullableFilter | string | null
    deleted?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    wallets?: WalletListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallets?: WalletOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
    username?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    password?: StringNullableWithAggregatesFilter | string | null
    username?: StringNullableWithAggregatesFilter | string | null
    deleted?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type WalletWhereInput = {
    AND?: Enumerable<WalletWhereInput>
    OR?: Enumerable<WalletWhereInput>
    NOT?: Enumerable<WalletWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    balance?: IntFilter | number
    pending?: IntFilter | number
    enabled?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    seed?: StringNullableFilter | string | null
    mnemonic?: StringNullableFilter | string | null
    deleted?: BoolFilter | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    accounts?: AccountListRelationFilter
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seed?: SortOrder
    mnemonic?: SortOrder
    deleted?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type WalletWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seed?: SortOrder
    mnemonic?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WalletScalarWhereWithAggregatesInput>
    OR?: Enumerable<WalletScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WalletScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    balance?: IntWithAggregatesFilter | number
    pending?: IntWithAggregatesFilter | number
    enabled?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    seed?: StringNullableWithAggregatesFilter | string | null
    mnemonic?: StringNullableWithAggregatesFilter | string | null
    deleted?: BoolWithAggregatesFilter | boolean
    userId?: IntWithAggregatesFilter | number
  }

  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    address?: StringFilter | string
    description?: StringFilter | string
    balance?: IntFilter | number
    pending?: IntFilter | number
    enabled?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    deleted?: BoolFilter | boolean
    wallet?: XOR<WalletRelationFilter, WalletWhereInput>
    walletId?: IntFilter | number
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    wallet?: WalletOrderByWithRelationInput
    walletId?: SortOrder
  }

  export type AccountWhereUniqueInput = {
    id?: number
    name?: string
    address?: string
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    walletId?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    balance?: IntWithAggregatesFilter | number
    pending?: IntWithAggregatesFilter | number
    enabled?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    deleted?: BoolWithAggregatesFilter | boolean
    walletId?: IntWithAggregatesFilter | number
  }

  export type WalletTypeWhereInput = {
    AND?: Enumerable<WalletTypeWhereInput>
    OR?: Enumerable<WalletTypeWhereInput>
    NOT?: Enumerable<WalletTypeWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    type?: IntFilter | number
    description?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type WalletTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletTypeWhereUniqueInput = {
    id?: number
    name?: string
    type?: number
  }

  export type WalletTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletTypeCountOrderByAggregateInput
    _avg?: WalletTypeAvgOrderByAggregateInput
    _max?: WalletTypeMaxOrderByAggregateInput
    _min?: WalletTypeMinOrderByAggregateInput
    _sum?: WalletTypeSumOrderByAggregateInput
  }

  export type WalletTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WalletTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<WalletTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WalletTypeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    type?: IntWithAggregatesFilter | number
    description?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TransactionHistoryWhereInput = {
    AND?: Enumerable<TransactionHistoryWhereInput>
    OR?: Enumerable<TransactionHistoryWhereInput>
    NOT?: Enumerable<TransactionHistoryWhereInput>
    id?: IntFilter | number
    senderId?: IntFilter | number
    senderAccountId?: IntFilter | number
    receiverId?: IntFilter | number
    receiverAccountId?: IntFilter | number
    assetId?: IntFilter | number
    amount?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type TransactionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    senderAccountId?: SortOrder
    receiverId?: SortOrder
    receiverAccountId?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionHistoryWhereUniqueInput = {
    id?: number
  }

  export type TransactionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    senderAccountId?: SortOrder
    receiverId?: SortOrder
    receiverAccountId?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionHistoryCountOrderByAggregateInput
    _avg?: TransactionHistoryAvgOrderByAggregateInput
    _max?: TransactionHistoryMaxOrderByAggregateInput
    _min?: TransactionHistoryMinOrderByAggregateInput
    _sum?: TransactionHistorySumOrderByAggregateInput
  }

  export type TransactionHistoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TransactionHistoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<TransactionHistoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TransactionHistoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    senderId?: IntWithAggregatesFilter | number
    senderAccountId?: IntWithAggregatesFilter | number
    receiverId?: IntWithAggregatesFilter | number
    receiverAccountId?: IntWithAggregatesFilter | number
    assetId?: IntWithAggregatesFilter | number
    amount?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GameServerWhereInput = {
    AND?: Enumerable<GameServerWhereInput>
    OR?: Enumerable<GameServerWhereInput>
    NOT?: Enumerable<GameServerWhereInput>
    id?: IntFilter | number
    type?: IntFilter | number
    assetId?: IntFilter | number
    data?: JsonFilter
    totalAmount?: IntFilter | number
    revenue?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    startedAt?: DateTimeFilter | Date | string
    finishedAt?: DateTimeFilter | Date | string
  }

  export type GameServerOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    data?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type GameServerWhereUniqueInput = {
    id?: number
  }

  export type GameServerOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    data?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    _count?: GameServerCountOrderByAggregateInput
    _avg?: GameServerAvgOrderByAggregateInput
    _max?: GameServerMaxOrderByAggregateInput
    _min?: GameServerMinOrderByAggregateInput
    _sum?: GameServerSumOrderByAggregateInput
  }

  export type GameServerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GameServerScalarWhereWithAggregatesInput>
    OR?: Enumerable<GameServerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GameServerScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    type?: IntWithAggregatesFilter | number
    assetId?: IntWithAggregatesFilter | number
    data?: JsonWithAggregatesFilter
    totalAmount?: IntWithAggregatesFilter | number
    revenue?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    startedAt?: DateTimeWithAggregatesFilter | Date | string
    finishedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GameServerDataWhereInput = {
    AND?: Enumerable<GameServerDataWhereInput>
    OR?: Enumerable<GameServerDataWhereInput>
    NOT?: Enumerable<GameServerDataWhereInput>
    id?: IntFilter | number
    type?: IntFilter | number
    assetId?: IntFilter | number
    data?: JsonFilter
    totalAmount?: IntFilter | number
    revenue?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    startedAt?: DateTimeFilter | Date | string
    finishedAt?: DateTimeFilter | Date | string
  }

  export type GameServerDataOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    data?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type GameServerDataWhereUniqueInput = {
    id?: number
  }

  export type GameServerDataOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    data?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    _count?: GameServerDataCountOrderByAggregateInput
    _avg?: GameServerDataAvgOrderByAggregateInput
    _max?: GameServerDataMaxOrderByAggregateInput
    _min?: GameServerDataMinOrderByAggregateInput
    _sum?: GameServerDataSumOrderByAggregateInput
  }

  export type GameServerDataScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GameServerDataScalarWhereWithAggregatesInput>
    OR?: Enumerable<GameServerDataScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GameServerDataScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    type?: IntWithAggregatesFilter | number
    assetId?: IntWithAggregatesFilter | number
    data?: JsonWithAggregatesFilter
    totalAmount?: IntWithAggregatesFilter | number
    revenue?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    startedAt?: DateTimeWithAggregatesFilter | Date | string
    finishedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GameServerUserWhereInput = {
    AND?: Enumerable<GameServerUserWhereInput>
    OR?: Enumerable<GameServerUserWhereInput>
    NOT?: Enumerable<GameServerUserWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    gameServerId?: IntFilter | number
    assetId?: IntFilter | number
    status?: IntFilter | number
    amount?: IntFilter | number
    joinedAt?: DateTimeFilter | Date | string
    leftAt?: DateTimeFilter | Date | string
  }

  export type GameServerUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    assetId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type GameServerUserWhereUniqueInput = {
    id?: number
  }

  export type GameServerUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    assetId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    _count?: GameServerUserCountOrderByAggregateInput
    _avg?: GameServerUserAvgOrderByAggregateInput
    _max?: GameServerUserMaxOrderByAggregateInput
    _min?: GameServerUserMinOrderByAggregateInput
    _sum?: GameServerUserSumOrderByAggregateInput
  }

  export type GameServerUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GameServerUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<GameServerUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GameServerUserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    gameServerId?: IntWithAggregatesFilter | number
    assetId?: IntWithAggregatesFilter | number
    status?: IntWithAggregatesFilter | number
    amount?: IntWithAggregatesFilter | number
    joinedAt?: DateTimeWithAggregatesFilter | Date | string
    leftAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GameServerUserDataWhereInput = {
    AND?: Enumerable<GameServerUserDataWhereInput>
    OR?: Enumerable<GameServerUserDataWhereInput>
    NOT?: Enumerable<GameServerUserDataWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    gameServerId?: IntFilter | number
    gameType?: IntFilter | number
    assetId?: IntFilter | number
    amount?: IntFilter | number
    reward?: IntFilter | number
    joinedAt?: DateTimeFilter | Date | string
    leftAt?: DateTimeFilter | Date | string
  }

  export type GameServerUserDataOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    gameType?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
    reward?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type GameServerUserDataWhereUniqueInput = {
    id?: number
  }

  export type GameServerUserDataOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    gameType?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
    reward?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
    _count?: GameServerUserDataCountOrderByAggregateInput
    _avg?: GameServerUserDataAvgOrderByAggregateInput
    _max?: GameServerUserDataMaxOrderByAggregateInput
    _min?: GameServerUserDataMinOrderByAggregateInput
    _sum?: GameServerUserDataSumOrderByAggregateInput
  }

  export type GameServerUserDataScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GameServerUserDataScalarWhereWithAggregatesInput>
    OR?: Enumerable<GameServerUserDataScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GameServerUserDataScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    gameServerId?: IntWithAggregatesFilter | number
    gameType?: IntWithAggregatesFilter | number
    assetId?: IntWithAggregatesFilter | number
    amount?: IntWithAggregatesFilter | number
    reward?: IntWithAggregatesFilter | number
    joinedAt?: DateTimeWithAggregatesFilter | Date | string
    leftAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DemoCreateInput = {
    name: string
    deleted: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemoUncheckedCreateInput = {
    id?: number
    name: string
    deleted: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoCreateManyInput = {
    id?: number
    name: string
    deleted: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DemoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateInput = {
    name?: string | null
    email: string
    image?: string | null
    password?: string | null
    username?: string | null
    description: string
    deleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    image?: string | null
    password?: string | null
    username?: string | null
    description: string
    deleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    image?: string | null
    password?: string | null
    username?: string | null
    description: string
    deleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    image?: string | null
    password?: string | null
    username?: string | null
    deleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wallets?: WalletCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    image?: string | null
    password?: string | null
    username?: string | null
    deleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    image?: string | null
    password?: string | null
    username?: string | null
    deleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateInput = {
    name: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seed?: string | null
    mnemonic?: string | null
    deleted: boolean
    user: UserCreateNestedOneWithoutWalletsInput
    accounts?: AccountCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seed?: string | null
    mnemonic?: string | null
    deleted: boolean
    userId: number
    accounts?: AccountUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    mnemonic?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutWalletsInput
    accounts?: AccountUpdateManyWithoutWalletInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    mnemonic?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutWalletInput
  }

  export type WalletCreateManyInput = {
    id?: number
    name: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seed?: string | null
    mnemonic?: string | null
    deleted: boolean
    userId: number
  }

  export type WalletUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    mnemonic?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    mnemonic?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AccountCreateInput = {
    name: string
    address: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted: boolean
    wallet: WalletCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted: boolean
    walletId: number
  }

  export type AccountUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    wallet?: WalletUpdateOneRequiredWithoutAccountsInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    walletId?: IntFieldUpdateOperationsInput | number
  }

  export type AccountCreateManyInput = {
    id?: number
    name: string
    address: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted: boolean
    walletId: number
  }

  export type AccountUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
    walletId?: IntFieldUpdateOperationsInput | number
  }

  export type WalletTypeCreateInput = {
    name: string
    type: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletTypeUncheckedCreateInput = {
    id?: number
    name: string
    type: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTypeCreateManyInput = {
    id?: number
    name: string
    type: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionHistoryCreateInput = {
    senderId: number
    senderAccountId: number
    receiverId: number
    receiverAccountId: number
    assetId: number
    amount: number
    createdAt?: Date | string
  }

  export type TransactionHistoryUncheckedCreateInput = {
    id?: number
    senderId: number
    senderAccountId: number
    receiverId: number
    receiverAccountId: number
    assetId: number
    amount: number
    createdAt?: Date | string
  }

  export type TransactionHistoryUpdateInput = {
    senderId?: IntFieldUpdateOperationsInput | number
    senderAccountId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    receiverAccountId?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    senderAccountId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    receiverAccountId?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionHistoryCreateManyInput = {
    id?: number
    senderId: number
    senderAccountId: number
    receiverId: number
    receiverAccountId: number
    assetId: number
    amount: number
    createdAt?: Date | string
  }

  export type TransactionHistoryUpdateManyMutationInput = {
    senderId?: IntFieldUpdateOperationsInput | number
    senderAccountId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    receiverAccountId?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    senderAccountId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    receiverAccountId?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerCreateInput = {
    type: number
    assetId: number
    data: JsonNullValueInput | InputJsonValue
    totalAmount: number
    revenue: number
    createdAt?: Date | string
    startedAt?: Date | string
    finishedAt?: Date | string
  }

  export type GameServerUncheckedCreateInput = {
    id?: number
    type: number
    assetId: number
    data: JsonNullValueInput | InputJsonValue
    totalAmount: number
    revenue: number
    createdAt?: Date | string
    startedAt?: Date | string
    finishedAt?: Date | string
  }

  export type GameServerUpdateInput = {
    type?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    totalAmount?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    totalAmount?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerCreateManyInput = {
    id?: number
    type: number
    assetId: number
    data: JsonNullValueInput | InputJsonValue
    totalAmount: number
    revenue: number
    createdAt?: Date | string
    startedAt?: Date | string
    finishedAt?: Date | string
  }

  export type GameServerUpdateManyMutationInput = {
    type?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    totalAmount?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    totalAmount?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerDataCreateInput = {
    type: number
    assetId: number
    data: JsonNullValueInput | InputJsonValue
    totalAmount: number
    revenue: number
    createdAt?: Date | string
    startedAt?: Date | string
    finishedAt?: Date | string
  }

  export type GameServerDataUncheckedCreateInput = {
    id?: number
    type: number
    assetId: number
    data: JsonNullValueInput | InputJsonValue
    totalAmount: number
    revenue: number
    createdAt?: Date | string
    startedAt?: Date | string
    finishedAt?: Date | string
  }

  export type GameServerDataUpdateInput = {
    type?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    totalAmount?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    totalAmount?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerDataCreateManyInput = {
    id?: number
    type: number
    assetId: number
    data: JsonNullValueInput | InputJsonValue
    totalAmount: number
    revenue: number
    createdAt?: Date | string
    startedAt?: Date | string
    finishedAt?: Date | string
  }

  export type GameServerDataUpdateManyMutationInput = {
    type?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    totalAmount?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    totalAmount?: IntFieldUpdateOperationsInput | number
    revenue?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerUserCreateInput = {
    userId: number
    gameServerId: number
    assetId: number
    status: number
    amount: number
    joinedAt?: Date | string
    leftAt?: Date | string
  }

  export type GameServerUserUncheckedCreateInput = {
    id?: number
    userId: number
    gameServerId: number
    assetId: number
    status: number
    amount: number
    joinedAt?: Date | string
    leftAt?: Date | string
  }

  export type GameServerUserUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    gameServerId?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gameServerId?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerUserCreateManyInput = {
    id?: number
    userId: number
    gameServerId: number
    assetId: number
    status: number
    amount: number
    joinedAt?: Date | string
    leftAt?: Date | string
  }

  export type GameServerUserUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    gameServerId?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gameServerId?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerUserDataCreateInput = {
    userId: number
    gameServerId: number
    gameType: number
    assetId: number
    amount: number
    reward: number
    joinedAt?: Date | string
    leftAt?: Date | string
  }

  export type GameServerUserDataUncheckedCreateInput = {
    id?: number
    userId: number
    gameServerId: number
    gameType: number
    assetId: number
    amount: number
    reward: number
    joinedAt?: Date | string
    leftAt?: Date | string
  }

  export type GameServerUserDataUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    gameServerId?: IntFieldUpdateOperationsInput | number
    gameType?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    reward?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerUserDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gameServerId?: IntFieldUpdateOperationsInput | number
    gameType?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    reward?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerUserDataCreateManyInput = {
    id?: number
    userId: number
    gameServerId: number
    gameType: number
    assetId: number
    amount: number
    reward: number
    joinedAt?: Date | string
    leftAt?: Date | string
  }

  export type GameServerUserDataUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    gameServerId?: IntFieldUpdateOperationsInput | number
    gameType?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    reward?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameServerUserDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gameServerId?: IntFieldUpdateOperationsInput | number
    gameType?: IntFieldUpdateOperationsInput | number
    assetId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    reward?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leftAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DemoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deleted?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DemoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deleted?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deleted?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DemoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    description?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    description?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    description?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WalletListRelationFilter = {
    every?: WalletWhereInput
    some?: WalletWhereInput
    none?: WalletWhereInput
  }

  export type WalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    image?: SortOrder
    password?: SortOrder
    username?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seed?: SortOrder
    mnemonic?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    userId?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seed?: SortOrder
    mnemonic?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seed?: SortOrder
    mnemonic?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    userId?: SortOrder
  }

  export type WalletRelationFilter = {
    is?: WalletWhereInput
    isNot?: WalletWhereInput
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    walletId?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    walletId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    walletId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleted?: SortOrder
    walletId?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    pending?: SortOrder
    walletId?: SortOrder
  }

  export type WalletTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type WalletTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletTypeSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type TransactionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    senderAccountId?: SortOrder
    receiverId?: SortOrder
    receiverAccountId?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    senderAccountId?: SortOrder
    receiverId?: SortOrder
    receiverAccountId?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
  }

  export type TransactionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    senderAccountId?: SortOrder
    receiverId?: SortOrder
    receiverAccountId?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    senderAccountId?: SortOrder
    receiverId?: SortOrder
    receiverAccountId?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionHistorySumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    senderAccountId?: SortOrder
    receiverId?: SortOrder
    receiverAccountId?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type GameServerCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    data?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type GameServerAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
  }

  export type GameServerMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type GameServerMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type GameServerSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type GameServerDataCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    data?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type GameServerDataAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
  }

  export type GameServerDataMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type GameServerDataMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type GameServerDataSumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    assetId?: SortOrder
    totalAmount?: SortOrder
    revenue?: SortOrder
  }

  export type GameServerUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    assetId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type GameServerUserAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    assetId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
  }

  export type GameServerUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    assetId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type GameServerUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    assetId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type GameServerUserSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    assetId?: SortOrder
    status?: SortOrder
    amount?: SortOrder
  }

  export type GameServerUserDataCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    gameType?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
    reward?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type GameServerUserDataAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    gameType?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
    reward?: SortOrder
  }

  export type GameServerUserDataMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    gameType?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
    reward?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type GameServerUserDataMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    gameType?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
    reward?: SortOrder
    joinedAt?: SortOrder
    leftAt?: SortOrder
  }

  export type GameServerUserDataSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameServerId?: SortOrder
    gameType?: SortOrder
    assetId?: SortOrder
    amount?: SortOrder
    reward?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WalletCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WalletCreateWithoutUserInput>, Enumerable<WalletUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WalletCreateOrConnectWithoutUserInput>
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: Enumerable<WalletWhereUniqueInput>
  }

  export type WalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WalletCreateWithoutUserInput>, Enumerable<WalletUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WalletCreateOrConnectWithoutUserInput>
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: Enumerable<WalletWhereUniqueInput>
  }

  export type WalletUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<WalletCreateWithoutUserInput>, Enumerable<WalletUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WalletCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WalletUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: Enumerable<WalletWhereUniqueInput>
    set?: Enumerable<WalletWhereUniqueInput>
    disconnect?: Enumerable<WalletWhereUniqueInput>
    delete?: Enumerable<WalletWhereUniqueInput>
    update?: Enumerable<WalletUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WalletUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WalletScalarWhereInput>
  }

  export type WalletUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<WalletCreateWithoutUserInput>, Enumerable<WalletUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WalletCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WalletUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: Enumerable<WalletWhereUniqueInput>
    set?: Enumerable<WalletWhereUniqueInput>
    disconnect?: Enumerable<WalletWhereUniqueInput>
    delete?: Enumerable<WalletWhereUniqueInput>
    update?: Enumerable<WalletUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WalletUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WalletScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutWalletsInput = {
    create?: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletsInput
    connect?: UserWhereUniqueInput
  }

  export type AccountCreateNestedManyWithoutWalletInput = {
    create?: XOR<Enumerable<AccountCreateWithoutWalletInput>, Enumerable<AccountUncheckedCreateWithoutWalletInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutWalletInput>
    createMany?: AccountCreateManyWalletInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<Enumerable<AccountCreateWithoutWalletInput>, Enumerable<AccountUncheckedCreateWithoutWalletInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutWalletInput>
    createMany?: AccountCreateManyWalletInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutWalletsInput = {
    create?: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletsInput
    upsert?: UserUpsertWithoutWalletsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutWalletsInput, UserUncheckedUpdateWithoutWalletsInput>
  }

  export type AccountUpdateManyWithoutWalletInput = {
    create?: XOR<Enumerable<AccountCreateWithoutWalletInput>, Enumerable<AccountUncheckedCreateWithoutWalletInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutWalletInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutWalletInput>
    createMany?: AccountCreateManyWalletInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutWalletInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutWalletInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutWalletInput = {
    create?: XOR<Enumerable<AccountCreateWithoutWalletInput>, Enumerable<AccountUncheckedCreateWithoutWalletInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutWalletInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutWalletInput>
    createMany?: AccountCreateManyWalletInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutWalletInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutWalletInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type WalletCreateNestedOneWithoutAccountsInput = {
    create?: XOR<WalletCreateWithoutAccountsInput, WalletUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutAccountsInput
    connect?: WalletWhereUniqueInput
  }

  export type WalletUpdateOneRequiredWithoutAccountsInput = {
    create?: XOR<WalletCreateWithoutAccountsInput, WalletUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutAccountsInput
    upsert?: WalletUpsertWithoutAccountsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<WalletUpdateWithoutAccountsInput, WalletUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: JsonNullValueFilter | InputJsonValue
    not?: JsonNullValueFilter | InputJsonValue
  }

  export type WalletCreateWithoutUserInput = {
    name: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seed?: string | null
    mnemonic?: string | null
    deleted: boolean
    accounts?: AccountCreateNestedManyWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seed?: string | null
    mnemonic?: string | null
    deleted: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutWalletInput
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletCreateManyUserInputEnvelope = {
    data: Enumerable<WalletCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type WalletUpsertWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletUpdateWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateManyWithWhereWithoutUserInput = {
    where: WalletScalarWhereInput
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyWithoutWalletsInput>
  }

  export type WalletScalarWhereInput = {
    AND?: Enumerable<WalletScalarWhereInput>
    OR?: Enumerable<WalletScalarWhereInput>
    NOT?: Enumerable<WalletScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    balance?: IntFilter | number
    pending?: IntFilter | number
    enabled?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    seed?: StringNullableFilter | string | null
    mnemonic?: StringNullableFilter | string | null
    deleted?: BoolFilter | boolean
    userId?: IntFilter | number
  }

  export type UserCreateWithoutWalletsInput = {
    email: string
    image?: string | null
    password?: string | null
    username?: string | null
    deleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutWalletsInput = {
    id?: number
    email: string
    image?: string | null
    password?: string | null
    username?: string | null
    deleted: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutWalletsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
  }

  export type AccountCreateWithoutWalletInput = {
    name: string
    address: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted: boolean
  }

  export type AccountUncheckedCreateWithoutWalletInput = {
    id?: number
    name: string
    address: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted: boolean
  }

  export type AccountCreateOrConnectWithoutWalletInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutWalletInput, AccountUncheckedCreateWithoutWalletInput>
  }

  export type AccountCreateManyWalletInputEnvelope = {
    data: Enumerable<AccountCreateManyWalletInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWalletsInput = {
    update: XOR<UserUpdateWithoutWalletsInput, UserUncheckedUpdateWithoutWalletsInput>
    create: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
  }

  export type UserUpdateWithoutWalletsInput = {
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutWalletsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutWalletInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutWalletInput, AccountUncheckedUpdateWithoutWalletInput>
    create: XOR<AccountCreateWithoutWalletInput, AccountUncheckedCreateWithoutWalletInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutWalletInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutWalletInput, AccountUncheckedUpdateWithoutWalletInput>
  }

  export type AccountUpdateManyWithWhereWithoutWalletInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    address?: StringFilter | string
    description?: StringFilter | string
    balance?: IntFilter | number
    pending?: IntFilter | number
    enabled?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    deleted?: BoolFilter | boolean
    walletId?: IntFilter | number
  }

  export type WalletCreateWithoutAccountsInput = {
    name: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seed?: string | null
    mnemonic?: string | null
    deleted: boolean
    user: UserCreateNestedOneWithoutWalletsInput
  }

  export type WalletUncheckedCreateWithoutAccountsInput = {
    id?: number
    name: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seed?: string | null
    mnemonic?: string | null
    deleted: boolean
    userId: number
  }

  export type WalletCreateOrConnectWithoutAccountsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutAccountsInput, WalletUncheckedCreateWithoutAccountsInput>
  }

  export type WalletUpsertWithoutAccountsInput = {
    update: XOR<WalletUpdateWithoutAccountsInput, WalletUncheckedUpdateWithoutAccountsInput>
    create: XOR<WalletCreateWithoutAccountsInput, WalletUncheckedCreateWithoutAccountsInput>
  }

  export type WalletUpdateWithoutAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    mnemonic?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutWalletsInput
  }

  export type WalletUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    mnemonic?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WalletCreateManyUserInput = {
    id?: number
    name: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seed?: string | null
    mnemonic?: string | null
    deleted: boolean
  }

  export type WalletUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    mnemonic?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutWalletInput
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    mnemonic?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutWalletInput
  }

  export type WalletUncheckedUpdateManyWithoutWalletsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seed?: NullableStringFieldUpdateOperationsInput | string | null
    mnemonic?: NullableStringFieldUpdateOperationsInput | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountCreateManyWalletInput = {
    id?: number
    name: string
    address: string
    description: string
    balance: number
    pending: number
    enabled: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deleted: boolean
  }

  export type AccountUpdateWithoutWalletInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUncheckedUpdateWithoutWalletInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}