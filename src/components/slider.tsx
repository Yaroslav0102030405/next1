"use client"

import React from 'react';
import Slider from 'react-slick';
import { Settings } from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import ImagePhoto from "./../app/image/ukraine.png"


import Link from "next/link";

export default function SliderCarusel() {
    const settings: Settings = {
    dots: true,
    infinite: true, // Додано для повноти, часто використовується
    speed: 500,     // Додано для повноти
    slidesToShow: 1, // Додано для повноти
    slidesToScroll: 1, // Додано для повноти
  };
  return (
   <>
   <h1>Мій Next.js</h1>
   <ul>
    <li><Link href="/about">На сторінку про нас</Link></li>
    <li><Link href="/dashboard">На сторінку dashboard</Link></li>
   </ul>
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <Image src={ImagePhoto} alt='ajnj' priority sizes='(max-width: 768px) 100vw, (max-width: 1220px) 50vw' />
          {/* <img src="https://inpl.eu/img/20211205_2667.jpg" /> */}
        </div>
        <div>
           <Image src={ImagePhoto} alt='ajnj'  priority />
          {/* <img src="https://inpl.eu/img/20211205_2667.jpg" /> */}
        </div>
        <div>
           <Image src={ImagePhoto} alt='ajnj'  priority />
          {/* <img src="https://inpl.eu/img/20211205_2667.jpg" /> */}
        </div>
        <div> 
      <Image src={ImagePhoto} alt='ajnj' priority />
          {/* <img src="https://inpl.eu/img/20211205_2667.jpg" /> */}
        </div>
      </Slider>
    </div>
   </>
  );
}