# My AKS Project

Demo app deployed to Azure Kubernetes Service (AKS) via GitHub Actions.

## Stack
- Git Bash + Git
- GitHub + GitHub Actions
- Azure Container Registry (ACR)
- Azure Kubernetes Service (AKS)
- Azure Monitor + Container Insights

## Rolling Updates
Deployments use rolling update strategy — new pods come up healthy before old ones are removed.
