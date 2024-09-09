import React from 'react'

function Header({title}) {
    return (
        <div class="p-5 bg-primary text-white text-center">
            <h1>{title}</h1>
            <p>Resize this responsive page to see the effect!</p>
        </div>
    )
}

export default Header