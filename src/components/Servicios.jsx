import '../styles/Servicios.scss';


const services = [
  {
    title: "MKZCare",
    description: "El plan ideal para mantener tu web funcionando sin preocupaciones.",
    price: "$39 USD/mes",
    features: [
      "✔ Hosting profesional y dominio personalizado",
      "✔ Soporte técnico vía mail o WhatsApp (respuesta en 48hs)",
      "✔ Backups mensuales y restauración ante emergencias",
      "✔ Monitorización básica de uptime"
    ]
  },
  {
    title: "MKZCare Plus",
    description:
      "Para quienes necesitan mejorar y mantener su web con foco en rendimiento y posicionamiento.",
    price: "$59 USD/mes",
    features: [
      "✔ Todo lo incluido en Basic",
      "✔ Actualizaciones regulares de software y plugins",
      "✔ Hasta 3 cambios menores mensuales (textos, imágenes)",
      "✔ Optimización básica SEO on-page",
      "✔ Mejora en velocidad de carga y performance"
    ]
  },
  {
    title: "MKZCare Premium",
    description:
      "Soporte completo y consultoría para empresas que requieren máxima seguridad y rendimiento.",
    price: "$129 USD/mes",
    features: [
      "✔ Todo lo incluido en Pro",
      "✔ Soporte prioritario 24/7 (chat y llamada)",
      "✔ Auditorías de seguridad avanzadas y mejoras constantes",
      "✔ Reportes mensuales de rendimiento y visitas",
      "✔ Consultoría estratégica para mejorar tu presencia digital"
    ]
  }
];


export default function Servicios() {
    return (
        <section className="servicios" id="servicios">
            <div className="servicios__contenedor">

                <section className="intro-servicios">
                    <h2>Servicios Mankerz Studio</h2>
                    <p>Desarrollamos tu página web desde cero, adaptada a tus necesidades y objetivos.</p>
                </section>
                <div className="servicios__grid">

                    <div className="servicio__card">
                        <h3>Landing Page</h3>
                        <p>Ideal para promocionar un producto, evento o servicio. Rápida, visual y directa al objetivo.</p>
                        <div className='container-button'>
                            <a className='cta-button' href="https://wa.me/541123473586?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20Landing%20Page%20que%20ofrecen." target="_blank" rel="noopener noreferrer">Contactanos</a>
                        </div>
                    </div>

                    <div className="servicio__card">
                        <h3>Web Esencial</h3>
                        <p>Tu web en una sola página, con secciones de inicio, servicios, contacto y redes. Todo lo esencial.</p>
                        <div className='container-button'>
                            <a className='cta-button' href="https://wa.me/541123473586?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20servicio%20Web%20Esencial%20que%20ofrecen." target="_blank" rel="noopener noreferrer">Contactanos</a>
                        </div>
                    </div>

                    <div className="servicio__card">
                        <h3>Web Modular (hasta 4 páginas)</h3>
                        <p>Un sitio más completo con navegación entre páginas: inicio, servicios, quiénes somos, contacto, etc.</p>
                        <div className='container-button'>
                            <a className='cta-button' href="https://wa.me/541123473586?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20servicio%20Web%20Modular%20que%20ofrecen." target="_blank" rel="noopener noreferrer">Contactanos</a>
                        </div>
                    </div>

                    <div className="servicio__card">
                        <h3>Web Corporativa</h3>
                        <p>Desarrollo personalizado para empresas o negocios que necesitan presencia sólida, moderna y escalable.</p>
                        <div className='container-button'>
                            <a className='cta-button' href="https://wa.me/541123473586?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20servicio%20Web%20Corporativa%20que%20ofrecen." target="_blank" rel="noopener noreferrer">Contactanos</a>
                        </div>
                    </div>
                </div>
                
                <section className="intro-servicios">
                    <h2>MKZCare: mantenimiento y soporte</h2>
                    <p>Plan mensual para que tu web esté siempre actualizada, segura y funcionando sin interrupciones.</p>
                </section>

                <div className="servicios__grid">

                    <div className="servicio__card mkzcare">
                        <h3>MKZCare</h3>
                        <p>El plan ideal para mantener tu web funcionando sin preocupaciones.</p>
                        <ul>
                            <li>✔ Hosting profesional y dominio personalizado</li>
                            <li>✔ Soporte técnico vía mail o WhatsApp (respuesta en 48hs)</li>
                            <li>✔ Backups mensuales y restauración ante emergencias</li>
                            <li>✔ Monitorización básica de uptime</li>
                        </ul>
                        <p className="mkzcare__precio"><strong>$39 USD/mes</strong></p>
                    </div>

                    <div className="servicio__card mkzcare">
                        <h3>MKZCare Plus</h3>
                        <p>Para quienes necesitan mejorar y mantener su web con foco en rendimiento y posicionamiento.</p>
                        <ul>
                            <li>✔ Todo lo incluido en Basic</li>
                            <li>✔ Actualizaciones regulares de software y plugins</li>
                            <li>✔ Hasta 3 cambios menores mensuales (textos, imágenes)</li>
                            <li>✔ Optimización básica SEO on-page</li>
                            <li>✔ Mejora en velocidad de carga y performance</li>
                        </ul>
                        <p className="mkzcare__precio"><strong>$59 USD/mes</strong></p>
                    </div>

                    <div className="servicio__card mkzcare">
                        <h3>MKZCare Premium</h3>
                        <p>Soporte completo y consultoría para empresas que requieren máxima seguridad y rendimiento.</p>
                        <ul>
                            <li>✔ Todo lo incluido en Pro</li>
                            <li>✔ Soporte prioritario 24/7 (chat y llamada)</li>
                            <li>✔ Auditorías de seguridad avanzadas y mejoras constantes</li>
                            <li>✔ Reportes mensuales de rendimiento y visitas</li>
                            <li>✔ Consultoría estratégica para mejorar tu presencia digital</li>
                        </ul>
                        <p className="mkzcare__precio"><strong>$129 USD/mes</strong></p>
                    </div>

                </div>
            </div>
        </section >
    );
}
