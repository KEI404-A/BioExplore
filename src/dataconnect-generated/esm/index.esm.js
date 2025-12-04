import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'bioexplore',
  location: 'us-east4'
};

export const createPublicProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePublicProject', inputVars);
}
createPublicProjectRef.operationName = 'CreatePublicProject';

export function createPublicProject(dcOrVars, vars) {
  return executeMutation(createPublicProjectRef(dcOrVars, vars));
}

export const getMyProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyProjects');
}
getMyProjectsRef.operationName = 'GetMyProjects';

export function getMyProjects(dc) {
  return executeQuery(getMyProjectsRef(dc));
}

export const updateProjectDescriptionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateProjectDescription', inputVars);
}
updateProjectDescriptionRef.operationName = 'UpdateProjectDescription';

export function updateProjectDescription(dcOrVars, vars) {
  return executeMutation(updateProjectDescriptionRef(dcOrVars, vars));
}

export const deleteProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteProject', inputVars);
}
deleteProjectRef.operationName = 'DeleteProject';

export function deleteProject(dcOrVars, vars) {
  return executeMutation(deleteProjectRef(dcOrVars, vars));
}

