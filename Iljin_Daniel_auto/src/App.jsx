import React, { useState, useEffect } from "react";
import AutoLista from "./AutoLista";
import Ostoskori from "./Ostoskori";

import './App.css';

const KaikkiUrl = "http://localhost:3004/autot";

export default function Sovellus() {
  const [autot, setAutot] = useState([]);
  const [ostoskori, setOstoskori] = useState([]);

  const lisaaOstoskoriin = (auto) => {
    setOstoskori((prev) => [...prev, auto]);
  };

  const poistaOstoskorista = (auto) => {
    const ind = ostoskori.findIndex((a) => a.numero === auto.numero);
    if (ind >= 0) {
      ostoskori.splice(ind, 1);
      setOstoskori([...ostoskori]);
    }
  };

  async function haeAutot() {
    const response = await fetch(KaikkiUrl, { mode: 'cors' });
    const hakutulos = await response.json();
    setAutot(hakutulos);
  }

  useEffect(() => {
    haeAutot();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container">
        <h1 className="main-title">Autokauppa</h1>
        <div className="grid">
          <AutoLista autot={autot} lisaaOstoskoriin={lisaaOstoskoriin} poistaOstoskorista={poistaOstoskorista} />
          <Ostoskori ostoskori={ostoskori} poistaOstoskorista={poistaOstoskorista} />
        </div>
      </div>
    </div>
  );
}
