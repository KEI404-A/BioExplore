const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'bioexplore',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createPublicProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreatePublicProject', inputVars);
}
createPublicProjectRef.operationName = 'CreatePublicProject';
exports.createPublicProjectRef = createPublicProjectRef;

exports.createPublicProject = function createPublicProject(dcOrVars, vars) {
  return executeMutation(createPublicProjectRef(dcOrVars, vars));
};

const getMyProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyProjects');
}
getMyProjectsRef.operationName = 'GetMyProjects';
exports.getMyProjectsRef = getMyProjectsRef;

exports.getMyProjects = function getMyProjects(dc) {
  return executeQuery(getMyProjectsRef(dc));
};

const updateProjectDescriptionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateProjectDescription', inputVars);
}
updateProjectDescriptionRef.operationName = 'UpdateProjectDescription';
exports.updateProjectDescriptionRef = updateProjectDescriptionRef;

exports.updateProjectDescription = function updateProjectDescription(dcOrVars, vars) {
  return executeMutation(updateProjectDescriptionRef(dcOrVars, vars));
};

const deleteProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteProject', inputVars);
}
deleteProjectRef.operationName = 'DeleteProject';
exports.deleteProjectRef = deleteProjectRef;

exports.deleteProject = function deleteProject(dcOrVars, vars) {
  return executeMutation(deleteProjectRef(dcOrVars, vars));
};
