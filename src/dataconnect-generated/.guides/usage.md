# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createPublicProject, getMyProjects, updateProjectDescription, deleteProject } from '@dataconnect/generated';


// Operation CreatePublicProject:  For variables, look at type CreatePublicProjectVars in ../index.d.ts
const { data } = await CreatePublicProject(dataConnect, createPublicProjectVars);

// Operation GetMyProjects: 
const { data } = await GetMyProjects(dataConnect);

// Operation UpdateProjectDescription:  For variables, look at type UpdateProjectDescriptionVars in ../index.d.ts
const { data } = await UpdateProjectDescription(dataConnect, updateProjectDescriptionVars);

// Operation DeleteProject:  For variables, look at type DeleteProjectVars in ../index.d.ts
const { data } = await DeleteProject(dataConnect, deleteProjectVars);


```