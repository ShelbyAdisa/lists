import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';

    const cardStyle = { 
        backgroundColor: 'white', 
        border: '1px solid #ccc', 
        borderRadius: '10px', 
        padding: '20px', 
        width: '280px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        textAlign: 'center', 
        transition: 'transform 0.2s ease', 
       }; 
        
       const Services(){ 
        const location = useLocation();
        const is OnMainServicesPage=location.pathname === '/services';
        return ( 
          <div style={{ padding: '40px', backgroundColor: '#f4f4f4' }}> 
            <h1 style={{ fontSize: '36px', color: '#003366', marginBottom: '30px', textAlign: 
       'center' }}> 
            Services offered at Paws and Claws
            </h1> 
        {isOnMainServicesPage && (
            <>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px' 
       }}> 
              <Link to='teeth'style={cardStyle}> 
                <h3 style={{ color: '#003366' }}>Teeth Brushing</h3> 
                <p>Keeps your pet’s breath fresh and teeth clean with safe pet-friendly toothpaste.</p> 
              </Link> 
              <Link to 'flea'style={cardStyle}> 
                <h3 style={{ color: '#003366' }}>Flea and Tick treatment</h3> 
                <p> Effective treatments to remove and prevent fleas and ticks, ensuring your pet stays itch-free.</p> 
              </Link> 
              <Link style={cardStyle}> 
                <h3 style={{ color: '#003366' }}>Puppy's first groom</h3> 
                <p>A gentle introduction to grooming for young pets, making the experience fun and stress-free.</p> 
              </Link> 
             
        
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px' 
       }}> 
              <div style={cardStyle}> 
                <h3 style={{ color: '#003366' }}>Bath and Brush</h3> 
                <p>A gentle cleansing bath followed by a thorough brushing to keep your pet’s coat fresh, soft, and tangle-free.</p> 
              </div> 
              <div style={cardStyle}> 
                <h3 style={{ color: '#003366' }}>Full grooming</h3> 
                <p> Includes a bath, brush, haircut, nail trimming, ear cleaning, and styling tailored to your pet’s breed and needs..</p> 
              </div> 
              <div style={cardStyle}> 
                <h3 style={{ color: '#003366' }}>Nail trimming</h3> 
                <p>Safe and precise nail clipping to keep your pet comfortable and prevent overgrowth or injuries.</p> 
              </div> 
            </div> 
        
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}> 
              <div style={cardStyle}> 
                <h3 style={{ color: '#003366' }}>Deshedding treatment</h3> 
                <p>Reduces excessive shedding with specialized tools and shampoos, perfect for double-coated breeds.</p> 
              </div> 
              <div style={cardStyle}> 
                <h3 style={{ color: '#003366' }}>Paw and Pad Care</h3> 
                <p>Moisturizing and cleaning to keep paws soft, healthy, and free from cracks or dryness.</p> 
              </div> 
              <div style={cardStyle}> 
                <h3 style={{ color: '#003366' }}>Ear Cleaning</h3> 
                <p>Gentle and effective ear care to remove wax buildup and prevent infections.</p> 
              </div> 
            </>
            )}
            <Outlet/>
          </div> 
        ); 
       };
        
    export default Services;