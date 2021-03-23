import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef)

    const handleClick = () => {
        // document.querySelector('input').select(); // ocupé .select() en vez de .focus() porque así selecciona lo que digita el usuario y así puede corregir etc
        inputRef.current.select();
        console.log(inputRef)
    }

    return (
        <>
            <h1>Focus Screen, useRef!</h1>
            <hr />

            <div className="form-group">
              <input type="text" ref={inputRef}
                className="form-control" name="name" aria-describedby="helpId" placeholder="Your Name"/>
            </div>
            <button type="button" name="button" className="btn btn-primary" onClick={handleClick}>BUTTON</button>
        </>
    )
}
