/*

Sass is a CSS pre-processor.

Sass reduces repetition of CSS and therefore saves time.

What is Sass?
Sass stands for Syntactically Awesome Stylesheet
Sass is an extension to CSS
Sass is a CSS pre-processor
Sass is completely compatible with all versions of CSS
Sass reduces repetition of CSS and therefore saves time
Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006
Sass is free to download and use

npm i sass

mysass.scss extention

*/


import React from 'react'

import './mysass.scss';

function Sass_css() {
  return (
    <div className='container mt-5'>
        <div className='box'>My SASS</div>
        <hr />

        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <hr />

        <h1 className='myfont'>My font</h1>
        <h1 className='mytext'>My Text</h1>

        <hr />

        <button className='btn'>Basic Button</button>
        <button className='btn-red'>Red Button</button>
        <button className='btn-green'>Green Button</button>
        <button className='btn-blue'>Blue Button</button>
        <button className='btn-yellow'>Yellow Button</button>
    </div>
  )
}

export default Sass_css