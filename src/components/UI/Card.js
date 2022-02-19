import React from 'react';

import './Card.css';

// в папку ui мы складываем тупые  компоненты  с версткой для повторного использования 

const Card = (props) => {
  const classes = 'card ' + props.className; // делаем уникальный класс для reusebleности

  return <div className={classes}>{props.children}</div>;// сам блок для получения children и создания карточки (можно сказать это  обертка для  карт)
};

export default Card;
