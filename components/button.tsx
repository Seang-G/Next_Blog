'use client'

import Link from "next/link"

export default function Button({text="", className="", href=".", onClick=()=>{}, loader=undefined, disabled=false}) {
  if(href!=="."){
    return(
      <Link href={href} className={className+" px-2 py-1 min-w-12 min-h-6 rounded-lg "}>{text}</Link>
    )
  }
  return(
    <button onClick={onClick} className={className+" px-2 py-1 min-w-12 min-h-6 rounded-lg disabled:opacity-30"} disabled={disabled}>
      {text}
    </button>
  )
}