
import React, { useEffect, useState } from 'react'
import * as bootstrap from 'bootstrap'
import Flash from './Flash'
import Button from './Button'

const App = () => {
  useEffect(() => {
    const carouselEl = document.getElementById('heroCarousel')
    const carousel = new bootstrap.Carousel(carouselEl, {
      interval: 3000,
      ride: 'carousel',
      wrap: true,
    })
    carousel.cycle()
  }, [])

  const [products] = useState([
    {
      id: 1,
      image: 'images/imgi_23_1.jpg',
      name: 'Speaker Wonder Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 2,
      image: 'images/imgi_24_1.jpg',
      name: ' Wonder Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 3,
      image: 'images/imgi_27_1.jpg',
      name: ' Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 4,
      image: 'images/imgi_23_1.jpg',
      name: 'Speaker Wonder Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 5,
      image: 'images/imgi_24_1.jpg',
      name: ' Wonder Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 6,
      image: 'images/imgi_27_1.jpg',
      name: ' Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 7,
      image: 'images/imgi_23_1.jpg',
      name: 'Speaker Wonder Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 8,
      image: 'images/imgi_24_1.jpg',
      name: ' Wonder Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 9,
      image: 'images/imgi_27_1.jpg',
      name: ' Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 8,
      image: 'images/imgi_24_1.jpg',
      name: ' Wonder Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 9,
      image: 'images/imgi_27_1.jpg',
      name: ' Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 8,
      image: 'images/imgi_24_1.jpg',
      name: ' Wonder Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 9,
      image: 'images/imgi_27_1.jpg',
      name: ' Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 8,
      image: 'images/imgi_24_1.jpg',
      name: ' Wonder Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },
    {
      id: 9,
      image: 'images/imgi_27_1.jpg',
      name: ' Boom',
      rating: 4.1,
      reviews: 2000,
      price: 2500,
      oldPrice: 4000,
    },

  ])



  return (
    <>
      <div style={{ backgroundColor: '#f2f2f2', padding: '0px 10px 10px 10px' }}>
        <img src="images/TOP-STRIP.gif" alt="" style={{ margin: '0px 50px 0px 10px' }} />
        <div className='sell-on-jumia'>
          <a href="">  <img src="images/download.svg" alt="" />Sell on Jumia</a>
          <div className='Opay-Delivery'>
            <img src="images/imgi_161_logo_jumia.svg" alt="" />
            <a href="#">Opay</a>
            <a href="#">Delivery</a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white border-bottom px-3 py-2">
        <div className="container-fluid align-items-center">

          {/* Left: Menu Toggle & Brand Logo */}
          <div className="d-flex align-items-center">
            <button className="btn border-0 fs-4 me-3 text-dark" type="button">
              ☰
            </button>
            <a className="navbar-brand fw-bold fs-3 text-dark d-flex align-items-center m-0" href="#">
              JUMIA<span className="badge rounded-circle bg-warning text-warning ms-1 p-1" style={{ width: '10px', height: '10px' }}>•</span>
            </a>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-grow-1 mx-lg-5 my-2 my-lg-0" style={{ maxWidth: '600px' }}>
            <div className="input-group rounded-pill bg-light border px-2 py-1 align-items-center">
              <span className="input-group-text bg-transparent border-0 text-muted ps-2">🔍</span>
              <input
                type="text"
                className="form-control bg-transparent border-0 shadow-none text-dark"
                placeholder="Search products, brands and categories"
              // defaultValue="nivea spray"
              />
              <button className="btn btn-transparent text-muted border-0 p-0 me-2" type="button">✕</button>
              <button className="btn rounded-pill text-white px-4 py-2 fw-semibold" style={{ backgroundColor: '#f68b1e' }} type="button">
                Search
              </button>
            </div>
          </div>

          {/* Right: Account & Help & Cart */}
          <div className="d-flex align-items-center gap-4">
            <div className="dropdown">
              <button className="btn bg-transparent border-0 dropdown-toggle text-dark d-flex align-items-center fw-medium p-0" type="button" data-bs-toggle="dropdown">
                👤 <span className="ms-1 d-none d-md-inline">Account</span>
              </button>
            </div>

            <div className="dropdown">
              <button className="btn bg-transparent border-0 dropdown-toggle text-dark d-flex align-items-center fw-medium p-0" type="button" data-bs-toggle="dropdown">
                ❓ <span className="ms-1 d-none d-md-inline">Help</span>
              </button>
            </div>

            <a href="#" className="text-decoration-none text-dark d-flex align-items-center fw-medium">
              🛒 <span className="ms-1">Cart</span>
            </a>
          </div>

        </div>
      </nav>


      {/* Breadcrumb */}
      <div className='whole-hero' style={{ backgroundColor: '#f2f2f2' }}>
        <div className="container-fluid px-3 py-3">
          <nav>
            <ol className="breadcrumb mb-0 small">
              <li className="breadcrumb-item">
                <a href="App.jsx" className="text-decoration-none text-dark">Home</a>
              </li>
              <li className="breadcrumb-item active text-muted" aria-current="page">
                Nivea Store
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero banner carousel */}
        <div className="container-fluid px-3 pb-4">
          <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner rounded-3">
              <div className="carousel-item active">
                <img
                  src="images/imgi_2_1248X375.jpg"
                  className="d-block w-100"
                  alt="Nivea — prevents yellow stains and white residue"
                />
              </div>

              <div className="carousel-item ">
                <img
                  src="images/imgi_3_Homepage-slider.jpg"
                  className="d-block w-100"
                  alt="Nivea slide 2"
                />
              </div>

              <div className="carousel-item">
                <img
                  src="images/imgi_4_sporting_goods_1248x357.jpg"
                  className="d-block w-100"
                  alt="Nivea slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/imgi_5_1168x384_1.jpg"
                  className="d-block w-100"
                  alt="Nivea slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/imgi_6_1168x384.jpg"
                  className="d-block w-100"
                  alt="Nivea slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/imgi_7_1168x384.jpg"
                  className="d-block w-100"
                  alt="Nivea slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/imgi_8_Pearl-Beauty-Q2-1168x384.jpg"
                  className="d-block w-100"
                  alt="Nivea slide 2"
                />
              </div>
            </div>

            <div className="carousel-indicators">
              {[0, 1, 2, 3, 4, 5, 6,].map((i) => (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to={i}
                  className={i === 0 ? 'active' : ''}
                  aria-label={`Slide ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>


        {/* make money */}
        <div className='scroll-cards'>
          <div className='scroll'>
            <img src="images/imgi_154_call-to-order.gif" alt="" />

            <img src="images/imgi_155_26JF_Thumbnail_JFORCE.gif" alt="" />

            <img src="images/imgi_156_freedelivery.png" alt="" />

            <img src="images/imgi_157_Banger-Deals.gif" alt="" />

            <img src="images/imgi_158_buy-two-pay-for-one.gif" alt="" />

            <img src="images/imgi_159_trendyol.png" alt="" />

            <img src="images/imgi_160_jumia-delivery.gif" alt="" />

            <img src="images/imgi_161_new-arrival.gif" alt="" />

            <img src="images/imgi_162_shoes.gif" alt="" />
          </div>



        </div>

        {/* Flash */}

        <div style={{
          background: '#bf1d3d', margin: '17px 10px 7px 10px',
          padding: '10px 0px 10px 10px',
          borderRadius: '10px'}}>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <h3>Flash Sales</h3>
            <span>Up to 50% off</span>
          </div>
          <Button name="See Al →" />
        </div>


        <div style={{
          display: 'flex',
          gap: '20px', overflowX: 'scroll'
        }}>
          {products.map((product) => (
            <Flash
              key={product.id}
              image={product.image}
              name={product.name}
              rating={product.rating}
              review={product.reviews}
              price={product.price}
              oldPrice={product.oldPrice}


            />

          ))}

        </div>

      </div>


      <div className='Grooming-Men' >
        <div className='grooming-all'>
          <h4>Grooming Kit for Men</h4>
          <a href="">See All </a>
        </div>
        <div className='Cards'>
          {/* first cards */}
          <a href="#" className='top-card' style={{ textDecoration: 'none' }}>
            <div className='image-wrap'>
              <img src="images/imgi_10_1.jpg" alt="" />
              <div className='off'>
                <p>-34%</p>
              </div>
            </div>
            <div>
              <span>NIVEA Deep Anti-perspi...</span> <br />
              <b>$7,790</b>
              <p>$10,820</p>
            </div>
          </a>

          <a href="#" className='top-card' style={{ textDecoration: 'none' }}>
            <div className='image-wrap'>
              <img src="images/imgi_11_1.jpg" alt="" />
              <div className='off'>
                <p>-7%</p>
              </div>
            </div>
            <div>
              <span>NIVEA Cool kick Shower Gel F...</span>
              <b>$6,480</b>
              <p>$6,940</p>
            </div>
          </a>


          <a href="#" className='top-card' style={{ textDecoration: 'none' }}>
            <div className='image-wrap'>
              <img src="images/imgi_12_1.jpg" alt="" />
              <div className='off'>
                <p>-8%</p>
              </div>
            </div>
            <div>
              <span>NIVEA Cool Kick Shower Gel F...</span>
              <b>$8,240</b>
              <p>$8,980</p>
            </div>
          </a>
          <a href="#" className='top-card' style={{ textDecoration: 'none' }}>
            <div className='image-wrap'>
              <img src="images/imgi_43_1.jpg" alt="" />
              <div className='off'>
                <p>-24%</p>
              </div>
            </div>
            <div>
              <span>NIVEA Dry Impart Roll-on For...</span>
              <b>$3,100</b>
              <p>$4,085</p>
            </div>
          </a>
          <a href="#" className='top-card' style={{ textDecoration: 'none' }}>
            <div className='image-wrap'>
              <img src="images/imgi_53_1.jpg" alt="" />
              <div className='off'>
                <p>-16%</p>
              </div>
            </div>
            <div>
              <span>NIVEA Men Deep Anti-Perspir...</span>
              <b>$3,420</b>
              <p>$4,085</p>
            </div>
          </a>

        </div>





      </div>

      <div className='long-daily' >
        <div>
          <img src="images/imgi_16_572x250_1.gif" alt="" />
        </div>

        <div>
          <img src="images/imgi_17_SUNNGDecCategoryBanners572x250.jpg" alt="" />
        </div>
      </div>


      <div className='small-card'>

        <a href="">
          <img src="images/imgi_18_NIVEA-GENERAL.jpg" alt="" />
        </a>

        <a href="">
          <img src="images/imgi_19_BODY-CARE.jpg" alt="" />
        </a>

        <a href="">
          <img src="images/imgi_20_NIVEAMEN.jpg" alt="" />
        </a>

        <a href="">
          <img src="images/imgi_21_DEO.jpg" alt="" />
        </a>

        <a href="">
          <img src="images/imgi_22_FACE.jpg" alt="" />
        </a>

        <a href="">
          <img src="images/imgi_23_LIP-CARE.jpg" alt="" />
        </a>
      </div>

      <div className='video-card'>
        {/* <video src=""></video> */}
        <img src="images/Screenshot 2026-09-21 093722.png" alt="" />
      </div>



      <div className='' >
        <div className=''>
          <h4>Glow Bundles for Women</h4>
          <a href="">See All </a>
        </div>
        <div className=''>
          {/* first cards */}
          <a href="#" className='top-card' style={{ textDecoration: 'none' }}>
            <div className='image-wrap'>
              <img src="images/imgi_25_1.jpg" alt="" />
              <div className='off'>
                <p>-17%</p>
              </div>
            </div>
            <div>
              <span>NIVEA Orange & Avocado Oil...</span> <br />
              <b>$5,775</b>
              <p>$6,940</p>
            </div>
          </a>

          <a href="#" className='top-card' style={{ textDecoration: 'none' }}>
            <div className='image-wrap'>
              <img src="images/imgi_26_1.jpg" alt="" />
              <div className='off'>
                <p>-26%</p>
              </div>
            </div>
            <div>
              <span>NIVEA Dry Comfort Roll-on Fo...</span>
              <b>$4,555</b>
              <p>$6,125</p>
            </div>
          </a>


          <a href="#" className='top-card' style={{ textDecoration: 'none' }}>
            <div className='image-wrap'>
              <img src="images/imgi_27_1.jpg" alt="" />
              <div className='off'>
                <p>-8%</p>
              </div>
            </div>
            <div>
              <span>NIVEA Cool Kick Shower Gel F...</span>
              <b>$8,240</b>
              <p>$8,980</p>
            </div>
          </a>
          <a href="#" className='top-card' style={{ textDecoration: 'none' }}>
            <div className='image-wrap'>
              <img src="images/imgi_28_1.jpg" alt="" />
              <div className='off'>
                <p>-24%</p>
              </div>
            </div>
            <div>
              <span>NIVEA Dry Impart Roll-on For...</span>
              <b>$3,100</b>
              <p>$4,085</p>
            </div>
          </a>
          <a href="#" className='top-card' style={{ textDecoration: 'none' }}>
            <div className='image-wrap'>
              <img src="images/imgi_29_1.jpg" alt="" />
              <div className='off'>
                <p>-16%</p>
              </div>
            </div>
            <div>
              <span>NIVEA Men Deep Anti-Perspir...</span>
              <b>$3,420</b>
              <p>$4,085</p>
            </div>
          </a>

          <a href="#" className='top-card' style={{ textDecoration: 'none' }}>
            <div className='image-wrap'>
              <img src="images/imgi_30_1.jpg" alt="" />
              <div className='off'>
                <p>-34%</p>
              </div>
            </div>
            <div>
              <span>NIVEA Deep Anti-perspi...</span>
              <b>$7,185</b>
              <p>$10,820</p>
            </div>
          </a>

        </div>





      </div>





    </div >
    </>
  )


}

export default App