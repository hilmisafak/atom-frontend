import {
  Phone,
  MapPin,
  ChevronRight,
  Clock,
  ShieldCheck,
  Mail,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

import "../../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="container-custom relative z-10">
        <div className="footer-main">
          <div className="footer-brand">
            <img
              src="/images/logo-2.png"
              alt="ATOM OTO"
              className="footer-logo"
            />

            <p>
              ATOM OTO TAŞIMACILIK & OTO KURTARMA, 2010’dan beri Türkiye geneli
              araç taşıma ve oto kurtarma hizmeti sunar.
            </p>

            <div className="footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook size={16} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://wa.me/905534145451"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
              <a href="tel:+905534145451" aria-label="Telefon">
                <FaPhoneAlt size={16} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Hizmetlerimiz</h3>

            <ul>
              <li>
                <ChevronRight size={16} />
                Şehirlerarası Araç Taşıma
              </li>
              <li>
                <ChevronRight size={16} />
                Oto Kurtarma
              </li>
              <li>
                <ChevronRight size={16} />
                Ankara Aktarmalı Sevkiyat
              </li>
              <li>
                <ChevronRight size={16} />
                7/24 Acil Destek
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>İletişim</h3>

            <ul>
              <li>
                <Phone size={17} />
                <a href="tel:+905534145451">+90 553 414 54 51</a>
              </li>
              <li>
                <FaWhatsapp size={17} />
                <a
                  href="https://wa.me/905534145451"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Mail size={17} />
                <a href="mailto:info@atomtasimacilik.com">
                  info@atomtasimacilik.com
                </a>
              </li>
              <li>
                <MapPin size={17} />
                Türkiye Geneli Hizmet
              </li>
            </ul>
          </div>

          <div className="footer-col footer-support">
            <h3>Çalışma Saatleri</h3>

            <p>7/24 Hizmetinizdeyiz</p>

            <div className="footer-emergency">
              <Clock size={22} />
              <div>
                <strong>ACİL DESTEK</strong>
                <span>7/24</span>
              </div>
            </div>
          </div>

          <div className="footer-col footer-why">
            <h3>Neden Bizi Tercih Etmelisiniz?</h3>

            <ul>
              <li>
                <ShieldCheck size={17} />
                2010’dan beri güvenilir hizmet
              </li>
              <li>
                <ShieldCheck size={17} />
                Sigortalı ve güvenli taşıma
              </li>
              <li>
                <ShieldCheck size={17} />
                Profesyonel ve deneyimli ekip
              </li>
              <li>
                <ShieldCheck size={17} />
                Uygun fiyat garantisi
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2010 - 2026 ATOM OTO TAŞIMACILIK & OTO KURTARMA. Tüm hakları
            saklıdır.
          </p>

          <span>
            Güvenli Taşıma, Zamanında Teslimat
            <ShieldCheck size={17} />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
