import React from "react";
import backgroundImage from "assets/img/background.png";
import style from "./Card.module.css";

const Card = ({ data, setStatus, index, size }) => {
  const content =
    data && data.status ? (
      data.type === "math" ? (
        <math xmlns="http://www.w3.org/1998/Math/MathML" dangerouslySetInnerHTML={{ __html: data.value }} color="var(--black)" />
      ) : (
        <p className="game-card-text">{data.value}</p>
      )
    ) : (
      <span className={style.CardBack}>
        <svg id="icon-sigma" viewBox="0 0 32 32">
          <path d="M0.595 0h30.811v7.542h-5.463v-2.078h-13.644l8.826 10.537-8.826 10.537h13.645v-2.078h5.463v7.542h-30.811l13.402-16-13.402-16z"></path>
        </svg>
      </span>
    );

  const colClassName = `game-col game-col-${size} ${style.CardCol}`;
  return (
    <div className={colClassName}>
      <div
        className={`
          ${
            data && data.className ? `game-card ${data.className}` : "game-card"
          }
          ${style.CardWrap}
        `}
        onClick={() => setStatus(index)}
      >
        <div className={`${style.Card} game-card-content`}>{content}</div>
      </div>
    </div>
  );
};

export default Card;
