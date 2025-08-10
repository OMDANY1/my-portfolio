'use client'
import { useState } from 'react'
import clsx from 'clsx'
export default function FilterBar({allTags}:{allTags:string[]}){const[active,setActive]=useState<string|null>(null);return(<div className="flex flex-wrap items-center gap-3"><button className={clsx('tag',!active&&'bg-neutral-900 text-white')} onClick={()=>setActive(null)}>الكل</button>{allTags?.map(t=>(<button key={t} className={clsx('tag',active===t&&'bg-neutral-900 text-white')} onClick={()=>setActive(t)}>{t}</button>))}<p className="text-xs text-neutral-500">* التصفية شكلية في الواجهة الآن. يمكن تفعيلها على الخادم لاحقًا.</p></div>)}
