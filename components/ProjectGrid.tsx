import ProjectCard from './ProjectCard'
export default function ProjectGrid({projects}:{projects:any[]}){return(<section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">{projects?.length?projects.map((p)=> <ProjectCard key={p._id} project={p}/>):<div>لا توجد مشاريع بعد.</div>}</section>)}
