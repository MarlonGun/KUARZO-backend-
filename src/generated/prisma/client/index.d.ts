
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Departamento
 * 
 */
export type Departamento = $Result.DefaultSelection<Prisma.$DepartamentoPayload>
/**
 * Model Ciudad
 * 
 */
export type Ciudad = $Result.DefaultSelection<Prisma.$CiudadPayload>
/**
 * Model Direccion
 * 
 */
export type Direccion = $Result.DefaultSelection<Prisma.$DireccionPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model ImagenProducto
 * 
 */
export type ImagenProducto = $Result.DefaultSelection<Prisma.$ImagenProductoPayload>
/**
 * Model Carrito
 * 
 */
export type Carrito = $Result.DefaultSelection<Prisma.$CarritoPayload>
/**
 * Model DetalleCarrito
 * 
 */
export type DetalleCarrito = $Result.DefaultSelection<Prisma.$DetalleCarritoPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model DetallePedido
 * 
 */
export type DetallePedido = $Result.DefaultSelection<Prisma.$DetallePedidoPayload>
/**
 * Model Factura
 * 
 */
export type Factura = $Result.DefaultSelection<Prisma.$FacturaPayload>
/**
 * Model DetalleFactura
 * 
 */
export type DetalleFactura = $Result.DefaultSelection<Prisma.$DetalleFacturaPayload>
/**
 * Model Pago
 * 
 */
