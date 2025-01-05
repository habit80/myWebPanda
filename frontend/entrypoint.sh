#!/bin/bash

# Start blockchain services
mkdir -p /app/logs
# Start Flask servers
python /app/src/blockchain-python/blockchain/blockchain.py -p 5000 > /app/logs/blockchain.log 2>&1 &
python /app/src/blockchain-python/blockchain_client/blockchain_client.py -p 5001 > /app/logs/blockchain_client.log 2>&1 &


# Start the React development server
cd /app && npm start

