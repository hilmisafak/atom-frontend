import {
  Truck,
  CarFront,
  ShieldCheck,
  MapPinned,
  Clock3,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import "../../styles/services.css";

const services = [
  {
    icon: Truck,
    title: "Şehirlerarası Araç Taşıma",
    description:
      "Türkiye’nin 81 iline güvenli ve profesyonel araç taşıma hizmeti sunuyoruz.",
    action: "Detayları İncele",
    featured: true,
  },
  {
    icon: CarFront,
    title: "Oto Kurtarma Hizmeti",
    description:
      "Arıza, kaza veya yolda kalma durumlarında hızlı oto kurtarma desteği.",
    action: "Hemen Ara",
  },
  {
    icon: MapPinned,
    title: "Ankara Aktarma Sistemi",
    description:
      "Antalya - Ankara merkezli aktarma ağı ile Türkiye geneline sevkiyat.",
    action: "Rotaları Gör",
  },
  {
    icon: Clock3,
    title: "7/24 Acil Destek",
    description:
      "Günün her saati ulaşılabilir ekip ve hızlı operasyon desteği.",
    action: "Hemen Ara",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli Taşıma",
    description:
      "Araçlarınız profesyonel ekipman ve güvenli taşıma prosedürleriyle korunur.",
    action: "Süreci İncele",
  },
  {
    icon: PhoneCall,
    title: "Hızlı İletişim",
    description:
      "Telefon ve WhatsApp üzerinden anında fiyat ve taşıma bilgisi alın.",
    action: "İletişime Geç",
  },
];

function Services() {
  return (
    <section id="hizmetler" className="services-section">
      <div className="services-bg services-bg-one" />
      <div className="services-bg services-bg-two" />

      <div className="section-container services-layout">
        <div className="services-intro">
          <span className="section-badge">Profesyonel Hizmetler</span>

          <h2 className="section-title">
            Türkiye Geneli Profesyonel
            <span> Araç Taşıma </span>
            Çözümleri
          </h2>

          <p className="section-description">
            2010’dan beri oto kurtarma, şehirlerarası araç taşıma ve lojistik
            alanında hızlı, güvenilir ve kullanıcı odaklı hizmet sunuyoruz.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`service-card ${service.featured ? "service-card-featured" : ""}`}
              >
                {service.featured && (
                  <span className="service-popular">Popüler</span>
                )}

                <div className="service-icon">
                  <Icon size={30} strokeWidth={2.4} />
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <a href="#iletisim" className="service-link">
                  {service.action}
                  <ArrowRight size={18} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
