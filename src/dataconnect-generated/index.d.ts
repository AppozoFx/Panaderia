import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AuditLog_Key {
  id: UUIDString;
  __typename?: 'AuditLog_Key';
}

export interface CashMovement_Key {
  id: UUIDString;
  __typename?: 'CashMovement_Key';
}

export interface CashSession_Key {
  id: UUIDString;
  __typename?: 'CashSession_Key';
}

export interface CreateIngredientData {
  ingredient_insert: Ingredient_Key;
}

export interface CreateIngredientVariables {
  name: string;
  unitOfMeasureId: UUIDString;
  referenceCost?: number | null;
  minStock?: number | null;
}

export interface CreateProductData {
  product_insert: Product_Key;
}

export interface CreateProductVariables {
  name: string;
  saleUnit?: string | null;
  salePrice: number;
}

export interface CreateSupplierData {
  supplier_insert: Supplier_Key;
}

export interface CreateSupplierVariables {
  name: string;
  phone?: string | null;
  taxId?: string | null;
  legalName?: string | null;
  isFormal?: boolean | null;
}

export interface CreateUnitOfMeasureData {
  unitOfMeasure_insert: UnitOfMeasure_Key;
}

export interface CreateUnitOfMeasureVariables {
  name: string;
  abbreviation: string;
  type?: string | null;
}

export interface Customer_Key {
  id: UUIDString;
  __typename?: 'Customer_Key';
}

export interface Expense_Key {
  id: UUIDString;
  __typename?: 'Expense_Key';
}

export interface GetCurrentUserData {
  user?: {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
    role: {
      name: string;
    };
  } & User_Key;
}

export interface Ingredient_Key {
  id: UUIDString;
  __typename?: 'Ingredient_Key';
}

export interface InventoryMovement_Key {
  id: UUIDString;
  __typename?: 'InventoryMovement_Key';
}

export interface ListIngredientsData {
  ingredients: ({
    id: UUIDString;
    name: string;
    referenceCost?: number | null;
    minStock?: number | null;
    unitOfMeasure: {
      id: UUIDString;
      name: string;
      abbreviation: string;
    } & UnitOfMeasure_Key;
  } & Ingredient_Key)[];
}

export interface ListProductsData {
  products: ({
    id: UUIDString;
    name: string;
    saleUnit?: string | null;
    salePrice: number;
    currentCost?: number | null;
  } & Product_Key)[];
}

export interface ListRolesData {
  roles: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & Role_Key)[];
}

export interface ListSuppliersData {
  suppliers: ({
    id: UUIDString;
    name: string;
    phone?: string | null;
    isFormal: boolean;
  } & Supplier_Key)[];
}

export interface ListUnitsOfMeasureData {
  unitOfMeasures: ({
    id: UUIDString;
    name: string;
    abbreviation: string;
    type?: string | null;
  } & UnitOfMeasure_Key)[];
}

export interface Payment_Key {
  id: UUIDString;
  __typename?: 'Payment_Key';
}

export interface Product_Key {
  id: UUIDString;
  __typename?: 'Product_Key';
}

export interface ProductionBatch_Key {
  id: UUIDString;
  __typename?: 'ProductionBatch_Key';
}

export interface PurchaseItem_Key {
  id: UUIDString;
  __typename?: 'PurchaseItem_Key';
}

export interface Purchase_Key {
  id: UUIDString;
  __typename?: 'Purchase_Key';
}

export interface RecipeItem_Key {
  id: UUIDString;
  __typename?: 'RecipeItem_Key';
}

export interface Recipe_Key {
  id: UUIDString;
  __typename?: 'Recipe_Key';
}

export interface Role_Key {
  id: UUIDString;
  __typename?: 'Role_Key';
}

export interface SaleItem_Key {
  id: UUIDString;
  __typename?: 'SaleItem_Key';
}

export interface Sale_Key {
  id: UUIDString;
  __typename?: 'Sale_Key';
}

export interface Supplier_Key {
  id: UUIDString;
  __typename?: 'Supplier_Key';
}

export interface TaxConfiguration_Key {
  id: UUIDString;
  __typename?: 'TaxConfiguration_Key';
}

export interface UnitOfMeasure_Key {
  id: UUIDString;
  __typename?: 'UnitOfMeasure_Key';
}

export interface UpsertUserData {
  user_upsert: User_Key;
}

