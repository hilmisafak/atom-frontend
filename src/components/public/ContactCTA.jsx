import {
    Phone,
    MapPin,
    ShieldCheck,
    Clock,
    ArrowRight,
  } from "lucide-react";
  import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
  
  import "../../styles/contactcta.css";
  
  function ContactCTA() {
    return (
      <section id="iletisim" className="contact-cta-section">
        <div className="contact-cta-glow" />
  
        <div className="container-custom relative z-10">
          <div className="contact-cta-card">
            <div className="contact-cta-icon-wrap">
              <div className="contact-cta-icon">
                <FaPhoneAlt size={34} />
              </div>
            </div>
  
            <div className="contact-cta-content">
              <span className="contact-cta-badge">Hızlı İletişim</span>
  
              <h2>
                Aracınızı Güvenle <span>Taşıyalım</span>
              </h2>
  
              <p>
                Araç taşıma, oto kurtarma veya şehirlerarası sevkiyat için hemen
                iletişime geçin. Telefon ya da WhatsApp üzerinden hızlı teklif
                alın.
              </p>
  
              <div className="contact-cta-info">
                <div>
                  <ShieldCheck size={18} />
                  Sigortalı ve güvenli taşıma
                </div>
  
                <div>
                  <Clock size={18} />
                  7/24 hızlı destek
                </div>
              </div>
            </div>
  
            <div className="contact-cta-actions">
              <a href="tel:+905534145451" className="contact-cta-call">
                <Phone size={20} />
                <span>
                  Hemen Ara
                  <small>+90 553 414 54 51</small>
                </span>
              </a>
  
              <a
                href="https://wa.me/905534145451?text=Merhaba,%20ara%C3%A7%20ta%C5%9F%C4%B1ma%20hizmeti%20i%C3%A7in%20teklif%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                className="contact-cta-whatsapp"
              >
                <FaWhatsapp size={20} />
                <span>
                  WhatsApp Teklif Al
                  <small>Hızlı teklif için yazın</small>
                </span>
                <ArrowRight size={18} className="contact-cta-arrow" />
              </a>
  
              <div className="contact-cta-location">
                <MapPin size={18} />
                Ankara ⇄ Antalya başta olmak üzere Türkiye geneli
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ContactCTA;