export type Pago = $Result.DefaultSelection<Prisma.$PagoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Rols
 * const rols = await prisma.rol.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Rols
   * const rols = await prisma.rol.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departamento`: Exposes CRUD operations for the **Departamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departamentos
    * const departamentos = await prisma.departamento.findMany()
    * ```
    */
  get departamento(): Prisma.DepartamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ciudad`: Exposes CRUD operations for the **Ciudad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ciudads
    * const ciudads = await prisma.ciudad.findMany()
    * ```
    */
  get ciudad(): Prisma.CiudadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.direccion`: Exposes CRUD operations for the **Direccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Direccions
    * const direccions = await prisma.direccion.findMany()
    * ```
    */
  get direccion(): Prisma.DireccionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imagenProducto`: Exposes CRUD operations for the **ImagenProducto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImagenProductos
    * const imagenProductos = await prisma.imagenProducto.findMany()
    * ```
    */
  get imagenProducto(): Prisma.ImagenProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrito`: Exposes CRUD operations for the **Carrito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carritos
    * const carritos = await prisma.carrito.findMany()
    * ```
    */
  get carrito(): Prisma.CarritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleCarrito`: Exposes CRUD operations for the **DetalleCarrito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleCarritos
    * const detalleCarritos = await prisma.detalleCarrito.findMany()
    * ```
    */
  get detalleCarrito(): Prisma.DetalleCarritoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detallePedido`: Exposes CRUD operations for the **DetallePedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetallePedidos
    * const detallePedidos = await prisma.detallePedido.findMany()
    * ```
    */
  get detallePedido(): Prisma.DetallePedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factura`: Exposes CRUD operations for the **Factura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facturas
    * const facturas = await prisma.factura.findMany()
    * ```
    */
  get factura(): Prisma.FacturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalleFactura`: Exposes CRUD operations for the **DetalleFactura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetalleFacturas
    * const detalleFacturas = await prisma.detalleFactura.findMany()
    * ```
    */
  get detalleFactura(): Prisma.DetalleFacturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pago`: Exposes CRUD operations for the **Pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pago.findMany()
    * ```
    */
  get pago(): Prisma.PagoDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Rol: 'Rol',
    Usuario: 'Usuario',
    Departamento: 'Departamento',
    Ciudad: 'Ciudad',
    Direccion: 'Direccion',
    Categoria: 'Categoria',
    Producto: 'Producto',
    ImagenProducto: 'ImagenProducto',
    Carrito: 'Carrito',
    DetalleCarrito: 'DetalleCarrito',
    Pedido: 'Pedido',
    DetallePedido: 'DetallePedido',
    Factura: 'Factura',
    DetalleFactura: 'DetalleFactura',
    Pago: 'Pago'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "rol" | "usuario" | "departamento" | "ciudad" | "direccion" | "categoria" | "producto" | "imagenProducto" | "carrito" | "detalleCarrito" | "pedido" | "detallePedido" | "factura" | "detalleFactura" | "pago"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Departamento: {
        payload: Prisma.$DepartamentoPayload<ExtArgs>
        fields: Prisma.DepartamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          findFirst: {
            args: Prisma.DepartamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          findMany: {
            args: Prisma.DepartamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>[]
          }
          create: {
            args: Prisma.DepartamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          createMany: {
            args: Prisma.DepartamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepartamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          update: {
            args: Prisma.DepartamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          deleteMany: {
            args: Prisma.DepartamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          aggregate: {
            args: Prisma.DepartamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartamento>
          }
          groupBy: {
            args: Prisma.DepartamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartamentoCountArgs<ExtArgs>
            result: $Utils.Optional<DepartamentoCountAggregateOutputType> | number
          }
        }
      }
      Ciudad: {
        payload: Prisma.$CiudadPayload<ExtArgs>
        fields: Prisma.CiudadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CiudadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CiudadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          findFirst: {
            args: Prisma.CiudadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CiudadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          findMany: {
            args: Prisma.CiudadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>[]
          }
          create: {
            args: Prisma.CiudadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          createMany: {
            args: Prisma.CiudadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CiudadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          update: {
            args: Prisma.CiudadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          deleteMany: {
            args: Prisma.CiudadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CiudadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CiudadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CiudadPayload>
          }
          aggregate: {
            args: Prisma.CiudadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCiudad>
          }
          groupBy: {
            args: Prisma.CiudadGroupByArgs<ExtArgs>
            result: $Utils.Optional<CiudadGroupByOutputType>[]
          }
          count: {
            args: Prisma.CiudadCountArgs<ExtArgs>
            result: $Utils.Optional<CiudadCountAggregateOutputType> | number
          }
        }
      }
      Direccion: {
        payload: Prisma.$DireccionPayload<ExtArgs>
        fields: Prisma.DireccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DireccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DireccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          findFirst: {
            args: Prisma.DireccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DireccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          findMany: {
            args: Prisma.DireccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>[]
          }
          create: {
            args: Prisma.DireccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          createMany: {
            args: Prisma.DireccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DireccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          update: {
            args: Prisma.DireccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          deleteMany: {
            args: Prisma.DireccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DireccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DireccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          aggregate: {
            args: Prisma.DireccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDireccion>
          }
          groupBy: {
            args: Prisma.DireccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DireccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DireccionCountArgs<ExtArgs>
            result: $Utils.Optional<DireccionCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      ImagenProducto: {
        payload: Prisma.$ImagenProductoPayload<ExtArgs>
        fields: Prisma.ImagenProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagenProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagenProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenProductoPayload>
          }
          findFirst: {
            args: Prisma.ImagenProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagenProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenProductoPayload>
          }
          findMany: {
            args: Prisma.ImagenProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenProductoPayload>[]
          }
          create: {
            args: Prisma.ImagenProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenProductoPayload>
          }
          createMany: {
            args: Prisma.ImagenProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImagenProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenProductoPayload>
          }
          update: {
            args: Prisma.ImagenProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenProductoPayload>
          }
          deleteMany: {
            args: Prisma.ImagenProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagenProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImagenProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenProductoPayload>
          }
          aggregate: {
            args: Prisma.ImagenProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImagenProducto>
          }
          groupBy: {
            args: Prisma.ImagenProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagenProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagenProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ImagenProductoCountAggregateOutputType> | number
          }
        }
      }
      Carrito: {
        payload: Prisma.$CarritoPayload<ExtArgs>
        fields: Prisma.CarritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          findFirst: {
            args: Prisma.CarritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          findMany: {
            args: Prisma.CarritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>[]
          }
          create: {
            args: Prisma.CarritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          createMany: {
            args: Prisma.CarritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CarritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          update: {
            args: Prisma.CarritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          deleteMany: {
            args: Prisma.CarritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CarritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarritoPayload>
          }
          aggregate: {
            args: Prisma.CarritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrito>
          }
          groupBy: {
            args: Prisma.CarritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarritoCountArgs<ExtArgs>
            result: $Utils.Optional<CarritoCountAggregateOutputType> | number
          }
        }
      }
      DetalleCarrito: {
        payload: Prisma.$DetalleCarritoPayload<ExtArgs>
        fields: Prisma.DetalleCarritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleCarritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleCarritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleCarritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>
          }
          findFirst: {
            args: Prisma.DetalleCarritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleCarritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleCarritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>
          }
          findMany: {
            args: Prisma.DetalleCarritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>[]
          }
          create: {
            args: Prisma.DetalleCarritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>
          }
          createMany: {
            args: Prisma.DetalleCarritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetalleCarritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>
          }
          update: {
            args: Prisma.DetalleCarritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>
          }
          deleteMany: {
            args: Prisma.DetalleCarritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleCarritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetalleCarritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleCarritoPayload>
          }
          aggregate: {
            args: Prisma.DetalleCarritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleCarrito>
          }
          groupBy: {
            args: Prisma.DetalleCarritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleCarritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleCarritoCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleCarritoCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      DetallePedido: {
        payload: Prisma.$DetallePedidoPayload<ExtArgs>
        fields: Prisma.DetallePedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetallePedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetallePedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePedidoPayload>
          }
          findFirst: {
            args: Prisma.DetallePedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetallePedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePedidoPayload>
          }
          findMany: {
            args: Prisma.DetallePedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePedidoPayload>[]
          }
          create: {
            args: Prisma.DetallePedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePedidoPayload>
          }
          createMany: {
            args: Prisma.DetallePedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetallePedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePedidoPayload>
          }
          update: {
            args: Prisma.DetallePedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePedidoPayload>
          }
          deleteMany: {
            args: Prisma.DetallePedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetallePedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetallePedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePedidoPayload>
          }
          aggregate: {
            args: Prisma.DetallePedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetallePedido>
          }
          groupBy: {
            args: Prisma.DetallePedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetallePedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetallePedidoCountArgs<ExtArgs>
            result: $Utils.Optional<DetallePedidoCountAggregateOutputType> | number
          }
        }
      }
      Factura: {
        payload: Prisma.$FacturaPayload<ExtArgs>
        fields: Prisma.FacturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findFirst: {
            args: Prisma.FacturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findMany: {
            args: Prisma.FacturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          create: {
            args: Prisma.FacturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          createMany: {
            args: Prisma.FacturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FacturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          update: {
            args: Prisma.FacturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          deleteMany: {
            args: Prisma.FacturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          aggregate: {
            args: Prisma.FacturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactura>
          }
          groupBy: {
            args: Prisma.FacturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacturaCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaCountAggregateOutputType> | number
          }
        }
      }
      DetalleFactura: {
        payload: Prisma.$DetalleFacturaPayload<ExtArgs>
        fields: Prisma.DetalleFacturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleFacturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleFacturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          findFirst: {
            args: Prisma.DetalleFacturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleFacturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          findMany: {
            args: Prisma.DetalleFacturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>[]
          }
          create: {
            args: Prisma.DetalleFacturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          createMany: {
            args: Prisma.DetalleFacturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DetalleFacturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          update: {
            args: Prisma.DetalleFacturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          deleteMany: {
            args: Prisma.DetalleFacturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleFacturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DetalleFacturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetalleFacturaPayload>
          }
          aggregate: {
            args: Prisma.DetalleFacturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalleFactura>
          }
          groupBy: {
            args: Prisma.DetalleFacturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleFacturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleFacturaCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleFacturaCountAggregateOutputType> | number
          }
        }
      }
      Pago: {
        payload: Prisma.$PagoPayload<ExtArgs>
        fields: Prisma.PagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findFirst: {
            args: Prisma.PagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findMany: {
            args: Prisma.PagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          create: {
            args: Prisma.PagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          createMany: {
            args: Prisma.PagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          update: {
            args: Prisma.PagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          deleteMany: {
            args: Prisma.PagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          aggregate: {
            args: Prisma.PagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePago>
          }
          groupBy: {
            args: Prisma.PagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoCountArgs<ExtArgs>
            result: $Utils.Optional<PagoCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    rol?: RolOmit
    usuario?: UsuarioOmit
    departamento?: DepartamentoOmit
    ciudad?: CiudadOmit
    direccion?: DireccionOmit
    categoria?: CategoriaOmit
    producto?: ProductoOmit
    imagenProducto?: ImagenProductoOmit
    carrito?: CarritoOmit
    detalleCarrito?: DetalleCarritoOmit
    pedido?: PedidoOmit
    detallePedido?: DetallePedidoOmit
    factura?: FacturaOmit
    detalleFactura?: DetalleFacturaOmit
    pago?: PagoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuarios: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    direcciones: number
    pedidos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direcciones?: boolean | UsuarioCountOutputTypeCountDireccionesArgs
    pedidos?: boolean | UsuarioCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDireccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type DepartamentoCountOutputType
   */

  export type DepartamentoCountOutputType = {
    ciudades: number
  }

  export type DepartamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudades?: boolean | DepartamentoCountOutputTypeCountCiudadesArgs
  }

  // Custom InputTypes
  /**
   * DepartamentoCountOutputType without action
   */
  export type DepartamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartamentoCountOutputType
     */
    select?: DepartamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartamentoCountOutputType without action
   */
  export type DepartamentoCountOutputTypeCountCiudadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CiudadWhereInput
  }


  /**
   * Count Type CiudadCountOutputType
   */

  export type CiudadCountOutputType = {
    direcciones: number
  }

  export type CiudadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direcciones?: boolean | CiudadCountOutputTypeCountDireccionesArgs
  }

  // Custom InputTypes
  /**
   * CiudadCountOutputType without action
   */
  export type CiudadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CiudadCountOutputType
     */
    select?: CiudadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CiudadCountOutputType without action
   */
  export type CiudadCountOutputTypeCountDireccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
  }


  /**
   * Count Type DireccionCountOutputType
   */

  export type DireccionCountOutputType = {
    pedidos: number
  }

  export type DireccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | DireccionCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * DireccionCountOutputType without action
   */
  export type DireccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DireccionCountOutputType
     */
    select?: DireccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DireccionCountOutputType without action
   */
  export type DireccionCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    productos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriaCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    imagenes: number
    detallesCarrito: number
    detallesPedido: number
    detallesFactura: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imagenes?: boolean | ProductoCountOutputTypeCountImagenesArgs
    detallesCarrito?: boolean | ProductoCountOutputTypeCountDetallesCarritoArgs
    detallesPedido?: boolean | ProductoCountOutputTypeCountDetallesPedidoArgs
    detallesFactura?: boolean | ProductoCountOutputTypeCountDetallesFacturaArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountImagenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagenProductoWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountDetallesCarritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleCarritoWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountDetallesPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetallePedidoWhereInput
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountDetallesFacturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleFacturaWhereInput
  }


  /**
   * Count Type CarritoCountOutputType
   */

  export type CarritoCountOutputType = {
    detalles: number
  }

  export type CarritoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | CarritoCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * CarritoCountOutputType without action
   */
  export type CarritoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarritoCountOutputType
     */
    select?: CarritoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarritoCountOutputType without action
   */
  export type CarritoCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleCarritoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    detalles: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | PedidoCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetallePedidoWhereInput
  }


  /**
   * Count Type FacturaCountOutputType
   */

  export type FacturaCountOutputType = {
    detalles: number
  }

  export type FacturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | FacturaCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * FacturaCountOutputType without action
   */
  export type FacturaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCountOutputType
     */
    select?: FacturaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacturaCountOutputType without action
   */
  export type FacturaCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleFacturaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    nombre: string
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>



  export type RolSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
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
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Rol$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id: FieldRef<"Rol", 'Int'>
    readonly nombre: FieldRef<"Rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.usuarios
   */
  export type Rol$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    rolId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    rolId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    rolId: number | null
    primerNombre: string | null
    segundoNombre: string | null
    primerApellido: string | null
    segundoApellido: string | null
    correo: string | null
    contrasena: string | null
    telefono: string | null
    fechaRegistro: Date | null
    estado: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    rolId: number | null
    primerNombre: string | null
    segundoNombre: string | null
    primerApellido: string | null
    segundoApellido: string | null
    correo: string | null
    contrasena: string | null
    telefono: string | null
    fechaRegistro: Date | null
    estado: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    rolId: number
    primerNombre: number
    segundoNombre: number
    primerApellido: number
    segundoApellido: number
    correo: number
    contrasena: number
    telefono: number
    fechaRegistro: number
    estado: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    rolId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    rolId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    rolId?: true
    primerNombre?: true
    segundoNombre?: true
    primerApellido?: true
    segundoApellido?: true
    correo?: true
    contrasena?: true
    telefono?: true
    fechaRegistro?: true
    estado?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    rolId?: true
    primerNombre?: true
    segundoNombre?: true
    primerApellido?: true
    segundoApellido?: true
    correo?: true
    contrasena?: true
    telefono?: true
    fechaRegistro?: true
    estado?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    rolId?: true
    primerNombre?: true
    segundoNombre?: true
    primerApellido?: true
    segundoApellido?: true
    correo?: true
    contrasena?: true
    telefono?: true
    fechaRegistro?: true
    estado?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    rolId: number
    primerNombre: string
    segundoNombre: string | null
    primerApellido: string
    segundoApellido: string | null
    correo: string
    contrasena: string
    telefono: string | null
    fechaRegistro: Date
    estado: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rolId?: boolean
    primerNombre?: boolean
    segundoNombre?: boolean
    primerApellido?: boolean
    segundoApellido?: boolean
    correo?: boolean
    contrasena?: boolean
    telefono?: boolean
    fechaRegistro?: boolean
    estado?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    direcciones?: boolean | Usuario$direccionesArgs<ExtArgs>
    carrito?: boolean | Usuario$carritoArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    rolId?: boolean
    primerNombre?: boolean
    segundoNombre?: boolean
    primerApellido?: boolean
    segundoApellido?: boolean
    correo?: boolean
    contrasena?: boolean
    telefono?: boolean
    fechaRegistro?: boolean
    estado?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rolId" | "primerNombre" | "segundoNombre" | "primerApellido" | "segundoApellido" | "correo" | "contrasena" | "telefono" | "fechaRegistro" | "estado", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    direcciones?: boolean | Usuario$direccionesArgs<ExtArgs>
    carrito?: boolean | Usuario$carritoArgs<ExtArgs>
    pedidos?: boolean | Usuario$pedidosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      direcciones: Prisma.$DireccionPayload<ExtArgs>[]
      carrito: Prisma.$CarritoPayload<ExtArgs> | null
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rolId: number
      primerNombre: string
      segundoNombre: string | null
      primerApellido: string
      segundoApellido: string | null
      correo: string
      contrasena: string
      telefono: string | null
      fechaRegistro: Date
      estado: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    direcciones<T extends Usuario$direccionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$direccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carrito<T extends Usuario$carritoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$carritoArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pedidos<T extends Usuario$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly rolId: FieldRef<"Usuario", 'Int'>
    readonly primerNombre: FieldRef<"Usuario", 'String'>
    readonly segundoNombre: FieldRef<"Usuario", 'String'>
    readonly primerApellido: FieldRef<"Usuario", 'String'>
    readonly segundoApellido: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
    readonly telefono: FieldRef<"Usuario", 'String'>
    readonly fechaRegistro: FieldRef<"Usuario", 'DateTime'>
    readonly estado: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.direcciones
   */
  export type Usuario$direccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    cursor?: DireccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Usuario.carrito
   */
  export type Usuario$carritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    where?: CarritoWhereInput
  }

  /**
   * Usuario.pedidos
   */
  export type Usuario$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Departamento
   */

  export type AggregateDepartamento = {
    _count: DepartamentoCountAggregateOutputType | null
    _avg: DepartamentoAvgAggregateOutputType | null
    _sum: DepartamentoSumAggregateOutputType | null
    _min: DepartamentoMinAggregateOutputType | null
    _max: DepartamentoMaxAggregateOutputType | null
  }

  export type DepartamentoAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartamentoSumAggregateOutputType = {
    id: number | null
  }

  export type DepartamentoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type DepartamentoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type DepartamentoCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type DepartamentoAvgAggregateInputType = {
    id?: true
  }

  export type DepartamentoSumAggregateInputType = {
    id?: true
  }

  export type DepartamentoMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type DepartamentoMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type DepartamentoCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type DepartamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departamento to aggregate.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departamentos
    **/
    _count?: true | DepartamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartamentoMaxAggregateInputType
  }

  export type GetDepartamentoAggregateType<T extends DepartamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartamento[P]>
      : GetScalarType<T[P], AggregateDepartamento[P]>
  }




  export type DepartamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartamentoWhereInput
    orderBy?: DepartamentoOrderByWithAggregationInput | DepartamentoOrderByWithAggregationInput[]
    by: DepartamentoScalarFieldEnum[] | DepartamentoScalarFieldEnum
    having?: DepartamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartamentoCountAggregateInputType | true
    _avg?: DepartamentoAvgAggregateInputType
    _sum?: DepartamentoSumAggregateInputType
    _min?: DepartamentoMinAggregateInputType
    _max?: DepartamentoMaxAggregateInputType
  }

  export type DepartamentoGroupByOutputType = {
    id: number
    nombre: string
    _count: DepartamentoCountAggregateOutputType | null
    _avg: DepartamentoAvgAggregateOutputType | null
    _sum: DepartamentoSumAggregateOutputType | null
    _min: DepartamentoMinAggregateOutputType | null
    _max: DepartamentoMaxAggregateOutputType | null
  }

  type GetDepartamentoGroupByPayload<T extends DepartamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartamentoGroupByOutputType[P]>
            : GetScalarType<T[P], DepartamentoGroupByOutputType[P]>
        }
      >
    >


  export type DepartamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    ciudades?: boolean | Departamento$ciudadesArgs<ExtArgs>
    _count?: boolean | DepartamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departamento"]>



  export type DepartamentoSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type DepartamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["departamento"]>
  export type DepartamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciudades?: boolean | Departamento$ciudadesArgs<ExtArgs>
    _count?: boolean | DepartamentoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DepartamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departamento"
    objects: {
      ciudades: Prisma.$CiudadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["departamento"]>
    composites: {}
  }

  type DepartamentoGetPayload<S extends boolean | null | undefined | DepartamentoDefaultArgs> = $Result.GetResult<Prisma.$DepartamentoPayload, S>

  type DepartamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartamentoCountAggregateInputType | true
    }

  export interface DepartamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departamento'], meta: { name: 'Departamento' } }
    /**
     * Find zero or one Departamento that matches the filter.
     * @param {DepartamentoFindUniqueArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartamentoFindUniqueArgs>(args: SelectSubset<T, DepartamentoFindUniqueArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartamentoFindUniqueOrThrowArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindFirstArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartamentoFindFirstArgs>(args?: SelectSubset<T, DepartamentoFindFirstArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindFirstOrThrowArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departamentos
     * const departamentos = await prisma.departamento.findMany()
     * 
     * // Get first 10 Departamentos
     * const departamentos = await prisma.departamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departamentoWithIdOnly = await prisma.departamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartamentoFindManyArgs>(args?: SelectSubset<T, DepartamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departamento.
     * @param {DepartamentoCreateArgs} args - Arguments to create a Departamento.
     * @example
     * // Create one Departamento
     * const Departamento = await prisma.departamento.create({
     *   data: {
     *     // ... data to create a Departamento
     *   }
     * })
     * 
     */
    create<T extends DepartamentoCreateArgs>(args: SelectSubset<T, DepartamentoCreateArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departamentos.
     * @param {DepartamentoCreateManyArgs} args - Arguments to create many Departamentos.
     * @example
     * // Create many Departamentos
     * const departamento = await prisma.departamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartamentoCreateManyArgs>(args?: SelectSubset<T, DepartamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Departamento.
     * @param {DepartamentoDeleteArgs} args - Arguments to delete one Departamento.
     * @example
     * // Delete one Departamento
     * const Departamento = await prisma.departamento.delete({
     *   where: {
     *     // ... filter to delete one Departamento
     *   }
     * })
     * 
     */
    delete<T extends DepartamentoDeleteArgs>(args: SelectSubset<T, DepartamentoDeleteArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departamento.
     * @param {DepartamentoUpdateArgs} args - Arguments to update one Departamento.
     * @example
     * // Update one Departamento
     * const departamento = await prisma.departamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartamentoUpdateArgs>(args: SelectSubset<T, DepartamentoUpdateArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departamentos.
     * @param {DepartamentoDeleteManyArgs} args - Arguments to filter Departamentos to delete.
     * @example
     * // Delete a few Departamentos
     * const { count } = await prisma.departamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartamentoDeleteManyArgs>(args?: SelectSubset<T, DepartamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departamentos
     * const departamento = await prisma.departamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartamentoUpdateManyArgs>(args: SelectSubset<T, DepartamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Departamento.
     * @param {DepartamentoUpsertArgs} args - Arguments to update or create a Departamento.
     * @example
     * // Update or create a Departamento
     * const departamento = await prisma.departamento.upsert({
     *   create: {
     *     // ... data to create a Departamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departamento we want to update
     *   }
     * })
     */
    upsert<T extends DepartamentoUpsertArgs>(args: SelectSubset<T, DepartamentoUpsertArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoCountArgs} args - Arguments to filter Departamentos to count.
     * @example
     * // Count the number of Departamentos
     * const count = await prisma.departamento.count({
     *   where: {
     *     // ... the filter for the Departamentos we want to count
     *   }
     * })
    **/
    count<T extends DepartamentoCountArgs>(
      args?: Subset<T, DepartamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartamentoAggregateArgs>(args: Subset<T, DepartamentoAggregateArgs>): Prisma.PrismaPromise<GetDepartamentoAggregateType<T>>

    /**
     * Group by Departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoGroupByArgs} args - Group by arguments.
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
      T extends DepartamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartamentoGroupByArgs['orderBy'] }
        : { orderBy?: DepartamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departamento model
   */
  readonly fields: DepartamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ciudades<T extends Departamento$ciudadesArgs<ExtArgs> = {}>(args?: Subset<T, Departamento$ciudadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Departamento model
   */
  interface DepartamentoFieldRefs {
    readonly id: FieldRef<"Departamento", 'Int'>
    readonly nombre: FieldRef<"Departamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Departamento findUnique
   */
  export type DepartamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento findUniqueOrThrow
   */
  export type DepartamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento findFirst
   */
  export type DepartamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departamentos.
     */
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento findFirstOrThrow
   */
  export type DepartamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departamentos.
     */
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento findMany
   */
  export type DepartamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamentos to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departamentos.
     */
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento create
   */
  export type DepartamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Departamento.
     */
    data: XOR<DepartamentoCreateInput, DepartamentoUncheckedCreateInput>
  }

  /**
   * Departamento createMany
   */
  export type DepartamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departamentos.
     */
    data: DepartamentoCreateManyInput | DepartamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departamento update
   */
  export type DepartamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Departamento.
     */
    data: XOR<DepartamentoUpdateInput, DepartamentoUncheckedUpdateInput>
    /**
     * Choose, which Departamento to update.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento updateMany
   */
  export type DepartamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departamentos.
     */
    data: XOR<DepartamentoUpdateManyMutationInput, DepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which Departamentos to update
     */
    where?: DepartamentoWhereInput
    /**
     * Limit how many Departamentos to update.
     */
    limit?: number
  }

  /**
   * Departamento upsert
   */
  export type DepartamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Departamento to update in case it exists.
     */
    where: DepartamentoWhereUniqueInput
    /**
     * In case the Departamento found by the `where` argument doesn't exist, create a new Departamento with this data.
     */
    create: XOR<DepartamentoCreateInput, DepartamentoUncheckedCreateInput>
    /**
     * In case the Departamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartamentoUpdateInput, DepartamentoUncheckedUpdateInput>
  }

  /**
   * Departamento delete
   */
  export type DepartamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter which Departamento to delete.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento deleteMany
   */
  export type DepartamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departamentos to delete
     */
    where?: DepartamentoWhereInput
    /**
     * Limit how many Departamentos to delete.
     */
    limit?: number
  }

  /**
   * Departamento.ciudades
   */
  export type Departamento$ciudadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    where?: CiudadWhereInput
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    cursor?: CiudadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Departamento without action
   */
  export type DepartamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
  }


  /**
   * Model Ciudad
   */

  export type AggregateCiudad = {
    _count: CiudadCountAggregateOutputType | null
    _avg: CiudadAvgAggregateOutputType | null
    _sum: CiudadSumAggregateOutputType | null
    _min: CiudadMinAggregateOutputType | null
    _max: CiudadMaxAggregateOutputType | null
  }

  export type CiudadAvgAggregateOutputType = {
    id: number | null
    departamentoId: number | null
  }

  export type CiudadSumAggregateOutputType = {
    id: number | null
    departamentoId: number | null
  }

  export type CiudadMinAggregateOutputType = {
    id: number | null
    departamentoId: number | null
    nombre: string | null
  }

  export type CiudadMaxAggregateOutputType = {
    id: number | null
    departamentoId: number | null
    nombre: string | null
  }

  export type CiudadCountAggregateOutputType = {
    id: number
    departamentoId: number
    nombre: number
    _all: number
  }


  export type CiudadAvgAggregateInputType = {
    id?: true
    departamentoId?: true
  }

  export type CiudadSumAggregateInputType = {
    id?: true
    departamentoId?: true
  }

  export type CiudadMinAggregateInputType = {
    id?: true
    departamentoId?: true
    nombre?: true
  }

  export type CiudadMaxAggregateInputType = {
    id?: true
    departamentoId?: true
    nombre?: true
  }

  export type CiudadCountAggregateInputType = {
    id?: true
    departamentoId?: true
    nombre?: true
    _all?: true
  }

  export type CiudadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciudad to aggregate.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ciudads
    **/
    _count?: true | CiudadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CiudadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CiudadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CiudadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CiudadMaxAggregateInputType
  }

  export type GetCiudadAggregateType<T extends CiudadAggregateArgs> = {
        [P in keyof T & keyof AggregateCiudad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCiudad[P]>
      : GetScalarType<T[P], AggregateCiudad[P]>
  }




  export type CiudadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CiudadWhereInput
    orderBy?: CiudadOrderByWithAggregationInput | CiudadOrderByWithAggregationInput[]
    by: CiudadScalarFieldEnum[] | CiudadScalarFieldEnum
    having?: CiudadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CiudadCountAggregateInputType | true
    _avg?: CiudadAvgAggregateInputType
    _sum?: CiudadSumAggregateInputType
    _min?: CiudadMinAggregateInputType
    _max?: CiudadMaxAggregateInputType
  }

  export type CiudadGroupByOutputType = {
    id: number
    departamentoId: number
    nombre: string
    _count: CiudadCountAggregateOutputType | null
    _avg: CiudadAvgAggregateOutputType | null
    _sum: CiudadSumAggregateOutputType | null
    _min: CiudadMinAggregateOutputType | null
    _max: CiudadMaxAggregateOutputType | null
  }

  type GetCiudadGroupByPayload<T extends CiudadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CiudadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CiudadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CiudadGroupByOutputType[P]>
            : GetScalarType<T[P], CiudadGroupByOutputType[P]>
        }
      >
    >


  export type CiudadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departamentoId?: boolean
    nombre?: boolean
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    direcciones?: boolean | Ciudad$direccionesArgs<ExtArgs>
    _count?: boolean | CiudadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ciudad"]>



  export type CiudadSelectScalar = {
    id?: boolean
    departamentoId?: boolean
    nombre?: boolean
  }

  export type CiudadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "departamentoId" | "nombre", ExtArgs["result"]["ciudad"]>
  export type CiudadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    direcciones?: boolean | Ciudad$direccionesArgs<ExtArgs>
    _count?: boolean | CiudadCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CiudadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ciudad"
    objects: {
      departamento: Prisma.$DepartamentoPayload<ExtArgs>
      direcciones: Prisma.$DireccionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      departamentoId: number
      nombre: string
    }, ExtArgs["result"]["ciudad"]>
    composites: {}
  }

  type CiudadGetPayload<S extends boolean | null | undefined | CiudadDefaultArgs> = $Result.GetResult<Prisma.$CiudadPayload, S>

  type CiudadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CiudadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CiudadCountAggregateInputType | true
    }

  export interface CiudadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ciudad'], meta: { name: 'Ciudad' } }
    /**
     * Find zero or one Ciudad that matches the filter.
     * @param {CiudadFindUniqueArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CiudadFindUniqueArgs>(args: SelectSubset<T, CiudadFindUniqueArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ciudad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CiudadFindUniqueOrThrowArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CiudadFindUniqueOrThrowArgs>(args: SelectSubset<T, CiudadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciudad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadFindFirstArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CiudadFindFirstArgs>(args?: SelectSubset<T, CiudadFindFirstArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ciudad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadFindFirstOrThrowArgs} args - Arguments to find a Ciudad
     * @example
     * // Get one Ciudad
     * const ciudad = await prisma.ciudad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CiudadFindFirstOrThrowArgs>(args?: SelectSubset<T, CiudadFindFirstOrThrowArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ciudads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ciudads
     * const ciudads = await prisma.ciudad.findMany()
     * 
     * // Get first 10 Ciudads
     * const ciudads = await prisma.ciudad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ciudadWithIdOnly = await prisma.ciudad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CiudadFindManyArgs>(args?: SelectSubset<T, CiudadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ciudad.
     * @param {CiudadCreateArgs} args - Arguments to create a Ciudad.
     * @example
     * // Create one Ciudad
     * const Ciudad = await prisma.ciudad.create({
     *   data: {
     *     // ... data to create a Ciudad
     *   }
     * })
     * 
     */
    create<T extends CiudadCreateArgs>(args: SelectSubset<T, CiudadCreateArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ciudads.
     * @param {CiudadCreateManyArgs} args - Arguments to create many Ciudads.
     * @example
     * // Create many Ciudads
     * const ciudad = await prisma.ciudad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CiudadCreateManyArgs>(args?: SelectSubset<T, CiudadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ciudad.
     * @param {CiudadDeleteArgs} args - Arguments to delete one Ciudad.
     * @example
     * // Delete one Ciudad
     * const Ciudad = await prisma.ciudad.delete({
     *   where: {
     *     // ... filter to delete one Ciudad
     *   }
     * })
     * 
     */
    delete<T extends CiudadDeleteArgs>(args: SelectSubset<T, CiudadDeleteArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ciudad.
     * @param {CiudadUpdateArgs} args - Arguments to update one Ciudad.
     * @example
     * // Update one Ciudad
     * const ciudad = await prisma.ciudad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CiudadUpdateArgs>(args: SelectSubset<T, CiudadUpdateArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ciudads.
     * @param {CiudadDeleteManyArgs} args - Arguments to filter Ciudads to delete.
     * @example
     * // Delete a few Ciudads
     * const { count } = await prisma.ciudad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CiudadDeleteManyArgs>(args?: SelectSubset<T, CiudadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ciudads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ciudads
     * const ciudad = await prisma.ciudad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CiudadUpdateManyArgs>(args: SelectSubset<T, CiudadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ciudad.
     * @param {CiudadUpsertArgs} args - Arguments to update or create a Ciudad.
     * @example
     * // Update or create a Ciudad
     * const ciudad = await prisma.ciudad.upsert({
     *   create: {
     *     // ... data to create a Ciudad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ciudad we want to update
     *   }
     * })
     */
    upsert<T extends CiudadUpsertArgs>(args: SelectSubset<T, CiudadUpsertArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ciudads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadCountArgs} args - Arguments to filter Ciudads to count.
     * @example
     * // Count the number of Ciudads
     * const count = await prisma.ciudad.count({
     *   where: {
     *     // ... the filter for the Ciudads we want to count
     *   }
     * })
    **/
    count<T extends CiudadCountArgs>(
      args?: Subset<T, CiudadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CiudadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ciudad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CiudadAggregateArgs>(args: Subset<T, CiudadAggregateArgs>): Prisma.PrismaPromise<GetCiudadAggregateType<T>>

    /**
     * Group by Ciudad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CiudadGroupByArgs} args - Group by arguments.
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
      T extends CiudadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CiudadGroupByArgs['orderBy'] }
        : { orderBy?: CiudadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CiudadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCiudadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ciudad model
   */
  readonly fields: CiudadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ciudad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CiudadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departamento<T extends DepartamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartamentoDefaultArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    direcciones<T extends Ciudad$direccionesArgs<ExtArgs> = {}>(args?: Subset<T, Ciudad$direccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ciudad model
   */
  interface CiudadFieldRefs {
    readonly id: FieldRef<"Ciudad", 'Int'>
    readonly departamentoId: FieldRef<"Ciudad", 'Int'>
    readonly nombre: FieldRef<"Ciudad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ciudad findUnique
   */
  export type CiudadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad findUniqueOrThrow
   */
  export type CiudadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad findFirst
   */
  export type CiudadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciudads.
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciudads.
     */
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Ciudad findFirstOrThrow
   */
  export type CiudadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudad to fetch.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ciudads.
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciudads.
     */
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Ciudad findMany
   */
  export type CiudadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter, which Ciudads to fetch.
     */
    where?: CiudadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ciudads to fetch.
     */
    orderBy?: CiudadOrderByWithRelationInput | CiudadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ciudads.
     */
    cursor?: CiudadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ciudads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ciudads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ciudads.
     */
    distinct?: CiudadScalarFieldEnum | CiudadScalarFieldEnum[]
  }

  /**
   * Ciudad create
   */
  export type CiudadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * The data needed to create a Ciudad.
     */
    data: XOR<CiudadCreateInput, CiudadUncheckedCreateInput>
  }

  /**
   * Ciudad createMany
   */
  export type CiudadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ciudads.
     */
    data: CiudadCreateManyInput | CiudadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ciudad update
   */
  export type CiudadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * The data needed to update a Ciudad.
     */
    data: XOR<CiudadUpdateInput, CiudadUncheckedUpdateInput>
    /**
     * Choose, which Ciudad to update.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad updateMany
   */
  export type CiudadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ciudads.
     */
    data: XOR<CiudadUpdateManyMutationInput, CiudadUncheckedUpdateManyInput>
    /**
     * Filter which Ciudads to update
     */
    where?: CiudadWhereInput
    /**
     * Limit how many Ciudads to update.
     */
    limit?: number
  }

  /**
   * Ciudad upsert
   */
  export type CiudadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * The filter to search for the Ciudad to update in case it exists.
     */
    where: CiudadWhereUniqueInput
    /**
     * In case the Ciudad found by the `where` argument doesn't exist, create a new Ciudad with this data.
     */
    create: XOR<CiudadCreateInput, CiudadUncheckedCreateInput>
    /**
     * In case the Ciudad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CiudadUpdateInput, CiudadUncheckedUpdateInput>
  }

  /**
   * Ciudad delete
   */
  export type CiudadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
    /**
     * Filter which Ciudad to delete.
     */
    where: CiudadWhereUniqueInput
  }

  /**
   * Ciudad deleteMany
   */
  export type CiudadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ciudads to delete
     */
    where?: CiudadWhereInput
    /**
     * Limit how many Ciudads to delete.
     */
    limit?: number
  }

  /**
   * Ciudad.direcciones
   */
  export type Ciudad$direccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    cursor?: DireccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Ciudad without action
   */
  export type CiudadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ciudad
     */
    select?: CiudadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ciudad
     */
    omit?: CiudadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CiudadInclude<ExtArgs> | null
  }


  /**
   * Model Direccion
   */

  export type AggregateDireccion = {
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  export type DireccionAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    ciudadId: number | null
  }

  export type DireccionSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    ciudadId: number | null
  }

  export type DireccionMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    ciudadId: number | null
    callePrincipal: string | null
    numeroExterior: string | null
    barrio: string | null
    referencia: string | null
    codigoPostal: string | null
  }

  export type DireccionMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    ciudadId: number | null
    callePrincipal: string | null
    numeroExterior: string | null
    barrio: string | null
    referencia: string | null
    codigoPostal: string | null
  }

  export type DireccionCountAggregateOutputType = {
    id: number
    usuarioId: number
    ciudadId: number
    callePrincipal: number
    numeroExterior: number
    barrio: number
    referencia: number
    codigoPostal: number
    _all: number
  }


  export type DireccionAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    ciudadId?: true
  }

  export type DireccionSumAggregateInputType = {
    id?: true
    usuarioId?: true
    ciudadId?: true
  }

  export type DireccionMinAggregateInputType = {
    id?: true
    usuarioId?: true
    ciudadId?: true
    callePrincipal?: true
    numeroExterior?: true
    barrio?: true
    referencia?: true
    codigoPostal?: true
  }

  export type DireccionMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    ciudadId?: true
    callePrincipal?: true
    numeroExterior?: true
    barrio?: true
    referencia?: true
    codigoPostal?: true
  }

  export type DireccionCountAggregateInputType = {
    id?: true
    usuarioId?: true
    ciudadId?: true
    callePrincipal?: true
    numeroExterior?: true
    barrio?: true
    referencia?: true
    codigoPostal?: true
    _all?: true
  }

  export type DireccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direccion to aggregate.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Direccions
    **/
    _count?: true | DireccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DireccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DireccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DireccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DireccionMaxAggregateInputType
  }

  export type GetDireccionAggregateType<T extends DireccionAggregateArgs> = {
        [P in keyof T & keyof AggregateDireccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDireccion[P]>
      : GetScalarType<T[P], AggregateDireccion[P]>
  }




  export type DireccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithAggregationInput | DireccionOrderByWithAggregationInput[]
    by: DireccionScalarFieldEnum[] | DireccionScalarFieldEnum
    having?: DireccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DireccionCountAggregateInputType | true
    _avg?: DireccionAvgAggregateInputType
    _sum?: DireccionSumAggregateInputType
    _min?: DireccionMinAggregateInputType
    _max?: DireccionMaxAggregateInputType
  }

  export type DireccionGroupByOutputType = {
    id: number
    usuarioId: number
    ciudadId: number
    callePrincipal: string
    numeroExterior: string
    barrio: string
    referencia: string | null
    codigoPostal: string | null
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  type GetDireccionGroupByPayload<T extends DireccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DireccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DireccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DireccionGroupByOutputType[P]>
            : GetScalarType<T[P], DireccionGroupByOutputType[P]>
        }
      >
    >


  export type DireccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    ciudadId?: boolean
    callePrincipal?: boolean
    numeroExterior?: boolean
    barrio?: boolean
    referencia?: boolean
    codigoPostal?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    pedidos?: boolean | Direccion$pedidosArgs<ExtArgs>
    _count?: boolean | DireccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direccion"]>



  export type DireccionSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    ciudadId?: boolean
    callePrincipal?: boolean
    numeroExterior?: boolean
    barrio?: boolean
    referencia?: boolean
    codigoPostal?: boolean
  }

  export type DireccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "ciudadId" | "callePrincipal" | "numeroExterior" | "barrio" | "referencia" | "codigoPostal", ExtArgs["result"]["direccion"]>
  export type DireccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    ciudad?: boolean | CiudadDefaultArgs<ExtArgs>
    pedidos?: boolean | Direccion$pedidosArgs<ExtArgs>
    _count?: boolean | DireccionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DireccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Direccion"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      ciudad: Prisma.$CiudadPayload<ExtArgs>
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      ciudadId: number
      callePrincipal: string
      numeroExterior: string
      barrio: string
      referencia: string | null
      codigoPostal: string | null
    }, ExtArgs["result"]["direccion"]>
    composites: {}
  }

  type DireccionGetPayload<S extends boolean | null | undefined | DireccionDefaultArgs> = $Result.GetResult<Prisma.$DireccionPayload, S>

  type DireccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DireccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DireccionCountAggregateInputType | true
    }

  export interface DireccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Direccion'], meta: { name: 'Direccion' } }
    /**
     * Find zero or one Direccion that matches the filter.
     * @param {DireccionFindUniqueArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DireccionFindUniqueArgs>(args: SelectSubset<T, DireccionFindUniqueArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Direccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DireccionFindUniqueOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DireccionFindUniqueOrThrowArgs>(args: SelectSubset<T, DireccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindFirstArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DireccionFindFirstArgs>(args?: SelectSubset<T, DireccionFindFirstArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindFirstOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DireccionFindFirstOrThrowArgs>(args?: SelectSubset<T, DireccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Direccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Direccions
     * const direccions = await prisma.direccion.findMany()
     * 
     * // Get first 10 Direccions
     * const direccions = await prisma.direccion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const direccionWithIdOnly = await prisma.direccion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DireccionFindManyArgs>(args?: SelectSubset<T, DireccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Direccion.
     * @param {DireccionCreateArgs} args - Arguments to create a Direccion.
     * @example
     * // Create one Direccion
     * const Direccion = await prisma.direccion.create({
     *   data: {
     *     // ... data to create a Direccion
     *   }
     * })
     * 
     */
    create<T extends DireccionCreateArgs>(args: SelectSubset<T, DireccionCreateArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Direccions.
     * @param {DireccionCreateManyArgs} args - Arguments to create many Direccions.
     * @example
     * // Create many Direccions
     * const direccion = await prisma.direccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DireccionCreateManyArgs>(args?: SelectSubset<T, DireccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Direccion.
     * @param {DireccionDeleteArgs} args - Arguments to delete one Direccion.
     * @example
     * // Delete one Direccion
     * const Direccion = await prisma.direccion.delete({
     *   where: {
     *     // ... filter to delete one Direccion
     *   }
     * })
     * 
     */
    delete<T extends DireccionDeleteArgs>(args: SelectSubset<T, DireccionDeleteArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Direccion.
     * @param {DireccionUpdateArgs} args - Arguments to update one Direccion.
     * @example
     * // Update one Direccion
     * const direccion = await prisma.direccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DireccionUpdateArgs>(args: SelectSubset<T, DireccionUpdateArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Direccions.
     * @param {DireccionDeleteManyArgs} args - Arguments to filter Direccions to delete.
     * @example
     * // Delete a few Direccions
     * const { count } = await prisma.direccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DireccionDeleteManyArgs>(args?: SelectSubset<T, DireccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Direccions
     * const direccion = await prisma.direccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DireccionUpdateManyArgs>(args: SelectSubset<T, DireccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Direccion.
     * @param {DireccionUpsertArgs} args - Arguments to update or create a Direccion.
     * @example
     * // Update or create a Direccion
     * const direccion = await prisma.direccion.upsert({
     *   create: {
     *     // ... data to create a Direccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Direccion we want to update
     *   }
     * })
     */
    upsert<T extends DireccionUpsertArgs>(args: SelectSubset<T, DireccionUpsertArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionCountArgs} args - Arguments to filter Direccions to count.
     * @example
     * // Count the number of Direccions
     * const count = await prisma.direccion.count({
     *   where: {
     *     // ... the filter for the Direccions we want to count
     *   }
     * })
    **/
    count<T extends DireccionCountArgs>(
      args?: Subset<T, DireccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DireccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DireccionAggregateArgs>(args: Subset<T, DireccionAggregateArgs>): Prisma.PrismaPromise<GetDireccionAggregateType<T>>

    /**
     * Group by Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionGroupByArgs} args - Group by arguments.
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
      T extends DireccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DireccionGroupByArgs['orderBy'] }
        : { orderBy?: DireccionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DireccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDireccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Direccion model
   */
  readonly fields: DireccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Direccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DireccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ciudad<T extends CiudadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CiudadDefaultArgs<ExtArgs>>): Prisma__CiudadClient<$Result.GetResult<Prisma.$CiudadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedidos<T extends Direccion$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Direccion$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Direccion model
   */
  interface DireccionFieldRefs {
    readonly id: FieldRef<"Direccion", 'Int'>
    readonly usuarioId: FieldRef<"Direccion", 'Int'>
    readonly ciudadId: FieldRef<"Direccion", 'Int'>
    readonly callePrincipal: FieldRef<"Direccion", 'String'>
    readonly numeroExterior: FieldRef<"Direccion", 'String'>
    readonly barrio: FieldRef<"Direccion", 'String'>
    readonly referencia: FieldRef<"Direccion", 'String'>
    readonly codigoPostal: FieldRef<"Direccion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Direccion findUnique
   */
  export type DireccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion findUniqueOrThrow
   */
  export type DireccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion findFirst
   */
  export type DireccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion findFirstOrThrow
   */
  export type DireccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion findMany
   */
  export type DireccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccions to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion create
   */
  export type DireccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The data needed to create a Direccion.
     */
    data: XOR<DireccionCreateInput, DireccionUncheckedCreateInput>
  }

  /**
   * Direccion createMany
   */
  export type DireccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Direccions.
     */
    data: DireccionCreateManyInput | DireccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Direccion update
   */
  export type DireccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The data needed to update a Direccion.
     */
    data: XOR<DireccionUpdateInput, DireccionUncheckedUpdateInput>
    /**
     * Choose, which Direccion to update.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion updateMany
   */
  export type DireccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Direccions.
     */
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyInput>
    /**
     * Filter which Direccions to update
     */
    where?: DireccionWhereInput
    /**
     * Limit how many Direccions to update.
     */
    limit?: number
  }

  /**
   * Direccion upsert
   */
  export type DireccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The filter to search for the Direccion to update in case it exists.
     */
    where: DireccionWhereUniqueInput
    /**
     * In case the Direccion found by the `where` argument doesn't exist, create a new Direccion with this data.
     */
    create: XOR<DireccionCreateInput, DireccionUncheckedCreateInput>
    /**
     * In case the Direccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DireccionUpdateInput, DireccionUncheckedUpdateInput>
  }

  /**
   * Direccion delete
   */
  export type DireccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter which Direccion to delete.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion deleteMany
   */
  export type DireccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direccions to delete
     */
    where?: DireccionWhereInput
    /**
     * Limit how many Direccions to delete.
     */
    limit?: number
  }

  /**
   * Direccion.pedidos
   */
  export type Direccion$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Direccion without action
   */
  export type DireccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>



  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Categoria$productosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      productos: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Categoria$productosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
    readonly descripcion: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.productos
   */
  export type Categoria$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id: number | null
    categoriaId: number | null
    precio: Decimal | null
    stock: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id: number | null
    categoriaId: number | null
    precio: Decimal | null
    stock: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id: number | null
    categoriaId: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    stock: number | null
    estado: string | null
  }

  export type ProductoMaxAggregateOutputType = {
    id: number | null
    categoriaId: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    stock: number | null
    estado: string | null
  }

  export type ProductoCountAggregateOutputType = {
    id: number
    categoriaId: number
    nombre: number
    descripcion: number
    precio: number
    stock: number
    estado: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id?: true
    categoriaId?: true
    precio?: true
    stock?: true
  }

  export type ProductoSumAggregateInputType = {
    id?: true
    categoriaId?: true
    precio?: true
    stock?: true
  }

  export type ProductoMinAggregateInputType = {
    id?: true
    categoriaId?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    estado?: true
  }

  export type ProductoMaxAggregateInputType = {
    id?: true
    categoriaId?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    estado?: true
  }

  export type ProductoCountAggregateInputType = {
    id?: true
    categoriaId?: true
    nombre?: true
    descripcion?: true
    precio?: true
    stock?: true
    estado?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id: number
    categoriaId: number
    nombre: string
    descripcion: string | null
    precio: Decimal
    stock: number
    estado: string
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoriaId?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    estado?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    imagenes?: boolean | Producto$imagenesArgs<ExtArgs>
    detallesCarrito?: boolean | Producto$detallesCarritoArgs<ExtArgs>
    detallesPedido?: boolean | Producto$detallesPedidoArgs<ExtArgs>
    detallesFactura?: boolean | Producto$detallesFacturaArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>



  export type ProductoSelectScalar = {
    id?: boolean
    categoriaId?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    stock?: boolean
    estado?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoriaId" | "nombre" | "descripcion" | "precio" | "stock" | "estado", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    imagenes?: boolean | Producto$imagenesArgs<ExtArgs>
    detallesCarrito?: boolean | Producto$detallesCarritoArgs<ExtArgs>
    detallesPedido?: boolean | Producto$detallesPedidoArgs<ExtArgs>
    detallesFactura?: boolean | Producto$detallesFacturaArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      imagenes: Prisma.$ImagenProductoPayload<ExtArgs>[]
      detallesCarrito: Prisma.$DetalleCarritoPayload<ExtArgs>[]
      detallesPedido: Prisma.$DetallePedidoPayload<ExtArgs>[]
      detallesFactura: Prisma.$DetalleFacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoriaId: number
      nombre: string
      descripcion: string | null
      precio: Prisma.Decimal
      stock: number
      estado: string
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productoWithIdOnly = await prisma.producto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
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
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    imagenes<T extends Producto$imagenesArgs<ExtArgs> = {}>(args?: Subset<T, Producto$imagenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagenProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detallesCarrito<T extends Producto$detallesCarritoArgs<ExtArgs> = {}>(args?: Subset<T, Producto$detallesCarritoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detallesPedido<T extends Producto$detallesPedidoArgs<ExtArgs> = {}>(args?: Subset<T, Producto$detallesPedidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detallesFactura<T extends Producto$detallesFacturaArgs<ExtArgs> = {}>(args?: Subset<T, Producto$detallesFacturaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id: FieldRef<"Producto", 'Int'>
    readonly categoriaId: FieldRef<"Producto", 'Int'>
    readonly nombre: FieldRef<"Producto", 'String'>
    readonly descripcion: FieldRef<"Producto", 'String'>
    readonly precio: FieldRef<"Producto", 'Decimal'>
    readonly stock: FieldRef<"Producto", 'Int'>
    readonly estado: FieldRef<"Producto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.imagenes
   */
  export type Producto$imagenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagenProducto
     */
    select?: ImagenProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagenProducto
     */
    omit?: ImagenProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenProductoInclude<ExtArgs> | null
    where?: ImagenProductoWhereInput
    orderBy?: ImagenProductoOrderByWithRelationInput | ImagenProductoOrderByWithRelationInput[]
    cursor?: ImagenProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagenProductoScalarFieldEnum | ImagenProductoScalarFieldEnum[]
  }

  /**
   * Producto.detallesCarrito
   */
  export type Producto$detallesCarritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleCarrito
     */
    select?: DetalleCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleCarrito
     */
    omit?: DetalleCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleCarritoInclude<ExtArgs> | null
    where?: DetalleCarritoWhereInput
    orderBy?: DetalleCarritoOrderByWithRelationInput | DetalleCarritoOrderByWithRelationInput[]
    cursor?: DetalleCarritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleCarritoScalarFieldEnum | DetalleCarritoScalarFieldEnum[]
  }

  /**
   * Producto.detallesPedido
   */
  export type Producto$detallesPedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: DetallePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: DetallePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallePedidoInclude<ExtArgs> | null
    where?: DetallePedidoWhereInput
    orderBy?: DetallePedidoOrderByWithRelationInput | DetallePedidoOrderByWithRelationInput[]
    cursor?: DetallePedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetallePedidoScalarFieldEnum | DetallePedidoScalarFieldEnum[]
  }

  /**
   * Producto.detallesFactura
   */
  export type Producto$detallesFacturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    where?: DetalleFacturaWhereInput
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    cursor?: DetalleFacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model ImagenProducto
   */

  export type AggregateImagenProducto = {
    _count: ImagenProductoCountAggregateOutputType | null
    _avg: ImagenProductoAvgAggregateOutputType | null
    _sum: ImagenProductoSumAggregateOutputType | null
    _min: ImagenProductoMinAggregateOutputType | null
    _max: ImagenProductoMaxAggregateOutputType | null
  }

  export type ImagenProductoAvgAggregateOutputType = {
    id: number | null
    productoId: number | null
  }

  export type ImagenProductoSumAggregateOutputType = {
    id: number | null
    productoId: number | null
  }

  export type ImagenProductoMinAggregateOutputType = {
    id: number | null
    productoId: number | null
    urlImagen: string | null
  }

  export type ImagenProductoMaxAggregateOutputType = {
    id: number | null
    productoId: number | null
    urlImagen: string | null
  }

  export type ImagenProductoCountAggregateOutputType = {
    id: number
    productoId: number
    urlImagen: number
    _all: number
  }


  export type ImagenProductoAvgAggregateInputType = {
    id?: true
    productoId?: true
  }

  export type ImagenProductoSumAggregateInputType = {
    id?: true
    productoId?: true
  }

  export type ImagenProductoMinAggregateInputType = {
    id?: true
    productoId?: true
    urlImagen?: true
  }

  export type ImagenProductoMaxAggregateInputType = {
    id?: true
    productoId?: true
    urlImagen?: true
  }

  export type ImagenProductoCountAggregateInputType = {
    id?: true
    productoId?: true
    urlImagen?: true
    _all?: true
  }

  export type ImagenProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImagenProducto to aggregate.
     */
    where?: ImagenProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagenProductos to fetch.
     */
    orderBy?: ImagenProductoOrderByWithRelationInput | ImagenProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagenProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagenProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagenProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImagenProductos
    **/
    _count?: true | ImagenProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagenProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagenProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagenProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagenProductoMaxAggregateInputType
  }

  export type GetImagenProductoAggregateType<T extends ImagenProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateImagenProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagenProducto[P]>
      : GetScalarType<T[P], AggregateImagenProducto[P]>
  }




  export type ImagenProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagenProductoWhereInput
    orderBy?: ImagenProductoOrderByWithAggregationInput | ImagenProductoOrderByWithAggregationInput[]
    by: ImagenProductoScalarFieldEnum[] | ImagenProductoScalarFieldEnum
    having?: ImagenProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagenProductoCountAggregateInputType | true
    _avg?: ImagenProductoAvgAggregateInputType
    _sum?: ImagenProductoSumAggregateInputType
    _min?: ImagenProductoMinAggregateInputType
    _max?: ImagenProductoMaxAggregateInputType
  }

  export type ImagenProductoGroupByOutputType = {
    id: number
    productoId: number
    urlImagen: string
    _count: ImagenProductoCountAggregateOutputType | null
    _avg: ImagenProductoAvgAggregateOutputType | null
    _sum: ImagenProductoSumAggregateOutputType | null
    _min: ImagenProductoMinAggregateOutputType | null
    _max: ImagenProductoMaxAggregateOutputType | null
  }

  type GetImagenProductoGroupByPayload<T extends ImagenProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagenProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagenProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagenProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ImagenProductoGroupByOutputType[P]>
        }
      >
    >


  export type ImagenProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productoId?: boolean
    urlImagen?: boolean
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imagenProducto"]>



  export type ImagenProductoSelectScalar = {
    id?: boolean
    productoId?: boolean
    urlImagen?: boolean
  }

  export type ImagenProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productoId" | "urlImagen", ExtArgs["result"]["imagenProducto"]>
  export type ImagenProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $ImagenProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImagenProducto"
    objects: {
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productoId: number
      urlImagen: string
    }, ExtArgs["result"]["imagenProducto"]>
    composites: {}
  }

  type ImagenProductoGetPayload<S extends boolean | null | undefined | ImagenProductoDefaultArgs> = $Result.GetResult<Prisma.$ImagenProductoPayload, S>

  type ImagenProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagenProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagenProductoCountAggregateInputType | true
    }

  export interface ImagenProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImagenProducto'], meta: { name: 'ImagenProducto' } }
    /**
     * Find zero or one ImagenProducto that matches the filter.
     * @param {ImagenProductoFindUniqueArgs} args - Arguments to find a ImagenProducto
     * @example
     * // Get one ImagenProducto
     * const imagenProducto = await prisma.imagenProducto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagenProductoFindUniqueArgs>(args: SelectSubset<T, ImagenProductoFindUniqueArgs<ExtArgs>>): Prisma__ImagenProductoClient<$Result.GetResult<Prisma.$ImagenProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImagenProducto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagenProductoFindUniqueOrThrowArgs} args - Arguments to find a ImagenProducto
     * @example
     * // Get one ImagenProducto
     * const imagenProducto = await prisma.imagenProducto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagenProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagenProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagenProductoClient<$Result.GetResult<Prisma.$ImagenProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImagenProducto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenProductoFindFirstArgs} args - Arguments to find a ImagenProducto
     * @example
     * // Get one ImagenProducto
     * const imagenProducto = await prisma.imagenProducto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagenProductoFindFirstArgs>(args?: SelectSubset<T, ImagenProductoFindFirstArgs<ExtArgs>>): Prisma__ImagenProductoClient<$Result.GetResult<Prisma.$ImagenProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImagenProducto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenProductoFindFirstOrThrowArgs} args - Arguments to find a ImagenProducto
     * @example
     * // Get one ImagenProducto
     * const imagenProducto = await prisma.imagenProducto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagenProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagenProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagenProductoClient<$Result.GetResult<Prisma.$ImagenProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImagenProductos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImagenProductos
     * const imagenProductos = await prisma.imagenProducto.findMany()
     * 
     * // Get first 10 ImagenProductos
     * const imagenProductos = await prisma.imagenProducto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagenProductoWithIdOnly = await prisma.imagenProducto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagenProductoFindManyArgs>(args?: SelectSubset<T, ImagenProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagenProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImagenProducto.
     * @param {ImagenProductoCreateArgs} args - Arguments to create a ImagenProducto.
     * @example
     * // Create one ImagenProducto
     * const ImagenProducto = await prisma.imagenProducto.create({
     *   data: {
     *     // ... data to create a ImagenProducto
     *   }
     * })
     * 
     */
    create<T extends ImagenProductoCreateArgs>(args: SelectSubset<T, ImagenProductoCreateArgs<ExtArgs>>): Prisma__ImagenProductoClient<$Result.GetResult<Prisma.$ImagenProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImagenProductos.
     * @param {ImagenProductoCreateManyArgs} args - Arguments to create many ImagenProductos.
     * @example
     * // Create many ImagenProductos
     * const imagenProducto = await prisma.imagenProducto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagenProductoCreateManyArgs>(args?: SelectSubset<T, ImagenProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImagenProducto.
     * @param {ImagenProductoDeleteArgs} args - Arguments to delete one ImagenProducto.
     * @example
     * // Delete one ImagenProducto
     * const ImagenProducto = await prisma.imagenProducto.delete({
     *   where: {
     *     // ... filter to delete one ImagenProducto
     *   }
     * })
     * 
     */
    delete<T extends ImagenProductoDeleteArgs>(args: SelectSubset<T, ImagenProductoDeleteArgs<ExtArgs>>): Prisma__ImagenProductoClient<$Result.GetResult<Prisma.$ImagenProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImagenProducto.
     * @param {ImagenProductoUpdateArgs} args - Arguments to update one ImagenProducto.
     * @example
     * // Update one ImagenProducto
     * const imagenProducto = await prisma.imagenProducto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagenProductoUpdateArgs>(args: SelectSubset<T, ImagenProductoUpdateArgs<ExtArgs>>): Prisma__ImagenProductoClient<$Result.GetResult<Prisma.$ImagenProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImagenProductos.
     * @param {ImagenProductoDeleteManyArgs} args - Arguments to filter ImagenProductos to delete.
     * @example
     * // Delete a few ImagenProductos
     * const { count } = await prisma.imagenProducto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagenProductoDeleteManyArgs>(args?: SelectSubset<T, ImagenProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImagenProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImagenProductos
     * const imagenProducto = await prisma.imagenProducto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagenProductoUpdateManyArgs>(args: SelectSubset<T, ImagenProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImagenProducto.
     * @param {ImagenProductoUpsertArgs} args - Arguments to update or create a ImagenProducto.
     * @example
     * // Update or create a ImagenProducto
     * const imagenProducto = await prisma.imagenProducto.upsert({
     *   create: {
     *     // ... data to create a ImagenProducto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImagenProducto we want to update
     *   }
     * })
     */
    upsert<T extends ImagenProductoUpsertArgs>(args: SelectSubset<T, ImagenProductoUpsertArgs<ExtArgs>>): Prisma__ImagenProductoClient<$Result.GetResult<Prisma.$ImagenProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImagenProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenProductoCountArgs} args - Arguments to filter ImagenProductos to count.
     * @example
     * // Count the number of ImagenProductos
     * const count = await prisma.imagenProducto.count({
     *   where: {
     *     // ... the filter for the ImagenProductos we want to count
     *   }
     * })
    **/
    count<T extends ImagenProductoCountArgs>(
      args?: Subset<T, ImagenProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagenProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImagenProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImagenProductoAggregateArgs>(args: Subset<T, ImagenProductoAggregateArgs>): Prisma.PrismaPromise<GetImagenProductoAggregateType<T>>

    /**
     * Group by ImagenProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenProductoGroupByArgs} args - Group by arguments.
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
      T extends ImagenProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagenProductoGroupByArgs['orderBy'] }
        : { orderBy?: ImagenProductoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImagenProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagenProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImagenProducto model
   */
  readonly fields: ImagenProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImagenProducto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagenProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ImagenProducto model
   */
  interface ImagenProductoFieldRefs {
    readonly id: FieldRef<"ImagenProducto", 'Int'>
    readonly productoId: FieldRef<"ImagenProducto", 'Int'>
    readonly urlImagen: FieldRef<"ImagenProducto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ImagenProducto findUnique
   */
  export type ImagenProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagenProducto
     */
    select?: ImagenProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagenProducto
     */
    omit?: ImagenProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenProductoInclude<ExtArgs> | null
    /**
     * Filter, which ImagenProducto to fetch.
     */
    where: ImagenProductoWhereUniqueInput
  }

  /**
   * ImagenProducto findUniqueOrThrow
   */
  export type ImagenProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagenProducto
     */
    select?: ImagenProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagenProducto
     */
    omit?: ImagenProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenProductoInclude<ExtArgs> | null
    /**
     * Filter, which ImagenProducto to fetch.
     */
    where: ImagenProductoWhereUniqueInput
  }

  /**
   * ImagenProducto findFirst
   */
  export type ImagenProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagenProducto
     */
    select?: ImagenProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagenProducto
     */
    omit?: ImagenProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenProductoInclude<ExtArgs> | null
    /**
     * Filter, which ImagenProducto to fetch.
     */
    where?: ImagenProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagenProductos to fetch.
     */
    orderBy?: ImagenProductoOrderByWithRelationInput | ImagenProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagenProductos.
     */
    cursor?: ImagenProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagenProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagenProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagenProductos.
     */
    distinct?: ImagenProductoScalarFieldEnum | ImagenProductoScalarFieldEnum[]
  }

  /**
   * ImagenProducto findFirstOrThrow
   */
  export type ImagenProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagenProducto
     */
    select?: ImagenProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagenProducto
     */
    omit?: ImagenProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenProductoInclude<ExtArgs> | null
    /**
     * Filter, which ImagenProducto to fetch.
     */
    where?: ImagenProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagenProductos to fetch.
     */
    orderBy?: ImagenProductoOrderByWithRelationInput | ImagenProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagenProductos.
     */
    cursor?: ImagenProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagenProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagenProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagenProductos.
     */
    distinct?: ImagenProductoScalarFieldEnum | ImagenProductoScalarFieldEnum[]
  }

  /**
   * ImagenProducto findMany
   */
  export type ImagenProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagenProducto
     */
    select?: ImagenProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagenProducto
     */
    omit?: ImagenProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenProductoInclude<ExtArgs> | null
    /**
     * Filter, which ImagenProductos to fetch.
     */
    where?: ImagenProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagenProductos to fetch.
     */
    orderBy?: ImagenProductoOrderByWithRelationInput | ImagenProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImagenProductos.
     */
    cursor?: ImagenProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagenProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagenProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagenProductos.
     */
    distinct?: ImagenProductoScalarFieldEnum | ImagenProductoScalarFieldEnum[]
  }

  /**
   * ImagenProducto create
   */
  export type ImagenProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagenProducto
     */
    select?: ImagenProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagenProducto
     */
    omit?: ImagenProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a ImagenProducto.
     */
    data: XOR<ImagenProductoCreateInput, ImagenProductoUncheckedCreateInput>
  }

  /**
   * ImagenProducto createMany
   */
  export type ImagenProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImagenProductos.
     */
    data: ImagenProductoCreateManyInput | ImagenProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImagenProducto update
   */
  export type ImagenProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagenProducto
     */
    select?: ImagenProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagenProducto
     */
    omit?: ImagenProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a ImagenProducto.
     */
    data: XOR<ImagenProductoUpdateInput, ImagenProductoUncheckedUpdateInput>
    /**
     * Choose, which ImagenProducto to update.
     */
    where: ImagenProductoWhereUniqueInput
  }

  /**
   * ImagenProducto updateMany
   */
  export type ImagenProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImagenProductos.
     */
    data: XOR<ImagenProductoUpdateManyMutationInput, ImagenProductoUncheckedUpdateManyInput>
    /**
     * Filter which ImagenProductos to update
     */
    where?: ImagenProductoWhereInput
    /**
     * Limit how many ImagenProductos to update.
     */
    limit?: number
  }

  /**
   * ImagenProducto upsert
   */
  export type ImagenProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagenProducto
     */
    select?: ImagenProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagenProducto
     */
    omit?: ImagenProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the ImagenProducto to update in case it exists.
     */
    where: ImagenProductoWhereUniqueInput
    /**
     * In case the ImagenProducto found by the `where` argument doesn't exist, create a new ImagenProducto with this data.
     */
    create: XOR<ImagenProductoCreateInput, ImagenProductoUncheckedCreateInput>
    /**
     * In case the ImagenProducto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagenProductoUpdateInput, ImagenProductoUncheckedUpdateInput>
  }

  /**
   * ImagenProducto delete
   */
  export type ImagenProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagenProducto
     */
    select?: ImagenProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagenProducto
     */
    omit?: ImagenProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenProductoInclude<ExtArgs> | null
    /**
     * Filter which ImagenProducto to delete.
     */
    where: ImagenProductoWhereUniqueInput
  }

  /**
   * ImagenProducto deleteMany
   */
  export type ImagenProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImagenProductos to delete
     */
    where?: ImagenProductoWhereInput
    /**
     * Limit how many ImagenProductos to delete.
     */
    limit?: number
  }

  /**
   * ImagenProducto without action
   */
  export type ImagenProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImagenProducto
     */
    select?: ImagenProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImagenProducto
     */
    omit?: ImagenProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenProductoInclude<ExtArgs> | null
  }


  /**
   * Model Carrito
   */

  export type AggregateCarrito = {
    _count: CarritoCountAggregateOutputType | null
    _avg: CarritoAvgAggregateOutputType | null
    _sum: CarritoSumAggregateOutputType | null
    _min: CarritoMinAggregateOutputType | null
    _max: CarritoMaxAggregateOutputType | null
  }

  export type CarritoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CarritoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CarritoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    fechaCreacion: Date | null
    estado: string | null
  }

  export type CarritoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    fechaCreacion: Date | null
    estado: string | null
  }

  export type CarritoCountAggregateOutputType = {
    id: number
    usuarioId: number
    fechaCreacion: number
    estado: number
    _all: number
  }


  export type CarritoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CarritoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CarritoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    fechaCreacion?: true
    estado?: true
  }

  export type CarritoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    fechaCreacion?: true
    estado?: true
  }

  export type CarritoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    fechaCreacion?: true
    estado?: true
    _all?: true
  }

  export type CarritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrito to aggregate.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carritos
    **/
    _count?: true | CarritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarritoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarritoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarritoMaxAggregateInputType
  }

  export type GetCarritoAggregateType<T extends CarritoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrito[P]>
      : GetScalarType<T[P], AggregateCarrito[P]>
  }




  export type CarritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarritoWhereInput
    orderBy?: CarritoOrderByWithAggregationInput | CarritoOrderByWithAggregationInput[]
    by: CarritoScalarFieldEnum[] | CarritoScalarFieldEnum
    having?: CarritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarritoCountAggregateInputType | true
    _avg?: CarritoAvgAggregateInputType
    _sum?: CarritoSumAggregateInputType
    _min?: CarritoMinAggregateInputType
    _max?: CarritoMaxAggregateInputType
  }

  export type CarritoGroupByOutputType = {
    id: number
    usuarioId: number
    fechaCreacion: Date
    estado: string
    _count: CarritoCountAggregateOutputType | null
    _avg: CarritoAvgAggregateOutputType | null
    _sum: CarritoSumAggregateOutputType | null
    _min: CarritoMinAggregateOutputType | null
    _max: CarritoMaxAggregateOutputType | null
  }

  type GetCarritoGroupByPayload<T extends CarritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarritoGroupByOutputType[P]>
            : GetScalarType<T[P], CarritoGroupByOutputType[P]>
        }
      >
    >


  export type CarritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    fechaCreacion?: boolean
    estado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    detalles?: boolean | Carrito$detallesArgs<ExtArgs>
    _count?: boolean | CarritoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrito"]>



  export type CarritoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    fechaCreacion?: boolean
    estado?: boolean
  }

  export type CarritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "fechaCreacion" | "estado", ExtArgs["result"]["carrito"]>
  export type CarritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    detalles?: boolean | Carrito$detallesArgs<ExtArgs>
    _count?: boolean | CarritoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CarritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrito"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      detalles: Prisma.$DetalleCarritoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      fechaCreacion: Date
      estado: string
    }, ExtArgs["result"]["carrito"]>
    composites: {}
  }

  type CarritoGetPayload<S extends boolean | null | undefined | CarritoDefaultArgs> = $Result.GetResult<Prisma.$CarritoPayload, S>

  type CarritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarritoCountAggregateInputType | true
    }

  export interface CarritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrito'], meta: { name: 'Carrito' } }
    /**
     * Find zero or one Carrito that matches the filter.
     * @param {CarritoFindUniqueArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarritoFindUniqueArgs>(args: SelectSubset<T, CarritoFindUniqueArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarritoFindUniqueOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarritoFindUniqueOrThrowArgs>(args: SelectSubset<T, CarritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindFirstArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarritoFindFirstArgs>(args?: SelectSubset<T, CarritoFindFirstArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindFirstOrThrowArgs} args - Arguments to find a Carrito
     * @example
     * // Get one Carrito
     * const carrito = await prisma.carrito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarritoFindFirstOrThrowArgs>(args?: SelectSubset<T, CarritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carritos
     * const carritos = await prisma.carrito.findMany()
     * 
     * // Get first 10 Carritos
     * const carritos = await prisma.carrito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carritoWithIdOnly = await prisma.carrito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarritoFindManyArgs>(args?: SelectSubset<T, CarritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrito.
     * @param {CarritoCreateArgs} args - Arguments to create a Carrito.
     * @example
     * // Create one Carrito
     * const Carrito = await prisma.carrito.create({
     *   data: {
     *     // ... data to create a Carrito
     *   }
     * })
     * 
     */
    create<T extends CarritoCreateArgs>(args: SelectSubset<T, CarritoCreateArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carritos.
     * @param {CarritoCreateManyArgs} args - Arguments to create many Carritos.
     * @example
     * // Create many Carritos
     * const carrito = await prisma.carrito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarritoCreateManyArgs>(args?: SelectSubset<T, CarritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carrito.
     * @param {CarritoDeleteArgs} args - Arguments to delete one Carrito.
     * @example
     * // Delete one Carrito
     * const Carrito = await prisma.carrito.delete({
     *   where: {
     *     // ... filter to delete one Carrito
     *   }
     * })
     * 
     */
    delete<T extends CarritoDeleteArgs>(args: SelectSubset<T, CarritoDeleteArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrito.
     * @param {CarritoUpdateArgs} args - Arguments to update one Carrito.
     * @example
     * // Update one Carrito
     * const carrito = await prisma.carrito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarritoUpdateArgs>(args: SelectSubset<T, CarritoUpdateArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carritos.
     * @param {CarritoDeleteManyArgs} args - Arguments to filter Carritos to delete.
     * @example
     * // Delete a few Carritos
     * const { count } = await prisma.carrito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarritoDeleteManyArgs>(args?: SelectSubset<T, CarritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carritos
     * const carrito = await prisma.carrito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarritoUpdateManyArgs>(args: SelectSubset<T, CarritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carrito.
     * @param {CarritoUpsertArgs} args - Arguments to update or create a Carrito.
     * @example
     * // Update or create a Carrito
     * const carrito = await prisma.carrito.upsert({
     *   create: {
     *     // ... data to create a Carrito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrito we want to update
     *   }
     * })
     */
    upsert<T extends CarritoUpsertArgs>(args: SelectSubset<T, CarritoUpsertArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoCountArgs} args - Arguments to filter Carritos to count.
     * @example
     * // Count the number of Carritos
     * const count = await prisma.carrito.count({
     *   where: {
     *     // ... the filter for the Carritos we want to count
     *   }
     * })
    **/
    count<T extends CarritoCountArgs>(
      args?: Subset<T, CarritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarritoAggregateArgs>(args: Subset<T, CarritoAggregateArgs>): Prisma.PrismaPromise<GetCarritoAggregateType<T>>

    /**
     * Group by Carrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarritoGroupByArgs} args - Group by arguments.
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
      T extends CarritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarritoGroupByArgs['orderBy'] }
        : { orderBy?: CarritoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrito model
   */
  readonly fields: CarritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalles<T extends Carrito$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Carrito$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Carrito model
   */
  interface CarritoFieldRefs {
    readonly id: FieldRef<"Carrito", 'Int'>
    readonly usuarioId: FieldRef<"Carrito", 'Int'>
    readonly fechaCreacion: FieldRef<"Carrito", 'DateTime'>
    readonly estado: FieldRef<"Carrito", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Carrito findUnique
   */
  export type CarritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito findUniqueOrThrow
   */
  export type CarritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito findFirst
   */
  export type CarritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carritos.
     */
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * Carrito findFirstOrThrow
   */
  export type CarritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carrito to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carritos.
     */
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * Carrito findMany
   */
  export type CarritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter, which Carritos to fetch.
     */
    where?: CarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carritos to fetch.
     */
    orderBy?: CarritoOrderByWithRelationInput | CarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carritos.
     */
    cursor?: CarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carritos.
     */
    distinct?: CarritoScalarFieldEnum | CarritoScalarFieldEnum[]
  }

  /**
   * Carrito create
   */
  export type CarritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrito.
     */
    data: XOR<CarritoCreateInput, CarritoUncheckedCreateInput>
  }

  /**
   * Carrito createMany
   */
  export type CarritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carritos.
     */
    data: CarritoCreateManyInput | CarritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrito update
   */
  export type CarritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrito.
     */
    data: XOR<CarritoUpdateInput, CarritoUncheckedUpdateInput>
    /**
     * Choose, which Carrito to update.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito updateMany
   */
  export type CarritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carritos.
     */
    data: XOR<CarritoUpdateManyMutationInput, CarritoUncheckedUpdateManyInput>
    /**
     * Filter which Carritos to update
     */
    where?: CarritoWhereInput
    /**
     * Limit how many Carritos to update.
     */
    limit?: number
  }

  /**
   * Carrito upsert
   */
  export type CarritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrito to update in case it exists.
     */
    where: CarritoWhereUniqueInput
    /**
     * In case the Carrito found by the `where` argument doesn't exist, create a new Carrito with this data.
     */
    create: XOR<CarritoCreateInput, CarritoUncheckedCreateInput>
    /**
     * In case the Carrito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarritoUpdateInput, CarritoUncheckedUpdateInput>
  }

  /**
   * Carrito delete
   */
  export type CarritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
    /**
     * Filter which Carrito to delete.
     */
    where: CarritoWhereUniqueInput
  }

  /**
   * Carrito deleteMany
   */
  export type CarritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carritos to delete
     */
    where?: CarritoWhereInput
    /**
     * Limit how many Carritos to delete.
     */
    limit?: number
  }

  /**
   * Carrito.detalles
   */
  export type Carrito$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleCarrito
     */
    select?: DetalleCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleCarrito
     */
    omit?: DetalleCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleCarritoInclude<ExtArgs> | null
    where?: DetalleCarritoWhereInput
    orderBy?: DetalleCarritoOrderByWithRelationInput | DetalleCarritoOrderByWithRelationInput[]
    cursor?: DetalleCarritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleCarritoScalarFieldEnum | DetalleCarritoScalarFieldEnum[]
  }

  /**
   * Carrito without action
   */
  export type CarritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrito
     */
    select?: CarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrito
     */
    omit?: CarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarritoInclude<ExtArgs> | null
  }


  /**
   * Model DetalleCarrito
   */

  export type AggregateDetalleCarrito = {
    _count: DetalleCarritoCountAggregateOutputType | null
    _avg: DetalleCarritoAvgAggregateOutputType | null
    _sum: DetalleCarritoSumAggregateOutputType | null
    _min: DetalleCarritoMinAggregateOutputType | null
    _max: DetalleCarritoMaxAggregateOutputType | null
  }

  export type DetalleCarritoAvgAggregateOutputType = {
    id: number | null
    carritoId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type DetalleCarritoSumAggregateOutputType = {
    id: number | null
    carritoId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type DetalleCarritoMinAggregateOutputType = {
    id: number | null
    carritoId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type DetalleCarritoMaxAggregateOutputType = {
    id: number | null
    carritoId: number | null
    productoId: number | null
    cantidad: number | null
  }

  export type DetalleCarritoCountAggregateOutputType = {
    id: number
    carritoId: number
    productoId: number
    cantidad: number
    _all: number
  }


  export type DetalleCarritoAvgAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
  }

  export type DetalleCarritoSumAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
  }

  export type DetalleCarritoMinAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
  }

  export type DetalleCarritoMaxAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
  }

  export type DetalleCarritoCountAggregateInputType = {
    id?: true
    carritoId?: true
    productoId?: true
    cantidad?: true
    _all?: true
  }

  export type DetalleCarritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleCarrito to aggregate.
     */
    where?: DetalleCarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleCarritos to fetch.
     */
    orderBy?: DetalleCarritoOrderByWithRelationInput | DetalleCarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleCarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleCarritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleCarritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleCarritos
    **/
    _count?: true | DetalleCarritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleCarritoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleCarritoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleCarritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleCarritoMaxAggregateInputType
  }

  export type GetDetalleCarritoAggregateType<T extends DetalleCarritoAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleCarrito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleCarrito[P]>
      : GetScalarType<T[P], AggregateDetalleCarrito[P]>
  }




  export type DetalleCarritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleCarritoWhereInput
    orderBy?: DetalleCarritoOrderByWithAggregationInput | DetalleCarritoOrderByWithAggregationInput[]
    by: DetalleCarritoScalarFieldEnum[] | DetalleCarritoScalarFieldEnum
    having?: DetalleCarritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleCarritoCountAggregateInputType | true
    _avg?: DetalleCarritoAvgAggregateInputType
    _sum?: DetalleCarritoSumAggregateInputType
    _min?: DetalleCarritoMinAggregateInputType
    _max?: DetalleCarritoMaxAggregateInputType
  }

  export type DetalleCarritoGroupByOutputType = {
    id: number
    carritoId: number
    productoId: number
    cantidad: number
    _count: DetalleCarritoCountAggregateOutputType | null
    _avg: DetalleCarritoAvgAggregateOutputType | null
    _sum: DetalleCarritoSumAggregateOutputType | null
    _min: DetalleCarritoMinAggregateOutputType | null
    _max: DetalleCarritoMaxAggregateOutputType | null
  }

  type GetDetalleCarritoGroupByPayload<T extends DetalleCarritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleCarritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleCarritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleCarritoGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleCarritoGroupByOutputType[P]>
        }
      >
    >


  export type DetalleCarritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carritoId?: boolean
    productoId?: boolean
    cantidad?: boolean
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleCarrito"]>



  export type DetalleCarritoSelectScalar = {
    id?: boolean
    carritoId?: boolean
    productoId?: boolean
    cantidad?: boolean
  }

  export type DetalleCarritoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carritoId" | "productoId" | "cantidad", ExtArgs["result"]["detalleCarrito"]>
  export type DetalleCarritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrito?: boolean | CarritoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $DetalleCarritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalleCarrito"
    objects: {
      carrito: Prisma.$CarritoPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carritoId: number
      productoId: number
      cantidad: number
    }, ExtArgs["result"]["detalleCarrito"]>
    composites: {}
  }

  type DetalleCarritoGetPayload<S extends boolean | null | undefined | DetalleCarritoDefaultArgs> = $Result.GetResult<Prisma.$DetalleCarritoPayload, S>

  type DetalleCarritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleCarritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleCarritoCountAggregateInputType | true
    }

  export interface DetalleCarritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleCarrito'], meta: { name: 'DetalleCarrito' } }
    /**
     * Find zero or one DetalleCarrito that matches the filter.
     * @param {DetalleCarritoFindUniqueArgs} args - Arguments to find a DetalleCarrito
     * @example
     * // Get one DetalleCarrito
     * const detalleCarrito = await prisma.detalleCarrito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleCarritoFindUniqueArgs>(args: SelectSubset<T, DetalleCarritoFindUniqueArgs<ExtArgs>>): Prisma__DetalleCarritoClient<$Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleCarrito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleCarritoFindUniqueOrThrowArgs} args - Arguments to find a DetalleCarrito
     * @example
     * // Get one DetalleCarrito
     * const detalleCarrito = await prisma.detalleCarrito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleCarritoFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleCarritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleCarritoClient<$Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleCarrito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleCarritoFindFirstArgs} args - Arguments to find a DetalleCarrito
     * @example
     * // Get one DetalleCarrito
     * const detalleCarrito = await prisma.detalleCarrito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleCarritoFindFirstArgs>(args?: SelectSubset<T, DetalleCarritoFindFirstArgs<ExtArgs>>): Prisma__DetalleCarritoClient<$Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleCarrito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleCarritoFindFirstOrThrowArgs} args - Arguments to find a DetalleCarrito
     * @example
     * // Get one DetalleCarrito
     * const detalleCarrito = await prisma.detalleCarrito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleCarritoFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleCarritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleCarritoClient<$Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleCarritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleCarritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleCarritos
     * const detalleCarritos = await prisma.detalleCarrito.findMany()
     * 
     * // Get first 10 DetalleCarritos
     * const detalleCarritos = await prisma.detalleCarrito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleCarritoWithIdOnly = await prisma.detalleCarrito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetalleCarritoFindManyArgs>(args?: SelectSubset<T, DetalleCarritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleCarrito.
     * @param {DetalleCarritoCreateArgs} args - Arguments to create a DetalleCarrito.
     * @example
     * // Create one DetalleCarrito
     * const DetalleCarrito = await prisma.detalleCarrito.create({
     *   data: {
     *     // ... data to create a DetalleCarrito
     *   }
     * })
     * 
     */
    create<T extends DetalleCarritoCreateArgs>(args: SelectSubset<T, DetalleCarritoCreateArgs<ExtArgs>>): Prisma__DetalleCarritoClient<$Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleCarritos.
     * @param {DetalleCarritoCreateManyArgs} args - Arguments to create many DetalleCarritos.
     * @example
     * // Create many DetalleCarritos
     * const detalleCarrito = await prisma.detalleCarrito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleCarritoCreateManyArgs>(args?: SelectSubset<T, DetalleCarritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetalleCarrito.
     * @param {DetalleCarritoDeleteArgs} args - Arguments to delete one DetalleCarrito.
     * @example
     * // Delete one DetalleCarrito
     * const DetalleCarrito = await prisma.detalleCarrito.delete({
     *   where: {
     *     // ... filter to delete one DetalleCarrito
     *   }
     * })
     * 
     */
    delete<T extends DetalleCarritoDeleteArgs>(args: SelectSubset<T, DetalleCarritoDeleteArgs<ExtArgs>>): Prisma__DetalleCarritoClient<$Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleCarrito.
     * @param {DetalleCarritoUpdateArgs} args - Arguments to update one DetalleCarrito.
     * @example
     * // Update one DetalleCarrito
     * const detalleCarrito = await prisma.detalleCarrito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleCarritoUpdateArgs>(args: SelectSubset<T, DetalleCarritoUpdateArgs<ExtArgs>>): Prisma__DetalleCarritoClient<$Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleCarritos.
     * @param {DetalleCarritoDeleteManyArgs} args - Arguments to filter DetalleCarritos to delete.
     * @example
     * // Delete a few DetalleCarritos
     * const { count } = await prisma.detalleCarrito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleCarritoDeleteManyArgs>(args?: SelectSubset<T, DetalleCarritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleCarritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleCarritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleCarritos
     * const detalleCarrito = await prisma.detalleCarrito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleCarritoUpdateManyArgs>(args: SelectSubset<T, DetalleCarritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetalleCarrito.
     * @param {DetalleCarritoUpsertArgs} args - Arguments to update or create a DetalleCarrito.
     * @example
     * // Update or create a DetalleCarrito
     * const detalleCarrito = await prisma.detalleCarrito.upsert({
     *   create: {
     *     // ... data to create a DetalleCarrito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleCarrito we want to update
     *   }
     * })
     */
    upsert<T extends DetalleCarritoUpsertArgs>(args: SelectSubset<T, DetalleCarritoUpsertArgs<ExtArgs>>): Prisma__DetalleCarritoClient<$Result.GetResult<Prisma.$DetalleCarritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleCarritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleCarritoCountArgs} args - Arguments to filter DetalleCarritos to count.
     * @example
     * // Count the number of DetalleCarritos
     * const count = await prisma.detalleCarrito.count({
     *   where: {
     *     // ... the filter for the DetalleCarritos we want to count
     *   }
     * })
    **/
    count<T extends DetalleCarritoCountArgs>(
      args?: Subset<T, DetalleCarritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleCarritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleCarrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleCarritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetalleCarritoAggregateArgs>(args: Subset<T, DetalleCarritoAggregateArgs>): Prisma.PrismaPromise<GetDetalleCarritoAggregateType<T>>

    /**
     * Group by DetalleCarrito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleCarritoGroupByArgs} args - Group by arguments.
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
      T extends DetalleCarritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleCarritoGroupByArgs['orderBy'] }
        : { orderBy?: DetalleCarritoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetalleCarritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleCarritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleCarrito model
   */
  readonly fields: DetalleCarritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleCarrito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleCarritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrito<T extends CarritoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarritoDefaultArgs<ExtArgs>>): Prisma__CarritoClient<$Result.GetResult<Prisma.$CarritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetalleCarrito model
   */
  interface DetalleCarritoFieldRefs {
    readonly id: FieldRef<"DetalleCarrito", 'Int'>
    readonly carritoId: FieldRef<"DetalleCarrito", 'Int'>
    readonly productoId: FieldRef<"DetalleCarrito", 'Int'>
    readonly cantidad: FieldRef<"DetalleCarrito", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DetalleCarrito findUnique
   */
  export type DetalleCarritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleCarrito
     */
    select?: DetalleCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleCarrito
     */
    omit?: DetalleCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleCarritoInclude<ExtArgs> | null
    /**
     * Filter, which DetalleCarrito to fetch.
     */
    where: DetalleCarritoWhereUniqueInput
  }

  /**
   * DetalleCarrito findUniqueOrThrow
   */
  export type DetalleCarritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleCarrito
     */
    select?: DetalleCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleCarrito
     */
    omit?: DetalleCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleCarritoInclude<ExtArgs> | null
    /**
     * Filter, which DetalleCarrito to fetch.
     */
    where: DetalleCarritoWhereUniqueInput
  }

  /**
   * DetalleCarrito findFirst
   */
  export type DetalleCarritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleCarrito
     */
    select?: DetalleCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleCarrito
     */
    omit?: DetalleCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleCarritoInclude<ExtArgs> | null
    /**
     * Filter, which DetalleCarrito to fetch.
     */
    where?: DetalleCarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleCarritos to fetch.
     */
    orderBy?: DetalleCarritoOrderByWithRelationInput | DetalleCarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleCarritos.
     */
    cursor?: DetalleCarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleCarritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleCarritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleCarritos.
     */
    distinct?: DetalleCarritoScalarFieldEnum | DetalleCarritoScalarFieldEnum[]
  }

  /**
   * DetalleCarrito findFirstOrThrow
   */
  export type DetalleCarritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleCarrito
     */
    select?: DetalleCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleCarrito
     */
    omit?: DetalleCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleCarritoInclude<ExtArgs> | null
    /**
     * Filter, which DetalleCarrito to fetch.
     */
    where?: DetalleCarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleCarritos to fetch.
     */
    orderBy?: DetalleCarritoOrderByWithRelationInput | DetalleCarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleCarritos.
     */
    cursor?: DetalleCarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleCarritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleCarritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleCarritos.
     */
    distinct?: DetalleCarritoScalarFieldEnum | DetalleCarritoScalarFieldEnum[]
  }

  /**
   * DetalleCarrito findMany
   */
  export type DetalleCarritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleCarrito
     */
    select?: DetalleCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleCarrito
     */
    omit?: DetalleCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleCarritoInclude<ExtArgs> | null
    /**
     * Filter, which DetalleCarritos to fetch.
     */
    where?: DetalleCarritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleCarritos to fetch.
     */
    orderBy?: DetalleCarritoOrderByWithRelationInput | DetalleCarritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleCarritos.
     */
    cursor?: DetalleCarritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleCarritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleCarritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleCarritos.
     */
    distinct?: DetalleCarritoScalarFieldEnum | DetalleCarritoScalarFieldEnum[]
  }

  /**
   * DetalleCarrito create
   */
  export type DetalleCarritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleCarrito
     */
    select?: DetalleCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleCarrito
     */
    omit?: DetalleCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleCarritoInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleCarrito.
     */
    data: XOR<DetalleCarritoCreateInput, DetalleCarritoUncheckedCreateInput>
  }

  /**
   * DetalleCarrito createMany
   */
  export type DetalleCarritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleCarritos.
     */
    data: DetalleCarritoCreateManyInput | DetalleCarritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalleCarrito update
   */
  export type DetalleCarritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleCarrito
     */
    select?: DetalleCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleCarrito
     */
    omit?: DetalleCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleCarritoInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleCarrito.
     */
    data: XOR<DetalleCarritoUpdateInput, DetalleCarritoUncheckedUpdateInput>
    /**
     * Choose, which DetalleCarrito to update.
     */
    where: DetalleCarritoWhereUniqueInput
  }

  /**
   * DetalleCarrito updateMany
   */
  export type DetalleCarritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleCarritos.
     */
    data: XOR<DetalleCarritoUpdateManyMutationInput, DetalleCarritoUncheckedUpdateManyInput>
    /**
     * Filter which DetalleCarritos to update
     */
    where?: DetalleCarritoWhereInput
    /**
     * Limit how many DetalleCarritos to update.
     */
    limit?: number
  }

  /**
   * DetalleCarrito upsert
   */
  export type DetalleCarritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleCarrito
     */
    select?: DetalleCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleCarrito
     */
    omit?: DetalleCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleCarritoInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleCarrito to update in case it exists.
     */
    where: DetalleCarritoWhereUniqueInput
    /**
     * In case the DetalleCarrito found by the `where` argument doesn't exist, create a new DetalleCarrito with this data.
     */
    create: XOR<DetalleCarritoCreateInput, DetalleCarritoUncheckedCreateInput>
    /**
     * In case the DetalleCarrito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleCarritoUpdateInput, DetalleCarritoUncheckedUpdateInput>
  }

  /**
   * DetalleCarrito delete
   */
  export type DetalleCarritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleCarrito
     */
    select?: DetalleCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleCarrito
     */
    omit?: DetalleCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleCarritoInclude<ExtArgs> | null
    /**
     * Filter which DetalleCarrito to delete.
     */
    where: DetalleCarritoWhereUniqueInput
  }

  /**
   * DetalleCarrito deleteMany
   */
  export type DetalleCarritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleCarritos to delete
     */
    where?: DetalleCarritoWhereInput
    /**
     * Limit how many DetalleCarritos to delete.
     */
    limit?: number
  }

  /**
   * DetalleCarrito without action
   */
  export type DetalleCarritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleCarrito
     */
    select?: DetalleCarritoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleCarrito
     */
    omit?: DetalleCarritoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleCarritoInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    direccionId: number | null
    total: Decimal | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    direccionId: number | null
    total: Decimal | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    direccionId: number | null
    fechaPedido: Date | null
    estado: string | null
    total: Decimal | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    direccionId: number | null
    fechaPedido: Date | null
    estado: string | null
    total: Decimal | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    usuarioId: number
    direccionId: number
    fechaPedido: number
    estado: number
    total: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    direccionId?: true
    total?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    direccionId?: true
    total?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    direccionId?: true
    fechaPedido?: true
    estado?: true
    total?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    direccionId?: true
    fechaPedido?: true
    estado?: true
    total?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    direccionId?: true
    fechaPedido?: true
    estado?: true
    total?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    usuarioId: number
    direccionId: number
    fechaPedido: Date
    estado: string
    total: Decimal
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    direccionId?: boolean
    fechaPedido?: boolean
    estado?: boolean
    total?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
    detalles?: boolean | Pedido$detallesArgs<ExtArgs>
    factura?: boolean | Pedido$facturaArgs<ExtArgs>
    pago?: boolean | Pedido$pagoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>



  export type PedidoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    direccionId?: boolean
    fechaPedido?: boolean
    estado?: boolean
    total?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "direccionId" | "fechaPedido" | "estado" | "total", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    direccion?: boolean | DireccionDefaultArgs<ExtArgs>
    detalles?: boolean | Pedido$detallesArgs<ExtArgs>
    factura?: boolean | Pedido$facturaArgs<ExtArgs>
    pago?: boolean | Pedido$pagoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      direccion: Prisma.$DireccionPayload<ExtArgs>
      detalles: Prisma.$DetallePedidoPayload<ExtArgs>[]
      factura: Prisma.$FacturaPayload<ExtArgs> | null
      pago: Prisma.$PagoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      direccionId: number
      fechaPedido: Date
      estado: string
      total: Prisma.Decimal
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
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
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    direccion<T extends DireccionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DireccionDefaultArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalles<T extends Pedido$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    factura<T extends Pedido$facturaArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$facturaArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pago<T extends Pedido$pagoArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$pagoArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly usuarioId: FieldRef<"Pedido", 'Int'>
    readonly direccionId: FieldRef<"Pedido", 'Int'>
    readonly fechaPedido: FieldRef<"Pedido", 'DateTime'>
    readonly estado: FieldRef<"Pedido", 'String'>
    readonly total: FieldRef<"Pedido", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.detalles
   */
  export type Pedido$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: DetallePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: DetallePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallePedidoInclude<ExtArgs> | null
    where?: DetallePedidoWhereInput
    orderBy?: DetallePedidoOrderByWithRelationInput | DetallePedidoOrderByWithRelationInput[]
    cursor?: DetallePedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetallePedidoScalarFieldEnum | DetallePedidoScalarFieldEnum[]
  }

  /**
   * Pedido.factura
   */
  export type Pedido$facturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
  }

  /**
   * Pedido.pago
   */
  export type Pedido$pagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    where?: PagoWhereInput
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model DetallePedido
   */

  export type AggregateDetallePedido = {
    _count: DetallePedidoCountAggregateOutputType | null
    _avg: DetallePedidoAvgAggregateOutputType | null
    _sum: DetallePedidoSumAggregateOutputType | null
    _min: DetallePedidoMinAggregateOutputType | null
    _max: DetallePedidoMaxAggregateOutputType | null
  }

  export type DetallePedidoAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type DetallePedidoSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type DetallePedidoMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type DetallePedidoMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
  }

  export type DetallePedidoCountAggregateOutputType = {
    id: number
    pedidoId: number
    productoId: number
    cantidad: number
    precioUnitario: number
    _all: number
  }


  export type DetallePedidoAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type DetallePedidoSumAggregateInputType = {
    id?: true
    pedidoId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type DetallePedidoMinAggregateInputType = {
    id?: true
    pedidoId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type DetallePedidoMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
  }

  export type DetallePedidoCountAggregateInputType = {
    id?: true
    pedidoId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
    _all?: true
  }

  export type DetallePedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetallePedido to aggregate.
     */
    where?: DetallePedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetallePedidos to fetch.
     */
    orderBy?: DetallePedidoOrderByWithRelationInput | DetallePedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetallePedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetallePedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetallePedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetallePedidos
    **/
    _count?: true | DetallePedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetallePedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetallePedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetallePedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetallePedidoMaxAggregateInputType
  }

  export type GetDetallePedidoAggregateType<T extends DetallePedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateDetallePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetallePedido[P]>
      : GetScalarType<T[P], AggregateDetallePedido[P]>
  }




  export type DetallePedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetallePedidoWhereInput
    orderBy?: DetallePedidoOrderByWithAggregationInput | DetallePedidoOrderByWithAggregationInput[]
    by: DetallePedidoScalarFieldEnum[] | DetallePedidoScalarFieldEnum
    having?: DetallePedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetallePedidoCountAggregateInputType | true
    _avg?: DetallePedidoAvgAggregateInputType
    _sum?: DetallePedidoSumAggregateInputType
    _min?: DetallePedidoMinAggregateInputType
    _max?: DetallePedidoMaxAggregateInputType
  }

  export type DetallePedidoGroupByOutputType = {
    id: number
    pedidoId: number
    productoId: number
    cantidad: number
    precioUnitario: Decimal
    _count: DetallePedidoCountAggregateOutputType | null
    _avg: DetallePedidoAvgAggregateOutputType | null
    _sum: DetallePedidoSumAggregateOutputType | null
    _min: DetallePedidoMinAggregateOutputType | null
    _max: DetallePedidoMaxAggregateOutputType | null
  }

  type GetDetallePedidoGroupByPayload<T extends DetallePedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetallePedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetallePedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetallePedidoGroupByOutputType[P]>
            : GetScalarType<T[P], DetallePedidoGroupByOutputType[P]>
        }
      >
    >


  export type DetallePedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detallePedido"]>



  export type DetallePedidoSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
  }

  export type DetallePedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "productoId" | "cantidad" | "precioUnitario", ExtArgs["result"]["detallePedido"]>
  export type DetallePedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $DetallePedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetallePedido"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      productoId: number
      cantidad: number
      precioUnitario: Prisma.Decimal
    }, ExtArgs["result"]["detallePedido"]>
    composites: {}
  }

  type DetallePedidoGetPayload<S extends boolean | null | undefined | DetallePedidoDefaultArgs> = $Result.GetResult<Prisma.$DetallePedidoPayload, S>

  type DetallePedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetallePedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetallePedidoCountAggregateInputType | true
    }

  export interface DetallePedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetallePedido'], meta: { name: 'DetallePedido' } }
    /**
     * Find zero or one DetallePedido that matches the filter.
     * @param {DetallePedidoFindUniqueArgs} args - Arguments to find a DetallePedido
     * @example
     * // Get one DetallePedido
     * const detallePedido = await prisma.detallePedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetallePedidoFindUniqueArgs>(args: SelectSubset<T, DetallePedidoFindUniqueArgs<ExtArgs>>): Prisma__DetallePedidoClient<$Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetallePedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetallePedidoFindUniqueOrThrowArgs} args - Arguments to find a DetallePedido
     * @example
     * // Get one DetallePedido
     * const detallePedido = await prisma.detallePedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetallePedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, DetallePedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetallePedidoClient<$Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetallePedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallePedidoFindFirstArgs} args - Arguments to find a DetallePedido
     * @example
     * // Get one DetallePedido
     * const detallePedido = await prisma.detallePedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetallePedidoFindFirstArgs>(args?: SelectSubset<T, DetallePedidoFindFirstArgs<ExtArgs>>): Prisma__DetallePedidoClient<$Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetallePedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallePedidoFindFirstOrThrowArgs} args - Arguments to find a DetallePedido
     * @example
     * // Get one DetallePedido
     * const detallePedido = await prisma.detallePedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetallePedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, DetallePedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetallePedidoClient<$Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetallePedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallePedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetallePedidos
     * const detallePedidos = await prisma.detallePedido.findMany()
     * 
     * // Get first 10 DetallePedidos
     * const detallePedidos = await prisma.detallePedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detallePedidoWithIdOnly = await prisma.detallePedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetallePedidoFindManyArgs>(args?: SelectSubset<T, DetallePedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetallePedido.
     * @param {DetallePedidoCreateArgs} args - Arguments to create a DetallePedido.
     * @example
     * // Create one DetallePedido
     * const DetallePedido = await prisma.detallePedido.create({
     *   data: {
     *     // ... data to create a DetallePedido
     *   }
     * })
     * 
     */
    create<T extends DetallePedidoCreateArgs>(args: SelectSubset<T, DetallePedidoCreateArgs<ExtArgs>>): Prisma__DetallePedidoClient<$Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetallePedidos.
     * @param {DetallePedidoCreateManyArgs} args - Arguments to create many DetallePedidos.
     * @example
     * // Create many DetallePedidos
     * const detallePedido = await prisma.detallePedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetallePedidoCreateManyArgs>(args?: SelectSubset<T, DetallePedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetallePedido.
     * @param {DetallePedidoDeleteArgs} args - Arguments to delete one DetallePedido.
     * @example
     * // Delete one DetallePedido
     * const DetallePedido = await prisma.detallePedido.delete({
     *   where: {
     *     // ... filter to delete one DetallePedido
     *   }
     * })
     * 
     */
    delete<T extends DetallePedidoDeleteArgs>(args: SelectSubset<T, DetallePedidoDeleteArgs<ExtArgs>>): Prisma__DetallePedidoClient<$Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetallePedido.
     * @param {DetallePedidoUpdateArgs} args - Arguments to update one DetallePedido.
     * @example
     * // Update one DetallePedido
     * const detallePedido = await prisma.detallePedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetallePedidoUpdateArgs>(args: SelectSubset<T, DetallePedidoUpdateArgs<ExtArgs>>): Prisma__DetallePedidoClient<$Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetallePedidos.
     * @param {DetallePedidoDeleteManyArgs} args - Arguments to filter DetallePedidos to delete.
     * @example
     * // Delete a few DetallePedidos
     * const { count } = await prisma.detallePedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetallePedidoDeleteManyArgs>(args?: SelectSubset<T, DetallePedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetallePedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallePedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetallePedidos
     * const detallePedido = await prisma.detallePedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetallePedidoUpdateManyArgs>(args: SelectSubset<T, DetallePedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetallePedido.
     * @param {DetallePedidoUpsertArgs} args - Arguments to update or create a DetallePedido.
     * @example
     * // Update or create a DetallePedido
     * const detallePedido = await prisma.detallePedido.upsert({
     *   create: {
     *     // ... data to create a DetallePedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetallePedido we want to update
     *   }
     * })
     */
    upsert<T extends DetallePedidoUpsertArgs>(args: SelectSubset<T, DetallePedidoUpsertArgs<ExtArgs>>): Prisma__DetallePedidoClient<$Result.GetResult<Prisma.$DetallePedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetallePedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallePedidoCountArgs} args - Arguments to filter DetallePedidos to count.
     * @example
     * // Count the number of DetallePedidos
     * const count = await prisma.detallePedido.count({
     *   where: {
     *     // ... the filter for the DetallePedidos we want to count
     *   }
     * })
    **/
    count<T extends DetallePedidoCountArgs>(
      args?: Subset<T, DetallePedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetallePedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetallePedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallePedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetallePedidoAggregateArgs>(args: Subset<T, DetallePedidoAggregateArgs>): Prisma.PrismaPromise<GetDetallePedidoAggregateType<T>>

    /**
     * Group by DetallePedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallePedidoGroupByArgs} args - Group by arguments.
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
      T extends DetallePedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetallePedidoGroupByArgs['orderBy'] }
        : { orderBy?: DetallePedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetallePedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetallePedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetallePedido model
   */
  readonly fields: DetallePedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetallePedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetallePedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetallePedido model
   */
  interface DetallePedidoFieldRefs {
    readonly id: FieldRef<"DetallePedido", 'Int'>
    readonly pedidoId: FieldRef<"DetallePedido", 'Int'>
    readonly productoId: FieldRef<"DetallePedido", 'Int'>
    readonly cantidad: FieldRef<"DetallePedido", 'Int'>
    readonly precioUnitario: FieldRef<"DetallePedido", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * DetallePedido findUnique
   */
  export type DetallePedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: DetallePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: DetallePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallePedidoInclude<ExtArgs> | null
    /**
     * Filter, which DetallePedido to fetch.
     */
    where: DetallePedidoWhereUniqueInput
  }

  /**
   * DetallePedido findUniqueOrThrow
   */
  export type DetallePedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: DetallePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: DetallePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallePedidoInclude<ExtArgs> | null
    /**
     * Filter, which DetallePedido to fetch.
     */
    where: DetallePedidoWhereUniqueInput
  }

  /**
   * DetallePedido findFirst
   */
  export type DetallePedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: DetallePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: DetallePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallePedidoInclude<ExtArgs> | null
    /**
     * Filter, which DetallePedido to fetch.
     */
    where?: DetallePedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetallePedidos to fetch.
     */
    orderBy?: DetallePedidoOrderByWithRelationInput | DetallePedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetallePedidos.
     */
    cursor?: DetallePedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetallePedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetallePedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetallePedidos.
     */
    distinct?: DetallePedidoScalarFieldEnum | DetallePedidoScalarFieldEnum[]
  }

  /**
   * DetallePedido findFirstOrThrow
   */
  export type DetallePedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: DetallePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: DetallePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallePedidoInclude<ExtArgs> | null
    /**
     * Filter, which DetallePedido to fetch.
     */
    where?: DetallePedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetallePedidos to fetch.
     */
    orderBy?: DetallePedidoOrderByWithRelationInput | DetallePedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetallePedidos.
     */
    cursor?: DetallePedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetallePedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetallePedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetallePedidos.
     */
    distinct?: DetallePedidoScalarFieldEnum | DetallePedidoScalarFieldEnum[]
  }

  /**
   * DetallePedido findMany
   */
  export type DetallePedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: DetallePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: DetallePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallePedidoInclude<ExtArgs> | null
    /**
     * Filter, which DetallePedidos to fetch.
     */
    where?: DetallePedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetallePedidos to fetch.
     */
    orderBy?: DetallePedidoOrderByWithRelationInput | DetallePedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetallePedidos.
     */
    cursor?: DetallePedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetallePedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetallePedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetallePedidos.
     */
    distinct?: DetallePedidoScalarFieldEnum | DetallePedidoScalarFieldEnum[]
  }

  /**
   * DetallePedido create
   */
  export type DetallePedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: DetallePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: DetallePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallePedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a DetallePedido.
     */
    data: XOR<DetallePedidoCreateInput, DetallePedidoUncheckedCreateInput>
  }

  /**
   * DetallePedido createMany
   */
  export type DetallePedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetallePedidos.
     */
    data: DetallePedidoCreateManyInput | DetallePedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetallePedido update
   */
  export type DetallePedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: DetallePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: DetallePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallePedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a DetallePedido.
     */
    data: XOR<DetallePedidoUpdateInput, DetallePedidoUncheckedUpdateInput>
    /**
     * Choose, which DetallePedido to update.
     */
    where: DetallePedidoWhereUniqueInput
  }

  /**
   * DetallePedido updateMany
   */
  export type DetallePedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetallePedidos.
     */
    data: XOR<DetallePedidoUpdateManyMutationInput, DetallePedidoUncheckedUpdateManyInput>
    /**
     * Filter which DetallePedidos to update
     */
    where?: DetallePedidoWhereInput
    /**
     * Limit how many DetallePedidos to update.
     */
    limit?: number
  }

  /**
   * DetallePedido upsert
   */
  export type DetallePedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: DetallePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: DetallePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallePedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the DetallePedido to update in case it exists.
     */
    where: DetallePedidoWhereUniqueInput
    /**
     * In case the DetallePedido found by the `where` argument doesn't exist, create a new DetallePedido with this data.
     */
    create: XOR<DetallePedidoCreateInput, DetallePedidoUncheckedCreateInput>
    /**
     * In case the DetallePedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetallePedidoUpdateInput, DetallePedidoUncheckedUpdateInput>
  }

  /**
   * DetallePedido delete
   */
  export type DetallePedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: DetallePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: DetallePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallePedidoInclude<ExtArgs> | null
    /**
     * Filter which DetallePedido to delete.
     */
    where: DetallePedidoWhereUniqueInput
  }

  /**
   * DetallePedido deleteMany
   */
  export type DetallePedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetallePedidos to delete
     */
    where?: DetallePedidoWhereInput
    /**
     * Limit how many DetallePedidos to delete.
     */
    limit?: number
  }

  /**
   * DetallePedido without action
   */
  export type DetallePedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallePedido
     */
    select?: DetallePedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetallePedido
     */
    omit?: DetallePedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallePedidoInclude<ExtArgs> | null
  }


  /**
   * Model Factura
   */

  export type AggregateFactura = {
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  export type FacturaAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    totalPagar: Decimal | null
  }

  export type FacturaSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    totalPagar: Decimal | null
  }

  export type FacturaMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    fechaEmision: Date | null
    totalPagar: Decimal | null
  }

  export type FacturaMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    fechaEmision: Date | null
    totalPagar: Decimal | null
  }

  export type FacturaCountAggregateOutputType = {
    id: number
    pedidoId: number
    fechaEmision: number
    totalPagar: number
    _all: number
  }


  export type FacturaAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    totalPagar?: true
  }

  export type FacturaSumAggregateInputType = {
    id?: true
    pedidoId?: true
    totalPagar?: true
  }

  export type FacturaMinAggregateInputType = {
    id?: true
    pedidoId?: true
    fechaEmision?: true
    totalPagar?: true
  }

  export type FacturaMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    fechaEmision?: true
    totalPagar?: true
  }

  export type FacturaCountAggregateInputType = {
    id?: true
    pedidoId?: true
    fechaEmision?: true
    totalPagar?: true
    _all?: true
  }

  export type FacturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Factura to aggregate.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facturas
    **/
    _count?: true | FacturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturaMaxAggregateInputType
  }

  export type GetFacturaAggregateType<T extends FacturaAggregateArgs> = {
        [P in keyof T & keyof AggregateFactura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactura[P]>
      : GetScalarType<T[P], AggregateFactura[P]>
  }




  export type FacturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithAggregationInput | FacturaOrderByWithAggregationInput[]
    by: FacturaScalarFieldEnum[] | FacturaScalarFieldEnum
    having?: FacturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturaCountAggregateInputType | true
    _avg?: FacturaAvgAggregateInputType
    _sum?: FacturaSumAggregateInputType
    _min?: FacturaMinAggregateInputType
    _max?: FacturaMaxAggregateInputType
  }

  export type FacturaGroupByOutputType = {
    id: number
    pedidoId: number
    fechaEmision: Date
    totalPagar: Decimal
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  type GetFacturaGroupByPayload<T extends FacturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturaGroupByOutputType[P]>
            : GetScalarType<T[P], FacturaGroupByOutputType[P]>
        }
      >
    >


  export type FacturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    fechaEmision?: boolean
    totalPagar?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    detalles?: boolean | Factura$detallesArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>



  export type FacturaSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    fechaEmision?: boolean
    totalPagar?: boolean
  }

  export type FacturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "fechaEmision" | "totalPagar", ExtArgs["result"]["factura"]>
  export type FacturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    detalles?: boolean | Factura$detallesArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FacturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Factura"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      detalles: Prisma.$DetalleFacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      fechaEmision: Date
      totalPagar: Prisma.Decimal
    }, ExtArgs["result"]["factura"]>
    composites: {}
  }

  type FacturaGetPayload<S extends boolean | null | undefined | FacturaDefaultArgs> = $Result.GetResult<Prisma.$FacturaPayload, S>

  type FacturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaCountAggregateInputType | true
    }

  export interface FacturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Factura'], meta: { name: 'Factura' } }
    /**
     * Find zero or one Factura that matches the filter.
     * @param {FacturaFindUniqueArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacturaFindUniqueArgs>(args: SelectSubset<T, FacturaFindUniqueArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Factura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacturaFindUniqueOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacturaFindUniqueOrThrowArgs>(args: SelectSubset<T, FacturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacturaFindFirstArgs>(args?: SelectSubset<T, FacturaFindFirstArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacturaFindFirstOrThrowArgs>(args?: SelectSubset<T, FacturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facturas
     * const facturas = await prisma.factura.findMany()
     * 
     * // Get first 10 Facturas
     * const facturas = await prisma.factura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facturaWithIdOnly = await prisma.factura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacturaFindManyArgs>(args?: SelectSubset<T, FacturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Factura.
     * @param {FacturaCreateArgs} args - Arguments to create a Factura.
     * @example
     * // Create one Factura
     * const Factura = await prisma.factura.create({
     *   data: {
     *     // ... data to create a Factura
     *   }
     * })
     * 
     */
    create<T extends FacturaCreateArgs>(args: SelectSubset<T, FacturaCreateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facturas.
     * @param {FacturaCreateManyArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacturaCreateManyArgs>(args?: SelectSubset<T, FacturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Factura.
     * @param {FacturaDeleteArgs} args - Arguments to delete one Factura.
     * @example
     * // Delete one Factura
     * const Factura = await prisma.factura.delete({
     *   where: {
     *     // ... filter to delete one Factura
     *   }
     * })
     * 
     */
    delete<T extends FacturaDeleteArgs>(args: SelectSubset<T, FacturaDeleteArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Factura.
     * @param {FacturaUpdateArgs} args - Arguments to update one Factura.
     * @example
     * // Update one Factura
     * const factura = await prisma.factura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacturaUpdateArgs>(args: SelectSubset<T, FacturaUpdateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facturas.
     * @param {FacturaDeleteManyArgs} args - Arguments to filter Facturas to delete.
     * @example
     * // Delete a few Facturas
     * const { count } = await prisma.factura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacturaDeleteManyArgs>(args?: SelectSubset<T, FacturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacturaUpdateManyArgs>(args: SelectSubset<T, FacturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Factura.
     * @param {FacturaUpsertArgs} args - Arguments to update or create a Factura.
     * @example
     * // Update or create a Factura
     * const factura = await prisma.factura.upsert({
     *   create: {
     *     // ... data to create a Factura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Factura we want to update
     *   }
     * })
     */
    upsert<T extends FacturaUpsertArgs>(args: SelectSubset<T, FacturaUpsertArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCountArgs} args - Arguments to filter Facturas to count.
     * @example
     * // Count the number of Facturas
     * const count = await prisma.factura.count({
     *   where: {
     *     // ... the filter for the Facturas we want to count
     *   }
     * })
    **/
    count<T extends FacturaCountArgs>(
      args?: Subset<T, FacturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacturaAggregateArgs>(args: Subset<T, FacturaAggregateArgs>): Prisma.PrismaPromise<GetFacturaAggregateType<T>>

    /**
     * Group by Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaGroupByArgs} args - Group by arguments.
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
      T extends FacturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacturaGroupByArgs['orderBy'] }
        : { orderBy?: FacturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Factura model
   */
  readonly fields: FacturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Factura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalles<T extends Factura$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Factura$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Factura model
   */
  interface FacturaFieldRefs {
    readonly id: FieldRef<"Factura", 'Int'>
    readonly pedidoId: FieldRef<"Factura", 'Int'>
    readonly fechaEmision: FieldRef<"Factura", 'DateTime'>
    readonly totalPagar: FieldRef<"Factura", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Factura findUnique
   */
  export type FacturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findUniqueOrThrow
   */
  export type FacturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findFirst
   */
  export type FacturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findFirstOrThrow
   */
  export type FacturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findMany
   */
  export type FacturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Facturas to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura create
   */
  export type FacturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Factura.
     */
    data: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
  }

  /**
   * Factura createMany
   */
  export type FacturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Factura update
   */
  export type FacturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Factura.
     */
    data: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
    /**
     * Choose, which Factura to update.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura updateMany
   */
  export type FacturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
  }

  /**
   * Factura upsert
   */
  export type FacturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Factura to update in case it exists.
     */
    where: FacturaWhereUniqueInput
    /**
     * In case the Factura found by the `where` argument doesn't exist, create a new Factura with this data.
     */
    create: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
    /**
     * In case the Factura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
  }

  /**
   * Factura delete
   */
  export type FacturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter which Factura to delete.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura deleteMany
   */
  export type FacturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facturas to delete
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to delete.
     */
    limit?: number
  }

  /**
   * Factura.detalles
   */
  export type Factura$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    where?: DetalleFacturaWhereInput
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    cursor?: DetalleFacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * Factura without action
   */
  export type FacturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
  }


  /**
   * Model DetalleFactura
   */

  export type AggregateDetalleFactura = {
    _count: DetalleFacturaCountAggregateOutputType | null
    _avg: DetalleFacturaAvgAggregateOutputType | null
    _sum: DetalleFacturaSumAggregateOutputType | null
    _min: DetalleFacturaMinAggregateOutputType | null
    _max: DetalleFacturaMaxAggregateOutputType | null
  }

  export type DetalleFacturaAvgAggregateOutputType = {
    id: number | null
    facturaId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
    impuesto: Decimal | null
    subTotal: Decimal | null
  }

  export type DetalleFacturaSumAggregateOutputType = {
    id: number | null
    facturaId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
    impuesto: Decimal | null
    subTotal: Decimal | null
  }

  export type DetalleFacturaMinAggregateOutputType = {
    id: number | null
    facturaId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
    impuesto: Decimal | null
    subTotal: Decimal | null
  }

  export type DetalleFacturaMaxAggregateOutputType = {
    id: number | null
    facturaId: number | null
    productoId: number | null
    cantidad: number | null
    precioUnitario: Decimal | null
    impuesto: Decimal | null
    subTotal: Decimal | null
  }

  export type DetalleFacturaCountAggregateOutputType = {
    id: number
    facturaId: number
    productoId: number
    cantidad: number
    precioUnitario: number
    impuesto: number
    subTotal: number
    _all: number
  }


  export type DetalleFacturaAvgAggregateInputType = {
    id?: true
    facturaId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
    impuesto?: true
    subTotal?: true
  }

  export type DetalleFacturaSumAggregateInputType = {
    id?: true
    facturaId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
    impuesto?: true
    subTotal?: true
  }

  export type DetalleFacturaMinAggregateInputType = {
    id?: true
    facturaId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
    impuesto?: true
    subTotal?: true
  }

  export type DetalleFacturaMaxAggregateInputType = {
    id?: true
    facturaId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
    impuesto?: true
    subTotal?: true
  }

  export type DetalleFacturaCountAggregateInputType = {
    id?: true
    facturaId?: true
    productoId?: true
    cantidad?: true
    precioUnitario?: true
    impuesto?: true
    subTotal?: true
    _all?: true
  }

  export type DetalleFacturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleFactura to aggregate.
     */
    where?: DetalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleFacturas to fetch.
     */
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleFacturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetalleFacturas
    **/
    _count?: true | DetalleFacturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleFacturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleFacturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleFacturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleFacturaMaxAggregateInputType
  }

  export type GetDetalleFacturaAggregateType<T extends DetalleFacturaAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalleFactura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalleFactura[P]>
      : GetScalarType<T[P], AggregateDetalleFactura[P]>
  }




  export type DetalleFacturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleFacturaWhereInput
    orderBy?: DetalleFacturaOrderByWithAggregationInput | DetalleFacturaOrderByWithAggregationInput[]
    by: DetalleFacturaScalarFieldEnum[] | DetalleFacturaScalarFieldEnum
    having?: DetalleFacturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleFacturaCountAggregateInputType | true
    _avg?: DetalleFacturaAvgAggregateInputType
    _sum?: DetalleFacturaSumAggregateInputType
    _min?: DetalleFacturaMinAggregateInputType
    _max?: DetalleFacturaMaxAggregateInputType
  }

  export type DetalleFacturaGroupByOutputType = {
    id: number
    facturaId: number
    productoId: number
    cantidad: number
    precioUnitario: Decimal
    impuesto: Decimal
    subTotal: Decimal
    _count: DetalleFacturaCountAggregateOutputType | null
    _avg: DetalleFacturaAvgAggregateOutputType | null
    _sum: DetalleFacturaSumAggregateOutputType | null
    _min: DetalleFacturaMinAggregateOutputType | null
    _max: DetalleFacturaMaxAggregateOutputType | null
  }

  type GetDetalleFacturaGroupByPayload<T extends DetalleFacturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleFacturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleFacturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleFacturaGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleFacturaGroupByOutputType[P]>
        }
      >
    >


  export type DetalleFacturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    impuesto?: boolean
    subTotal?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalleFactura"]>



  export type DetalleFacturaSelectScalar = {
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precioUnitario?: boolean
    impuesto?: boolean
    subTotal?: boolean
  }

  export type DetalleFacturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facturaId" | "productoId" | "cantidad" | "precioUnitario" | "impuesto" | "subTotal", ExtArgs["result"]["detalleFactura"]>
  export type DetalleFacturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $DetalleFacturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetalleFactura"
    objects: {
      factura: Prisma.$FacturaPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      facturaId: number
      productoId: number
      cantidad: number
      precioUnitario: Prisma.Decimal
      impuesto: Prisma.Decimal
      subTotal: Prisma.Decimal
    }, ExtArgs["result"]["detalleFactura"]>
    composites: {}
  }

  type DetalleFacturaGetPayload<S extends boolean | null | undefined | DetalleFacturaDefaultArgs> = $Result.GetResult<Prisma.$DetalleFacturaPayload, S>

  type DetalleFacturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleFacturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleFacturaCountAggregateInputType | true
    }

  export interface DetalleFacturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetalleFactura'], meta: { name: 'DetalleFactura' } }
    /**
     * Find zero or one DetalleFactura that matches the filter.
     * @param {DetalleFacturaFindUniqueArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleFacturaFindUniqueArgs>(args: SelectSubset<T, DetalleFacturaFindUniqueArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetalleFactura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleFacturaFindUniqueOrThrowArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleFacturaFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleFacturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleFactura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaFindFirstArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleFacturaFindFirstArgs>(args?: SelectSubset<T, DetalleFacturaFindFirstArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetalleFactura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaFindFirstOrThrowArgs} args - Arguments to find a DetalleFactura
     * @example
     * // Get one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleFacturaFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleFacturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetalleFacturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetalleFacturas
     * const detalleFacturas = await prisma.detalleFactura.findMany()
     * 
     * // Get first 10 DetalleFacturas
     * const detalleFacturas = await prisma.detalleFactura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalleFacturaWithIdOnly = await prisma.detalleFactura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetalleFacturaFindManyArgs>(args?: SelectSubset<T, DetalleFacturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetalleFactura.
     * @param {DetalleFacturaCreateArgs} args - Arguments to create a DetalleFactura.
     * @example
     * // Create one DetalleFactura
     * const DetalleFactura = await prisma.detalleFactura.create({
     *   data: {
     *     // ... data to create a DetalleFactura
     *   }
     * })
     * 
     */
    create<T extends DetalleFacturaCreateArgs>(args: SelectSubset<T, DetalleFacturaCreateArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetalleFacturas.
     * @param {DetalleFacturaCreateManyArgs} args - Arguments to create many DetalleFacturas.
     * @example
     * // Create many DetalleFacturas
     * const detalleFactura = await prisma.detalleFactura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleFacturaCreateManyArgs>(args?: SelectSubset<T, DetalleFacturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DetalleFactura.
     * @param {DetalleFacturaDeleteArgs} args - Arguments to delete one DetalleFactura.
     * @example
     * // Delete one DetalleFactura
     * const DetalleFactura = await prisma.detalleFactura.delete({
     *   where: {
     *     // ... filter to delete one DetalleFactura
     *   }
     * })
     * 
     */
    delete<T extends DetalleFacturaDeleteArgs>(args: SelectSubset<T, DetalleFacturaDeleteArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetalleFactura.
     * @param {DetalleFacturaUpdateArgs} args - Arguments to update one DetalleFactura.
     * @example
     * // Update one DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleFacturaUpdateArgs>(args: SelectSubset<T, DetalleFacturaUpdateArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetalleFacturas.
     * @param {DetalleFacturaDeleteManyArgs} args - Arguments to filter DetalleFacturas to delete.
     * @example
     * // Delete a few DetalleFacturas
     * const { count } = await prisma.detalleFactura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleFacturaDeleteManyArgs>(args?: SelectSubset<T, DetalleFacturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetalleFacturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetalleFacturas
     * const detalleFactura = await prisma.detalleFactura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleFacturaUpdateManyArgs>(args: SelectSubset<T, DetalleFacturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DetalleFactura.
     * @param {DetalleFacturaUpsertArgs} args - Arguments to update or create a DetalleFactura.
     * @example
     * // Update or create a DetalleFactura
     * const detalleFactura = await prisma.detalleFactura.upsert({
     *   create: {
     *     // ... data to create a DetalleFactura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetalleFactura we want to update
     *   }
     * })
     */
    upsert<T extends DetalleFacturaUpsertArgs>(args: SelectSubset<T, DetalleFacturaUpsertArgs<ExtArgs>>): Prisma__DetalleFacturaClient<$Result.GetResult<Prisma.$DetalleFacturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetalleFacturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaCountArgs} args - Arguments to filter DetalleFacturas to count.
     * @example
     * // Count the number of DetalleFacturas
     * const count = await prisma.detalleFactura.count({
     *   where: {
     *     // ... the filter for the DetalleFacturas we want to count
     *   }
     * })
    **/
    count<T extends DetalleFacturaCountArgs>(
      args?: Subset<T, DetalleFacturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleFacturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetalleFactura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetalleFacturaAggregateArgs>(args: Subset<T, DetalleFacturaAggregateArgs>): Prisma.PrismaPromise<GetDetalleFacturaAggregateType<T>>

    /**
     * Group by DetalleFactura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFacturaGroupByArgs} args - Group by arguments.
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
      T extends DetalleFacturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleFacturaGroupByArgs['orderBy'] }
        : { orderBy?: DetalleFacturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetalleFacturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetalleFactura model
   */
  readonly fields: DetalleFacturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetalleFactura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleFacturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    factura<T extends FacturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacturaDefaultArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetalleFactura model
   */
  interface DetalleFacturaFieldRefs {
    readonly id: FieldRef<"DetalleFactura", 'Int'>
    readonly facturaId: FieldRef<"DetalleFactura", 'Int'>
    readonly productoId: FieldRef<"DetalleFactura", 'Int'>
    readonly cantidad: FieldRef<"DetalleFactura", 'Int'>
    readonly precioUnitario: FieldRef<"DetalleFactura", 'Decimal'>
    readonly impuesto: FieldRef<"DetalleFactura", 'Decimal'>
    readonly subTotal: FieldRef<"DetalleFactura", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * DetalleFactura findUnique
   */
  export type DetalleFacturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFactura to fetch.
     */
    where: DetalleFacturaWhereUniqueInput
  }

  /**
   * DetalleFactura findUniqueOrThrow
   */
  export type DetalleFacturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFactura to fetch.
     */
    where: DetalleFacturaWhereUniqueInput
  }

  /**
   * DetalleFactura findFirst
   */
  export type DetalleFacturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFactura to fetch.
     */
    where?: DetalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleFacturas to fetch.
     */
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleFacturas.
     */
    cursor?: DetalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleFacturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleFacturas.
     */
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * DetalleFactura findFirstOrThrow
   */
  export type DetalleFacturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFactura to fetch.
     */
    where?: DetalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleFacturas to fetch.
     */
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetalleFacturas.
     */
    cursor?: DetalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleFacturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleFacturas.
     */
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * DetalleFactura findMany
   */
  export type DetalleFacturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter, which DetalleFacturas to fetch.
     */
    where?: DetalleFacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetalleFacturas to fetch.
     */
    orderBy?: DetalleFacturaOrderByWithRelationInput | DetalleFacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetalleFacturas.
     */
    cursor?: DetalleFacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetalleFacturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetalleFacturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetalleFacturas.
     */
    distinct?: DetalleFacturaScalarFieldEnum | DetalleFacturaScalarFieldEnum[]
  }

  /**
   * DetalleFactura create
   */
  export type DetalleFacturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * The data needed to create a DetalleFactura.
     */
    data: XOR<DetalleFacturaCreateInput, DetalleFacturaUncheckedCreateInput>
  }

  /**
   * DetalleFactura createMany
   */
  export type DetalleFacturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetalleFacturas.
     */
    data: DetalleFacturaCreateManyInput | DetalleFacturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetalleFactura update
   */
  export type DetalleFacturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * The data needed to update a DetalleFactura.
     */
    data: XOR<DetalleFacturaUpdateInput, DetalleFacturaUncheckedUpdateInput>
    /**
     * Choose, which DetalleFactura to update.
     */
    where: DetalleFacturaWhereUniqueInput
  }

  /**
   * DetalleFactura updateMany
   */
  export type DetalleFacturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetalleFacturas.
     */
    data: XOR<DetalleFacturaUpdateManyMutationInput, DetalleFacturaUncheckedUpdateManyInput>
    /**
     * Filter which DetalleFacturas to update
     */
    where?: DetalleFacturaWhereInput
    /**
     * Limit how many DetalleFacturas to update.
     */
    limit?: number
  }

  /**
   * DetalleFactura upsert
   */
  export type DetalleFacturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * The filter to search for the DetalleFactura to update in case it exists.
     */
    where: DetalleFacturaWhereUniqueInput
    /**
     * In case the DetalleFactura found by the `where` argument doesn't exist, create a new DetalleFactura with this data.
     */
    create: XOR<DetalleFacturaCreateInput, DetalleFacturaUncheckedCreateInput>
    /**
     * In case the DetalleFactura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleFacturaUpdateInput, DetalleFacturaUncheckedUpdateInput>
  }

  /**
   * DetalleFactura delete
   */
  export type DetalleFacturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
    /**
     * Filter which DetalleFactura to delete.
     */
    where: DetalleFacturaWhereUniqueInput
  }

  /**
   * DetalleFactura deleteMany
   */
  export type DetalleFacturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetalleFacturas to delete
     */
    where?: DetalleFacturaWhereInput
    /**
     * Limit how many DetalleFacturas to delete.
     */
    limit?: number
  }

  /**
   * DetalleFactura without action
   */
  export type DetalleFacturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetalleFactura
     */
    select?: DetalleFacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetalleFactura
     */
    omit?: DetalleFacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleFacturaInclude<ExtArgs> | null
  }


  /**
   * Model Pago
   */

  export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  export type PagoAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    montoPago: Decimal | null
  }

  export type PagoSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    montoPago: Decimal | null
  }

  export type PagoMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    fechaPago: Date | null
    montoPago: Decimal | null
    estado: string | null
  }

  export type PagoMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    fechaPago: Date | null
    montoPago: Decimal | null
    estado: string | null
  }

  export type PagoCountAggregateOutputType = {
    id: number
    pedidoId: number
    fechaPago: number
    montoPago: number
    estado: number
    _all: number
  }


  export type PagoAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    montoPago?: true
  }

  export type PagoSumAggregateInputType = {
    id?: true
    pedidoId?: true
    montoPago?: true
  }

  export type PagoMinAggregateInputType = {
    id?: true
    pedidoId?: true
    fechaPago?: true
    montoPago?: true
    estado?: true
  }

  export type PagoMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    fechaPago?: true
    montoPago?: true
    estado?: true
  }

  export type PagoCountAggregateInputType = {
    id?: true
    pedidoId?: true
    fechaPago?: true
    montoPago?: true
    estado?: true
    _all?: true
  }

  export type PagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pago to aggregate.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagos
    **/
    _count?: true | PagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoMaxAggregateInputType
  }

  export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
        [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePago[P]>
      : GetScalarType<T[P], AggregatePago[P]>
  }




  export type PagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithAggregationInput | PagoOrderByWithAggregationInput[]
    by: PagoScalarFieldEnum[] | PagoScalarFieldEnum
    having?: PagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoCountAggregateInputType | true
    _avg?: PagoAvgAggregateInputType
    _sum?: PagoSumAggregateInputType
    _min?: PagoMinAggregateInputType
    _max?: PagoMaxAggregateInputType
  }

  export type PagoGroupByOutputType = {
    id: number
    pedidoId: number
    fechaPago: Date
    montoPago: Decimal
    estado: string
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  type GetPagoGroupByPayload<T extends PagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoGroupByOutputType[P]>
            : GetScalarType<T[P], PagoGroupByOutputType[P]>
        }
      >
    >


  export type PagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    fechaPago?: boolean
    montoPago?: boolean
    estado?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>



  export type PagoSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    fechaPago?: boolean
    montoPago?: boolean
    estado?: boolean
  }

  export type PagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "fechaPago" | "montoPago" | "estado", ExtArgs["result"]["pago"]>
  export type PagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $PagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pago"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      fechaPago: Date
      montoPago: Prisma.Decimal
      estado: string
    }, ExtArgs["result"]["pago"]>
    composites: {}
  }

  type PagoGetPayload<S extends boolean | null | undefined | PagoDefaultArgs> = $Result.GetResult<Prisma.$PagoPayload, S>

  type PagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagoCountAggregateInputType | true
    }

  export interface PagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pago'], meta: { name: 'Pago' } }
    /**
     * Find zero or one Pago that matches the filter.
     * @param {PagoFindUniqueArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagoFindUniqueArgs>(args: SelectSubset<T, PagoFindUniqueArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagoFindUniqueOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagoFindFirstArgs>(args?: SelectSubset<T, PagoFindFirstArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pago.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pago.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagoWithIdOnly = await prisma.pago.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagoFindManyArgs>(args?: SelectSubset<T, PagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pago.
     * @param {PagoCreateArgs} args - Arguments to create a Pago.
     * @example
     * // Create one Pago
     * const Pago = await prisma.pago.create({
     *   data: {
     *     // ... data to create a Pago
     *   }
     * })
     * 
     */
    create<T extends PagoCreateArgs>(args: SelectSubset<T, PagoCreateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagos.
     * @param {PagoCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagoCreateManyArgs>(args?: SelectSubset<T, PagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pago.
     * @param {PagoDeleteArgs} args - Arguments to delete one Pago.
     * @example
     * // Delete one Pago
     * const Pago = await prisma.pago.delete({
     *   where: {
     *     // ... filter to delete one Pago
     *   }
     * })
     * 
     */
    delete<T extends PagoDeleteArgs>(args: SelectSubset<T, PagoDeleteArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pago.
     * @param {PagoUpdateArgs} args - Arguments to update one Pago.
     * @example
     * // Update one Pago
     * const pago = await prisma.pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagoUpdateArgs>(args: SelectSubset<T, PagoUpdateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagos.
     * @param {PagoDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagoDeleteManyArgs>(args?: SelectSubset<T, PagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagoUpdateManyArgs>(args: SelectSubset<T, PagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pago.
     * @param {PagoUpsertArgs} args - Arguments to update or create a Pago.
     * @example
     * // Update or create a Pago
     * const pago = await prisma.pago.upsert({
     *   create: {
     *     // ... data to create a Pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pago we want to update
     *   }
     * })
     */
    upsert<T extends PagoUpsertArgs>(args: SelectSubset<T, PagoUpsertArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pago.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends PagoCountArgs>(
      args?: Subset<T, PagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagoAggregateArgs>(args: Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>

    /**
     * Group by Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoGroupByArgs} args - Group by arguments.
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
      T extends PagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoGroupByArgs['orderBy'] }
        : { orderBy?: PagoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pago model
   */
  readonly fields: PagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pago model
   */
  interface PagoFieldRefs {
    readonly id: FieldRef<"Pago", 'Int'>
    readonly pedidoId: FieldRef<"Pago", 'Int'>
    readonly fechaPago: FieldRef<"Pago", 'DateTime'>
    readonly montoPago: FieldRef<"Pago", 'Decimal'>
    readonly estado: FieldRef<"Pago", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pago findUnique
   */
  export type PagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findUniqueOrThrow
   */
  export type PagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findFirst
   */
  export type PagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findFirstOrThrow
   */
  export type PagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findMany
   */
  export type PagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago create
   */
  export type PagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pago.
     */
    data: XOR<PagoCreateInput, PagoUncheckedCreateInput>
  }

  /**
   * Pago createMany
   */
  export type PagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagos.
     */
    data: PagoCreateManyInput | PagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pago update
   */
  export type PagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pago.
     */
    data: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
    /**
     * Choose, which Pago to update.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago updateMany
   */
  export type PagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to update.
     */
    limit?: number
  }

  /**
   * Pago upsert
   */
  export type PagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pago to update in case it exists.
     */
    where: PagoWhereUniqueInput
    /**
     * In case the Pago found by the `where` argument doesn't exist, create a new Pago with this data.
     */
    create: XOR<PagoCreateInput, PagoUncheckedCreateInput>
    /**
     * In case the Pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
  }

  /**
   * Pago delete
   */
  export type PagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter which Pago to delete.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago deleteMany
   */
  export type PagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagos to delete
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to delete.
     */
    limit?: number
  }

  /**
   * Pago without action
   */
  export type PagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RolScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    rolId: 'rolId',
    primerNombre: 'primerNombre',
    segundoNombre: 'segundoNombre',
    primerApellido: 'primerApellido',
    segundoApellido: 'segundoApellido',
    correo: 'correo',
    contrasena: 'contrasena',
    telefono: 'telefono',
    fechaRegistro: 'fechaRegistro',
    estado: 'estado'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const DepartamentoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type DepartamentoScalarFieldEnum = (typeof DepartamentoScalarFieldEnum)[keyof typeof DepartamentoScalarFieldEnum]


  export const CiudadScalarFieldEnum: {
    id: 'id',
    departamentoId: 'departamentoId',
    nombre: 'nombre'
  };

  export type CiudadScalarFieldEnum = (typeof CiudadScalarFieldEnum)[keyof typeof CiudadScalarFieldEnum]


  export const DireccionScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    ciudadId: 'ciudadId',
    callePrincipal: 'callePrincipal',
    numeroExterior: 'numeroExterior',
    barrio: 'barrio',
    referencia: 'referencia',
    codigoPostal: 'codigoPostal'
  };

  export type DireccionScalarFieldEnum = (typeof DireccionScalarFieldEnum)[keyof typeof DireccionScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id: 'id',
    categoriaId: 'categoriaId',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    stock: 'stock',
    estado: 'estado'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const ImagenProductoScalarFieldEnum: {
    id: 'id',
    productoId: 'productoId',
    urlImagen: 'urlImagen'
  };

  export type ImagenProductoScalarFieldEnum = (typeof ImagenProductoScalarFieldEnum)[keyof typeof ImagenProductoScalarFieldEnum]


  export const CarritoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    fechaCreacion: 'fechaCreacion',
    estado: 'estado'
  };

  export type CarritoScalarFieldEnum = (typeof CarritoScalarFieldEnum)[keyof typeof CarritoScalarFieldEnum]


  export const DetalleCarritoScalarFieldEnum: {
    id: 'id',
    carritoId: 'carritoId',
    productoId: 'productoId',
    cantidad: 'cantidad'
  };

  export type DetalleCarritoScalarFieldEnum = (typeof DetalleCarritoScalarFieldEnum)[keyof typeof DetalleCarritoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    direccionId: 'direccionId',
    fechaPedido: 'fechaPedido',
    estado: 'estado',
    total: 'total'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const DetallePedidoScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    productoId: 'productoId',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario'
  };

  export type DetallePedidoScalarFieldEnum = (typeof DetallePedidoScalarFieldEnum)[keyof typeof DetallePedidoScalarFieldEnum]


  export const FacturaScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    fechaEmision: 'fechaEmision',
    totalPagar: 'totalPagar'
  };

  export type FacturaScalarFieldEnum = (typeof FacturaScalarFieldEnum)[keyof typeof FacturaScalarFieldEnum]


  export const DetalleFacturaScalarFieldEnum: {
    id: 'id',
    facturaId: 'facturaId',
    productoId: 'productoId',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario',
    impuesto: 'impuesto',
    subTotal: 'subTotal'
  };

  export type DetalleFacturaScalarFieldEnum = (typeof DetalleFacturaScalarFieldEnum)[keyof typeof DetalleFacturaScalarFieldEnum]


  export const PagoScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    fechaPago: 'fechaPago',
    montoPago: 'montoPago',
    estado: 'estado'
  };

  export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const RolOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type RolOrderByRelevanceFieldEnum = (typeof RolOrderByRelevanceFieldEnum)[keyof typeof RolOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    primerNombre: 'primerNombre',
    segundoNombre: 'segundoNombre',
    primerApellido: 'primerApellido',
    segundoApellido: 'segundoApellido',
    correo: 'correo',
    contrasena: 'contrasena',
    telefono: 'telefono',
    estado: 'estado'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const DepartamentoOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type DepartamentoOrderByRelevanceFieldEnum = (typeof DepartamentoOrderByRelevanceFieldEnum)[keyof typeof DepartamentoOrderByRelevanceFieldEnum]


  export const CiudadOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type CiudadOrderByRelevanceFieldEnum = (typeof CiudadOrderByRelevanceFieldEnum)[keyof typeof CiudadOrderByRelevanceFieldEnum]


  export const DireccionOrderByRelevanceFieldEnum: {
    callePrincipal: 'callePrincipal',
    numeroExterior: 'numeroExterior',
    barrio: 'barrio',
    referencia: 'referencia',
    codigoPostal: 'codigoPostal'
  };

  export type DireccionOrderByRelevanceFieldEnum = (typeof DireccionOrderByRelevanceFieldEnum)[keyof typeof DireccionOrderByRelevanceFieldEnum]


  export const CategoriaOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type CategoriaOrderByRelevanceFieldEnum = (typeof CategoriaOrderByRelevanceFieldEnum)[keyof typeof CategoriaOrderByRelevanceFieldEnum]


  export const ProductoOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    estado: 'estado'
  };

  export type ProductoOrderByRelevanceFieldEnum = (typeof ProductoOrderByRelevanceFieldEnum)[keyof typeof ProductoOrderByRelevanceFieldEnum]


  export const ImagenProductoOrderByRelevanceFieldEnum: {
    urlImagen: 'urlImagen'
  };

  export type ImagenProductoOrderByRelevanceFieldEnum = (typeof ImagenProductoOrderByRelevanceFieldEnum)[keyof typeof ImagenProductoOrderByRelevanceFieldEnum]


  export const CarritoOrderByRelevanceFieldEnum: {
    estado: 'estado'
  };

  export type CarritoOrderByRelevanceFieldEnum = (typeof CarritoOrderByRelevanceFieldEnum)[keyof typeof CarritoOrderByRelevanceFieldEnum]


  export const PedidoOrderByRelevanceFieldEnum: {
    estado: 'estado'
  };

  export type PedidoOrderByRelevanceFieldEnum = (typeof PedidoOrderByRelevanceFieldEnum)[keyof typeof PedidoOrderByRelevanceFieldEnum]


  export const PagoOrderByRelevanceFieldEnum: {
    estado: 'estado'
  };

  export type PagoOrderByRelevanceFieldEnum = (typeof PagoOrderByRelevanceFieldEnum)[keyof typeof PagoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id?: IntFilter<"Rol"> | number
    nombre?: StringFilter<"Rol"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    _relevance?: RolOrderByRelevanceInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    nombre?: StringFilter<"Rol"> | string
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type RolOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _avg?: RolAvgOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
    _sum?: RolSumOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rol"> | number
    nombre?: StringWithAggregatesFilter<"Rol"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    rolId?: IntFilter<"Usuario"> | number
    primerNombre?: StringFilter<"Usuario"> | string
    segundoNombre?: StringNullableFilter<"Usuario"> | string | null
    primerApellido?: StringFilter<"Usuario"> | string
    segundoApellido?: StringNullableFilter<"Usuario"> | string | null
    correo?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    fechaRegistro?: DateTimeFilter<"Usuario"> | Date | string
    estado?: StringFilter<"Usuario"> | string
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    direcciones?: DireccionListRelationFilter
    carrito?: XOR<CarritoNullableScalarRelationFilter, CarritoWhereInput> | null
    pedidos?: PedidoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    rolId?: SortOrder
    primerNombre?: SortOrder
    segundoNombre?: SortOrderInput | SortOrder
    primerApellido?: SortOrder
    segundoApellido?: SortOrderInput | SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrder
    rol?: RolOrderByWithRelationInput
    direcciones?: DireccionOrderByRelationAggregateInput
    carrito?: CarritoOrderByWithRelationInput
    pedidos?: PedidoOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    rolId?: IntFilter<"Usuario"> | number
    primerNombre?: StringFilter<"Usuario"> | string
    segundoNombre?: StringNullableFilter<"Usuario"> | string | null
    primerApellido?: StringFilter<"Usuario"> | string
    segundoApellido?: StringNullableFilter<"Usuario"> | string | null
    contrasena?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    fechaRegistro?: DateTimeFilter<"Usuario"> | Date | string
    estado?: StringFilter<"Usuario"> | string
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    direcciones?: DireccionListRelationFilter
    carrito?: XOR<CarritoNullableScalarRelationFilter, CarritoWhereInput> | null
    pedidos?: PedidoListRelationFilter
  }, "id" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    rolId?: SortOrder
    primerNombre?: SortOrder
    segundoNombre?: SortOrderInput | SortOrder
    primerApellido?: SortOrder
    segundoApellido?: SortOrderInput | SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    rolId?: IntWithAggregatesFilter<"Usuario"> | number
    primerNombre?: StringWithAggregatesFilter<"Usuario"> | string
    segundoNombre?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    primerApellido?: StringWithAggregatesFilter<"Usuario"> | string
    segundoApellido?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
    telefono?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    fechaRegistro?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    estado?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type DepartamentoWhereInput = {
    AND?: DepartamentoWhereInput | DepartamentoWhereInput[]
    OR?: DepartamentoWhereInput[]
    NOT?: DepartamentoWhereInput | DepartamentoWhereInput[]
    id?: IntFilter<"Departamento"> | number
    nombre?: StringFilter<"Departamento"> | string
    ciudades?: CiudadListRelationFilter
  }

  export type DepartamentoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    ciudades?: CiudadOrderByRelationAggregateInput
    _relevance?: DepartamentoOrderByRelevanceInput
  }

  export type DepartamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DepartamentoWhereInput | DepartamentoWhereInput[]
    OR?: DepartamentoWhereInput[]
    NOT?: DepartamentoWhereInput | DepartamentoWhereInput[]
    nombre?: StringFilter<"Departamento"> | string
    ciudades?: CiudadListRelationFilter
  }, "id">

  export type DepartamentoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: DepartamentoCountOrderByAggregateInput
    _avg?: DepartamentoAvgOrderByAggregateInput
    _max?: DepartamentoMaxOrderByAggregateInput
    _min?: DepartamentoMinOrderByAggregateInput
    _sum?: DepartamentoSumOrderByAggregateInput
  }

  export type DepartamentoScalarWhereWithAggregatesInput = {
    AND?: DepartamentoScalarWhereWithAggregatesInput | DepartamentoScalarWhereWithAggregatesInput[]
    OR?: DepartamentoScalarWhereWithAggregatesInput[]
    NOT?: DepartamentoScalarWhereWithAggregatesInput | DepartamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Departamento"> | number
    nombre?: StringWithAggregatesFilter<"Departamento"> | string
  }

  export type CiudadWhereInput = {
    AND?: CiudadWhereInput | CiudadWhereInput[]
    OR?: CiudadWhereInput[]
    NOT?: CiudadWhereInput | CiudadWhereInput[]
    id?: IntFilter<"Ciudad"> | number
    departamentoId?: IntFilter<"Ciudad"> | number
    nombre?: StringFilter<"Ciudad"> | string
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
    direcciones?: DireccionListRelationFilter
  }

  export type CiudadOrderByWithRelationInput = {
    id?: SortOrder
    departamentoId?: SortOrder
    nombre?: SortOrder
    departamento?: DepartamentoOrderByWithRelationInput
    direcciones?: DireccionOrderByRelationAggregateInput
    _relevance?: CiudadOrderByRelevanceInput
  }

  export type CiudadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CiudadWhereInput | CiudadWhereInput[]
    OR?: CiudadWhereInput[]
    NOT?: CiudadWhereInput | CiudadWhereInput[]
    departamentoId?: IntFilter<"Ciudad"> | number
    nombre?: StringFilter<"Ciudad"> | string
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
    direcciones?: DireccionListRelationFilter
  }, "id">

  export type CiudadOrderByWithAggregationInput = {
    id?: SortOrder
    departamentoId?: SortOrder
    nombre?: SortOrder
    _count?: CiudadCountOrderByAggregateInput
    _avg?: CiudadAvgOrderByAggregateInput
    _max?: CiudadMaxOrderByAggregateInput
    _min?: CiudadMinOrderByAggregateInput
    _sum?: CiudadSumOrderByAggregateInput
  }

  export type CiudadScalarWhereWithAggregatesInput = {
    AND?: CiudadScalarWhereWithAggregatesInput | CiudadScalarWhereWithAggregatesInput[]
    OR?: CiudadScalarWhereWithAggregatesInput[]
    NOT?: CiudadScalarWhereWithAggregatesInput | CiudadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ciudad"> | number
    departamentoId?: IntWithAggregatesFilter<"Ciudad"> | number
    nombre?: StringWithAggregatesFilter<"Ciudad"> | string
  }

  export type DireccionWhereInput = {
    AND?: DireccionWhereInput | DireccionWhereInput[]
    OR?: DireccionWhereInput[]
    NOT?: DireccionWhereInput | DireccionWhereInput[]
    id?: IntFilter<"Direccion"> | number
    usuarioId?: IntFilter<"Direccion"> | number
    ciudadId?: IntFilter<"Direccion"> | number
    callePrincipal?: StringFilter<"Direccion"> | string
    numeroExterior?: StringFilter<"Direccion"> | string
    barrio?: StringFilter<"Direccion"> | string
    referencia?: StringNullableFilter<"Direccion"> | string | null
    codigoPostal?: StringNullableFilter<"Direccion"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ciudad?: XOR<CiudadScalarRelationFilter, CiudadWhereInput>
    pedidos?: PedidoListRelationFilter
  }

  export type DireccionOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ciudadId?: SortOrder
    callePrincipal?: SortOrder
    numeroExterior?: SortOrder
    barrio?: SortOrder
    referencia?: SortOrderInput | SortOrder
    codigoPostal?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    ciudad?: CiudadOrderByWithRelationInput
    pedidos?: PedidoOrderByRelationAggregateInput
    _relevance?: DireccionOrderByRelevanceInput
  }

  export type DireccionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DireccionWhereInput | DireccionWhereInput[]
    OR?: DireccionWhereInput[]
    NOT?: DireccionWhereInput | DireccionWhereInput[]
    usuarioId?: IntFilter<"Direccion"> | number
    ciudadId?: IntFilter<"Direccion"> | number
    callePrincipal?: StringFilter<"Direccion"> | string
    numeroExterior?: StringFilter<"Direccion"> | string
    barrio?: StringFilter<"Direccion"> | string
    referencia?: StringNullableFilter<"Direccion"> | string | null
    codigoPostal?: StringNullableFilter<"Direccion"> | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    ciudad?: XOR<CiudadScalarRelationFilter, CiudadWhereInput>
    pedidos?: PedidoListRelationFilter
  }, "id">

  export type DireccionOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ciudadId?: SortOrder
    callePrincipal?: SortOrder
    numeroExterior?: SortOrder
    barrio?: SortOrder
    referencia?: SortOrderInput | SortOrder
    codigoPostal?: SortOrderInput | SortOrder
    _count?: DireccionCountOrderByAggregateInput
    _avg?: DireccionAvgOrderByAggregateInput
    _max?: DireccionMaxOrderByAggregateInput
    _min?: DireccionMinOrderByAggregateInput
    _sum?: DireccionSumOrderByAggregateInput
  }

  export type DireccionScalarWhereWithAggregatesInput = {
    AND?: DireccionScalarWhereWithAggregatesInput | DireccionScalarWhereWithAggregatesInput[]
    OR?: DireccionScalarWhereWithAggregatesInput[]
    NOT?: DireccionScalarWhereWithAggregatesInput | DireccionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Direccion"> | number
    usuarioId?: IntWithAggregatesFilter<"Direccion"> | number
    ciudadId?: IntWithAggregatesFilter<"Direccion"> | number
    callePrincipal?: StringWithAggregatesFilter<"Direccion"> | string
    numeroExterior?: StringWithAggregatesFilter<"Direccion"> | string
    barrio?: StringWithAggregatesFilter<"Direccion"> | string
    referencia?: StringNullableWithAggregatesFilter<"Direccion"> | string | null
    codigoPostal?: StringNullableWithAggregatesFilter<"Direccion"> | string | null
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    descripcion?: StringNullableFilter<"Categoria"> | string | null
    productos?: ProductoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    productos?: ProductoOrderByRelationAggregateInput
    _relevance?: CategoriaOrderByRelevanceInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nombre?: StringFilter<"Categoria"> | string
    descripcion?: StringNullableFilter<"Categoria"> | string | null
    productos?: ProductoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id?: IntFilter<"Producto"> | number
    categoriaId?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Producto"> | number
    estado?: StringFilter<"Producto"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    imagenes?: ImagenProductoListRelationFilter
    detallesCarrito?: DetalleCarritoListRelationFilter
    detallesPedido?: DetallePedidoListRelationFilter
    detallesFactura?: DetalleFacturaListRelationFilter
  }

  export type ProductoOrderByWithRelationInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    estado?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    imagenes?: ImagenProductoOrderByRelationAggregateInput
    detallesCarrito?: DetalleCarritoOrderByRelationAggregateInput
    detallesPedido?: DetallePedidoOrderByRelationAggregateInput
    detallesFactura?: DetalleFacturaOrderByRelationAggregateInput
    _relevance?: ProductoOrderByRelevanceInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    categoriaId?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Producto"> | number
    estado?: StringFilter<"Producto"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    imagenes?: ImagenProductoListRelationFilter
    detallesCarrito?: DetalleCarritoListRelationFilter
    detallesPedido?: DetallePedidoListRelationFilter
    detallesFactura?: DetalleFacturaListRelationFilter
  }, "id">

  export type ProductoOrderByWithAggregationInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    stock?: SortOrder
    estado?: SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producto"> | number
    categoriaId?: IntWithAggregatesFilter<"Producto"> | number
    nombre?: StringWithAggregatesFilter<"Producto"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Producto"> | string | null
    precio?: DecimalWithAggregatesFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntWithAggregatesFilter<"Producto"> | number
    estado?: StringWithAggregatesFilter<"Producto"> | string
  }

  export type ImagenProductoWhereInput = {
    AND?: ImagenProductoWhereInput | ImagenProductoWhereInput[]
    OR?: ImagenProductoWhereInput[]
    NOT?: ImagenProductoWhereInput | ImagenProductoWhereInput[]
    id?: IntFilter<"ImagenProducto"> | number
    productoId?: IntFilter<"ImagenProducto"> | number
    urlImagen?: StringFilter<"ImagenProducto"> | string
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type ImagenProductoOrderByWithRelationInput = {
    id?: SortOrder
    productoId?: SortOrder
    urlImagen?: SortOrder
    producto?: ProductoOrderByWithRelationInput
    _relevance?: ImagenProductoOrderByRelevanceInput
  }

  export type ImagenProductoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImagenProductoWhereInput | ImagenProductoWhereInput[]
    OR?: ImagenProductoWhereInput[]
    NOT?: ImagenProductoWhereInput | ImagenProductoWhereInput[]
    productoId?: IntFilter<"ImagenProducto"> | number
    urlImagen?: StringFilter<"ImagenProducto"> | string
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id">

  export type ImagenProductoOrderByWithAggregationInput = {
    id?: SortOrder
    productoId?: SortOrder
    urlImagen?: SortOrder
    _count?: ImagenProductoCountOrderByAggregateInput
    _avg?: ImagenProductoAvgOrderByAggregateInput
    _max?: ImagenProductoMaxOrderByAggregateInput
    _min?: ImagenProductoMinOrderByAggregateInput
    _sum?: ImagenProductoSumOrderByAggregateInput
  }

  export type ImagenProductoScalarWhereWithAggregatesInput = {
    AND?: ImagenProductoScalarWhereWithAggregatesInput | ImagenProductoScalarWhereWithAggregatesInput[]
    OR?: ImagenProductoScalarWhereWithAggregatesInput[]
    NOT?: ImagenProductoScalarWhereWithAggregatesInput | ImagenProductoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImagenProducto"> | number
    productoId?: IntWithAggregatesFilter<"ImagenProducto"> | number
    urlImagen?: StringWithAggregatesFilter<"ImagenProducto"> | string
  }

  export type CarritoWhereInput = {
    AND?: CarritoWhereInput | CarritoWhereInput[]
    OR?: CarritoWhereInput[]
    NOT?: CarritoWhereInput | CarritoWhereInput[]
    id?: IntFilter<"Carrito"> | number
    usuarioId?: IntFilter<"Carrito"> | number
    fechaCreacion?: DateTimeFilter<"Carrito"> | Date | string
    estado?: StringFilter<"Carrito"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    detalles?: DetalleCarritoListRelationFilter
  }

  export type CarritoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fechaCreacion?: SortOrder
    estado?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    detalles?: DetalleCarritoOrderByRelationAggregateInput
    _relevance?: CarritoOrderByRelevanceInput
  }

  export type CarritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId?: number
    AND?: CarritoWhereInput | CarritoWhereInput[]
    OR?: CarritoWhereInput[]
    NOT?: CarritoWhereInput | CarritoWhereInput[]
    fechaCreacion?: DateTimeFilter<"Carrito"> | Date | string
    estado?: StringFilter<"Carrito"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    detalles?: DetalleCarritoListRelationFilter
  }, "id" | "usuarioId">

  export type CarritoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fechaCreacion?: SortOrder
    estado?: SortOrder
    _count?: CarritoCountOrderByAggregateInput
    _avg?: CarritoAvgOrderByAggregateInput
    _max?: CarritoMaxOrderByAggregateInput
    _min?: CarritoMinOrderByAggregateInput
    _sum?: CarritoSumOrderByAggregateInput
  }

  export type CarritoScalarWhereWithAggregatesInput = {
    AND?: CarritoScalarWhereWithAggregatesInput | CarritoScalarWhereWithAggregatesInput[]
    OR?: CarritoScalarWhereWithAggregatesInput[]
    NOT?: CarritoScalarWhereWithAggregatesInput | CarritoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carrito"> | number
    usuarioId?: IntWithAggregatesFilter<"Carrito"> | number
    fechaCreacion?: DateTimeWithAggregatesFilter<"Carrito"> | Date | string
    estado?: StringWithAggregatesFilter<"Carrito"> | string
  }

  export type DetalleCarritoWhereInput = {
    AND?: DetalleCarritoWhereInput | DetalleCarritoWhereInput[]
    OR?: DetalleCarritoWhereInput[]
    NOT?: DetalleCarritoWhereInput | DetalleCarritoWhereInput[]
    id?: IntFilter<"DetalleCarrito"> | number
    carritoId?: IntFilter<"DetalleCarrito"> | number
    productoId?: IntFilter<"DetalleCarrito"> | number
    cantidad?: IntFilter<"DetalleCarrito"> | number
    carrito?: XOR<CarritoScalarRelationFilter, CarritoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type DetalleCarritoOrderByWithRelationInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    carrito?: CarritoOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type DetalleCarritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetalleCarritoWhereInput | DetalleCarritoWhereInput[]
    OR?: DetalleCarritoWhereInput[]
    NOT?: DetalleCarritoWhereInput | DetalleCarritoWhereInput[]
    carritoId?: IntFilter<"DetalleCarrito"> | number
    productoId?: IntFilter<"DetalleCarrito"> | number
    cantidad?: IntFilter<"DetalleCarrito"> | number
    carrito?: XOR<CarritoScalarRelationFilter, CarritoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id">

  export type DetalleCarritoOrderByWithAggregationInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    _count?: DetalleCarritoCountOrderByAggregateInput
    _avg?: DetalleCarritoAvgOrderByAggregateInput
    _max?: DetalleCarritoMaxOrderByAggregateInput
    _min?: DetalleCarritoMinOrderByAggregateInput
    _sum?: DetalleCarritoSumOrderByAggregateInput
  }

  export type DetalleCarritoScalarWhereWithAggregatesInput = {
    AND?: DetalleCarritoScalarWhereWithAggregatesInput | DetalleCarritoScalarWhereWithAggregatesInput[]
    OR?: DetalleCarritoScalarWhereWithAggregatesInput[]
    NOT?: DetalleCarritoScalarWhereWithAggregatesInput | DetalleCarritoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetalleCarrito"> | number
    carritoId?: IntWithAggregatesFilter<"DetalleCarrito"> | number
    productoId?: IntWithAggregatesFilter<"DetalleCarrito"> | number
    cantidad?: IntWithAggregatesFilter<"DetalleCarrito"> | number
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    usuarioId?: IntFilter<"Pedido"> | number
    direccionId?: IntFilter<"Pedido"> | number
    fechaPedido?: DateTimeFilter<"Pedido"> | Date | string
    estado?: StringFilter<"Pedido"> | string
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    direccion?: XOR<DireccionScalarRelationFilter, DireccionWhereInput>
    detalles?: DetallePedidoListRelationFilter
    factura?: XOR<FacturaNullableScalarRelationFilter, FacturaWhereInput> | null
    pago?: XOR<PagoNullableScalarRelationFilter, PagoWhereInput> | null
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
    fechaPedido?: SortOrder
    estado?: SortOrder
    total?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    direccion?: DireccionOrderByWithRelationInput
    detalles?: DetallePedidoOrderByRelationAggregateInput
    factura?: FacturaOrderByWithRelationInput
    pago?: PagoOrderByWithRelationInput
    _relevance?: PedidoOrderByRelevanceInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    usuarioId?: IntFilter<"Pedido"> | number
    direccionId?: IntFilter<"Pedido"> | number
    fechaPedido?: DateTimeFilter<"Pedido"> | Date | string
    estado?: StringFilter<"Pedido"> | string
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    direccion?: XOR<DireccionScalarRelationFilter, DireccionWhereInput>
    detalles?: DetallePedidoListRelationFilter
    factura?: XOR<FacturaNullableScalarRelationFilter, FacturaWhereInput> | null
    pago?: XOR<PagoNullableScalarRelationFilter, PagoWhereInput> | null
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
    fechaPedido?: SortOrder
    estado?: SortOrder
    total?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    usuarioId?: IntWithAggregatesFilter<"Pedido"> | number
    direccionId?: IntWithAggregatesFilter<"Pedido"> | number
    fechaPedido?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    estado?: StringWithAggregatesFilter<"Pedido"> | string
    total?: DecimalWithAggregatesFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
  }

  export type DetallePedidoWhereInput = {
    AND?: DetallePedidoWhereInput | DetallePedidoWhereInput[]
    OR?: DetallePedidoWhereInput[]
    NOT?: DetallePedidoWhereInput | DetallePedidoWhereInput[]
    id?: IntFilter<"DetallePedido"> | number
    pedidoId?: IntFilter<"DetallePedido"> | number
    productoId?: IntFilter<"DetallePedido"> | number
    cantidad?: IntFilter<"DetallePedido"> | number
    precioUnitario?: DecimalFilter<"DetallePedido"> | Decimal | DecimalJsLike | number | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type DetallePedidoOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type DetallePedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetallePedidoWhereInput | DetallePedidoWhereInput[]
    OR?: DetallePedidoWhereInput[]
    NOT?: DetallePedidoWhereInput | DetallePedidoWhereInput[]
    pedidoId?: IntFilter<"DetallePedido"> | number
    productoId?: IntFilter<"DetallePedido"> | number
    cantidad?: IntFilter<"DetallePedido"> | number
    precioUnitario?: DecimalFilter<"DetallePedido"> | Decimal | DecimalJsLike | number | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id">

  export type DetallePedidoOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    _count?: DetallePedidoCountOrderByAggregateInput
    _avg?: DetallePedidoAvgOrderByAggregateInput
    _max?: DetallePedidoMaxOrderByAggregateInput
    _min?: DetallePedidoMinOrderByAggregateInput
    _sum?: DetallePedidoSumOrderByAggregateInput
  }

  export type DetallePedidoScalarWhereWithAggregatesInput = {
    AND?: DetallePedidoScalarWhereWithAggregatesInput | DetallePedidoScalarWhereWithAggregatesInput[]
    OR?: DetallePedidoScalarWhereWithAggregatesInput[]
    NOT?: DetallePedidoScalarWhereWithAggregatesInput | DetallePedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetallePedido"> | number
    pedidoId?: IntWithAggregatesFilter<"DetallePedido"> | number
    productoId?: IntWithAggregatesFilter<"DetallePedido"> | number
    cantidad?: IntWithAggregatesFilter<"DetallePedido"> | number
    precioUnitario?: DecimalWithAggregatesFilter<"DetallePedido"> | Decimal | DecimalJsLike | number | string
  }

  export type FacturaWhereInput = {
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    id?: IntFilter<"Factura"> | number
    pedidoId?: IntFilter<"Factura"> | number
    fechaEmision?: DateTimeFilter<"Factura"> | Date | string
    totalPagar?: DecimalFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    detalles?: DetalleFacturaListRelationFilter
  }

  export type FacturaOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    fechaEmision?: SortOrder
    totalPagar?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    detalles?: DetalleFacturaOrderByRelationAggregateInput
  }

  export type FacturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pedidoId?: number
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    fechaEmision?: DateTimeFilter<"Factura"> | Date | string
    totalPagar?: DecimalFilter<"Factura"> | Decimal | DecimalJsLike | number | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    detalles?: DetalleFacturaListRelationFilter
  }, "id" | "pedidoId">

  export type FacturaOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    fechaEmision?: SortOrder
    totalPagar?: SortOrder
    _count?: FacturaCountOrderByAggregateInput
    _avg?: FacturaAvgOrderByAggregateInput
    _max?: FacturaMaxOrderByAggregateInput
    _min?: FacturaMinOrderByAggregateInput
    _sum?: FacturaSumOrderByAggregateInput
  }

  export type FacturaScalarWhereWithAggregatesInput = {
    AND?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    OR?: FacturaScalarWhereWithAggregatesInput[]
    NOT?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Factura"> | number
    pedidoId?: IntWithAggregatesFilter<"Factura"> | number
    fechaEmision?: DateTimeWithAggregatesFilter<"Factura"> | Date | string
    totalPagar?: DecimalWithAggregatesFilter<"Factura"> | Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaWhereInput = {
    AND?: DetalleFacturaWhereInput | DetalleFacturaWhereInput[]
    OR?: DetalleFacturaWhereInput[]
    NOT?: DetalleFacturaWhereInput | DetalleFacturaWhereInput[]
    id?: IntFilter<"DetalleFactura"> | number
    facturaId?: IntFilter<"DetalleFactura"> | number
    productoId?: IntFilter<"DetalleFactura"> | number
    cantidad?: IntFilter<"DetalleFactura"> | number
    precioUnitario?: DecimalFilter<"DetalleFactura"> | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalFilter<"DetalleFactura"> | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFilter<"DetalleFactura"> | Decimal | DecimalJsLike | number | string
    factura?: XOR<FacturaScalarRelationFilter, FacturaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type DetalleFacturaOrderByWithRelationInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    impuesto?: SortOrder
    subTotal?: SortOrder
    factura?: FacturaOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type DetalleFacturaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetalleFacturaWhereInput | DetalleFacturaWhereInput[]
    OR?: DetalleFacturaWhereInput[]
    NOT?: DetalleFacturaWhereInput | DetalleFacturaWhereInput[]
    facturaId?: IntFilter<"DetalleFactura"> | number
    productoId?: IntFilter<"DetalleFactura"> | number
    cantidad?: IntFilter<"DetalleFactura"> | number
    precioUnitario?: DecimalFilter<"DetalleFactura"> | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalFilter<"DetalleFactura"> | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFilter<"DetalleFactura"> | Decimal | DecimalJsLike | number | string
    factura?: XOR<FacturaScalarRelationFilter, FacturaWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id">

  export type DetalleFacturaOrderByWithAggregationInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    impuesto?: SortOrder
    subTotal?: SortOrder
    _count?: DetalleFacturaCountOrderByAggregateInput
    _avg?: DetalleFacturaAvgOrderByAggregateInput
    _max?: DetalleFacturaMaxOrderByAggregateInput
    _min?: DetalleFacturaMinOrderByAggregateInput
    _sum?: DetalleFacturaSumOrderByAggregateInput
  }

  export type DetalleFacturaScalarWhereWithAggregatesInput = {
    AND?: DetalleFacturaScalarWhereWithAggregatesInput | DetalleFacturaScalarWhereWithAggregatesInput[]
    OR?: DetalleFacturaScalarWhereWithAggregatesInput[]
    NOT?: DetalleFacturaScalarWhereWithAggregatesInput | DetalleFacturaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetalleFactura"> | number
    facturaId?: IntWithAggregatesFilter<"DetalleFactura"> | number
    productoId?: IntWithAggregatesFilter<"DetalleFactura"> | number
    cantidad?: IntWithAggregatesFilter<"DetalleFactura"> | number
    precioUnitario?: DecimalWithAggregatesFilter<"DetalleFactura"> | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalWithAggregatesFilter<"DetalleFactura"> | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalWithAggregatesFilter<"DetalleFactura"> | Decimal | DecimalJsLike | number | string
  }

  export type PagoWhereInput = {
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    id?: IntFilter<"Pago"> | number
    pedidoId?: IntFilter<"Pago"> | number
    fechaPago?: DateTimeFilter<"Pago"> | Date | string
    montoPago?: DecimalFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    estado?: StringFilter<"Pago"> | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type PagoOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    fechaPago?: SortOrder
    montoPago?: SortOrder
    estado?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    _relevance?: PagoOrderByRelevanceInput
  }

  export type PagoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pedidoId?: number
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    fechaPago?: DateTimeFilter<"Pago"> | Date | string
    montoPago?: DecimalFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    estado?: StringFilter<"Pago"> | string
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "id" | "pedidoId">

  export type PagoOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    fechaPago?: SortOrder
    montoPago?: SortOrder
    estado?: SortOrder
    _count?: PagoCountOrderByAggregateInput
    _avg?: PagoAvgOrderByAggregateInput
    _max?: PagoMaxOrderByAggregateInput
    _min?: PagoMinOrderByAggregateInput
    _sum?: PagoSumOrderByAggregateInput
  }

  export type PagoScalarWhereWithAggregatesInput = {
    AND?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    OR?: PagoScalarWhereWithAggregatesInput[]
    NOT?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pago"> | number
    pedidoId?: IntWithAggregatesFilter<"Pago"> | number
    fechaPago?: DateTimeWithAggregatesFilter<"Pago"> | Date | string
    montoPago?: DecimalWithAggregatesFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    estado?: StringWithAggregatesFilter<"Pago"> | string
  }

  export type RolCreateInput = {
    nombre: string
    usuarios?: UsuarioCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id?: number
    nombre: string
  }

  export type RolUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    primerNombre: string
    segundoNombre?: string | null
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    rol: RolCreateNestedOneWithoutUsuariosInput
    direcciones?: DireccionCreateNestedManyWithoutUsuarioInput
    carrito?: CarritoCreateNestedOneWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    rolId: number
    primerNombre: string
    segundoNombre?: string | null
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutUsuarioInput
    carrito?: CarritoUncheckedCreateNestedOneWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    primerNombre?: StringFieldUpdateOperationsInput | string
    segundoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    direcciones?: DireccionUpdateManyWithoutUsuarioNestedInput
    carrito?: CarritoUpdateOneWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    primerNombre?: StringFieldUpdateOperationsInput | string
    segundoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUncheckedUpdateManyWithoutUsuarioNestedInput
    carrito?: CarritoUncheckedUpdateOneWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    rolId: number
    primerNombre: string
    segundoNombre?: string | null
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
  }

  export type UsuarioUpdateManyMutationInput = {
    primerNombre?: StringFieldUpdateOperationsInput | string
    segundoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    primerNombre?: StringFieldUpdateOperationsInput | string
    segundoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type DepartamentoCreateInput = {
    nombre: string
    ciudades?: CiudadCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoUncheckedCreateInput = {
    id?: number
    nombre: string
    ciudades?: CiudadUncheckedCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ciudades?: CiudadUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ciudades?: CiudadUncheckedUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoCreateManyInput = {
    id?: number
    nombre: string
  }

  export type DepartamentoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DepartamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CiudadCreateInput = {
    nombre: string
    departamento: DepartamentoCreateNestedOneWithoutCiudadesInput
    direcciones?: DireccionCreateNestedManyWithoutCiudadInput
  }

  export type CiudadUncheckedCreateInput = {
    id?: number
    departamentoId: number
    nombre: string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type CiudadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    departamento?: DepartamentoUpdateOneRequiredWithoutCiudadesNestedInput
    direcciones?: DireccionUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    departamentoId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadCreateManyInput = {
    id?: number
    departamentoId: number
    nombre: string
  }

  export type CiudadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CiudadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    departamentoId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DireccionCreateInput = {
    callePrincipal: string
    numeroExterior: string
    barrio: string
    referencia?: string | null
    codigoPostal?: string | null
    usuario: UsuarioCreateNestedOneWithoutDireccionesInput
    ciudad: CiudadCreateNestedOneWithoutDireccionesInput
    pedidos?: PedidoCreateNestedManyWithoutDireccionInput
  }

  export type DireccionUncheckedCreateInput = {
    id?: number
    usuarioId: number
    ciudadId: number
    callePrincipal: string
    numeroExterior: string
    barrio: string
    referencia?: string | null
    codigoPostal?: string | null
    pedidos?: PedidoUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type DireccionUpdateInput = {
    callePrincipal?: StringFieldUpdateOperationsInput | string
    numeroExterior?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutDireccionesNestedInput
    ciudad?: CiudadUpdateOneRequiredWithoutDireccionesNestedInput
    pedidos?: PedidoUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    ciudadId?: IntFieldUpdateOperationsInput | number
    callePrincipal?: StringFieldUpdateOperationsInput | string
    numeroExterior?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos?: PedidoUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionCreateManyInput = {
    id?: number
    usuarioId: number
    ciudadId: number
    callePrincipal: string
    numeroExterior: string
    barrio: string
    referencia?: string | null
    codigoPostal?: string | null
  }

  export type DireccionUpdateManyMutationInput = {
    callePrincipal?: StringFieldUpdateOperationsInput | string
    numeroExterior?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DireccionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    ciudadId?: IntFieldUpdateOperationsInput | number
    callePrincipal?: StringFieldUpdateOperationsInput | string
    numeroExterior?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaCreateInput = {
    nombre: string
    descripcion?: string | null
    productos?: ProductoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    productos?: ProductoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: ProductoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    productos?: ProductoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductoCreateInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    imagenes?: ImagenProductoCreateNestedManyWithoutProductoInput
    detallesCarrito?: DetalleCarritoCreateNestedManyWithoutProductoInput
    detallesPedido?: DetallePedidoCreateNestedManyWithoutProductoInput
    detallesFactura?: DetalleFacturaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateInput = {
    id?: number
    categoriaId: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
    imagenes?: ImagenProductoUncheckedCreateNestedManyWithoutProductoInput
    detallesCarrito?: DetalleCarritoUncheckedCreateNestedManyWithoutProductoInput
    detallesPedido?: DetallePedidoUncheckedCreateNestedManyWithoutProductoInput
    detallesFactura?: DetalleFacturaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    imagenes?: ImagenProductoUpdateManyWithoutProductoNestedInput
    detallesCarrito?: DetalleCarritoUpdateManyWithoutProductoNestedInput
    detallesPedido?: DetallePedidoUpdateManyWithoutProductoNestedInput
    detallesFactura?: DetalleFacturaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    imagenes?: ImagenProductoUncheckedUpdateManyWithoutProductoNestedInput
    detallesCarrito?: DetalleCarritoUncheckedUpdateManyWithoutProductoNestedInput
    detallesPedido?: DetallePedidoUncheckedUpdateManyWithoutProductoNestedInput
    detallesFactura?: DetalleFacturaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id?: number
    categoriaId: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
  }

  export type ProductoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ImagenProductoCreateInput = {
    urlImagen: string
    producto: ProductoCreateNestedOneWithoutImagenesInput
  }

  export type ImagenProductoUncheckedCreateInput = {
    id?: number
    productoId: number
    urlImagen: string
  }

  export type ImagenProductoUpdateInput = {
    urlImagen?: StringFieldUpdateOperationsInput | string
    producto?: ProductoUpdateOneRequiredWithoutImagenesNestedInput
  }

  export type ImagenProductoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    urlImagen?: StringFieldUpdateOperationsInput | string
  }

  export type ImagenProductoCreateManyInput = {
    id?: number
    productoId: number
    urlImagen: string
  }

  export type ImagenProductoUpdateManyMutationInput = {
    urlImagen?: StringFieldUpdateOperationsInput | string
  }

  export type ImagenProductoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    urlImagen?: StringFieldUpdateOperationsInput | string
  }

  export type CarritoCreateInput = {
    fechaCreacion?: Date | string
    estado?: string
    usuario: UsuarioCreateNestedOneWithoutCarritoInput
    detalles?: DetalleCarritoCreateNestedManyWithoutCarritoInput
  }

  export type CarritoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    fechaCreacion?: Date | string
    estado?: string
    detalles?: DetalleCarritoUncheckedCreateNestedManyWithoutCarritoInput
  }

  export type CarritoUpdateInput = {
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutCarritoNestedInput
    detalles?: DetalleCarritoUpdateManyWithoutCarritoNestedInput
  }

  export type CarritoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: DetalleCarritoUncheckedUpdateManyWithoutCarritoNestedInput
  }

  export type CarritoCreateManyInput = {
    id?: number
    usuarioId: number
    fechaCreacion?: Date | string
    estado?: string
  }

  export type CarritoUpdateManyMutationInput = {
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type CarritoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type DetalleCarritoCreateInput = {
    cantidad: number
    carrito: CarritoCreateNestedOneWithoutDetallesInput
    producto: ProductoCreateNestedOneWithoutDetallesCarritoInput
  }

  export type DetalleCarritoUncheckedCreateInput = {
    id?: number
    carritoId: number
    productoId: number
    cantidad: number
  }

  export type DetalleCarritoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    carrito?: CarritoUpdateOneRequiredWithoutDetallesNestedInput
    producto?: ProductoUpdateOneRequiredWithoutDetallesCarritoNestedInput
  }

  export type DetalleCarritoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carritoId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleCarritoCreateManyInput = {
    id?: number
    carritoId: number
    productoId: number
    cantidad: number
  }

  export type DetalleCarritoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleCarritoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carritoId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateInput = {
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    direccion: DireccionCreateNestedOneWithoutPedidosInput
    detalles?: DetallePedidoCreateNestedManyWithoutPedidoInput
    factura?: FacturaCreateNestedOneWithoutPedidoInput
    pago?: PagoCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    direccionId: number
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
    detalles?: DetallePedidoUncheckedCreateNestedManyWithoutPedidoInput
    factura?: FacturaUncheckedCreateNestedOneWithoutPedidoInput
    pago?: PagoUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    direccion?: DireccionUpdateOneRequiredWithoutPedidosNestedInput
    detalles?: DetallePedidoUpdateManyWithoutPedidoNestedInput
    factura?: FacturaUpdateOneWithoutPedidoNestedInput
    pago?: PagoUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalles?: DetallePedidoUncheckedUpdateManyWithoutPedidoNestedInput
    factura?: FacturaUncheckedUpdateOneWithoutPedidoNestedInput
    pago?: PagoUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    usuarioId: number
    direccionId: number
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
  }

  export type PedidoUpdateManyMutationInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetallePedidoCreateInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    pedido: PedidoCreateNestedOneWithoutDetallesInput
    producto: ProductoCreateNestedOneWithoutDetallesPedidoInput
  }

  export type DetallePedidoUncheckedCreateInput = {
    id?: number
    pedidoId: number
    productoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type DetallePedidoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: PedidoUpdateOneRequiredWithoutDetallesNestedInput
    producto?: ProductoUpdateOneRequiredWithoutDetallesPedidoNestedInput
  }

  export type DetallePedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetallePedidoCreateManyInput = {
    id?: number
    pedidoId: number
    productoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type DetallePedidoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetallePedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type FacturaCreateInput = {
    fechaEmision?: Date | string
    totalPagar: Decimal | DecimalJsLike | number | string
    pedido: PedidoCreateNestedOneWithoutFacturaInput
    detalles?: DetalleFacturaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateInput = {
    id?: number
    pedidoId: number
    fechaEmision?: Date | string
    totalPagar: Decimal | DecimalJsLike | number | string
    detalles?: DetalleFacturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUpdateInput = {
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: PedidoUpdateOneRequiredWithoutFacturaNestedInput
    detalles?: DetalleFacturaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalles?: DetalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaCreateManyInput = {
    id?: number
    pedidoId: number
    fechaEmision?: Date | string
    totalPagar: Decimal | DecimalJsLike | number | string
  }

  export type FacturaUpdateManyMutationInput = {
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type FacturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaCreateInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    impuesto: Decimal | DecimalJsLike | number | string
    subTotal: Decimal | DecimalJsLike | number | string
    factura: FacturaCreateNestedOneWithoutDetallesInput
    producto: ProductoCreateNestedOneWithoutDetallesFacturaInput
  }

  export type DetalleFacturaUncheckedCreateInput = {
    id?: number
    facturaId: number
    productoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    impuesto: Decimal | DecimalJsLike | number | string
    subTotal: Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    factura?: FacturaUpdateOneRequiredWithoutDetallesNestedInput
    producto?: ProductoUpdateOneRequiredWithoutDetallesFacturaNestedInput
  }

  export type DetalleFacturaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaCreateManyInput = {
    id?: number
    facturaId: number
    productoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    impuesto: Decimal | DecimalJsLike | number | string
    subTotal: Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PagoCreateInput = {
    fechaPago?: Date | string
    montoPago: Decimal | DecimalJsLike | number | string
    estado: string
    pedido: PedidoCreateNestedOneWithoutPagoInput
  }

  export type PagoUncheckedCreateInput = {
    id?: number
    pedidoId: number
    fechaPago?: Date | string
    montoPago: Decimal | DecimalJsLike | number | string
    estado: string
  }

  export type PagoUpdateInput = {
    fechaPago?: DateTimeFieldUpdateOperationsInput | Date | string
    montoPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
    pedido?: PedidoUpdateOneRequiredWithoutPagoNestedInput
  }

  export type PagoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    fechaPago?: DateTimeFieldUpdateOperationsInput | Date | string
    montoPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type PagoCreateManyInput = {
    id?: number
    pedidoId: number
    fechaPago?: Date | string
    montoPago: Decimal | DecimalJsLike | number | string
    estado: string
  }

  export type PagoUpdateManyMutationInput = {
    fechaPago?: DateTimeFieldUpdateOperationsInput | Date | string
    montoPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type PagoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    fechaPago?: DateTimeFieldUpdateOperationsInput | Date | string
    montoPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolOrderByRelevanceInput = {
    fields: RolOrderByRelevanceFieldEnum | RolOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RolCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolSumOrderByAggregateInput = {
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
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

  export type RolScalarRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type DireccionListRelationFilter = {
    every?: DireccionWhereInput
    some?: DireccionWhereInput
    none?: DireccionWhereInput
  }

  export type CarritoNullableScalarRelationFilter = {
    is?: CarritoWhereInput | null
    isNot?: CarritoWhereInput | null
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DireccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    primerNombre?: SortOrder
    segundoNombre?: SortOrder
    primerApellido?: SortOrder
    segundoApellido?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    primerNombre?: SortOrder
    segundoNombre?: SortOrder
    primerApellido?: SortOrder
    segundoApellido?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
    primerNombre?: SortOrder
    segundoNombre?: SortOrder
    primerApellido?: SortOrder
    segundoApellido?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    telefono?: SortOrder
    fechaRegistro?: SortOrder
    estado?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
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
    search?: string
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

  export type CiudadListRelationFilter = {
    every?: CiudadWhereInput
    some?: CiudadWhereInput
    none?: CiudadWhereInput
  }

  export type CiudadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartamentoOrderByRelevanceInput = {
    fields: DepartamentoOrderByRelevanceFieldEnum | DepartamentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DepartamentoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DepartamentoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DepartamentoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type DepartamentoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartamentoScalarRelationFilter = {
    is?: DepartamentoWhereInput
    isNot?: DepartamentoWhereInput
  }

  export type CiudadOrderByRelevanceInput = {
    fields: CiudadOrderByRelevanceFieldEnum | CiudadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CiudadCountOrderByAggregateInput = {
    id?: SortOrder
    departamentoId?: SortOrder
    nombre?: SortOrder
  }

  export type CiudadAvgOrderByAggregateInput = {
    id?: SortOrder
    departamentoId?: SortOrder
  }

  export type CiudadMaxOrderByAggregateInput = {
    id?: SortOrder
    departamentoId?: SortOrder
    nombre?: SortOrder
  }

  export type CiudadMinOrderByAggregateInput = {
    id?: SortOrder
    departamentoId?: SortOrder
    nombre?: SortOrder
  }

  export type CiudadSumOrderByAggregateInput = {
    id?: SortOrder
    departamentoId?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type CiudadScalarRelationFilter = {
    is?: CiudadWhereInput
    isNot?: CiudadWhereInput
  }

  export type DireccionOrderByRelevanceInput = {
    fields: DireccionOrderByRelevanceFieldEnum | DireccionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DireccionCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ciudadId?: SortOrder
    callePrincipal?: SortOrder
    numeroExterior?: SortOrder
    barrio?: SortOrder
    referencia?: SortOrder
    codigoPostal?: SortOrder
  }

  export type DireccionAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ciudadId?: SortOrder
  }

  export type DireccionMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ciudadId?: SortOrder
    callePrincipal?: SortOrder
    numeroExterior?: SortOrder
    barrio?: SortOrder
    referencia?: SortOrder
    codigoPostal?: SortOrder
  }

  export type DireccionMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ciudadId?: SortOrder
    callePrincipal?: SortOrder
    numeroExterior?: SortOrder
    barrio?: SortOrder
    referencia?: SortOrder
    codigoPostal?: SortOrder
  }

  export type DireccionSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    ciudadId?: SortOrder
  }

  export type ProductoListRelationFilter = {
    every?: ProductoWhereInput
    some?: ProductoWhereInput
    none?: ProductoWhereInput
  }

  export type ProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelevanceInput = {
    fields: CategoriaOrderByRelevanceFieldEnum | CategoriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type ImagenProductoListRelationFilter = {
    every?: ImagenProductoWhereInput
    some?: ImagenProductoWhereInput
    none?: ImagenProductoWhereInput
  }

  export type DetalleCarritoListRelationFilter = {
    every?: DetalleCarritoWhereInput
    some?: DetalleCarritoWhereInput
    none?: DetalleCarritoWhereInput
  }

  export type DetallePedidoListRelationFilter = {
    every?: DetallePedidoWhereInput
    some?: DetallePedidoWhereInput
    none?: DetallePedidoWhereInput
  }

  export type DetalleFacturaListRelationFilter = {
    every?: DetalleFacturaWhereInput
    some?: DetalleFacturaWhereInput
    none?: DetalleFacturaWhereInput
  }

  export type ImagenProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetalleCarritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetallePedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetalleFacturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductoOrderByRelevanceInput = {
    fields: ProductoOrderByRelevanceFieldEnum | ProductoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductoCountOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    estado?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    estado?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
    estado?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id?: SortOrder
    categoriaId?: SortOrder
    precio?: SortOrder
    stock?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type ImagenProductoOrderByRelevanceInput = {
    fields: ImagenProductoOrderByRelevanceFieldEnum | ImagenProductoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImagenProductoCountOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    urlImagen?: SortOrder
  }

  export type ImagenProductoAvgOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
  }

  export type ImagenProductoMaxOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    urlImagen?: SortOrder
  }

  export type ImagenProductoMinOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    urlImagen?: SortOrder
  }

  export type ImagenProductoSumOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
  }

  export type CarritoOrderByRelevanceInput = {
    fields: CarritoOrderByRelevanceFieldEnum | CarritoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CarritoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fechaCreacion?: SortOrder
    estado?: SortOrder
  }

  export type CarritoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type CarritoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fechaCreacion?: SortOrder
    estado?: SortOrder
  }

  export type CarritoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    fechaCreacion?: SortOrder
    estado?: SortOrder
  }

  export type CarritoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type CarritoScalarRelationFilter = {
    is?: CarritoWhereInput
    isNot?: CarritoWhereInput
  }

  export type DetalleCarritoCountOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type DetalleCarritoAvgOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type DetalleCarritoMaxOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type DetalleCarritoMinOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type DetalleCarritoSumOrderByAggregateInput = {
    id?: SortOrder
    carritoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
  }

  export type DireccionScalarRelationFilter = {
    is?: DireccionWhereInput
    isNot?: DireccionWhereInput
  }

  export type FacturaNullableScalarRelationFilter = {
    is?: FacturaWhereInput | null
    isNot?: FacturaWhereInput | null
  }

  export type PagoNullableScalarRelationFilter = {
    is?: PagoWhereInput | null
    isNot?: PagoWhereInput | null
  }

  export type PedidoOrderByRelevanceInput = {
    fields: PedidoOrderByRelevanceFieldEnum | PedidoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
    fechaPedido?: SortOrder
    estado?: SortOrder
    total?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
    total?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
    fechaPedido?: SortOrder
    estado?: SortOrder
    total?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
    fechaPedido?: SortOrder
    estado?: SortOrder
    total?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    direccionId?: SortOrder
    total?: SortOrder
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type DetallePedidoCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type DetallePedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type DetallePedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type DetallePedidoMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type DetallePedidoSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
  }

  export type FacturaCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    fechaEmision?: SortOrder
    totalPagar?: SortOrder
  }

  export type FacturaAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    totalPagar?: SortOrder
  }

  export type FacturaMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    fechaEmision?: SortOrder
    totalPagar?: SortOrder
  }

  export type FacturaMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    fechaEmision?: SortOrder
    totalPagar?: SortOrder
  }

  export type FacturaSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    totalPagar?: SortOrder
  }

  export type FacturaScalarRelationFilter = {
    is?: FacturaWhereInput
    isNot?: FacturaWhereInput
  }

  export type DetalleFacturaCountOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    impuesto?: SortOrder
    subTotal?: SortOrder
  }

  export type DetalleFacturaAvgOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    impuesto?: SortOrder
    subTotal?: SortOrder
  }

  export type DetalleFacturaMaxOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    impuesto?: SortOrder
    subTotal?: SortOrder
  }

  export type DetalleFacturaMinOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    impuesto?: SortOrder
    subTotal?: SortOrder
  }

  export type DetalleFacturaSumOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precioUnitario?: SortOrder
    impuesto?: SortOrder
    subTotal?: SortOrder
  }

  export type PagoOrderByRelevanceInput = {
    fields: PagoOrderByRelevanceFieldEnum | PagoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PagoCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    fechaPago?: SortOrder
    montoPago?: SortOrder
    estado?: SortOrder
  }

  export type PagoAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    montoPago?: SortOrder
  }

  export type PagoMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    fechaPago?: SortOrder
    montoPago?: SortOrder
    estado?: SortOrder
  }

  export type PagoMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    fechaPago?: SortOrder
    montoPago?: SortOrder
    estado?: SortOrder
  }

  export type PagoSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    montoPago?: SortOrder
  }

  export type UsuarioCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsuarioUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    connect?: RolWhereUniqueInput
  }

  export type DireccionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DireccionCreateWithoutUsuarioInput, DireccionUncheckedCreateWithoutUsuarioInput> | DireccionCreateWithoutUsuarioInput[] | DireccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutUsuarioInput | DireccionCreateOrConnectWithoutUsuarioInput[]
    createMany?: DireccionCreateManyUsuarioInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type CarritoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuarioInput
    connect?: CarritoWhereUniqueInput
  }

  export type PedidoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type DireccionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DireccionCreateWithoutUsuarioInput, DireccionUncheckedCreateWithoutUsuarioInput> | DireccionCreateWithoutUsuarioInput[] | DireccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutUsuarioInput | DireccionCreateOrConnectWithoutUsuarioInput[]
    createMany?: DireccionCreateManyUsuarioInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type CarritoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuarioInput
    connect?: CarritoWhereUniqueInput
  }

  export type PedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    upsert?: RolUpsertWithoutUsuariosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuariosInput, RolUpdateWithoutUsuariosInput>, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type DireccionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DireccionCreateWithoutUsuarioInput, DireccionUncheckedCreateWithoutUsuarioInput> | DireccionCreateWithoutUsuarioInput[] | DireccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutUsuarioInput | DireccionCreateOrConnectWithoutUsuarioInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutUsuarioInput | DireccionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DireccionCreateManyUsuarioInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutUsuarioInput | DireccionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutUsuarioInput | DireccionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type CarritoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuarioInput
    upsert?: CarritoUpsertWithoutUsuarioInput
    disconnect?: CarritoWhereInput | boolean
    delete?: CarritoWhereInput | boolean
    connect?: CarritoWhereUniqueInput
    update?: XOR<XOR<CarritoUpdateToOneWithWhereWithoutUsuarioInput, CarritoUpdateWithoutUsuarioInput>, CarritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type DireccionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DireccionCreateWithoutUsuarioInput, DireccionUncheckedCreateWithoutUsuarioInput> | DireccionCreateWithoutUsuarioInput[] | DireccionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutUsuarioInput | DireccionCreateOrConnectWithoutUsuarioInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutUsuarioInput | DireccionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DireccionCreateManyUsuarioInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutUsuarioInput | DireccionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutUsuarioInput | DireccionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type CarritoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutUsuarioInput
    upsert?: CarritoUpsertWithoutUsuarioInput
    disconnect?: CarritoWhereInput | boolean
    delete?: CarritoWhereInput | boolean
    connect?: CarritoWhereUniqueInput
    update?: XOR<XOR<CarritoUpdateToOneWithWhereWithoutUsuarioInput, CarritoUpdateWithoutUsuarioInput>, CarritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput> | PedidoCreateWithoutUsuarioInput[] | PedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutUsuarioInput | PedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutUsuarioInput | PedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PedidoCreateManyUsuarioInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutUsuarioInput | PedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutUsuarioInput | PedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type CiudadCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<CiudadCreateWithoutDepartamentoInput, CiudadUncheckedCreateWithoutDepartamentoInput> | CiudadCreateWithoutDepartamentoInput[] | CiudadUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: CiudadCreateOrConnectWithoutDepartamentoInput | CiudadCreateOrConnectWithoutDepartamentoInput[]
    createMany?: CiudadCreateManyDepartamentoInputEnvelope
    connect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
  }

  export type CiudadUncheckedCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<CiudadCreateWithoutDepartamentoInput, CiudadUncheckedCreateWithoutDepartamentoInput> | CiudadCreateWithoutDepartamentoInput[] | CiudadUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: CiudadCreateOrConnectWithoutDepartamentoInput | CiudadCreateOrConnectWithoutDepartamentoInput[]
    createMany?: CiudadCreateManyDepartamentoInputEnvelope
    connect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
  }

  export type CiudadUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<CiudadCreateWithoutDepartamentoInput, CiudadUncheckedCreateWithoutDepartamentoInput> | CiudadCreateWithoutDepartamentoInput[] | CiudadUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: CiudadCreateOrConnectWithoutDepartamentoInput | CiudadCreateOrConnectWithoutDepartamentoInput[]
    upsert?: CiudadUpsertWithWhereUniqueWithoutDepartamentoInput | CiudadUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: CiudadCreateManyDepartamentoInputEnvelope
    set?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    disconnect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    delete?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    connect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    update?: CiudadUpdateWithWhereUniqueWithoutDepartamentoInput | CiudadUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: CiudadUpdateManyWithWhereWithoutDepartamentoInput | CiudadUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: CiudadScalarWhereInput | CiudadScalarWhereInput[]
  }

  export type CiudadUncheckedUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<CiudadCreateWithoutDepartamentoInput, CiudadUncheckedCreateWithoutDepartamentoInput> | CiudadCreateWithoutDepartamentoInput[] | CiudadUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: CiudadCreateOrConnectWithoutDepartamentoInput | CiudadCreateOrConnectWithoutDepartamentoInput[]
    upsert?: CiudadUpsertWithWhereUniqueWithoutDepartamentoInput | CiudadUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: CiudadCreateManyDepartamentoInputEnvelope
    set?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    disconnect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    delete?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    connect?: CiudadWhereUniqueInput | CiudadWhereUniqueInput[]
    update?: CiudadUpdateWithWhereUniqueWithoutDepartamentoInput | CiudadUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: CiudadUpdateManyWithWhereWithoutDepartamentoInput | CiudadUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: CiudadScalarWhereInput | CiudadScalarWhereInput[]
  }

  export type DepartamentoCreateNestedOneWithoutCiudadesInput = {
    create?: XOR<DepartamentoCreateWithoutCiudadesInput, DepartamentoUncheckedCreateWithoutCiudadesInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutCiudadesInput
    connect?: DepartamentoWhereUniqueInput
  }

  export type DireccionCreateNestedManyWithoutCiudadInput = {
    create?: XOR<DireccionCreateWithoutCiudadInput, DireccionUncheckedCreateWithoutCiudadInput> | DireccionCreateWithoutCiudadInput[] | DireccionUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutCiudadInput | DireccionCreateOrConnectWithoutCiudadInput[]
    createMany?: DireccionCreateManyCiudadInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type DireccionUncheckedCreateNestedManyWithoutCiudadInput = {
    create?: XOR<DireccionCreateWithoutCiudadInput, DireccionUncheckedCreateWithoutCiudadInput> | DireccionCreateWithoutCiudadInput[] | DireccionUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutCiudadInput | DireccionCreateOrConnectWithoutCiudadInput[]
    createMany?: DireccionCreateManyCiudadInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type DepartamentoUpdateOneRequiredWithoutCiudadesNestedInput = {
    create?: XOR<DepartamentoCreateWithoutCiudadesInput, DepartamentoUncheckedCreateWithoutCiudadesInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutCiudadesInput
    upsert?: DepartamentoUpsertWithoutCiudadesInput
    connect?: DepartamentoWhereUniqueInput
    update?: XOR<XOR<DepartamentoUpdateToOneWithWhereWithoutCiudadesInput, DepartamentoUpdateWithoutCiudadesInput>, DepartamentoUncheckedUpdateWithoutCiudadesInput>
  }

  export type DireccionUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<DireccionCreateWithoutCiudadInput, DireccionUncheckedCreateWithoutCiudadInput> | DireccionCreateWithoutCiudadInput[] | DireccionUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutCiudadInput | DireccionCreateOrConnectWithoutCiudadInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutCiudadInput | DireccionUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: DireccionCreateManyCiudadInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutCiudadInput | DireccionUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutCiudadInput | DireccionUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type DireccionUncheckedUpdateManyWithoutCiudadNestedInput = {
    create?: XOR<DireccionCreateWithoutCiudadInput, DireccionUncheckedCreateWithoutCiudadInput> | DireccionCreateWithoutCiudadInput[] | DireccionUncheckedCreateWithoutCiudadInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutCiudadInput | DireccionCreateOrConnectWithoutCiudadInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutCiudadInput | DireccionUpsertWithWhereUniqueWithoutCiudadInput[]
    createMany?: DireccionCreateManyCiudadInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutCiudadInput | DireccionUpdateWithWhereUniqueWithoutCiudadInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutCiudadInput | DireccionUpdateManyWithWhereWithoutCiudadInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutDireccionesInput = {
    create?: XOR<UsuarioCreateWithoutDireccionesInput, UsuarioUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDireccionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CiudadCreateNestedOneWithoutDireccionesInput = {
    create?: XOR<CiudadCreateWithoutDireccionesInput, CiudadUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: CiudadCreateOrConnectWithoutDireccionesInput
    connect?: CiudadWhereUniqueInput
  }

  export type PedidoCreateNestedManyWithoutDireccionInput = {
    create?: XOR<PedidoCreateWithoutDireccionInput, PedidoUncheckedCreateWithoutDireccionInput> | PedidoCreateWithoutDireccionInput[] | PedidoUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutDireccionInput | PedidoCreateOrConnectWithoutDireccionInput[]
    createMany?: PedidoCreateManyDireccionInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutDireccionInput = {
    create?: XOR<PedidoCreateWithoutDireccionInput, PedidoUncheckedCreateWithoutDireccionInput> | PedidoCreateWithoutDireccionInput[] | PedidoUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutDireccionInput | PedidoCreateOrConnectWithoutDireccionInput[]
    createMany?: PedidoCreateManyDireccionInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutDireccionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutDireccionesInput, UsuarioUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDireccionesInput
    upsert?: UsuarioUpsertWithoutDireccionesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDireccionesInput, UsuarioUpdateWithoutDireccionesInput>, UsuarioUncheckedUpdateWithoutDireccionesInput>
  }

  export type CiudadUpdateOneRequiredWithoutDireccionesNestedInput = {
    create?: XOR<CiudadCreateWithoutDireccionesInput, CiudadUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: CiudadCreateOrConnectWithoutDireccionesInput
    upsert?: CiudadUpsertWithoutDireccionesInput
    connect?: CiudadWhereUniqueInput
    update?: XOR<XOR<CiudadUpdateToOneWithWhereWithoutDireccionesInput, CiudadUpdateWithoutDireccionesInput>, CiudadUncheckedUpdateWithoutDireccionesInput>
  }

  export type PedidoUpdateManyWithoutDireccionNestedInput = {
    create?: XOR<PedidoCreateWithoutDireccionInput, PedidoUncheckedCreateWithoutDireccionInput> | PedidoCreateWithoutDireccionInput[] | PedidoUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutDireccionInput | PedidoCreateOrConnectWithoutDireccionInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutDireccionInput | PedidoUpsertWithWhereUniqueWithoutDireccionInput[]
    createMany?: PedidoCreateManyDireccionInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutDireccionInput | PedidoUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutDireccionInput | PedidoUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutDireccionNestedInput = {
    create?: XOR<PedidoCreateWithoutDireccionInput, PedidoUncheckedCreateWithoutDireccionInput> | PedidoCreateWithoutDireccionInput[] | PedidoUncheckedCreateWithoutDireccionInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutDireccionInput | PedidoCreateOrConnectWithoutDireccionInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutDireccionInput | PedidoUpsertWithWhereUniqueWithoutDireccionInput[]
    createMany?: PedidoCreateManyDireccionInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutDireccionInput | PedidoUpdateWithWhereUniqueWithoutDireccionInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutDireccionInput | PedidoUpdateManyWithWhereWithoutDireccionInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ProductoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput> | ProductoCreateWithoutCategoriaInput[] | ProductoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutCategoriaInput | ProductoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutCategoriaInput | ProductoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProductoCreateManyCategoriaInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutCategoriaInput | ProductoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutCategoriaInput | ProductoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutProductosInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type ImagenProductoCreateNestedManyWithoutProductoInput = {
    create?: XOR<ImagenProductoCreateWithoutProductoInput, ImagenProductoUncheckedCreateWithoutProductoInput> | ImagenProductoCreateWithoutProductoInput[] | ImagenProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ImagenProductoCreateOrConnectWithoutProductoInput | ImagenProductoCreateOrConnectWithoutProductoInput[]
    createMany?: ImagenProductoCreateManyProductoInputEnvelope
    connect?: ImagenProductoWhereUniqueInput | ImagenProductoWhereUniqueInput[]
  }

  export type DetalleCarritoCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleCarritoCreateWithoutProductoInput, DetalleCarritoUncheckedCreateWithoutProductoInput> | DetalleCarritoCreateWithoutProductoInput[] | DetalleCarritoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleCarritoCreateOrConnectWithoutProductoInput | DetalleCarritoCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleCarritoCreateManyProductoInputEnvelope
    connect?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
  }

  export type DetallePedidoCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetallePedidoCreateWithoutProductoInput, DetallePedidoUncheckedCreateWithoutProductoInput> | DetallePedidoCreateWithoutProductoInput[] | DetallePedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetallePedidoCreateOrConnectWithoutProductoInput | DetallePedidoCreateOrConnectWithoutProductoInput[]
    createMany?: DetallePedidoCreateManyProductoInputEnvelope
    connect?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
  }

  export type DetalleFacturaCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleFacturaCreateWithoutProductoInput, DetalleFacturaUncheckedCreateWithoutProductoInput> | DetalleFacturaCreateWithoutProductoInput[] | DetalleFacturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutProductoInput | DetalleFacturaCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleFacturaCreateManyProductoInputEnvelope
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
  }

  export type ImagenProductoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<ImagenProductoCreateWithoutProductoInput, ImagenProductoUncheckedCreateWithoutProductoInput> | ImagenProductoCreateWithoutProductoInput[] | ImagenProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ImagenProductoCreateOrConnectWithoutProductoInput | ImagenProductoCreateOrConnectWithoutProductoInput[]
    createMany?: ImagenProductoCreateManyProductoInputEnvelope
    connect?: ImagenProductoWhereUniqueInput | ImagenProductoWhereUniqueInput[]
  }

  export type DetalleCarritoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleCarritoCreateWithoutProductoInput, DetalleCarritoUncheckedCreateWithoutProductoInput> | DetalleCarritoCreateWithoutProductoInput[] | DetalleCarritoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleCarritoCreateOrConnectWithoutProductoInput | DetalleCarritoCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleCarritoCreateManyProductoInputEnvelope
    connect?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
  }

  export type DetallePedidoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetallePedidoCreateWithoutProductoInput, DetallePedidoUncheckedCreateWithoutProductoInput> | DetallePedidoCreateWithoutProductoInput[] | DetallePedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetallePedidoCreateOrConnectWithoutProductoInput | DetallePedidoCreateOrConnectWithoutProductoInput[]
    createMany?: DetallePedidoCreateManyProductoInputEnvelope
    connect?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
  }

  export type DetalleFacturaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<DetalleFacturaCreateWithoutProductoInput, DetalleFacturaUncheckedCreateWithoutProductoInput> | DetalleFacturaCreateWithoutProductoInput[] | DetalleFacturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutProductoInput | DetalleFacturaCreateOrConnectWithoutProductoInput[]
    createMany?: DetalleFacturaCreateManyProductoInputEnvelope
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CategoriaUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProductosInput
    upsert?: CategoriaUpsertWithoutProductosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProductosInput, CategoriaUpdateWithoutProductosInput>, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type ImagenProductoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ImagenProductoCreateWithoutProductoInput, ImagenProductoUncheckedCreateWithoutProductoInput> | ImagenProductoCreateWithoutProductoInput[] | ImagenProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ImagenProductoCreateOrConnectWithoutProductoInput | ImagenProductoCreateOrConnectWithoutProductoInput[]
    upsert?: ImagenProductoUpsertWithWhereUniqueWithoutProductoInput | ImagenProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ImagenProductoCreateManyProductoInputEnvelope
    set?: ImagenProductoWhereUniqueInput | ImagenProductoWhereUniqueInput[]
    disconnect?: ImagenProductoWhereUniqueInput | ImagenProductoWhereUniqueInput[]
    delete?: ImagenProductoWhereUniqueInput | ImagenProductoWhereUniqueInput[]
    connect?: ImagenProductoWhereUniqueInput | ImagenProductoWhereUniqueInput[]
    update?: ImagenProductoUpdateWithWhereUniqueWithoutProductoInput | ImagenProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ImagenProductoUpdateManyWithWhereWithoutProductoInput | ImagenProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ImagenProductoScalarWhereInput | ImagenProductoScalarWhereInput[]
  }

  export type DetalleCarritoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleCarritoCreateWithoutProductoInput, DetalleCarritoUncheckedCreateWithoutProductoInput> | DetalleCarritoCreateWithoutProductoInput[] | DetalleCarritoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleCarritoCreateOrConnectWithoutProductoInput | DetalleCarritoCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleCarritoUpsertWithWhereUniqueWithoutProductoInput | DetalleCarritoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleCarritoCreateManyProductoInputEnvelope
    set?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    disconnect?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    delete?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    connect?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    update?: DetalleCarritoUpdateWithWhereUniqueWithoutProductoInput | DetalleCarritoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleCarritoUpdateManyWithWhereWithoutProductoInput | DetalleCarritoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleCarritoScalarWhereInput | DetalleCarritoScalarWhereInput[]
  }

  export type DetallePedidoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetallePedidoCreateWithoutProductoInput, DetallePedidoUncheckedCreateWithoutProductoInput> | DetallePedidoCreateWithoutProductoInput[] | DetallePedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetallePedidoCreateOrConnectWithoutProductoInput | DetallePedidoCreateOrConnectWithoutProductoInput[]
    upsert?: DetallePedidoUpsertWithWhereUniqueWithoutProductoInput | DetallePedidoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetallePedidoCreateManyProductoInputEnvelope
    set?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    disconnect?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    delete?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    connect?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    update?: DetallePedidoUpdateWithWhereUniqueWithoutProductoInput | DetallePedidoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetallePedidoUpdateManyWithWhereWithoutProductoInput | DetallePedidoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetallePedidoScalarWhereInput | DetallePedidoScalarWhereInput[]
  }

  export type DetalleFacturaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleFacturaCreateWithoutProductoInput, DetalleFacturaUncheckedCreateWithoutProductoInput> | DetalleFacturaCreateWithoutProductoInput[] | DetalleFacturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutProductoInput | DetalleFacturaCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleFacturaUpsertWithWhereUniqueWithoutProductoInput | DetalleFacturaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleFacturaCreateManyProductoInputEnvelope
    set?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    disconnect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    delete?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    update?: DetalleFacturaUpdateWithWhereUniqueWithoutProductoInput | DetalleFacturaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleFacturaUpdateManyWithWhereWithoutProductoInput | DetalleFacturaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
  }

  export type ImagenProductoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<ImagenProductoCreateWithoutProductoInput, ImagenProductoUncheckedCreateWithoutProductoInput> | ImagenProductoCreateWithoutProductoInput[] | ImagenProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: ImagenProductoCreateOrConnectWithoutProductoInput | ImagenProductoCreateOrConnectWithoutProductoInput[]
    upsert?: ImagenProductoUpsertWithWhereUniqueWithoutProductoInput | ImagenProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: ImagenProductoCreateManyProductoInputEnvelope
    set?: ImagenProductoWhereUniqueInput | ImagenProductoWhereUniqueInput[]
    disconnect?: ImagenProductoWhereUniqueInput | ImagenProductoWhereUniqueInput[]
    delete?: ImagenProductoWhereUniqueInput | ImagenProductoWhereUniqueInput[]
    connect?: ImagenProductoWhereUniqueInput | ImagenProductoWhereUniqueInput[]
    update?: ImagenProductoUpdateWithWhereUniqueWithoutProductoInput | ImagenProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: ImagenProductoUpdateManyWithWhereWithoutProductoInput | ImagenProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: ImagenProductoScalarWhereInput | ImagenProductoScalarWhereInput[]
  }

  export type DetalleCarritoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleCarritoCreateWithoutProductoInput, DetalleCarritoUncheckedCreateWithoutProductoInput> | DetalleCarritoCreateWithoutProductoInput[] | DetalleCarritoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleCarritoCreateOrConnectWithoutProductoInput | DetalleCarritoCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleCarritoUpsertWithWhereUniqueWithoutProductoInput | DetalleCarritoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleCarritoCreateManyProductoInputEnvelope
    set?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    disconnect?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    delete?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    connect?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    update?: DetalleCarritoUpdateWithWhereUniqueWithoutProductoInput | DetalleCarritoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleCarritoUpdateManyWithWhereWithoutProductoInput | DetalleCarritoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleCarritoScalarWhereInput | DetalleCarritoScalarWhereInput[]
  }

  export type DetallePedidoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetallePedidoCreateWithoutProductoInput, DetallePedidoUncheckedCreateWithoutProductoInput> | DetallePedidoCreateWithoutProductoInput[] | DetallePedidoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetallePedidoCreateOrConnectWithoutProductoInput | DetallePedidoCreateOrConnectWithoutProductoInput[]
    upsert?: DetallePedidoUpsertWithWhereUniqueWithoutProductoInput | DetallePedidoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetallePedidoCreateManyProductoInputEnvelope
    set?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    disconnect?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    delete?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    connect?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    update?: DetallePedidoUpdateWithWhereUniqueWithoutProductoInput | DetallePedidoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetallePedidoUpdateManyWithWhereWithoutProductoInput | DetallePedidoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetallePedidoScalarWhereInput | DetallePedidoScalarWhereInput[]
  }

  export type DetalleFacturaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<DetalleFacturaCreateWithoutProductoInput, DetalleFacturaUncheckedCreateWithoutProductoInput> | DetalleFacturaCreateWithoutProductoInput[] | DetalleFacturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutProductoInput | DetalleFacturaCreateOrConnectWithoutProductoInput[]
    upsert?: DetalleFacturaUpsertWithWhereUniqueWithoutProductoInput | DetalleFacturaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: DetalleFacturaCreateManyProductoInputEnvelope
    set?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    disconnect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    delete?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    update?: DetalleFacturaUpdateWithWhereUniqueWithoutProductoInput | DetalleFacturaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: DetalleFacturaUpdateManyWithWhereWithoutProductoInput | DetalleFacturaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
  }

  export type ProductoCreateNestedOneWithoutImagenesInput = {
    create?: XOR<ProductoCreateWithoutImagenesInput, ProductoUncheckedCreateWithoutImagenesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutImagenesInput
    connect?: ProductoWhereUniqueInput
  }

  export type ProductoUpdateOneRequiredWithoutImagenesNestedInput = {
    create?: XOR<ProductoCreateWithoutImagenesInput, ProductoUncheckedCreateWithoutImagenesInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutImagenesInput
    upsert?: ProductoUpsertWithoutImagenesInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutImagenesInput, ProductoUpdateWithoutImagenesInput>, ProductoUncheckedUpdateWithoutImagenesInput>
  }

  export type UsuarioCreateNestedOneWithoutCarritoInput = {
    create?: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCarritoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DetalleCarritoCreateNestedManyWithoutCarritoInput = {
    create?: XOR<DetalleCarritoCreateWithoutCarritoInput, DetalleCarritoUncheckedCreateWithoutCarritoInput> | DetalleCarritoCreateWithoutCarritoInput[] | DetalleCarritoUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: DetalleCarritoCreateOrConnectWithoutCarritoInput | DetalleCarritoCreateOrConnectWithoutCarritoInput[]
    createMany?: DetalleCarritoCreateManyCarritoInputEnvelope
    connect?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
  }

  export type DetalleCarritoUncheckedCreateNestedManyWithoutCarritoInput = {
    create?: XOR<DetalleCarritoCreateWithoutCarritoInput, DetalleCarritoUncheckedCreateWithoutCarritoInput> | DetalleCarritoCreateWithoutCarritoInput[] | DetalleCarritoUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: DetalleCarritoCreateOrConnectWithoutCarritoInput | DetalleCarritoCreateOrConnectWithoutCarritoInput[]
    createMany?: DetalleCarritoCreateManyCarritoInputEnvelope
    connect?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutCarritoNestedInput = {
    create?: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCarritoInput
    upsert?: UsuarioUpsertWithoutCarritoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCarritoInput, UsuarioUpdateWithoutCarritoInput>, UsuarioUncheckedUpdateWithoutCarritoInput>
  }

  export type DetalleCarritoUpdateManyWithoutCarritoNestedInput = {
    create?: XOR<DetalleCarritoCreateWithoutCarritoInput, DetalleCarritoUncheckedCreateWithoutCarritoInput> | DetalleCarritoCreateWithoutCarritoInput[] | DetalleCarritoUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: DetalleCarritoCreateOrConnectWithoutCarritoInput | DetalleCarritoCreateOrConnectWithoutCarritoInput[]
    upsert?: DetalleCarritoUpsertWithWhereUniqueWithoutCarritoInput | DetalleCarritoUpsertWithWhereUniqueWithoutCarritoInput[]
    createMany?: DetalleCarritoCreateManyCarritoInputEnvelope
    set?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    disconnect?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    delete?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    connect?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    update?: DetalleCarritoUpdateWithWhereUniqueWithoutCarritoInput | DetalleCarritoUpdateWithWhereUniqueWithoutCarritoInput[]
    updateMany?: DetalleCarritoUpdateManyWithWhereWithoutCarritoInput | DetalleCarritoUpdateManyWithWhereWithoutCarritoInput[]
    deleteMany?: DetalleCarritoScalarWhereInput | DetalleCarritoScalarWhereInput[]
  }

  export type DetalleCarritoUncheckedUpdateManyWithoutCarritoNestedInput = {
    create?: XOR<DetalleCarritoCreateWithoutCarritoInput, DetalleCarritoUncheckedCreateWithoutCarritoInput> | DetalleCarritoCreateWithoutCarritoInput[] | DetalleCarritoUncheckedCreateWithoutCarritoInput[]
    connectOrCreate?: DetalleCarritoCreateOrConnectWithoutCarritoInput | DetalleCarritoCreateOrConnectWithoutCarritoInput[]
    upsert?: DetalleCarritoUpsertWithWhereUniqueWithoutCarritoInput | DetalleCarritoUpsertWithWhereUniqueWithoutCarritoInput[]
    createMany?: DetalleCarritoCreateManyCarritoInputEnvelope
    set?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    disconnect?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    delete?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    connect?: DetalleCarritoWhereUniqueInput | DetalleCarritoWhereUniqueInput[]
    update?: DetalleCarritoUpdateWithWhereUniqueWithoutCarritoInput | DetalleCarritoUpdateWithWhereUniqueWithoutCarritoInput[]
    updateMany?: DetalleCarritoUpdateManyWithWhereWithoutCarritoInput | DetalleCarritoUpdateManyWithWhereWithoutCarritoInput[]
    deleteMany?: DetalleCarritoScalarWhereInput | DetalleCarritoScalarWhereInput[]
  }

  export type CarritoCreateNestedOneWithoutDetallesInput = {
    create?: XOR<CarritoCreateWithoutDetallesInput, CarritoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutDetallesInput
    connect?: CarritoWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutDetallesCarritoInput = {
    create?: XOR<ProductoCreateWithoutDetallesCarritoInput, ProductoUncheckedCreateWithoutDetallesCarritoInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetallesCarritoInput
    connect?: ProductoWhereUniqueInput
  }

  export type CarritoUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<CarritoCreateWithoutDetallesInput, CarritoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: CarritoCreateOrConnectWithoutDetallesInput
    upsert?: CarritoUpsertWithoutDetallesInput
    connect?: CarritoWhereUniqueInput
    update?: XOR<XOR<CarritoUpdateToOneWithWhereWithoutDetallesInput, CarritoUpdateWithoutDetallesInput>, CarritoUncheckedUpdateWithoutDetallesInput>
  }

  export type ProductoUpdateOneRequiredWithoutDetallesCarritoNestedInput = {
    create?: XOR<ProductoCreateWithoutDetallesCarritoInput, ProductoUncheckedCreateWithoutDetallesCarritoInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetallesCarritoInput
    upsert?: ProductoUpsertWithoutDetallesCarritoInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutDetallesCarritoInput, ProductoUpdateWithoutDetallesCarritoInput>, ProductoUncheckedUpdateWithoutDetallesCarritoInput>
  }

  export type UsuarioCreateNestedOneWithoutPedidosInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DireccionCreateNestedOneWithoutPedidosInput = {
    create?: XOR<DireccionCreateWithoutPedidosInput, DireccionUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: DireccionCreateOrConnectWithoutPedidosInput
    connect?: DireccionWhereUniqueInput
  }

  export type DetallePedidoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<DetallePedidoCreateWithoutPedidoInput, DetallePedidoUncheckedCreateWithoutPedidoInput> | DetallePedidoCreateWithoutPedidoInput[] | DetallePedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: DetallePedidoCreateOrConnectWithoutPedidoInput | DetallePedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: DetallePedidoCreateManyPedidoInputEnvelope
    connect?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
  }

  export type FacturaCreateNestedOneWithoutPedidoInput = {
    create?: XOR<FacturaCreateWithoutPedidoInput, FacturaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutPedidoInput
    connect?: FacturaWhereUniqueInput
  }

  export type PagoCreateNestedOneWithoutPedidoInput = {
    create?: XOR<PagoCreateWithoutPedidoInput, PagoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: PagoCreateOrConnectWithoutPedidoInput
    connect?: PagoWhereUniqueInput
  }

  export type DetallePedidoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<DetallePedidoCreateWithoutPedidoInput, DetallePedidoUncheckedCreateWithoutPedidoInput> | DetallePedidoCreateWithoutPedidoInput[] | DetallePedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: DetallePedidoCreateOrConnectWithoutPedidoInput | DetallePedidoCreateOrConnectWithoutPedidoInput[]
    createMany?: DetallePedidoCreateManyPedidoInputEnvelope
    connect?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
  }

  export type FacturaUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<FacturaCreateWithoutPedidoInput, FacturaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutPedidoInput
    connect?: FacturaWhereUniqueInput
  }

  export type PagoUncheckedCreateNestedOneWithoutPedidoInput = {
    create?: XOR<PagoCreateWithoutPedidoInput, PagoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: PagoCreateOrConnectWithoutPedidoInput
    connect?: PagoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPedidosInput
    upsert?: UsuarioUpsertWithoutPedidosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPedidosInput, UsuarioUpdateWithoutPedidosInput>, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type DireccionUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<DireccionCreateWithoutPedidosInput, DireccionUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: DireccionCreateOrConnectWithoutPedidosInput
    upsert?: DireccionUpsertWithoutPedidosInput
    connect?: DireccionWhereUniqueInput
    update?: XOR<XOR<DireccionUpdateToOneWithWhereWithoutPedidosInput, DireccionUpdateWithoutPedidosInput>, DireccionUncheckedUpdateWithoutPedidosInput>
  }

  export type DetallePedidoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<DetallePedidoCreateWithoutPedidoInput, DetallePedidoUncheckedCreateWithoutPedidoInput> | DetallePedidoCreateWithoutPedidoInput[] | DetallePedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: DetallePedidoCreateOrConnectWithoutPedidoInput | DetallePedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: DetallePedidoUpsertWithWhereUniqueWithoutPedidoInput | DetallePedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: DetallePedidoCreateManyPedidoInputEnvelope
    set?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    disconnect?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    delete?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    connect?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    update?: DetallePedidoUpdateWithWhereUniqueWithoutPedidoInput | DetallePedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: DetallePedidoUpdateManyWithWhereWithoutPedidoInput | DetallePedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: DetallePedidoScalarWhereInput | DetallePedidoScalarWhereInput[]
  }

  export type FacturaUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<FacturaCreateWithoutPedidoInput, FacturaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutPedidoInput
    upsert?: FacturaUpsertWithoutPedidoInput
    disconnect?: FacturaWhereInput | boolean
    delete?: FacturaWhereInput | boolean
    connect?: FacturaWhereUniqueInput
    update?: XOR<XOR<FacturaUpdateToOneWithWhereWithoutPedidoInput, FacturaUpdateWithoutPedidoInput>, FacturaUncheckedUpdateWithoutPedidoInput>
  }

  export type PagoUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<PagoCreateWithoutPedidoInput, PagoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: PagoCreateOrConnectWithoutPedidoInput
    upsert?: PagoUpsertWithoutPedidoInput
    disconnect?: PagoWhereInput | boolean
    delete?: PagoWhereInput | boolean
    connect?: PagoWhereUniqueInput
    update?: XOR<XOR<PagoUpdateToOneWithWhereWithoutPedidoInput, PagoUpdateWithoutPedidoInput>, PagoUncheckedUpdateWithoutPedidoInput>
  }

  export type DetallePedidoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<DetallePedidoCreateWithoutPedidoInput, DetallePedidoUncheckedCreateWithoutPedidoInput> | DetallePedidoCreateWithoutPedidoInput[] | DetallePedidoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: DetallePedidoCreateOrConnectWithoutPedidoInput | DetallePedidoCreateOrConnectWithoutPedidoInput[]
    upsert?: DetallePedidoUpsertWithWhereUniqueWithoutPedidoInput | DetallePedidoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: DetallePedidoCreateManyPedidoInputEnvelope
    set?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    disconnect?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    delete?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    connect?: DetallePedidoWhereUniqueInput | DetallePedidoWhereUniqueInput[]
    update?: DetallePedidoUpdateWithWhereUniqueWithoutPedidoInput | DetallePedidoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: DetallePedidoUpdateManyWithWhereWithoutPedidoInput | DetallePedidoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: DetallePedidoScalarWhereInput | DetallePedidoScalarWhereInput[]
  }

  export type FacturaUncheckedUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<FacturaCreateWithoutPedidoInput, FacturaUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutPedidoInput
    upsert?: FacturaUpsertWithoutPedidoInput
    disconnect?: FacturaWhereInput | boolean
    delete?: FacturaWhereInput | boolean
    connect?: FacturaWhereUniqueInput
    update?: XOR<XOR<FacturaUpdateToOneWithWhereWithoutPedidoInput, FacturaUpdateWithoutPedidoInput>, FacturaUncheckedUpdateWithoutPedidoInput>
  }

  export type PagoUncheckedUpdateOneWithoutPedidoNestedInput = {
    create?: XOR<PagoCreateWithoutPedidoInput, PagoUncheckedCreateWithoutPedidoInput>
    connectOrCreate?: PagoCreateOrConnectWithoutPedidoInput
    upsert?: PagoUpsertWithoutPedidoInput
    disconnect?: PagoWhereInput | boolean
    delete?: PagoWhereInput | boolean
    connect?: PagoWhereUniqueInput
    update?: XOR<XOR<PagoUpdateToOneWithWhereWithoutPedidoInput, PagoUpdateWithoutPedidoInput>, PagoUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoCreateNestedOneWithoutDetallesInput = {
    create?: XOR<PedidoCreateWithoutDetallesInput, PedidoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutDetallesInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutDetallesPedidoInput = {
    create?: XOR<ProductoCreateWithoutDetallesPedidoInput, ProductoUncheckedCreateWithoutDetallesPedidoInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetallesPedidoInput
    connect?: ProductoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<PedidoCreateWithoutDetallesInput, PedidoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutDetallesInput
    upsert?: PedidoUpsertWithoutDetallesInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutDetallesInput, PedidoUpdateWithoutDetallesInput>, PedidoUncheckedUpdateWithoutDetallesInput>
  }

  export type ProductoUpdateOneRequiredWithoutDetallesPedidoNestedInput = {
    create?: XOR<ProductoCreateWithoutDetallesPedidoInput, ProductoUncheckedCreateWithoutDetallesPedidoInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetallesPedidoInput
    upsert?: ProductoUpsertWithoutDetallesPedidoInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutDetallesPedidoInput, ProductoUpdateWithoutDetallesPedidoInput>, ProductoUncheckedUpdateWithoutDetallesPedidoInput>
  }

  export type PedidoCreateNestedOneWithoutFacturaInput = {
    create?: XOR<PedidoCreateWithoutFacturaInput, PedidoUncheckedCreateWithoutFacturaInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutFacturaInput
    connect?: PedidoWhereUniqueInput
  }

  export type DetalleFacturaCreateNestedManyWithoutFacturaInput = {
    create?: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput> | DetalleFacturaCreateWithoutFacturaInput[] | DetalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutFacturaInput | DetalleFacturaCreateOrConnectWithoutFacturaInput[]
    createMany?: DetalleFacturaCreateManyFacturaInputEnvelope
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
  }

  export type DetalleFacturaUncheckedCreateNestedManyWithoutFacturaInput = {
    create?: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput> | DetalleFacturaCreateWithoutFacturaInput[] | DetalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutFacturaInput | DetalleFacturaCreateOrConnectWithoutFacturaInput[]
    createMany?: DetalleFacturaCreateManyFacturaInputEnvelope
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
  }

  export type PedidoUpdateOneRequiredWithoutFacturaNestedInput = {
    create?: XOR<PedidoCreateWithoutFacturaInput, PedidoUncheckedCreateWithoutFacturaInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutFacturaInput
    upsert?: PedidoUpsertWithoutFacturaInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutFacturaInput, PedidoUpdateWithoutFacturaInput>, PedidoUncheckedUpdateWithoutFacturaInput>
  }

  export type DetalleFacturaUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput> | DetalleFacturaCreateWithoutFacturaInput[] | DetalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutFacturaInput | DetalleFacturaCreateOrConnectWithoutFacturaInput[]
    upsert?: DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput | DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: DetalleFacturaCreateManyFacturaInputEnvelope
    set?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    disconnect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    delete?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    update?: DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput | DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: DetalleFacturaUpdateManyWithWhereWithoutFacturaInput | DetalleFacturaUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
  }

  export type DetalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput> | DetalleFacturaCreateWithoutFacturaInput[] | DetalleFacturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: DetalleFacturaCreateOrConnectWithoutFacturaInput | DetalleFacturaCreateOrConnectWithoutFacturaInput[]
    upsert?: DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput | DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: DetalleFacturaCreateManyFacturaInputEnvelope
    set?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    disconnect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    delete?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    connect?: DetalleFacturaWhereUniqueInput | DetalleFacturaWhereUniqueInput[]
    update?: DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput | DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: DetalleFacturaUpdateManyWithWhereWithoutFacturaInput | DetalleFacturaUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
  }

  export type FacturaCreateNestedOneWithoutDetallesInput = {
    create?: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutDetallesInput
    connect?: FacturaWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutDetallesFacturaInput = {
    create?: XOR<ProductoCreateWithoutDetallesFacturaInput, ProductoUncheckedCreateWithoutDetallesFacturaInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetallesFacturaInput
    connect?: ProductoWhereUniqueInput
  }

  export type FacturaUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutDetallesInput
    upsert?: FacturaUpsertWithoutDetallesInput
    connect?: FacturaWhereUniqueInput
    update?: XOR<XOR<FacturaUpdateToOneWithWhereWithoutDetallesInput, FacturaUpdateWithoutDetallesInput>, FacturaUncheckedUpdateWithoutDetallesInput>
  }

  export type ProductoUpdateOneRequiredWithoutDetallesFacturaNestedInput = {
    create?: XOR<ProductoCreateWithoutDetallesFacturaInput, ProductoUncheckedCreateWithoutDetallesFacturaInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutDetallesFacturaInput
    upsert?: ProductoUpsertWithoutDetallesFacturaInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutDetallesFacturaInput, ProductoUpdateWithoutDetallesFacturaInput>, ProductoUncheckedUpdateWithoutDetallesFacturaInput>
  }

  export type PedidoCreateNestedOneWithoutPagoInput = {
    create?: XOR<PedidoCreateWithoutPagoInput, PedidoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPagoInput
    connect?: PedidoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutPagoNestedInput = {
    create?: XOR<PedidoCreateWithoutPagoInput, PedidoUncheckedCreateWithoutPagoInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPagoInput
    upsert?: PedidoUpsertWithoutPagoInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutPagoInput, PedidoUpdateWithoutPagoInput>, PedidoUncheckedUpdateWithoutPagoInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
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
    search?: string
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutRolInput = {
    primerNombre: string
    segundoNombre?: string | null
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    direcciones?: DireccionCreateNestedManyWithoutUsuarioInput
    carrito?: CarritoCreateNestedOneWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutRolInput = {
    id?: number
    primerNombre: string
    segundoNombre?: string | null
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutUsuarioInput
    carrito?: CarritoUncheckedCreateNestedOneWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioCreateManyRolInputEnvelope = {
    data: UsuarioCreateManyRolInput | UsuarioCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutRolInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutRolInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    rolId?: IntFilter<"Usuario"> | number
    primerNombre?: StringFilter<"Usuario"> | string
    segundoNombre?: StringNullableFilter<"Usuario"> | string | null
    primerApellido?: StringFilter<"Usuario"> | string
    segundoApellido?: StringNullableFilter<"Usuario"> | string | null
    correo?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    telefono?: StringNullableFilter<"Usuario"> | string | null
    fechaRegistro?: DateTimeFilter<"Usuario"> | Date | string
    estado?: StringFilter<"Usuario"> | string
  }

  export type RolCreateWithoutUsuariosInput = {
    nombre: string
  }

  export type RolUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
  }

  export type RolCreateOrConnectWithoutUsuariosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
  }

  export type DireccionCreateWithoutUsuarioInput = {
    callePrincipal: string
    numeroExterior: string
    barrio: string
    referencia?: string | null
    codigoPostal?: string | null
    ciudad: CiudadCreateNestedOneWithoutDireccionesInput
    pedidos?: PedidoCreateNestedManyWithoutDireccionInput
  }

  export type DireccionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    ciudadId: number
    callePrincipal: string
    numeroExterior: string
    barrio: string
    referencia?: string | null
    codigoPostal?: string | null
    pedidos?: PedidoUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type DireccionCreateOrConnectWithoutUsuarioInput = {
    where: DireccionWhereUniqueInput
    create: XOR<DireccionCreateWithoutUsuarioInput, DireccionUncheckedCreateWithoutUsuarioInput>
  }

  export type DireccionCreateManyUsuarioInputEnvelope = {
    data: DireccionCreateManyUsuarioInput | DireccionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CarritoCreateWithoutUsuarioInput = {
    fechaCreacion?: Date | string
    estado?: string
    detalles?: DetalleCarritoCreateNestedManyWithoutCarritoInput
  }

  export type CarritoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    fechaCreacion?: Date | string
    estado?: string
    detalles?: DetalleCarritoUncheckedCreateNestedManyWithoutCarritoInput
  }

  export type CarritoCreateOrConnectWithoutUsuarioInput = {
    where: CarritoWhereUniqueInput
    create: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoCreateWithoutUsuarioInput = {
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
    direccion: DireccionCreateNestedOneWithoutPedidosInput
    detalles?: DetallePedidoCreateNestedManyWithoutPedidoInput
    factura?: FacturaCreateNestedOneWithoutPedidoInput
    pago?: PagoCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    direccionId: number
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
    detalles?: DetallePedidoUncheckedCreateNestedManyWithoutPedidoInput
    factura?: FacturaUncheckedCreateNestedOneWithoutPedidoInput
    pago?: PagoUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoCreateManyUsuarioInputEnvelope = {
    data: PedidoCreateManyUsuarioInput | PedidoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RolUpsertWithoutUsuariosInput = {
    update: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RolUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DireccionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DireccionWhereUniqueInput
    update: XOR<DireccionUpdateWithoutUsuarioInput, DireccionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DireccionCreateWithoutUsuarioInput, DireccionUncheckedCreateWithoutUsuarioInput>
  }

  export type DireccionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DireccionWhereUniqueInput
    data: XOR<DireccionUpdateWithoutUsuarioInput, DireccionUncheckedUpdateWithoutUsuarioInput>
  }

  export type DireccionUpdateManyWithWhereWithoutUsuarioInput = {
    where: DireccionScalarWhereInput
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DireccionScalarWhereInput = {
    AND?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
    OR?: DireccionScalarWhereInput[]
    NOT?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
    id?: IntFilter<"Direccion"> | number
    usuarioId?: IntFilter<"Direccion"> | number
    ciudadId?: IntFilter<"Direccion"> | number
    callePrincipal?: StringFilter<"Direccion"> | string
    numeroExterior?: StringFilter<"Direccion"> | string
    barrio?: StringFilter<"Direccion"> | string
    referencia?: StringNullableFilter<"Direccion"> | string | null
    codigoPostal?: StringNullableFilter<"Direccion"> | string | null
  }

  export type CarritoUpsertWithoutUsuarioInput = {
    update: XOR<CarritoUpdateWithoutUsuarioInput, CarritoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CarritoCreateWithoutUsuarioInput, CarritoUncheckedCreateWithoutUsuarioInput>
    where?: CarritoWhereInput
  }

  export type CarritoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: CarritoWhereInput
    data: XOR<CarritoUpdateWithoutUsuarioInput, CarritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type CarritoUpdateWithoutUsuarioInput = {
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: DetalleCarritoUpdateManyWithoutCarritoNestedInput
  }

  export type CarritoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    detalles?: DetalleCarritoUncheckedUpdateManyWithoutCarritoNestedInput
  }

  export type PedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PedidoCreateWithoutUsuarioInput, PedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutUsuarioInput, PedidoUncheckedUpdateWithoutUsuarioInput>
  }

  export type PedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: IntFilter<"Pedido"> | number
    usuarioId?: IntFilter<"Pedido"> | number
    direccionId?: IntFilter<"Pedido"> | number
    fechaPedido?: DateTimeFilter<"Pedido"> | Date | string
    estado?: StringFilter<"Pedido"> | string
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
  }

  export type CiudadCreateWithoutDepartamentoInput = {
    nombre: string
    direcciones?: DireccionCreateNestedManyWithoutCiudadInput
  }

  export type CiudadUncheckedCreateWithoutDepartamentoInput = {
    id?: number
    nombre: string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutCiudadInput
  }

  export type CiudadCreateOrConnectWithoutDepartamentoInput = {
    where: CiudadWhereUniqueInput
    create: XOR<CiudadCreateWithoutDepartamentoInput, CiudadUncheckedCreateWithoutDepartamentoInput>
  }

  export type CiudadCreateManyDepartamentoInputEnvelope = {
    data: CiudadCreateManyDepartamentoInput | CiudadCreateManyDepartamentoInput[]
    skipDuplicates?: boolean
  }

  export type CiudadUpsertWithWhereUniqueWithoutDepartamentoInput = {
    where: CiudadWhereUniqueInput
    update: XOR<CiudadUpdateWithoutDepartamentoInput, CiudadUncheckedUpdateWithoutDepartamentoInput>
    create: XOR<CiudadCreateWithoutDepartamentoInput, CiudadUncheckedCreateWithoutDepartamentoInput>
  }

  export type CiudadUpdateWithWhereUniqueWithoutDepartamentoInput = {
    where: CiudadWhereUniqueInput
    data: XOR<CiudadUpdateWithoutDepartamentoInput, CiudadUncheckedUpdateWithoutDepartamentoInput>
  }

  export type CiudadUpdateManyWithWhereWithoutDepartamentoInput = {
    where: CiudadScalarWhereInput
    data: XOR<CiudadUpdateManyMutationInput, CiudadUncheckedUpdateManyWithoutDepartamentoInput>
  }

  export type CiudadScalarWhereInput = {
    AND?: CiudadScalarWhereInput | CiudadScalarWhereInput[]
    OR?: CiudadScalarWhereInput[]
    NOT?: CiudadScalarWhereInput | CiudadScalarWhereInput[]
    id?: IntFilter<"Ciudad"> | number
    departamentoId?: IntFilter<"Ciudad"> | number
    nombre?: StringFilter<"Ciudad"> | string
  }

  export type DepartamentoCreateWithoutCiudadesInput = {
    nombre: string
  }

  export type DepartamentoUncheckedCreateWithoutCiudadesInput = {
    id?: number
    nombre: string
  }

  export type DepartamentoCreateOrConnectWithoutCiudadesInput = {
    where: DepartamentoWhereUniqueInput
    create: XOR<DepartamentoCreateWithoutCiudadesInput, DepartamentoUncheckedCreateWithoutCiudadesInput>
  }

  export type DireccionCreateWithoutCiudadInput = {
    callePrincipal: string
    numeroExterior: string
    barrio: string
    referencia?: string | null
    codigoPostal?: string | null
    usuario: UsuarioCreateNestedOneWithoutDireccionesInput
    pedidos?: PedidoCreateNestedManyWithoutDireccionInput
  }

  export type DireccionUncheckedCreateWithoutCiudadInput = {
    id?: number
    usuarioId: number
    callePrincipal: string
    numeroExterior: string
    barrio: string
    referencia?: string | null
    codigoPostal?: string | null
    pedidos?: PedidoUncheckedCreateNestedManyWithoutDireccionInput
  }

  export type DireccionCreateOrConnectWithoutCiudadInput = {
    where: DireccionWhereUniqueInput
    create: XOR<DireccionCreateWithoutCiudadInput, DireccionUncheckedCreateWithoutCiudadInput>
  }

  export type DireccionCreateManyCiudadInputEnvelope = {
    data: DireccionCreateManyCiudadInput | DireccionCreateManyCiudadInput[]
    skipDuplicates?: boolean
  }

  export type DepartamentoUpsertWithoutCiudadesInput = {
    update: XOR<DepartamentoUpdateWithoutCiudadesInput, DepartamentoUncheckedUpdateWithoutCiudadesInput>
    create: XOR<DepartamentoCreateWithoutCiudadesInput, DepartamentoUncheckedCreateWithoutCiudadesInput>
    where?: DepartamentoWhereInput
  }

  export type DepartamentoUpdateToOneWithWhereWithoutCiudadesInput = {
    where?: DepartamentoWhereInput
    data: XOR<DepartamentoUpdateWithoutCiudadesInput, DepartamentoUncheckedUpdateWithoutCiudadesInput>
  }

  export type DepartamentoUpdateWithoutCiudadesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DepartamentoUncheckedUpdateWithoutCiudadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DireccionUpsertWithWhereUniqueWithoutCiudadInput = {
    where: DireccionWhereUniqueInput
    update: XOR<DireccionUpdateWithoutCiudadInput, DireccionUncheckedUpdateWithoutCiudadInput>
    create: XOR<DireccionCreateWithoutCiudadInput, DireccionUncheckedCreateWithoutCiudadInput>
  }

  export type DireccionUpdateWithWhereUniqueWithoutCiudadInput = {
    where: DireccionWhereUniqueInput
    data: XOR<DireccionUpdateWithoutCiudadInput, DireccionUncheckedUpdateWithoutCiudadInput>
  }

  export type DireccionUpdateManyWithWhereWithoutCiudadInput = {
    where: DireccionScalarWhereInput
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyWithoutCiudadInput>
  }

  export type UsuarioCreateWithoutDireccionesInput = {
    primerNombre: string
    segundoNombre?: string | null
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    rol: RolCreateNestedOneWithoutUsuariosInput
    carrito?: CarritoCreateNestedOneWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutDireccionesInput = {
    id?: number
    rolId: number
    primerNombre: string
    segundoNombre?: string | null
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    carrito?: CarritoUncheckedCreateNestedOneWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutDireccionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDireccionesInput, UsuarioUncheckedCreateWithoutDireccionesInput>
  }

  export type CiudadCreateWithoutDireccionesInput = {
    nombre: string
    departamento: DepartamentoCreateNestedOneWithoutCiudadesInput
  }

  export type CiudadUncheckedCreateWithoutDireccionesInput = {
    id?: number
    departamentoId: number
    nombre: string
  }

  export type CiudadCreateOrConnectWithoutDireccionesInput = {
    where: CiudadWhereUniqueInput
    create: XOR<CiudadCreateWithoutDireccionesInput, CiudadUncheckedCreateWithoutDireccionesInput>
  }

  export type PedidoCreateWithoutDireccionInput = {
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    detalles?: DetallePedidoCreateNestedManyWithoutPedidoInput
    factura?: FacturaCreateNestedOneWithoutPedidoInput
    pago?: PagoCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutDireccionInput = {
    id?: number
    usuarioId: number
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
    detalles?: DetallePedidoUncheckedCreateNestedManyWithoutPedidoInput
    factura?: FacturaUncheckedCreateNestedOneWithoutPedidoInput
    pago?: PagoUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutDireccionInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutDireccionInput, PedidoUncheckedCreateWithoutDireccionInput>
  }

  export type PedidoCreateManyDireccionInputEnvelope = {
    data: PedidoCreateManyDireccionInput | PedidoCreateManyDireccionInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutDireccionesInput = {
    update: XOR<UsuarioUpdateWithoutDireccionesInput, UsuarioUncheckedUpdateWithoutDireccionesInput>
    create: XOR<UsuarioCreateWithoutDireccionesInput, UsuarioUncheckedCreateWithoutDireccionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDireccionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDireccionesInput, UsuarioUncheckedUpdateWithoutDireccionesInput>
  }

  export type UsuarioUpdateWithoutDireccionesInput = {
    primerNombre?: StringFieldUpdateOperationsInput | string
    segundoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    carrito?: CarritoUpdateOneWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDireccionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    primerNombre?: StringFieldUpdateOperationsInput | string
    segundoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    carrito?: CarritoUncheckedUpdateOneWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CiudadUpsertWithoutDireccionesInput = {
    update: XOR<CiudadUpdateWithoutDireccionesInput, CiudadUncheckedUpdateWithoutDireccionesInput>
    create: XOR<CiudadCreateWithoutDireccionesInput, CiudadUncheckedCreateWithoutDireccionesInput>
    where?: CiudadWhereInput
  }

  export type CiudadUpdateToOneWithWhereWithoutDireccionesInput = {
    where?: CiudadWhereInput
    data: XOR<CiudadUpdateWithoutDireccionesInput, CiudadUncheckedUpdateWithoutDireccionesInput>
  }

  export type CiudadUpdateWithoutDireccionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    departamento?: DepartamentoUpdateOneRequiredWithoutCiudadesNestedInput
  }

  export type CiudadUncheckedUpdateWithoutDireccionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    departamentoId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoUpsertWithWhereUniqueWithoutDireccionInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutDireccionInput, PedidoUncheckedUpdateWithoutDireccionInput>
    create: XOR<PedidoCreateWithoutDireccionInput, PedidoUncheckedCreateWithoutDireccionInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutDireccionInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutDireccionInput, PedidoUncheckedUpdateWithoutDireccionInput>
  }

  export type PedidoUpdateManyWithWhereWithoutDireccionInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutDireccionInput>
  }

  export type ProductoCreateWithoutCategoriaInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
    imagenes?: ImagenProductoCreateNestedManyWithoutProductoInput
    detallesCarrito?: DetalleCarritoCreateNestedManyWithoutProductoInput
    detallesPedido?: DetallePedidoCreateNestedManyWithoutProductoInput
    detallesFactura?: DetalleFacturaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
    imagenes?: ImagenProductoUncheckedCreateNestedManyWithoutProductoInput
    detallesCarrito?: DetalleCarritoUncheckedCreateNestedManyWithoutProductoInput
    detallesPedido?: DetallePedidoUncheckedCreateNestedManyWithoutProductoInput
    detallesFactura?: DetalleFacturaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoCreateManyCategoriaInputEnvelope = {
    data: ProductoCreateManyCategoriaInput | ProductoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProductoCreateWithoutCategoriaInput, ProductoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutCategoriaInput, ProductoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProductoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProductoScalarWhereInput = {
    AND?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    OR?: ProductoScalarWhereInput[]
    NOT?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    id?: IntFilter<"Producto"> | number
    categoriaId?: IntFilter<"Producto"> | number
    nombre?: StringFilter<"Producto"> | string
    descripcion?: StringNullableFilter<"Producto"> | string | null
    precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    stock?: IntFilter<"Producto"> | number
    estado?: StringFilter<"Producto"> | string
  }

  export type CategoriaCreateWithoutProductosInput = {
    nombre: string
    descripcion?: string | null
  }

  export type CategoriaUncheckedCreateWithoutProductosInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type CategoriaCreateOrConnectWithoutProductosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
  }

  export type ImagenProductoCreateWithoutProductoInput = {
    urlImagen: string
  }

  export type ImagenProductoUncheckedCreateWithoutProductoInput = {
    id?: number
    urlImagen: string
  }

  export type ImagenProductoCreateOrConnectWithoutProductoInput = {
    where: ImagenProductoWhereUniqueInput
    create: XOR<ImagenProductoCreateWithoutProductoInput, ImagenProductoUncheckedCreateWithoutProductoInput>
  }

  export type ImagenProductoCreateManyProductoInputEnvelope = {
    data: ImagenProductoCreateManyProductoInput | ImagenProductoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type DetalleCarritoCreateWithoutProductoInput = {
    cantidad: number
    carrito: CarritoCreateNestedOneWithoutDetallesInput
  }

  export type DetalleCarritoUncheckedCreateWithoutProductoInput = {
    id?: number
    carritoId: number
    cantidad: number
  }

  export type DetalleCarritoCreateOrConnectWithoutProductoInput = {
    where: DetalleCarritoWhereUniqueInput
    create: XOR<DetalleCarritoCreateWithoutProductoInput, DetalleCarritoUncheckedCreateWithoutProductoInput>
  }

  export type DetalleCarritoCreateManyProductoInputEnvelope = {
    data: DetalleCarritoCreateManyProductoInput | DetalleCarritoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type DetallePedidoCreateWithoutProductoInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    pedido: PedidoCreateNestedOneWithoutDetallesInput
  }

  export type DetallePedidoUncheckedCreateWithoutProductoInput = {
    id?: number
    pedidoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type DetallePedidoCreateOrConnectWithoutProductoInput = {
    where: DetallePedidoWhereUniqueInput
    create: XOR<DetallePedidoCreateWithoutProductoInput, DetallePedidoUncheckedCreateWithoutProductoInput>
  }

  export type DetallePedidoCreateManyProductoInputEnvelope = {
    data: DetallePedidoCreateManyProductoInput | DetallePedidoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type DetalleFacturaCreateWithoutProductoInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    impuesto: Decimal | DecimalJsLike | number | string
    subTotal: Decimal | DecimalJsLike | number | string
    factura: FacturaCreateNestedOneWithoutDetallesInput
  }

  export type DetalleFacturaUncheckedCreateWithoutProductoInput = {
    id?: number
    facturaId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    impuesto: Decimal | DecimalJsLike | number | string
    subTotal: Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaCreateOrConnectWithoutProductoInput = {
    where: DetalleFacturaWhereUniqueInput
    create: XOR<DetalleFacturaCreateWithoutProductoInput, DetalleFacturaUncheckedCreateWithoutProductoInput>
  }

  export type DetalleFacturaCreateManyProductoInputEnvelope = {
    data: DetalleFacturaCreateManyProductoInput | DetalleFacturaCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutProductosInput = {
    update: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
    create: XOR<CategoriaCreateWithoutProductosInput, CategoriaUncheckedCreateWithoutProductosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProductosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProductosInput, CategoriaUncheckedUpdateWithoutProductosInput>
  }

  export type CategoriaUpdateWithoutProductosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaUncheckedUpdateWithoutProductosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagenProductoUpsertWithWhereUniqueWithoutProductoInput = {
    where: ImagenProductoWhereUniqueInput
    update: XOR<ImagenProductoUpdateWithoutProductoInput, ImagenProductoUncheckedUpdateWithoutProductoInput>
    create: XOR<ImagenProductoCreateWithoutProductoInput, ImagenProductoUncheckedCreateWithoutProductoInput>
  }

  export type ImagenProductoUpdateWithWhereUniqueWithoutProductoInput = {
    where: ImagenProductoWhereUniqueInput
    data: XOR<ImagenProductoUpdateWithoutProductoInput, ImagenProductoUncheckedUpdateWithoutProductoInput>
  }

  export type ImagenProductoUpdateManyWithWhereWithoutProductoInput = {
    where: ImagenProductoScalarWhereInput
    data: XOR<ImagenProductoUpdateManyMutationInput, ImagenProductoUncheckedUpdateManyWithoutProductoInput>
  }

  export type ImagenProductoScalarWhereInput = {
    AND?: ImagenProductoScalarWhereInput | ImagenProductoScalarWhereInput[]
    OR?: ImagenProductoScalarWhereInput[]
    NOT?: ImagenProductoScalarWhereInput | ImagenProductoScalarWhereInput[]
    id?: IntFilter<"ImagenProducto"> | number
    productoId?: IntFilter<"ImagenProducto"> | number
    urlImagen?: StringFilter<"ImagenProducto"> | string
  }

  export type DetalleCarritoUpsertWithWhereUniqueWithoutProductoInput = {
    where: DetalleCarritoWhereUniqueInput
    update: XOR<DetalleCarritoUpdateWithoutProductoInput, DetalleCarritoUncheckedUpdateWithoutProductoInput>
    create: XOR<DetalleCarritoCreateWithoutProductoInput, DetalleCarritoUncheckedCreateWithoutProductoInput>
  }

  export type DetalleCarritoUpdateWithWhereUniqueWithoutProductoInput = {
    where: DetalleCarritoWhereUniqueInput
    data: XOR<DetalleCarritoUpdateWithoutProductoInput, DetalleCarritoUncheckedUpdateWithoutProductoInput>
  }

  export type DetalleCarritoUpdateManyWithWhereWithoutProductoInput = {
    where: DetalleCarritoScalarWhereInput
    data: XOR<DetalleCarritoUpdateManyMutationInput, DetalleCarritoUncheckedUpdateManyWithoutProductoInput>
  }

  export type DetalleCarritoScalarWhereInput = {
    AND?: DetalleCarritoScalarWhereInput | DetalleCarritoScalarWhereInput[]
    OR?: DetalleCarritoScalarWhereInput[]
    NOT?: DetalleCarritoScalarWhereInput | DetalleCarritoScalarWhereInput[]
    id?: IntFilter<"DetalleCarrito"> | number
    carritoId?: IntFilter<"DetalleCarrito"> | number
    productoId?: IntFilter<"DetalleCarrito"> | number
    cantidad?: IntFilter<"DetalleCarrito"> | number
  }

  export type DetallePedidoUpsertWithWhereUniqueWithoutProductoInput = {
    where: DetallePedidoWhereUniqueInput
    update: XOR<DetallePedidoUpdateWithoutProductoInput, DetallePedidoUncheckedUpdateWithoutProductoInput>
    create: XOR<DetallePedidoCreateWithoutProductoInput, DetallePedidoUncheckedCreateWithoutProductoInput>
  }

  export type DetallePedidoUpdateWithWhereUniqueWithoutProductoInput = {
    where: DetallePedidoWhereUniqueInput
    data: XOR<DetallePedidoUpdateWithoutProductoInput, DetallePedidoUncheckedUpdateWithoutProductoInput>
  }

  export type DetallePedidoUpdateManyWithWhereWithoutProductoInput = {
    where: DetallePedidoScalarWhereInput
    data: XOR<DetallePedidoUpdateManyMutationInput, DetallePedidoUncheckedUpdateManyWithoutProductoInput>
  }

  export type DetallePedidoScalarWhereInput = {
    AND?: DetallePedidoScalarWhereInput | DetallePedidoScalarWhereInput[]
    OR?: DetallePedidoScalarWhereInput[]
    NOT?: DetallePedidoScalarWhereInput | DetallePedidoScalarWhereInput[]
    id?: IntFilter<"DetallePedido"> | number
    pedidoId?: IntFilter<"DetallePedido"> | number
    productoId?: IntFilter<"DetallePedido"> | number
    cantidad?: IntFilter<"DetallePedido"> | number
    precioUnitario?: DecimalFilter<"DetallePedido"> | Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaUpsertWithWhereUniqueWithoutProductoInput = {
    where: DetalleFacturaWhereUniqueInput
    update: XOR<DetalleFacturaUpdateWithoutProductoInput, DetalleFacturaUncheckedUpdateWithoutProductoInput>
    create: XOR<DetalleFacturaCreateWithoutProductoInput, DetalleFacturaUncheckedCreateWithoutProductoInput>
  }

  export type DetalleFacturaUpdateWithWhereUniqueWithoutProductoInput = {
    where: DetalleFacturaWhereUniqueInput
    data: XOR<DetalleFacturaUpdateWithoutProductoInput, DetalleFacturaUncheckedUpdateWithoutProductoInput>
  }

  export type DetalleFacturaUpdateManyWithWhereWithoutProductoInput = {
    where: DetalleFacturaScalarWhereInput
    data: XOR<DetalleFacturaUpdateManyMutationInput, DetalleFacturaUncheckedUpdateManyWithoutProductoInput>
  }

  export type DetalleFacturaScalarWhereInput = {
    AND?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
    OR?: DetalleFacturaScalarWhereInput[]
    NOT?: DetalleFacturaScalarWhereInput | DetalleFacturaScalarWhereInput[]
    id?: IntFilter<"DetalleFactura"> | number
    facturaId?: IntFilter<"DetalleFactura"> | number
    productoId?: IntFilter<"DetalleFactura"> | number
    cantidad?: IntFilter<"DetalleFactura"> | number
    precioUnitario?: DecimalFilter<"DetalleFactura"> | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalFilter<"DetalleFactura"> | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFilter<"DetalleFactura"> | Decimal | DecimalJsLike | number | string
  }

  export type ProductoCreateWithoutImagenesInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    detallesCarrito?: DetalleCarritoCreateNestedManyWithoutProductoInput
    detallesPedido?: DetallePedidoCreateNestedManyWithoutProductoInput
    detallesFactura?: DetalleFacturaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutImagenesInput = {
    id?: number
    categoriaId: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
    detallesCarrito?: DetalleCarritoUncheckedCreateNestedManyWithoutProductoInput
    detallesPedido?: DetallePedidoUncheckedCreateNestedManyWithoutProductoInput
    detallesFactura?: DetalleFacturaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutImagenesInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutImagenesInput, ProductoUncheckedCreateWithoutImagenesInput>
  }

  export type ProductoUpsertWithoutImagenesInput = {
    update: XOR<ProductoUpdateWithoutImagenesInput, ProductoUncheckedUpdateWithoutImagenesInput>
    create: XOR<ProductoCreateWithoutImagenesInput, ProductoUncheckedCreateWithoutImagenesInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutImagenesInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutImagenesInput, ProductoUncheckedUpdateWithoutImagenesInput>
  }

  export type ProductoUpdateWithoutImagenesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    detallesCarrito?: DetalleCarritoUpdateManyWithoutProductoNestedInput
    detallesPedido?: DetallePedidoUpdateManyWithoutProductoNestedInput
    detallesFactura?: DetalleFacturaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutImagenesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    detallesCarrito?: DetalleCarritoUncheckedUpdateManyWithoutProductoNestedInput
    detallesPedido?: DetallePedidoUncheckedUpdateManyWithoutProductoNestedInput
    detallesFactura?: DetalleFacturaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type UsuarioCreateWithoutCarritoInput = {
    primerNombre: string
    segundoNombre?: string | null
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    rol: RolCreateNestedOneWithoutUsuariosInput
    direcciones?: DireccionCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCarritoInput = {
    id?: number
    rolId: number
    primerNombre: string
    segundoNombre?: string | null
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCarritoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
  }

  export type DetalleCarritoCreateWithoutCarritoInput = {
    cantidad: number
    producto: ProductoCreateNestedOneWithoutDetallesCarritoInput
  }

  export type DetalleCarritoUncheckedCreateWithoutCarritoInput = {
    id?: number
    productoId: number
    cantidad: number
  }

  export type DetalleCarritoCreateOrConnectWithoutCarritoInput = {
    where: DetalleCarritoWhereUniqueInput
    create: XOR<DetalleCarritoCreateWithoutCarritoInput, DetalleCarritoUncheckedCreateWithoutCarritoInput>
  }

  export type DetalleCarritoCreateManyCarritoInputEnvelope = {
    data: DetalleCarritoCreateManyCarritoInput | DetalleCarritoCreateManyCarritoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutCarritoInput = {
    update: XOR<UsuarioUpdateWithoutCarritoInput, UsuarioUncheckedUpdateWithoutCarritoInput>
    create: XOR<UsuarioCreateWithoutCarritoInput, UsuarioUncheckedCreateWithoutCarritoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCarritoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCarritoInput, UsuarioUncheckedUpdateWithoutCarritoInput>
  }

  export type UsuarioUpdateWithoutCarritoInput = {
    primerNombre?: StringFieldUpdateOperationsInput | string
    segundoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    direcciones?: DireccionUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCarritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    primerNombre?: StringFieldUpdateOperationsInput | string
    segundoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type DetalleCarritoUpsertWithWhereUniqueWithoutCarritoInput = {
    where: DetalleCarritoWhereUniqueInput
    update: XOR<DetalleCarritoUpdateWithoutCarritoInput, DetalleCarritoUncheckedUpdateWithoutCarritoInput>
    create: XOR<DetalleCarritoCreateWithoutCarritoInput, DetalleCarritoUncheckedCreateWithoutCarritoInput>
  }

  export type DetalleCarritoUpdateWithWhereUniqueWithoutCarritoInput = {
    where: DetalleCarritoWhereUniqueInput
    data: XOR<DetalleCarritoUpdateWithoutCarritoInput, DetalleCarritoUncheckedUpdateWithoutCarritoInput>
  }

  export type DetalleCarritoUpdateManyWithWhereWithoutCarritoInput = {
    where: DetalleCarritoScalarWhereInput
    data: XOR<DetalleCarritoUpdateManyMutationInput, DetalleCarritoUncheckedUpdateManyWithoutCarritoInput>
  }

  export type CarritoCreateWithoutDetallesInput = {
    fechaCreacion?: Date | string
    estado?: string
    usuario: UsuarioCreateNestedOneWithoutCarritoInput
  }

  export type CarritoUncheckedCreateWithoutDetallesInput = {
    id?: number
    usuarioId: number
    fechaCreacion?: Date | string
    estado?: string
  }

  export type CarritoCreateOrConnectWithoutDetallesInput = {
    where: CarritoWhereUniqueInput
    create: XOR<CarritoCreateWithoutDetallesInput, CarritoUncheckedCreateWithoutDetallesInput>
  }

  export type ProductoCreateWithoutDetallesCarritoInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    imagenes?: ImagenProductoCreateNestedManyWithoutProductoInput
    detallesPedido?: DetallePedidoCreateNestedManyWithoutProductoInput
    detallesFactura?: DetalleFacturaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutDetallesCarritoInput = {
    id?: number
    categoriaId: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
    imagenes?: ImagenProductoUncheckedCreateNestedManyWithoutProductoInput
    detallesPedido?: DetallePedidoUncheckedCreateNestedManyWithoutProductoInput
    detallesFactura?: DetalleFacturaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutDetallesCarritoInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutDetallesCarritoInput, ProductoUncheckedCreateWithoutDetallesCarritoInput>
  }

  export type CarritoUpsertWithoutDetallesInput = {
    update: XOR<CarritoUpdateWithoutDetallesInput, CarritoUncheckedUpdateWithoutDetallesInput>
    create: XOR<CarritoCreateWithoutDetallesInput, CarritoUncheckedCreateWithoutDetallesInput>
    where?: CarritoWhereInput
  }

  export type CarritoUpdateToOneWithWhereWithoutDetallesInput = {
    where?: CarritoWhereInput
    data: XOR<CarritoUpdateWithoutDetallesInput, CarritoUncheckedUpdateWithoutDetallesInput>
  }

  export type CarritoUpdateWithoutDetallesInput = {
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutCarritoNestedInput
  }

  export type CarritoUncheckedUpdateWithoutDetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ProductoUpsertWithoutDetallesCarritoInput = {
    update: XOR<ProductoUpdateWithoutDetallesCarritoInput, ProductoUncheckedUpdateWithoutDetallesCarritoInput>
    create: XOR<ProductoCreateWithoutDetallesCarritoInput, ProductoUncheckedCreateWithoutDetallesCarritoInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutDetallesCarritoInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutDetallesCarritoInput, ProductoUncheckedUpdateWithoutDetallesCarritoInput>
  }

  export type ProductoUpdateWithoutDetallesCarritoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    imagenes?: ImagenProductoUpdateManyWithoutProductoNestedInput
    detallesPedido?: DetallePedidoUpdateManyWithoutProductoNestedInput
    detallesFactura?: DetalleFacturaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutDetallesCarritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    imagenes?: ImagenProductoUncheckedUpdateManyWithoutProductoNestedInput
    detallesPedido?: DetallePedidoUncheckedUpdateManyWithoutProductoNestedInput
    detallesFactura?: DetalleFacturaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type UsuarioCreateWithoutPedidosInput = {
    primerNombre: string
    segundoNombre?: string | null
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    rol: RolCreateNestedOneWithoutUsuariosInput
    direcciones?: DireccionCreateNestedManyWithoutUsuarioInput
    carrito?: CarritoCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPedidosInput = {
    id?: number
    rolId: number
    primerNombre: string
    segundoNombre?: string | null
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutUsuarioInput
    carrito?: CarritoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPedidosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
  }

  export type DireccionCreateWithoutPedidosInput = {
    callePrincipal: string
    numeroExterior: string
    barrio: string
    referencia?: string | null
    codigoPostal?: string | null
    usuario: UsuarioCreateNestedOneWithoutDireccionesInput
    ciudad: CiudadCreateNestedOneWithoutDireccionesInput
  }

  export type DireccionUncheckedCreateWithoutPedidosInput = {
    id?: number
    usuarioId: number
    ciudadId: number
    callePrincipal: string
    numeroExterior: string
    barrio: string
    referencia?: string | null
    codigoPostal?: string | null
  }

  export type DireccionCreateOrConnectWithoutPedidosInput = {
    where: DireccionWhereUniqueInput
    create: XOR<DireccionCreateWithoutPedidosInput, DireccionUncheckedCreateWithoutPedidosInput>
  }

  export type DetallePedidoCreateWithoutPedidoInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    producto: ProductoCreateNestedOneWithoutDetallesPedidoInput
  }

  export type DetallePedidoUncheckedCreateWithoutPedidoInput = {
    id?: number
    productoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type DetallePedidoCreateOrConnectWithoutPedidoInput = {
    where: DetallePedidoWhereUniqueInput
    create: XOR<DetallePedidoCreateWithoutPedidoInput, DetallePedidoUncheckedCreateWithoutPedidoInput>
  }

  export type DetallePedidoCreateManyPedidoInputEnvelope = {
    data: DetallePedidoCreateManyPedidoInput | DetallePedidoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type FacturaCreateWithoutPedidoInput = {
    fechaEmision?: Date | string
    totalPagar: Decimal | DecimalJsLike | number | string
    detalles?: DetalleFacturaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutPedidoInput = {
    id?: number
    fechaEmision?: Date | string
    totalPagar: Decimal | DecimalJsLike | number | string
    detalles?: DetalleFacturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaCreateOrConnectWithoutPedidoInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutPedidoInput, FacturaUncheckedCreateWithoutPedidoInput>
  }

  export type PagoCreateWithoutPedidoInput = {
    fechaPago?: Date | string
    montoPago: Decimal | DecimalJsLike | number | string
    estado: string
  }

  export type PagoUncheckedCreateWithoutPedidoInput = {
    id?: number
    fechaPago?: Date | string
    montoPago: Decimal | DecimalJsLike | number | string
    estado: string
  }

  export type PagoCreateOrConnectWithoutPedidoInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutPedidoInput, PagoUncheckedCreateWithoutPedidoInput>
  }

  export type UsuarioUpsertWithoutPedidosInput = {
    update: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
    create: XOR<UsuarioCreateWithoutPedidosInput, UsuarioUncheckedCreateWithoutPedidosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPedidosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPedidosInput, UsuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type UsuarioUpdateWithoutPedidosInput = {
    primerNombre?: StringFieldUpdateOperationsInput | string
    segundoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    direcciones?: DireccionUpdateManyWithoutUsuarioNestedInput
    carrito?: CarritoUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
    primerNombre?: StringFieldUpdateOperationsInput | string
    segundoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUncheckedUpdateManyWithoutUsuarioNestedInput
    carrito?: CarritoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type DireccionUpsertWithoutPedidosInput = {
    update: XOR<DireccionUpdateWithoutPedidosInput, DireccionUncheckedUpdateWithoutPedidosInput>
    create: XOR<DireccionCreateWithoutPedidosInput, DireccionUncheckedCreateWithoutPedidosInput>
    where?: DireccionWhereInput
  }

  export type DireccionUpdateToOneWithWhereWithoutPedidosInput = {
    where?: DireccionWhereInput
    data: XOR<DireccionUpdateWithoutPedidosInput, DireccionUncheckedUpdateWithoutPedidosInput>
  }

  export type DireccionUpdateWithoutPedidosInput = {
    callePrincipal?: StringFieldUpdateOperationsInput | string
    numeroExterior?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutDireccionesNestedInput
    ciudad?: CiudadUpdateOneRequiredWithoutDireccionesNestedInput
  }

  export type DireccionUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    ciudadId?: IntFieldUpdateOperationsInput | number
    callePrincipal?: StringFieldUpdateOperationsInput | string
    numeroExterior?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetallePedidoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: DetallePedidoWhereUniqueInput
    update: XOR<DetallePedidoUpdateWithoutPedidoInput, DetallePedidoUncheckedUpdateWithoutPedidoInput>
    create: XOR<DetallePedidoCreateWithoutPedidoInput, DetallePedidoUncheckedCreateWithoutPedidoInput>
  }

  export type DetallePedidoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: DetallePedidoWhereUniqueInput
    data: XOR<DetallePedidoUpdateWithoutPedidoInput, DetallePedidoUncheckedUpdateWithoutPedidoInput>
  }

  export type DetallePedidoUpdateManyWithWhereWithoutPedidoInput = {
    where: DetallePedidoScalarWhereInput
    data: XOR<DetallePedidoUpdateManyMutationInput, DetallePedidoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type FacturaUpsertWithoutPedidoInput = {
    update: XOR<FacturaUpdateWithoutPedidoInput, FacturaUncheckedUpdateWithoutPedidoInput>
    create: XOR<FacturaCreateWithoutPedidoInput, FacturaUncheckedCreateWithoutPedidoInput>
    where?: FacturaWhereInput
  }

  export type FacturaUpdateToOneWithWhereWithoutPedidoInput = {
    where?: FacturaWhereInput
    data: XOR<FacturaUpdateWithoutPedidoInput, FacturaUncheckedUpdateWithoutPedidoInput>
  }

  export type FacturaUpdateWithoutPedidoInput = {
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalles?: DetalleFacturaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalles?: DetalleFacturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type PagoUpsertWithoutPedidoInput = {
    update: XOR<PagoUpdateWithoutPedidoInput, PagoUncheckedUpdateWithoutPedidoInput>
    create: XOR<PagoCreateWithoutPedidoInput, PagoUncheckedCreateWithoutPedidoInput>
    where?: PagoWhereInput
  }

  export type PagoUpdateToOneWithWhereWithoutPedidoInput = {
    where?: PagoWhereInput
    data: XOR<PagoUpdateWithoutPedidoInput, PagoUncheckedUpdateWithoutPedidoInput>
  }

  export type PagoUpdateWithoutPedidoInput = {
    fechaPago?: DateTimeFieldUpdateOperationsInput | Date | string
    montoPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type PagoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaPago?: DateTimeFieldUpdateOperationsInput | Date | string
    montoPago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoCreateWithoutDetallesInput = {
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    direccion: DireccionCreateNestedOneWithoutPedidosInput
    factura?: FacturaCreateNestedOneWithoutPedidoInput
    pago?: PagoCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutDetallesInput = {
    id?: number
    usuarioId: number
    direccionId: number
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
    factura?: FacturaUncheckedCreateNestedOneWithoutPedidoInput
    pago?: PagoUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutDetallesInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutDetallesInput, PedidoUncheckedCreateWithoutDetallesInput>
  }

  export type ProductoCreateWithoutDetallesPedidoInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    imagenes?: ImagenProductoCreateNestedManyWithoutProductoInput
    detallesCarrito?: DetalleCarritoCreateNestedManyWithoutProductoInput
    detallesFactura?: DetalleFacturaCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutDetallesPedidoInput = {
    id?: number
    categoriaId: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
    imagenes?: ImagenProductoUncheckedCreateNestedManyWithoutProductoInput
    detallesCarrito?: DetalleCarritoUncheckedCreateNestedManyWithoutProductoInput
    detallesFactura?: DetalleFacturaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutDetallesPedidoInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutDetallesPedidoInput, ProductoUncheckedCreateWithoutDetallesPedidoInput>
  }

  export type PedidoUpsertWithoutDetallesInput = {
    update: XOR<PedidoUpdateWithoutDetallesInput, PedidoUncheckedUpdateWithoutDetallesInput>
    create: XOR<PedidoCreateWithoutDetallesInput, PedidoUncheckedCreateWithoutDetallesInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutDetallesInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutDetallesInput, PedidoUncheckedUpdateWithoutDetallesInput>
  }

  export type PedidoUpdateWithoutDetallesInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    direccion?: DireccionUpdateOneRequiredWithoutPedidosNestedInput
    factura?: FacturaUpdateOneWithoutPedidoNestedInput
    pago?: PagoUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutDetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    factura?: FacturaUncheckedUpdateOneWithoutPedidoNestedInput
    pago?: PagoUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type ProductoUpsertWithoutDetallesPedidoInput = {
    update: XOR<ProductoUpdateWithoutDetallesPedidoInput, ProductoUncheckedUpdateWithoutDetallesPedidoInput>
    create: XOR<ProductoCreateWithoutDetallesPedidoInput, ProductoUncheckedCreateWithoutDetallesPedidoInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutDetallesPedidoInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutDetallesPedidoInput, ProductoUncheckedUpdateWithoutDetallesPedidoInput>
  }

  export type ProductoUpdateWithoutDetallesPedidoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    imagenes?: ImagenProductoUpdateManyWithoutProductoNestedInput
    detallesCarrito?: DetalleCarritoUpdateManyWithoutProductoNestedInput
    detallesFactura?: DetalleFacturaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutDetallesPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    imagenes?: ImagenProductoUncheckedUpdateManyWithoutProductoNestedInput
    detallesCarrito?: DetalleCarritoUncheckedUpdateManyWithoutProductoNestedInput
    detallesFactura?: DetalleFacturaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type PedidoCreateWithoutFacturaInput = {
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    direccion: DireccionCreateNestedOneWithoutPedidosInput
    detalles?: DetallePedidoCreateNestedManyWithoutPedidoInput
    pago?: PagoCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutFacturaInput = {
    id?: number
    usuarioId: number
    direccionId: number
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
    detalles?: DetallePedidoUncheckedCreateNestedManyWithoutPedidoInput
    pago?: PagoUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutFacturaInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutFacturaInput, PedidoUncheckedCreateWithoutFacturaInput>
  }

  export type DetalleFacturaCreateWithoutFacturaInput = {
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    impuesto: Decimal | DecimalJsLike | number | string
    subTotal: Decimal | DecimalJsLike | number | string
    producto: ProductoCreateNestedOneWithoutDetallesFacturaInput
  }

  export type DetalleFacturaUncheckedCreateWithoutFacturaInput = {
    id?: number
    productoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    impuesto: Decimal | DecimalJsLike | number | string
    subTotal: Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaCreateOrConnectWithoutFacturaInput = {
    where: DetalleFacturaWhereUniqueInput
    create: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput>
  }

  export type DetalleFacturaCreateManyFacturaInputEnvelope = {
    data: DetalleFacturaCreateManyFacturaInput | DetalleFacturaCreateManyFacturaInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithoutFacturaInput = {
    update: XOR<PedidoUpdateWithoutFacturaInput, PedidoUncheckedUpdateWithoutFacturaInput>
    create: XOR<PedidoCreateWithoutFacturaInput, PedidoUncheckedCreateWithoutFacturaInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutFacturaInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutFacturaInput, PedidoUncheckedUpdateWithoutFacturaInput>
  }

  export type PedidoUpdateWithoutFacturaInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    direccion?: DireccionUpdateOneRequiredWithoutPedidosNestedInput
    detalles?: DetallePedidoUpdateManyWithoutPedidoNestedInput
    pago?: PagoUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutFacturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalles?: DetallePedidoUncheckedUpdateManyWithoutPedidoNestedInput
    pago?: PagoUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type DetalleFacturaUpsertWithWhereUniqueWithoutFacturaInput = {
    where: DetalleFacturaWhereUniqueInput
    update: XOR<DetalleFacturaUpdateWithoutFacturaInput, DetalleFacturaUncheckedUpdateWithoutFacturaInput>
    create: XOR<DetalleFacturaCreateWithoutFacturaInput, DetalleFacturaUncheckedCreateWithoutFacturaInput>
  }

  export type DetalleFacturaUpdateWithWhereUniqueWithoutFacturaInput = {
    where: DetalleFacturaWhereUniqueInput
    data: XOR<DetalleFacturaUpdateWithoutFacturaInput, DetalleFacturaUncheckedUpdateWithoutFacturaInput>
  }

  export type DetalleFacturaUpdateManyWithWhereWithoutFacturaInput = {
    where: DetalleFacturaScalarWhereInput
    data: XOR<DetalleFacturaUpdateManyMutationInput, DetalleFacturaUncheckedUpdateManyWithoutFacturaInput>
  }

  export type FacturaCreateWithoutDetallesInput = {
    fechaEmision?: Date | string
    totalPagar: Decimal | DecimalJsLike | number | string
    pedido: PedidoCreateNestedOneWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutDetallesInput = {
    id?: number
    pedidoId: number
    fechaEmision?: Date | string
    totalPagar: Decimal | DecimalJsLike | number | string
  }

  export type FacturaCreateOrConnectWithoutDetallesInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
  }

  export type ProductoCreateWithoutDetallesFacturaInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
    categoria: CategoriaCreateNestedOneWithoutProductosInput
    imagenes?: ImagenProductoCreateNestedManyWithoutProductoInput
    detallesCarrito?: DetalleCarritoCreateNestedManyWithoutProductoInput
    detallesPedido?: DetallePedidoCreateNestedManyWithoutProductoInput
  }

  export type ProductoUncheckedCreateWithoutDetallesFacturaInput = {
    id?: number
    categoriaId: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
    imagenes?: ImagenProductoUncheckedCreateNestedManyWithoutProductoInput
    detallesCarrito?: DetalleCarritoUncheckedCreateNestedManyWithoutProductoInput
    detallesPedido?: DetallePedidoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutDetallesFacturaInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutDetallesFacturaInput, ProductoUncheckedCreateWithoutDetallesFacturaInput>
  }

  export type FacturaUpsertWithoutDetallesInput = {
    update: XOR<FacturaUpdateWithoutDetallesInput, FacturaUncheckedUpdateWithoutDetallesInput>
    create: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
    where?: FacturaWhereInput
  }

  export type FacturaUpdateToOneWithWhereWithoutDetallesInput = {
    where?: FacturaWhereInput
    data: XOR<FacturaUpdateWithoutDetallesInput, FacturaUncheckedUpdateWithoutDetallesInput>
  }

  export type FacturaUpdateWithoutDetallesInput = {
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: PedidoUpdateOneRequiredWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutDetallesInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    fechaEmision?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPagar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductoUpsertWithoutDetallesFacturaInput = {
    update: XOR<ProductoUpdateWithoutDetallesFacturaInput, ProductoUncheckedUpdateWithoutDetallesFacturaInput>
    create: XOR<ProductoCreateWithoutDetallesFacturaInput, ProductoUncheckedCreateWithoutDetallesFacturaInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutDetallesFacturaInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutDetallesFacturaInput, ProductoUncheckedUpdateWithoutDetallesFacturaInput>
  }

  export type ProductoUpdateWithoutDetallesFacturaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    categoria?: CategoriaUpdateOneRequiredWithoutProductosNestedInput
    imagenes?: ImagenProductoUpdateManyWithoutProductoNestedInput
    detallesCarrito?: DetalleCarritoUpdateManyWithoutProductoNestedInput
    detallesPedido?: DetallePedidoUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutDetallesFacturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    imagenes?: ImagenProductoUncheckedUpdateManyWithoutProductoNestedInput
    detallesCarrito?: DetalleCarritoUncheckedUpdateManyWithoutProductoNestedInput
    detallesPedido?: DetallePedidoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type PedidoCreateWithoutPagoInput = {
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
    usuario: UsuarioCreateNestedOneWithoutPedidosInput
    direccion: DireccionCreateNestedOneWithoutPedidosInput
    detalles?: DetallePedidoCreateNestedManyWithoutPedidoInput
    factura?: FacturaCreateNestedOneWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutPagoInput = {
    id?: number
    usuarioId: number
    direccionId: number
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
    detalles?: DetallePedidoUncheckedCreateNestedManyWithoutPedidoInput
    factura?: FacturaUncheckedCreateNestedOneWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutPagoInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutPagoInput, PedidoUncheckedCreateWithoutPagoInput>
  }

  export type PedidoUpsertWithoutPagoInput = {
    update: XOR<PedidoUpdateWithoutPagoInput, PedidoUncheckedUpdateWithoutPagoInput>
    create: XOR<PedidoCreateWithoutPagoInput, PedidoUncheckedCreateWithoutPagoInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutPagoInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutPagoInput, PedidoUncheckedUpdateWithoutPagoInput>
  }

  export type PedidoUpdateWithoutPagoInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    direccion?: DireccionUpdateOneRequiredWithoutPedidosNestedInput
    detalles?: DetallePedidoUpdateManyWithoutPedidoNestedInput
    factura?: FacturaUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalles?: DetallePedidoUncheckedUpdateManyWithoutPedidoNestedInput
    factura?: FacturaUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type UsuarioCreateManyRolInput = {
    id?: number
    primerNombre: string
    segundoNombre?: string | null
    primerApellido: string
    segundoApellido?: string | null
    correo: string
    contrasena: string
    telefono?: string | null
    fechaRegistro?: Date | string
    estado?: string
  }

  export type UsuarioUpdateWithoutRolInput = {
    primerNombre?: StringFieldUpdateOperationsInput | string
    segundoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUpdateManyWithoutUsuarioNestedInput
    carrito?: CarritoUpdateOneWithoutUsuarioNestedInput
    pedidos?: PedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    primerNombre?: StringFieldUpdateOperationsInput | string
    segundoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUncheckedUpdateManyWithoutUsuarioNestedInput
    carrito?: CarritoUncheckedUpdateOneWithoutUsuarioNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    primerNombre?: StringFieldUpdateOperationsInput | string
    segundoNombre?: NullableStringFieldUpdateOperationsInput | string | null
    primerApellido?: StringFieldUpdateOperationsInput | string
    segundoApellido?: NullableStringFieldUpdateOperationsInput | string | null
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type DireccionCreateManyUsuarioInput = {
    id?: number
    ciudadId: number
    callePrincipal: string
    numeroExterior: string
    barrio: string
    referencia?: string | null
    codigoPostal?: string | null
  }

  export type PedidoCreateManyUsuarioInput = {
    id?: number
    direccionId: number
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
  }

  export type DireccionUpdateWithoutUsuarioInput = {
    callePrincipal?: StringFieldUpdateOperationsInput | string
    numeroExterior?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    ciudad?: CiudadUpdateOneRequiredWithoutDireccionesNestedInput
    pedidos?: PedidoUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ciudadId?: IntFieldUpdateOperationsInput | number
    callePrincipal?: StringFieldUpdateOperationsInput | string
    numeroExterior?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos?: PedidoUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    ciudadId?: IntFieldUpdateOperationsInput | number
    callePrincipal?: StringFieldUpdateOperationsInput | string
    numeroExterior?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PedidoUpdateWithoutUsuarioInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    direccion?: DireccionUpdateOneRequiredWithoutPedidosNestedInput
    detalles?: DetallePedidoUpdateManyWithoutPedidoNestedInput
    factura?: FacturaUpdateOneWithoutPedidoNestedInput
    pago?: PagoUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalles?: DetallePedidoUncheckedUpdateManyWithoutPedidoNestedInput
    factura?: FacturaUncheckedUpdateOneWithoutPedidoNestedInput
    pago?: PagoUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    direccionId?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CiudadCreateManyDepartamentoInput = {
    id?: number
    nombre: string
  }

  export type CiudadUpdateWithoutDepartamentoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadUncheckedUpdateWithoutDepartamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUncheckedUpdateManyWithoutCiudadNestedInput
  }

  export type CiudadUncheckedUpdateManyWithoutDepartamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type DireccionCreateManyCiudadInput = {
    id?: number
    usuarioId: number
    callePrincipal: string
    numeroExterior: string
    barrio: string
    referencia?: string | null
    codigoPostal?: string | null
  }

  export type DireccionUpdateWithoutCiudadInput = {
    callePrincipal?: StringFieldUpdateOperationsInput | string
    numeroExterior?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutDireccionesNestedInput
    pedidos?: PedidoUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionUncheckedUpdateWithoutCiudadInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    callePrincipal?: StringFieldUpdateOperationsInput | string
    numeroExterior?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos?: PedidoUncheckedUpdateManyWithoutDireccionNestedInput
  }

  export type DireccionUncheckedUpdateManyWithoutCiudadInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    callePrincipal?: StringFieldUpdateOperationsInput | string
    numeroExterior?: StringFieldUpdateOperationsInput | string
    barrio?: StringFieldUpdateOperationsInput | string
    referencia?: NullableStringFieldUpdateOperationsInput | string | null
    codigoPostal?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PedidoCreateManyDireccionInput = {
    id?: number
    usuarioId: number
    fechaPedido?: Date | string
    estado?: string
    total: Decimal | DecimalJsLike | number | string
  }

  export type PedidoUpdateWithoutDireccionInput = {
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    usuario?: UsuarioUpdateOneRequiredWithoutPedidosNestedInput
    detalles?: DetallePedidoUpdateManyWithoutPedidoNestedInput
    factura?: FacturaUpdateOneWithoutPedidoNestedInput
    pago?: PagoUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    detalles?: DetallePedidoUncheckedUpdateManyWithoutPedidoNestedInput
    factura?: FacturaUncheckedUpdateOneWithoutPedidoNestedInput
    pago?: PagoUncheckedUpdateOneWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutDireccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaPedido?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProductoCreateManyCategoriaInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    stock?: number
    estado?: string
  }

  export type ProductoUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    imagenes?: ImagenProductoUpdateManyWithoutProductoNestedInput
    detallesCarrito?: DetalleCarritoUpdateManyWithoutProductoNestedInput
    detallesPedido?: DetallePedidoUpdateManyWithoutProductoNestedInput
    detallesFactura?: DetalleFacturaUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    imagenes?: ImagenProductoUncheckedUpdateManyWithoutProductoNestedInput
    detallesCarrito?: DetalleCarritoUncheckedUpdateManyWithoutProductoNestedInput
    detallesPedido?: DetallePedidoUncheckedUpdateManyWithoutProductoNestedInput
    detallesFactura?: DetalleFacturaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ImagenProductoCreateManyProductoInput = {
    id?: number
    urlImagen: string
  }

  export type DetalleCarritoCreateManyProductoInput = {
    id?: number
    carritoId: number
    cantidad: number
  }

  export type DetallePedidoCreateManyProductoInput = {
    id?: number
    pedidoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaCreateManyProductoInput = {
    id?: number
    facturaId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    impuesto: Decimal | DecimalJsLike | number | string
    subTotal: Decimal | DecimalJsLike | number | string
  }

  export type ImagenProductoUpdateWithoutProductoInput = {
    urlImagen?: StringFieldUpdateOperationsInput | string
  }

  export type ImagenProductoUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    urlImagen?: StringFieldUpdateOperationsInput | string
  }

  export type ImagenProductoUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    urlImagen?: StringFieldUpdateOperationsInput | string
  }

  export type DetalleCarritoUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    carrito?: CarritoUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type DetalleCarritoUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    carritoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleCarritoUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    carritoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type DetallePedidoUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: PedidoUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type DetallePedidoUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetallePedidoUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    factura?: FacturaUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type DetalleFacturaUncheckedUpdateWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaUncheckedUpdateManyWithoutProductoInput = {
    id?: IntFieldUpdateOperationsInput | number
    facturaId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetalleCarritoCreateManyCarritoInput = {
    id?: number
    productoId: number
    cantidad: number
  }

  export type DetalleCarritoUpdateWithoutCarritoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutDetallesCarritoNestedInput
  }

  export type DetalleCarritoUncheckedUpdateWithoutCarritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleCarritoUncheckedUpdateManyWithoutCarritoInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type DetallePedidoCreateManyPedidoInput = {
    id?: number
    productoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
  }

  export type DetallePedidoUpdateWithoutPedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto?: ProductoUpdateOneRequiredWithoutDetallesPedidoNestedInput
  }

  export type DetallePedidoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetallePedidoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaCreateManyFacturaInput = {
    id?: number
    productoId: number
    cantidad: number
    precioUnitario: Decimal | DecimalJsLike | number | string
    impuesto: Decimal | DecimalJsLike | number | string
    subTotal: Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaUpdateWithoutFacturaInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    producto?: ProductoUpdateOneRequiredWithoutDetallesFacturaNestedInput
  }

  export type DetalleFacturaUncheckedUpdateWithoutFacturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type DetalleFacturaUncheckedUpdateManyWithoutFacturaInput = {
    id?: IntFieldUpdateOperationsInput | number
    productoId?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    precioUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    impuesto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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