export interface UpsertUserVariables {
  name: string;
  email: string;
  roleId: UUIDString;
}

export interface User_Key {
  id: string;
  __typename?: 'User_Key';
}

interface UpsertUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
  operationName: string;
}
export const upsertUserRef: UpsertUserRef;

export function upsertUser(vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;
export function upsertUser(dc: DataConnect, vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface CreateUnitOfMeasureRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUnitOfMeasureVariables): MutationRef<CreateUnitOfMeasureData, CreateUnitOfMeasureVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUnitOfMeasureVariables): MutationRef<CreateUnitOfMeasureData, CreateUnitOfMeasureVariables>;
  operationName: string;
}
export const createUnitOfMeasureRef: CreateUnitOfMeasureRef;

export function createUnitOfMeasure(vars: CreateUnitOfMeasureVariables): MutationPromise<CreateUnitOfMeasureData, CreateUnitOfMeasureVariables>;
export function createUnitOfMeasure(dc: DataConnect, vars: CreateUnitOfMeasureVariables): MutationPromise<CreateUnitOfMeasureData, CreateUnitOfMeasureVariables>;

interface CreateIngredientRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateIngredientVariables): MutationRef<CreateIngredientData, CreateIngredientVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateIngredientVariables): MutationRef<CreateIngredientData, CreateIngredientVariables>;
  operationName: string;
}
export const createIngredientRef: CreateIngredientRef;

export function createIngredient(vars: CreateIngredientVariables): MutationPromise<CreateIngredientData, CreateIngredientVariables>;
export function createIngredient(dc: DataConnect, vars: CreateIngredientVariables): MutationPromise<CreateIngredientData, CreateIngredientVariables>;

interface CreateSupplierRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSupplierVariables): MutationRef<CreateSupplierData, CreateSupplierVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateSupplierVariables): MutationRef<CreateSupplierData, CreateSupplierVariables>;
  operationName: string;
}
export const createSupplierRef: CreateSupplierRef;

export function createSupplier(vars: CreateSupplierVariables): MutationPromise<CreateSupplierData, CreateSupplierVariables>;
export function createSupplier(dc: DataConnect, vars: CreateSupplierVariables): MutationPromise<CreateSupplierData, CreateSupplierVariables>;

interface CreateProductRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
  operationName: string;
}
export const createProductRef: CreateProductRef;

export function createProduct(vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;
export function createProduct(dc: DataConnect, vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface ListRolesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListRolesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListRolesData, undefined>;
  operationName: string;
}
export const listRolesRef: ListRolesRef;

export function listRoles(options?: ExecuteQueryOptions): QueryPromise<ListRolesData, undefined>;
export function listRoles(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListRolesData, undefined>;

interface GetCurrentUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCurrentUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetCurrentUserData, undefined>;
  operationName: string;
}
export const getCurrentUserRef: GetCurrentUserRef;

export function getCurrentUser(options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, undefined>;
export function getCurrentUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, undefined>;

interface ListUnitsOfMeasureRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUnitsOfMeasureData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUnitsOfMeasureData, undefined>;
  operationName: string;
}
export const listUnitsOfMeasureRef: ListUnitsOfMeasureRef;

export function listUnitsOfMeasure(options?: ExecuteQueryOptions): QueryPromise<ListUnitsOfMeasureData, undefined>;
export function listUnitsOfMeasure(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUnitsOfMeasureData, undefined>;

interface ListIngredientsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListIngredientsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListIngredientsData, undefined>;
  operationName: string;
}
export const listIngredientsRef: ListIngredientsRef;

export function listIngredients(options?: ExecuteQueryOptions): QueryPromise<ListIngredientsData, undefined>;
export function listIngredients(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListIngredientsData, undefined>;

interface ListSuppliersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSuppliersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListSuppliersData, undefined>;
  operationName: string;
}
export const listSuppliersRef: ListSuppliersRef;

export function listSuppliers(options?: ExecuteQueryOptions): QueryPromise<ListSuppliersData, undefined>;
export function listSuppliers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSuppliersData, undefined>;

interface ListProductsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProductsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProductsData, undefined>;
  operationName: string;
}
export const listProductsRef: ListProductsRef;

export function listProducts(options?: ExecuteQueryOptions): QueryPromise<ListProductsData, undefined>;
export function listProducts(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListProductsData, undefined>;

