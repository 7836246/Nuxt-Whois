FROM node:lts-alpine AS base

# Set the working directory
WORKDIR /usr/src/app
# Install pnpm
RUN apk add --no-cache curl && \
    curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

################################################################################
# Create a stage for installing dependencies
FROM base as dependencies
# Copy the package.json and package-lock.json (or pnpm-lock.yaml if available)
COPY package*.json pnpm-lock.yaml* ./
# Install dependencies
RUN pnpm install --frozen-lockfile

################################################################################
# Create a stage for running the application in development mode
FROM dependencies as development
# Copy the source code
COPY . .
# Expose the port
EXPOSE 3000
# Run the application
CMD ["pnpm", "run", "dev"]

################################################################################
# Create a stage for building the application
FROM dependencies as build
# Copy the source code
COPY . .
# Build the application
RUN pnpm run build
# Remove extraneous packages
RUN pnpm prune --prod

################################################################################
# Create a stage for running the application in production mode
FROM base AS production
# Copy the built application
COPY --from=build /usr/src/app/.output /usr/src/app/.output
# Run the application
CMD ["node", ".output/server/index.mjs"]
