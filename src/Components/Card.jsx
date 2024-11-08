import React from "react";

const Card = ({ preferencias }) => {
  return (
    <div className="card">
      <h3>¡Gracias por compartir tus preferencias!</h3>
      <h4>Fruta favorita: {preferencias.frutaFavorita}</h4>
      <h4>Color favorito: {preferencias.colorFavorito}</h4>
    </div>
  );
};

export default Card;
