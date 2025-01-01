import React, { useState } from 'react';
import axios from 'axios';

function RecordForm() {
    const [record, setRecord] = useState('');
    const [message, setMessage] = useState('');

    const saveRecord = async () => {
        if (!record) {
            setMessage('Please enter a record.');
            return;
        }
        try {
            await axios.post('/record', { record }); // Backend API 호출
            setMessage('Record saved successfully!');
            setRecord(''); // 입력 필드 초기화
        } catch (error) {
            console.error('Error saving record:', error);
            setMessage('Failed to save record.');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={record}
                onChange={(e) => setRecord(e.target.value)}
                placeholder="Enter your record"
            />
            <button onClick={saveRecord}>Save Record</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default RecordForm;

