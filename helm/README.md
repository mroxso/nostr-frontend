# Installation
- Make sure you are connected to the correct context with `kubectl config current-context`
- Edit File `helm/custom-values.yaml` to your needs (Ingress, etc)
- Add Repository with `helm repo add bitnami https://charts.bitnami.com/bitnami`
- Install on Cluster with `helm install my-nginx bitnami/nginx --version 13.2.33 --values helm/custom-values.yaml`

## Nginx Helm Chart
https://artifacthub.io/packages/helm/bitnami/nginx