import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const docSections = [
//  {
//    id: 'getting-started',
//    title: 'Getting Started',
//    subsections: [
//      { id: 'dashboard', title: 'Dashboard & Analytics', content: `
//
//Access your dashboard to view real-time analytics, monitoring, and insights into your infrastructure performance.
//
//### Key Features
//
//- **Real-time Monitoring**: Track your infrastructure metrics as they happen
//- **Custom Dashboards**: Create dashboards tailored to your needs
//- **Performance Metrics**: CPU, memory, disk usage, and network throughput
//- **Alert Management**: Set up alerts and get notifications
//
//## Getting Started 
//
//1. Log into your Infraglide account
//2. Navigate to the Dashboard from the main menu
//3. Click **+ New Pipeline** to start creating your custom pipeline

//![Dashboard Example](/infraglidewebsite/dashboard.JPG)

//### Best Practices

//> Remember: More metrics don't always mean better insights. Focus on KPIs that matter to your infrastructure.

//For more information on advanced analytics, see the [Advanced Metrics](#) section.` },
//      { id: 'provisioning', title: 'Provisioning Engine (Terraform)', content: `## Terraform Integration

//Infraglide provides seamless integration with Terraform for **Infrastructure as Code** management.

//### Why Use Terraform?

//- **Declarative Configuration**: Define your infrastructure in code
//- **Version Control**: Track all infrastructure changes in git
//- **Reusability**: Create templates for common deployments
//- **Multi-Cloud Support**: Manage AWS, Azure, GCP resources with one tool

//### Getting Started with Terraform

//1. Install Terraform on your machine
//2. Create a \`.tf\` file with your infrastructure definition
//3. Connect your cloud provider credentials
//4. Deploy using \`terraform apply\`

//### Example Terraform Configuration

//\`\`\`hcl
//resource "aws_instance" "example" {
//  ami           = "ami-0c55b159cbfafe1f0"
//  instance_type = "t2.micro"
  
//  tags = {
//    Name = "infraglide-instance"
//  }
//}

//resource "aws_s3_bucket" "data_bucket" {
//  bucket = "my-data-bucket"
  
//  versioning {
//    enabled = true
//  }
//}
//\`\`\`

//> **Important**: Always review terraform plans before applying to production environments.

//### Best Practices

//- ✅ Use remote state storage (S3, Azure Storage)
//- ✅ Implement variable files for different environments
//- ✅ Use Terraform modules for code organization
//- ✅ Keep credentials in environment variables or secret managers
//- ✅ Document your infrastructure code thoroughly

//For detailed Terraform documentation, visit [terraform.io](https://terraform.io)` },
//      { id: 'pipeline-mgmt', title: 'Pipeline Management', content: `

//Manage your deployment pipelines efficiently with Infraglide's intuitive pipeline management system.

//### Core Concepts

//**1. Pipeline**: A series of automated steps to build and deploy infrastructure.

//**2. Stage**: A distinct phase in the deployment process.

//**3. Artifact**: Output from a pipeline stage.

//**4. Trigger**: An event that starts the pipeline.

//### Creating Pipelines

//1. Click **+ New Pipeline**
//2. Define stages and steps
//3. Add actions between stages
//4. Test and deploy

//![new pipeline](/infraglidewebsite/newpipeline.JPG)

//### Pipeline Stages

//- **Build**: Compile and package your infrastructure code
//- **Test**: Run automated tests on your configuration
//- **Deploy**: Apply changes to your infrastructure
//- **Validate**: Verify deployment success
//- **Cleanup**: Remove temporary resources

//> Pro Tip: Start with simple pipelines and gradually add complexity as your team becomes familiar with the platform.

//### Common Actions

//- **Run Pipeline**: Execute the pipeline immediately
//- **Schedule Pipeline**: Set up recurring deployments
//- **Manual Approval**: Require approval before certain stages
//- **Rollback**: Revert to previous infrastructure state

//![main canvas](/infraglidewebsite/main-canvas.JPG)


//` },
//      { id: 'hub', title: 'Hub', content: 'Access the Infraglide Hub to discover templates, integrations, and community resources.  ![Hub](/infraglidewebsite/dash-hub.JPG)' },
//      { id: 'architecture', title: 'Architecture', content: 'Understand the Infraglide architecture, components, and how everything works together. ![arch](/infraglidewebsite/dash-arch.JPG)' },
//      { id: 'manage-users', title: 'Manage Users', content: 'Add users to your team, manage roles, permissions, and set up team collaboration features. ![manage dash-user](/infraglidewebsite/dash-users.JPG)' },
//      { id: 'deployed-resources', title: 'Deployed Resources', content: 'View, manage, and monitor all your deployed resources across your infrastructure. ![Deployed Resources](/infraglidewebsite/dash-resources.JPG)' }
//    ]
//  }, 
  {
    id: 'my-pipelines',
    title: 'My Pipeline',
    subsections: [
        { id: 'pipelines-overview', title: 'Purpose and Audience', content: `

Use the My Pipelines dashboard to discover, filter, and act on infrastructure pipelines across cloud providers. It’s designed for platform engineers, DevOps practitioners, and developers who manage lifecycle actions (create, export, diff, open, rename, delete) and monitor deployment status.

![My Pipeline](/infraglidewebsite/mypipelines.png) 

` },
      { id: 'high-level-overview', title: 'High-level Overview', content: `

 **1) Global Controls**

 **Search Pipelines**:
Quickly locate pipelines by name or keyword. Supports incremental narrowing of results as you type.

![search pipeline](/infraglidewebsite/search.png)

 **Provider Filter** (All, AWS, Azure, GCP):
Toggle between All, AWS, Azure, and GCP to focus on a specific cloud context or view everything at once.

![providers](/infraglidewebsite/filter.png)

**Create Pipeline**:
Starts a guided flow to define and initialize a new pipeline. Use this when onboarding a service or provisioning new infrastructure.

![create pipeline](/infraglidewebsite/create.png)

**Pipeline Overview**:
Displays total pipeline count.

![pipeline overview](/infraglidewebsite/pipelineoverview.png)

**Main Table**:
 Lists pipelines with columns for Name, Provider, Description, Deployment Status, Created At, and Actions.

 ![table](/infraglidewebsite/maintable.png)
 
 ` },

 { id: 'key-ui-elements', title: 'Key UI Elements', content: `

 **1) Pipeline List and Columns**

**Pipeline Name**: 
Primary identifier, expandable to reveal version/context-specific actions (e.g., Export, Open in Canvas, Pipeline Diff, Delete).When we edit the Pipeline and have it saved with new changes then Version value should increment from V1 to V2

![pipeline name](/infraglidewebsite/pipelinename.png)

 **Provider**: Cloud vendor associated with the pipeline (e.g., GCP). Helpful for sorting and scoping operational tasks.
![provider](/infraglidewebsite/provider.png)

 **Description**: Optional free-text context. Add concise, actionable descriptions to assist teammates with discoverability and intent.

 ![description](/infraglidewebsite/description.png)
  
**Deployment Status**: Operational state such as Destroyed or Pending. Use this to triage attention—Pending may need monitoring; Destroyed indicates teardown complete.

![deployment status](/infraglidewebsite/deploymentstatus.png)

**Created At**: Timestamp of pipeline creation for auditing and lifecycle insights.

![created at](/infraglidewebsite/createdat.png)

**Actions**: Common per-row actions include Rename for quick retitling; expanded rows surface additional actions.

![actions](/infraglidewebsite/actions.png)
` },


{ id: 'example-pipelines', title: 'Example Pipelines Observed', content: `

The following examples illustrate typical entries and states visible in the dashboard:

![actions](/infraglidewebsite/screen1.JPG)

` },
      { id: 'common-actions', title: 'Common Actions and When to Use Them', content: `

 **Rename**: Apply clear, human-readable names to improve searchability and reduce confusion with autogenerated identifiers.
![rename](/infraglidewebsite/rename.png)

**Export**: Capture the pipeline definition or artifact for backups, reviews, or migrations between environments.

![export](/infraglidewebsite/export.png)


**Open in Canvas**: Visualize the pipeline topology to validate architecture, dependencies, and resource relationships. It will open in New Pipeline Canvas.
![open in canvas](/infraglidewebsite/canvas.png)


**Pipeline Diff**: Compare versions to understand what changed before approving updates or rollbacks.
![pipeline diff](/infraglidewebsite/pipelinediff.png)


**Delete**: Remove obsolete pipelines after teardown to keep the inventory clean and reduce operational noise.
![delete](/infraglidewebsite/delete.png)


` },

{ id: 'operational-workflow', title: 'Operational Workflow (Suggested)', content: `

1. Item 1 Search or filter to narrow to the relevant cloud provider and target pipeline.
2. Expand the pipeline row to access version-specific actions and artifacts.
3. Run Pipeline Diff to verify changes; if acceptable, proceed with your deployment workflow.
4. Use Open in Canvas to visually validate dependencies and architecture.
5. Export for backup or review, then apply/monitor until the desired status is reached. ` },

{ id: 'troubleshooting-tips', title: 'Troubleshooting and Tips', content: `

- **Pending for too long**: Check pipeline logs, validate credentials/permissions, and ensure provider quotas are sufficient.
- **Destroyed but resources remain**: Confirm finalizers/cleanup hooks, and reconcile via provider console to detect stragglers.
- **Inconsistent names**: Standardize via Rename and update references in downstream systems to avoid broken links.` },

{ id: 'pipelines-faq', title: 'FAQ', content: `

<details>
  <summary><strong>How do I quickly find all GCP pipelines?</strong></summary>
  <p>Use the Provider Filter and select GCP. Combine with the search bar to further narrow by name or keyword.</p>
</details>

<details>
  <summary><strong>When should I use Pipeline Diff?</strong></summary>
  <p>Before any apply/update operation. Diffs surface resource adds, deletes, and changes so you can approve with confidence.</p>
</details>

<details>
  <summary><strong>Is it safe to delete a pipeline once it shows Destroyed?</strong></summary>
  <p>Yes, if you've verified teardown is complete and no dependent services require the artifacts. Consider exporting the definition before deletion for audit history.</p>
</details>

` }
    ]
  },

{
    id: 'manage-users',
    title: 'Manage Users',
    subsections: [
      { id: 'user-management-overview', title: 'User Management Overview', content: `

The **Manage Users** page allows organization admins to view, filter, and control access for all users in the workspace. From here, admins can track invitation status, manage pending invites, and review basic user details and send invitations.
  ![manage users](/infraglidewebsite/manageusers.png)

  ___

  At the top of the page, the **User Management** header displays:

  **Total users**: Count of all users and invitations associated with the current organization/project.
  ![total users](/infraglidewebsite/usermanagement.png)

  **Invite User button**: Opens the user invitation flow to add new users by email.
  ![invite user](/infraglidewebsite/invite.png)

  - On the right side, a quick summary shows:

  **Accepted**: Number of users who have accepted their invitations and are active.

  **Pending**: Number of invitations that have been sent but not yet accepted.
  ![accepted and pending users](/infraglidewebsite/accept.png)

  ___

` },
      { id: 'filters-and-search', title: 'Filters and Search', content: `

To help quickly find specific users or invitations, the page provides:

  **2.1 Search by Email or Username**
  - A search box labeled “**Filter by email or username…**”.
  - Supports partial matches to quickly locate a specific user or invited email.
  ![search users](/infraglidewebsite/searchuser.png)

  **2.2 Status Filter**
  - A dropdown to filter by invitation/user status:
   - All Users
   - Pending Only
   - Accepted Only
   - Expired Only
   - Cancelled Only
  - Selecting a filter updates the user list to only show matching records.
  ![status filter](/infraglidewebsite/allusers.png)  

  **2.3 Clear Filters**
  - A **Clear** button resets all filters and search terms back to the default view (**All Users**).
  ![clear filters](/infraglidewebsite/clear.png)

  ___

` },
      { id: 'user-list', title: 'User List', content: `

The main table lists all users and invitations with the following columns:

  **Full Name**: Displays the user’s full name or the name associated with the invitation.

  **Email**: The email address used for the account or invitation.
  - A copy icon is available to quickly copy the email to the clipboard.

  **Status**: Indicates the current state of the user or invite, for example:
  - Pending - Invitation sent but not yet accepted.
  - Accepted - The user has accepted the invitation and is active.
  - Expired – Invitation is no longer valid.
  - Cancelled – Invitation has been manually cancelled.

  **Group / Role**: Shows the group or role assignment for the user (e.g., “Org Admin”, “No assignment”). This helps understand what level of access each user has.

  **Invited Date**: The date and time when the invitation was originally sent. Useful for tracking old or stale invitations.

  **Actions**
  Contextual actions depending on the status:

  For **Pending** invitations: Cancel revokes the invitation so it can no longer be used.

  For **Accepted** users: A resend/refresh icon typically used to resend an invitation link or trigger a related user action (e.g., re‑invite or reset link), depending on your implementation.

  ![resend refresh icon](/infraglidewebsite/refresh.png)

  ___

` },

{ id: 'typical-admin-workflows', title: 'Typical Admin Workflows', content: `

From the Manage Users page, admins can:
  - **Invite new users** using the **Invite User** button.
  - **Monitor onboarding progress** by checking how many invitations are **Accepted** vs **Pending**.
  - **Clean up stale invitations** by filtering to **Pending** Only or **Expired** Only and using **Cancel** in the Actions column.
  - **Verify access** by checking each user’s **Group** / **Role** and updating assignments elsewhere as needed.
___

` },

{ id: 'invite-users-popup', title: 'Invite Users Popup', content: `

 When a user clicks the **Invite User** button on the **Manage Users** page, the **Invite Users to InfraGlide** popup opens. This dialog lets admins invite one or more users to the organization and optionally assign them to access groups before sending the invitation.

At the top of the popup, there are two modes:

  **Bulk Invite**

  - Used to invite multiple users at once.
  - Each email address is entered on a separate line in the Email Addresses (one per line)* text area.
  
   ![bulk invite](/infraglidewebsite/bulkuserinvite.png)

   **Single User**

   - Used when inviting one specific user.
   - Typically provides a single email field and may show additional per‑user details (depending on implementation).

  ![single user invite](/infraglidewebsite/singleuserinvite.png)

  The user can switch between **Bulk Invite** and **Single User** using the toggle at the top of the popup.

  ___

  ### 2. Email Addresses
  In Bulk Invite mode, the Email Addresses (one per line)* field accepts:

  - One email address per line (e.g., user1@company.com, user2@company.com, etc.).
  - All listed emails will receive an invitation when the admin clicks **Send Invitations**.

  Required field: at least one valid email must be entered to enable sending.

  ___

  ### 3.Initial Group Assignment
  The Initial Group Assignment section controls the access level of invited users. There are two options:

  1.  **No Group (invite only)**
  - Users are invited without any group assignment.
  - Users will have no access until an admin assigns them to groups later.

  2. **Assign to Group**
  - Allows the admin to choose one or more predefined access groups from the Select a group dropdown.
  - The dropdown lists folders and roles, for example:

  Folder 1 - Admin

Folder 1 - Editor

Folder 1 - Project 1 - Editor

Folder 1 - Project 1 - Viewer

Folder 1 - Viewer

Folder 2 - Admin

The selected group(s) determine the permissions and scope the invited users will have once they join.

![na](/infraglidewebsite/initialgroup.png)

___

### 4. Sending Invitations
At the bottom of the popup:

**Cancel**
- Closes the popup without sending any invitations.

**Send Invitations (N)**
- Sends invitations to all valid email addresses entered.
- The button label includes the count of invitations that will be sent (e.g., Send Invitations (3)).

![sending invitations](/infraglidewebsite/sendinvitation.png)

___

### 5. Invitation Email & User Response
After clicking Send Invitations:

 - Each listed email address receives an **email invitation** to join InfraGlide.
 - The email contains a link where the recipient can: **Accept** the invitation to create/activate their account with the assigned group access. **Deny** or ignore the invitation, in which case their status remains pending or can be cancelled by an admin from the **Manage Users** page.

Once the user responds, their status is updated accordingly in the Manage Users view.

  
` }


      
    ]
  },

{
    id: 'hub',
    title: 'Hub',
    subsections: [
        { id: 'hub-overview', title: 'Hub Overview', content: `

The **Pipeline Hub** is the central catalog where users can browse, discover, and manage reusable cloud infrastructure pipelines across providers such as **AWS**, **Azure**, and **GCP**. It provides a single view of all validated pipelines in an organization, ensuring teams can quickly find and reuse approved infrastructure definitions instead of creating them from scratch.This would give a snapshot of what are the Pipeline for each Cloud Provider whcih is Published to Git Hub or not.

![Hub Overview](/infraglidewebsite/hubone.png)

### **Key Capabilities**

**1. Central Catalog of Pipelines**

Lists all available pipelines with metadata such as:
 - Pipeline Name
 - Cloud Provider (e.g., AWS, Azure, GCP)
 - Description
 - Creation Date / Version

Supports multiple versions per pipeline (e.g., Version 1), enabling safe iteration and upgrades.

![versions](/infraglidewebsite/hubtwo.png)

**2. Filtering and Search**
 - Global search bar to look up pipelines by name or keyword.
 - **Filter** control to narrow pipelines by cloud provider (All, AWS, Azure, GCP).
 - Sorting options on key columns (Pipeline Name, Provider, Description, Created At).

![filtering and search](/infraglidewebsite/hubthree.png)

**3. Pipeline Details**
- Each pipeline row can be expanded to view its versions and associated metadata.
- Version‑specific details (e.g., creation timestamp) help users choose the correct revision for their environment.

![pipeline details](/infraglidewebsite/hubfour.png)

` },

{ id: 'hub-implementation-flow', title: 'Hub Implementation Flow', content: `

### **1.Onboarding Pipelines into the Hub**
Whatever the Pipelines available in the My Pipelines Those Pipelines should appear here based on the cloud provider. Once a pipeline is available, it should have below details, along with:
  - Provider (AWS / Azure / GCP)
  - Human‑readable name
  - Short description and tags
  - Initial version (e.g., Version 1)

### **2. Discovering Pipelines**
 - Users navigate to Hub from the left navigation panel.
 - The Available Pipelines list shows all pipelines that match the active provider filter.
 - Users can search by Pipeline name and filter by provider to only see relevant pipelines.

### **3. Selecting a Pipeline**
From the list, the user selects the desired pipeline by:
 - Clicking the row to expand version information, or
 - Checking the selection box beside the pipeline.
 - Version information is reviewed to ensure the correct release is chosen (e.g., latest stable version).

` },

{ id: 'publishing-a-selected-pipeline', title: 'Publishing a Selected Pipeline', content: `

Once a pipeline is selected from the Hub, it can be published to Git hub.

### **Publishing Workflow**
**1. Pipeline Selection**
  - The user identifies the pipeline they want to promote (e.g., newPipeline_20260205070231).
  - The appropriate version is selected from the expanded details.

![pipeline selection](/infraglidewebsite/selection.png)

**2. Publish Action**
 - The user triggers the Publish action (via the “Publish” button at the top‑right or contextual action in the row).
 - The system validates Pipeline definition integrity, Provider configuration (AWS/Azure/GCP), Mandatory metadata (description, version, etc.).

![publish](/infraglidewebsite/publish.png)

**3. Post‑Publish Management**
 - Once the Pipeline is published, It should give notification as Published
 - Teams can roll forward to newer versions or keep using a stable published version as needed.

` },

{ id: 'Pipeline Publishing–Behaviour-and-Status-Indicators', title: 'Pipeline Publishing – Behaviour and Status Indicators', content: `

 When a pipeline is published, it is pushed to the configured Git repository. Publishing ensures that the latest approved version of the pipeline definition is stored and version‑controlled in Git, making it reusable and traceable.

 ### What “Publish” Means
  - **Publish to Git Repository**
  - The selected pipeline (and version) is packaged and committed to the target Git repository.
  - This operation creates or updates the pipeline definition in Git so it can be used by downstream systems (CI/CD, environments, etc.).

### Publish Status Indicators
After a publish action, the UI shows a clear status indicator for each pipeline:

 **1. Green Tick – Published Successfully**
 - The pipeline was published to the Git repository without errors.
 - The latest version in the UI is in sync with the version stored in Git.

  **2. Red Cross – Publish Failed**
  - The attempt to publish the pipeline to Git failed.
  - Possible reasons include Git connectivity or authentication issues, Branch or repository configuration problems and Validation errors in the pipeline definition
  - The pipeline remains not published (or not updated) in Git.
  - The user should review the error message, fix the issue, and try publishing again.

  **3. Yellow Warning – Changes After Publish**
  - The pipeline was previously published successfully, but The pipeline definition has since been modified in the UI, and Those new changes have not yet been published to Git.
  - This indicates a drift between The current pipeline configuration in the Hub and The version that currently exists in the Git repository.
  - Users should Review the new changes and Re‑publish to sync the latest version to Git.

  ### Typical User Flow

  **1. Select Pipeline from Hub**
   - Choose the required pipeline from the Hub (e.g., from the pipeline list).

  **2. Click “Publish”**
  - Trigger the publish action to push the selected pipeline version to the Git repository.

  **3. Check Status**
  - Confirm the outcome via the icons:
  - ✅ Green Tick: publish successful
  - ❌ Red Cross: publish failed – needs attention
  - ⚠️ Yellow Warning: pipeline has unsynced changes since last successful publish

  **4. Re‑Publish When Needed**
  - After making any changes to a pipeline, publish again so Git always reflects the current approved version.

  ### Example Scenario – Publishing a Pipeline to Git

  **Scenario 1: First‑Time Publish (Green Tick)**

  **1. Open the Pipeline Hub**
  - Navigate to Hub → Pipelines.
  - Use the search or provider filter (All / AWS / Azure / GCP) to locate your pipeline.
  - Example: newPipeline_20260205070231 under AWS.

  **2. Select the Pipeline**
  - Click on the row or checkbox for newPipeline_20260205070231.
  - Optionally expand the row to review Version 1 and metadata (description, created time).

  **3. Click “Publish”**
  - In the top‑right of the screen, click the Publish button.
  - The system:
  - Validates the pipeline definition.
  - Pushes the pipeline to the configured Git repository.

  **4. View the Result**
  - After a few seconds, a green tick icon appears next to the pipeline:
  - This indicates the pipeline has been successfully published to Git.
  - The version in the Hub is now in sync with the version in Git.

  **Scenario 2: Pipeline Changes After Publish (Yellow Warning)**

  **1. Modify the Published Pipeline**
  - Open the same pipeline newPipeline_20260205070231.
  - Edit its configuration (for example, update variables, steps, or provider settings).
  - Save the changes in the UI.

  **2. Status After Edit**
  - After saving, the status icon next to the pipeline becomes a yellow warning symbol.
  - Meaning:
  - The pipeline in the Hub has changed.
  - These changes are not yet published to Git.
  - Git still holds the last successfully published version.

  **3. Re‑Publish to Sync with Git**
  - Click Publish again.
  - The updated pipeline is pushed to the Git repository.
  - On success, the icon turns back to a green tick, confirming Git is now in sync with the latest version.

  **Scenario 3: Publish Failure (Red Cross)**

  **1. Attempt to Publish**
  - Select a pipeline and click Publish.

  **2. Publish Fails**
  - The system encounters an issue (for example: Git authentication failure, wrong repository/branch configuration, or a validation error in the pipeline).
  - The status icon shows a red cross.

  **3. Troubleshoot and Retry**
  - Review the error message shown in the UI (or logs).
  - Fix the root cause, such as:
  - Updating Git credentials or access tokens.
  - Correcting the repository/branch configuration.
  - Fixing invalid fields in the pipeline definition.
  - Click Publish again.
  - Once the issue is resolved and the push to Git succeeds, the icon changes from red cross to green tick.


  ### Quick Visual Guide to Icons

  **1. Green Tick – Published & In Sync**
  - The pipeline is successfully stored in Git; Hub and Git match.

  **2. Yellow Warning – Changes Not Yet Published**
  - The pipeline was published before, but the current version in the Hub has new changes that are not in Git.

  **3. Red Cross – Publish Failed**
  - The last attempt to publish to Git failed; the pipeline in Git was not created/updated.

` },

      
    ]
  },

{
    id: 'Architecture ',
    title: 'Architecture ',
    subsections: [
        { id: 'architecture-diagrams', title: 'Architecture Diagrams', content: `

The Architecture Diagrams page provides a visual view of pipeline architectures along with key metadata and technical details. It is designed for both quick inspection and deeper analysis of how a pipeline is structured and deployed.

![Architecture Diagrams](/infraglidewebsite/architecture-diagrams.png)

### **1.Select Pipeline**

At the top of the page, users can select a pipeline from the Select Pipeline dropdown. A cloud provider filter (All / AWS / Azure / GCP) helps narrow down the list to pipelines belonging to a specific platform.

![select pipeline](/infraglidewebsite/selectpipeline.png)

Once a pipeline is selected, the following sections are populated:

**1.1 Pipeline Information**

Displays high‑level metadata about the chosen pipeline, including:
 - **Name** – The unique name of the pipeline.
 - **Provider** – Cloud provider (e.g., AWS, Azure, GCP).
 - **Region** – Deployment region for the pipeline.
 - **Status** – Current lifecycle state (e.g., draft, active).
 - **Deployment Status** – Real‑time deployment state (e.g., Pending, Successful, Failed).

![pipeline info](/infraglidewebsite/pipelineinfo.png)

**1.2 Architecture Statistics**

Summarizes the complexity and structure of the pipeline:
 - Total Components – Number of individual components in the architecture.
 - Connections – Number of defined connections between components.
 - Version – Current version of the pipeline definition.
 - Complexity – A qualitative indicator (e.g., Low, Medium, High) based on component and connection counts.

![architecture statistics](/infraglidewebsite/stats.png)

**1.3 Component Breakdown**

Provides a categorized view of major component types (e.g., Database, Compute, Storage) and their counts. This helps quickly understand what the pipeline is primarily composed of.

![component breakdown](/infraglidewebsite/componentbreakdown.png)

` },

{ id: 'architecture-capture', title: 'Architecture Capture',content: `

The Architecture Capture section allows users to generate visual documentation of the pipeline.

### **1. Capture Architecture**
 - **Action**: Capture Architecture button
 - **Behavior**: Takes a high‑quality snapshot of the current pipeline architecture directly from the designer canvas.
 - **Output**: Downloads an image of the architecture diagram, and Saves it with the pipeline name so it can be reused in documentation, reports, or reviews.

![capture architecture](/infraglidewebsite/capture.png)

### **2. View in Designer**
 - **Action**: View in Designer button
 - **Behavior**: Opens the selected pipeline in the Designer view in a new page.
 - **Purpose**: Shows the full pipeline on an interactive canvas. Allows users to visually inspect, review, and (where permitted) modify components, connections, and configuration.

![view in designer](/infraglidewebsite/viewindesigner.png)

**Note**: Both Open in Designer and View in Designer actions are intended to provide a direct, visual representation of the pipeline.

**Open/View in Designer**: Navigates to the interactive canvas for editing or detailed review.

**Capture Architecture**: Generates a static snapshot for documentation.

`},

{ id: 'architecture-overview', title: 'Architecture Overview',content: `

The Architecture Overview section summarizes the structure and flow of the pipeline:
 - **Component Summary**: A short description or label representing the Resource information (for example, a GCP SQL‑based data pipeline).
 - **Connection Flow**: A concise view of how components are connected end‑to‑end. If no connections are defined, the page will explicitly indicate that.

 This section helps readers understand the architecture at a glance without needing to open the full designer.

 ![architecture overview](/infraglidewebsite/architectureoverview.png)

`},

{ id: 'technical-specifications', title: 'Technical Specifications',content: `

  The Technical Specifications panel provides low‑level metadata useful for governance, auditing, and support:
   - **Pipeline ID**: System‑generated identifier for the pipeline.
   - **Created**: Date when the pipeline was first created.
   - **Last Modified**: Date when the pipeline was last updated.

 ![technical specifications](/infraglidewebsite/technicalsSpecifications.png) 

 These details help teams track pipeline lifecycle and changes over time.
 
`},
     
    ]
  }, 
  
   {
    id: 'rbac-management',
    title: 'RBAC Management',
    subsections: [
      { id: 'rbac-management', title: 'Role-Based Access Control', content: `

Manage access with ease using our RBAC system, designed to give you precise control over users, groups, and permissions.

### Key Features

- **Centralized RBAC Control**: Manage all access from a single, unified platform.
- **Group-Based Access Management**: Assign roles to groups and scale permissions effortlessly
- **Custom Role Policies**: Define flexible roles tailored to your workflows
- **Automatic Permission Inheritance**: Assign once and let access cascade across resources
- **Scalable & Easy to Manage**: Add or remove users without reconfiguring permissions
- **Clear Visibility & Auditing**: Instantly see who has access to what and why

![rbac](/infraglidewebsite/rbac-one.JPG)

` },

{ id: 'Users-Groups', title: 'Principals (Users & Groups)', content: `

Principals define who can access the system. They can be individual users or groups of users. Using groups is recommended, as it makes access management easier, more scalable, and more organized.

![user and groups](/infraglidewebsite/rbac-user-group.JPG)

###  Why Use Groups? (Best Practice!)

- **Easier Management**: Grant role to group once, all members inherit access
- **Scalable**: Add/remove users from groups without touching role assignments
- **Auditable**: Clear which teams have access to which resources
- **Avoid**: Assigning roles directly to individual users (hard to maintain)

` },

{ id: 'roles', title: 'Roles', content: `

Our platform provides roles that define what actions users or groups can perform, making it easy to manage permissions across your system.

![roles](/infraglidewebsite/rbac-roles.JPG)

### 1. System Roles

Our platform provides a set of default system roles such as **Admin**, **Editor**, and **Viewer**, designed to cover common access needs. These predefined roles allow you to quickly assign appropriate permissions without additional configuration.

![system roles](/infraglidewebsite/rbac-system-roles.JPG)

### 2. Custom Roles

In addition to system roles, users also have the flexibility to create custom roles tailored to specific requirements. Custom roles enable you to define precise permission sets that align with your organization’s workflows and responsibilities.

![custom roles](/infraglidewebsite/rbac-custom-roles.JPG)

**How to Create a Custom Role**

1. Click on the **+ New** button in the Roles section
2. Enter the **role name** and **description**
3. Define the required role policies
4. **Import permissions from** existing roles like Admin, Editor, or Viewer
5. The custom role can now be assigned like any system role

![new role](/infraglidewebsite/rbac-new-role.JPG)

` },

{ id: 'groups', title: 'Groups', content: `

Organize users into groups for easier access management

![groups](/infraglidewebsite/rbac-groups.JPG)

###  Complete Access Flow

**1. Create Groups**: e.g., "DevOps Team", "FinOps Analysts"

**2. Add Users to Groups**: alice@company.com → DevOps Team

**3. Define Role Policies (Role Policies tab)**: Create custom roles like "Editor - Pipeline Focus"

**4. Grant Access (User Assignments tab)**: Assign role to group on resource: DevOps Team → Editor - Pipeline Focus → Folder: Production

**5. Result**: All DevOps Team members can now deploy pipelines in Production folder and all its projects!

### 2. Creating New Groups

1. Click on the **Create Group** button in the Groups section

![create group](/infraglidewebsite/create-group-button.JPG)
2. Enter the **Group name** and **Description**

3. Click on **Create Group** to save the new group

![new group](/infraglidewebsite/rbac-new-group.JPG)

4. Click on **Add Members** to add users to the group

![add member](/infraglidewebsite/rbac-add-member.JPG)

` },

{ id: 'assignments', title: 'Principal Assignments', content: `

Grant roles to users and groups for your organization, folders, or projects.

![principal assignments](/infraglidewebsite/rbac-assign.JPG)

### Grant Access

1. Click on **Grant Access** in  User Assignments

![Grant Access](/infraglidewebsite/grant-access.JPG)

2. Fill the Grant Access form with the required

![Grant Access form](/infraglidewebsite/grant-access-form.JPG)

` },

{ id: 'user access', title: 'User Access', content: `

Select a user to view their detailed access report

![User access](/infraglidewebsite/rbac-users.JPG)

` },
      
    ]  
  },
 {
    id: 'hld',
    title: 'HLD - High Level Design',
    subsections: [
      { id: 'hld overview', title: 'HLD Overview', content: `

Executive summary and business overview for managers

![hld dash](/infraglidewebsite/hld-one.JPG)

### Key Features

- **Pipeline Filtering**

![hld filter](/infraglidewebsite/hld-filters.JPG)

- **Providers**

![hld providers](/infraglidewebsite/hld-providers.jpg)

` },
     
    ]  
  },
  {
    id: 'lld',
    title: 'LLD - Low Level Design',
    subsections: [
      { id: 'lld overview', title: 'LLD Overview', content: `

Technical specifications and detailed implementation for developers

![lld dash](/infraglidewebsite/lld-one.JPG)

### Key Features

- **Pipeline Filtering**

![hld filter](/infraglidewebsite/hld-filters.JPG)

- **Providers**

![hld providers](/infraglidewebsite/hld-providers.jpg)

` },
     
    ]  
  },

   {
    id: 'credentials',
    title: 'Credentials',
    subsections: [
      { id: 'credentials', title: 'Credentials Overview', content: `

Manage your cloud provider credentials

![creds dash](/infraglidewebsite/creds-one.JPG)

### Key Features

- **Create New Credentials**

![creds new](/infraglidewebsite/creds-new.JPG)


![creds new form](/infraglidewebsite/creds-new-form.JPG)

` },
     
    ]  
  },

   {
    id: 'deployed-resources',
    title: 'Deployed Resources',
    subsections: [
      { id: 'deployed-resources', title: 'Deployed Resources Overview', content: `

Monitor and manage your cloud infrastructure inventory for Google Cloud.

![deployed resources dash](/infraglidewebsite/deployed-one.JPG)


![deployed resources](/infraglidewebsite/deployed-two.JPG)

` },
     
    ]  
  },

  {
    id: 'cost-optimization',
    title: 'Cost Optimization',
    subsections: [
      { id: 'cost-optimization', title: 'Cost Optimization Overview', content: `

One-click recommendations to optimize your cloud infrastructure costs

![cost dash](/infraglidewebsite/cost-one.JPG)


![cost pipeline](/infraglidewebsite/cost-two.png)

` },
     
    ]  
  },

];







