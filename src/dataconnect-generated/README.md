# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetMyProjects*](#getmyprojects)
- [**Mutations**](#mutations)
  - [*CreatePublicProject*](#createpublicproject)
  - [*UpdateProjectDescription*](#updateprojectdescription)
  - [*DeleteProject*](#deleteproject)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

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

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetMyProjects
You can execute the `GetMyProjects` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyProjects(): QueryPromise<GetMyProjectsData, undefined>;

interface GetMyProjectsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProjectsData, undefined>;
}
export const getMyProjectsRef: GetMyProjectsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyProjects(dc: DataConnect): QueryPromise<GetMyProjectsData, undefined>;

interface GetMyProjectsRef {
  ...
  (dc: DataConnect): QueryRef<GetMyProjectsData, undefined>;
}
export const getMyProjectsRef: GetMyProjectsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyProjectsRef:
```typescript
const name = getMyProjectsRef.operationName;
console.log(name);
```

### Variables
The `GetMyProjects` query has no variables.
### Return Type
Recall that executing the `GetMyProjects` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyProjectsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMyProjectsData {
  projects: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    isPublic?: boolean | null;
  } & Project_Key)[];
}
```
### Using `GetMyProjects`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyProjects } from '@dataconnect/generated';


// Call the `getMyProjects()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyProjects();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyProjects(dataConnect);

console.log(data.projects);

// Or, you can use the `Promise` API.
getMyProjects().then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

### Using `GetMyProjects`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyProjectsRef } from '@dataconnect/generated';


// Call the `getMyProjectsRef()` function to get a reference to the query.
const ref = getMyProjectsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyProjectsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.projects);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.projects);
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

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreatePublicProject
You can execute the `CreatePublicProject` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createPublicProject(vars: CreatePublicProjectVariables): MutationPromise<CreatePublicProjectData, CreatePublicProjectVariables>;

interface CreatePublicProjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePublicProjectVariables): MutationRef<CreatePublicProjectData, CreatePublicProjectVariables>;
}
export const createPublicProjectRef: CreatePublicProjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createPublicProject(dc: DataConnect, vars: CreatePublicProjectVariables): MutationPromise<CreatePublicProjectData, CreatePublicProjectVariables>;

interface CreatePublicProjectRef {
  ...
  (dc: DataConnect, vars: CreatePublicProjectVariables): MutationRef<CreatePublicProjectData, CreatePublicProjectVariables>;
}
export const createPublicProjectRef: CreatePublicProjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createPublicProjectRef:
```typescript
const name = createPublicProjectRef.operationName;
console.log(name);
```

### Variables
The `CreatePublicProject` mutation requires an argument of type `CreatePublicProjectVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreatePublicProjectVariables {
  name: string;
  description: string;
  isPublic: boolean;
}
```
### Return Type
Recall that executing the `CreatePublicProject` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreatePublicProjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreatePublicProjectData {
  project_insert: Project_Key;
}
```
### Using `CreatePublicProject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createPublicProject, CreatePublicProjectVariables } from '@dataconnect/generated';

// The `CreatePublicProject` mutation requires an argument of type `CreatePublicProjectVariables`:
const createPublicProjectVars: CreatePublicProjectVariables = {
  name: ..., 
  description: ..., 
  isPublic: ..., 
};

