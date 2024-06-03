import React from "react";
import { useSelector } from "react-redux";
import memoryGameLogo from "assets/img/memory-game-logo.png";
import { LogoIcon } from "./LogoIcon";

const GameProgress = () => {
  const { currentLevel, levelCount } = useSelector((state) => state.game);

  let levelProgressWidth =
    Math.round((currentLevel / levelCount) * 100).toString() + "%";

  return (
    <div className="game-item-head">
      <div>
        <div className="game-item-presentation">
          <LogoIcon size={80} fill="var(--secondary-700)" />
          <div className="game-item-head-titles">
            <h1> Math Memory Game </h1>
            <h2>Matemática Aplicada Computacional</h2>
            <h3> Unicentro Guarapuava/PR</h3>
          </div>
        </div>
        <div className="game-progress-text">
          <span>
            {currentLevel}/{levelCount} level
          </span>
        </div>
        <div className="game-progress-bar">
          <div
            className="game-progress-line"
            style={{ width: levelProgressWidth }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GameProgress;
