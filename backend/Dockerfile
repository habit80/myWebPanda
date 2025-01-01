# Use Node.js base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Install nodemon globally for development
RUN npm install -g nodemon

# Copy the application source code
COPY . .

# Expose the backend port
EXPOSE 4000

# Default command to run in development mode
CMD ["npm", "run", "dev"]

