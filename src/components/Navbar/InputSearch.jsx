"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    
    const handleSearch = () => {
    const keyword = searchRef.current.value
    if(!keyword || keyword.trim() == "") return
    router.push(`/search/${keyword}`)
    } 
    return (
        <div className="relative">
            <form method="get" action={handleSearch}>
            <input placeholder="cari anime..." className="w-full p-2 rounded outline-color-accent" ref={searchRef}/>
            </form>
            <button className="absolute top-2 end-2 text-color-accent" onClick={handleSearch}><MagnifyingGlass size={24} /></button>
        </div>
    )
}

export default InputSearch