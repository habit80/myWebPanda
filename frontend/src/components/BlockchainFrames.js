import React from 'react';

const BlockchainFrames = () => {
    return (
	    <div
    style={{
        display: 'flex',
        flexDirection: 'row',
        height: '70vh',
        margin: '0 auto', // 가운데 정렬
        border: '1px solid #ccc', // 선택: 외곽선 추가
        gap: '30px', // 요소 간격 설정
    }}
>
            {/* Blockchain Server 5000 */}
            <div style={{ flex: 1, borderRight: '1px solid #ccc' }}>
                <iframe
                    //src="http://localhost:5000"
                    src="http://172.30.1.60:5000"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="Blockchain Server 5000"
                />
            </div>

            {/* Blockchain Client 5001 */}
            <div style={{ flex: 1 }}>
                <iframe
                    //src="http://localhost:5001"
                    src="http://172.30.1.60:5001"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="Blockchain Client 5001"
                />
            </div>
        </div>
    );
};

export default BlockchainFrames;

