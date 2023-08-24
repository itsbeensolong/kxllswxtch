import Image from "next/image";
import foto from "@/public/sebastian.png";

export default function About() {
  return (
    <section
      className="mt-80 text-white flex items-center justify-center"
      id="about"
    >
      <article className="flex-1">
        <h4 className="font-semibold text-2xl mb-10">Sobre Mi</h4>

        <p className="font-thin">
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
          className="object-contain w-auto h-96"
        />
      </article>
    </section>
  );
}
