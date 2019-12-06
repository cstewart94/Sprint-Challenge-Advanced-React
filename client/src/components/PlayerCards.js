import React from 'react';

const styledDiv = {
  width: '200px',
  height: '250px',
  padding: '1%',
  margin: '1%',
  background: 'lightgray'
}

const PlayerCards = (props) => {
  return (
    <div style={styledDiv} >
      <h1>{props.data.name}</h1>
      <h2>{props.data.country}</h2>
      <h2>Searches:{props.data.searches}</h2>
    </div>
  )
}

export default PlayerCards;