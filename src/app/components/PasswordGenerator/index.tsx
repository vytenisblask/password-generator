"use client";

import React, { useState, useEffect } from "react";
import "./PasswordGenerator.scss";

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const generatePassword = (): void => {
    const uppercase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase: string = "abcdefghijklmnopqrstuvwxyz";
    const numbers: string = "0123456789";
    const symbols: string = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars: string = "";
    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let generatedPassword: string = "";
    for (let i: number = 0; i < 20; i++) {
      generatedPassword += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(generatedPassword);
  };

  useEffect(() => {
    generatePassword();
  }, []);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <div className="container">
      <div className="generator-group">
        <h1>Generate Strong Password</h1>
        <p>
          Upgrade the security of your online accounts. <br />
          Create strong passwords that are completely random and impossible to
          guess.
        </p>

        <div className="password-container">
          <div className="input-group">
            <input type="text" value={password} readOnly />
            <div className="button-group">
              <button onClick={generatePassword} className="generate">
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1745_530)">
                    <path
                      d="M13.1302 21.8175C7.27834 21.8175 2.58339 16.8518 3.18705 10.9845C3.66555 6.33152 7.55384 2.59202 12.2992 2.21477C15.6899 1.94552 18.8692 3.33677 20.9114 5.83052L16.6629 5.27177L16.3676 7.43477L22.9727 8.30327C23.1173 8.32238 23.2642 8.31329 23.4052 8.27655C23.5462 8.2398 23.6785 8.17612 23.7944 8.08912C23.9104 8.00213 24.0078 7.89354 24.081 7.76955C24.1542 7.64557 24.2019 7.50862 24.2212 7.36652L25.1057 0.879025L22.904 0.589525L22.4118 4.20002C19.8094 1.20152 15.8295 -0.407225 11.623 0.0892746C6.01531 0.750025 1.54473 5.24027 0.976939 10.7595C0.241254 17.9303 5.97868 24 13.131 24C19.6766 24 25.0363 18.918 25.3347 12.5595C25.3369 12.4865 25.3242 12.4137 25.2971 12.3456C25.2701 12.2775 25.2293 12.2155 25.1773 12.1632C25.1253 12.111 25.0631 12.0696 24.9944 12.0416C24.9257 12.0135 24.8519 11.9994 24.7776 12H23.6656C23.5216 12.0013 23.3836 12.0571 23.2804 12.1559C23.1771 12.2547 23.1167 12.3888 23.1116 12.5303C22.83 17.6978 18.4609 21.8183 13.1302 21.8183V21.8175Z"
                      fill="#B9BABD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1745_530">
                      <rect
                        width="24.4211"
                        height="24"
                        fill="#B9BABD"
                        transform="translate(0.913696)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button onClick={copyPassword} className="copy">
                Copy Password
                {showTooltip && <div className="tooltip">Password copied!</div>}
              </button>
            </div>
          </div>

          <div className="checkbox-group">
            <div className="checkbox-pair">
              <label>
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={() => setIncludeUppercase(!includeUppercase)}
                />
                uppercase
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={() => setIncludeLowercase(!includeLowercase)}
                />
                lowercase
              </label>
            </div>
            <div className="checkbox-pair">
              <label>
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers(!includeNumbers)}
                />
                numbers
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={() => setIncludeSymbols(!includeSymbols)}
                />
                symbols
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
