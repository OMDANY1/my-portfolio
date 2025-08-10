import ProjectGrid from '@/components/ProjectGrid'
import { getAllProjects, getAllTags } from '@/lib/queries'
import FilterBar from '@/components/FilterBar'
export const revalidate=60
export default async function ProjectsPage(){const[projects,allTags]=await Promise.all([getAllProjects(),getAllTags()]);return(<section className="space-y-6"><h2 className="text-2xl font-bold">كل الأعمال</h2><FilterBar allTags={allTags}/><ProjectGrid projects={projects}/></section>)}
