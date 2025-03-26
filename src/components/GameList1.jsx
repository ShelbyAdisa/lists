import React from 'react'
import GameItem from './GameItem'

function GameList1({games}) {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {games.map((game) => (
            <GameItem key={game.id} game={game} />
          ))}
        </div>
      );
}

export default GameList1