/*

What is JSX?
JSX stands for JavaScript XML.
JSX allows us to write HTML in React in easy way.
JSX makes it easier to write and add HTML in React.

Coding JSX
JSX allows us to write HTML elements in JavaScript and place them in the DOM without 
any createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.
Expressions in JSX
With JSX you can write expressions inside curly braces { }.


*/



import React from 'react'

import './style.css';


function Jsx() {

    const myelement1 = "Hi i am jsx";
    const myelement2 = <h1>I Love JSX!</h1>;
    const myelement3 = <h1>React is {5 + 5} times better with JSX</h1>;

    const myelement4 = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    );

    const mystyle = { color: "red", backgroundColor: "yellow" };


    const x = 50;
    const myElement5 = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

    return (
        <>
            <div className='container mt-5'>
                <h1>{myelement1}</h1>
                <h1>{myelement2}</h1>
                <h1>{myelement3}</h1>
                {myelement4}
                <hr />

                <h1 style={{ color: "red", backgroundColor: "yellow" }}>HI I AM INLINE CSS</h1>

                <h1 style={mystyle}>My style var call</h1>

                <div className='box'>External css</div>
                <div class='box'>External css</div>

                <hr />

                <h1>{myElement5}</h1>
            </div>
        </>
    )
}

export default Jsx