import { useState } from "react";
import toast from "react-hot-toast";
import { LockKeyhole, ShieldCheck } from "lucide-react";

import api from "../../api/axios";
import AdminLayout from "../../components/AdminLayout";

function ChangePassword() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      await api.put("/auth/change-password", formData);

      toast.success("Şifre başarıyla değiştirildi.");

      setFormData({
        oldPassword: "",
        newPassword: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Şifre değiştirme başarısız.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="admin-page-header">
        <div>
          <span className="admin-eyebrow">Güvenlik</span>
          <h1>Şifre Değiştir</h1>
          <p>
            Admin panel giriş şifrenizi buradan güvenli şekilde güncelleyin.
          </p>
        </div>

        <div className="admin-count-card">
          <ShieldCheck size={20} />
          <strong>JWT</strong>
          <span>Aktif</span>
        </div>
      </div>

      <div className="admin-password-layout">
        <section className="admin-password-card">
          <div className="admin-upload-header">
            <div className="admin-upload-icon">
              <LockKeyhole size={24} />
            </div>

            <div>
              <h2>Yeni Şifre Belirle</h2>
              <p>Güvenliğiniz için güçlü bir şifre kullanın.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="admin-form">
            <label>
              <span>Eski Şifre</span>
              <input
                type="password"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                placeholder="Mevcut şifrenizi girin"
                autoComplete="current-password"
                required
              />
            </label>

            <label>
              <span>Yeni Şifre</span>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Yeni şifrenizi girin"
                autoComplete="new-password"
                required
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="admin-submit-btn"
            >
              {loading ? "Güncelleniyor..." : "Şifreyi Güncelle"}
            </button>
          </form>
        </section>

        <aside className="admin-security-card">
          <div className="admin-security-icon">
            <ShieldCheck size={30} />
          </div>

          <h2>Güvenlik Notları</h2>

          <ul>
            <li>Şifreniz en az 8 karakter olmalı.</li>
            <li>Büyük harf, küçük harf ve rakam kullanmanız önerilir.</li>
            <li>Kolay tahmin edilen şifreler kullanmayın.</li>
            <li>Şifrenizi kimseyle paylaşmayın.</li>
          </ul>
        </aside>
      </div>
    </AdminLayout>
  );
}

export default ChangePassword;
