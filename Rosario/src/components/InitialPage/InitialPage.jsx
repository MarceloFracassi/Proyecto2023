import React, { useState } from "react";
import "./InitialPage.css";
import imageConstant from "../../Constant/imageConstant.jsx";
import { useNavigate } from "react-router-dom";

const InitialPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Espera 2 segundos
    setIsLoading(false);

    // Redirige a la página de inicio (/Home) después de hacer clic en "VIVI ROSARIO"
    navigate("/Home");
  };

  return (
    <>
      <button
        disabled={isLoading}
        onClick={handleClick}
        className={`button ${isLoading ? "loading" : ""}`}
      >
        <img src={imageConstant.emoji_building} alt="Reload Icon" />
        <span>{isLoading ? "Cargando" : "VIVI ROSARIO"}</span>
      </button>
      <section className="Page_one">
        <img
          src={imageConstant.monumento_bandera}
          alt="Monumento a la Bandera"
        />
      </section>
      <section className="Page_two">
        <img src={imageConstant.rio_parana} alt="Río Paraná" />
      </section>
      <section className="Page_three">
        <img src={imageConstant.planetario} alt="Parque España Noche" />
      </section>
    </>
  );
};

export default InitialPage;
