import githubImage from "@/public/github.svg";
import arrowUpImage from "@/public/arrow-up.svg";
import folderImage from "@/public/folder.svg";
import Image from "next/image";

export default function CardProject({ project }) {
  return (
    <div className="h-full py-5 px-5 bg-purple-950 rounded w-96 hover:scale-105 cursor-pointer transition-transform hover:shadow-md">
      <div className="flex items-start justify-between mb-5">
        <figure>
          <Image
            src={folderImage}
            alt="carpeta del proyecto"
            className="w-auto h-10 -mt-1"
          />
        </figure>
        <div className="flex gap-2 items-center">
          <a href={project.github} target="_blank">
            <Image
              src={githubImage}
              alt="github del proyecto realizado"
              className="w-auto h-5"
            />
          </a>
          <a href={project.demo} target="_blank">
            <Image
              src={arrowUpImage}
              alt="proyecto en la nube"
              className="w-auto h-6"
            />
          </a>
        </div>
      </div>
      <div>
        {/* <Image src={project.image} className="object-cover w-full h-48 my-6" /> */}
        <h2 className="text-3xl font-bold my-1">{project.title}</h2>
        <p className="whitespace-pre-wrap my-6">{project.description}</p>
        <ul>
          {project.technology.map((tch) => (
            <li>{tch}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
