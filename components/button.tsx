'use client'
export default function Button({text="", className="", href=".", onClick=()=>{}, loader=undefined}) {
  return(
    <div className={"px-2 py-1 min-w-12 min-h-6 rounded-lg "+className}>
      {text}
    </div>
  )
}