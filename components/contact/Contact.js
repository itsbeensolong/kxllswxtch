export default function Contact() {
  return (
    <section id="contact" className="mt-60 text-white">
      <h4 className="font-semibold text-2xl hover:underline my-4">
        <b className="text-purple-600"># {"  "}</b>Contacto
      </h4>
      <div className="grid grid-cols-2">
        <article>
          <p>
            Estoy interesado en oportunidades de autónomos. Sin embargo, si
            tiene otra solicitud o pregunta, no dude en ponerse en contacto
            conmigo.
          </p>
        </article>

        <article className="flex justify-end">
          <div className="border border-white w-60 min-w-max rounded p-2">
            <span>Contactame aqui</span>
          </div>
        </article>
      </div>
    </section>
  );
}
