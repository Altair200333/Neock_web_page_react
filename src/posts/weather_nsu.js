import React, { useState } from 'react';
import '../App.css';
import './styles.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
var Carousel = require('react-responsive-carousel').Carousel;

function WeatherNSU()
{
    return (
        <div style={{width:'600px'}}>
            <h1 className='title'>Weather NSU</h1>
            <div className='postText'>
                Small App with home screen widget that shows temperature near NSU
                <p/>
                The biggest challenge while creating this app was finding out how to get data from <a href = 'http://weather.nsu.ru/'>weather.nsu.ru</a>
                <p/>
                Website itself contains no information about public API whatsoever 
                but I was lucky enough to find old <a href='https://github.com/AlexandrTsvetkov/NsuWeather-WP-8'>github repo</a> of simillar programm for <i>windows phone</i>
                <p/>
                <div style= {{display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                    <img src = 'post_imgs/weather.jpg' style={{height:'400px'}}/>
                    <img src = 'post_imgs/art4/img1.jpg' style={{height:'400px'}}/>
                </div>
                <div style={{height:'50px'}}/>
                <a href='https://github.com/Altair200333/weather_nsu'>source code</a>
                <p/>
                
                <div style={{height:'100px'}}/>
            </div>   
        </div>
        );
}
export default WeatherNSU;