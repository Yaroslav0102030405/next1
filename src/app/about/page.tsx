"use client"

import Link from "next/link"
import { useState } from "react"

const AboutPage = () => {
    const [name, setName] = useState<number>(0)

    const handleButton = () => {
        setName(name + 1)
    }
    return (<>
    <ul> <li><Link href="/">На головну сторінку</Link></li></ul>
    <h1>Сторінка про нас</h1>
    <button onClick={handleButton}>{name}</button>
    </>);
}
 
export default AboutPage;