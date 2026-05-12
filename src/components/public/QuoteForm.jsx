import { useState } from "react";
import {
  Send,
  ShieldCheck,
  Zap,
  BadgeCheck,
  User,
  Phone,
  MapPin,
  Car,
  Lock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import "../../styles/quoteform.css";

function QuoteForm() {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    vehicle: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    const trimmedData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      from: formData.from.trim(),
      to: formData.to.trim(),
      vehicle: formData.vehicle.trim(),
    };

    Object.entries(trimmedData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = "Bu alan zorunludur";
      }
    });

    const cleanPhone = trimmedData.phone.replace(/\s/g, "");
    const phoneRegex = /^(05\d{9}|\+905\d{9}|905\d{9})$/;

    if (trimmedData.phone && !phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Geçerli bir telefon numarası girin";
    }

    return { newErrors, trimmedData };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { newErrors, trimmedData } = validateForm();

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const message = `
Merhaba, araç taşıma hizmeti için teklif almak istiyorum.

Ad Soyad: ${trimmedData.name}
Telefon: ${trimmedData.phone}
Nereden: ${trimmedData.from}
Nereye: ${trimmedData.to}
Araç Bilgisi: ${trimmedData.vehicle}
`;

    const phoneNumber = "905534145451";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="quoteform" className="quote-section">
      <div className="quote-bg quote-bg-left" />
      <div className="quote-bg quote-bg-right" />

      <div className="container-custom relative z-10">
        <div className="quote-card">
          <div className="quote-content">
            <div className="quote-badge">
              <FaWhatsapp size={17} />
              WhatsApp Teklifi
            </div>

            <h2 className="quote-title">
              Araç Taşıma İçin
              <span> Hızlı Teklif </span>
              Alın
            </h2>

            <p className="quote-desc">
              Nereden nereye araç taşıyacağınızı ve araç bilgilerinizi yazın.
              Mesajınız otomatik hazırlanarak WhatsApp üzerinden bize iletilir.
            </p>

            <div className="quote-features">
              <div className="quote-feature">
                <Zap size={20} />
                <div>
                  <strong>Hızlı Yanıt</strong>
                  <span>Mesajınıza kısa sürede dönüş yapılır.</span>
                </div>
              </div>

              <div className="quote-feature">
                <ShieldCheck size={20} />
                <div>
                  <strong>Güvenli Taşıma</strong>
                  <span>Aracınız kontrollü şekilde taşınır.</span>
                </div>
              </div>

              <div className="quote-feature">
                <BadgeCheck size={20} />
                <div>
                  <strong>Uygun Fiyat</strong>
                  <span>İhtiyacınıza göre teklif sunulur.</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="quote-form" noValidate>
            <div className="quote-form-grid">
              <div className="quote-field">
                <label
                  className={`quote-input-group ${
                    errors.name ? "quote-input-error" : ""
                  }`}
                >
                  <User size={18} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Ad Soyad *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                {errors.name && (
                  <span className="quote-error-text">{errors.name}</span>
                )}
              </div>

              <div className="quote-field">
                <label
                  className={`quote-input-group ${
                    errors.phone ? "quote-input-error" : ""
                  }`}
                >
                  <Phone size={18} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon *"
                    value={formData.phone}
                    onChange={handleChange}
                    inputMode="tel"
                    maxLength={13}
                    required
                  />
                </label>
                {errors.phone && (
                  <span className="quote-error-text">{errors.phone}</span>
                )}
              </div>

              <div className="quote-field">
                <label
                  className={`quote-input-group ${
                    errors.from ? "quote-input-error" : ""
                  }`}
                >
                  <MapPin size={18} />
                  <input
                    type="text"
                    name="from"
                    placeholder="Nereden? *"
                    value={formData.from}
                    onChange={handleChange}
                    required
                  />
                </label>
                {errors.from && (
                  <span className="quote-error-text">{errors.from}</span>
                )}
              </div>

              <div className="quote-field">
                <label
                  className={`quote-input-group ${
                    errors.to ? "quote-input-error" : ""
                  }`}
                >
                  <MapPin size={18} />
                  <input
                    type="text"
                    name="to"
                    placeholder="Nereye? *"
                    value={formData.to}
                    onChange={handleChange}
                    required
                  />
                </label>
                {errors.to && (
                  <span className="quote-error-text">{errors.to}</span>
                )}
              </div>
            </div>

            <div className="quote-field">
              <label
                className={`quote-input-group quote-textarea-group ${
                  errors.vehicle ? "quote-input-error" : ""
                }`}
              >
                <Car size={18} />
                <textarea
                  name="vehicle"
                  placeholder="Araç bilgisi / açıklama *"
                  value={formData.vehicle}
                  onChange={handleChange}
                  rows="5"
                  maxLength="500"
                  required
                />
                <span className="quote-counter">
                  {formData.vehicle.length}/500
                </span>
              </label>
              {errors.vehicle && (
                <span className="quote-error-text">{errors.vehicle}</span>
              )}
            </div>

            <button type="submit" className="quote-submit">
              <Send size={20} />
              WhatsApp Teklif Mesajı Oluştur
            </button>

            <p className="quote-privacy">
              <Lock size={14} />
              Bilgileriniz gizli tutulur ve üçüncü taraflarla paylaşılmaz.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default QuoteForm;
