'use client'
import { useState } from 'react'
export default function Lightbox({src,alt,children}:{src:string,alt:string,children:React.ReactNode}){const[open,setOpen]=useState(false);return(<><div onClick={()=>setOpen(true)}>{children}</div>{open&&(<div className="fixed inset-0 z-50 bg-black/80 grid place-items-center" onClick={()=>setOpen(false)}><img src={src} alt={alt} className="max-h-[90vh] max-w-[90vw] rounded-lg"/></div>)}</>)}
