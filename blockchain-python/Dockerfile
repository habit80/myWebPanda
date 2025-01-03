# Use a base image with both Python and Node.js
FROM python:3.8

# Install Node.js
RUN apt-get update && apt-get install -y nodejs npm

# Set working directory inside the container
WORKDIR /app

# Copy all project files to the container
COPY . /app/

# Install Python dependencies
RUN pip install --no-cache-dir -r /app/requirements.txt
RUN pip install Flask --upgrade

# Create a logs directory
RUN mkdir /app/logs

# Expose the necessary ports
EXPOSE 5000
EXPOSE 5001

# Start both blockchain.py and blockchain_client.py concurrently with logging
CMD ["sh", "-c", "python /app/blockchain/blockchain.py -p 5000 > /app/logs/blockchain.log 2>&1 & python /app/blockchain_client/blockchain_client.py -p 5001 > /app/logs/blockchain_client.log 2>&1 & wait"]

