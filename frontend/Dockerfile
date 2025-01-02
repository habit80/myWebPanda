# Use Node.js base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Set permissions for the node_modules cache
RUN mkdir -p /app/node_modules/.cache && chmod -R 777 /app/node_modules/.cache

# Copy the application source code
COPY . .

# Expose the development server port
EXPOSE 2020

# Start the React development server
CMD ["npm", "start"]

