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
- [**Mutations**](#mutations)
  - [*UpsertBusinessConfig*](#upsertbusinessconfig)
  - [*UpsertUser*](#upsertuser)
  - [*CreateUnitOfMeasure*](#createunitofmeasure)
  - [*CreateIngredient*](#createingredient)
  - [*CreateSupplier*](#createsupplier)
  - [*CreateProduct*](#createproduct)

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

