export default function AutoKortti({
  auto,
  lisaaOstoskoriin,
  poistaOstoskorista,
}) {
  return (
    <div className="auto-kortti">
      <h3 className="auto-title">
        {auto.merkki} {auto.malli}
      </h3>
      <p className="auto-price">Hinta: <span className="font-semibold">{auto.hinta} €</span></p>
      <p className="auto-detail">Voimanlähde: {auto.lisätiedot.voimanlähde}</p>
      <p className="auto-detail">Huomautus: {auto.lisätiedot.huomautus}</p>
      <p className="auto-detail">Kulutus: {auto.lisätiedot.kulutus}</p>
      <p className="auto-detail">Värit: {auto.värit.join(", ")}</p>
      <div className="button-group">
        <button
          className="btn bg-blue-500"
          onClick={() => lisaaOstoskoriin(auto)}
        >
          Lisää ostoskoriin
        </button>
        <button
          className="btn bg-red-500"
          onClick={() => poistaOstoskorista(auto)}
        >
          Poista ostoskorista
        </button>
      </div>
    </div>
  );
}
