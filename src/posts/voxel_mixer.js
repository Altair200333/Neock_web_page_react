import React, { useState } from 'react';
import '../App.css';
import './styles.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var Carousel = require('react-responsive-carousel').Carousel;

const imgs = ['img4.jpg','img2.jpg','img1.jpg','img3.jpg','img5.jpg', 'img6.jpg']


function VoxelMixer()
{
    return (
    <div style={{width:'600px'}}>
        <h1 className='title'>Yet another voxel raytracer</h1>
        <div className='postText'>
            While on the surface this may look similar to the last project, the internals of this programm are very different
        </div>
        <p/>
        <img src = 'post_imgs/voxel_mixer.jpg' className='exampleImg'></img>
        <p/>
        <div className='postText'>
            As usually scene can be rendered on CPU and GPU either in a single pass or with multiframe accumulation
            <p/>
            Skybox, HDRI background, sun power, location etc. can be adjusted in UI<br/>
            <p/>
            I tried to implement octrees for voxel traversal but somehow managed to screw that up and performance is like <i>'ok'</i>
            <p/>
            What took me ages to figure out is how to send the octree to frament shader 
            and the solution i came up with is to turn it into 1D array of floats and upload it as Texture Buffer Object 
        <p/>
        <Carousel showArrows={true} showThumbs={false}>
            {
                imgs.map(item => <div><img src={'post_imgs/art3/'+item}  className='exampleImg'/></div>)
            }
        </Carousel>
        <p/>
            Event are handled with simple but elegant event system -
            to subscribe for a specific event you have to simply derive from desired event handler and override handling method<br/>
            This makes adding new components and windows exremely easy.
            <p/>

            <a href='https://github.com/Altair200333/VoxelRayTracer'>source code</a>
        </div>

        <div style={{height:'100px'}}/>
        
        <p/>
    </div>)
}
export default VoxelMixer;