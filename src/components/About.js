import React from 'react'
import blogData from '../data/blog.js';


function About (blogData){
    const imgSrc=blogData.image || 'https://via.placeholder.com/215';
    

  return (

    <aside>
        <img src={imgSrc} alt='blog logo'/>
        <p>{blogData.about}</p>
    </aside>
  )
}

export default About