import Image from "next/image";
import foto from "@/public/sebastian.png";
import skill from "@/public/skills.png";
import Languague from "@/components/LanguagueContext";

export default function About() {
  return (
    <>
      <section
        className="mt-80 text-white flex items-center justify-center"
        id="about"
      >
        <article className="flex-1">
          <h4 className="font-semibold text-2xl mb-10 hover:underline">
            <b className="text-purple-600"># {"  "}</b>Sobre Mi
          </h4>

          <p>
            Creo en la importancia de brindar una experiencia de usuario
            excepcional en cada proyecto en el que trabajo. Disfruto colaborando
            con equipos multifuncionales para crear soluciones innovadoras y
            escalables.
          </p>
        </article>
        <article className="flex-1 flex justify-center">
          <Image
            src={foto}
            alt="Johan Sebastian Castro Garcia | Desarrollador de software"
            className="object-contain w-auto h-96 border-b-2 border-b-purple-600"
          />
        </article>
      </section>
      <section className="text-white mt-24 flex items-center gap-24">
        <article>
          <h3 className="font-semibold text-2xl mb-10 hover:underline">
            <b className="text-purple-600"># {"  "}</b>
            Skills
          </h3>
          <Image
            src={skill}
            alt="Tech | Skills | Js"
            className="object-containt w-auto h-96"
          />
        </article>
        <article>
          <Languague />
        </article>
      </section>
    </>
  );
}
