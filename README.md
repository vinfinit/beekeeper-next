# Beekeeper-next
A Next.js serverless app using ZEIT Now cloud platform.

## Getting Started

To get started, simply clone the repository and run `npm install`

```
# Clone the repo
git clone https://github.com/vinfinit/beekeeper-next.git

# Move into the new directory
cd beekeeper-next/

# Install npm packages
npm install

# Install Now CLI
npm i -g now 

# Update environment variables in .env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/<database-name>?retryWrites=true >> .env

# Start up the now dev server, browse to http://localhost:3000/
now dev
```

## Deploy

```
# Define Now Secrets
now secrets add mongodb-uri <secret-value>

# Deploy app with a single command in your terminal
now
```
