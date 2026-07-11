import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddPurchaseItemData {
  purchaseItem_insert: PurchaseItem_Key;
  inventoryMovement_insert: InventoryMovement_Key;
}

export interface AddPurchaseItemVariables {
  purchaseId: UUIDString;
  ingredientId: UUIDString;
  quantity: number;
  unitCost: number;
  totalCost: number;
}

export interface AddRecipeItemData {
  recipeItem_insert: RecipeItem_Key;
}

export interface AddRecipeItemVariables {
  recipeId: UUIDString;
  ingredientId: UUIDString;
  quantity: number;
  unitOfMeasureId: UUIDString;
}

export interface AdjustInventoryData {
  inventoryMovement_insert: InventoryMovement_Key;
}

export interface AdjustInventoryVariables {
  itemType: string;
  ingredientId?: UUIDString | null;
  productId?: UUIDString | null;
  movementType: string;
  quantity: number;
  reason: string;
}

export interface AuditLog_Key {
  id: UUIDString;
  __typename?: 'AuditLog_Key';
}

export interface BusinessConfig_Key {
  id: UUIDString;
  __typename?: 'BusinessConfig_Key';
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

export interface CreateProductionBatchData {
  productionBatch_insert: ProductionBatch_Key;
}

export interface CreateProductionBatchVariables {
  recipeId: UUIDString;
  productId: UUIDString;
  date: DateString;
  plannedQuantity: number;
  actualQuantity: number;
  batchCost: number;
  unitCost: number;
}

export interface CreatePurchaseData {
  purchase_insert: Purchase_Key;
}

export interface CreatePurchaseVariables {
  supplierId?: UUIDString | null;
  date: DateString;
  subtotal: number;
  taxAmount: number;
  total: number;
  paymentMethod?: string | null;
  notes?: string | null;
}

export interface CreateRecipeData {
  recipe_insert: Recipe_Key;
}

export interface CreateRecipeVariables {
  productId: UUIDString;
  name: string;
  expectedYield: number;
  yieldUnit?: string | null;
  notes?: string | null;
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

export interface GetBusinessConfigData {
  businessConfig?: {
    id: UUIDString;
    businessName: string;
    currency: string;
    ticketWidthMm: number;
    activePaymentMethods?: string[] | null;
    taxesEnabled: boolean;
  } & BusinessConfig_Key;
}

export interface GetBusinessConfigVariables {
  id: UUIDString;
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

export interface GetPurchaseData {
  purchase?: {
    id: UUIDString;
    date: DateString;
    status: string;
    subtotal: number;
    taxAmount: number;
    total: number;
    paymentMethod?: string | null;
    notes?: string | null;
    supplier?: {
      id: UUIDString;
      name: string;
    } & Supplier_Key;
    items: ({
      id: UUIDString;
      quantity: number;
      unitCost: number;
      totalCost: number;
      ingredient: {
        id: UUIDString;
        name: string;
        unitOfMeasure: {
          abbreviation: string;
        };
      } & Ingredient_Key;
    } & PurchaseItem_Key)[];
  } & Purchase_Key;
}

export interface GetPurchaseVariables {
  id: UUIDString;
}

export interface GetRecipeData {
  recipe?: {
    id: UUIDString;
    name: string;
    expectedYield: number;
    yieldUnit?: string | null;
    notes?: string | null;
    product: {
      id: UUIDString;
      name: string;
    } & Product_Key;
    items: ({
      id: UUIDString;
      quantity: number;
      ingredient: {
        id: UUIDString;
        name: string;
        referenceCost?: number | null;
        unitOfMeasure: {
          abbreviation: string;
        };
      } & Ingredient_Key;
      unitOfMeasure: {
        abbreviation: string;
      };
    } & RecipeItem_Key)[];
  } & Recipe_Key;
}

export interface GetRecipeVariables {
  id: UUIDString;
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

export interface ListInventoryMovementsData {
  inventoryMovements: ({
    id: UUIDString;
    itemType: string;
    movementType: string;
    quantity: number;
    unitCost?: number | null;
    sourceType?: string | null;
    reason?: string | null;
    createdAt: TimestampString;
    ingredient?: {
      id: UUIDString;
      name: string;
      unitOfMeasure: {
        abbreviation: string;
      };
    } & Ingredient_Key;
    product?: {
      id: UUIDString;
      name: string;
    } & Product_Key;
  } & InventoryMovement_Key)[];
}

export interface ListInventoryMovementsVariables {
  limit?: number | null;
}

export interface ListProductionBatchesData {
  productionBatches: ({
    id: UUIDString;
    date: DateString;
    plannedQuantity: number;
    actualQuantity?: number | null;
    batchCost?: number | null;
    unitCost?: number | null;
    status: string;
    recipe: {
      id: UUIDString;
      name: string;
    } & Recipe_Key;
    product: {
      id: UUIDString;
      name: string;
    } & Product_Key;
  } & ProductionBatch_Key)[];
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

export interface ListPurchasesData {
  purchases: ({
    id: UUIDString;
    date: DateString;
    status: string;
    subtotal: number;
    taxAmount: number;
    total: number;
    paymentMethod?: string | null;
    notes?: string | null;
    supplier?: {
      id: UUIDString;
      name: string;
    } & Supplier_Key;
  } & Purchase_Key)[];
}

export interface ListRecipesData {
  recipes: ({
    id: UUIDString;
    name: string;
    expectedYield: number;
    yieldUnit?: string | null;
    product: {
      id: UUIDString;
      name: string;
    } & Product_Key;
  } & Recipe_Key)[];
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

export interface RegisterProductionConsumptionData {
  inventoryMovement_insert: InventoryMovement_Key;
}

export interface RegisterProductionConsumptionVariables {
  ingredientId: UUIDString;
  quantity: number;
  unitCost?: number | null;
  sourceId: UUIDString;
}

export interface RegisterProductionOutputData {
  inventoryMovement_insert: InventoryMovement_Key;
}

export interface RegisterProductionOutputVariables {
  productId: UUIDString;
  quantity: number;
  unitCost?: number | null;
  sourceId: UUIDString;
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

export interface UpdateProductCostData {
  product_update?: Product_Key | null;
}

export interface UpdateProductCostVariables {
  productId: UUIDString;
  currentCost: number;
}

export interface UpsertBusinessConfigData {
  businessConfig_upsert: BusinessConfig_Key;
}

export interface UpsertBusinessConfigVariables {
  id: UUIDString;
  businessName: string;
  currency: string;
  ticketWidthMm: number;
  activePaymentMethods?: string[] | null;
  taxesEnabled: boolean;
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

interface UpsertBusinessConfigRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertBusinessConfigVariables): MutationRef<UpsertBusinessConfigData, UpsertBusinessConfigVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertBusinessConfigVariables): MutationRef<UpsertBusinessConfigData, UpsertBusinessConfigVariables>;
  operationName: string;
}
export const upsertBusinessConfigRef: UpsertBusinessConfigRef;

export function upsertBusinessConfig(vars: UpsertBusinessConfigVariables): MutationPromise<UpsertBusinessConfigData, UpsertBusinessConfigVariables>;
export function upsertBusinessConfig(dc: DataConnect, vars: UpsertBusinessConfigVariables): MutationPromise<UpsertBusinessConfigData, UpsertBusinessConfigVariables>;

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

interface CreatePurchaseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePurchaseVariables): MutationRef<CreatePurchaseData, CreatePurchaseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreatePurchaseVariables): MutationRef<CreatePurchaseData, CreatePurchaseVariables>;
  operationName: string;
}
export const createPurchaseRef: CreatePurchaseRef;

export function createPurchase(vars: CreatePurchaseVariables): MutationPromise<CreatePurchaseData, CreatePurchaseVariables>;
export function createPurchase(dc: DataConnect, vars: CreatePurchaseVariables): MutationPromise<CreatePurchaseData, CreatePurchaseVariables>;

interface AddPurchaseItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddPurchaseItemVariables): MutationRef<AddPurchaseItemData, AddPurchaseItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddPurchaseItemVariables): MutationRef<AddPurchaseItemData, AddPurchaseItemVariables>;
  operationName: string;
}
export const addPurchaseItemRef: AddPurchaseItemRef;

