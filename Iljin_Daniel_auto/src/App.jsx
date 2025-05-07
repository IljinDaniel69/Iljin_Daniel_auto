import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Etusivu</Link>
          <Link to="/ostoskori" className="nav-link">Ostoskori</Link>
        </nav>
        <div className="p-4 max-w-7xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={<AutoLista autot={autot} lisaaOstoskoriin={lisaaOstoskoriin} poistaOstoskorista={poistaOstoskorista} />}
            />
            <Route
              path="/ostoskori"
              element={<Ostoskori ostoskori={ostoskori} poistaOstoskorista={poistaOstoskorista} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}