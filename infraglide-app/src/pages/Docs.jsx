import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const docSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    subsections: [
      { id: 'dashboard', title: 'Dashboard & Analytics', content: `# Dashboard & Analytics

## Overview
Access your dashboard to view real-time analytics, monitoring, and insights into your infrastructure performance.

### Key Features

- **Real-time Monitoring**: Track your infrastructure metrics as they happen
- **Custom Dashboards**: Create dashboards tailored to your needs
- **Performance Metrics**: CPU, memory, disk usage, and network throughput
- **Alert Management**: Set up alerts and get notifications

## Getting Started

1. Log into your Infraglide account
2. Navigate to the Dashboard from the main menu
3. Click **Create Dashboard** to start creating your custom view
4. Add widgets by clicking the **+** button

![Dashboard Example](/api/placeholder/800/400)

### Best Practices

> Remember: More metrics don't always mean better insights. Focus on KPIs that matter to your infrastructure.

For more information on advanced analytics, see the [Advanced Metrics](#) section.` },
      { id: 'provisioning', title: 'Provisioning Engine (Terraform)', content: `## Terraform Integration

Infraglide provides seamless integration with Terraform for **Infrastructure as Code** management.

### Why Use Terraform?

- **Declarative Configuration**: Define your infrastructure in code
- **Version Control**: Track all infrastructure changes in git
- **Reusability**: Create templates for common deployments
- **Multi-Cloud Support**: Manage AWS, Azure, GCP resources with one tool

### Getting Started with Terraform

1. Install Terraform on your machine
2. Create a \`.tf\` file with your infrastructure definition
3. Connect your cloud provider credentials
4. Deploy using \`terraform apply\`

### Example Terraform Configuration

\`\`\`hcl
resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "infraglide-instance"
  }
}

resource "aws_s3_bucket" "data_bucket" {
  bucket = "my-data-bucket"
  
  versioning {
    enabled = true
  }
}
\`\`\`

> **Important**: Always review terraform plans before applying to production environments.

### Best Practices

- ✅ Use remote state storage (S3, Azure Storage)
- ✅ Implement variable files for different environments
- ✅ Use Terraform modules for code organization
- ✅ Keep credentials in environment variables or secret managers
- ✅ Document your infrastructure code thoroughly

For detailed Terraform documentation, visit [terraform.io](https://terraform.io)` },
      { id: 'pipeline-mgmt', title: 'Pipeline Management', content: `## Pipeline Management

Manage your deployment pipelines efficiently with Infraglide's intuitive pipeline management system.

### Core Concepts

| Term | Definition |
|------|-----------|
| **Pipeline** | A series of automated steps to build and deploy infrastructure |
| **Stage** | A distinct phase in the deployment process |
| **Artifact** | Output from a pipeline stage |
| **Trigger** | An event that starts the pipeline |

### Creating Pipelines

1. Navigate to **Pipelines** section
2. Click **New Pipeline**
3. Define stages and steps
4. Add actions between stages
5. Test and deploy

### Pipeline Stages

- **Build**: Compile and package your infrastructure code
- **Test**: Run automated tests on your configuration
- **Deploy**: Apply changes to your infrastructure
- **Validate**: Verify deployment success
- **Cleanup**: Remove temporary resources

> Pro Tip: Start with simple pipelines and gradually add complexity as your team becomes familiar with the platform.

### Common Actions

- **Run Pipeline**: Execute the pipeline immediately
- **Schedule Pipeline**: Set up recurring deployments
- **Manual Approval**: Require approval before certain stages
- **Rollback**: Revert to previous infrastructure state` },
      { id: 'hub', title: 'Hub', content: 'Access the Infraglide Hub to discover templates, integrations, and community resources.' },
      { id: 'architecture', title: 'Architecture', content: 'Understand the Infraglide architecture, components, and how everything works together.' },
      { id: 'manage-users', title: 'Manage Users', content: 'Add users to your team, manage roles, permissions, and set up team collaboration features.' },
      { id: 'deployed-resources', title: 'Deployed Resources', content: 'View, manage, and monitor all your deployed resources across your infrastructure.' }
    ]
  },
  {
    id: 'my-pipelines',
    title: 'My Pipeline',
    subsections: [
        { id: 'pipelines-overview', title: 'Purpose and Audience', content: `## Purpose and Audience

Use the **My Pipelines** dashboard to discover, filter, and act on infrastructure pipelines across cloud providers. It's designed for:

- **Platform Engineers**: Manage infrastructure provisioning and lifecycle
- **DevOps Practitioners**: Monitor deployments and pipeline status
- **Developers**: Create and manage infrastructure workflows

### Key Responsibilities

Who manages lifecycle actions:
- Create new pipelines
- Export pipeline definitions
- Run pipeline diffs
- Open and view pipelines
- Rename pipelines
- Delete obsolete pipelines

Monitor deployment status and pipeline health continuously.` },
      { id: 'high-level-overview', title: 'High-level Overview', content: `## High-level Overview

### Global Controls

**Search Pipelines**
- Quickly locate pipelines by name or keyword
- Supports incremental narrowing of results as you type
- Great for finding specific infrastructure configurations

**Provider Filter (All, AWS, Azure, GCP)**
- Toggle between All, AWS, Azure, and GCP
- Focus on a specific cloud context or view everything at once
- Filter by multiple providers simultaneously

**Create Pipeline**
- Starts a guided flow to define and initialize a new pipeline
- Use when onboarding a service or provisioning new infrastructure
- Step-by-step configuration wizard

### Dashboard Components

**Pipeline Overview**
- Displays total pipeline count
- Shows pipeline statistics and health overview

**Main Table**
Lists all pipelines with columns:
- Name
- Provider
- Description
- Deployment Status
- Created At
- Actions` },
      { id: 'key-ui-elements', title: 'Key UI Elements - Pipeline List and Columns', content: `## Key UI Elements - Pipeline List and Columns

### Pipeline Name
- **Purpose**: Primary identifier for the pipeline
- **Feature**: Expandable to reveal version/context-specific actions
- **Available Actions**:
  - Export
  - Open in Canvas
  - Pipeline Diff
  - Delete
- **Versioning**: When you edit and save with new changes, Version increments from V1 to V2

### Provider
- Cloud vendor associated with the pipeline (e.g., GCP, AWS, Azure)
- Helpful for sorting and scoping operational tasks
- Enables multi-cloud management

### Description
- Optional free-text context field
- Add concise, actionable descriptions to assist teammates
- Improves discoverability and clarifies intent

### Deployment Status
- Operational state such as **Destroyed** or **Pending**
- Use this to triage attention:
  - **Pending**: May need monitoring
  - **Destroyed**: Indicates teardown complete
  - **Active**: Pipeline is running
  - **Failed**: Pipeline encountered an error

### Created At
- Timestamp of pipeline creation
- Useful for auditing and lifecycle insights
- Track infrastructure deployment history

### Actions
- Common per-row actions include **Rename** for quick retitling
- Expanded rows surface additional context-specific actions
- Quick access to frequently used operations` },
      { id: 'example-pipelines', title: 'Example Pipelines Observed', content: `## Example Pipelines Observed

The following examples illustrate typical entries and states visible in the dashboard:

| Pipeline Name | Provider | Deployment Status | Created At |
|---------------|----------|-------------------|-----------|
| **<GCP Resource>** | GCP | Destroyed | Feb 3, 2026 |
| **<AWS resource>** | AWS | Pending | Feb 3, 2026 |
| **<Azure Resource>** | Azure | Destroyed | Feb 3, 2026 |

### Understanding the Examples

**<GCP Resource>**
- Successfully deployed and torn down
- Historical record for audit purposes
- Safe to delete once verified

**<AWS resource>**
- Currently provisioning or pending action
- Requires monitoring and attention
- May take time to complete deployment

**<Azure Resource>**
- Deployment completed and resources destroyed
- Clean state ready for new deployments
- Can be reused or archived` },
      { id: 'common-actions', title: 'Common Actions and When to Use Them', content: `## Common Actions and When to Use Them

### Rename
- **When to Use**: Apply clear, human-readable names
- **Benefits**:
  - Improve searchability
  - Reduce confusion with autogenerated identifiers
  - Aid team collaboration
- **Example**: Change from "pipeline-123" to "production-api-deployment"

### Export
- **When to Use**: Capture pipeline definition or artifact
- **Use Cases**:
  - Backups and disaster recovery
  - Code reviews
  - Migrations between environments
  - Documentation and auditing

### Open in Canvas
- **When to Use**: Visualize the pipeline topology
- **Purpose**:
  - Validate architecture
  - Review dependencies
  - Inspect resource relationships
- **Result**: Opens in New Pipeline Canvas for detailed view

### Pipeline Diff
- **When to Use**: Compare versions before applying changes
- **Shows**:
  - Resource additions
  - Resource deletions
  - Configuration changes
- **Action**: Approve with confidence before updates

### Delete
- **When to Use**: Remove obsolete pipelines
- **Benefits**:
  - Keep inventory clean
  - Reduce operational noise
  - Improve dashboard clarity
- **Caution**: Verify teardown is complete before deletion` },
      { id: 'operational-workflow', title: 'Operational Workflow (Suggested)', content: `## Operational Workflow (Suggested)

Follow this workflow for optimal pipeline management:

### Step 1: Search or Filter
Search or filter to narrow to the relevant cloud provider and target pipeline
- Use the search bar for quick lookups
- Apply provider filter to focus on specific clouds
- Use tags/labels for categorization

### Step 2: Expand and Review
Expand the pipeline row to access version-specific actions and artifacts
- Review pipeline configuration
- Check version history
- Verify deployment status

### Step 3: Run Diff Analysis
Run Pipeline Diff to verify changes; if acceptable, proceed with your deployment workflow
- Compare versions before deployment
- Review what's changing
- Ensure changes align with requirements

### Step 4: Visual Validation
Use Open in Canvas to visually validate dependencies and architecture
- See resource relationships
- Identify potential issues
- Validate infrastructure design

### Step 5: Backup and Deploy
Export for backup or review, then apply/monitor until the desired status is reached
- Export pipeline definition
- Apply changes to infrastructure
- Monitor deployment progress
- Track to completion` },
      { id: 'troubleshooting-tips', title: 'Troubleshooting and Tips', content: `## Troubleshooting and Tips

### Issue: Pending for too long

**Symptoms**
- Pipeline stuck in "Pending" state
- No progress for extended period

**Solutions**
- ✅ Check pipeline logs for errors
- ✅ Validate cloud provider credentials
- ✅ Verify appropriate permissions
- ✅ Ensure provider quotas are sufficient
- ✅ Check network connectivity
- ✅ Review resource constraints

### Issue: Destroyed but resources remain

**Symptoms**
- Pipeline shows "Destroyed" status
- Resources still visible in cloud console

**Solutions**
- ✅ Confirm finalizers/cleanup hooks
- ✅ Reconcile via provider console
- ✅ Detect stragglers manually
- ✅ Check for orphaned resources
- ✅ Review cleanup scripts

### Issue: Inconsistent names

**Symptoms**
- Pipeline names don't follow conventions
- Difficulty finding pipelines
- Team confusion about pipeline purpose

**Solutions**
- ✅ Standardize via Rename function
- ✅ Update references in downstream systems
- ✅ Avoid broken links
- ✅ Establish naming conventions
- ✅ Document naming standards

### Pro Tips

> 💡 **Tip 1**: Create a naming convention for your team (e.g., \`env-service-region\`)
> 
> 💡 **Tip 2**: Use descriptions to document pipeline purpose and dependencies
> 
> 💡 **Tip 3**: Regularly archive destroyed pipelines to keep dashboard clean
> 
> 💡 **Tip 4**: Set up alerts for pending pipelines that exceed time thresholds` },
      { id: 'pipelines-faq', title: 'FAQ', content: `## Frequently Asked Questions

### Q: How do I quickly find all GCP pipelines?

**A:** Use the Provider Filter and select **GCP**. Combine with the search bar to further narrow by name or keyword. You can also:
- Filter by status (Pending, Destroyed, Active)
- Use pipeline tags if available
- Sort by creation date or name

### Q: When should I use Pipeline Diff?

**A:** Use Pipeline Diff **before any apply/update operation**. It:
- Surfaces resource adds, deletes, and changes
- Shows configuration modifications
- Allows you to approve with confidence
- Prevents accidental infrastructure changes
- Documents what will change

**Best Practice**: Always review diffs in development/staging before production.

### Q: Is it safe to delete a pipeline once it shows Destroyed?

**A:** Yes, if you:
1. ✅ Verify teardown is complete
2. ✅ Confirm no dependent services require the artifacts
3. ✅ Check that all resources are actually destroyed
4. ✅ Export the definition before deletion for audit history
5. ✅ Have backup records if needed

**Recommendation**: Export pipeline definitions before deletion for compliance and audit trails.

### Q: Can I edit a pipeline after it's created?

**A:** Yes! You can:
- Modify pipeline stages
- Change resource configurations
- Update environment variables
- Add or remove steps
- Save changes (increments version number)

### Q: What happens to my resources if I delete a pipeline?

**A:** If the pipeline is in **Destroyed** status, the infrastructure resources should already be torn down. Deleting the pipeline only removes the pipeline definition from Infraglide, not your cloud resources.

**Warning**: Only delete pipelines that have successfully completed teardown.

### Q: How do I export a pipeline?

**A:** 
1. Expand the pipeline row
2. Click the **Export** action
3. Choose format (TF, JSON, YAML)
4. Save locally or share with team
5. Import into another Infraglide instance if needed` }
    ]
  }
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
                            <div className="text-sm text-gray-600 mt-1 line-clamp-2">{result.subsectionContent}</div>
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
                    setActiveSection(section.id);
                    setActiveSubsection(0);
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
                        onClick={() => setActiveSubsection(idx)}
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
                        components={{
                          h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-6 mb-4 text-gray-900" {...props} />,
                          h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-5 mb-3 text-gray-900" {...props} />,
                          h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900" {...props} />,
                          h4: ({node, ...props}) => <h4 className="text-lg font-bold mt-3 mb-2 text-gray-900" {...props} />,
                          p: ({node, ...props}) => <p className="mb-4 text-gray-700" {...props} />,
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
                  onClick={() => setActiveSubsection(idx)}
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
      </div>
    </div>
  );
}
