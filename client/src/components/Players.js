import React from 'react';
import PlayerCards from './PlayerCards';

const Players = (props) => {
  return (
    <>
      {props.data.map(player => {
        return <PlayerCards data={player} key={player.id} />
      })}
    </>
  )
}

export default Players;