import React from 'react';

const GrafanaPanels = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' ,margin: '0 auto',}}>
            {/* Chain Branches Panel */}
            <iframe
                //src="http://172.30.1.60:3000"
                src="http://localhost:3000/"
                width="100%"
                height="800px"
                frameBorder="0"
                title="Chain Branches"
            ></iframe>
        </div>
    );
};

export default GrafanaPanels;

