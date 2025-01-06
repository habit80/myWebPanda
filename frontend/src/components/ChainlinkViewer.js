import React, { useEffect, useState } from 'react';

const ChainlinkViewer = () => {
    const [prices, setPrices] = useState({ btc: 'Loading...', eth: 'Loading...' });

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:4000'); // Connect to backend WebSocket

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
            <h2>Binance 실시간 시세</h2>
            <div>
                <strong>BTC/USD: $  </strong>
                <span style={{ color: '#FF8C00', fontWeight: 'bold' }}>{prices.btc}</span> {/* 주황색 스타일 */}
            </div>
            <div>
                <strong>ETH/USD: $  </strong>
                <span style={{ color: '#FF8C00', fontWeight: 'bold' }}>{prices.eth}</span> {/* 주황색 스타일 */}
            </div>
        </div>

    );
};

export default ChainlinkViewer;

