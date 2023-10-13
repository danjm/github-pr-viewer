const fs = require('fs');

// Read the .rc file
const rcFilePath = '.rc';
const rcFileContents = fs.readFileSync(rcFilePath, 'utf8');
const rcConfig = JSON.parse(rcFileContents);

// Read the HTML template file
const htmlTemplatePath = 'github-prs-template.html';
let html = fs.readFileSync(htmlTemplatePath, 'utf8');

// Replace placeholders in the HTML template
html = html.replace(/REPO_OWNER/g, rcConfig.REPO_OWNER);
html = html.replace(/REPO_NAME/g, rcConfig.REPO_NAME);
html = html.replace(/YOUR_PERSONAL_ACCESS_TOKEN/g, rcConfig.YOUR_PERSONAL_ACCESS_TOKEN);
html = html.replace(/YOUR_GITHUB_USERNAME/g, rcConfig.YOUR_GITHUB_USERNAME);

// Write the updated HTML to the output file
const outputHtmlPath = 'index.html';
fs.writeFileSync(outputHtmlPath, html, 'utf8');

console.log('HTML file generated successfully.');