# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useUpsertBusinessConfig, useUpsertUser, useCreateUnitOfMeasure, useCreateIngredient, useCreateSupplier, useCreateProduct, useCreatePurchase, useAddPurchaseItem, useAdjustInventory, useCreateRecipe } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useUpsertBusinessConfig(upsertBusinessConfigVars);

const { data, isPending, isSuccess, isError, error } = useUpsertUser(upsertUserVars);

const { data, isPending, isSuccess, isError, error } = useCreateUnitOfMeasure(createUnitOfMeasureVars);

const { data, isPending, isSuccess, isError, error } = useCreateIngredient(createIngredientVars);

const { data, isPending, isSuccess, isError, error } = useCreateSupplier(createSupplierVars);

const { data, isPending, isSuccess, isError, error } = useCreateProduct(createProductVars);

const { data, isPending, isSuccess, isError, error } = useCreatePurchase(createPurchaseVars);

const { data, isPending, isSuccess, isError, error } = useAddPurchaseItem(addPurchaseItemVars);

const { data, isPending, isSuccess, isError, error } = useAdjustInventory(adjustInventoryVars);

const { data, isPending, isSuccess, isError, error } = useCreateRecipe(createRecipeVars);

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
import { upsertBusinessConfig, upsertUser, createUnitOfMeasure, createIngredient, createSupplier, createProduct, createPurchase, addPurchaseItem, adjustInventory, createRecipe } from '@dataconnect/generated';


// Operation UpsertBusinessConfig:  For variables, look at type UpsertBusinessConfigVars in ../index.d.ts
const { data } = await UpsertBusinessConfig(dataConnect, upsertBusinessConfigVars);

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

// Operation CreatePurchase:  For variables, look at type CreatePurchaseVars in ../index.d.ts
const { data } = await CreatePurchase(dataConnect, createPurchaseVars);

// Operation AddPurchaseItem:  For variables, look at type AddPurchaseItemVars in ../index.d.ts
const { data } = await AddPurchaseItem(dataConnect, addPurchaseItemVars);

// Operation AdjustInventory:  For variables, look at type AdjustInventoryVars in ../index.d.ts
const { data } = await AdjustInventory(dataConnect, adjustInventoryVars);

// Operation CreateRecipe:  For variables, look at type CreateRecipeVars in ../index.d.ts
const { data } = await CreateRecipe(dataConnect, createRecipeVars);


```