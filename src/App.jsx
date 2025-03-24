// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   return ( 
//     <div className="text-center p-10"> 
//       <h1 className="text-4xl font-bold text-blue-600">Tours & Travel React App</h1> 
//       <p className="mt-4 text-lg text-gray-700">Styled with Tailwind CSS</p> 
//     </div> 
//   ); 
// } 
// export default App; 


// <Navbar/>
// import { useState } from 'react' 
// import { Route, Routes } from 'react-router-dom' 
// import './App.css' 
// import About from './pages/About' 
// import Contact from './pages/Contact' 
// import Services from './pages/Services' 
// import Foot from './pages/Foot' 
// import Home from './pages/Home' 
// import Nav from './pages/nav'

 
 
// function App() { 
 
//  return ( 
//    <> 
//    <Nav/>
//    <Routes> 
//      <Route path='/' element={<Home/>}/> 
//      <Route path='/about' element={<About/>}/> 
//      <Route path='/services' element={<Services/>}/> 
//      <Route path='/teeth' element={<Teeth/>}/>
//      <Route path='/contact' element={<Contact/>}/> 
     

//    </Routes> 
//    <Foot/> 
 
//    </> 
//  ) 
// } 
 
// export default App 
 
 
 import React from "react";
 import GameList from "./components/gamelist";
 
 const games = [
   {
     id: 1,
     title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    releaseYear: 2017,
     description: "An open-world action-adventure game set in the vast kingdom of Hyrule.",
     genre: "Action-adventure",
    platforms: ["Nintendo Switch"],
   },
   {
     id: 2,
     title: "Elden Ring",
      developer: "FromSoftware",
      releaseYear: 2022,
     description: "An action RPG set in a dark fantasy world, developed by FromSoftware.",
     genre: "Action RPG",
     platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
   },
   {
     id: 3,
     title: "Red Dead Redemption 2",
     developer: "Rockstar Games",
     releaseYear: 2018,
     description: "An epic Western action-adventure game with an immersive open world.",
     genre: "Action-adventure",
     platforms: ["PC", "PS4", "Xbox One"],
    },
   {
        id: 4,
        title: "The Witcher 3: Wild Hunt",
        developer: "CD Projekt Red",
        releaseYear: 2015,
        description: "An open-world action RPG set in a fantasy universe, following the story of Geralt of Rivia.",
        genre: "Action RPG",
        platforms: ["PC", "PS4", "Xbox One"],
      },
    {
        id: 5,
        title: "Civilization VI",
        developer: "Firaxis Games",
        releaseYear: 2016,
        description: "A turn-based strategy game where you attempt to build an empire to stand the test of time.",
        genre: "Turn-based strategy",
        platforms: ["PC", "Mac", "Linux"],
      },
    {
        id: 6,
        title: "Super Mario Odyssey",
        developer: "Nintendo",
        releaseYear: 2017,
        description: "A platformer game where Mario embarks on a globe-trotting adventure to save Princess Peach.",
        genre: "Platformer",
        platforms: ["Nintendo Switch"],
      },
    {
        id: 7,
        title: "Horizon Zero Dawn",
        developer: "Guerrilla Games",
        releaseYear: 2017,
        description: "An action RPG set in a post-apocalyptic world where you hunt robotic creatures.",
        genre: "Action RPG",
        platforms: ["PC", "PS4"],
      },
  
    {
        id: 8,
        title: "Bloodborne",
        developer: "FromSoftware",
        releaseYear: 2015,
        description: "An action RPG set in a dark, gothic world filled with terrifying creatures.",
        genre: "Action",
        platforms: ["PS4"],
      },
    {
        id: 9,
        title: "The Last of Us Part II",
        developer: "Naughty Dog",
        releaseYear: 2020,
        description: "A story-driven action-adventure game set in a post-apocalyptic world.",
        genre: "Action-adventure",
        platforms: ["PS4"],
    },
    {
        id: 10,
        title: "Hades",
        developer: "Supergiant Games",
        releaseYear: 2020,
        description: "A roguelike action RPG where you attempt to escape the Underworld.",
        genre: "Roguelike",
        platforms: ["PC", "Mac", "Nintendo Switch"],
    },
    {
        id: 11,
        title: "Persona 5",
        developer: "Atlus",
        releaseYear: 2017,
        description: "A Japanese RPG where you balance high school life with battling supernatural forces.",
        genre: "Japanese RPG",
        platforms: ["PS4"],
    },
    {
        id: 12,
        title: "Ghost of Tsushima",
        developer: "Sucker Punch Productions",
        releaseYear: 2020,
        description: "An action-adventure game set in feudal Japan during the Mongol invasion.",
        genre: "Action-adventure",
        platforms: ["PS4"],
    },
    {
        id: 13,
        title: "Dark Souls III",
        developer: "FromSoftware",
        releaseYear: 2016,
        description: "An action RPG where you battle your way through a dark and twisted world.",
        genre: "Action RPG",
        platforms: ["PC", "PS4", "Xbox One"],
    },
    {
        id: 14,
        title: "Monster Hunter: World",
        developer: "Capcom",
        releaseYear: 2018,
        description: "An action RPG where you hunt down gigantic monsters in a lush ecosystem.",
        genre: "Action RPG",
        platforms: ["PC", "PS4", "Xbox One"],
    },
    {
        id: 15,
        title: "Sekiro: Shadows Die Twice",
        developer: "FromSoftware",
        releaseYear: 2019,
        description: "An action-adventure game set in a dark and mysterious late 1500s Sengoku period Japan.",
        genre: "Action-adventure",
        platforms: ["PC", "PS4", "Xbox One"],
    },
    {
        id: 16,
        title: "God of War",
        developer: "Santa Monica Studio",
        releaseYear: 2018,
        description: "An action-adventure game where you follow Kratos and his son Atreus on a journey through Norse mythology.",
        genre: "Action-adventure",
        platforms: ["PS4"],
      }
 ];
 
 function App() {
   return (
     <div style={{ textAlign: "center", padding: "20px", fontSize: "28px" }}>
       <h1><b>BROWSE OUR TOP VIDEO GAMES</b></h1>
       <GameList games={games} />
     </div>
   );
 }
 
 export default App;
 
 
 