export function addPurchaseItem(vars: AddPurchaseItemVariables): MutationPromise<AddPurchaseItemData, AddPurchaseItemVariables>;
export function addPurchaseItem(dc: DataConnect, vars: AddPurchaseItemVariables): MutationPromise<AddPurchaseItemData, AddPurchaseItemVariables>;

interface AdjustInventoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdjustInventoryVariables): MutationRef<AdjustInventoryData, AdjustInventoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AdjustInventoryVariables): MutationRef<AdjustInventoryData, AdjustInventoryVariables>;
  operationName: string;
}
export const adjustInventoryRef: AdjustInventoryRef;

export function adjustInventory(vars: AdjustInventoryVariables): MutationPromise<AdjustInventoryData, AdjustInventoryVariables>;
export function adjustInventory(dc: DataConnect, vars: AdjustInventoryVariables): MutationPromise<AdjustInventoryData, AdjustInventoryVariables>;

interface CreateRecipeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateRecipeVariables): MutationRef<CreateRecipeData, CreateRecipeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateRecipeVariables): MutationRef<CreateRecipeData, CreateRecipeVariables>;
  operationName: string;
}
export const createRecipeRef: CreateRecipeRef;

export function createRecipe(vars: CreateRecipeVariables): MutationPromise<CreateRecipeData, CreateRecipeVariables>;
export function createRecipe(dc: DataConnect, vars: CreateRecipeVariables): MutationPromise<CreateRecipeData, CreateRecipeVariables>;

