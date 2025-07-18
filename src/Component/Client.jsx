import React from 'react';

const logos = [
  'Triple Whale', 'HANDCASH', 'AscendEX',
  'MojoHeads', 'vera', 'Finmet',
  'TROVE MATE', 'FOLLOW DAO', 'nycrypto',
  'SOCLLY', 'flywallet', 'dolphin'
];

const ClientsSection = () => {
  return (
    <div className="clients-section">
      <div className="logos-grid">
        {logos.map((logo, index) => (
          <div className="logo-item" key={index}>{logo}</div>
        ))}
      </div>
      <div className="buttons-row">
        <button className="action-button">What we do →</button>
        <button className="action-button">Testimonials</button>
      </div>
    </div>
  );
};

export default ClientsSection;