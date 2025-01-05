import React, { useEffect, useState } from 'react';

const ChainlinkViewer = () => {
    const [prices, setPrices] = useState({ btc: 'Loading...', eth: 'Loading...' });

    useEffect(() => {
        const socket = new WebSocket('ws://172.30.1.60:4000'); // Connect to backend WebSocket

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setPrices({
                btc: data.btc || 'N/A',
                eth: data.eth || 'N/A',
            });
        };

        // Clean up WebSocket connection on component unmount
        return () => socket.close();
    }, []);

    return (
        <div>
            <h2>체인링크로 가져오는 실시간 시세</h2>
            <div>
                <strong>BTC/USD: $</strong> {prices.btc}
            </div>
            <div>
                <strong>ETH/USD: $</strong> {prices.eth}
            </div>
        </div>
    );
};

export default ChainlinkViewer;

