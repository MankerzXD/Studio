import React, { useState, useEffect } from 'react';
import '../styles/Hero.scss';

export default function Hero() {
  const [dynamicText, setDynamicText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = [' Co.', ' STUDIO', ''];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % texts.length;
      const fullText = texts[current];

      setDynamicText(
        isDeleting
          ? fullText.substring(0, dynamicText.length - 1)
          : fullText.substring(0, dynamicText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && dynamicText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && dynamicText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [dynamicText, isDeleting, loopNum, texts]);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          MANKERZ
          <span className="dynamic-text">{dynamicText}</span>
          <span className="cursor">|</span>
        </h1>
        <p className="hero-subtitle">
          Creamos experiencias digitales que impulsan tu negocio.
        </p>
        <div className="hero-cta">
          <button className="cta-button">Conoce nuestro trabajo</button>
          <button className="cta-button secondary">Hablemos</button>
        </div>
      </div>
    </div>
  );
}