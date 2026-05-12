import {
  ImageIcon,
  ShieldCheck,
  UploadCloud,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import AdminLayout from "../../components/AdminLayout";

function Dashboard() {
  const cards = [
    {
      title: "Galeri",
      value: "Fotoğraflar",
      text: "Galeri içeriklerini yönet.",
      icon: ImageIcon,
    },
    {
      title: "Cloudinary",
      value: "Aktif",
      text: "Görsel depolama sistemi hazır.",
      icon: UploadCloud,
    },
    {
      title: "JWT",
      value: "Korumalı",
      text: "Admin route koruması aktif.",
      icon: ShieldCheck,
    },
  ];

  return (
    <AdminLayout>
      <div className="admin-page-header">
        <div>
          <span className="admin-eyebrow">Kontrol Paneli</span>
          <h1>Dashboard</h1>
          <p>ATOM OTO yönetim paneline hoş geldiniz.</p>
        </div>

        <Link to="/admin/photos" className="admin-primary-link">
          Fotoğraf Yönet
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="admin-stats-grid">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article key={card.title} className="admin-stat-card">
              <div className="admin-stat-icon">
                <Icon size={26} />
              </div>

              <span>{card.title}</span>
              <h2>{card.value}</h2>
              <p>{card.text}</p>
            </article>
          );
        })}
      </div>

      <div className="admin-dashboard-grid">
        <section className="admin-panel-card">
          <div className="admin-panel-header">
            <div>
              <h2>Hızlı İşlemler</h2>
              <p>Panelde en çok kullanılan işlemler.</p>
            </div>
          </div>

          <div className="admin-quick-actions">
            <Link to="/admin/photos">
              <ImageIcon size={20} />
              Fotoğraf ekle / düzenle
            </Link>

            <Link to="/admin/change-password">
              <LockKeyhole size={20} />
              Şifre değiştir
            </Link>
          </div>
        </section>

        <section className="admin-panel-card">
          <div className="admin-panel-header">
            <div>
              <h2>Sistem Durumu</h2>
              <p>Admin panel servisleri.</p>
            </div>
          </div>

          <div className="admin-status-list">
            <div>
              <span>API Bağlantısı</span>
              <strong>Aktif</strong>
            </div>

            <div>
              <span>Galeri Yönetimi</span>
              <strong>Hazır</strong>
            </div>

            <div>
              <span>Admin Güvenliği</span>
              <strong>JWT</strong>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
