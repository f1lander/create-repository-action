# GitHub Action to create a Repository

This action can be used to create a user or organization repository from your workflows.

f1lander uses this action as part of its CI/CD pipline to create temporary repositories that host app deployments as GitHub pages for different environments. Whenever we receive a pull request, the app is automatically built and pushed into such a temporary "GitHub page host" repository. Once the pull request is merged or closed, the repository is deleted automatically.

## Usage

```yaml
uses: f1lander/create-repository-action@v1
with:
  name: 'repository-name'
  org: 'org-name'
  private: false
  access-token: 'accessTokenWithRepoOrOrgAdminScope'
```
