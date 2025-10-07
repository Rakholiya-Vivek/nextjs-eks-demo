# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy all source files
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Run the built app
FROM node:18-alpine
WORKDIR /app

ENV NODE_ENV=production

# Copy build output and necessary files
COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]
