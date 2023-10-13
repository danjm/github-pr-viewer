# GitHub PR Viewer

This repository contains a simple application that allows you to view open Pull Requests (PRs) in a GitHub repository grouped by team and author. You can run this application locally to get insights into PRs created by different teams.

## Prerequisites

Before you can run this application, ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/): JavaScript runtime for running the server script.
- A web browser for viewing the PRs.

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/github-pr-viewer.git
   cd github-pr-viewer

2. Create a .rc file in the project directory with the following format:

```
{
    "REPO_OWNER": "your-repo-owner",
    "REPO_NAME": "your-repo-name",
    "YOUR_PERSONAL_ACCESS_TOKEN": "your-personal-access-token",
    "YOUR_GITHUB_USERNAME": "your-github-username"
}
```

Replace the placeholders with your GitHub repository information and personal access token. Make sure to keep this file private as it contains sensitive information.

3.Install the required Node.js packages:
```
yarn
```
4. Start the local server:
```
node serve-github-prs.js
```
This will start a local server at http://localhost:3000.
5. Open your web browser and navigate to http://localhost:3000 to view the PRs grouped by team and author.

##Usage
The application will group open PRs by team based on the team configuration provided in the .rc file. If an author is not part of any team, they will be grouped under "Unknown/Other."

PRs are indicated with emojis: 🟢 for non-draft PRs and 🚧 for draft PRs.

Click on a PR title to view the PR on GitHub.

##Contributing
If you'd like to contribute to this project or have suggestions for improvements, please open an issue or submit a pull request.

##License
This project is licensed under the MIT License - see the LICENSE file for details.

Note: Be mindful of sharing sensitive information like your personal access token and repository information. Do not commit sensitive information to the repository. Ensure the .rc file is listed in your project's .gitignore file to prevent accidental commits.