export default function Docs() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [activeSubsection, setActiveSubsection] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    { type: 'assistant', text: 'Hi! I\'m the Infraglide AI Assistant. I can help you find information about our documentation, answer questions about infrastructure management, and guide you through our platform. What would you like to know?' }
  ]);
  const [aiInput, setAiInput] = useState('');

  const currentSection = docSections.find(s => s.id === activeSection);

  // Handle keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'i') {
        e.preventDefault();
        setIsAIOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsAIOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = [];

    docSections.forEach(section => {
      section.subsections.forEach(subsection => {
        if (
          subsection.title.toLowerCase().includes(query) ||
          subsection.content.toLowerCase().includes(query)
        ) {
          results.push({
            sectionId: section.id,
            sectionTitle: section.title,
            subsectionId: subsection.id,
            subsectionTitle: subsection.title,
            subsectionContent: subsection.content,
          });
        }
      });
    });

    setSearchResults(results);
  }, [searchQuery]);

  const handleSearchResultClick = (sectionId, subsectionIdx) => {
    setActiveSection(sectionId);
    setActiveSubsection(subsectionIdx);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleAISend = () => {
    if (!aiInput.trim()) return;

    // Add user message
    const userMessage = { type: 'user', text: aiInput };
    setAiMessages([...aiMessages, userMessage]);
    setAiInput('');

    // Simulate AI response with a delay
    setTimeout(() => {
      const responses = [
        'Based on our documentation, here\'s what I found: Infrastructure deployment typically involves connecting your cloud account, configuring your resources, and then deploying with a single click.',
        'That\'s a great question! We recommend checking our Security Best Practices guide for detailed information on how to secure your infrastructure deployments.',
        'You can manage multiple environments (dev, staging, production) through our environment management tools. Would you like me to show you how?',
        'API-first design is one of our core features. You can integrate Infraglide with any tool using our comprehensive REST API. Check the API Reference section for details.',
        'For troubleshooting and more detailed assistance, I recommend visiting our FAQ section or contacting our support team directly.',
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const assistantMessage = { type: 'assistant', text: randomResponse };
      setAiMessages(prev => [...prev, assistantMessage]);
    }, 800);
  };

  return (
    <div className="w-full">
      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-20"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-96 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="p-6 border-b border-gray-200">
                <div className="relative flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    autoFocus
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 text-lg outline-none"
                  />
                  <span className="text-xs text-gray-400 px-2 py-1 bg-gray-100 rounded">ESC</span>
                </div>
              </div>

              {/* Search Results */}
              <div className="overflow-y-auto max-h-80">
                {searchResults.length > 0 ? (
                  <div className="divide-y">
                    {searchResults.map((result, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => {
                          const subsectionIdx = docSections
                            .find(s => s.id === result.sectionId)
                            ?.subsections.findIndex(sub => sub.id === result.subsectionId);
                          handleSearchResultClick(result.sectionId, subsectionIdx);
                        }}
                        className="w-full text-left p-4 hover:bg-purple-50 transition"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="text-xs text-purple-600 font-semibold">{result.sectionTitle}</div>
                            <div className="text-sm font-semibold text-gray-900 mt-1">{result.subsectionTitle}</div>

                            {/* ✅ UPDATED: clean preview text */}
                           <div className="text-sm text-gray-600 mt-1 line-clamp-2">
                           {result.subsectionContent
                            .replace(/<[^>]+>/g, "")   // ✅ remove HTML
                            .replace(/[#_*`>-]/g, "")  // ✅ remove markdown
                            .replace(/\n/g, " ")       // ✅ remove line breaks
                            .slice(0, 120) + "..."}    
                          </div>
                          </div>

                          <svg className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                ) : searchQuery.trim() ? (
                  <div className="p-8 text-center">
                    <p className="text-gray-500">No results found for "{searchQuery}"</p>
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-gray-500 text-sm">Start typing to search documentation</p>
                  </div>
                )}
              </div>

              {/* Footer with Ask AI */}
              <div className="border-t border-gray-200 p-4 bg-gray-50 flex items-center justify-between">
                <button 
                  onClick={() => setIsAIOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 transition text-sm font-medium text-gray-700"
                >
                  <span>✨</span>
                  Ask AI
                </button>
                <span className="text-xs text-gray-500">Use ⌘K or Ctrl+K to open</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Chat Modal */}
      <AnimatePresence>
        {isAIOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end justify-end sm:items-center sm:justify-center p-4"
            onClick={() => setIsAIOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 100 }}
              className="bg-white rounded-lg shadow-2xl w-full sm:max-w-2xl h-96 sm:h-[32rem] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  <div>
                    <h2 className="font-semibold">Infraglide AI Assistant</h2>
                    <p className="text-xs text-purple-100">Powered by AI</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsAIOpen(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {aiMessages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg ${
                        msg.type === 'user'
                          ? 'bg-purple-600 text-white rounded-br-none'
                          : 'bg-gray-100 text-gray-900 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask me anything about Infraglide..."
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAISend()}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                  <button
                    onClick={handleAISend}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:shadow-lg transition font-medium text-sm"
                  >
                    Send
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Press Enter or click Send. Use ⌘I or Ctrl+I to open</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-screen -mx-6 py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-purple-100 mb-8">Everything you need to know about Infraglide</p>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full max-w-md px-4 py-3 rounded-lg bg-white text-gray-800 flex items-center justify-between hover:shadow-lg transition group"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search documentation...</span>
            </div>
            <span className="text-xs text-gray-400 px-2 py-1 bg-gray-100 rounded group-hover:bg-gray-200 transition">⌘K</span>
          </button>
        </div>
      </motion.section>

     {/* Documentation Grid */}
<div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">

  {/* Left Sidebar - Navigation */}
  <motion.aside
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="md:col-span-1"
  >
    <nav className="sticky top-24 space-y-6">
      {docSections.map(section => (
        <div key={section.id}>
          <button
            onClick={() => {
            // ✅ TOGGLE LOGIC ADDED HERE
            if (activeSection === section.id) {
              setActiveSection(null); // collapse if already open
            } else {
              setActiveSection(section.id); // expand
              setActiveSubsection(0);
            }
          }}
            className={`block w-full text-left px-4 py-2 rounded-lg font-semibold transition ${
              activeSection === section.id
                ? 'bg-purple-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {section.title}
          </button>

          {activeSection === section.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-2 ml-2 space-y-1 border-l-2 border-purple-300 pl-3"
            >
              {section.subsections.map((sub, idx) => (
                <button
                  key={sub.id}
                  onClick={() => {
                    setActiveSubsection(idx);
                    const el = document.getElementById(sub.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className={`block w-full text-left px-3 py-1.5 rounded text-sm transition ${
                    activeSubsection === idx
                      ? 'bg-purple-100 text-purple-700 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {sub.title}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </nav>
  </motion.aside>

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          {currentSection && (
            <div>
              <h2 className="text-4xl font-bold mb-2">{currentSection.title}</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-blue-500 rounded mb-8"></div>
              
              <div className="space-y-8">
                {currentSection.subsections.map((subsection, idx) => (
                  <motion.article
                    id={subsection.id}  // ✅ ADDED
                    key={subsection.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className={`p-6 rounded-lg border-l-4 transition ${
                      activeSubsection === idx
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{subsection.title}</h3>
                    <div className="text-gray-700 mb-6 leading-relaxed prose prose-sm max-w-none">
                      <ReactMarkdown
                        rehypePlugins={[rehypeRaw]} 
                        components={{
                          h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-6 mb-4 text-gray-900" {...props} />,
                          h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-5 mb-3 text-gray-900" {...props} />,
                          h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900" {...props} />,
                          h4: ({node, ...props}) => <h4 className="text-lg font-bold mt-3 mb-2 text-gray-900" {...props} />,
                          p: ({ node, ...props }) => <p className="mb-4 text-gray-700 leading-7 text-left md:text-justify" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700" {...props} />,
                          ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700" {...props} />,
                          li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                          strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
                          em: ({node, ...props}) => <em className="italic text-gray-700" {...props} />,
                          code: ({node, inline, ...props}) => 
                            inline ? 
                              <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono" {...props} /> :
                              <code className="block bg-gray-100 p-4 rounded-lg text-gray-900 font-mono text-sm overflow-x-auto mb-4" {...props} />,
                          pre: ({node, ...props}) => <pre className="block bg-gray-900 p-4 rounded-lg text-gray-100 font-mono text-sm overflow-x-auto mb-4" {...props} />,
                          blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-600 mb-4" {...props} />,
                          img: ({node, ...props}) => <img className="max-w-full h-auto rounded-lg my-4" {...props} />,
                          a: ({node, ...props}) => <a className="text-purple-600 hover:text-purple-800 underline" {...props} />,
                          table: ({node, ...props}) => <table className="w-full border-collapse border border-gray-300 mb-4" {...props} />,
                          thead: ({node, ...props}) => <thead className="bg-gray-100" {...props} />,
                          tbody: ({node, ...props}) => <tbody {...props} />,
                          th: ({node, ...props}) => <th className="border border-gray-300 px-3 py-2 text-left font-bold" {...props} />,
                          td: ({node, ...props}) => <td className="border border-gray-300 px-3 py-2" {...props} />,
                        }}
                      >
                        {subsection.content}
                      </ReactMarkdown>
                    </div>
                    
                    {activeSubsection === idx && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-purple-600 font-semibold hover:text-purple-800 transition"
                      >
                        Learn more →
                      </motion.button>
                    )}
                  </motion.article>
                ))}
              </div>
            </div>
          )}
        </motion.main>

        {/* Right Sidebar - On This Page */}
<motion.aside
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="md:col-span-1"
>
  <div className="sticky top-24 bg-gray-50 p-6 rounded-lg">
    <h3 className="text-lg font-bold mb-4 text-gray-900">On This Page</h3>
    <nav className="space-y-2">
      {currentSection?.subsections.map((subsection, idx) => (
        <a
          key={subsection.id}
          onClick={() => {
            setActiveSubsection(idx);
            const el = document.getElementById(subsection.id);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className={`block text-sm py-2 px-3 rounded transition cursor-pointer ${
            activeSubsection === idx
              ? 'text-purple-600 font-semibold bg-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {subsection.title}
        </a>
      ))}
    </nav>
    
    {/* Quick Links */}
    <div className="mt-8 pt-6 border-t border-gray-200">
      <p className="text-sm font-semibold text-gray-900 mb-3">Need Help?</p>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="text-purple-600 hover:text-purple-800 transition">→ API Reference</a></li>
        <li><a href="#" className="text-purple-600 hover:text-purple-800 transition">→ Code Examples</a></li>
        <li><a href="#" className="text-purple-600 hover:text-purple-800 transition">→ Contact Support</a></li>
      </ul>
    </div>
  </div>
</motion.aside>
</div> </div> ); }
