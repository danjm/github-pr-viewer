# GitHub PR Viewer

This repository contains a simple application that allows you to view open Pull Requests (PRs) in a GitHub repository grouped by team and author. You can run this application locally to get insights into PRs created by different teams.

##Usage
The application will group open PRs by team based on the team configuration provided in the .rc file. If an author is not part of any team, they will be grouped under "Unknown/Other."

PRs are indicated with emojis: 🟢 for non-draft PRs and 🚧 for draft PRs.

Click on a PR title to view the PR on GitHub.

##Contributing
If you'd like to contribute to this project or have suggestions for improvements, please open an issue or submit a pull request.

##License
This project is licensed under the MIT License - see the LICENSE file for details.

Note: Be mindful of sharing sensitive information like your personal access token and repository information. Do not commit sensitive information to the repository. Ensure the .rc file is listed in your project's .gitignore file to prevent accidental commits.
