import React from 'react'; 
import Navbar from './Navbar'; 

export default function RecordAndSong() {
  return (
    <>
      <Navbar />
      {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://images.unsplash.com/photo-1623279743107-152e86999257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>These are earings </h5>
              <p>On a desk </p>
            </div>
          </div>
          <div class="carousel-item ">
            <img class="d-block w-100" src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
          <div class="carousel-item ">
            <img class="d-block w-100" src="https://unsplash.com/photos/LaGaPIayBrc" alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>...</h5>
              <p>...</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> */}
      <div class="container max-height d-flex align-items-center">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-interval="5000"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-current="true"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-current="true"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1648737966005-f6b62f4d4394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                class="d-block w-100"
                alt="Sailboat 1"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some placeholder text to describe the image.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1649835580608-167433f935f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1670&q=80"
                class="d-block w-100"
                alt="Feet"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some placeholder text to describe the image.</p>
              </div>
            </div>
            <div class="carousel-item ">
              <img
                src="https://unsplash.com/photos/5hX6zYpmkuk"
                class="d-block w-100"
                alt="Sailboat 3"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some placeholder text to describe the image.</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div>
    </>
  ); 
}
