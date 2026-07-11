const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs, makeMemoryCacheProvider } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'app',
  service: 'luisitopan',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;
const dataConnectSettings = {
  cacheSettings: {
    cacheProvider: makeMemoryCacheProvider()
  }
};
exports.dataConnectSettings = dataConnectSettings;

const upsertBusinessConfigRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertBusinessConfig', inputVars);
}
upsertBusinessConfigRef.operationName = 'UpsertBusinessConfig';
exports.upsertBusinessConfigRef = upsertBusinessConfigRef;

exports.upsertBusinessConfig = function upsertBusinessConfig(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(upsertBusinessConfigRef(dcInstance, inputVars));
}
;

const upsertUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpsertUser', inputVars);
}
upsertUserRef.operationName = 'UpsertUser';
exports.upsertUserRef = upsertUserRef;

exports.upsertUser = function upsertUser(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(upsertUserRef(dcInstance, inputVars));
}
;

const createUnitOfMeasureRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUnitOfMeasure', inputVars);
}
createUnitOfMeasureRef.operationName = 'CreateUnitOfMeasure';
exports.createUnitOfMeasureRef = createUnitOfMeasureRef;

exports.createUnitOfMeasure = function createUnitOfMeasure(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createUnitOfMeasureRef(dcInstance, inputVars));
}
;

const createIngredientRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateIngredient', inputVars);
}
createIngredientRef.operationName = 'CreateIngredient';
exports.createIngredientRef = createIngredientRef;

exports.createIngredient = function createIngredient(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createIngredientRef(dcInstance, inputVars));
}
;

const createSupplierRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSupplier', inputVars);
}
createSupplierRef.operationName = 'CreateSupplier';
exports.createSupplierRef = createSupplierRef;

exports.createSupplier = function createSupplier(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createSupplierRef(dcInstance, inputVars));
}
;

const createProductRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateProduct', inputVars);
}
createProductRef.operationName = 'CreateProduct';
exports.createProductRef = createProductRef;

exports.createProduct = function createProduct(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createProductRef(dcInstance, inputVars));
}
;

const createPurchaseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePurchase', inputVars);
}
createPurchaseRef.operationName = 'CreatePurchase';
exports.createPurchaseRef = createPurchaseRef;

exports.createPurchase = function createPurchase(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createPurchaseRef(dcInstance, inputVars));
}
;

const addPurchaseItemRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddPurchaseItem', inputVars);
}
addPurchaseItemRef.operationName = 'AddPurchaseItem';
exports.addPurchaseItemRef = addPurchaseItemRef;

exports.addPurchaseItem = function addPurchaseItem(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(addPurchaseItemRef(dcInstance, inputVars));
}
;

const adjustInventoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AdjustInventory', inputVars);
}
adjustInventoryRef.operationName = 'AdjustInventory';
exports.adjustInventoryRef = adjustInventoryRef;

exports.adjustInventory = function adjustInventory(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(adjustInventoryRef(dcInstance, inputVars));
}
;

const createRecipeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateRecipe', inputVars);
}
createRecipeRef.operationName = 'CreateRecipe';
exports.createRecipeRef = createRecipeRef;

exports.createRecipe = function createRecipe(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createRecipeRef(dcInstance, inputVars));
}
;

const addRecipeItemRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddRecipeItem', inputVars);
}
addRecipeItemRef.operationName = 'AddRecipeItem';
exports.addRecipeItemRef = addRecipeItemRef;

exports.addRecipeItem = function addRecipeItem(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(addRecipeItemRef(dcInstance, inputVars));
}
;

const createProductionBatchRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateProductionBatch', inputVars);
}
createProductionBatchRef.operationName = 'CreateProductionBatch';
exports.createProductionBatchRef = createProductionBatchRef;

exports.createProductionBatch = function createProductionBatch(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createProductionBatchRef(dcInstance, inputVars));
}
;

const registerProductionConsumptionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RegisterProductionConsumption', inputVars);
}
registerProductionConsumptionRef.operationName = 'RegisterProductionConsumption';
exports.registerProductionConsumptionRef = registerProductionConsumptionRef;

exports.registerProductionConsumption = function registerProductionConsumption(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(registerProductionConsumptionRef(dcInstance, inputVars));
}
;

const registerProductionOutputRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'RegisterProductionOutput', inputVars);
}
registerProductionOutputRef.operationName = 'RegisterProductionOutput';
exports.registerProductionOutputRef = registerProductionOutputRef;

exports.registerProductionOutput = function registerProductionOutput(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(registerProductionOutputRef(dcInstance, inputVars));
}
;

const updateProductCostRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateProductCost', inputVars);
}
updateProductCostRef.operationName = 'UpdateProductCost';
exports.updateProductCostRef = updateProductCostRef;

exports.updateProductCost = function updateProductCost(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateProductCostRef(dcInstance, inputVars));
}
;

const getBusinessConfigRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetBusinessConfig', inputVars);
}
getBusinessConfigRef.operationName = 'GetBusinessConfig';
exports.getBusinessConfigRef = getBusinessConfigRef;

exports.getBusinessConfig = function getBusinessConfig(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getBusinessConfigRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listRolesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListRoles');
}
listRolesRef.operationName = 'ListRoles';
exports.listRolesRef = listRolesRef;

exports.listRoles = function listRoles(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listRolesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getCurrentUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCurrentUser');
}
getCurrentUserRef.operationName = 'GetCurrentUser';
exports.getCurrentUserRef = getCurrentUserRef;

exports.getCurrentUser = function getCurrentUser(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getCurrentUserRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listUnitsOfMeasureRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUnitsOfMeasure');
}
listUnitsOfMeasureRef.operationName = 'ListUnitsOfMeasure';
exports.listUnitsOfMeasureRef = listUnitsOfMeasureRef;

exports.listUnitsOfMeasure = function listUnitsOfMeasure(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listUnitsOfMeasureRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listIngredientsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListIngredients');
}
listIngredientsRef.operationName = 'ListIngredients';
exports.listIngredientsRef = listIngredientsRef;

exports.listIngredients = function listIngredients(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listIngredientsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listSuppliersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListSuppliers');
}
listSuppliersRef.operationName = 'ListSuppliers';
exports.listSuppliersRef = listSuppliersRef;

exports.listSuppliers = function listSuppliers(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listSuppliersRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listProductsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProducts');
}
listProductsRef.operationName = 'ListProducts';
exports.listProductsRef = listProductsRef;

exports.listProducts = function listProducts(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listProductsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listPurchasesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPurchases');
}
listPurchasesRef.operationName = 'ListPurchases';
exports.listPurchasesRef = listPurchasesRef;

exports.listPurchases = function listPurchases(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listPurchasesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getPurchaseRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPurchase', inputVars);
}
getPurchaseRef.operationName = 'GetPurchase';
exports.getPurchaseRef = getPurchaseRef;

exports.getPurchase = function getPurchase(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getPurchaseRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listInventoryMovementsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListInventoryMovements', inputVars);
}
listInventoryMovementsRef.operationName = 'ListInventoryMovements';
exports.listInventoryMovementsRef = listInventoryMovementsRef;

exports.listInventoryMovements = function listInventoryMovements(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, false);
  return executeQuery(listInventoryMovementsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listRecipesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListRecipes');
}
listRecipesRef.operationName = 'ListRecipes';
exports.listRecipesRef = listRecipesRef;

exports.listRecipes = function listRecipes(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listRecipesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getRecipeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetRecipe', inputVars);
}
getRecipeRef.operationName = 'GetRecipe';
exports.getRecipeRef = getRecipeRef;

exports.getRecipe = function getRecipe(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getRecipeRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listProductionBatchesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProductionBatches');
}
listProductionBatchesRef.operationName = 'ListProductionBatches';
exports.listProductionBatchesRef = listProductionBatchesRef;

exports.listProductionBatches = function listProductionBatches(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listProductionBatchesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;
