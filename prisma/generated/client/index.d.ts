
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Association
 * 
 */
export type Association = $Result.DefaultSelection<Prisma.$AssociationPayload>
/**
 * Model SocialLink
 * 
 */
export type SocialLink = $Result.DefaultSelection<Prisma.$SocialLinkPayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model Organiser
 * 
 */
export type Organiser = $Result.DefaultSelection<Prisma.$OrganiserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SocialPlatform: {
  WEBSITE: 'WEBSITE',
  TWITTER: 'TWITTER',
  FACEBOOK: 'FACEBOOK',
  INSTAGRAM: 'INSTAGRAM',
  MASTODON: 'MASTODON',
  OTHER: 'OTHER'
};

export type SocialPlatform = (typeof SocialPlatform)[keyof typeof SocialPlatform]


export const GlobalRole: {
  ORGANISER: 'ORGANISER',
  ADMIN: 'ADMIN'
};

export type GlobalRole = (typeof GlobalRole)[keyof typeof GlobalRole]

}

export type SocialPlatform = $Enums.SocialPlatform

export const SocialPlatform: typeof $Enums.SocialPlatform

export type GlobalRole = $Enums.GlobalRole

export const GlobalRole: typeof $Enums.GlobalRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Associations
 * const associations = await prisma.association.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Associations
   * const associations = await prisma.association.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.association`: Exposes CRUD operations for the **Association** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Associations
    * const associations = await prisma.association.findMany()
    * ```
    */
  get association(): Prisma.AssociationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialLink`: Exposes CRUD operations for the **SocialLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialLinks
    * const socialLinks = await prisma.socialLink.findMany()
    * ```
    */
  get socialLink(): Prisma.SocialLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organiser`: Exposes CRUD operations for the **Organiser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organisers
    * const organisers = await prisma.organiser.findMany()
    * ```
    */
  get organiser(): Prisma.OrganiserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Association: 'Association',
    SocialLink: 'SocialLink',
    Article: 'Article',
    Organiser: 'Organiser',
    RefreshToken: 'RefreshToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "association" | "socialLink" | "article" | "organiser" | "refreshToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Association: {
        payload: Prisma.$AssociationPayload<ExtArgs>
        fields: Prisma.AssociationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssociationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssociationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          findFirst: {
            args: Prisma.AssociationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssociationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          findMany: {
            args: Prisma.AssociationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>[]
          }
          create: {
            args: Prisma.AssociationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          createMany: {
            args: Prisma.AssociationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssociationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>[]
          }
          delete: {
            args: Prisma.AssociationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          update: {
            args: Prisma.AssociationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          deleteMany: {
            args: Prisma.AssociationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssociationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssociationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>[]
          }
          upsert: {
            args: Prisma.AssociationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          aggregate: {
            args: Prisma.AssociationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssociation>
          }
          groupBy: {
            args: Prisma.AssociationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssociationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssociationCountArgs<ExtArgs>
            result: $Utils.Optional<AssociationCountAggregateOutputType> | number
          }
        }
      }
      SocialLink: {
        payload: Prisma.$SocialLinkPayload<ExtArgs>
        fields: Prisma.SocialLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findFirst: {
            args: Prisma.SocialLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findMany: {
            args: Prisma.SocialLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          create: {
            args: Prisma.SocialLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          createMany: {
            args: Prisma.SocialLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          delete: {
            args: Prisma.SocialLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          update: {
            args: Prisma.SocialLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          deleteMany: {
            args: Prisma.SocialLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          upsert: {
            args: Prisma.SocialLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          aggregate: {
            args: Prisma.SocialLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialLink>
          }
          groupBy: {
            args: Prisma.SocialLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialLinkCountArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      Organiser: {
        payload: Prisma.$OrganiserPayload<ExtArgs>
        fields: Prisma.OrganiserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganiserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganiserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganiserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganiserPayload>
          }
          findFirst: {
            args: Prisma.OrganiserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganiserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganiserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganiserPayload>
          }
          findMany: {
            args: Prisma.OrganiserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganiserPayload>[]
          }
          create: {
            args: Prisma.OrganiserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganiserPayload>
          }
          createMany: {
            args: Prisma.OrganiserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganiserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganiserPayload>[]
          }
          delete: {
            args: Prisma.OrganiserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganiserPayload>
          }
          update: {
            args: Prisma.OrganiserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganiserPayload>
          }
          deleteMany: {
            args: Prisma.OrganiserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganiserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganiserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganiserPayload>[]
          }
          upsert: {
            args: Prisma.OrganiserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganiserPayload>
          }
          aggregate: {
            args: Prisma.OrganiserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganiser>
          }
          groupBy: {
            args: Prisma.OrganiserGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganiserGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganiserCountArgs<ExtArgs>
            result: $Utils.Optional<OrganiserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    association?: AssociationOmit
    socialLink?: SocialLinkOmit
    article?: ArticleOmit
    organiser?: OrganiserOmit
    refreshToken?: RefreshTokenOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AssociationCountOutputType
   */

  export type AssociationCountOutputType = {
    socialLinks: number
    articles: number
  }

  export type AssociationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialLinks?: boolean | AssociationCountOutputTypeCountSocialLinksArgs
    articles?: boolean | AssociationCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssociationCountOutputType
     */
    select?: AssociationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeCountSocialLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
  }

  /**
   * AssociationCountOutputType without action
   */
  export type AssociationCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }


  /**
   * Count Type OrganiserCountOutputType
   */

  export type OrganiserCountOutputType = {
    tokens: number
  }

  export type OrganiserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | OrganiserCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * OrganiserCountOutputType without action
   */
  export type OrganiserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganiserCountOutputType
     */
    select?: OrganiserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganiserCountOutputType without action
   */
  export type OrganiserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Association
   */

  export type AggregateAssociation = {
    _count: AssociationCountAggregateOutputType | null
    _min: AssociationMinAggregateOutputType | null
    _max: AssociationMaxAggregateOutputType | null
  }

  export type AssociationMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    contactEmail: string | null
    phone: string | null
    website: string | null
    logoUrl: string | null
    updatedAt: Date | null
  }

  export type AssociationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    contactEmail: string | null
    phone: string | null
    website: string | null
    logoUrl: string | null
    updatedAt: Date | null
  }

  export type AssociationCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    contactEmail: number
    phone: number
    website: number
    logoUrl: number
    updatedAt: number
    _all: number
  }


  export type AssociationMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    contactEmail?: true
    phone?: true
    website?: true
    logoUrl?: true
    updatedAt?: true
  }

  export type AssociationMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    contactEmail?: true
    phone?: true
    website?: true
    logoUrl?: true
    updatedAt?: true
  }

  export type AssociationCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    contactEmail?: true
    phone?: true
    website?: true
    logoUrl?: true
    updatedAt?: true
    _all?: true
  }

  export type AssociationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Association to aggregate.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Associations
    **/
    _count?: true | AssociationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssociationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssociationMaxAggregateInputType
  }

  export type GetAssociationAggregateType<T extends AssociationAggregateArgs> = {
        [P in keyof T & keyof AggregateAssociation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssociation[P]>
      : GetScalarType<T[P], AggregateAssociation[P]>
  }




  export type AssociationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssociationWhereInput
    orderBy?: AssociationOrderByWithAggregationInput | AssociationOrderByWithAggregationInput[]
    by: AssociationScalarFieldEnum[] | AssociationScalarFieldEnum
    having?: AssociationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssociationCountAggregateInputType | true
    _min?: AssociationMinAggregateInputType
    _max?: AssociationMaxAggregateInputType
  }

  export type AssociationGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string
    contactEmail: string
    phone: string | null
    website: string | null
    logoUrl: string | null
    updatedAt: Date
    _count: AssociationCountAggregateOutputType | null
    _min: AssociationMinAggregateOutputType | null
    _max: AssociationMaxAggregateOutputType | null
  }

  type GetAssociationGroupByPayload<T extends AssociationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssociationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssociationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssociationGroupByOutputType[P]>
            : GetScalarType<T[P], AssociationGroupByOutputType[P]>
        }
      >
    >


  export type AssociationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    contactEmail?: boolean
    phone?: boolean
    website?: boolean
    logoUrl?: boolean
    updatedAt?: boolean
    socialLinks?: boolean | Association$socialLinksArgs<ExtArgs>
    articles?: boolean | Association$articlesArgs<ExtArgs>
    organiser?: boolean | Association$organiserArgs<ExtArgs>
    _count?: boolean | AssociationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association"]>

  export type AssociationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    contactEmail?: boolean
    phone?: boolean
    website?: boolean
    logoUrl?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["association"]>

  export type AssociationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    contactEmail?: boolean
    phone?: boolean
    website?: boolean
    logoUrl?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["association"]>

  export type AssociationSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    contactEmail?: boolean
    phone?: boolean
    website?: boolean
    logoUrl?: boolean
    updatedAt?: boolean
  }

  export type AssociationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "contactEmail" | "phone" | "website" | "logoUrl" | "updatedAt", ExtArgs["result"]["association"]>
  export type AssociationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialLinks?: boolean | Association$socialLinksArgs<ExtArgs>
    articles?: boolean | Association$articlesArgs<ExtArgs>
    organiser?: boolean | Association$organiserArgs<ExtArgs>
    _count?: boolean | AssociationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssociationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AssociationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssociationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Association"
    objects: {
      socialLinks: Prisma.$SocialLinkPayload<ExtArgs>[]
      articles: Prisma.$ArticlePayload<ExtArgs>[]
      organiser: Prisma.$OrganiserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string
      contactEmail: string
      phone: string | null
      website: string | null
      logoUrl: string | null
      updatedAt: Date
    }, ExtArgs["result"]["association"]>
    composites: {}
  }

  type AssociationGetPayload<S extends boolean | null | undefined | AssociationDefaultArgs> = $Result.GetResult<Prisma.$AssociationPayload, S>

  type AssociationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssociationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssociationCountAggregateInputType | true
    }

  export interface AssociationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Association'], meta: { name: 'Association' } }
    /**
     * Find zero or one Association that matches the filter.
     * @param {AssociationFindUniqueArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssociationFindUniqueArgs>(args: SelectSubset<T, AssociationFindUniqueArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Association that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssociationFindUniqueOrThrowArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssociationFindUniqueOrThrowArgs>(args: SelectSubset<T, AssociationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindFirstArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssociationFindFirstArgs>(args?: SelectSubset<T, AssociationFindFirstArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindFirstOrThrowArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssociationFindFirstOrThrowArgs>(args?: SelectSubset<T, AssociationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Associations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Associations
     * const associations = await prisma.association.findMany()
     * 
     * // Get first 10 Associations
     * const associations = await prisma.association.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const associationWithIdOnly = await prisma.association.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssociationFindManyArgs>(args?: SelectSubset<T, AssociationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Association.
     * @param {AssociationCreateArgs} args - Arguments to create a Association.
     * @example
     * // Create one Association
     * const Association = await prisma.association.create({
     *   data: {
     *     // ... data to create a Association
     *   }
     * })
     * 
     */
    create<T extends AssociationCreateArgs>(args: SelectSubset<T, AssociationCreateArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Associations.
     * @param {AssociationCreateManyArgs} args - Arguments to create many Associations.
     * @example
     * // Create many Associations
     * const association = await prisma.association.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssociationCreateManyArgs>(args?: SelectSubset<T, AssociationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Associations and returns the data saved in the database.
     * @param {AssociationCreateManyAndReturnArgs} args - Arguments to create many Associations.
     * @example
     * // Create many Associations
     * const association = await prisma.association.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Associations and only return the `id`
     * const associationWithIdOnly = await prisma.association.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssociationCreateManyAndReturnArgs>(args?: SelectSubset<T, AssociationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Association.
     * @param {AssociationDeleteArgs} args - Arguments to delete one Association.
     * @example
     * // Delete one Association
     * const Association = await prisma.association.delete({
     *   where: {
     *     // ... filter to delete one Association
     *   }
     * })
     * 
     */
    delete<T extends AssociationDeleteArgs>(args: SelectSubset<T, AssociationDeleteArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Association.
     * @param {AssociationUpdateArgs} args - Arguments to update one Association.
     * @example
     * // Update one Association
     * const association = await prisma.association.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssociationUpdateArgs>(args: SelectSubset<T, AssociationUpdateArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Associations.
     * @param {AssociationDeleteManyArgs} args - Arguments to filter Associations to delete.
     * @example
     * // Delete a few Associations
     * const { count } = await prisma.association.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssociationDeleteManyArgs>(args?: SelectSubset<T, AssociationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Associations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Associations
     * const association = await prisma.association.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssociationUpdateManyArgs>(args: SelectSubset<T, AssociationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Associations and returns the data updated in the database.
     * @param {AssociationUpdateManyAndReturnArgs} args - Arguments to update many Associations.
     * @example
     * // Update many Associations
     * const association = await prisma.association.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Associations and only return the `id`
     * const associationWithIdOnly = await prisma.association.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssociationUpdateManyAndReturnArgs>(args: SelectSubset<T, AssociationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Association.
     * @param {AssociationUpsertArgs} args - Arguments to update or create a Association.
     * @example
     * // Update or create a Association
     * const association = await prisma.association.upsert({
     *   create: {
     *     // ... data to create a Association
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Association we want to update
     *   }
     * })
     */
    upsert<T extends AssociationUpsertArgs>(args: SelectSubset<T, AssociationUpsertArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Associations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationCountArgs} args - Arguments to filter Associations to count.
     * @example
     * // Count the number of Associations
     * const count = await prisma.association.count({
     *   where: {
     *     // ... the filter for the Associations we want to count
     *   }
     * })
    **/
    count<T extends AssociationCountArgs>(
      args?: Subset<T, AssociationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssociationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Association.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssociationAggregateArgs>(args: Subset<T, AssociationAggregateArgs>): Prisma.PrismaPromise<GetAssociationAggregateType<T>>

    /**
     * Group by Association.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationGroupByArgs} args - Group by arguments.
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
      T extends AssociationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssociationGroupByArgs['orderBy'] }
        : { orderBy?: AssociationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AssociationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssociationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Association model
   */
  readonly fields: AssociationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Association.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssociationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    socialLinks<T extends Association$socialLinksArgs<ExtArgs> = {}>(args?: Subset<T, Association$socialLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articles<T extends Association$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Association$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organiser<T extends Association$organiserArgs<ExtArgs> = {}>(args?: Subset<T, Association$organiserArgs<ExtArgs>>): Prisma__OrganiserClient<$Result.GetResult<Prisma.$OrganiserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Association model
   */
  interface AssociationFieldRefs {
    readonly id: FieldRef<"Association", 'String'>
    readonly name: FieldRef<"Association", 'String'>
    readonly slug: FieldRef<"Association", 'String'>
    readonly description: FieldRef<"Association", 'String'>
    readonly contactEmail: FieldRef<"Association", 'String'>
    readonly phone: FieldRef<"Association", 'String'>
    readonly website: FieldRef<"Association", 'String'>
    readonly logoUrl: FieldRef<"Association", 'String'>
    readonly updatedAt: FieldRef<"Association", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Association findUnique
   */
  export type AssociationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association findUniqueOrThrow
   */
  export type AssociationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association findFirst
   */
  export type AssociationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Associations.
     */
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association findFirstOrThrow
   */
  export type AssociationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Associations.
     */
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association findMany
   */
  export type AssociationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Associations to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association create
   */
  export type AssociationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The data needed to create a Association.
     */
    data: XOR<AssociationCreateInput, AssociationUncheckedCreateInput>
  }

  /**
   * Association createMany
   */
  export type AssociationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Associations.
     */
    data: AssociationCreateManyInput | AssociationCreateManyInput[]
  }

  /**
   * Association createManyAndReturn
   */
  export type AssociationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * The data used to create many Associations.
     */
    data: AssociationCreateManyInput | AssociationCreateManyInput[]
  }

  /**
   * Association update
   */
  export type AssociationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The data needed to update a Association.
     */
    data: XOR<AssociationUpdateInput, AssociationUncheckedUpdateInput>
    /**
     * Choose, which Association to update.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association updateMany
   */
  export type AssociationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Associations.
     */
    data: XOR<AssociationUpdateManyMutationInput, AssociationUncheckedUpdateManyInput>
    /**
     * Filter which Associations to update
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to update.
     */
    limit?: number
  }

  /**
   * Association updateManyAndReturn
   */
  export type AssociationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * The data used to update Associations.
     */
    data: XOR<AssociationUpdateManyMutationInput, AssociationUncheckedUpdateManyInput>
    /**
     * Filter which Associations to update
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to update.
     */
    limit?: number
  }

  /**
   * Association upsert
   */
  export type AssociationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The filter to search for the Association to update in case it exists.
     */
    where: AssociationWhereUniqueInput
    /**
     * In case the Association found by the `where` argument doesn't exist, create a new Association with this data.
     */
    create: XOR<AssociationCreateInput, AssociationUncheckedCreateInput>
    /**
     * In case the Association was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssociationUpdateInput, AssociationUncheckedUpdateInput>
  }

  /**
   * Association delete
   */
  export type AssociationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter which Association to delete.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association deleteMany
   */
  export type AssociationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Associations to delete
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to delete.
     */
    limit?: number
  }

  /**
   * Association.socialLinks
   */
  export type Association$socialLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    cursor?: SocialLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * Association.articles
   */
  export type Association$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Association.organiser
   */
  export type Association$organiserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organiser
     */
    select?: OrganiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organiser
     */
    omit?: OrganiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganiserInclude<ExtArgs> | null
    where?: OrganiserWhereInput
  }

  /**
   * Association without action
   */
  export type AssociationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
  }


  /**
   * Model SocialLink
   */

  export type AggregateSocialLink = {
    _count: SocialLinkCountAggregateOutputType | null
    _avg: SocialLinkAvgAggregateOutputType | null
    _sum: SocialLinkSumAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  export type SocialLinkAvgAggregateOutputType = {
    id: number | null
  }

  export type SocialLinkSumAggregateOutputType = {
    id: number | null
  }

  export type SocialLinkMinAggregateOutputType = {
    id: number | null
    platform: $Enums.SocialPlatform | null
    url: string | null
    associationId: string | null
  }

  export type SocialLinkMaxAggregateOutputType = {
    id: number | null
    platform: $Enums.SocialPlatform | null
    url: string | null
    associationId: string | null
  }

  export type SocialLinkCountAggregateOutputType = {
    id: number
    platform: number
    url: number
    associationId: number
    _all: number
  }


  export type SocialLinkAvgAggregateInputType = {
    id?: true
  }

  export type SocialLinkSumAggregateInputType = {
    id?: true
  }

  export type SocialLinkMinAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    associationId?: true
  }

  export type SocialLinkMaxAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    associationId?: true
  }

  export type SocialLinkCountAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    associationId?: true
    _all?: true
  }

  export type SocialLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLink to aggregate.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialLinks
    **/
    _count?: true | SocialLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialLinkMaxAggregateInputType
  }

  export type GetSocialLinkAggregateType<T extends SocialLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialLink[P]>
      : GetScalarType<T[P], AggregateSocialLink[P]>
  }




  export type SocialLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithAggregationInput | SocialLinkOrderByWithAggregationInput[]
    by: SocialLinkScalarFieldEnum[] | SocialLinkScalarFieldEnum
    having?: SocialLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialLinkCountAggregateInputType | true
    _avg?: SocialLinkAvgAggregateInputType
    _sum?: SocialLinkSumAggregateInputType
    _min?: SocialLinkMinAggregateInputType
    _max?: SocialLinkMaxAggregateInputType
  }

  export type SocialLinkGroupByOutputType = {
    id: number
    platform: $Enums.SocialPlatform
    url: string
    associationId: string
    _count: SocialLinkCountAggregateOutputType | null
    _avg: SocialLinkAvgAggregateOutputType | null
    _sum: SocialLinkSumAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  type GetSocialLinkGroupByPayload<T extends SocialLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
            : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
        }
      >
    >


  export type SocialLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    associationId?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    associationId?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    associationId?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectScalar = {
    id?: boolean
    platform?: boolean
    url?: boolean
    associationId?: boolean
  }

  export type SocialLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform" | "url" | "associationId", ExtArgs["result"]["socialLink"]>
  export type SocialLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }
  export type SocialLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }
  export type SocialLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }

  export type $SocialLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialLink"
    objects: {
      association: Prisma.$AssociationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      platform: $Enums.SocialPlatform
      url: string
      associationId: string
    }, ExtArgs["result"]["socialLink"]>
    composites: {}
  }

  type SocialLinkGetPayload<S extends boolean | null | undefined | SocialLinkDefaultArgs> = $Result.GetResult<Prisma.$SocialLinkPayload, S>

  type SocialLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialLinkCountAggregateInputType | true
    }

  export interface SocialLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialLink'], meta: { name: 'SocialLink' } }
    /**
     * Find zero or one SocialLink that matches the filter.
     * @param {SocialLinkFindUniqueArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialLinkFindUniqueArgs>(args: SelectSubset<T, SocialLinkFindUniqueArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialLinkFindUniqueOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialLinkFindFirstArgs>(args?: SelectSubset<T, SocialLinkFindFirstArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLinks
     * const socialLinks = await prisma.socialLink.findMany()
     * 
     * // Get first 10 SocialLinks
     * const socialLinks = await prisma.socialLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialLinkFindManyArgs>(args?: SelectSubset<T, SocialLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialLink.
     * @param {SocialLinkCreateArgs} args - Arguments to create a SocialLink.
     * @example
     * // Create one SocialLink
     * const SocialLink = await prisma.socialLink.create({
     *   data: {
     *     // ... data to create a SocialLink
     *   }
     * })
     * 
     */
    create<T extends SocialLinkCreateArgs>(args: SelectSubset<T, SocialLinkCreateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialLinks.
     * @param {SocialLinkCreateManyArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialLinkCreateManyArgs>(args?: SelectSubset<T, SocialLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialLinks and returns the data saved in the database.
     * @param {SocialLinkCreateManyAndReturnArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialLink.
     * @param {SocialLinkDeleteArgs} args - Arguments to delete one SocialLink.
     * @example
     * // Delete one SocialLink
     * const SocialLink = await prisma.socialLink.delete({
     *   where: {
     *     // ... filter to delete one SocialLink
     *   }
     * })
     * 
     */
    delete<T extends SocialLinkDeleteArgs>(args: SelectSubset<T, SocialLinkDeleteArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialLink.
     * @param {SocialLinkUpdateArgs} args - Arguments to update one SocialLink.
     * @example
     * // Update one SocialLink
     * const socialLink = await prisma.socialLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialLinkUpdateArgs>(args: SelectSubset<T, SocialLinkUpdateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialLinks.
     * @param {SocialLinkDeleteManyArgs} args - Arguments to filter SocialLinks to delete.
     * @example
     * // Delete a few SocialLinks
     * const { count } = await prisma.socialLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialLinkDeleteManyArgs>(args?: SelectSubset<T, SocialLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialLinkUpdateManyArgs>(args: SelectSubset<T, SocialLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks and returns the data updated in the database.
     * @param {SocialLinkUpdateManyAndReturnArgs} args - Arguments to update many SocialLinks.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SocialLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialLink.
     * @param {SocialLinkUpsertArgs} args - Arguments to update or create a SocialLink.
     * @example
     * // Update or create a SocialLink
     * const socialLink = await prisma.socialLink.upsert({
     *   create: {
     *     // ... data to create a SocialLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLink we want to update
     *   }
     * })
     */
    upsert<T extends SocialLinkUpsertArgs>(args: SelectSubset<T, SocialLinkUpsertArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkCountArgs} args - Arguments to filter SocialLinks to count.
     * @example
     * // Count the number of SocialLinks
     * const count = await prisma.socialLink.count({
     *   where: {
     *     // ... the filter for the SocialLinks we want to count
     *   }
     * })
    **/
    count<T extends SocialLinkCountArgs>(
      args?: Subset<T, SocialLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialLinkAggregateArgs>(args: Subset<T, SocialLinkAggregateArgs>): Prisma.PrismaPromise<GetSocialLinkAggregateType<T>>

    /**
     * Group by SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkGroupByArgs} args - Group by arguments.
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
      T extends SocialLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialLinkGroupByArgs['orderBy'] }
        : { orderBy?: SocialLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SocialLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialLink model
   */
  readonly fields: SocialLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    association<T extends AssociationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociationDefaultArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SocialLink model
   */
  interface SocialLinkFieldRefs {
    readonly id: FieldRef<"SocialLink", 'Int'>
    readonly platform: FieldRef<"SocialLink", 'SocialPlatform'>
    readonly url: FieldRef<"SocialLink", 'String'>
    readonly associationId: FieldRef<"SocialLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SocialLink findUnique
   */
  export type SocialLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findUniqueOrThrow
   */
  export type SocialLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findFirst
   */
  export type SocialLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findFirstOrThrow
   */
  export type SocialLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findMany
   */
  export type SocialLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink create
   */
  export type SocialLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialLink.
     */
    data: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
  }

  /**
   * SocialLink createMany
   */
  export type SocialLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
  }

  /**
   * SocialLink createManyAndReturn
   */
  export type SocialLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialLink update
   */
  export type SocialLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialLink.
     */
    data: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
    /**
     * Choose, which SocialLink to update.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink updateMany
   */
  export type SocialLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
  }

  /**
   * SocialLink updateManyAndReturn
   */
  export type SocialLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialLink upsert
   */
  export type SocialLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialLink to update in case it exists.
     */
    where: SocialLinkWhereUniqueInput
    /**
     * In case the SocialLink found by the `where` argument doesn't exist, create a new SocialLink with this data.
     */
    create: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
    /**
     * In case the SocialLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
  }

  /**
   * SocialLink delete
   */
  export type SocialLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter which SocialLink to delete.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink deleteMany
   */
  export type SocialLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLinks to delete
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to delete.
     */
    limit?: number
  }

  /**
   * SocialLink without action
   */
  export type SocialLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
  }


  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    id: number | null
  }

  export type ArticleSumAggregateOutputType = {
    id: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    bodyMd: string | null
    bodyHtml: string | null
    createdAt: Date | null
    updatedAt: Date | null
    associationId: string | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    bodyMd: string | null
    bodyHtml: string | null
    createdAt: Date | null
    updatedAt: Date | null
    associationId: string | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    bodyMd: number
    bodyHtml: number
    createdAt: number
    updatedAt: number
    associationId: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    id?: true
  }

  export type ArticleSumAggregateInputType = {
    id?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    bodyMd?: true
    bodyHtml?: true
    createdAt?: true
    updatedAt?: true
    associationId?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    bodyMd?: true
    bodyHtml?: true
    createdAt?: true
    updatedAt?: true
    associationId?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    bodyMd?: true
    bodyHtml?: true
    createdAt?: true
    updatedAt?: true
    associationId?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: number
    slug: string
    title: string
    bodyMd: string
    bodyHtml: string | null
    createdAt: Date
    updatedAt: Date
    associationId: string
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    bodyMd?: boolean
    bodyHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    associationId?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    bodyMd?: boolean
    bodyHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    associationId?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    bodyMd?: boolean
    bodyHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    associationId?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    bodyMd?: boolean
    bodyHtml?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    associationId?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "bodyMd" | "bodyHtml" | "createdAt" | "updatedAt" | "associationId", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      association: Prisma.$AssociationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title: string
      bodyMd: string
      bodyHtml: string | null
      createdAt: Date
      updatedAt: Date
      associationId: string
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
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
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    association<T extends AssociationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociationDefaultArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'Int'>
    readonly slug: FieldRef<"Article", 'String'>
    readonly title: FieldRef<"Article", 'String'>
    readonly bodyMd: FieldRef<"Article", 'String'>
    readonly bodyHtml: FieldRef<"Article", 'String'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
    readonly associationId: FieldRef<"Article", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model Organiser
   */

  export type AggregateOrganiser = {
    _count: OrganiserCountAggregateOutputType | null
    _min: OrganiserMinAggregateOutputType | null
    _max: OrganiserMaxAggregateOutputType | null
  }

  export type OrganiserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.GlobalRole | null
    createdAt: Date | null
    associationId: string | null
  }

  export type OrganiserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.GlobalRole | null
    createdAt: Date | null
    associationId: string | null
  }

  export type OrganiserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    associationId: number
    _all: number
  }


  export type OrganiserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    associationId?: true
  }

  export type OrganiserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    associationId?: true
  }

  export type OrganiserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    associationId?: true
    _all?: true
  }

  export type OrganiserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organiser to aggregate.
     */
    where?: OrganiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisers to fetch.
     */
    orderBy?: OrganiserOrderByWithRelationInput | OrganiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organisers
    **/
    _count?: true | OrganiserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganiserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganiserMaxAggregateInputType
  }

  export type GetOrganiserAggregateType<T extends OrganiserAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganiser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganiser[P]>
      : GetScalarType<T[P], AggregateOrganiser[P]>
  }




  export type OrganiserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganiserWhereInput
    orderBy?: OrganiserOrderByWithAggregationInput | OrganiserOrderByWithAggregationInput[]
    by: OrganiserScalarFieldEnum[] | OrganiserScalarFieldEnum
    having?: OrganiserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganiserCountAggregateInputType | true
    _min?: OrganiserMinAggregateInputType
    _max?: OrganiserMaxAggregateInputType
  }

  export type OrganiserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    role: $Enums.GlobalRole
    createdAt: Date
    associationId: string
    _count: OrganiserCountAggregateOutputType | null
    _min: OrganiserMinAggregateOutputType | null
    _max: OrganiserMaxAggregateOutputType | null
  }

  type GetOrganiserGroupByPayload<T extends OrganiserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganiserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganiserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganiserGroupByOutputType[P]>
            : GetScalarType<T[P], OrganiserGroupByOutputType[P]>
        }
      >
    >


  export type OrganiserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    associationId?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    tokens?: boolean | Organiser$tokensArgs<ExtArgs>
    _count?: boolean | OrganiserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organiser"]>

  export type OrganiserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    associationId?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organiser"]>

  export type OrganiserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    associationId?: boolean
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organiser"]>

  export type OrganiserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    associationId?: boolean
  }

  export type OrganiserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "createdAt" | "associationId", ExtArgs["result"]["organiser"]>
  export type OrganiserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
    tokens?: boolean | Organiser$tokensArgs<ExtArgs>
    _count?: boolean | OrganiserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganiserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }
  export type OrganiserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    association?: boolean | AssociationDefaultArgs<ExtArgs>
  }

  export type $OrganiserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organiser"
    objects: {
      association: Prisma.$AssociationPayload<ExtArgs>
      tokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      role: $Enums.GlobalRole
      createdAt: Date
      associationId: string
    }, ExtArgs["result"]["organiser"]>
    composites: {}
  }

  type OrganiserGetPayload<S extends boolean | null | undefined | OrganiserDefaultArgs> = $Result.GetResult<Prisma.$OrganiserPayload, S>

  type OrganiserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganiserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganiserCountAggregateInputType | true
    }

  export interface OrganiserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organiser'], meta: { name: 'Organiser' } }
    /**
     * Find zero or one Organiser that matches the filter.
     * @param {OrganiserFindUniqueArgs} args - Arguments to find a Organiser
     * @example
     * // Get one Organiser
     * const organiser = await prisma.organiser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganiserFindUniqueArgs>(args: SelectSubset<T, OrganiserFindUniqueArgs<ExtArgs>>): Prisma__OrganiserClient<$Result.GetResult<Prisma.$OrganiserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organiser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganiserFindUniqueOrThrowArgs} args - Arguments to find a Organiser
     * @example
     * // Get one Organiser
     * const organiser = await prisma.organiser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganiserFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganiserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganiserClient<$Result.GetResult<Prisma.$OrganiserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organiser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganiserFindFirstArgs} args - Arguments to find a Organiser
     * @example
     * // Get one Organiser
     * const organiser = await prisma.organiser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganiserFindFirstArgs>(args?: SelectSubset<T, OrganiserFindFirstArgs<ExtArgs>>): Prisma__OrganiserClient<$Result.GetResult<Prisma.$OrganiserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organiser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganiserFindFirstOrThrowArgs} args - Arguments to find a Organiser
     * @example
     * // Get one Organiser
     * const organiser = await prisma.organiser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganiserFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganiserFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganiserClient<$Result.GetResult<Prisma.$OrganiserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organisers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganiserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organisers
     * const organisers = await prisma.organiser.findMany()
     * 
     * // Get first 10 Organisers
     * const organisers = await prisma.organiser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organiserWithIdOnly = await prisma.organiser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganiserFindManyArgs>(args?: SelectSubset<T, OrganiserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganiserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organiser.
     * @param {OrganiserCreateArgs} args - Arguments to create a Organiser.
     * @example
     * // Create one Organiser
     * const Organiser = await prisma.organiser.create({
     *   data: {
     *     // ... data to create a Organiser
     *   }
     * })
     * 
     */
    create<T extends OrganiserCreateArgs>(args: SelectSubset<T, OrganiserCreateArgs<ExtArgs>>): Prisma__OrganiserClient<$Result.GetResult<Prisma.$OrganiserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organisers.
     * @param {OrganiserCreateManyArgs} args - Arguments to create many Organisers.
     * @example
     * // Create many Organisers
     * const organiser = await prisma.organiser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganiserCreateManyArgs>(args?: SelectSubset<T, OrganiserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organisers and returns the data saved in the database.
     * @param {OrganiserCreateManyAndReturnArgs} args - Arguments to create many Organisers.
     * @example
     * // Create many Organisers
     * const organiser = await prisma.organiser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organisers and only return the `id`
     * const organiserWithIdOnly = await prisma.organiser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganiserCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganiserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganiserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organiser.
     * @param {OrganiserDeleteArgs} args - Arguments to delete one Organiser.
     * @example
     * // Delete one Organiser
     * const Organiser = await prisma.organiser.delete({
     *   where: {
     *     // ... filter to delete one Organiser
     *   }
     * })
     * 
     */
    delete<T extends OrganiserDeleteArgs>(args: SelectSubset<T, OrganiserDeleteArgs<ExtArgs>>): Prisma__OrganiserClient<$Result.GetResult<Prisma.$OrganiserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organiser.
     * @param {OrganiserUpdateArgs} args - Arguments to update one Organiser.
     * @example
     * // Update one Organiser
     * const organiser = await prisma.organiser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganiserUpdateArgs>(args: SelectSubset<T, OrganiserUpdateArgs<ExtArgs>>): Prisma__OrganiserClient<$Result.GetResult<Prisma.$OrganiserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organisers.
     * @param {OrganiserDeleteManyArgs} args - Arguments to filter Organisers to delete.
     * @example
     * // Delete a few Organisers
     * const { count } = await prisma.organiser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganiserDeleteManyArgs>(args?: SelectSubset<T, OrganiserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganiserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organisers
     * const organiser = await prisma.organiser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganiserUpdateManyArgs>(args: SelectSubset<T, OrganiserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organisers and returns the data updated in the database.
     * @param {OrganiserUpdateManyAndReturnArgs} args - Arguments to update many Organisers.
     * @example
     * // Update many Organisers
     * const organiser = await prisma.organiser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organisers and only return the `id`
     * const organiserWithIdOnly = await prisma.organiser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganiserUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganiserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganiserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organiser.
     * @param {OrganiserUpsertArgs} args - Arguments to update or create a Organiser.
     * @example
     * // Update or create a Organiser
     * const organiser = await prisma.organiser.upsert({
     *   create: {
     *     // ... data to create a Organiser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organiser we want to update
     *   }
     * })
     */
    upsert<T extends OrganiserUpsertArgs>(args: SelectSubset<T, OrganiserUpsertArgs<ExtArgs>>): Prisma__OrganiserClient<$Result.GetResult<Prisma.$OrganiserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organisers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganiserCountArgs} args - Arguments to filter Organisers to count.
     * @example
     * // Count the number of Organisers
     * const count = await prisma.organiser.count({
     *   where: {
     *     // ... the filter for the Organisers we want to count
     *   }
     * })
    **/
    count<T extends OrganiserCountArgs>(
      args?: Subset<T, OrganiserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganiserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organiser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganiserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganiserAggregateArgs>(args: Subset<T, OrganiserAggregateArgs>): Prisma.PrismaPromise<GetOrganiserAggregateType<T>>

    /**
     * Group by Organiser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganiserGroupByArgs} args - Group by arguments.
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
      T extends OrganiserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganiserGroupByArgs['orderBy'] }
        : { orderBy?: OrganiserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrganiserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganiserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organiser model
   */
  readonly fields: OrganiserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organiser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganiserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    association<T extends AssociationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssociationDefaultArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tokens<T extends Organiser$tokensArgs<ExtArgs> = {}>(args?: Subset<T, Organiser$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organiser model
   */
  interface OrganiserFieldRefs {
    readonly id: FieldRef<"Organiser", 'String'>
    readonly email: FieldRef<"Organiser", 'String'>
    readonly passwordHash: FieldRef<"Organiser", 'String'>
    readonly role: FieldRef<"Organiser", 'GlobalRole'>
    readonly createdAt: FieldRef<"Organiser", 'DateTime'>
    readonly associationId: FieldRef<"Organiser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Organiser findUnique
   */
  export type OrganiserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organiser
     */
    select?: OrganiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organiser
     */
    omit?: OrganiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganiserInclude<ExtArgs> | null
    /**
     * Filter, which Organiser to fetch.
     */
    where: OrganiserWhereUniqueInput
  }

  /**
   * Organiser findUniqueOrThrow
   */
  export type OrganiserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organiser
     */
    select?: OrganiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organiser
     */
    omit?: OrganiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganiserInclude<ExtArgs> | null
    /**
     * Filter, which Organiser to fetch.
     */
    where: OrganiserWhereUniqueInput
  }

  /**
   * Organiser findFirst
   */
  export type OrganiserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organiser
     */
    select?: OrganiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organiser
     */
    omit?: OrganiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganiserInclude<ExtArgs> | null
    /**
     * Filter, which Organiser to fetch.
     */
    where?: OrganiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisers to fetch.
     */
    orderBy?: OrganiserOrderByWithRelationInput | OrganiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisers.
     */
    cursor?: OrganiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisers.
     */
    distinct?: OrganiserScalarFieldEnum | OrganiserScalarFieldEnum[]
  }

  /**
   * Organiser findFirstOrThrow
   */
  export type OrganiserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organiser
     */
    select?: OrganiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organiser
     */
    omit?: OrganiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganiserInclude<ExtArgs> | null
    /**
     * Filter, which Organiser to fetch.
     */
    where?: OrganiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisers to fetch.
     */
    orderBy?: OrganiserOrderByWithRelationInput | OrganiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organisers.
     */
    cursor?: OrganiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organisers.
     */
    distinct?: OrganiserScalarFieldEnum | OrganiserScalarFieldEnum[]
  }

  /**
   * Organiser findMany
   */
  export type OrganiserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organiser
     */
    select?: OrganiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organiser
     */
    omit?: OrganiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganiserInclude<ExtArgs> | null
    /**
     * Filter, which Organisers to fetch.
     */
    where?: OrganiserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organisers to fetch.
     */
    orderBy?: OrganiserOrderByWithRelationInput | OrganiserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organisers.
     */
    cursor?: OrganiserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organisers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organisers.
     */
    skip?: number
    distinct?: OrganiserScalarFieldEnum | OrganiserScalarFieldEnum[]
  }

  /**
   * Organiser create
   */
  export type OrganiserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organiser
     */
    select?: OrganiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organiser
     */
    omit?: OrganiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganiserInclude<ExtArgs> | null
    /**
     * The data needed to create a Organiser.
     */
    data: XOR<OrganiserCreateInput, OrganiserUncheckedCreateInput>
  }

  /**
   * Organiser createMany
   */
  export type OrganiserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organisers.
     */
    data: OrganiserCreateManyInput | OrganiserCreateManyInput[]
  }

  /**
   * Organiser createManyAndReturn
   */
  export type OrganiserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organiser
     */
    select?: OrganiserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organiser
     */
    omit?: OrganiserOmit<ExtArgs> | null
    /**
     * The data used to create many Organisers.
     */
    data: OrganiserCreateManyInput | OrganiserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganiserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organiser update
   */
  export type OrganiserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organiser
     */
    select?: OrganiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organiser
     */
    omit?: OrganiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganiserInclude<ExtArgs> | null
    /**
     * The data needed to update a Organiser.
     */
    data: XOR<OrganiserUpdateInput, OrganiserUncheckedUpdateInput>
    /**
     * Choose, which Organiser to update.
     */
    where: OrganiserWhereUniqueInput
  }

  /**
   * Organiser updateMany
   */
  export type OrganiserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organisers.
     */
    data: XOR<OrganiserUpdateManyMutationInput, OrganiserUncheckedUpdateManyInput>
    /**
     * Filter which Organisers to update
     */
    where?: OrganiserWhereInput
    /**
     * Limit how many Organisers to update.
     */
    limit?: number
  }

  /**
   * Organiser updateManyAndReturn
   */
  export type OrganiserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organiser
     */
    select?: OrganiserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organiser
     */
    omit?: OrganiserOmit<ExtArgs> | null
    /**
     * The data used to update Organisers.
     */
    data: XOR<OrganiserUpdateManyMutationInput, OrganiserUncheckedUpdateManyInput>
    /**
     * Filter which Organisers to update
     */
    where?: OrganiserWhereInput
    /**
     * Limit how many Organisers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganiserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organiser upsert
   */
  export type OrganiserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organiser
     */
    select?: OrganiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organiser
     */
    omit?: OrganiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganiserInclude<ExtArgs> | null
    /**
     * The filter to search for the Organiser to update in case it exists.
     */
    where: OrganiserWhereUniqueInput
    /**
     * In case the Organiser found by the `where` argument doesn't exist, create a new Organiser with this data.
     */
    create: XOR<OrganiserCreateInput, OrganiserUncheckedCreateInput>
    /**
     * In case the Organiser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganiserUpdateInput, OrganiserUncheckedUpdateInput>
  }

  /**
   * Organiser delete
   */
  export type OrganiserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organiser
     */
    select?: OrganiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organiser
     */
    omit?: OrganiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganiserInclude<ExtArgs> | null
    /**
     * Filter which Organiser to delete.
     */
    where: OrganiserWhereUniqueInput
  }

  /**
   * Organiser deleteMany
   */
  export type OrganiserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organisers to delete
     */
    where?: OrganiserWhereInput
    /**
     * Limit how many Organisers to delete.
     */
    limit?: number
  }

  /**
   * Organiser.tokens
   */
  export type Organiser$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * Organiser without action
   */
  export type OrganiserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organiser
     */
    select?: OrganiserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organiser
     */
    omit?: OrganiserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganiserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    id: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: number | null
    tokenHash: string | null
    organiserId: string | null
    expiresAt: Date | null
    revoked: boolean | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: number | null
    tokenHash: string | null
    organiserId: string | null
    expiresAt: Date | null
    revoked: boolean | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    tokenHash: number
    organiserId: number
    expiresAt: number
    revoked: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    id?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    id?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    id?: true
    tokenHash?: true
    organiserId?: true
    expiresAt?: true
    revoked?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    organiserId?: true
    expiresAt?: true
    revoked?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    tokenHash?: true
    organiserId?: true
    expiresAt?: true
    revoked?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: number
    tokenHash: string
    organiserId: string
    expiresAt: Date
    revoked: boolean
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    organiserId?: boolean
    expiresAt?: boolean
    revoked?: boolean
    organiser?: boolean | OrganiserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    organiserId?: boolean
    expiresAt?: boolean
    revoked?: boolean
    organiser?: boolean | OrganiserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    organiserId?: boolean
    expiresAt?: boolean
    revoked?: boolean
    organiser?: boolean | OrganiserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    organiserId?: boolean
    expiresAt?: boolean
    revoked?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "organiserId" | "expiresAt" | "revoked", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organiser?: boolean | OrganiserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organiser?: boolean | OrganiserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organiser?: boolean | OrganiserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      organiser: Prisma.$OrganiserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tokenHash: string
      organiserId: string
      expiresAt: Date
      revoked: boolean
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organiser<T extends OrganiserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganiserDefaultArgs<ExtArgs>>): Prisma__OrganiserClient<$Result.GetResult<Prisma.$OrganiserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'Int'>
    readonly tokenHash: FieldRef<"RefreshToken", 'String'>
    readonly organiserId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revoked: FieldRef<"RefreshToken", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AssociationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    contactEmail: 'contactEmail',
    phone: 'phone',
    website: 'website',
    logoUrl: 'logoUrl',
    updatedAt: 'updatedAt'
  };

  export type AssociationScalarFieldEnum = (typeof AssociationScalarFieldEnum)[keyof typeof AssociationScalarFieldEnum]


  export const SocialLinkScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    url: 'url',
    associationId: 'associationId'
  };

  export type SocialLinkScalarFieldEnum = (typeof SocialLinkScalarFieldEnum)[keyof typeof SocialLinkScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    bodyMd: 'bodyMd',
    bodyHtml: 'bodyHtml',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    associationId: 'associationId'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const OrganiserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    associationId: 'associationId'
  };

  export type OrganiserScalarFieldEnum = (typeof OrganiserScalarFieldEnum)[keyof typeof OrganiserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    organiserId: 'organiserId',
    expiresAt: 'expiresAt',
    revoked: 'revoked'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'SocialPlatform'
   */
  export type EnumSocialPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SocialPlatform'>
    


  /**
   * Reference to a field of type 'GlobalRole'
   */
  export type EnumGlobalRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GlobalRole'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AssociationWhereInput = {
    AND?: AssociationWhereInput | AssociationWhereInput[]
    OR?: AssociationWhereInput[]
    NOT?: AssociationWhereInput | AssociationWhereInput[]
    id?: StringFilter<"Association"> | string
    name?: StringFilter<"Association"> | string
    slug?: StringFilter<"Association"> | string
    description?: StringFilter<"Association"> | string
    contactEmail?: StringFilter<"Association"> | string
    phone?: StringNullableFilter<"Association"> | string | null
    website?: StringNullableFilter<"Association"> | string | null
    logoUrl?: StringNullableFilter<"Association"> | string | null
    updatedAt?: DateTimeFilter<"Association"> | Date | string
    socialLinks?: SocialLinkListRelationFilter
    articles?: ArticleListRelationFilter
    organiser?: XOR<OrganiserNullableScalarRelationFilter, OrganiserWhereInput> | null
  }

  export type AssociationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    contactEmail?: SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    socialLinks?: SocialLinkOrderByRelationAggregateInput
    articles?: ArticleOrderByRelationAggregateInput
    organiser?: OrganiserOrderByWithRelationInput
  }

  export type AssociationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: AssociationWhereInput | AssociationWhereInput[]
    OR?: AssociationWhereInput[]
    NOT?: AssociationWhereInput | AssociationWhereInput[]
    description?: StringFilter<"Association"> | string
    contactEmail?: StringFilter<"Association"> | string
    phone?: StringNullableFilter<"Association"> | string | null
    website?: StringNullableFilter<"Association"> | string | null
    logoUrl?: StringNullableFilter<"Association"> | string | null
    updatedAt?: DateTimeFilter<"Association"> | Date | string
    socialLinks?: SocialLinkListRelationFilter
    articles?: ArticleListRelationFilter
    organiser?: XOR<OrganiserNullableScalarRelationFilter, OrganiserWhereInput> | null
  }, "id" | "name" | "slug">

  export type AssociationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    contactEmail?: SortOrder
    phone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: AssociationCountOrderByAggregateInput
    _max?: AssociationMaxOrderByAggregateInput
    _min?: AssociationMinOrderByAggregateInput
  }

  export type AssociationScalarWhereWithAggregatesInput = {
    AND?: AssociationScalarWhereWithAggregatesInput | AssociationScalarWhereWithAggregatesInput[]
    OR?: AssociationScalarWhereWithAggregatesInput[]
    NOT?: AssociationScalarWhereWithAggregatesInput | AssociationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Association"> | string
    name?: StringWithAggregatesFilter<"Association"> | string
    slug?: StringWithAggregatesFilter<"Association"> | string
    description?: StringWithAggregatesFilter<"Association"> | string
    contactEmail?: StringWithAggregatesFilter<"Association"> | string
    phone?: StringNullableWithAggregatesFilter<"Association"> | string | null
    website?: StringNullableWithAggregatesFilter<"Association"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Association"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Association"> | Date | string
  }

  export type SocialLinkWhereInput = {
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    id?: IntFilter<"SocialLink"> | number
    platform?: EnumSocialPlatformFilter<"SocialLink"> | $Enums.SocialPlatform
    url?: StringFilter<"SocialLink"> | string
    associationId?: StringFilter<"SocialLink"> | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
  }

  export type SocialLinkOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    associationId?: SortOrder
    association?: AssociationOrderByWithRelationInput
  }

  export type SocialLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    platform?: EnumSocialPlatformFilter<"SocialLink"> | $Enums.SocialPlatform
    url?: StringFilter<"SocialLink"> | string
    associationId?: StringFilter<"SocialLink"> | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
  }, "id">

  export type SocialLinkOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    associationId?: SortOrder
    _count?: SocialLinkCountOrderByAggregateInput
    _avg?: SocialLinkAvgOrderByAggregateInput
    _max?: SocialLinkMaxOrderByAggregateInput
    _min?: SocialLinkMinOrderByAggregateInput
    _sum?: SocialLinkSumOrderByAggregateInput
  }

  export type SocialLinkScalarWhereWithAggregatesInput = {
    AND?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    OR?: SocialLinkScalarWhereWithAggregatesInput[]
    NOT?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SocialLink"> | number
    platform?: EnumSocialPlatformWithAggregatesFilter<"SocialLink"> | $Enums.SocialPlatform
    url?: StringWithAggregatesFilter<"SocialLink"> | string
    associationId?: StringWithAggregatesFilter<"SocialLink"> | string
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: IntFilter<"Article"> | number
    slug?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    bodyMd?: StringFilter<"Article"> | string
    bodyHtml?: StringNullableFilter<"Article"> | string | null
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    associationId?: StringFilter<"Article"> | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    bodyMd?: SortOrder
    bodyHtml?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    associationId?: SortOrder
    association?: AssociationOrderByWithRelationInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    title?: StringFilter<"Article"> | string
    bodyMd?: StringFilter<"Article"> | string
    bodyHtml?: StringNullableFilter<"Article"> | string | null
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    associationId?: StringFilter<"Article"> | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
  }, "id" | "slug">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    bodyMd?: SortOrder
    bodyHtml?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    associationId?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Article"> | number
    slug?: StringWithAggregatesFilter<"Article"> | string
    title?: StringWithAggregatesFilter<"Article"> | string
    bodyMd?: StringWithAggregatesFilter<"Article"> | string
    bodyHtml?: StringNullableWithAggregatesFilter<"Article"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    associationId?: StringWithAggregatesFilter<"Article"> | string
  }

  export type OrganiserWhereInput = {
    AND?: OrganiserWhereInput | OrganiserWhereInput[]
    OR?: OrganiserWhereInput[]
    NOT?: OrganiserWhereInput | OrganiserWhereInput[]
    id?: StringFilter<"Organiser"> | string
    email?: StringFilter<"Organiser"> | string
    passwordHash?: StringFilter<"Organiser"> | string
    role?: EnumGlobalRoleFilter<"Organiser"> | $Enums.GlobalRole
    createdAt?: DateTimeFilter<"Organiser"> | Date | string
    associationId?: StringFilter<"Organiser"> | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
    tokens?: RefreshTokenListRelationFilter
  }

  export type OrganiserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    associationId?: SortOrder
    association?: AssociationOrderByWithRelationInput
    tokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type OrganiserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    associationId?: string
    AND?: OrganiserWhereInput | OrganiserWhereInput[]
    OR?: OrganiserWhereInput[]
    NOT?: OrganiserWhereInput | OrganiserWhereInput[]
    passwordHash?: StringFilter<"Organiser"> | string
    role?: EnumGlobalRoleFilter<"Organiser"> | $Enums.GlobalRole
    createdAt?: DateTimeFilter<"Organiser"> | Date | string
    association?: XOR<AssociationScalarRelationFilter, AssociationWhereInput>
    tokens?: RefreshTokenListRelationFilter
  }, "id" | "email" | "associationId">

  export type OrganiserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    associationId?: SortOrder
    _count?: OrganiserCountOrderByAggregateInput
    _max?: OrganiserMaxOrderByAggregateInput
    _min?: OrganiserMinOrderByAggregateInput
  }

  export type OrganiserScalarWhereWithAggregatesInput = {
    AND?: OrganiserScalarWhereWithAggregatesInput | OrganiserScalarWhereWithAggregatesInput[]
    OR?: OrganiserScalarWhereWithAggregatesInput[]
    NOT?: OrganiserScalarWhereWithAggregatesInput | OrganiserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organiser"> | string
    email?: StringWithAggregatesFilter<"Organiser"> | string
    passwordHash?: StringWithAggregatesFilter<"Organiser"> | string
    role?: EnumGlobalRoleWithAggregatesFilter<"Organiser"> | $Enums.GlobalRole
    createdAt?: DateTimeWithAggregatesFilter<"Organiser"> | Date | string
    associationId?: StringWithAggregatesFilter<"Organiser"> | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    tokenHash?: StringFilter<"RefreshToken"> | string
    organiserId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    organiser?: XOR<OrganiserScalarRelationFilter, OrganiserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    organiserId?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    organiser?: OrganiserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tokenHash?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    organiserId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
    organiser?: XOR<OrganiserScalarRelationFilter, OrganiserWhereInput>
  }, "id" | "tokenHash">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    organiserId?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefreshToken"> | number
    tokenHash?: StringWithAggregatesFilter<"RefreshToken"> | string
    organiserId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revoked?: BoolWithAggregatesFilter<"RefreshToken"> | boolean
  }

  export type AssociationCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    contactEmail: string
    phone?: string | null
    website?: string | null
    logoUrl?: string | null
    updatedAt?: Date | string
    socialLinks?: SocialLinkCreateNestedManyWithoutAssociationInput
    articles?: ArticleCreateNestedManyWithoutAssociationInput
    organiser?: OrganiserCreateNestedOneWithoutAssociationInput
  }

  export type AssociationUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    contactEmail: string
    phone?: string | null
    website?: string | null
    logoUrl?: string | null
    updatedAt?: Date | string
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutAssociationInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAssociationInput
    organiser?: OrganiserUncheckedCreateNestedOneWithoutAssociationInput
  }

  export type AssociationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUpdateManyWithoutAssociationNestedInput
    articles?: ArticleUpdateManyWithoutAssociationNestedInput
    organiser?: OrganiserUpdateOneWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutAssociationNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAssociationNestedInput
    organiser?: OrganiserUncheckedUpdateOneWithoutAssociationNestedInput
  }

  export type AssociationCreateManyInput = {
    id?: string
    name: string
    slug: string
    description: string
    contactEmail: string
    phone?: string | null
    website?: string | null
    logoUrl?: string | null
    updatedAt?: Date | string
  }

  export type AssociationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssociationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkCreateInput = {
    platform: $Enums.SocialPlatform
    url: string
    association: AssociationCreateNestedOneWithoutSocialLinksInput
  }

  export type SocialLinkUncheckedCreateInput = {
    id?: number
    platform: $Enums.SocialPlatform
    url: string
    associationId: string
  }

  export type SocialLinkUpdateInput = {
    platform?: EnumSocialPlatformFieldUpdateOperationsInput | $Enums.SocialPlatform
    url?: StringFieldUpdateOperationsInput | string
    association?: AssociationUpdateOneRequiredWithoutSocialLinksNestedInput
  }

  export type SocialLinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: EnumSocialPlatformFieldUpdateOperationsInput | $Enums.SocialPlatform
    url?: StringFieldUpdateOperationsInput | string
    associationId?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkCreateManyInput = {
    id?: number
    platform: $Enums.SocialPlatform
    url: string
    associationId: string
  }

  export type SocialLinkUpdateManyMutationInput = {
    platform?: EnumSocialPlatformFieldUpdateOperationsInput | $Enums.SocialPlatform
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: EnumSocialPlatformFieldUpdateOperationsInput | $Enums.SocialPlatform
    url?: StringFieldUpdateOperationsInput | string
    associationId?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleCreateInput = {
    slug: string
    title: string
    bodyMd: string
    bodyHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    association: AssociationCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: number
    slug: string
    title: string
    bodyMd: string
    bodyHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    associationId: string
  }

  export type ArticleUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    bodyMd?: StringFieldUpdateOperationsInput | string
    bodyHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    bodyMd?: StringFieldUpdateOperationsInput | string
    bodyHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    associationId?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleCreateManyInput = {
    id?: number
    slug: string
    title: string
    bodyMd: string
    bodyHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    associationId: string
  }

  export type ArticleUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    bodyMd?: StringFieldUpdateOperationsInput | string
    bodyHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    bodyMd?: StringFieldUpdateOperationsInput | string
    bodyHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    associationId?: StringFieldUpdateOperationsInput | string
  }

  export type OrganiserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.GlobalRole
    createdAt?: Date | string
    association: AssociationCreateNestedOneWithoutOrganiserInput
    tokens?: RefreshTokenCreateNestedManyWithoutOrganiserInput
  }

  export type OrganiserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.GlobalRole
    createdAt?: Date | string
    associationId: string
    tokens?: RefreshTokenUncheckedCreateNestedManyWithoutOrganiserInput
  }

  export type OrganiserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutOrganiserNestedInput
    tokens?: RefreshTokenUpdateManyWithoutOrganiserNestedInput
  }

  export type OrganiserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    associationId?: StringFieldUpdateOperationsInput | string
    tokens?: RefreshTokenUncheckedUpdateManyWithoutOrganiserNestedInput
  }

  export type OrganiserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.GlobalRole
    createdAt?: Date | string
    associationId: string
  }

  export type OrganiserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganiserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    associationId?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenCreateInput = {
    tokenHash: string
    expiresAt: Date | string
    revoked?: boolean
    organiser: OrganiserCreateNestedOneWithoutTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: number
    tokenHash: string
    organiserId: string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type RefreshTokenUpdateInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    organiser?: OrganiserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    organiserId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenCreateManyInput = {
    id?: number
    tokenHash: string
    organiserId: string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type RefreshTokenUpdateManyMutationInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    organiserId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SocialLinkListRelationFilter = {
    every?: SocialLinkWhereInput
    some?: SocialLinkWhereInput
    none?: SocialLinkWhereInput
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type OrganiserNullableScalarRelationFilter = {
    is?: OrganiserWhereInput | null
    isNot?: OrganiserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SocialLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssociationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    contactEmail?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    logoUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssociationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    contactEmail?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    logoUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssociationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    contactEmail?: SortOrder
    phone?: SortOrder
    website?: SortOrder
    logoUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumSocialPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialPlatform | EnumSocialPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.SocialPlatform[]
    notIn?: $Enums.SocialPlatform[]
    not?: NestedEnumSocialPlatformFilter<$PrismaModel> | $Enums.SocialPlatform
  }

  export type AssociationScalarRelationFilter = {
    is?: AssociationWhereInput
    isNot?: AssociationWhereInput
  }

  export type SocialLinkCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    associationId?: SortOrder
  }

  export type SocialLinkAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SocialLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    associationId?: SortOrder
  }

  export type SocialLinkMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    associationId?: SortOrder
  }

  export type SocialLinkSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSocialPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialPlatform | EnumSocialPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.SocialPlatform[]
    notIn?: $Enums.SocialPlatform[]
    not?: NestedEnumSocialPlatformWithAggregatesFilter<$PrismaModel> | $Enums.SocialPlatform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSocialPlatformFilter<$PrismaModel>
    _max?: NestedEnumSocialPlatformFilter<$PrismaModel>
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    bodyMd?: SortOrder
    bodyHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    associationId?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    bodyMd?: SortOrder
    bodyHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    associationId?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    bodyMd?: SortOrder
    bodyHtml?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    associationId?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumGlobalRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalRole | EnumGlobalRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalRole[]
    notIn?: $Enums.GlobalRole[]
    not?: NestedEnumGlobalRoleFilter<$PrismaModel> | $Enums.GlobalRole
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganiserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    associationId?: SortOrder
  }

  export type OrganiserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    associationId?: SortOrder
  }

  export type OrganiserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    associationId?: SortOrder
  }

  export type EnumGlobalRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalRole | EnumGlobalRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalRole[]
    notIn?: $Enums.GlobalRole[]
    not?: NestedEnumGlobalRoleWithAggregatesFilter<$PrismaModel> | $Enums.GlobalRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGlobalRoleFilter<$PrismaModel>
    _max?: NestedEnumGlobalRoleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrganiserScalarRelationFilter = {
    is?: OrganiserWhereInput
    isNot?: OrganiserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    organiserId?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    organiserId?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    organiserId?: SortOrder
    expiresAt?: SortOrder
    revoked?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SocialLinkCreateNestedManyWithoutAssociationInput = {
    create?: XOR<SocialLinkCreateWithoutAssociationInput, SocialLinkUncheckedCreateWithoutAssociationInput> | SocialLinkCreateWithoutAssociationInput[] | SocialLinkUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutAssociationInput | SocialLinkCreateOrConnectWithoutAssociationInput[]
    createMany?: SocialLinkCreateManyAssociationInputEnvelope
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
  }

  export type ArticleCreateNestedManyWithoutAssociationInput = {
    create?: XOR<ArticleCreateWithoutAssociationInput, ArticleUncheckedCreateWithoutAssociationInput> | ArticleCreateWithoutAssociationInput[] | ArticleUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAssociationInput | ArticleCreateOrConnectWithoutAssociationInput[]
    createMany?: ArticleCreateManyAssociationInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type OrganiserCreateNestedOneWithoutAssociationInput = {
    create?: XOR<OrganiserCreateWithoutAssociationInput, OrganiserUncheckedCreateWithoutAssociationInput>
    connectOrCreate?: OrganiserCreateOrConnectWithoutAssociationInput
    connect?: OrganiserWhereUniqueInput
  }

  export type SocialLinkUncheckedCreateNestedManyWithoutAssociationInput = {
    create?: XOR<SocialLinkCreateWithoutAssociationInput, SocialLinkUncheckedCreateWithoutAssociationInput> | SocialLinkCreateWithoutAssociationInput[] | SocialLinkUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutAssociationInput | SocialLinkCreateOrConnectWithoutAssociationInput[]
    createMany?: SocialLinkCreateManyAssociationInputEnvelope
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutAssociationInput = {
    create?: XOR<ArticleCreateWithoutAssociationInput, ArticleUncheckedCreateWithoutAssociationInput> | ArticleCreateWithoutAssociationInput[] | ArticleUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAssociationInput | ArticleCreateOrConnectWithoutAssociationInput[]
    createMany?: ArticleCreateManyAssociationInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type OrganiserUncheckedCreateNestedOneWithoutAssociationInput = {
    create?: XOR<OrganiserCreateWithoutAssociationInput, OrganiserUncheckedCreateWithoutAssociationInput>
    connectOrCreate?: OrganiserCreateOrConnectWithoutAssociationInput
    connect?: OrganiserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SocialLinkUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<SocialLinkCreateWithoutAssociationInput, SocialLinkUncheckedCreateWithoutAssociationInput> | SocialLinkCreateWithoutAssociationInput[] | SocialLinkUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutAssociationInput | SocialLinkCreateOrConnectWithoutAssociationInput[]
    upsert?: SocialLinkUpsertWithWhereUniqueWithoutAssociationInput | SocialLinkUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: SocialLinkCreateManyAssociationInputEnvelope
    set?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    disconnect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    delete?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    update?: SocialLinkUpdateWithWhereUniqueWithoutAssociationInput | SocialLinkUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: SocialLinkUpdateManyWithWhereWithoutAssociationInput | SocialLinkUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
  }

  export type ArticleUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<ArticleCreateWithoutAssociationInput, ArticleUncheckedCreateWithoutAssociationInput> | ArticleCreateWithoutAssociationInput[] | ArticleUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAssociationInput | ArticleCreateOrConnectWithoutAssociationInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutAssociationInput | ArticleUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: ArticleCreateManyAssociationInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutAssociationInput | ArticleUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutAssociationInput | ArticleUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type OrganiserUpdateOneWithoutAssociationNestedInput = {
    create?: XOR<OrganiserCreateWithoutAssociationInput, OrganiserUncheckedCreateWithoutAssociationInput>
    connectOrCreate?: OrganiserCreateOrConnectWithoutAssociationInput
    upsert?: OrganiserUpsertWithoutAssociationInput
    disconnect?: OrganiserWhereInput | boolean
    delete?: OrganiserWhereInput | boolean
    connect?: OrganiserWhereUniqueInput
    update?: XOR<XOR<OrganiserUpdateToOneWithWhereWithoutAssociationInput, OrganiserUpdateWithoutAssociationInput>, OrganiserUncheckedUpdateWithoutAssociationInput>
  }

  export type SocialLinkUncheckedUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<SocialLinkCreateWithoutAssociationInput, SocialLinkUncheckedCreateWithoutAssociationInput> | SocialLinkCreateWithoutAssociationInput[] | SocialLinkUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutAssociationInput | SocialLinkCreateOrConnectWithoutAssociationInput[]
    upsert?: SocialLinkUpsertWithWhereUniqueWithoutAssociationInput | SocialLinkUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: SocialLinkCreateManyAssociationInputEnvelope
    set?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    disconnect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    delete?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    update?: SocialLinkUpdateWithWhereUniqueWithoutAssociationInput | SocialLinkUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: SocialLinkUpdateManyWithWhereWithoutAssociationInput | SocialLinkUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutAssociationNestedInput = {
    create?: XOR<ArticleCreateWithoutAssociationInput, ArticleUncheckedCreateWithoutAssociationInput> | ArticleCreateWithoutAssociationInput[] | ArticleUncheckedCreateWithoutAssociationInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAssociationInput | ArticleCreateOrConnectWithoutAssociationInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutAssociationInput | ArticleUpsertWithWhereUniqueWithoutAssociationInput[]
    createMany?: ArticleCreateManyAssociationInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutAssociationInput | ArticleUpdateWithWhereUniqueWithoutAssociationInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutAssociationInput | ArticleUpdateManyWithWhereWithoutAssociationInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type OrganiserUncheckedUpdateOneWithoutAssociationNestedInput = {
    create?: XOR<OrganiserCreateWithoutAssociationInput, OrganiserUncheckedCreateWithoutAssociationInput>
    connectOrCreate?: OrganiserCreateOrConnectWithoutAssociationInput
    upsert?: OrganiserUpsertWithoutAssociationInput
    disconnect?: OrganiserWhereInput | boolean
    delete?: OrganiserWhereInput | boolean
    connect?: OrganiserWhereUniqueInput
    update?: XOR<XOR<OrganiserUpdateToOneWithWhereWithoutAssociationInput, OrganiserUpdateWithoutAssociationInput>, OrganiserUncheckedUpdateWithoutAssociationInput>
  }

  export type AssociationCreateNestedOneWithoutSocialLinksInput = {
    create?: XOR<AssociationCreateWithoutSocialLinksInput, AssociationUncheckedCreateWithoutSocialLinksInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutSocialLinksInput
    connect?: AssociationWhereUniqueInput
  }

  export type EnumSocialPlatformFieldUpdateOperationsInput = {
    set?: $Enums.SocialPlatform
  }

  export type AssociationUpdateOneRequiredWithoutSocialLinksNestedInput = {
    create?: XOR<AssociationCreateWithoutSocialLinksInput, AssociationUncheckedCreateWithoutSocialLinksInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutSocialLinksInput
    upsert?: AssociationUpsertWithoutSocialLinksInput
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutSocialLinksInput, AssociationUpdateWithoutSocialLinksInput>, AssociationUncheckedUpdateWithoutSocialLinksInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssociationCreateNestedOneWithoutArticlesInput = {
    create?: XOR<AssociationCreateWithoutArticlesInput, AssociationUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutArticlesInput
    connect?: AssociationWhereUniqueInput
  }

  export type AssociationUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<AssociationCreateWithoutArticlesInput, AssociationUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutArticlesInput
    upsert?: AssociationUpsertWithoutArticlesInput
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutArticlesInput, AssociationUpdateWithoutArticlesInput>, AssociationUncheckedUpdateWithoutArticlesInput>
  }

  export type AssociationCreateNestedOneWithoutOrganiserInput = {
    create?: XOR<AssociationCreateWithoutOrganiserInput, AssociationUncheckedCreateWithoutOrganiserInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutOrganiserInput
    connect?: AssociationWhereUniqueInput
  }

  export type RefreshTokenCreateNestedManyWithoutOrganiserInput = {
    create?: XOR<RefreshTokenCreateWithoutOrganiserInput, RefreshTokenUncheckedCreateWithoutOrganiserInput> | RefreshTokenCreateWithoutOrganiserInput[] | RefreshTokenUncheckedCreateWithoutOrganiserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutOrganiserInput | RefreshTokenCreateOrConnectWithoutOrganiserInput[]
    createMany?: RefreshTokenCreateManyOrganiserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutOrganiserInput = {
    create?: XOR<RefreshTokenCreateWithoutOrganiserInput, RefreshTokenUncheckedCreateWithoutOrganiserInput> | RefreshTokenCreateWithoutOrganiserInput[] | RefreshTokenUncheckedCreateWithoutOrganiserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutOrganiserInput | RefreshTokenCreateOrConnectWithoutOrganiserInput[]
    createMany?: RefreshTokenCreateManyOrganiserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type EnumGlobalRoleFieldUpdateOperationsInput = {
    set?: $Enums.GlobalRole
  }

  export type AssociationUpdateOneRequiredWithoutOrganiserNestedInput = {
    create?: XOR<AssociationCreateWithoutOrganiserInput, AssociationUncheckedCreateWithoutOrganiserInput>
    connectOrCreate?: AssociationCreateOrConnectWithoutOrganiserInput
    upsert?: AssociationUpsertWithoutOrganiserInput
    connect?: AssociationWhereUniqueInput
    update?: XOR<XOR<AssociationUpdateToOneWithWhereWithoutOrganiserInput, AssociationUpdateWithoutOrganiserInput>, AssociationUncheckedUpdateWithoutOrganiserInput>
  }

  export type RefreshTokenUpdateManyWithoutOrganiserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutOrganiserInput, RefreshTokenUncheckedCreateWithoutOrganiserInput> | RefreshTokenCreateWithoutOrganiserInput[] | RefreshTokenUncheckedCreateWithoutOrganiserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutOrganiserInput | RefreshTokenCreateOrConnectWithoutOrganiserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutOrganiserInput | RefreshTokenUpsertWithWhereUniqueWithoutOrganiserInput[]
    createMany?: RefreshTokenCreateManyOrganiserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutOrganiserInput | RefreshTokenUpdateWithWhereUniqueWithoutOrganiserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutOrganiserInput | RefreshTokenUpdateManyWithWhereWithoutOrganiserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutOrganiserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutOrganiserInput, RefreshTokenUncheckedCreateWithoutOrganiserInput> | RefreshTokenCreateWithoutOrganiserInput[] | RefreshTokenUncheckedCreateWithoutOrganiserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutOrganiserInput | RefreshTokenCreateOrConnectWithoutOrganiserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutOrganiserInput | RefreshTokenUpsertWithWhereUniqueWithoutOrganiserInput[]
    createMany?: RefreshTokenCreateManyOrganiserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutOrganiserInput | RefreshTokenUpdateWithWhereUniqueWithoutOrganiserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutOrganiserInput | RefreshTokenUpdateManyWithWhereWithoutOrganiserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type OrganiserCreateNestedOneWithoutTokensInput = {
    create?: XOR<OrganiserCreateWithoutTokensInput, OrganiserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: OrganiserCreateOrConnectWithoutTokensInput
    connect?: OrganiserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrganiserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<OrganiserCreateWithoutTokensInput, OrganiserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: OrganiserCreateOrConnectWithoutTokensInput
    upsert?: OrganiserUpsertWithoutTokensInput
    connect?: OrganiserWhereUniqueInput
    update?: XOR<XOR<OrganiserUpdateToOneWithWhereWithoutTokensInput, OrganiserUpdateWithoutTokensInput>, OrganiserUncheckedUpdateWithoutTokensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSocialPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialPlatform | EnumSocialPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.SocialPlatform[]
    notIn?: $Enums.SocialPlatform[]
    not?: NestedEnumSocialPlatformFilter<$PrismaModel> | $Enums.SocialPlatform
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSocialPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialPlatform | EnumSocialPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.SocialPlatform[]
    notIn?: $Enums.SocialPlatform[]
    not?: NestedEnumSocialPlatformWithAggregatesFilter<$PrismaModel> | $Enums.SocialPlatform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSocialPlatformFilter<$PrismaModel>
    _max?: NestedEnumSocialPlatformFilter<$PrismaModel>
  }

  export type NestedEnumGlobalRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalRole | EnumGlobalRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalRole[]
    notIn?: $Enums.GlobalRole[]
    not?: NestedEnumGlobalRoleFilter<$PrismaModel> | $Enums.GlobalRole
  }

  export type NestedEnumGlobalRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GlobalRole | EnumGlobalRoleFieldRefInput<$PrismaModel>
    in?: $Enums.GlobalRole[]
    notIn?: $Enums.GlobalRole[]
    not?: NestedEnumGlobalRoleWithAggregatesFilter<$PrismaModel> | $Enums.GlobalRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGlobalRoleFilter<$PrismaModel>
    _max?: NestedEnumGlobalRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SocialLinkCreateWithoutAssociationInput = {
    platform: $Enums.SocialPlatform
    url: string
  }

  export type SocialLinkUncheckedCreateWithoutAssociationInput = {
    id?: number
    platform: $Enums.SocialPlatform
    url: string
  }

  export type SocialLinkCreateOrConnectWithoutAssociationInput = {
    where: SocialLinkWhereUniqueInput
    create: XOR<SocialLinkCreateWithoutAssociationInput, SocialLinkUncheckedCreateWithoutAssociationInput>
  }

  export type SocialLinkCreateManyAssociationInputEnvelope = {
    data: SocialLinkCreateManyAssociationInput | SocialLinkCreateManyAssociationInput[]
  }

  export type ArticleCreateWithoutAssociationInput = {
    slug: string
    title: string
    bodyMd: string
    bodyHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUncheckedCreateWithoutAssociationInput = {
    id?: number
    slug: string
    title: string
    bodyMd: string
    bodyHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleCreateOrConnectWithoutAssociationInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutAssociationInput, ArticleUncheckedCreateWithoutAssociationInput>
  }

  export type ArticleCreateManyAssociationInputEnvelope = {
    data: ArticleCreateManyAssociationInput | ArticleCreateManyAssociationInput[]
  }

  export type OrganiserCreateWithoutAssociationInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.GlobalRole
    createdAt?: Date | string
    tokens?: RefreshTokenCreateNestedManyWithoutOrganiserInput
  }

  export type OrganiserUncheckedCreateWithoutAssociationInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.GlobalRole
    createdAt?: Date | string
    tokens?: RefreshTokenUncheckedCreateNestedManyWithoutOrganiserInput
  }

  export type OrganiserCreateOrConnectWithoutAssociationInput = {
    where: OrganiserWhereUniqueInput
    create: XOR<OrganiserCreateWithoutAssociationInput, OrganiserUncheckedCreateWithoutAssociationInput>
  }

  export type SocialLinkUpsertWithWhereUniqueWithoutAssociationInput = {
    where: SocialLinkWhereUniqueInput
    update: XOR<SocialLinkUpdateWithoutAssociationInput, SocialLinkUncheckedUpdateWithoutAssociationInput>
    create: XOR<SocialLinkCreateWithoutAssociationInput, SocialLinkUncheckedCreateWithoutAssociationInput>
  }

  export type SocialLinkUpdateWithWhereUniqueWithoutAssociationInput = {
    where: SocialLinkWhereUniqueInput
    data: XOR<SocialLinkUpdateWithoutAssociationInput, SocialLinkUncheckedUpdateWithoutAssociationInput>
  }

  export type SocialLinkUpdateManyWithWhereWithoutAssociationInput = {
    where: SocialLinkScalarWhereInput
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyWithoutAssociationInput>
  }

  export type SocialLinkScalarWhereInput = {
    AND?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
    OR?: SocialLinkScalarWhereInput[]
    NOT?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
    id?: IntFilter<"SocialLink"> | number
    platform?: EnumSocialPlatformFilter<"SocialLink"> | $Enums.SocialPlatform
    url?: StringFilter<"SocialLink"> | string
    associationId?: StringFilter<"SocialLink"> | string
  }

  export type ArticleUpsertWithWhereUniqueWithoutAssociationInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutAssociationInput, ArticleUncheckedUpdateWithoutAssociationInput>
    create: XOR<ArticleCreateWithoutAssociationInput, ArticleUncheckedCreateWithoutAssociationInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutAssociationInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutAssociationInput, ArticleUncheckedUpdateWithoutAssociationInput>
  }

  export type ArticleUpdateManyWithWhereWithoutAssociationInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutAssociationInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: IntFilter<"Article"> | number
    slug?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    bodyMd?: StringFilter<"Article"> | string
    bodyHtml?: StringNullableFilter<"Article"> | string | null
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    associationId?: StringFilter<"Article"> | string
  }

  export type OrganiserUpsertWithoutAssociationInput = {
    update: XOR<OrganiserUpdateWithoutAssociationInput, OrganiserUncheckedUpdateWithoutAssociationInput>
    create: XOR<OrganiserCreateWithoutAssociationInput, OrganiserUncheckedCreateWithoutAssociationInput>
    where?: OrganiserWhereInput
  }

  export type OrganiserUpdateToOneWithWhereWithoutAssociationInput = {
    where?: OrganiserWhereInput
    data: XOR<OrganiserUpdateWithoutAssociationInput, OrganiserUncheckedUpdateWithoutAssociationInput>
  }

  export type OrganiserUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: RefreshTokenUpdateManyWithoutOrganiserNestedInput
  }

  export type OrganiserUncheckedUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: RefreshTokenUncheckedUpdateManyWithoutOrganiserNestedInput
  }

  export type AssociationCreateWithoutSocialLinksInput = {
    id?: string
    name: string
    slug: string
    description: string
    contactEmail: string
    phone?: string | null
    website?: string | null
    logoUrl?: string | null
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutAssociationInput
    organiser?: OrganiserCreateNestedOneWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutSocialLinksInput = {
    id?: string
    name: string
    slug: string
    description: string
    contactEmail: string
    phone?: string | null
    website?: string | null
    logoUrl?: string | null
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutAssociationInput
    organiser?: OrganiserUncheckedCreateNestedOneWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutSocialLinksInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutSocialLinksInput, AssociationUncheckedCreateWithoutSocialLinksInput>
  }

  export type AssociationUpsertWithoutSocialLinksInput = {
    update: XOR<AssociationUpdateWithoutSocialLinksInput, AssociationUncheckedUpdateWithoutSocialLinksInput>
    create: XOR<AssociationCreateWithoutSocialLinksInput, AssociationUncheckedCreateWithoutSocialLinksInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutSocialLinksInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutSocialLinksInput, AssociationUncheckedUpdateWithoutSocialLinksInput>
  }

  export type AssociationUpdateWithoutSocialLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutAssociationNestedInput
    organiser?: OrganiserUpdateOneWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutSocialLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutAssociationNestedInput
    organiser?: OrganiserUncheckedUpdateOneWithoutAssociationNestedInput
  }

  export type AssociationCreateWithoutArticlesInput = {
    id?: string
    name: string
    slug: string
    description: string
    contactEmail: string
    phone?: string | null
    website?: string | null
    logoUrl?: string | null
    updatedAt?: Date | string
    socialLinks?: SocialLinkCreateNestedManyWithoutAssociationInput
    organiser?: OrganiserCreateNestedOneWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutArticlesInput = {
    id?: string
    name: string
    slug: string
    description: string
    contactEmail: string
    phone?: string | null
    website?: string | null
    logoUrl?: string | null
    updatedAt?: Date | string
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutAssociationInput
    organiser?: OrganiserUncheckedCreateNestedOneWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutArticlesInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutArticlesInput, AssociationUncheckedCreateWithoutArticlesInput>
  }

  export type AssociationUpsertWithoutArticlesInput = {
    update: XOR<AssociationUpdateWithoutArticlesInput, AssociationUncheckedUpdateWithoutArticlesInput>
    create: XOR<AssociationCreateWithoutArticlesInput, AssociationUncheckedCreateWithoutArticlesInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutArticlesInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutArticlesInput, AssociationUncheckedUpdateWithoutArticlesInput>
  }

  export type AssociationUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUpdateManyWithoutAssociationNestedInput
    organiser?: OrganiserUpdateOneWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutAssociationNestedInput
    organiser?: OrganiserUncheckedUpdateOneWithoutAssociationNestedInput
  }

  export type AssociationCreateWithoutOrganiserInput = {
    id?: string
    name: string
    slug: string
    description: string
    contactEmail: string
    phone?: string | null
    website?: string | null
    logoUrl?: string | null
    updatedAt?: Date | string
    socialLinks?: SocialLinkCreateNestedManyWithoutAssociationInput
    articles?: ArticleCreateNestedManyWithoutAssociationInput
  }

  export type AssociationUncheckedCreateWithoutOrganiserInput = {
    id?: string
    name: string
    slug: string
    description: string
    contactEmail: string
    phone?: string | null
    website?: string | null
    logoUrl?: string | null
    updatedAt?: Date | string
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutAssociationInput
    articles?: ArticleUncheckedCreateNestedManyWithoutAssociationInput
  }

  export type AssociationCreateOrConnectWithoutOrganiserInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutOrganiserInput, AssociationUncheckedCreateWithoutOrganiserInput>
  }

  export type RefreshTokenCreateWithoutOrganiserInput = {
    tokenHash: string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type RefreshTokenUncheckedCreateWithoutOrganiserInput = {
    id?: number
    tokenHash: string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type RefreshTokenCreateOrConnectWithoutOrganiserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutOrganiserInput, RefreshTokenUncheckedCreateWithoutOrganiserInput>
  }

  export type RefreshTokenCreateManyOrganiserInputEnvelope = {
    data: RefreshTokenCreateManyOrganiserInput | RefreshTokenCreateManyOrganiserInput[]
  }

  export type AssociationUpsertWithoutOrganiserInput = {
    update: XOR<AssociationUpdateWithoutOrganiserInput, AssociationUncheckedUpdateWithoutOrganiserInput>
    create: XOR<AssociationCreateWithoutOrganiserInput, AssociationUncheckedCreateWithoutOrganiserInput>
    where?: AssociationWhereInput
  }

  export type AssociationUpdateToOneWithWhereWithoutOrganiserInput = {
    where?: AssociationWhereInput
    data: XOR<AssociationUpdateWithoutOrganiserInput, AssociationUncheckedUpdateWithoutOrganiserInput>
  }

  export type AssociationUpdateWithoutOrganiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUpdateManyWithoutAssociationNestedInput
    articles?: ArticleUpdateManyWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateWithoutOrganiserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contactEmail?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutAssociationNestedInput
    articles?: ArticleUncheckedUpdateManyWithoutAssociationNestedInput
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutOrganiserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutOrganiserInput, RefreshTokenUncheckedUpdateWithoutOrganiserInput>
    create: XOR<RefreshTokenCreateWithoutOrganiserInput, RefreshTokenUncheckedCreateWithoutOrganiserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutOrganiserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutOrganiserInput, RefreshTokenUncheckedUpdateWithoutOrganiserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutOrganiserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutOrganiserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    tokenHash?: StringFilter<"RefreshToken"> | string
    organiserId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revoked?: BoolFilter<"RefreshToken"> | boolean
  }

  export type OrganiserCreateWithoutTokensInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.GlobalRole
    createdAt?: Date | string
    association: AssociationCreateNestedOneWithoutOrganiserInput
  }

  export type OrganiserUncheckedCreateWithoutTokensInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.GlobalRole
    createdAt?: Date | string
    associationId: string
  }

  export type OrganiserCreateOrConnectWithoutTokensInput = {
    where: OrganiserWhereUniqueInput
    create: XOR<OrganiserCreateWithoutTokensInput, OrganiserUncheckedCreateWithoutTokensInput>
  }

  export type OrganiserUpsertWithoutTokensInput = {
    update: XOR<OrganiserUpdateWithoutTokensInput, OrganiserUncheckedUpdateWithoutTokensInput>
    create: XOR<OrganiserCreateWithoutTokensInput, OrganiserUncheckedCreateWithoutTokensInput>
    where?: OrganiserWhereInput
  }

  export type OrganiserUpdateToOneWithWhereWithoutTokensInput = {
    where?: OrganiserWhereInput
    data: XOR<OrganiserUpdateWithoutTokensInput, OrganiserUncheckedUpdateWithoutTokensInput>
  }

  export type OrganiserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    association?: AssociationUpdateOneRequiredWithoutOrganiserNestedInput
  }

  export type OrganiserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumGlobalRoleFieldUpdateOperationsInput | $Enums.GlobalRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    associationId?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkCreateManyAssociationInput = {
    id?: number
    platform: $Enums.SocialPlatform
    url: string
  }

  export type ArticleCreateManyAssociationInput = {
    id?: number
    slug: string
    title: string
    bodyMd: string
    bodyHtml?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkUpdateWithoutAssociationInput = {
    platform?: EnumSocialPlatformFieldUpdateOperationsInput | $Enums.SocialPlatform
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkUncheckedUpdateWithoutAssociationInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: EnumSocialPlatformFieldUpdateOperationsInput | $Enums.SocialPlatform
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkUncheckedUpdateManyWithoutAssociationInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: EnumSocialPlatformFieldUpdateOperationsInput | $Enums.SocialPlatform
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleUpdateWithoutAssociationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    bodyMd?: StringFieldUpdateOperationsInput | string
    bodyHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateWithoutAssociationInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    bodyMd?: StringFieldUpdateOperationsInput | string
    bodyHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyWithoutAssociationInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    bodyMd?: StringFieldUpdateOperationsInput | string
    bodyHtml?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyOrganiserInput = {
    id?: number
    tokenHash: string
    expiresAt: Date | string
    revoked?: boolean
  }

  export type RefreshTokenUpdateWithoutOrganiserInput = {
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenUncheckedUpdateWithoutOrganiserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RefreshTokenUncheckedUpdateManyWithoutOrganiserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
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
  export const dmmf: runtime.BaseDMMF
}