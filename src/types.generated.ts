import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  join__FieldSet: any
}

export type Product = {
  __typename?: "Product"
  name: Scalars["String"]
  price?: Maybe<Scalars["Int"]>
  reviews?: Maybe<Array<Maybe<Review>>>
  upc: Scalars["String"]
}

export type Query = {
  __typename?: "Query"
  me?: Maybe<User>
  topProducts?: Maybe<Array<Maybe<Product>>>
}

export type QueryTopProductsArgs = {
  first?: InputMaybe<Scalars["Int"]>
}

export type Review = {
  __typename?: "Review"
  author?: Maybe<User>
  body?: Maybe<Scalars["String"]>
  product?: Maybe<Product>
}

export type User = {
  __typename?: "User"
  id: Scalars["ID"]
  reviews?: Maybe<Array<Maybe<Review>>>
  username: Scalars["String"]
}

export enum Core__Purpose {
  /** `EXECUTION` features provide metadata necessary to for operation execution. */
  Execution = "EXECUTION",
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = "SECURITY",
}

export enum Join__Graph {
  Accounts = "ACCOUNTS",
  Products = "PRODUCTS",
  Reviews = "REVIEWS",
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>
  ID: ResolverTypeWrapper<Scalars["ID"]>
  Int: ResolverTypeWrapper<Scalars["Int"]>
  Product: ResolverTypeWrapper<Product>
  Query: ResolverTypeWrapper<{}>
  Review: ResolverTypeWrapper<Review>
  String: ResolverTypeWrapper<Scalars["String"]>
  User: ResolverTypeWrapper<User>
  core__Purpose: Core__Purpose
  join__FieldSet: ResolverTypeWrapper<Scalars["join__FieldSet"]>
  join__Graph: Join__Graph
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]
  ID: Scalars["ID"]
  Int: Scalars["Int"]
  Product: Product
  Query: {}
  Review: Review
  String: Scalars["String"]
  User: User
  join__FieldSet: Scalars["join__FieldSet"]
}

export type CoreDirectiveArgs = {
  as?: Maybe<Scalars["String"]>
  feature: Scalars["String"]
  for?: Maybe<Core__Purpose>
}

export type CoreDirectiveResolver<Result, Parent, ContextType = any, Args = CoreDirectiveArgs> = DirectiveResolverFn<
  Result,
  Parent,
  ContextType,
  Args
>

export type Join__FieldDirectiveArgs = {
  graph?: Maybe<Join__Graph>
  provides?: Maybe<Scalars["join__FieldSet"]>
  requires?: Maybe<Scalars["join__FieldSet"]>
}

export type Join__FieldDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = Join__FieldDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type Join__GraphDirectiveArgs = {
  name: Scalars["String"]
  url: Scalars["String"]
}

export type Join__GraphDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = Join__GraphDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type Join__OwnerDirectiveArgs = {
  graph: Join__Graph
}

export type Join__OwnerDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = Join__OwnerDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type Join__TypeDirectiveArgs = {
  graph: Join__Graph
  key?: Maybe<Scalars["join__FieldSet"]>
}

export type Join__TypeDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = Join__TypeDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type ProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  price?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes["Review"]>>>, ParentType, ContextType>
  upc?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  me?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>
  topProducts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
    ParentType,
    ContextType,
    RequireFields<QueryTopProductsArgs, "first">
  >
}

export type ReviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Review"] = ResolversParentTypes["Review"],
> = {
  author?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>
  body?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  product?: Resolver<Maybe<ResolversTypes["Product"]>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes["Review"]>>>, ParentType, ContextType>
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export interface Join__FieldSetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["join__FieldSet"], any> {
  name: "join__FieldSet"
}

export type Resolvers<ContextType = any> = {
  Product?: ProductResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Review?: ReviewResolvers<ContextType>
  User?: UserResolvers<ContextType>
  join__FieldSet?: GraphQLScalarType
}

export type DirectiveResolvers<ContextType = any> = {
  core?: CoreDirectiveResolver<any, any, ContextType>
  join__field?: Join__FieldDirectiveResolver<any, any, ContextType>
  join__graph?: Join__GraphDirectiveResolver<any, any, ContextType>
  join__owner?: Join__OwnerDirectiveResolver<any, any, ContextType>
  join__type?: Join__TypeDirectiveResolver<any, any, ContextType>
}
