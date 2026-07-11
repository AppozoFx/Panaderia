import { UpsertUserData, UpsertUserVariables, CreateUnitOfMeasureData, CreateUnitOfMeasureVariables, CreateIngredientData, CreateIngredientVariables, CreateSupplierData, CreateSupplierVariables, CreateProductData, CreateProductVariables, ListRolesData, GetCurrentUserData, ListUnitsOfMeasureData, ListIngredientsData, ListSuppliersData, ListProductsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useUpsertUser(options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;
export function useUpsertUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpsertUserData, FirebaseError, UpsertUserVariables>): UseDataConnectMutationResult<UpsertUserData, UpsertUserVariables>;

export function useCreateUnitOfMeasure(options?: useDataConnectMutationOptions<CreateUnitOfMeasureData, FirebaseError, CreateUnitOfMeasureVariables>): UseDataConnectMutationResult<CreateUnitOfMeasureData, CreateUnitOfMeasureVariables>;
export function useCreateUnitOfMeasure(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUnitOfMeasureData, FirebaseError, CreateUnitOfMeasureVariables>): UseDataConnectMutationResult<CreateUnitOfMeasureData, CreateUnitOfMeasureVariables>;

export function useCreateIngredient(options?: useDataConnectMutationOptions<CreateIngredientData, FirebaseError, CreateIngredientVariables>): UseDataConnectMutationResult<CreateIngredientData, CreateIngredientVariables>;
export function useCreateIngredient(dc: DataConnect, options?: useDataConnectMutationOptions<CreateIngredientData, FirebaseError, CreateIngredientVariables>): UseDataConnectMutationResult<CreateIngredientData, CreateIngredientVariables>;

export function useCreateSupplier(options?: useDataConnectMutationOptions<CreateSupplierData, FirebaseError, CreateSupplierVariables>): UseDataConnectMutationResult<CreateSupplierData, CreateSupplierVariables>;
export function useCreateSupplier(dc: DataConnect, options?: useDataConnectMutationOptions<CreateSupplierData, FirebaseError, CreateSupplierVariables>): UseDataConnectMutationResult<CreateSupplierData, CreateSupplierVariables>;

export function useCreateProduct(options?: useDataConnectMutationOptions<CreateProductData, FirebaseError, CreateProductVariables>): UseDataConnectMutationResult<CreateProductData, CreateProductVariables>;
export function useCreateProduct(dc: DataConnect, options?: useDataConnectMutationOptions<CreateProductData, FirebaseError, CreateProductVariables>): UseDataConnectMutationResult<CreateProductData, CreateProductVariables>;

export function useListRoles(options?: useDataConnectQueryOptions<ListRolesData>): UseDataConnectQueryResult<ListRolesData, undefined>;
export function useListRoles(dc: DataConnect, options?: useDataConnectQueryOptions<ListRolesData>): UseDataConnectQueryResult<ListRolesData, undefined>;

export function useGetCurrentUser(options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, undefined>;
export function useGetCurrentUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetCurrentUserData>): UseDataConnectQueryResult<GetCurrentUserData, undefined>;

export function useListUnitsOfMeasure(options?: useDataConnectQueryOptions<ListUnitsOfMeasureData>): UseDataConnectQueryResult<ListUnitsOfMeasureData, undefined>;
export function useListUnitsOfMeasure(dc: DataConnect, options?: useDataConnectQueryOptions<ListUnitsOfMeasureData>): UseDataConnectQueryResult<ListUnitsOfMeasureData, undefined>;

export function useListIngredients(options?: useDataConnectQueryOptions<ListIngredientsData>): UseDataConnectQueryResult<ListIngredientsData, undefined>;
export function useListIngredients(dc: DataConnect, options?: useDataConnectQueryOptions<ListIngredientsData>): UseDataConnectQueryResult<ListIngredientsData, undefined>;

export function useListSuppliers(options?: useDataConnectQueryOptions<ListSuppliersData>): UseDataConnectQueryResult<ListSuppliersData, undefined>;
export function useListSuppliers(dc: DataConnect, options?: useDataConnectQueryOptions<ListSuppliersData>): UseDataConnectQueryResult<ListSuppliersData, undefined>;

export function useListProducts(options?: useDataConnectQueryOptions<ListProductsData>): UseDataConnectQueryResult<ListProductsData, undefined>;
export function useListProducts(dc: DataConnect, options?: useDataConnectQueryOptions<ListProductsData>): UseDataConnectQueryResult<ListProductsData, undefined>;
