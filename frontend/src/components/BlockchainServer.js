import React, { useState, useEffect } from 'react';

function BlockchainServer() {
  const [data, setData] = useState('');

  useEffect(() => {
    // Fetch the HTML content from the blockchain server
    fetch('http://localhost:5000')
      .then((response) => response.text())
      .then((content) => setData(content))
      .catch((error) => console.error('Error fetching BlockchainServer data:', error));
  }, []);

  return (
    <div>
      <h2>Blockchain Server</h2>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
}

export default BlockchainServer;

