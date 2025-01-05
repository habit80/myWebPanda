import React from 'react';

const BlockchainFrames = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100vh', padding: '20px' }}>
            {/* Blockchain Server 5000 - 상단 전체 */}
            <div
                style={{
                    flex: 1,
                    width: '100%',
                    border: '1px solid #ccc',
                    marginBottom: '20px',
                }}
            >
                <iframe
                    src="http://172.30.1.60:5000"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="Blockchain Server"
                />
            </div>

            {/* Blockchain Client 5001, 5002 - 하단 좌우 나란히 */}
            <div style={{ display: 'flex', flex: 1, gap: '20px' ,marginBottom: '40px',}}>
                {/* Blockchain Node #1 */}
                <div style={{ flex: 1, border: '1px solid #ccc' }}>
                    <h3
                        style={{
                            textAlign: 'center',
                            marginBottom: '10px',
                            color: '#FFA500', // 노랑-오렌지 색상
                            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // 세련된 글꼴
                            fontSize: '1.5rem', // 적당한 크기
                            fontWeight: 'bold', // 굵은 글씨
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // 텍스트 그림자
                        }}
                    >
                        Blockchain Node #1
                    </h3>
                    <iframe
                        src="http://172.30.1.60:5001"
                        style={{ width: '100%', height: 'calc(100% - 30px)', border: 'none' }}
                        title="Blockchain Client #1"
                    />
                </div>

                {/* Blockchain Node #2 */}
                <div style={{ flex: 1, border: '1px solid #ccc' }}>
                    <h3
                        style={{
                            textAlign: 'center',
                            marginBottom: '10px',
                            color: '#FFA500', // 노랑-오렌지 색상
                            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // 세련된 글꼴
                            fontSize: '1.5rem', // 적당한 크기
                            fontWeight: 'bold', // 굵은 글씨
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // 텍스트 그림자
                        }}
                    >
                        Blockchain Node #2
                    </h3>
                    <iframe
                        src="http://172.30.1.60:5002"
                        style={{ width: '100%', height: 'calc(100% - 30px)', border: 'none' }}
                        title="Blockchain Client #2"
                    />
                </div>
            </div>
        </div>
    );
};

export default BlockchainFrames;

