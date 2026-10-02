import React from 'react'


const Flash = ({ image, name, rating, review, price, oldPrice }) => {
  return (
    <>
      <div style={{background:'white', borderRadius:'10px', marginTop:'40px', padding:'10px 40px 10px 30px'}}>
        <img style={{height: '160px', objectFit: 'contain' }} src= {image} alt="" />
        <p>{name}</p>
        <span>★</span>
        <span>{rating}</span>
        <span>{review}</span>
        <div>
          <span>₦ {price}</span>
        </div>
        <div>
          <span>₦ {oldPrice}</span>
        </div>
      </div>

    </>
  )
}

export default Flash