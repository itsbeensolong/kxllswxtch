import githubImage from "@/public/github.svg";
import linkedinImage from "@/public/linkedin.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="mt-60 text-white">
      <h4 className="font-semibold text-2xl hover:underline my-4">
        <b className="text-purple-600"># {"  "}</b>Contacto
      </h4>
      <div className="flex flex-col md:grid md:grid-cols-2 items-start gap-4">
        <article className="flex flex-col gap-4 items-start">
          <p>
            Estoy interesado en oportunidades de autónomos. Sin embargo, si
            tiene otra solicitud o pregunta, no dude en ponerse en contacto
            conmigo.
          </p>
          <a
            href="mailto:johancs.mm@gmail.com"
            className="max-w-full p-2 bg-purple-600 mt-4 cursor-pointer active:scale-75 transition-transform"
          >
            Contactame!
          </a>
        </article>

        <article className="flex justify-end items-center">
          <div className="border border-white w-min min-w-max p-4 pt-1 flex flex-col">
            <span>Contactame aqui!</span>
            <div className="flex gap-4 items-center mt-4">
              <Image
                src={githubImage}
                alt="Github Sebastian"
                className="w-auto h-6"
              />
              <a href="#" className="hover:underline">
                Sebastian009w
              </a>
            </div>
            <div className="flex gap-4 items-center mt-4">
              <Image
                src={linkedinImage}
                alt="Linked In Sebastian"
                className="w-auto h-6"
              />
              <a href="#" className="hover:underline">
                Sebastian Garcia
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
