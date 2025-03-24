import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
     <div> 
         <nav style={{ 
           background: '#003366', 
           color: '#fff', 
           padding: '10px 20px', 
           display: 'flex', 
           justifyContent: 'space-between', 
           alignItems: 'center', 
           flexWrap: 'wrap' 
         }}> 
           <h2 style={{ margin: 0 }}>Paws and Claws</h2> 
           <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}> 
             <li><Link to="/" style={{ color: 'white', textDecoration: 'none' 
    }}>Home</Link></li> 
             <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' 
    }}>About</Link></li> 
             <li><Link to="/services" style={{ color: 'white', textDecoration: 'none' 
    }}>Services</Link></li> 
             <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' 
    }}>Contact</Link></li> 
           </ul> 
         </nav> 
       </div> 
     ) 
    } 
export default Nav