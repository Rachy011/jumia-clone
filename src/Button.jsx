import React from 'react'

const Button = ({name}) => {
  return (
   <>
    <div>
      <a 
        href="#" 
        style={{ 
          backgroundColor: 'white', 
          color: '#bf1d3d', 
          padding: '8px 16px', 
          borderRadius: '50px', 
          textDecoration: 'none', 
         
        }}
      >
        {name}
      </a>
    </div>
   
   </>
  )
}

export default Button