interface AddRecipeItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddRecipeItemVariables): MutationRef<AddRecipeItemData, AddRecipeItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddRecipeItemVariables): MutationRef<AddRecipeItemData, AddRecipeItemVariables>;
  operationName: string;
}
export const addRecipeItemRef: AddRecipeItemRef;

export function addRecipeItem(vars: AddRecipeItemVariables): MutationPromise<AddRecipeItemData, AddRecipeItemVariables>;
export function addRecipeItem(dc: DataConnect, vars: AddRecipeItemVariables): MutationPromise<AddRecipeItemData, AddRecipeItemVariables>;

interface CreateProductionBatchRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProductionBatchVariables): MutationRef<CreateProductionBatchData, CreateProductionBatchVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProductionBatchVariables): MutationRef<CreateProductionBatchData, CreateProductionBatchVariables>;
  operationName: string;
}
export const createProductionBatchRef: CreateProductionBatchRef;

export function createProductionBatch(vars: CreateProductionBatchVariables): MutationPromise<CreateProductionBatchData, CreateProductionBatchVariables>;
export function createProductionBatch(dc: DataConnect, vars: CreateProductionBatchVariables): MutationPromise<CreateProductionBatchData, CreateProductionBatchVariables>;

interface RegisterProductionConsumptionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RegisterProductionConsumptionVariables): MutationRef<RegisterProductionConsumptionData, RegisterProductionConsumptionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RegisterProductionConsumptionVariables): MutationRef<RegisterProductionConsumptionData, RegisterProductionConsumptionVariables>;
  operationName: string;
}
export const registerProductionConsumptionRef: RegisterProductionConsumptionRef;

export function registerProductionConsumption(vars: RegisterProductionConsumptionVariables): MutationPromise<RegisterProductionConsumptionData, RegisterProductionConsumptionVariables>;
export function registerProductionConsumption(dc: DataConnect, vars: RegisterProductionConsumptionVariables): MutationPromise<RegisterProductionConsumptionData, RegisterProductionConsumptionVariables>;

interface RegisterProductionOutputRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: RegisterProductionOutputVariables): MutationRef<RegisterProductionOutputData, RegisterProductionOutputVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: RegisterProductionOutputVariables): MutationRef<RegisterProductionOutputData, RegisterProductionOutputVariables>;
  operationName: string;
}
export const registerProductionOutputRef: RegisterProductionOutputRef;

export function registerProductionOutput(vars: RegisterProductionOutputVariables): MutationPromise<RegisterProductionOutputData, RegisterProductionOutputVariables>;
export function registerProductionOutput(dc: DataConnect, vars: RegisterProductionOutputVariables): MutationPromise<RegisterProductionOutputData, RegisterProductionOutputVariables>;

