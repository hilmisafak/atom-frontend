import { ArrowRight, Award, Clock, Map, ShieldCheck } from "lucide-react";
import "../../styles/whyus.css";

const stats = [
  {
    icon: Award,
    value: "2010",
    label: "Kuruluş Yılı",
    description: "Sektörde uzun yıllara dayanan tecrübe.",
  },
  {
    icon: Map,
    value: "81 İl",
    label: "Türkiye Geneli",
    description: "Şehirlerarası araç taşıma desteği.",
  },
  {
    icon: Clock,
    value: "7/24",
    label: "Acil Destek",
    description: "Yolda kalma ve oto kurtarma hizmeti.",
  },
  {
    icon: ShieldCheck,
    value: "Güvenli",
    label: "Taşıma Süreci",
    description: "Araçlarınız özenle teslim alınır ve taşınır.",
  },
];

function WhyUs() {
  return (
    <section className="why-section">
      <div className="why-glow" />

      <div className="section-container why-layout">
        <div className="why-copy">
          <span className="section-badge">Neden Bizi Tercih Etmelisiniz?</span>

          <h2 className="section-title">
            Aracınızı Teslim Ederken
            <span> Güven </span>
            Önceliğimizdir
          </h2>

          <p className="section-description">
            ATOM OTO TAŞIMACILIK, 2010 yılından beri araç taşıma ve oto kurtarma
            alanında hızlı, güvenilir ve ulaşılabilir hizmet anlayışıyla
            çalışır.
          </p>

          <a href="#iletisim" className="why-cta">
            Hemen İletişime Geç
            <ArrowRight size={19} />
          </a>
        </div>

        <div className="stats-grid">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.label} className="stat-card">
                <div className="stat-icon">
                  <Icon size={28} strokeWidth={2.4} />
                </div>

                <div>
                  <p className="stat-value">{item.value}</p>
                  <h3>{item.label}</h3>
                  <p className="stat-description">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
