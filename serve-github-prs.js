const fs = require('fs');
const http = require('http');
const url = require('url');

// Read the configuration values from the .rc file
const config = fs.readFileSync('.rc', 'utf-8');
const configLines = config.split('\n');
const configValues = {};

configLines.forEach(line => {
    const parts = line.split('=');
    if (parts.length === 2) {
        const key = parts[0].trim();
        const value = parts[1].trim();
        configValues[key] = value;
    }
});

// Read the HTML template
const htmlTemplate = fs.readFileSync('github-prs-template.html', 'utf-8');

// Replace variables in the HTML template
const replacedHtml = htmlTemplate
    .replace('REPO_OWNER', configValues.REPO_OWNER)
    .replace('REPO_NAME', configValues.REPO_NAME)
    .replace('YOUR_PERSONAL_ACCESS_TOKEN', configValues.YOUR_PERSONAL_ACCESS_TOKEN)
    .replace('YOUR_GITHUB_USERNAME', configValues.YOUR_GITHUB_USERNAME);

// Create a simple HTTP server to serve the modified HTML
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(replacedHtml);
});

const PORT = 3000; // Change this to your desired port number
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
