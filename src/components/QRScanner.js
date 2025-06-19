import React from 'react';

function QRScanner() {
  const handleScan = () => {
    alert("QR Scanned: Vendor ID 12345\nSimulating Payment...");
  };

  return (
    <div>
      <h2>Scan Vendor QR Code</h2>
      <button onClick={handleScan}>Simulate QR Scan</button>
    </div>
  );
}

export default QRScanner;