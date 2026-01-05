import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreatePublicProjectData {
  project_insert: Project_Key;
}

export interface CreatePublicProjectVariables {
  name: string;
  description: string;
  isPublic: boolean;
}

export interface DeleteProjectData {
  project_delete?: Project_Key | null;
}

export interface DeleteProjectVariables {
  id: UUIDString;
}

export interface Gene_Key {
  id: UUIDString;
  __typename?: 'Gene_Key';
}

export interface GetMyProjectsData {
  projects: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    isPublic?: boolean | null;
  } & Project_Key)[];
}

export interface Organism_Key {
  id: UUIDString;
  __typename?: 'Organism_Key';
}

export interface ProjectEntity_Key {
  projectId: UUIDString;
  entityType: string;
  entityId: UUIDString;
  __typename?: 'ProjectEntity_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Protein_Key {
  id: UUIDString;
  __typename?: 'Protein_Key';
}

export interface Publication_Key {
  id: UUIDString;
  __typename?: 'Publication_Key';
}

export interface UpdateProjectDescriptionData {
  project_update?: Project_Key | null;
}

export interface UpdateProjectDescriptionVariables {
  id: UUIDString;
  description: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreatePublicProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreatePublicProjectVariables): MutationRef<CreatePublicProjectData, CreatePublicProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreatePublicProjectVariables): MutationRef<CreatePublicProjectData, CreatePublicProjectVariables>;
  operationName: string;
}
export const createPublicProjectRef: CreatePublicProjectRef;

export function createPublicProject(vars: CreatePublicProjectVariables): MutationPromise<CreatePublicProjectData, CreatePublicProjectVariables>;
export function createPublicProject(dc: DataConnect, vars: CreatePublicProjectVariables): MutationPromise<CreatePublicProjectData, CreatePublicProjectVariables>;

interface GetMyProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyProjectsData, undefined>;
  operationName: string;
}
export const getMyProjectsRef: GetMyProjectsRef;

export function getMyProjects(): QueryPromise<GetMyProjectsData, undefined>;
export function getMyProjects(dc: DataConnect): QueryPromise<GetMyProjectsData, undefined>;

interface UpdateProjectDescriptionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProjectDescriptionVariables): MutationRef<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateProjectDescriptionVariables): MutationRef<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;
  operationName: string;
}
export const updateProjectDescriptionRef: UpdateProjectDescriptionRef;

export function updateProjectDescription(vars: UpdateProjectDescriptionVariables): MutationPromise<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;
export function updateProjectDescription(dc: DataConnect, vars: UpdateProjectDescriptionVariables): MutationPromise<UpdateProjectDescriptionData, UpdateProjectDescriptionVariables>;

interface DeleteProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteProjectVariables): MutationRef<DeleteProjectData, DeleteProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteProjectVariables): MutationRef<DeleteProjectData, DeleteProjectVariables>;
  operationName: string;
}
export const deleteProjectRef: DeleteProjectRef;

export function deleteProject(vars: DeleteProjectVariables): MutationPromise<DeleteProjectData, DeleteProjectVariables>;
export function deleteProject(dc: DataConnect, vars: DeleteProjectVariables): MutationPromise<DeleteProjectData, DeleteProjectVariables>;

