import CardProject from "../CardProject";
import projects from "@/utils/projects";

export default function Works() {
  return (
    <section className="mt-5 text-white" id="work">
      <h4 className="font-semibold text-2xl mb-10 hover:underline">
        <b className="text-purple-600"># {"  "}</b>Proyectos
      </h4>
      <article className="flex flex-wrap items-center justify-center gap-5">
        {projects.map((pr) => (
          <CardProject project={pr} key={pr.id} />
        ))}
      </article>
    </section>
  );
}
