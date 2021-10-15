import React, { useState } from 'react';
import '../App.css';
import './styles.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
var Carousel = require('react-responsive-carousel').Carousel;

function VoxelRay()
{
    return (
    <div style={{width:'600px'}}>
        <h1 className='title'>Realtime voxel raytracer</h1>
        <div className='postText'>
            Real-time voxel ray tracing engine. Supports 3 types of materials such as: glass,
             mirror and diffuse colored block. Models can be imported from MagicaVoxel in .ply format
        </div>
        <p/>
        <img src = 'post_imgs/v1.jpg' style={{width: '600px'}}></img>
        <p/>
        <div className='postText'>
        All tracing computations are performed on GPU in fragment shader.
        Scene data is loaded via Buffer objects as 1D array.
        <p/>
        The main advantage of voxel raytracing is ability to traverse array without checking extra cells for collisions in the way described in this paper:<br/>
        <a href='https://pdfs.semanticscholar.org/7620/a26cf2ffc6a4d634c7cde816d2f716904d26.pdf'> A Fast Voxel Traversal Algorithm</a>
        </div>
        <p/>
        <Carousel showArrows={true} showThumbs={false}>
                <div>
                    <img src='post_imgs/v1.jpg' style={{width: '600px'}} />
                </div>
                <div>
                    <img src='post_imgs/v1.jpg'  style={{width: '600px'}}/>
                </div>
        </Carousel>
        <p/>
    </div>)
}
export default VoxelRay;