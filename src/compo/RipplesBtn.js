import React from 'react'
import {createRipples} from "react-ripples"
const Ripples = () => {
    const MyRipples=createRipples({
        color: "rgba(0,0,0,0.1)",
        during: 1000,
      })
        return (
            <div className="p-8">
        <MyRipples>
                <button className="px-16 py-12 overflow-hidden  bg-red-500 hover:bg-red-600 text-white uppercase font-bold rounded-full border-none outline-none">My Botton</button> 

        </MyRipples></div>
    )
}

export default Ripples
