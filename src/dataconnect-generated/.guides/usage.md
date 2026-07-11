# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useUpsertUser, useCreateUnitOfMeasure, useCreateIngredient, useCreateSupplier, useCreateProduct, useListRoles, useGetCurrentUser, useListUnitsOfMeasure, useListIngredients, useListSuppliers } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useUpsertUser(upsertUserVars);

const { data, isPending, isSuccess, isError, error } = useCreateUnitOfMeasure(createUnitOfMeasureVars);

const { data, isPending, isSuccess, isError, error } = useCreateIngredient(createIngredientVars);

const { data, isPending, isSuccess, isError, error } = useCreateSupplier(createSupplierVars);

const { data, isPending, isSuccess, isError, error } = useCreateProduct(createProductVars);

const { data, isPending, isSuccess, isError, error } = useListRoles();

const { data, isPending, isSuccess, isError, error } = useGetCurrentUser();

const { data, isPending, isSuccess, isError, error } = useListUnitsOfMeasure();

const { data, isPending, isSuccess, isError, error } = useListIngredients();

const { data, isPending, isSuccess, isError, error } = useListSuppliers();

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { upsertUser, createUnitOfMeasure, createIngredient, createSupplier, createProduct, listRoles, getCurrentUser, listUnitsOfMeasure, listIngredients, listSuppliers } from '@dataconnect/generated';


// Operation UpsertUser:  For variables, look at type UpsertUserVars in ../index.d.ts
const { data } = await UpsertUser(dataConnect, upsertUserVars);

// Operation CreateUnitOfMeasure:  For variables, look at type CreateUnitOfMeasureVars in ../index.d.ts
const { data } = await CreateUnitOfMeasure(dataConnect, createUnitOfMeasureVars);

// Operation CreateIngredient:  For variables, look at type CreateIngredientVars in ../index.d.ts
const { data } = await CreateIngredient(dataConnect, createIngredientVars);

// Operation CreateSupplier:  For variables, look at type CreateSupplierVars in ../index.d.ts
const { data } = await CreateSupplier(dataConnect, createSupplierVars);

// Operation CreateProduct:  For variables, look at type CreateProductVars in ../index.d.ts
const { data } = await CreateProduct(dataConnect, createProductVars);

// Operation ListRoles: 
const { data } = await ListRoles(dataConnect);

// Operation GetCurrentUser: 
const { data } = await GetCurrentUser(dataConnect);

// Operation ListUnitsOfMeasure: 
const { data } = await ListUnitsOfMeasure(dataConnect);

// Operation ListIngredients: 
const { data } = await ListIngredients(dataConnect);

// Operation ListSuppliers: 
const { data } = await ListSuppliers(dataConnect);


```