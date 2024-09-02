
import React from 'react'
import Func_prop from './Func_prop'
import Class_props from './Class_props'

function Product() {
    return (
        <div className='container mt-5'>
            <h1 align="center">Movie List</h1>
            <div className='row'>
                <h3>Props with Function component </h3>    
                <Func_prop img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pad-gaye-pange-et00408781-1724148163.jpg" title="Pad Gaye Pange" desc="Shastri Ji, a retired and jovial maths teacher"/>
                <Func_prop img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/aho-vikramaarka-et00407794-1723205451.jpg" title="Aho Vikramaarka!" desc="A ruthless cop's world shifts when"/>
                <Func_prop img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg" title="Stree 2: Sarkate Ka Aatank" desc="After the events of Stree, the town of"/>
                
                <hr className='mt-5'/>
                <h3>Props with Class component </h3> 
                <Class_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fakt-purusho-maate-et00396495-1720420947.jpg" title="Fakt Purusho Maate" desc="Fakt Purusho Maate is a Gujarati "/>
                <Class_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/khel-khel-mein-et00399518-1722516491.jpg" title="Khel Khel Mein" desc="The hilarious revelation of the shocking"/>
                <Class_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vedaa-et00386426-1723550870.jpg" title="Vedaa" desc="It is the story of a young woman "/>
            
            </div>
        </div>
    )
}

export default Product