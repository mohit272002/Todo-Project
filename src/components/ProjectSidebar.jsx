import Button from "./Button";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectedProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-primary text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {

          let cssclasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if(selectedProjectId === project.id){
            cssclasses += ' text-stone-200 bg-stone-800'
          }else{
            cssclasses += ' text-stone-400'
          }
          return (
            <li key={project.id}>
              <button
                className={cssclasses}
                onClick={() => onSelectedProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
