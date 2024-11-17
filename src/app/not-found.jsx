"use client"

import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="flex min-h-screen items-center justify-center gap-5 flex-col">
            <FileSearch size={40} className="text-color-accent"/>
            <h3 className="text-color-accent md:text-4xl">Waduh Tidak Ketemu</h3>
            <Link href="/" className="bg-color-accent p-4 ">Kembali</Link>
        </div>
    )
}

export default Page