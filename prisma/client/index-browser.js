
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.2.1
 * Query Engine version: b71d8cb16c4ddc7e3e9821f42fd09b0f82d7934c
 */
Prisma.prismaVersion = {
  client: "3.2.1",
  engine: "b71d8cb16c4ddc7e3e9821f42fd09b0f82d7934c"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.DemoScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  deleted: 'deleted',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TenantScalarFieldEnum = makeEnum({
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
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  image: 'image',
  password: 'password',
  username: 'username',
  deleted: 'deleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WalletScalarFieldEnum = makeEnum({
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
});

exports.Prisma.AccountScalarFieldEnum = makeEnum({
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
});

exports.Prisma.WalletTypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  type: 'type',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TransactionHistoryScalarFieldEnum = makeEnum({
  id: 'id',
  senderId: 'senderId',
  senderAccountId: 'senderAccountId',
  receiverId: 'receiverId',
  receiverAccountId: 'receiverAccountId',
  assetId: 'assetId',
  amount: 'amount',
  createdAt: 'createdAt'
});

exports.Prisma.GameServerScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  assetId: 'assetId',
  data: 'data',
  totalAmount: 'totalAmount',
  revenue: 'revenue',
  createdAt: 'createdAt',
  startedAt: 'startedAt',
  finishedAt: 'finishedAt'
});

exports.Prisma.GameServerDataScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  assetId: 'assetId',
  data: 'data',
  totalAmount: 'totalAmount',
  revenue: 'revenue',
  createdAt: 'createdAt',
  startedAt: 'startedAt',
  finishedAt: 'finishedAt'
});

exports.Prisma.GameServerUserScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  gameServerId: 'gameServerId',
  assetId: 'assetId',
  status: 'status',
  amount: 'amount',
  joinedAt: 'joinedAt',
  leftAt: 'leftAt'
});

exports.Prisma.GameServerUserDataScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  gameServerId: 'gameServerId',
  gameType: 'gameType',
  assetId: 'assetId',
  amount: 'amount',
  reward: 'reward',
  joinedAt: 'joinedAt',
  leftAt: 'leftAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: 'JsonNull'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull',
  AnyNull: 'AnyNull'
});


exports.Prisma.ModelName = makeEnum({
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
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
