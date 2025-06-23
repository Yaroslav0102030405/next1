"use client"

import Link from "next/link";
import { useState } from "react";

const DashboardPage = () => {
    const [name, setName] = useState<string>("")

    const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return ( <>
    <li><Link href="/">На головну сторінку</Link></li>
    <div className="p-8">
        <h1 className="text-2x1 font-bold">Панель користувача</h1>
        <div className="mt-6 space-y-4">
            <div className="p-4 bg-blue-100 rounder">
             <label className="block mb-2">Ведите ім`я:</label>
               <input className="p-2 border rounder" value={name} onChange={handleInputName} type="text" />
            <p>`Привіт! {name || "Гость"}</p>
            </div>
        </div>
        </div>

    </> );
}
 
export default DashboardPage;