import { useEffect, useState } from "react";
import { ArrowLeft, ImageIcon } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import api from "../../api/axios";
import Header from "../../components/public/Header";
import Footer from "../../components/public/Footer";
import MobileActionBar from "../../components/public/MobileActionBar";

import "../../styles/gallery.css";

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const fetchPhotos = async () => {
    try {
      const response = await api.get("/photos");
      setPhotos(response.data.data);
    } catch (error) {
      console.error("Fotoğraflar alınamadı:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const categories = [
    "Tümü",
    ...new Set(photos.map((photo) => photo.category).filter(Boolean)),
  ];

  const filteredPhotos =
    activeCategory === "Tümü"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  const lightboxSlides = filteredPhotos.map((photo) => ({
    src: photo.imageUrl,
    title: photo.title,
    description: photo.description,
  }));

  return (
    <>
      <Header />

      <main className="gallery-page">
        <section className="container-custom gallery-section">
          <a href="/" className="gallery-back-link">
            <ArrowLeft size={18} />
            Ana sayfaya dön
          </a>

          <div className="gallery-hero">
            <div className="gallery-badge">
              <ImageIcon size={18} />
              Galeri
            </div>

            <h1 className="gallery-title">
              ATOM OTO <span>Fotoğraf Galerisi</span>
            </h1>

            <p className="gallery-description">
              Araç taşıma, oto kurtarma ve şehirlerarası sevkiyat
              süreçlerimizden fotoğraflar.
            </p>
          </div>

          <div className="gallery-filter">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`gallery-filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="gallery-grid">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="gallery-skeleton" />
              ))}
            </div>
          ) : filteredPhotos.length === 0 ? (
            <div className="gallery-empty">
              <p>Bu kategoride fotoğraf bulunamadı.</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {filteredPhotos.map((photo, index) => (
                <button
                  key={photo._id}
                  type="button"
                  className="gallery-card"
                  onClick={() => setLightboxIndex(index)}
                >
                  <div className="gallery-card-image">
                    <img src={photo.imageUrl} alt={photo.title} />

                    <div className="gallery-card-overlay"></div>

                    <div className="gallery-card-content">
                      <span>{photo.category}</span>
                      <h2>{photo.title}</h2>
                      {photo.description && <p>{photo.description}</p>}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>
      </main>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />

      <Footer />
      <MobileActionBar />
    </>
  );
}

export default Gallery;
