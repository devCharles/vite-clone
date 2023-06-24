import React from "react";

export default function Card(props) {
  const { emoji, title, text } = props;

  return (
    <article className="card">
      <header>
        <div className="card_emoji">{emoji}</div>
      </header>
      <p className="card_title">{title}</p>
      <p className="card_text">{text}</p>
    </article>
  );
}
