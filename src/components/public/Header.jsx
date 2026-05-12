import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  MapPin,
  ShieldCheck,
  Headphones,
  ArrowRight,
} from "lucide-react";

import "../../styles/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Ana Sayfa", to: "/" },
    { label: "Hizmetler", href: "/#hizmetler" },
    { label: "Bölgeler", href: "/#bolgeler" },
    { label: "Galeri", to: "/galeri" },
    { label: "İletişim", href: "/#iletisim" },
  ];

  return (
    <>
      <header className="main-header">
        <div className="topbar">
          <div className="container-custom topbar-inner">
            <div className="topbar-left">
              <span>
                <MapPin size={16} />
                Ankara ⇄ Antalya başta olmak üzere 81 il
              </span>

              <span>
                <Headphones size={16} />
                7/24 Destek
              </span>

              <span>
                <ShieldCheck size={16} />
                Hızlı, Güvenli ve Sigortalı Taşıma
              </span>
            </div>

            <a href="#quoteform" className="topbar-btn">
              Ücretsiz Teklif Al
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <div className="main-header">
          <div className="container-custom header-inner">
            <a href="/" className="logo">
              <img src="/images/logo-1.png" alt="ATOM OTO" />
            </a>

            <nav className="desktop-nav">
              {navLinks.map((link) =>
                link.to ? (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {link.label}
                  </NavLink>
                ) : (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ),
              )}
            </nav>

            <div className="header-phone">
              <div className="phone-icon">
                <Phone size={22} />
              </div>

              <div>
                <p>7/24 DESTEK</p>
                <a href="tel:+905534145451">0553 414 54 51</a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {isOpen && (
            <div className="mobile-menu">
              <nav className="container-custom">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}

                <a href="tel:+905534145451" className="mobile-call-btn">
                  <Phone size={20} />
                  Hemen Ara
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
