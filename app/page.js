import About from "@/components/about/About";
import Works from "@/components/works/Works";
import Contact from "@/components/contact/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="pt-16 px-1 md:px-6 h-96 bg-black text-white flex flex-col justify-start items-start">
        <h6 className="text-purple-500 font-bold pl-2.5 mb-5">
          Bienvenido, Yo soy
        </h6>
        <h1 className="text-4xl md:text-8xl mb-5">
          Sebastian <br /> Garcia
        </h1>
        <h3 className="text-4xl md:text-7xl text-purple-600 mb-5">
          Construyo aplicaciones web.
        </h3>
        <p className="text-lg mb-5">
          Soy un desarrollador de software con sede en Colombia,
          <br /> y me especializo en la creación de sitios web excepcionales.
        </p>
        <button className="shadow border border-purple-600 p-2 hover:bg-purple-600 transition-colors active:scale-90 active:transition-transform mt-5">
          <Link href="mailto:johancs.mm@gmail.com">Contactame</Link>
        </button>
      </section>
      <About />
      <Works />
      <Contact />
    </>
  );
}
