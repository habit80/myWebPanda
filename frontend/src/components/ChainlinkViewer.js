import React, { useState } from 'react';
import axios from 'axios';

function ChainlinkViewer() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('/chainlink'); // Backend API 호출
            setData(response.data);
        } catch (error) {
            console.error('Error fetching Chainlink data:', error);
        }
    };

    return (
        <div>
            <button onClick={fetchData}>View Chainlink Data</button>
            {data && (
                <pre style={{ textAlign: 'left', backgroundColor: '#f4f4f4', padding: '10px' }}>
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </div>
    );
}

export default ChainlinkViewer;

