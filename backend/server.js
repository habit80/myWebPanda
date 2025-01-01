const express = require('express');
const axios = require('axios');
const pool = require('./db'); // PostgreSQL 연결 설정

const app = express();
const PORT = 4000;
const cors = require('cors');

app.use(express.json()); // JSON 요청 파싱

// CORS 설정
app.use(cors()); // 모든 도메인의 요청 허용

// API to fetch Chainlink data
app.get('/chainlink', async (req, res) => {
    try {
        // CoinGecko API 호출
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 100,
                page: 1,
                sparkline: false
            }
        });

        const data = response.data;

        // PostgreSQL에 저장 (예: 첫 번째 코인 정보만 저장)
        if (data.length > 0) {
            await pool.query(
                'INSERT INTO chainlink_data (data) VALUES ($1)',
                [JSON.stringify(data[0])] // 첫 번째 코인 데이터 저장
            );
        }

        // 클라이언트에 API 응답 반환
        res.json(data);
    } catch (error) {
        console.error('Error fetching CoinGecko data:', error);
        res.status(500).json({ error: 'Failed to fetch CoinGecko data' });
    }
});

// API to save anonymous records
app.post('/record', async (req, res) => {
    const { record } = req.body;

    if (!record) {
        return res.status(400).json({ error: 'Record is required' });
    }

    try {
        await pool.query('INSERT INTO anonymous_records (record) VALUES ($1)', [record]);
        res.status(201).json({ message: 'Record saved successfully' });
    } catch (error) {
        console.error('Error saving record:', error);
        res.status(500).json({ error: 'Failed to save record' });
    }
});

// Default route to handle `/`
app.get('/', (req, res) => {
    res.send('Welcome to the Backend API! Use /chainlink or /record for specific functionality.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});

