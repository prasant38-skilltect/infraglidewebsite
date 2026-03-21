# Markdown Guide for Documentation Content

Your Docs page now supports full **Markdown formatting**! Here's how to use it:

## Headings

```markdown
# Heading 1 (H1)
## Heading 2 (H2)
### Heading 3 (H3)
#### Heading 4 (H4)
##### Heading 5 (H5)
###### Heading 6 (H6)
```

## Text Formatting

```markdown
**Bold text**
*Italic text*
***Bold and italic***
~~Strikethrough~~
```

## Lists

### Unordered Lists
```markdown
- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3
```

### Ordered Lists
```markdown
1. First item
2. Second item
   1. Nested ordered item
   2. Another nested item
3. Third item
```

## Links and Images

```markdown
[Link text](https://example.com)
![Alt text for image](https://example.com/image.jpg)
```

## Code

### Inline Code
```markdown
Use `const x = 10;` for inline code
```

### Code Blocks
```markdown
\`\`\`javascript
function helloWorld() {
  console.log('Hello World');
}
\`\`\`

\`\`\`python
def hello_world():
    print('Hello World')
\`\`\`
```

## Blockquotes

```markdown
> This is a blockquote
> 
> It can span multiple lines
```

## Horizontal Line

```markdown
---
```

## Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

## Complete Example

```javascript
{
  id: 'dashboard',
  title: 'Dashboard & Analytics',
  content: `# Dashboard & Analytics

## Overview
Access your dashboard to view real-time analytics.

### Key Features
- Real-time Monitoring
- Custom Dashboards
- Performance Metrics
- Alert Management

## Getting Started

1. Log into your account
2. Navigate to Dashboard
3. Click **Create Dashboard**

\`\`\`bash
npm install react-markdown
\`\`\`

> Pro Tip: Use custom dashboards for better insights

![Dashboard Screenshot](/images/dashboard.jpg)

For more info, visit [our blog](https://example.com).`
}
```

## Implementation in docSections

Update your content strings to use Markdown:

```jsx
const docSections = [
  {
    id: 'section-id',
    title: 'Section Title',
    subsections: [
      {
        id: 'subsection-id',
        title: 'Subsection Title',
        content: `
# Heading
Some text with **bold** and *italic*

- Bullet point 1
- Bullet point 2

[Link](https://example.com)

![Image Alt](https://example.com/image.jpg)
        `
      }
    ]
  }
];
```

## Supported Elements

✅ Headers (H1-H6)
✅ Bold, Italic, Strikethrough
✅ Unordered and Ordered Lists
✅ Nested Lists
✅ Links
✅ Images
✅ Inline Code and Code Blocks
✅ Blockquotes
✅ Tables
✅ Horizontal Lines

## Styling

All Markdown elements are automatically styled with Tailwind CSS:
- Headers have proper sizing and spacing
- Code blocks have syntax highlighting styling
- Tables are fully styled with borders
- Links are purple with hover effects
- Images are responsive and rounded
- Lists have proper indentation
