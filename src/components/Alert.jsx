import React from "react";
import { useSelector } from "react-redux";

const Alert = ({ replayClick, type, showAlert, nextLevel }) => {
  const currentLevel = useSelector((state) => state.game.currentLevel);
  const levelCount = useSelector((state) => state.game.levelCount);
  let buttonDiv, title, description;

  switch (type) {
    case "success":
      buttonDiv = (
        <button
          type="button"
          className="alert--button"
          onClick={() => nextLevel(false)}
        >
          Próximo Level
        </button>
      );
      title = "Muito Bem!";
      description = `Parabens! você completou o level ${currentLevel} de ${levelCount}.`;
      break;
    case "error":
      buttonDiv = (
        <button type="button" className="alert--button" onClick={replayClick}>
          Recarregar
        </button>
      );
      title = "Não Desista!";
      description = "Reinicie o seu jogo, e aproveite para aprender mais";
      break;
    case "warning":
      buttonDiv = (
        <div className="row">
          <div className="col-md-6">
            <button
              type="button"
              className="alert--button"
              onClick={replayClick}
            >
              Reiniciar
            </button>
          </div>
          <div className="col-md-6">
            <button
              type="button"
              className="alert--button bg-dark"
              onClick={() => showAlert(false)}
            >
              Continue
            </button>
          </div>
        </div>
      );

      title = "Cuidado";
      description = "Suas tentativas são insuficientes, reinicie.";
      break;
    case "end":
      title = "Parabens!";
      description = "Você completou todos os leveis, parabens!";
      buttonDiv = (
        <div className="row">
          <div className="col-md-6">
            <button type="button" className="alert--button">
              Finalizado
            </button>
          </div>
          <div className="col-md-6">
            <button
              type="button"
              className="alert--button bg-dark"
              onClick={() => nextLevel(true)}
            >
              Tentar novamente
            </button>
          </div>
        </div>
      );
      break;
    default:
      break;
  }
  return (
    <div className="hero-box">
      <div className="container">
        <div className="row h-100 justify-content-center align-items-start">
          <div className="col-9 col-md-7 col-lg-6 col-xl-5 box">
            <div className="box-header text alert--header">
              Math Memory game
            </div>
            <div className="box-content">
              <div className="alert-description-header">{title}</div>
              <div className="alert-description">{description}</div>
              {buttonDiv}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
