import React from 'react';
import ChainlinkViewer from './components/ChainlinkViewer';
import RecordForm from './components/RecordForm';

function App() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Chainlink & Anonymous Records</h1>
            <ChainlinkViewer />
            <hr style={{ margin: '20px 0' }} />
            <RecordForm />
        </div>
    );
}

export default App;

