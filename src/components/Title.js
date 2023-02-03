import React, { useState, useEffect } from 'react';

function Title() {

    const [span, setSpan] = useState(1)

    useEffect(() => {
        // setInterval(() => {
        //     setSpan(sp => (sp + 1)%3)
        // }, 3000)
    }, [])


    return (
        <div>
            <h1><span className={ span === 0 ? "clip-text" : "one" }>Twenty.</span><span className={ span === 1 ? "clip-text" : "two" }>Twenty.</span><span className={ span === 2 ? "clip-text" : "three" }>Three</span></h1>
        </div>
    )
}

export default Title;