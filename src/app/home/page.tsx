'use client'

import { useEffect } from "react"
import Header from "../headers/Header"
import { useRouter } from "next/navigation"

const Home=()=>{

    const navigate = useRouter()

    useEffect(()=>{
        const token = localStorage.getItem("token")

        if(!token){
            navigate.push("/login")
        }

    }, [])

    return(
        <div>
            <Header/>
        </div>
    )
}

export default Home