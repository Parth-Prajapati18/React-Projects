import React from 'react'

export default function CaroUsel() {
  return (
    <div style={{backgroundColor: '#adb2db', width : '100%'}}>
    <div class="container h-500 w-100" >
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://i.imgur.com/CzXTtJV.jpg" alt="First slide" height={"725px"} />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://i.imgur.com/OB0y6MR.jpg" alt="Second slide" height={"725px"} />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg" alt="Third slide" height={"725px"} />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
</div>
)
}