interface UpdateProductCostRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProductCostVariables): MutationRef<UpdateProductCostData, UpdateProductCostVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateProductCostVariables): MutationRef<UpdateProductCostData, UpdateProductCostVariables>;
  operationName: string;
}
export const updateProductCostRef: UpdateProductCostRef;

export function updateProductCost(vars: UpdateProductCostVariables): MutationPromise<UpdateProductCostData, UpdateProductCostVariables>;
export function updateProductCost(dc: DataConnect, vars: UpdateProductCostVariables): MutationPromise<UpdateProductCostData, UpdateProductCostVariables>;

interface GetBusinessConfigRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetBusinessConfigVariables): QueryRef<GetBusinessConfigData, GetBusinessConfigVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetBusinessConfigVariables): QueryRef<GetBusinessConfigData, GetBusinessConfigVariables>;
  operationName: string;
}
export const getBusinessConfigRef: GetBusinessConfigRef;

export function getBusinessConfig(vars: GetBusinessConfigVariables, options?: ExecuteQueryOptions): QueryPromise<GetBusinessConfigData, GetBusinessConfigVariables>;
export function getBusinessConfig(dc: DataConnect, vars: GetBusinessConfigVariables, options?: ExecuteQueryOptions): QueryPromise<GetBusinessConfigData, GetBusinessConfigVariables>;

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

interface ListPurchasesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPurchasesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPurchasesData, undefined>;
  operationName: string;
}
export const listPurchasesRef: ListPurchasesRef;

export function listPurchases(options?: ExecuteQueryOptions): QueryPromise<ListPurchasesData, undefined>;
export function listPurchases(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListPurchasesData, undefined>;

interface GetPurchaseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPurchaseVariables): QueryRef<GetPurchaseData, GetPurchaseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetPurchaseVariables): QueryRef<GetPurchaseData, GetPurchaseVariables>;
  operationName: string;
}
export const getPurchaseRef: GetPurchaseRef;

export function getPurchase(vars: GetPurchaseVariables, options?: ExecuteQueryOptions): QueryPromise<GetPurchaseData, GetPurchaseVariables>;
export function getPurchase(dc: DataConnect, vars: GetPurchaseVariables, options?: ExecuteQueryOptions): QueryPromise<GetPurchaseData, GetPurchaseVariables>;

interface ListInventoryMovementsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListInventoryMovementsVariables): QueryRef<ListInventoryMovementsData, ListInventoryMovementsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: ListInventoryMovementsVariables): QueryRef<ListInventoryMovementsData, ListInventoryMovementsVariables>;
  operationName: string;
}
export const listInventoryMovementsRef: ListInventoryMovementsRef;

export function listInventoryMovements(vars?: ListInventoryMovementsVariables, options?: ExecuteQueryOptions): QueryPromise<ListInventoryMovementsData, ListInventoryMovementsVariables>;
export function listInventoryMovements(dc: DataConnect, vars?: ListInventoryMovementsVariables, options?: ExecuteQueryOptions): QueryPromise<ListInventoryMovementsData, ListInventoryMovementsVariables>;

interface ListRecipesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListRecipesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListRecipesData, undefined>;
  operationName: string;
}
export const listRecipesRef: ListRecipesRef;

export function listRecipes(options?: ExecuteQueryOptions): QueryPromise<ListRecipesData, undefined>;
export function listRecipes(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListRecipesData, undefined>;

interface GetRecipeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetRecipeVariables): QueryRef<GetRecipeData, GetRecipeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetRecipeVariables): QueryRef<GetRecipeData, GetRecipeVariables>;
  operationName: string;
}
export const getRecipeRef: GetRecipeRef;

export function getRecipe(vars: GetRecipeVariables, options?: ExecuteQueryOptions): QueryPromise<GetRecipeData, GetRecipeVariables>;
export function getRecipe(dc: DataConnect, vars: GetRecipeVariables, options?: ExecuteQueryOptions): QueryPromise<GetRecipeData, GetRecipeVariables>;

interface ListProductionBatchesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProductionBatchesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProductionBatchesData, undefined>;
  operationName: string;
}
export const listProductionBatchesRef: ListProductionBatchesRef;

export function listProductionBatches(options?: ExecuteQueryOptions): QueryPromise<ListProductionBatchesData, undefined>;
export function listProductionBatches(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListProductionBatchesData, undefined>;

