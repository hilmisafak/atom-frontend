import { useEffect, useState } from "react";
import { ArrowRight, ImageIcon, Search, Sparkles, Camera } from "lucide-react";

import api from "../../api/axios";
import "../../styles/gallerypreview.css";

function GalleryPreview() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPhotos = async () => {
    try {
      const response = await api.get("/photos");
      setPhotos(response.data.data.slice(0, 6));
    } catch (error) {
      console.error("Galeri fotoğrafları alınamadı:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <section id="galeri" className="gallery-preview-section">
      <div className="gallery-glow gallery-glow-left" />
      <div className="gallery-glow gallery-glow-right" />

      <div className="container-custom relative z-10">
        <div className="gallery-header">
          <div className="gallery-header-content">
            <div className="gallery-badge">
              <ImageIcon size={17} />
              Galeri
            </div>

            <h2 className="gallery-title">
              Araç Taşıma ve Oto Kurtarma
              <span> Fotoğrafları</span>
            </h2>

            <p className="gallery-desc">
              Gerçek hizmet süreçlerinden kareler. Araç taşıma, oto kurtarma ve
              şehirlerarası sevkiyat operasyonlarımızdan seçilmiş fotoğraflar.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="gallery-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="gallery-skeleton" />
            ))}
          </div>
        ) : photos.length === 0 ? (
          <div className="gallery-empty">
            <Camera size={42} />
            <h3>Henüz fotoğraf eklenmemiş</h3>
            <p>
              Galeriye yeni operasyon fotoğrafları eklendiğinde burada
              görünecek.
            </p>
          </div>
        ) : (
          <div className="gallery-layout">
            <div className="gallery-grid">
              {photos.map((photo, index) => (
                <article
                  key={photo._id}
                  className={`gallery-card ${index === 0 ? "gallery-card-large" : ""}`}
                >
                  <div className="gallery-image-wrap">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="gallery-image"
                    />

                    <div className="gallery-overlay" />

                    <div className="gallery-top">
                      <span className="gallery-category">
                        <Sparkles size={13} />
                        {photo.category}
                      </span>

                      <span className="gallery-search">
                        <Search size={18} />
                      </span>
                    </div>

                    <div className="gallery-card-content">
                      <h3>{photo.title}</h3>
                      <p>Gerçek operasyon görüntüsü</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="gallery-side-card">
              <div className="gallery-side-icon">
                <ImageIcon size={28} />
              </div>

              <h3>Tüm Galeriyi Keşfedin</h3>

              <p>
                Daha fazla araç taşıma ve oto kurtarma operasyonumuzu inceleyin.
              </p>

              <a href="/galeri">
                Tüm Galeri
                <ArrowRight size={18} />
              </a>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

export default GalleryPreview;
