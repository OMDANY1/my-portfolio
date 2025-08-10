'use client'
import Image from 'next/image'
import Link from 'next/link'
export default function ProjectCard({project}:{project:any}){const cover=project.cover||project.images?.[0];return(<Link href={`/projects/${project.slug}`} className="card group transition hover:shadow-md"><div className="relative aspect-[4/3]">{cover?(<Image src={cover.url} alt={project.title} fill sizes="(min-width: 768px) 33vw, 100vw"/>):(<div className="absolute inset-0 grid place-items-center text-sm text-neutral-500">No image</div>)}</div><div className="p-4"><h3 className="font-semibold group-hover:underline">{project.title}</h3>{project.tags?.length?<p className="text-xs text-neutral-500 mt-1">{project.tags.join(' • ')}</p>:null}</div></Link>)}
