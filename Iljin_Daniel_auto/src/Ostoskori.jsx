import React from "react";

export default function Ostoskori({ ostoskori }) {
  const yhteishinta = ostoskori.reduce((summa, auto) => summa + auto.hinta, 0);
  const ryhmitelty = ostoskori.reduce((ryhmat, auto) => {
    const avain = `${auto.merkki} ${auto.malli}`;
    ryhmat[avain] = (ryhmat[avain] || 0) + 1;
    return ryhmat;
  }, {});

  return (
    <div className="ostoskori">
      <h2 className="section-title">Ostoskori</h2>
      {Object.entries(ryhmitelty).length === 0 ? (
        <p className="empty-cart">Ostoskori on tyhjä</p>
      ) : (
        <ul className="cart-list">
          {Object.entries(ryhmitelty).map(([nimi, määrä]) => (
            <li key={nimi} className="cart-item">
              <span>{nimi} × {määrä}</span>
            </li>
          ))}
        </ul>
      )}
      <p className="cart-total">Yhteishinta: {yhteishinta} €</p>
    </div>
  );
}
