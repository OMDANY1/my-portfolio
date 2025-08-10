import Link from 'next/link'
import ProjectGrid from '@/components/ProjectGrid'
import { getFeaturedProjects, getAllTags } from '@/lib/queries'
import FilterBar from '@/components/FilterBar'
export const revalidate=60
export default async function Home(){const[projects,allTags]=await Promise.all([getFeaturedProjects(),getAllTags()]);return(<section className="space-y-10"><header className="text-center space-y-4"><h1 className="text-3xl md:text-4xl font-bold">مرحبا! أنا مصمم جرافيك</h1><p className="text-neutral-600">بعمل هويات، سوشيال ميديا، باكدچنج، وإعلانات مرئية.</p></header><FilterBar allTags={allTags}/><ProjectGrid projects={projects}/><div className="text-center"><Link href="/projects" className="btn">شوف كل الأعمال →</Link></div></section>)}
