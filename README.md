# 🚀 DevOps Assessment — Next.js App with Docker, GitHub Actions & Minikube

## 🎯 Objective
Containerize a Next.js app using Docker, automate image build & push to GHCR via GitHub Actions, and deploy it on Minikube using Kubernetes manifests.

## ⚙️ Setup & Run Instructions
Clone the repository, create the environment file, install dependencies, and start the app locally or with Docker.

```bash
# Clone repo
git clone https://github.com/<your-username>/nextjs-eks-demo.git
cd nextjs-eks-demo

# Create .env file
cp .env.example .env

# Install dependencies
npm install

# Run locally
npm run dev
# Access at: http://localhost:3000
# Health check: http://localhost:3000/api/health

# Run with Docker
docker build -t nextjs-eks-demo .
docker run -p 3000:3000 nextjs-eks-demo

GitHub Actions (CI/CD)

On push to main, a workflow builds and pushes the Docker image to GHCR.
Image URL:
ghcr.io/<your-username>/nextjs-eks-demo:latest



# Start Minikube
minikube start --driver=docker

# Apply Kubernetes manifests
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

# Check status
kubectl get pods
kubectl get services

# Access application
minikube service nextjs-service --url


Open the displayed URL in your browser to access the deployed Next.js app.
