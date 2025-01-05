import React from 'react';

const GrafanaPanels = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            {/* Chain Branches Panel */}
            <iframe
                //src="http://172.30.1.60:3000"
                src="http://172.30.1.60:3000/goto/nWoDUCNNR?orgId=1"
                width="600"
                height="400"
                frameBorder="0"
                title="Chain Branches"
            ></iframe>

            {/* Network Traffic Panel */}
            <iframe
                src="http://<GRAFANA_SERVER>:3000/d-solo/OTLC2jHWz/bitcoin?orgId=1&panelId=10&refresh=10s"
                width="600"
                height="400"
                frameBorder="0"
                title="Network Traffic"
            ></iframe>
        </div>
    );
};

export default GrafanaPanels;

