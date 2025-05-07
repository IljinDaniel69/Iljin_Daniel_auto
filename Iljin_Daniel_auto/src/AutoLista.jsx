import React from "react";
import AutoKortti from "./AutoKortti";

export default function AutoLista({ autot, lisaaOstoskoriin, poistaOstoskorista }) {
  return (
    <div>
      <h2 className="section-title">Saatavilla olevat autot</h2>
      <div className="grid">
        {autot.map((auto) => (
          <AutoKortti
            key={auto.numero}
            auto={auto}
            lisaaOstoskoriin={lisaaOstoskoriin}
            poistaOstoskorista={poistaOstoskorista}
          />
        ))}
      </div>
    </div>
  );
}
