import { MapPin, Navigation, CheckCircle2, Truck } from "lucide-react";
import "../../styles/routessection.css";

const mainRoutes = [
  { route: "Ankara ⇄ Antalya", label: "Sabit Hat" },
  { route: "Antalya ⇄ Ankara", label: "Sabit Hat" },
];

const cities = [
  "Burdur",
  "Denizli",
  "Kütahya",
  "Uşak",
  "Isparta",
  "Afyon",
  "Eskişehir",
];

function RoutesSection() {
  return (
    <section id="bolgeler" className="routes-section">
      <div className="section-container routes-layout">
        <div className="routes-copy">
          <span className="routes-badge">
            <Navigation size={14} />
            Hizmet Bölgeleri
          </span>

          <h2 className="routes-title">
            Ankara Aktarmalı
            <span> Türkiye Geneli </span>
            Araç Taşıma
          </h2>

          <p className="routes-desc">
            Başta Ankara ve Antalya hattı olmak üzere, sabit rotalarımız ve
            aktarma sistemimizle Türkiye’nin 81 iline araç taşıma konusunda
            yardımcı oluyoruz.
          </p>

          <div className="route-pill-grid">
            {mainRoutes.map((item) => (
              <div className="route-pill" key={item.route}>
                <Truck size={17} />
                <div>
                  <strong>{item.route}</strong>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="routes-panel">
          <div className="routes-info">
            <div className="routes-list-head">
              <div className="routes-head-icon">
                <MapPin size={22} />
              </div>

              <div>
                <h3>Öne Çıkan Sabit Rotalar</h3>
                <p>81 ile gidiş-dönüş destek sağlanır</p>
              </div>
            </div>

            <div className="city-grid">
              {cities.map((city) => (
                <div className="city-item" key={city}>
                  <CheckCircle2 size={14} />
                  <span>{city}</span>
                </div>
              ))}
            </div>

            <div className="routes-note">
              Antalya’dan Ankara aktarmalı şekilde farklı illere araç gönderimi
              yapılır. Talebe göre Türkiye geneli taşıma için destek sağlanır.
            </div>
          </div>

          <div className="map-area">
            {/* Sadece PNG haritamızı koyuyoruz, başka koda gerek yok! */}
            <img
              src="/images/turkey-map.png"
              alt="Türkiye araç taşıma haritası"
              className="turkey-map-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoutesSection;
