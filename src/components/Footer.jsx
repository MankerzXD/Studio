// src/components/Footer.jsx
import '../styles/Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Sneakpeak */}
        <div className="footer__column">
          <h3 className="footer__heading">SNEAKPEAK</h3>
          <p>Estudio digital enfocado en crear soluciones limpias, funcionales y centradas en el usuario.</p>
        </div>

        {/* Contacto */}
        <div className="footer__column">
          <h3 className="footer__heading">GET IN TOUCH</h3>
          <p>¿Querés contactarnos? Dejanos tu email y te escribimos.</p>
          <form className="footer__form">
            <input type="email" placeholder="Email" />
            <button type="submit">Enviar</button>
          </form>
        </div>

        {/* Redes */}
        <div className="footer__column">
          <h3 className="footer__heading">SOCIAL</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">X</a></li>
          </ul>
        </div>

        {/* Otros */}
        <div className="footer__column">
          <h3 className="footer__heading">OTROS</h3>
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Legal</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__metrics">
        <div className="footer__metric">
          <p className="footer__metric-number">0</p>
          <p>Proyectos lanzados</p>
        </div>
        <div className="footer__metric">
          <p className="footer__metric-number">0</p>
          <p>Apps y Webs</p>
        </div>
      </div>

      <p className="footer__bottom">Mankerz Studio © {new Date().getFullYear()} – All rights reserved.</p>
    </footer>
  );
}
