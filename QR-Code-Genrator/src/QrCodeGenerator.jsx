import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleQrCode = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name="qr-code-input"
        placeholder="Enter any text"
        value={input}
      />
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={() => handleQrCode()}
      >
        Generate QR Code
      </button>
      <div className="qr-code-container">
        <QRCode id="qr-code-value" size={400} value={qrCode} />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
