import React from 'react'


function GameItem({ game }) {
  return (   

    <div style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '15px',
        width: '300px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        background: 'lavender'
    }}>
        <h2 style={{color: "#7831ba", fontSize:"18px", margin: "10px 0"}}>
        <b>{game.title}</b>
        </h2>
        <p style={{color: "black", fontSize: "16px", margin:"10px 0"}}> 
            {game.description}</p>
        
        </div>
  );
}
export default GameItem;