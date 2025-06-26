"use client"

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

const Counter2 = () => {
    const [counter, setCounter] = useState<number>(0)
    const {isLoaded, userId, sessionId, getToken} = useAuth()

    const handleButtonCkick = () => {
        setCounter(counter + 1)
    }

    if(!isLoaded || !userId) return null
    return ( <>
    <p>Счетчик {counter}</p>
    <button onClick={handleButtonCkick}>+</button>
    </> );
}
 
export default Counter2;