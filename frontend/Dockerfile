# Use a lightweight base image
FROM python:3.9-slim

# Install Node.js
RUN apt-get update && apt-get install -y nodejs npm

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all source files, including entrypoint.sh
COPY . .

# Install Python dependencies
RUN pip install --no-cache-dir -r ./src/blockchain-python/requirements.txt
RUN pip install Flask --upgrade

# Prepare logs directory
RUN mkdir -p /app/logs && chmod -R 777 /app/logs

# Ensure entrypoint.sh has execution permissions
RUN chmod +x /app/entrypoint.sh

# Expose required ports
EXPOSE 2020 5000 5001

# Run the entrypoint script
CMD ["/app/entrypoint.sh"]