// Call the `createPublicProject()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createPublicProject(createPublicProjectVars);
// Variables can be defined inline as well.
const { data } = await createPublicProject({ name: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createPublicProject(dataConnect, createPublicProjectVars);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
createPublicProject(createPublicProjectVars).then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

### Using `CreatePublicProject`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createPublicProjectRef, CreatePublicProjectVariables } from '@dataconnect/generated';

// The `CreatePublicProject` mutation requires an argument of type `CreatePublicProjectVariables`:
const createPublicProjectVars: CreatePublicProjectVariables = {
  name: ..., 
  description: ..., 
  isPublic: ..., 
};

// Call the `createPublicProjectRef()` function to get a reference to the mutation.
const ref = createPublicProjectRef(createPublicProjectVars);
// Variables can be defined inline as well.
const ref = createPublicProjectRef({ name: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createPublicProjectRef(dataConnect, createPublicProjectVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

## UpdateProjectDescription
You can execute the `UpdateProjectDescription` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateProjectDescription(vars: UpdateProjectDescriptionVariables): MutationPromise<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;

interface UpdateProjectDescriptionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProjectDescriptionVariables): MutationRef<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;
}
export const updateProjectDescriptionRef: UpdateProjectDescriptionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateProjectDescription(dc: DataConnect, vars: UpdateProjectDescriptionVariables): MutationPromise<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;

interface UpdateProjectDescriptionRef {
  ...
  (dc: DataConnect, vars: UpdateProjectDescriptionVariables): MutationRef<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;
}
export const updateProjectDescriptionRef: UpdateProjectDescriptionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateProjectDescriptionRef:
```typescript
const name = updateProjectDescriptionRef.operationName;
console.log(name);
```

### Variables
The `UpdateProjectDescription` mutation requires an argument of type `UpdateProjectDescriptionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateProjectDescriptionVariables {
  id: UUIDString;
  description: string;
}
```
### Return Type
Recall that executing the `UpdateProjectDescription` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateProjectDescriptionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateProjectDescriptionData {
  project_update?: Project_Key | null;
}
```
### Using `UpdateProjectDescription`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateProjectDescription, UpdateProjectDescriptionVariables } from '@dataconnect/generated';

// The `UpdateProjectDescription` mutation requires an argument of type `UpdateProjectDescriptionVariables`:
const updateProjectDescriptionVars: UpdateProjectDescriptionVariables = {
  id: ..., 
  description: ..., 
};

// Call the `updateProjectDescription()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateProjectDescription(updateProjectDescriptionVars);
// Variables can be defined inline as well.
const { data } = await updateProjectDescription({ id: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateProjectDescription(dataConnect, updateProjectDescriptionVars);

console.log(data.project_update);

// Or, you can use the `Promise` API.
updateProjectDescription(updateProjectDescriptionVars).then((response) => {
  const data = response.data;
  console.log(data.project_update);
});
```

### Using `UpdateProjectDescription`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateProjectDescriptionRef, UpdateProjectDescriptionVariables } from '@dataconnect/generated';

// The `UpdateProjectDescription` mutation requires an argument of type `UpdateProjectDescriptionVariables`:
const updateProjectDescriptionVars: UpdateProjectDescriptionVariables = {
  id: ..., 
  description: ..., 
};

// Call the `updateProjectDescriptionRef()` function to get a reference to the mutation.
const ref = updateProjectDescriptionRef(updateProjectDescriptionVars);
// Variables can be defined inline as well.
const ref = updateProjectDescriptionRef({ id: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateProjectDescriptionRef(dataConnect, updateProjectDescriptionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_update);
});
```

## DeleteProject
You can execute the `DeleteProject` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteProject(vars: DeleteProjectVariables): MutationPromise<DeleteProjectData, DeleteProjectVariables>;

interface DeleteProjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteProjectVariables): MutationRef<DeleteProjectData, DeleteProjectVariables>;
}
export const deleteProjectRef: DeleteProjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteProject(dc: DataConnect, vars: DeleteProjectVariables): MutationPromise<DeleteProjectData, DeleteProjectVariables>;

interface DeleteProjectRef {
  ...
  (dc: DataConnect, vars: DeleteProjectVariables): MutationRef<DeleteProjectData, DeleteProjectVariables>;
}
export const deleteProjectRef: DeleteProjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteProjectRef:
```typescript
const name = deleteProjectRef.operationName;
console.log(name);
```

### Variables
The `DeleteProject` mutation requires an argument of type `DeleteProjectVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteProjectVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteProject` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteProjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteProjectData {
  project_delete?: Project_Key | null;
}
```
### Using `DeleteProject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteProject, DeleteProjectVariables } from '@dataconnect/generated';

// The `DeleteProject` mutation requires an argument of type `DeleteProjectVariables`:
const deleteProjectVars: DeleteProjectVariables = {
  id: ..., 
};

// Call the `deleteProject()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteProject(deleteProjectVars);
// Variables can be defined inline as well.
const { data } = await deleteProject({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteProject(dataConnect, deleteProjectVars);

console.log(data.project_delete);

// Or, you can use the `Promise` API.
deleteProject(deleteProjectVars).then((response) => {
  const data = response.data;
  console.log(data.project_delete);
});
```

### Using `DeleteProject`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteProjectRef, DeleteProjectVariables } from '@dataconnect/generated';

// The `DeleteProject` mutation requires an argument of type `DeleteProjectVariables`:
const deleteProjectVars: DeleteProjectVariables = {
  id: ..., 
};

// Call the `deleteProjectRef()` function to get a reference to the mutation.
const ref = deleteProjectRef(deleteProjectVars);
// Variables can be defined inline as well.
const ref = deleteProjectRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteProjectRef(dataConnect, deleteProjectVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_delete);
});
```

