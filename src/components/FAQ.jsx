import React, { useState } from "react";
import "../styles/FAQ.scss";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en desarrollarse una página web? ",
    answer:
      "Depende de la complejidad del proyecto, pero en promedio entre 2 a 6 semanas.",
  },
  {
    question: "¿Puedo actualizar yo mismo el contenido de mi sitio?",
    answer:
      "Sí, si lo deseas podemos desarrollar tu web en plataformas que permiten editar fácilmente sin conocimientos técnicos.",
  },
  {
    question: "¿Ofrecen servicios de mantenimiento después de entregar la web?",
    answer:
      "Sí, contamos con planes de mantenimiento para actualizar y asegurar el correcto funcionamiento de tu sitio.",
  },
  {
    question: "¿Necesito comprar un dominio y hosting?",
    answer:
      "Nosotros nos encargamos de adquirir y gestionar el dominio y hosting para tu sitio web, según la disponibilidad y necesidades específicas. Así centralizamos el mantenimiento y soporte, garantizando que tu web esté siempre en óptimas condiciones sin que tengas que preocuparte por estos aspectos técnicos.",
  },
  {
    question: "¿El diseño será adaptable para móviles y tablets?",
    answer:
      "Absolutamente, todos los trabajos que desarrollamos son 100% responsive y se adaptan a cualquier dispositivo.",
  },
  {
    question: "¿Puedo solicitar cambios o funcionalidades extras durante el desarrollo?",
    answer:
      "Claro, siempre que sea posible y se acuerde previamente, podemos incorporar cambios durante el proceso.",
  },
  {
    question: "¿Qué información necesitan para comenzar el proyecto?",
    answer:
      "Necesitamos saber los objetivos del sitio, contenido, imágenes, y cualquier referencia visual que te guste.",
  },
  {
    question: "¿Cuáles son las formas de pago y plazos?",
    answer:
      "Generalmente se solicita un anticipo y luego el pago final al entregar el proyecto. Aceptamos transferencia bancaria, criptomonedas y pagos en efectivo. También podemos acordar facilidades para que el pago sea cómodo para vos.",
  },
  {
    question: "¿Ofrecen posicionamiento SEO o marketing digital?",
    answer:
      "Sí, aplicamos prácticas básicas de SEO en todos nuestros desarrollos para asegurar que tu sitio esté optimizado para motores de búsqueda desde el inicio. Esto incluye estructura semántica, etiquetas meta, URLs amigables y optimización de contenido. Para estrategias más avanzadas o marketing digital, podemos recomendarte especialistas que complementen el trabajo.",
  },
  {
    question: "¿Cómo contacto con ustedes si necesito soporte o consultas?",
    answer:
      "Puedes contactarnos vía WhatsApp o correo electrónico",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <h2>Preguntas Frecuentes</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              {faq.question}
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className="faq-answer"
              role="region"
              aria-labelledby={`faq-question-${index}`}
              style={{ maxHeight: openIndex === index ? "200px" : "0" }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
