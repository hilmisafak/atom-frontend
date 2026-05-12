import {
  Phone,
  ShieldCheck,
  Clock3,
  MapPin,
  FileCheck2,
  Mouse,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "../../styles/hero.css";

function Hero() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Güvenli Taşıma",
      text: "Araçlarınız özenle taşınır.",
    },
    {
      icon: Clock3,
      title: "7/24 Destek",
      text: "Acil oto kurtarma hizmeti.",
    },
    {
      icon: MapPin,
      title: "81 İl Hizmet",
      text: "Türkiye geneli sevkiyat.",
    },
    {
      icon: FileCheck2,
      title: "Sigortalı Taşıma",
      text: "Tam kapsamlı sigorta güvencesi.",
    },
  ];

  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/images/hero-img.jpg" alt="Araç taşıma hizmeti" />
      </div>

      <div className="container-custom hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <MapPin size={18} />
            ANKARA ⇄ ANTALYA BAŞTA OLMAK ÜZERE 81 İL
          </div>

          <h1>
            <span>81 İL’E</span> ARAÇ TAŞIMA
            <br />
            VE OTO KURTARMA
          </h1>

          <div className="hero-line" />

          <p>
            2010’dan beri şehirlerarası araç taşıma, oto kurtarma ve Ankara
            aktarmalı Türkiye geneli araç sevkiyat hizmeti sunuyoruz.
          </p>

          <div className="hero-actions">
            <a href="tel:+905534145451" className="primary-btn">
              <Phone size={22} />
              Hemen Ara
            </a>

            <a
              href="https://wa.me/905534145451"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              <FaWhatsapp size={22} />
              WhatsApp ile Teklif Al
            </a>
          </div>

          <div className="feature-grid">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div className="feature-card" key={item.title}>
                  <Icon size={36} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="scroll-text">
            <Mouse size={20} />
            Aşağı kaydırın
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
