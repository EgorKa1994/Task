import React from 'react';

export const ShowList = ({ history }) => {
  return (
    <ul className='history-list'>
      {history.map((item) => {
        if (!item) {
          return '...Пока здесь ничего нет...';
        } else {
          return (
            <li key={item.id}>
              <div>{`Coordinates: ${item.coordinates.longitude}, ${item.coordinates.latitude}`}</div>
              <div>{`Address: ${item.address}`}</div>
              <div>{item.date}</div>
            </li>
          );
        }
      })}
    </ul>
  );
};
