import React, { useState, useEffect } from 'react';

import "./Title.css"

import logo2 from "../assets/logo3.png"

function Title() {

    const [span, setSpan] = useState(1)

    return (
        <div className='title'>
            <div className='logo'>
                <img src={logo2} alt="Logo" />
            </div>
            <h1><span className={ span === 0 ? "clip-text" : "one" }>Twenty.</span><span className={ span === 1 ? "clip-text" : "two" }>Twenty.</span><span className={ span === 2 ? "clip-text" : "three" }>Three</span></h1>
        </div>
    )
}

export default Title;
