# Use Node.js base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Ensure the target directory exists
RUN mkdir -p /app/node_modules/react-scripts/config/

# Copy the custom config file (replace existing one)
COPY docker/custom-config/webpackDevServer.config.js /app/node_modules/react-scripts/config/webpackDevServer.config.js

# Log the contents of the copied file
RUN echo "Contents of webpackDevServer.config.js:" && \
    cat /app/node_modules/react-scripts/config/webpackDevServer.config.js

# Copy the application source code
COPY . .

# Expose the necessary port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

