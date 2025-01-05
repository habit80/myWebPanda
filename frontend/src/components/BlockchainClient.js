import React, { useState, useEffect } from 'react';

function BlockchainClient() {
  const [data, setData] = useState('');

  useEffect(() => {
    // Fetch the HTML content from the blockchain client
    fetch('http://localhost:5001')
      .then((response) => response.text())
      .then((content) => setData(content))
      .catch((error) => console.error('Error fetching BlockchainClient data:', error));
  }, []);

  return (
    <div>
      <h2>Blockchain Client</h2>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}

export default BlockchainClient;

