# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `app`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetBusinessConfig*](#getbusinessconfig)
  - [*ListRoles*](#listroles)
  - [*GetCurrentUser*](#getcurrentuser)
  - [*ListUnitsOfMeasure*](#listunitsofmeasure)
  - [*ListIngredients*](#listingredients)
  - [*ListSuppliers*](#listsuppliers)
  - [*ListProducts*](#listproducts)
  - [*ListPurchases*](#listpurchases)
  - [*GetPurchase*](#getpurchase)
  - [*ListInventoryMovements*](#listinventorymovements)
  - [*ListRecipes*](#listrecipes)
  - [*GetRecipe*](#getrecipe)
  - [*ListProductionBatches*](#listproductionbatches)
- [**Mutations**](#mutations)
  - [*UpsertBusinessConfig*](#upsertbusinessconfig)
  - [*UpsertUser*](#upsertuser)
  - [*CreateUnitOfMeasure*](#createunitofmeasure)
  - [*CreateIngredient*](#createingredient)
  - [*CreateSupplier*](#createsupplier)
  - [*CreateProduct*](#createproduct)
  - [*CreatePurchase*](#createpurchase)
  - [*AddPurchaseItem*](#addpurchaseitem)
  - [*AdjustInventory*](#adjustinventory)
  - [*CreateRecipe*](#createrecipe)
  - [*AddRecipeItem*](#addrecipeitem)
  - [*CreateProductionBatch*](#createproductionbatch)
  - [*RegisterProductionConsumption*](#registerproductionconsumption)
  - [*RegisterProductionOutput*](#registerproductionoutput)
  - [*UpdateProductCost*](#updateproductcost)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `app`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `app` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetBusinessConfig
You can execute the `GetBusinessConfig` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getBusinessConfig(vars: GetBusinessConfigVariables, options?: ExecuteQueryOptions): QueryPromise<GetBusinessConfigData, GetBusinessConfigVariables>;

interface GetBusinessConfigRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetBusinessConfigVariables): QueryRef<GetBusinessConfigData, GetBusinessConfigVariables>;
}
export const getBusinessConfigRef: GetBusinessConfigRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getBusinessConfig(dc: DataConnect, vars: GetBusinessConfigVariables, options?: ExecuteQueryOptions): QueryPromise<GetBusinessConfigData, GetBusinessConfigVariables>;

interface GetBusinessConfigRef {
  ...
  (dc: DataConnect, vars: GetBusinessConfigVariables): QueryRef<GetBusinessConfigData, GetBusinessConfigVariables>;
}
export const getBusinessConfigRef: GetBusinessConfigRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getBusinessConfigRef:
```typescript
const name = getBusinessConfigRef.operationName;
console.log(name);
```

### Variables
The `GetBusinessConfig` query requires an argument of type `GetBusinessConfigVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetBusinessConfigVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetBusinessConfig` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetBusinessConfigData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetBusinessConfig`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getBusinessConfig, GetBusinessConfigVariables } from '@dataconnect/generated';

// The `GetBusinessConfig` query requires an argument of type `GetBusinessConfigVariables`:
const getBusinessConfigVars: GetBusinessConfigVariables = {
  id: ..., 
};

// Call the `getBusinessConfig()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getBusinessConfig(getBusinessConfigVars);
// Variables can be defined inline as well.
const { data } = await getBusinessConfig({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getBusinessConfig(dataConnect, getBusinessConfigVars);

console.log(data.businessConfig);

// Or, you can use the `Promise` API.
getBusinessConfig(getBusinessConfigVars).then((response) => {
  const data = response.data;
  console.log(data.businessConfig);
});
```

### Using `GetBusinessConfig`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getBusinessConfigRef, GetBusinessConfigVariables } from '@dataconnect/generated';

// The `GetBusinessConfig` query requires an argument of type `GetBusinessConfigVariables`:
const getBusinessConfigVars: GetBusinessConfigVariables = {
  id: ..., 
};

// Call the `getBusinessConfigRef()` function to get a reference to the query.
const ref = getBusinessConfigRef(getBusinessConfigVars);
// Variables can be defined inline as well.
const ref = getBusinessConfigRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getBusinessConfigRef(dataConnect, getBusinessConfigVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.businessConfig);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.businessConfig);
});
```

## ListRoles
You can execute the `ListRoles` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listRoles(options?: ExecuteQueryOptions): QueryPromise<ListRolesData, undefined>;

interface ListRolesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListRolesData, undefined>;
}
export const listRolesRef: ListRolesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listRoles(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListRolesData, undefined>;

interface ListRolesRef {
  ...
  (dc: DataConnect): QueryRef<ListRolesData, undefined>;
}
export const listRolesRef: ListRolesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listRolesRef:
```typescript
const name = listRolesRef.operationName;
console.log(name);
```

### Variables
The `ListRoles` query has no variables.
### Return Type
Recall that executing the `ListRoles` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListRolesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListRolesData {
  roles: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & Role_Key)[];
}
```
### Using `ListRoles`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listRoles } from '@dataconnect/generated';


// Call the `listRoles()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listRoles();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listRoles(dataConnect);

console.log(data.roles);

// Or, you can use the `Promise` API.
listRoles().then((response) => {
  const data = response.data;
  console.log(data.roles);
});
```

### Using `ListRoles`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listRolesRef } from '@dataconnect/generated';


// Call the `listRolesRef()` function to get a reference to the query.
const ref = listRolesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listRolesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.roles);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.roles);
});
```

## GetCurrentUser
You can execute the `GetCurrentUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCurrentUser(options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, undefined>;

interface GetCurrentUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetCurrentUserData, undefined>;
}
export const getCurrentUserRef: GetCurrentUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCurrentUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetCurrentUserData, undefined>;

interface GetCurrentUserRef {
  ...
  (dc: DataConnect): QueryRef<GetCurrentUserData, undefined>;
}
export const getCurrentUserRef: GetCurrentUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCurrentUserRef:
```typescript
const name = getCurrentUserRef.operationName;
console.log(name);
```

### Variables
The `GetCurrentUser` query has no variables.
### Return Type
Recall that executing the `GetCurrentUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCurrentUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetCurrentUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCurrentUser } from '@dataconnect/generated';


// Call the `getCurrentUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCurrentUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCurrentUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getCurrentUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetCurrentUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCurrentUserRef } from '@dataconnect/generated';


// Call the `getCurrentUserRef()` function to get a reference to the query.
const ref = getCurrentUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCurrentUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListUnitsOfMeasure
You can execute the `ListUnitsOfMeasure` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listUnitsOfMeasure(options?: ExecuteQueryOptions): QueryPromise<ListUnitsOfMeasureData, undefined>;

interface ListUnitsOfMeasureRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUnitsOfMeasureData, undefined>;
}
export const listUnitsOfMeasureRef: ListUnitsOfMeasureRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUnitsOfMeasure(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUnitsOfMeasureData, undefined>;

interface ListUnitsOfMeasureRef {
  ...
  (dc: DataConnect): QueryRef<ListUnitsOfMeasureData, undefined>;
}
export const listUnitsOfMeasureRef: ListUnitsOfMeasureRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUnitsOfMeasureRef:
```typescript
const name = listUnitsOfMeasureRef.operationName;
console.log(name);
```

### Variables
The `ListUnitsOfMeasure` query has no variables.
### Return Type
Recall that executing the `ListUnitsOfMeasure` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUnitsOfMeasureData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUnitsOfMeasureData {
  unitOfMeasures: ({
    id: UUIDString;
    name: string;
    abbreviation: string;
    type?: string | null;
  } & UnitOfMeasure_Key)[];
}
```
### Using `ListUnitsOfMeasure`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUnitsOfMeasure } from '@dataconnect/generated';


// Call the `listUnitsOfMeasure()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUnitsOfMeasure();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUnitsOfMeasure(dataConnect);

console.log(data.unitOfMeasures);

// Or, you can use the `Promise` API.
listUnitsOfMeasure().then((response) => {
  const data = response.data;
  console.log(data.unitOfMeasures);
});
```

### Using `ListUnitsOfMeasure`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUnitsOfMeasureRef } from '@dataconnect/generated';


// Call the `listUnitsOfMeasureRef()` function to get a reference to the query.
const ref = listUnitsOfMeasureRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUnitsOfMeasureRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.unitOfMeasures);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.unitOfMeasures);
});
```

## ListIngredients
You can execute the `ListIngredients` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listIngredients(options?: ExecuteQueryOptions): QueryPromise<ListIngredientsData, undefined>;

interface ListIngredientsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListIngredientsData, undefined>;
}
export const listIngredientsRef: ListIngredientsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listIngredients(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListIngredientsData, undefined>;

interface ListIngredientsRef {
  ...
  (dc: DataConnect): QueryRef<ListIngredientsData, undefined>;
}
export const listIngredientsRef: ListIngredientsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listIngredientsRef:
```typescript
const name = listIngredientsRef.operationName;
console.log(name);
```

### Variables
The `ListIngredients` query has no variables.
### Return Type
Recall that executing the `ListIngredients` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListIngredientsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListIngredients`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listIngredients } from '@dataconnect/generated';


// Call the `listIngredients()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listIngredients();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listIngredients(dataConnect);

console.log(data.ingredients);

// Or, you can use the `Promise` API.
listIngredients().then((response) => {
  const data = response.data;
  console.log(data.ingredients);
});
```

### Using `ListIngredients`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listIngredientsRef } from '@dataconnect/generated';


// Call the `listIngredientsRef()` function to get a reference to the query.
const ref = listIngredientsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listIngredientsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.ingredients);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.ingredients);
});
```

## ListSuppliers
You can execute the `ListSuppliers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listSuppliers(options?: ExecuteQueryOptions): QueryPromise<ListSuppliersData, undefined>;

interface ListSuppliersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSuppliersData, undefined>;
}
export const listSuppliersRef: ListSuppliersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listSuppliers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSuppliersData, undefined>;

interface ListSuppliersRef {
  ...
  (dc: DataConnect): QueryRef<ListSuppliersData, undefined>;
}
export const listSuppliersRef: ListSuppliersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listSuppliersRef:
```typescript
const name = listSuppliersRef.operationName;
console.log(name);
```

### Variables
The `ListSuppliers` query has no variables.
### Return Type
Recall that executing the `ListSuppliers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListSuppliersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListSuppliersData {
  suppliers: ({
    id: UUIDString;
    name: string;
    phone?: string | null;
    isFormal: boolean;
  } & Supplier_Key)[];
}
```
### Using `ListSuppliers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listSuppliers } from '@dataconnect/generated';


// Call the `listSuppliers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listSuppliers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listSuppliers(dataConnect);

console.log(data.suppliers);

// Or, you can use the `Promise` API.
listSuppliers().then((response) => {
  const data = response.data;
  console.log(data.suppliers);
});
```

### Using `ListSuppliers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listSuppliersRef } from '@dataconnect/generated';


// Call the `listSuppliersRef()` function to get a reference to the query.
const ref = listSuppliersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listSuppliersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.suppliers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.suppliers);
});
```

## ListProducts
You can execute the `ListProducts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listProducts(options?: ExecuteQueryOptions): QueryPromise<ListProductsData, undefined>;

interface ListProductsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProductsData, undefined>;
}
export const listProductsRef: ListProductsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProducts(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListProductsData, undefined>;

interface ListProductsRef {
  ...
  (dc: DataConnect): QueryRef<ListProductsData, undefined>;
}
export const listProductsRef: ListProductsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProductsRef:
```typescript
const name = listProductsRef.operationName;
console.log(name);
```

### Variables
The `ListProducts` query has no variables.
### Return Type
Recall that executing the `ListProducts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProductsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListProductsData {
  products: ({
    id: UUIDString;
    name: string;
    saleUnit?: string | null;
    salePrice: number;
    currentCost?: number | null;
  } & Product_Key)[];
}
```
### Using `ListProducts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProducts } from '@dataconnect/generated';


// Call the `listProducts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProducts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProducts(dataConnect);

console.log(data.products);

// Or, you can use the `Promise` API.
listProducts().then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

### Using `ListProducts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProductsRef } from '@dataconnect/generated';


// Call the `listProductsRef()` function to get a reference to the query.
const ref = listProductsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProductsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.products);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.products);
});
```

## ListPurchases
You can execute the `ListPurchases` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPurchases(options?: ExecuteQueryOptions): QueryPromise<ListPurchasesData, undefined>;

interface ListPurchasesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPurchasesData, undefined>;
}
export const listPurchasesRef: ListPurchasesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPurchases(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListPurchasesData, undefined>;

interface ListPurchasesRef {
  ...
  (dc: DataConnect): QueryRef<ListPurchasesData, undefined>;
}
export const listPurchasesRef: ListPurchasesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPurchasesRef:
```typescript
const name = listPurchasesRef.operationName;
console.log(name);
```

### Variables
The `ListPurchases` query has no variables.
### Return Type
Recall that executing the `ListPurchases` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPurchasesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListPurchases`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPurchases } from '@dataconnect/generated';


// Call the `listPurchases()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPurchases();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPurchases(dataConnect);

console.log(data.purchases);

// Or, you can use the `Promise` API.
listPurchases().then((response) => {
  const data = response.data;
  console.log(data.purchases);
});
```

### Using `ListPurchases`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPurchasesRef } from '@dataconnect/generated';


// Call the `listPurchasesRef()` function to get a reference to the query.
const ref = listPurchasesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPurchasesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.purchases);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.purchases);
});
```

## GetPurchase
You can execute the `GetPurchase` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPurchase(vars: GetPurchaseVariables, options?: ExecuteQueryOptions): QueryPromise<GetPurchaseData, GetPurchaseVariables>;

interface GetPurchaseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPurchaseVariables): QueryRef<GetPurchaseData, GetPurchaseVariables>;
}
export const getPurchaseRef: GetPurchaseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPurchase(dc: DataConnect, vars: GetPurchaseVariables, options?: ExecuteQueryOptions): QueryPromise<GetPurchaseData, GetPurchaseVariables>;

interface GetPurchaseRef {
  ...
  (dc: DataConnect, vars: GetPurchaseVariables): QueryRef<GetPurchaseData, GetPurchaseVariables>;
}
export const getPurchaseRef: GetPurchaseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPurchaseRef:
```typescript
const name = getPurchaseRef.operationName;
console.log(name);
```

### Variables
The `GetPurchase` query requires an argument of type `GetPurchaseVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetPurchaseVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetPurchase` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPurchaseData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetPurchase`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPurchase, GetPurchaseVariables } from '@dataconnect/generated';

// The `GetPurchase` query requires an argument of type `GetPurchaseVariables`:
const getPurchaseVars: GetPurchaseVariables = {
  id: ..., 
};

// Call the `getPurchase()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPurchase(getPurchaseVars);
// Variables can be defined inline as well.
const { data } = await getPurchase({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPurchase(dataConnect, getPurchaseVars);

console.log(data.purchase);

// Or, you can use the `Promise` API.
getPurchase(getPurchaseVars).then((response) => {
  const data = response.data;
  console.log(data.purchase);
});
```

### Using `GetPurchase`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPurchaseRef, GetPurchaseVariables } from '@dataconnect/generated';

// The `GetPurchase` query requires an argument of type `GetPurchaseVariables`:
const getPurchaseVars: GetPurchaseVariables = {
  id: ..., 
};

// Call the `getPurchaseRef()` function to get a reference to the query.
const ref = getPurchaseRef(getPurchaseVars);
// Variables can be defined inline as well.
const ref = getPurchaseRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPurchaseRef(dataConnect, getPurchaseVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.purchase);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.purchase);
});
```

## ListInventoryMovements
You can execute the `ListInventoryMovements` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listInventoryMovements(vars?: ListInventoryMovementsVariables, options?: ExecuteQueryOptions): QueryPromise<ListInventoryMovementsData, ListInventoryMovementsVariables>;

interface ListInventoryMovementsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: ListInventoryMovementsVariables): QueryRef<ListInventoryMovementsData, ListInventoryMovementsVariables>;
}
export const listInventoryMovementsRef: ListInventoryMovementsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listInventoryMovements(dc: DataConnect, vars?: ListInventoryMovementsVariables, options?: ExecuteQueryOptions): QueryPromise<ListInventoryMovementsData, ListInventoryMovementsVariables>;

interface ListInventoryMovementsRef {
  ...
  (dc: DataConnect, vars?: ListInventoryMovementsVariables): QueryRef<ListInventoryMovementsData, ListInventoryMovementsVariables>;
}
export const listInventoryMovementsRef: ListInventoryMovementsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listInventoryMovementsRef:
```typescript
const name = listInventoryMovementsRef.operationName;
console.log(name);
```

### Variables
The `ListInventoryMovements` query has an optional argument of type `ListInventoryMovementsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListInventoryMovementsVariables {
  limit?: number | null;
}
```
### Return Type
Recall that executing the `ListInventoryMovements` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListInventoryMovementsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListInventoryMovements`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listInventoryMovements, ListInventoryMovementsVariables } from '@dataconnect/generated';

// The `ListInventoryMovements` query has an optional argument of type `ListInventoryMovementsVariables`:
const listInventoryMovementsVars: ListInventoryMovementsVariables = {
  limit: ..., // optional
};

// Call the `listInventoryMovements()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listInventoryMovements(listInventoryMovementsVars);
// Variables can be defined inline as well.
const { data } = await listInventoryMovements({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListInventoryMovementsVariables` argument.
const { data } = await listInventoryMovements();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listInventoryMovements(dataConnect, listInventoryMovementsVars);

console.log(data.inventoryMovements);

// Or, you can use the `Promise` API.
listInventoryMovements(listInventoryMovementsVars).then((response) => {
  const data = response.data;
  console.log(data.inventoryMovements);
});
```

### Using `ListInventoryMovements`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listInventoryMovementsRef, ListInventoryMovementsVariables } from '@dataconnect/generated';

// The `ListInventoryMovements` query has an optional argument of type `ListInventoryMovementsVariables`:
const listInventoryMovementsVars: ListInventoryMovementsVariables = {
  limit: ..., // optional
};

// Call the `listInventoryMovementsRef()` function to get a reference to the query.
const ref = listInventoryMovementsRef(listInventoryMovementsVars);
// Variables can be defined inline as well.
const ref = listInventoryMovementsRef({ limit: ..., });
// Since all variables are optional for this query, you can omit the `ListInventoryMovementsVariables` argument.
const ref = listInventoryMovementsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listInventoryMovementsRef(dataConnect, listInventoryMovementsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.inventoryMovements);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.inventoryMovements);
});
```

## ListRecipes
You can execute the `ListRecipes` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listRecipes(options?: ExecuteQueryOptions): QueryPromise<ListRecipesData, undefined>;

interface ListRecipesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListRecipesData, undefined>;
}
export const listRecipesRef: ListRecipesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listRecipes(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListRecipesData, undefined>;

interface ListRecipesRef {
  ...
  (dc: DataConnect): QueryRef<ListRecipesData, undefined>;
}
export const listRecipesRef: ListRecipesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listRecipesRef:
```typescript
const name = listRecipesRef.operationName;
console.log(name);
```

### Variables
The `ListRecipes` query has no variables.
### Return Type
Recall that executing the `ListRecipes` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListRecipesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListRecipes`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listRecipes } from '@dataconnect/generated';


// Call the `listRecipes()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listRecipes();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listRecipes(dataConnect);

console.log(data.recipes);

// Or, you can use the `Promise` API.
listRecipes().then((response) => {
  const data = response.data;
  console.log(data.recipes);
});
```

### Using `ListRecipes`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listRecipesRef } from '@dataconnect/generated';


// Call the `listRecipesRef()` function to get a reference to the query.
const ref = listRecipesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listRecipesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.recipes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.recipes);
});
```

## GetRecipe
You can execute the `GetRecipe` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getRecipe(vars: GetRecipeVariables, options?: ExecuteQueryOptions): QueryPromise<GetRecipeData, GetRecipeVariables>;

interface GetRecipeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetRecipeVariables): QueryRef<GetRecipeData, GetRecipeVariables>;
}
export const getRecipeRef: GetRecipeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getRecipe(dc: DataConnect, vars: GetRecipeVariables, options?: ExecuteQueryOptions): QueryPromise<GetRecipeData, GetRecipeVariables>;

interface GetRecipeRef {
  ...
  (dc: DataConnect, vars: GetRecipeVariables): QueryRef<GetRecipeData, GetRecipeVariables>;
}
export const getRecipeRef: GetRecipeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getRecipeRef:
```typescript
const name = getRecipeRef.operationName;
console.log(name);
```

### Variables
The `GetRecipe` query requires an argument of type `GetRecipeVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetRecipeVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetRecipe` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetRecipeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetRecipe`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getRecipe, GetRecipeVariables } from '@dataconnect/generated';

// The `GetRecipe` query requires an argument of type `GetRecipeVariables`:
const getRecipeVars: GetRecipeVariables = {
  id: ..., 
};

// Call the `getRecipe()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getRecipe(getRecipeVars);
// Variables can be defined inline as well.
const { data } = await getRecipe({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getRecipe(dataConnect, getRecipeVars);

console.log(data.recipe);

// Or, you can use the `Promise` API.
getRecipe(getRecipeVars).then((response) => {
  const data = response.data;
  console.log(data.recipe);
});
```

### Using `GetRecipe`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getRecipeRef, GetRecipeVariables } from '@dataconnect/generated';

// The `GetRecipe` query requires an argument of type `GetRecipeVariables`:
const getRecipeVars: GetRecipeVariables = {
  id: ..., 
};

// Call the `getRecipeRef()` function to get a reference to the query.
const ref = getRecipeRef(getRecipeVars);
// Variables can be defined inline as well.
const ref = getRecipeRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getRecipeRef(dataConnect, getRecipeVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.recipe);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.recipe);
});
```

## ListProductionBatches
You can execute the `ListProductionBatches` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listProductionBatches(options?: ExecuteQueryOptions): QueryPromise<ListProductionBatchesData, undefined>;

interface ListProductionBatchesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProductionBatchesData, undefined>;
}
export const listProductionBatchesRef: ListProductionBatchesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProductionBatches(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListProductionBatchesData, undefined>;

interface ListProductionBatchesRef {
  ...
  (dc: DataConnect): QueryRef<ListProductionBatchesData, undefined>;
}
export const listProductionBatchesRef: ListProductionBatchesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProductionBatchesRef:
```typescript
const name = listProductionBatchesRef.operationName;
console.log(name);
```

### Variables
The `ListProductionBatches` query has no variables.
### Return Type
Recall that executing the `ListProductionBatches` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProductionBatchesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListProductionBatches`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProductionBatches } from '@dataconnect/generated';


// Call the `listProductionBatches()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProductionBatches();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProductionBatches(dataConnect);

console.log(data.productionBatches);

// Or, you can use the `Promise` API.
listProductionBatches().then((response) => {
  const data = response.data;
  console.log(data.productionBatches);
});
```

### Using `ListProductionBatches`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProductionBatchesRef } from '@dataconnect/generated';


// Call the `listProductionBatchesRef()` function to get a reference to the query.
const ref = listProductionBatchesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProductionBatchesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.productionBatches);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.productionBatches);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `app` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## UpsertBusinessConfig
You can execute the `UpsertBusinessConfig` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
upsertBusinessConfig(vars: UpsertBusinessConfigVariables): MutationPromise<UpsertBusinessConfigData, UpsertBusinessConfigVariables>;

interface UpsertBusinessConfigRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertBusinessConfigVariables): MutationRef<UpsertBusinessConfigData, UpsertBusinessConfigVariables>;
}
export const upsertBusinessConfigRef: UpsertBusinessConfigRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertBusinessConfig(dc: DataConnect, vars: UpsertBusinessConfigVariables): MutationPromise<UpsertBusinessConfigData, UpsertBusinessConfigVariables>;

interface UpsertBusinessConfigRef {
  ...
  (dc: DataConnect, vars: UpsertBusinessConfigVariables): MutationRef<UpsertBusinessConfigData, UpsertBusinessConfigVariables>;
}
export const upsertBusinessConfigRef: UpsertBusinessConfigRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertBusinessConfigRef:
```typescript
const name = upsertBusinessConfigRef.operationName;
console.log(name);
```

### Variables
The `UpsertBusinessConfig` mutation requires an argument of type `UpsertBusinessConfigVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertBusinessConfigVariables {
  id: UUIDString;
  businessName: string;
  currency: string;
  ticketWidthMm: number;
  activePaymentMethods?: string[] | null;
  taxesEnabled: boolean;
}
```
### Return Type
Recall that executing the `UpsertBusinessConfig` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertBusinessConfigData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertBusinessConfigData {
  businessConfig_upsert: BusinessConfig_Key;
}
```
### Using `UpsertBusinessConfig`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertBusinessConfig, UpsertBusinessConfigVariables } from '@dataconnect/generated';

// The `UpsertBusinessConfig` mutation requires an argument of type `UpsertBusinessConfigVariables`:
const upsertBusinessConfigVars: UpsertBusinessConfigVariables = {
  id: ..., 
  businessName: ..., 
  currency: ..., 
  ticketWidthMm: ..., 
  activePaymentMethods: ..., // optional
  taxesEnabled: ..., 
};

// Call the `upsertBusinessConfig()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertBusinessConfig(upsertBusinessConfigVars);
// Variables can be defined inline as well.
const { data } = await upsertBusinessConfig({ id: ..., businessName: ..., currency: ..., ticketWidthMm: ..., activePaymentMethods: ..., taxesEnabled: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertBusinessConfig(dataConnect, upsertBusinessConfigVars);

console.log(data.businessConfig_upsert);

// Or, you can use the `Promise` API.
upsertBusinessConfig(upsertBusinessConfigVars).then((response) => {
  const data = response.data;
  console.log(data.businessConfig_upsert);
});
```

### Using `UpsertBusinessConfig`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertBusinessConfigRef, UpsertBusinessConfigVariables } from '@dataconnect/generated';

// The `UpsertBusinessConfig` mutation requires an argument of type `UpsertBusinessConfigVariables`:
const upsertBusinessConfigVars: UpsertBusinessConfigVariables = {
  id: ..., 
  businessName: ..., 
  currency: ..., 
  ticketWidthMm: ..., 
  activePaymentMethods: ..., // optional
  taxesEnabled: ..., 
};

// Call the `upsertBusinessConfigRef()` function to get a reference to the mutation.
const ref = upsertBusinessConfigRef(upsertBusinessConfigVars);
// Variables can be defined inline as well.
const ref = upsertBusinessConfigRef({ id: ..., businessName: ..., currency: ..., ticketWidthMm: ..., activePaymentMethods: ..., taxesEnabled: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertBusinessConfigRef(dataConnect, upsertBusinessConfigVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.businessConfig_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.businessConfig_upsert);
});
```

## UpsertUser
You can execute the `UpsertUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
upsertUser(vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface UpsertUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
}
export const upsertUserRef: UpsertUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertUser(dc: DataConnect, vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface UpsertUserRef {
  ...
  (dc: DataConnect, vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
}
export const upsertUserRef: UpsertUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertUserRef:
```typescript
const name = upsertUserRef.operationName;
console.log(name);
```

### Variables
The `UpsertUser` mutation requires an argument of type `UpsertUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertUserVariables {
  name: string;
  email: string;
  roleId: UUIDString;
}
```
### Return Type
Recall that executing the `UpsertUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertUserData {
  user_upsert: User_Key;
}
```
### Using `UpsertUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertUser, UpsertUserVariables } from '@dataconnect/generated';

// The `UpsertUser` mutation requires an argument of type `UpsertUserVariables`:
const upsertUserVars: UpsertUserVariables = {
  name: ..., 
  email: ..., 
  roleId: ..., 
};

// Call the `upsertUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertUser(upsertUserVars);
// Variables can be defined inline as well.
const { data } = await upsertUser({ name: ..., email: ..., roleId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertUser(dataConnect, upsertUserVars);

console.log(data.user_upsert);

// Or, you can use the `Promise` API.
upsertUser(upsertUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_upsert);
});
```

### Using `UpsertUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertUserRef, UpsertUserVariables } from '@dataconnect/generated';

// The `UpsertUser` mutation requires an argument of type `UpsertUserVariables`:
const upsertUserVars: UpsertUserVariables = {
  name: ..., 
  email: ..., 
  roleId: ..., 
};

// Call the `upsertUserRef()` function to get a reference to the mutation.
const ref = upsertUserRef(upsertUserVars);
// Variables can be defined inline as well.
const ref = upsertUserRef({ name: ..., email: ..., roleId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertUserRef(dataConnect, upsertUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_upsert);
});
```

## CreateUnitOfMeasure
You can execute the `CreateUnitOfMeasure` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUnitOfMeasure(vars: CreateUnitOfMeasureVariables): MutationPromise<CreateUnitOfMeasureData, CreateUnitOfMeasureVariables>;

interface CreateUnitOfMeasureRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUnitOfMeasureVariables): MutationRef<CreateUnitOfMeasureData, CreateUnitOfMeasureVariables>;
}
export const createUnitOfMeasureRef: CreateUnitOfMeasureRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUnitOfMeasure(dc: DataConnect, vars: CreateUnitOfMeasureVariables): MutationPromise<CreateUnitOfMeasureData, CreateUnitOfMeasureVariables>;

interface CreateUnitOfMeasureRef {
  ...
  (dc: DataConnect, vars: CreateUnitOfMeasureVariables): MutationRef<CreateUnitOfMeasureData, CreateUnitOfMeasureVariables>;
}
export const createUnitOfMeasureRef: CreateUnitOfMeasureRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUnitOfMeasureRef:
```typescript
const name = createUnitOfMeasureRef.operationName;
console.log(name);
```

### Variables
The `CreateUnitOfMeasure` mutation requires an argument of type `CreateUnitOfMeasureVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUnitOfMeasureVariables {
  name: string;
  abbreviation: string;
  type?: string | null;
}
```
### Return Type
Recall that executing the `CreateUnitOfMeasure` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUnitOfMeasureData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUnitOfMeasureData {
  unitOfMeasure_insert: UnitOfMeasure_Key;
}
```
### Using `CreateUnitOfMeasure`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUnitOfMeasure, CreateUnitOfMeasureVariables } from '@dataconnect/generated';

// The `CreateUnitOfMeasure` mutation requires an argument of type `CreateUnitOfMeasureVariables`:
const createUnitOfMeasureVars: CreateUnitOfMeasureVariables = {
  name: ..., 
  abbreviation: ..., 
  type: ..., // optional
};

// Call the `createUnitOfMeasure()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUnitOfMeasure(createUnitOfMeasureVars);
// Variables can be defined inline as well.
const { data } = await createUnitOfMeasure({ name: ..., abbreviation: ..., type: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUnitOfMeasure(dataConnect, createUnitOfMeasureVars);

console.log(data.unitOfMeasure_insert);

// Or, you can use the `Promise` API.
createUnitOfMeasure(createUnitOfMeasureVars).then((response) => {
  const data = response.data;
  console.log(data.unitOfMeasure_insert);
});
```

### Using `CreateUnitOfMeasure`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUnitOfMeasureRef, CreateUnitOfMeasureVariables } from '@dataconnect/generated';

// The `CreateUnitOfMeasure` mutation requires an argument of type `CreateUnitOfMeasureVariables`:
const createUnitOfMeasureVars: CreateUnitOfMeasureVariables = {
  name: ..., 
  abbreviation: ..., 
  type: ..., // optional
};

// Call the `createUnitOfMeasureRef()` function to get a reference to the mutation.
const ref = createUnitOfMeasureRef(createUnitOfMeasureVars);
// Variables can be defined inline as well.
const ref = createUnitOfMeasureRef({ name: ..., abbreviation: ..., type: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUnitOfMeasureRef(dataConnect, createUnitOfMeasureVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.unitOfMeasure_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.unitOfMeasure_insert);
});
```

## CreateIngredient
You can execute the `CreateIngredient` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createIngredient(vars: CreateIngredientVariables): MutationPromise<CreateIngredientData, CreateIngredientVariables>;

interface CreateIngredientRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateIngredientVariables): MutationRef<CreateIngredientData, CreateIngredientVariables>;
}
export const createIngredientRef: CreateIngredientRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createIngredient(dc: DataConnect, vars: CreateIngredientVariables): MutationPromise<CreateIngredientData, CreateIngredientVariables>;

interface CreateIngredientRef {
  ...
  (dc: DataConnect, vars: CreateIngredientVariables): MutationRef<CreateIngredientData, CreateIngredientVariables>;
}
export const createIngredientRef: CreateIngredientRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createIngredientRef:
```typescript
const name = createIngredientRef.operationName;
console.log(name);
```

### Variables
The `CreateIngredient` mutation requires an argument of type `CreateIngredientVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateIngredientVariables {
  name: string;
  unitOfMeasureId: UUIDString;
  referenceCost?: number | null;
  minStock?: number | null;
}
```
### Return Type
Recall that executing the `CreateIngredient` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateIngredientData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateIngredientData {
  ingredient_insert: Ingredient_Key;
}
```
### Using `CreateIngredient`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createIngredient, CreateIngredientVariables } from '@dataconnect/generated';

// The `CreateIngredient` mutation requires an argument of type `CreateIngredientVariables`:
const createIngredientVars: CreateIngredientVariables = {
  name: ..., 
  unitOfMeasureId: ..., 
  referenceCost: ..., // optional
  minStock: ..., // optional
};

// Call the `createIngredient()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createIngredient(createIngredientVars);
// Variables can be defined inline as well.
const { data } = await createIngredient({ name: ..., unitOfMeasureId: ..., referenceCost: ..., minStock: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createIngredient(dataConnect, createIngredientVars);

console.log(data.ingredient_insert);

// Or, you can use the `Promise` API.
createIngredient(createIngredientVars).then((response) => {
  const data = response.data;
  console.log(data.ingredient_insert);
});
```

### Using `CreateIngredient`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createIngredientRef, CreateIngredientVariables } from '@dataconnect/generated';

// The `CreateIngredient` mutation requires an argument of type `CreateIngredientVariables`:
const createIngredientVars: CreateIngredientVariables = {
  name: ..., 
  unitOfMeasureId: ..., 
  referenceCost: ..., // optional
  minStock: ..., // optional
};

// Call the `createIngredientRef()` function to get a reference to the mutation.
const ref = createIngredientRef(createIngredientVars);
// Variables can be defined inline as well.
const ref = createIngredientRef({ name: ..., unitOfMeasureId: ..., referenceCost: ..., minStock: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createIngredientRef(dataConnect, createIngredientVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.ingredient_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.ingredient_insert);
});
```

## CreateSupplier
You can execute the `CreateSupplier` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createSupplier(vars: CreateSupplierVariables): MutationPromise<CreateSupplierData, CreateSupplierVariables>;

interface CreateSupplierRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSupplierVariables): MutationRef<CreateSupplierData, CreateSupplierVariables>;
}
export const createSupplierRef: CreateSupplierRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createSupplier(dc: DataConnect, vars: CreateSupplierVariables): MutationPromise<CreateSupplierData, CreateSupplierVariables>;

interface CreateSupplierRef {
  ...
  (dc: DataConnect, vars: CreateSupplierVariables): MutationRef<CreateSupplierData, CreateSupplierVariables>;
}
export const createSupplierRef: CreateSupplierRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createSupplierRef:
```typescript
const name = createSupplierRef.operationName;
console.log(name);
```

### Variables
The `CreateSupplier` mutation requires an argument of type `CreateSupplierVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateSupplierVariables {
  name: string;
  phone?: string | null;
  taxId?: string | null;
  legalName?: string | null;
  isFormal?: boolean | null;
}
```
### Return Type
Recall that executing the `CreateSupplier` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateSupplierData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateSupplierData {
  supplier_insert: Supplier_Key;
}
```
### Using `CreateSupplier`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createSupplier, CreateSupplierVariables } from '@dataconnect/generated';

// The `CreateSupplier` mutation requires an argument of type `CreateSupplierVariables`:
const createSupplierVars: CreateSupplierVariables = {
  name: ..., 
  phone: ..., // optional
  taxId: ..., // optional
  legalName: ..., // optional
  isFormal: ..., // optional
};

// Call the `createSupplier()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createSupplier(createSupplierVars);
// Variables can be defined inline as well.
const { data } = await createSupplier({ name: ..., phone: ..., taxId: ..., legalName: ..., isFormal: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createSupplier(dataConnect, createSupplierVars);

console.log(data.supplier_insert);

// Or, you can use the `Promise` API.
createSupplier(createSupplierVars).then((response) => {
  const data = response.data;
  console.log(data.supplier_insert);
});
```

### Using `CreateSupplier`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createSupplierRef, CreateSupplierVariables } from '@dataconnect/generated';

// The `CreateSupplier` mutation requires an argument of type `CreateSupplierVariables`:
const createSupplierVars: CreateSupplierVariables = {
  name: ..., 
  phone: ..., // optional
  taxId: ..., // optional
  legalName: ..., // optional
  isFormal: ..., // optional
};

// Call the `createSupplierRef()` function to get a reference to the mutation.
const ref = createSupplierRef(createSupplierVars);
// Variables can be defined inline as well.
const ref = createSupplierRef({ name: ..., phone: ..., taxId: ..., legalName: ..., isFormal: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createSupplierRef(dataConnect, createSupplierVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.supplier_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.supplier_insert);
});
```

## CreateProduct
You can execute the `CreateProduct` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createProduct(vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface CreateProductRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
}
export const createProductRef: CreateProductRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createProduct(dc: DataConnect, vars: CreateProductVariables): MutationPromise<CreateProductData, CreateProductVariables>;

interface CreateProductRef {
  ...
  (dc: DataConnect, vars: CreateProductVariables): MutationRef<CreateProductData, CreateProductVariables>;
}
export const createProductRef: CreateProductRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createProductRef:
```typescript
const name = createProductRef.operationName;
console.log(name);
```

### Variables
The `CreateProduct` mutation requires an argument of type `CreateProductVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateProductVariables {
  name: string;
  saleUnit?: string | null;
  salePrice: number;
}
```
### Return Type
Recall that executing the `CreateProduct` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateProductData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateProductData {
  product_insert: Product_Key;
}
```
### Using `CreateProduct`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createProduct, CreateProductVariables } from '@dataconnect/generated';

// The `CreateProduct` mutation requires an argument of type `CreateProductVariables`:
const createProductVars: CreateProductVariables = {
  name: ..., 
  saleUnit: ..., // optional
  salePrice: ..., 
};

// Call the `createProduct()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createProduct(createProductVars);
// Variables can be defined inline as well.
const { data } = await createProduct({ name: ..., saleUnit: ..., salePrice: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createProduct(dataConnect, createProductVars);

console.log(data.product_insert);

// Or, you can use the `Promise` API.
createProduct(createProductVars).then((response) => {
  const data = response.data;
  console.log(data.product_insert);
});
```

### Using `CreateProduct`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createProductRef, CreateProductVariables } from '@dataconnect/generated';

// The `CreateProduct` mutation requires an argument of type `CreateProductVariables`:
const createProductVars: CreateProductVariables = {
  name: ..., 
  saleUnit: ..., // optional
  salePrice: ..., 
};

// Call the `createProductRef()` function to get a reference to the mutation.
const ref = createProductRef(createProductVars);
// Variables can be defined inline as well.
const ref = createProductRef({ name: ..., saleUnit: ..., salePrice: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createProductRef(dataConnect, createProductVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_insert);
});
```

## CreatePurchase
You can execute the `CreatePurchase` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createPurchase(vars: CreatePurchaseVariables): MutationPromise<CreatePurchaseData, CreatePurchaseVariables>;

interface CreatePurchaseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePurchaseVariables): MutationRef<CreatePurchaseData, CreatePurchaseVariables>;
}
export const createPurchaseRef: CreatePurchaseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPurchase(dc: DataConnect, vars: CreatePurchaseVariables): MutationPromise<CreatePurchaseData, CreatePurchaseVariables>;

interface CreatePurchaseRef {
  ...
  (dc: DataConnect, vars: CreatePurchaseVariables): MutationRef<CreatePurchaseData, CreatePurchaseVariables>;
}
export const createPurchaseRef: CreatePurchaseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPurchaseRef:
```typescript
const name = createPurchaseRef.operationName;
console.log(name);
```

### Variables
The `CreatePurchase` mutation requires an argument of type `CreatePurchaseVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePurchaseVariables {
  supplierId?: UUIDString | null;
  date: DateString;
  subtotal: number;
  taxAmount: number;
  total: number;
  paymentMethod?: string | null;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `CreatePurchase` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePurchaseData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePurchaseData {
  purchase_insert: Purchase_Key;
}
```
### Using `CreatePurchase`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPurchase, CreatePurchaseVariables } from '@dataconnect/generated';

// The `CreatePurchase` mutation requires an argument of type `CreatePurchaseVariables`:
const createPurchaseVars: CreatePurchaseVariables = {
  supplierId: ..., // optional
  date: ..., 
  subtotal: ..., 
  taxAmount: ..., 
  total: ..., 
  paymentMethod: ..., // optional
  notes: ..., // optional
};

// Call the `createPurchase()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPurchase(createPurchaseVars);
// Variables can be defined inline as well.
const { data } = await createPurchase({ supplierId: ..., date: ..., subtotal: ..., taxAmount: ..., total: ..., paymentMethod: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPurchase(dataConnect, createPurchaseVars);

console.log(data.purchase_insert);

// Or, you can use the `Promise` API.
createPurchase(createPurchaseVars).then((response) => {
  const data = response.data;
  console.log(data.purchase_insert);
});
```

### Using `CreatePurchase`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPurchaseRef, CreatePurchaseVariables } from '@dataconnect/generated';

// The `CreatePurchase` mutation requires an argument of type `CreatePurchaseVariables`:
const createPurchaseVars: CreatePurchaseVariables = {
  supplierId: ..., // optional
  date: ..., 
  subtotal: ..., 
  taxAmount: ..., 
  total: ..., 
  paymentMethod: ..., // optional
  notes: ..., // optional
};

// Call the `createPurchaseRef()` function to get a reference to the mutation.
const ref = createPurchaseRef(createPurchaseVars);
// Variables can be defined inline as well.
const ref = createPurchaseRef({ supplierId: ..., date: ..., subtotal: ..., taxAmount: ..., total: ..., paymentMethod: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPurchaseRef(dataConnect, createPurchaseVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.purchase_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.purchase_insert);
});
```

## AddPurchaseItem
You can execute the `AddPurchaseItem` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addPurchaseItem(vars: AddPurchaseItemVariables): MutationPromise<AddPurchaseItemData, AddPurchaseItemVariables>;

interface AddPurchaseItemRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddPurchaseItemVariables): MutationRef<AddPurchaseItemData, AddPurchaseItemVariables>;
}
export const addPurchaseItemRef: AddPurchaseItemRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addPurchaseItem(dc: DataConnect, vars: AddPurchaseItemVariables): MutationPromise<AddPurchaseItemData, AddPurchaseItemVariables>;

interface AddPurchaseItemRef {
  ...
  (dc: DataConnect, vars: AddPurchaseItemVariables): MutationRef<AddPurchaseItemData, AddPurchaseItemVariables>;
}
export const addPurchaseItemRef: AddPurchaseItemRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addPurchaseItemRef:
```typescript
const name = addPurchaseItemRef.operationName;
console.log(name);
```

### Variables
The `AddPurchaseItem` mutation requires an argument of type `AddPurchaseItemVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddPurchaseItemVariables {
  purchaseId: UUIDString;
  ingredientId: UUIDString;
  quantity: number;
  unitCost: number;
  totalCost: number;
}
```
### Return Type
Recall that executing the `AddPurchaseItem` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddPurchaseItemData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddPurchaseItemData {
  purchaseItem_insert: PurchaseItem_Key;
  inventoryMovement_insert: InventoryMovement_Key;
}
```
### Using `AddPurchaseItem`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addPurchaseItem, AddPurchaseItemVariables } from '@dataconnect/generated';

// The `AddPurchaseItem` mutation requires an argument of type `AddPurchaseItemVariables`:
const addPurchaseItemVars: AddPurchaseItemVariables = {
  purchaseId: ..., 
  ingredientId: ..., 
  quantity: ..., 
  unitCost: ..., 
  totalCost: ..., 
};

// Call the `addPurchaseItem()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addPurchaseItem(addPurchaseItemVars);
// Variables can be defined inline as well.
const { data } = await addPurchaseItem({ purchaseId: ..., ingredientId: ..., quantity: ..., unitCost: ..., totalCost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addPurchaseItem(dataConnect, addPurchaseItemVars);

console.log(data.purchaseItem_insert);
console.log(data.inventoryMovement_insert);

// Or, you can use the `Promise` API.
addPurchaseItem(addPurchaseItemVars).then((response) => {
  const data = response.data;
  console.log(data.purchaseItem_insert);
  console.log(data.inventoryMovement_insert);
});
```

### Using `AddPurchaseItem`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addPurchaseItemRef, AddPurchaseItemVariables } from '@dataconnect/generated';

// The `AddPurchaseItem` mutation requires an argument of type `AddPurchaseItemVariables`:
const addPurchaseItemVars: AddPurchaseItemVariables = {
  purchaseId: ..., 
  ingredientId: ..., 
  quantity: ..., 
  unitCost: ..., 
  totalCost: ..., 
};

// Call the `addPurchaseItemRef()` function to get a reference to the mutation.
const ref = addPurchaseItemRef(addPurchaseItemVars);
// Variables can be defined inline as well.
const ref = addPurchaseItemRef({ purchaseId: ..., ingredientId: ..., quantity: ..., unitCost: ..., totalCost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addPurchaseItemRef(dataConnect, addPurchaseItemVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.purchaseItem_insert);
console.log(data.inventoryMovement_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.purchaseItem_insert);
  console.log(data.inventoryMovement_insert);
});
```

## AdjustInventory
You can execute the `AdjustInventory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
adjustInventory(vars: AdjustInventoryVariables): MutationPromise<AdjustInventoryData, AdjustInventoryVariables>;

interface AdjustInventoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AdjustInventoryVariables): MutationRef<AdjustInventoryData, AdjustInventoryVariables>;
}
export const adjustInventoryRef: AdjustInventoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
adjustInventory(dc: DataConnect, vars: AdjustInventoryVariables): MutationPromise<AdjustInventoryData, AdjustInventoryVariables>;

interface AdjustInventoryRef {
  ...
  (dc: DataConnect, vars: AdjustInventoryVariables): MutationRef<AdjustInventoryData, AdjustInventoryVariables>;
}
export const adjustInventoryRef: AdjustInventoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the adjustInventoryRef:
```typescript
const name = adjustInventoryRef.operationName;
console.log(name);
```

### Variables
The `AdjustInventory` mutation requires an argument of type `AdjustInventoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AdjustInventoryVariables {
  itemType: string;
  ingredientId?: UUIDString | null;
  productId?: UUIDString | null;
  movementType: string;
  quantity: number;
  reason: string;
}
```
### Return Type
Recall that executing the `AdjustInventory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AdjustInventoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AdjustInventoryData {
  inventoryMovement_insert: InventoryMovement_Key;
}
```
### Using `AdjustInventory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, adjustInventory, AdjustInventoryVariables } from '@dataconnect/generated';

// The `AdjustInventory` mutation requires an argument of type `AdjustInventoryVariables`:
const adjustInventoryVars: AdjustInventoryVariables = {
  itemType: ..., 
  ingredientId: ..., // optional
  productId: ..., // optional
  movementType: ..., 
  quantity: ..., 
  reason: ..., 
};

// Call the `adjustInventory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await adjustInventory(adjustInventoryVars);
// Variables can be defined inline as well.
const { data } = await adjustInventory({ itemType: ..., ingredientId: ..., productId: ..., movementType: ..., quantity: ..., reason: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await adjustInventory(dataConnect, adjustInventoryVars);

console.log(data.inventoryMovement_insert);

// Or, you can use the `Promise` API.
adjustInventory(adjustInventoryVars).then((response) => {
  const data = response.data;
  console.log(data.inventoryMovement_insert);
});
```

### Using `AdjustInventory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, adjustInventoryRef, AdjustInventoryVariables } from '@dataconnect/generated';

// The `AdjustInventory` mutation requires an argument of type `AdjustInventoryVariables`:
const adjustInventoryVars: AdjustInventoryVariables = {
  itemType: ..., 
  ingredientId: ..., // optional
  productId: ..., // optional
  movementType: ..., 
  quantity: ..., 
  reason: ..., 
};

// Call the `adjustInventoryRef()` function to get a reference to the mutation.
const ref = adjustInventoryRef(adjustInventoryVars);
// Variables can be defined inline as well.
const ref = adjustInventoryRef({ itemType: ..., ingredientId: ..., productId: ..., movementType: ..., quantity: ..., reason: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = adjustInventoryRef(dataConnect, adjustInventoryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.inventoryMovement_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.inventoryMovement_insert);
});
```

## CreateRecipe
You can execute the `CreateRecipe` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createRecipe(vars: CreateRecipeVariables): MutationPromise<CreateRecipeData, CreateRecipeVariables>;

interface CreateRecipeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateRecipeVariables): MutationRef<CreateRecipeData, CreateRecipeVariables>;
}
export const createRecipeRef: CreateRecipeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createRecipe(dc: DataConnect, vars: CreateRecipeVariables): MutationPromise<CreateRecipeData, CreateRecipeVariables>;

interface CreateRecipeRef {
  ...
  (dc: DataConnect, vars: CreateRecipeVariables): MutationRef<CreateRecipeData, CreateRecipeVariables>;
}
export const createRecipeRef: CreateRecipeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createRecipeRef:
```typescript
const name = createRecipeRef.operationName;
console.log(name);
```

### Variables
The `CreateRecipe` mutation requires an argument of type `CreateRecipeVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateRecipeVariables {
  productId: UUIDString;
  name: string;
  expectedYield: number;
  yieldUnit?: string | null;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `CreateRecipe` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateRecipeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateRecipeData {
  recipe_insert: Recipe_Key;
}
```
### Using `CreateRecipe`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createRecipe, CreateRecipeVariables } from '@dataconnect/generated';

// The `CreateRecipe` mutation requires an argument of type `CreateRecipeVariables`:
const createRecipeVars: CreateRecipeVariables = {
  productId: ..., 
  name: ..., 
  expectedYield: ..., 
  yieldUnit: ..., // optional
  notes: ..., // optional
};

// Call the `createRecipe()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createRecipe(createRecipeVars);
// Variables can be defined inline as well.
const { data } = await createRecipe({ productId: ..., name: ..., expectedYield: ..., yieldUnit: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createRecipe(dataConnect, createRecipeVars);

console.log(data.recipe_insert);

// Or, you can use the `Promise` API.
createRecipe(createRecipeVars).then((response) => {
  const data = response.data;
  console.log(data.recipe_insert);
});
```

### Using `CreateRecipe`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createRecipeRef, CreateRecipeVariables } from '@dataconnect/generated';

// The `CreateRecipe` mutation requires an argument of type `CreateRecipeVariables`:
const createRecipeVars: CreateRecipeVariables = {
  productId: ..., 
  name: ..., 
  expectedYield: ..., 
  yieldUnit: ..., // optional
  notes: ..., // optional
};

// Call the `createRecipeRef()` function to get a reference to the mutation.
const ref = createRecipeRef(createRecipeVars);
// Variables can be defined inline as well.
const ref = createRecipeRef({ productId: ..., name: ..., expectedYield: ..., yieldUnit: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createRecipeRef(dataConnect, createRecipeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.recipe_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.recipe_insert);
});
```

## AddRecipeItem
You can execute the `AddRecipeItem` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addRecipeItem(vars: AddRecipeItemVariables): MutationPromise<AddRecipeItemData, AddRecipeItemVariables>;

interface AddRecipeItemRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddRecipeItemVariables): MutationRef<AddRecipeItemData, AddRecipeItemVariables>;
}
export const addRecipeItemRef: AddRecipeItemRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addRecipeItem(dc: DataConnect, vars: AddRecipeItemVariables): MutationPromise<AddRecipeItemData, AddRecipeItemVariables>;

interface AddRecipeItemRef {
  ...
  (dc: DataConnect, vars: AddRecipeItemVariables): MutationRef<AddRecipeItemData, AddRecipeItemVariables>;
}
export const addRecipeItemRef: AddRecipeItemRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addRecipeItemRef:
```typescript
const name = addRecipeItemRef.operationName;
console.log(name);
```

### Variables
The `AddRecipeItem` mutation requires an argument of type `AddRecipeItemVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddRecipeItemVariables {
  recipeId: UUIDString;
  ingredientId: UUIDString;
  quantity: number;
  unitOfMeasureId: UUIDString;
}
```
### Return Type
Recall that executing the `AddRecipeItem` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddRecipeItemData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddRecipeItemData {
  recipeItem_insert: RecipeItem_Key;
}
```
### Using `AddRecipeItem`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addRecipeItem, AddRecipeItemVariables } from '@dataconnect/generated';

// The `AddRecipeItem` mutation requires an argument of type `AddRecipeItemVariables`:
const addRecipeItemVars: AddRecipeItemVariables = {
  recipeId: ..., 
  ingredientId: ..., 
  quantity: ..., 
  unitOfMeasureId: ..., 
};

// Call the `addRecipeItem()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addRecipeItem(addRecipeItemVars);
// Variables can be defined inline as well.
const { data } = await addRecipeItem({ recipeId: ..., ingredientId: ..., quantity: ..., unitOfMeasureId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addRecipeItem(dataConnect, addRecipeItemVars);

console.log(data.recipeItem_insert);

// Or, you can use the `Promise` API.
addRecipeItem(addRecipeItemVars).then((response) => {
  const data = response.data;
  console.log(data.recipeItem_insert);
});
```

### Using `AddRecipeItem`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addRecipeItemRef, AddRecipeItemVariables } from '@dataconnect/generated';

// The `AddRecipeItem` mutation requires an argument of type `AddRecipeItemVariables`:
const addRecipeItemVars: AddRecipeItemVariables = {
  recipeId: ..., 
  ingredientId: ..., 
  quantity: ..., 
  unitOfMeasureId: ..., 
};

// Call the `addRecipeItemRef()` function to get a reference to the mutation.
const ref = addRecipeItemRef(addRecipeItemVars);
// Variables can be defined inline as well.
const ref = addRecipeItemRef({ recipeId: ..., ingredientId: ..., quantity: ..., unitOfMeasureId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addRecipeItemRef(dataConnect, addRecipeItemVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.recipeItem_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.recipeItem_insert);
});
```

## CreateProductionBatch
You can execute the `CreateProductionBatch` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createProductionBatch(vars: CreateProductionBatchVariables): MutationPromise<CreateProductionBatchData, CreateProductionBatchVariables>;

interface CreateProductionBatchRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProductionBatchVariables): MutationRef<CreateProductionBatchData, CreateProductionBatchVariables>;
}
export const createProductionBatchRef: CreateProductionBatchRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createProductionBatch(dc: DataConnect, vars: CreateProductionBatchVariables): MutationPromise<CreateProductionBatchData, CreateProductionBatchVariables>;

interface CreateProductionBatchRef {
  ...
  (dc: DataConnect, vars: CreateProductionBatchVariables): MutationRef<CreateProductionBatchData, CreateProductionBatchVariables>;
}
export const createProductionBatchRef: CreateProductionBatchRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createProductionBatchRef:
```typescript
const name = createProductionBatchRef.operationName;
console.log(name);
```

### Variables
The `CreateProductionBatch` mutation requires an argument of type `CreateProductionBatchVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateProductionBatchVariables {
  recipeId: UUIDString;
  productId: UUIDString;
  date: DateString;
  plannedQuantity: number;
  actualQuantity: number;
  batchCost: number;
  unitCost: number;
}
```
### Return Type
Recall that executing the `CreateProductionBatch` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateProductionBatchData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateProductionBatchData {
  productionBatch_insert: ProductionBatch_Key;
}
```
### Using `CreateProductionBatch`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createProductionBatch, CreateProductionBatchVariables } from '@dataconnect/generated';

// The `CreateProductionBatch` mutation requires an argument of type `CreateProductionBatchVariables`:
const createProductionBatchVars: CreateProductionBatchVariables = {
  recipeId: ..., 
  productId: ..., 
  date: ..., 
  plannedQuantity: ..., 
  actualQuantity: ..., 
  batchCost: ..., 
  unitCost: ..., 
};

// Call the `createProductionBatch()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createProductionBatch(createProductionBatchVars);
// Variables can be defined inline as well.
const { data } = await createProductionBatch({ recipeId: ..., productId: ..., date: ..., plannedQuantity: ..., actualQuantity: ..., batchCost: ..., unitCost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createProductionBatch(dataConnect, createProductionBatchVars);

console.log(data.productionBatch_insert);

// Or, you can use the `Promise` API.
createProductionBatch(createProductionBatchVars).then((response) => {
  const data = response.data;
  console.log(data.productionBatch_insert);
});
```

### Using `CreateProductionBatch`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createProductionBatchRef, CreateProductionBatchVariables } from '@dataconnect/generated';

// The `CreateProductionBatch` mutation requires an argument of type `CreateProductionBatchVariables`:
const createProductionBatchVars: CreateProductionBatchVariables = {
  recipeId: ..., 
  productId: ..., 
  date: ..., 
  plannedQuantity: ..., 
  actualQuantity: ..., 
  batchCost: ..., 
  unitCost: ..., 
};

// Call the `createProductionBatchRef()` function to get a reference to the mutation.
const ref = createProductionBatchRef(createProductionBatchVars);
// Variables can be defined inline as well.
const ref = createProductionBatchRef({ recipeId: ..., productId: ..., date: ..., plannedQuantity: ..., actualQuantity: ..., batchCost: ..., unitCost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createProductionBatchRef(dataConnect, createProductionBatchVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.productionBatch_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.productionBatch_insert);
});
```

## RegisterProductionConsumption
You can execute the `RegisterProductionConsumption` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
registerProductionConsumption(vars: RegisterProductionConsumptionVariables): MutationPromise<RegisterProductionConsumptionData, RegisterProductionConsumptionVariables>;

interface RegisterProductionConsumptionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RegisterProductionConsumptionVariables): MutationRef<RegisterProductionConsumptionData, RegisterProductionConsumptionVariables>;
}
export const registerProductionConsumptionRef: RegisterProductionConsumptionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
registerProductionConsumption(dc: DataConnect, vars: RegisterProductionConsumptionVariables): MutationPromise<RegisterProductionConsumptionData, RegisterProductionConsumptionVariables>;

interface RegisterProductionConsumptionRef {
  ...
  (dc: DataConnect, vars: RegisterProductionConsumptionVariables): MutationRef<RegisterProductionConsumptionData, RegisterProductionConsumptionVariables>;
}
export const registerProductionConsumptionRef: RegisterProductionConsumptionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the registerProductionConsumptionRef:
```typescript
const name = registerProductionConsumptionRef.operationName;
console.log(name);
```

### Variables
The `RegisterProductionConsumption` mutation requires an argument of type `RegisterProductionConsumptionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RegisterProductionConsumptionVariables {
  ingredientId: UUIDString;
  quantity: number;
  unitCost?: number | null;
  sourceId: UUIDString;
}
```
### Return Type
Recall that executing the `RegisterProductionConsumption` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RegisterProductionConsumptionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RegisterProductionConsumptionData {
  inventoryMovement_insert: InventoryMovement_Key;
}
```
### Using `RegisterProductionConsumption`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, registerProductionConsumption, RegisterProductionConsumptionVariables } from '@dataconnect/generated';

// The `RegisterProductionConsumption` mutation requires an argument of type `RegisterProductionConsumptionVariables`:
const registerProductionConsumptionVars: RegisterProductionConsumptionVariables = {
  ingredientId: ..., 
  quantity: ..., 
  unitCost: ..., // optional
  sourceId: ..., 
};

// Call the `registerProductionConsumption()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await registerProductionConsumption(registerProductionConsumptionVars);
// Variables can be defined inline as well.
const { data } = await registerProductionConsumption({ ingredientId: ..., quantity: ..., unitCost: ..., sourceId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await registerProductionConsumption(dataConnect, registerProductionConsumptionVars);

console.log(data.inventoryMovement_insert);

// Or, you can use the `Promise` API.
registerProductionConsumption(registerProductionConsumptionVars).then((response) => {
  const data = response.data;
  console.log(data.inventoryMovement_insert);
});
```

### Using `RegisterProductionConsumption`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, registerProductionConsumptionRef, RegisterProductionConsumptionVariables } from '@dataconnect/generated';

// The `RegisterProductionConsumption` mutation requires an argument of type `RegisterProductionConsumptionVariables`:
const registerProductionConsumptionVars: RegisterProductionConsumptionVariables = {
  ingredientId: ..., 
  quantity: ..., 
  unitCost: ..., // optional
  sourceId: ..., 
};

// Call the `registerProductionConsumptionRef()` function to get a reference to the mutation.
const ref = registerProductionConsumptionRef(registerProductionConsumptionVars);
// Variables can be defined inline as well.
const ref = registerProductionConsumptionRef({ ingredientId: ..., quantity: ..., unitCost: ..., sourceId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = registerProductionConsumptionRef(dataConnect, registerProductionConsumptionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.inventoryMovement_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.inventoryMovement_insert);
});
```

## RegisterProductionOutput
You can execute the `RegisterProductionOutput` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
registerProductionOutput(vars: RegisterProductionOutputVariables): MutationPromise<RegisterProductionOutputData, RegisterProductionOutputVariables>;

interface RegisterProductionOutputRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: RegisterProductionOutputVariables): MutationRef<RegisterProductionOutputData, RegisterProductionOutputVariables>;
}
export const registerProductionOutputRef: RegisterProductionOutputRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
registerProductionOutput(dc: DataConnect, vars: RegisterProductionOutputVariables): MutationPromise<RegisterProductionOutputData, RegisterProductionOutputVariables>;

interface RegisterProductionOutputRef {
  ...
  (dc: DataConnect, vars: RegisterProductionOutputVariables): MutationRef<RegisterProductionOutputData, RegisterProductionOutputVariables>;
}
export const registerProductionOutputRef: RegisterProductionOutputRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the registerProductionOutputRef:
```typescript
const name = registerProductionOutputRef.operationName;
console.log(name);
```

### Variables
The `RegisterProductionOutput` mutation requires an argument of type `RegisterProductionOutputVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface RegisterProductionOutputVariables {
  productId: UUIDString;
  quantity: number;
  unitCost?: number | null;
  sourceId: UUIDString;
}
```
### Return Type
Recall that executing the `RegisterProductionOutput` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `RegisterProductionOutputData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface RegisterProductionOutputData {
  inventoryMovement_insert: InventoryMovement_Key;
}
```
### Using `RegisterProductionOutput`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, registerProductionOutput, RegisterProductionOutputVariables } from '@dataconnect/generated';

// The `RegisterProductionOutput` mutation requires an argument of type `RegisterProductionOutputVariables`:
const registerProductionOutputVars: RegisterProductionOutputVariables = {
  productId: ..., 
  quantity: ..., 
  unitCost: ..., // optional
  sourceId: ..., 
};

// Call the `registerProductionOutput()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await registerProductionOutput(registerProductionOutputVars);
// Variables can be defined inline as well.
const { data } = await registerProductionOutput({ productId: ..., quantity: ..., unitCost: ..., sourceId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await registerProductionOutput(dataConnect, registerProductionOutputVars);

console.log(data.inventoryMovement_insert);

// Or, you can use the `Promise` API.
registerProductionOutput(registerProductionOutputVars).then((response) => {
  const data = response.data;
  console.log(data.inventoryMovement_insert);
});
```

### Using `RegisterProductionOutput`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, registerProductionOutputRef, RegisterProductionOutputVariables } from '@dataconnect/generated';

// The `RegisterProductionOutput` mutation requires an argument of type `RegisterProductionOutputVariables`:
const registerProductionOutputVars: RegisterProductionOutputVariables = {
  productId: ..., 
  quantity: ..., 
  unitCost: ..., // optional
  sourceId: ..., 
};

// Call the `registerProductionOutputRef()` function to get a reference to the mutation.
const ref = registerProductionOutputRef(registerProductionOutputVars);
// Variables can be defined inline as well.
const ref = registerProductionOutputRef({ productId: ..., quantity: ..., unitCost: ..., sourceId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = registerProductionOutputRef(dataConnect, registerProductionOutputVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.inventoryMovement_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.inventoryMovement_insert);
});
```

## UpdateProductCost
You can execute the `UpdateProductCost` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateProductCost(vars: UpdateProductCostVariables): MutationPromise<UpdateProductCostData, UpdateProductCostVariables>;

interface UpdateProductCostRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProductCostVariables): MutationRef<UpdateProductCostData, UpdateProductCostVariables>;
}
export const updateProductCostRef: UpdateProductCostRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateProductCost(dc: DataConnect, vars: UpdateProductCostVariables): MutationPromise<UpdateProductCostData, UpdateProductCostVariables>;

interface UpdateProductCostRef {
  ...
  (dc: DataConnect, vars: UpdateProductCostVariables): MutationRef<UpdateProductCostData, UpdateProductCostVariables>;
}
export const updateProductCostRef: UpdateProductCostRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateProductCostRef:
```typescript
const name = updateProductCostRef.operationName;
console.log(name);
```

### Variables
The `UpdateProductCost` mutation requires an argument of type `UpdateProductCostVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateProductCostVariables {
  productId: UUIDString;
  currentCost: number;
}
```
### Return Type
Recall that executing the `UpdateProductCost` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateProductCostData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateProductCostData {
  product_update?: Product_Key | null;
}
```
### Using `UpdateProductCost`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateProductCost, UpdateProductCostVariables } from '@dataconnect/generated';

// The `UpdateProductCost` mutation requires an argument of type `UpdateProductCostVariables`:
const updateProductCostVars: UpdateProductCostVariables = {
  productId: ..., 
  currentCost: ..., 
};

// Call the `updateProductCost()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateProductCost(updateProductCostVars);
// Variables can be defined inline as well.
const { data } = await updateProductCost({ productId: ..., currentCost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateProductCost(dataConnect, updateProductCostVars);

console.log(data.product_update);

// Or, you can use the `Promise` API.
updateProductCost(updateProductCostVars).then((response) => {
  const data = response.data;
  console.log(data.product_update);
});
```

### Using `UpdateProductCost`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateProductCostRef, UpdateProductCostVariables } from '@dataconnect/generated';

// The `UpdateProductCost` mutation requires an argument of type `UpdateProductCostVariables`:
const updateProductCostVars: UpdateProductCostVariables = {
  productId: ..., 
  currentCost: ..., 
};

// Call the `updateProductCostRef()` function to get a reference to the mutation.
const ref = updateProductCostRef(updateProductCostVars);
// Variables can be defined inline as well.
const ref = updateProductCostRef({ productId: ..., currentCost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateProductCostRef(dataConnect, updateProductCostVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.product_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.product_update);
});
```

