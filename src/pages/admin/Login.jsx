import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User, ShieldCheck } from "lucide-react";
import toast from "react-hot-toast";

import api from "../../api/axios";
import "../../styles/admin-login.css";

function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (token) {
      navigate("/admin", { replace: true });
    }
  }, [navigate, token]);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await api.post("/auth/login", formData);

      localStorage.setItem("adminToken", response.data.token);
      toast.success("Başarıyla giriş yapıldı.");
      navigate("/admin", { replace: true });
    } catch (err) {
      const message = err.response?.data?.message || "Giriş yapılırken bir hata oluştu.";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-login-page">
      <div className="admin-login-bg admin-login-bg-one"></div>
      <div className="admin-login-bg admin-login-bg-two"></div>

      <section className="admin-login-card">
        <div className="admin-login-brand">
          <div className="admin-login-icon">
            <ShieldCheck size={26} />
          </div>

          <div>
            <strong>ATOM OTO</strong>
            <span>Yönetim Paneli</span>
          </div>
        </div>

        <div className="admin-login-header">
          <h1>Admin Giriş</h1>
          <p>Fotoğraf, galeri ve site içeriklerini yönetmek için giriş yap.</p>
        </div>

        {error && <div className="admin-login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="admin-login-form">
          <label>
            <span>Kullanıcı adı</span>

            <div className="admin-input-wrapper">
              <User size={18} />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="admin"
                autoComplete="username"
                required
              />
            </div>
          </label>

          <label>
            <span>Şifre</span>

            <div className="admin-input-wrapper">
              <Lock size={18} />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>
          </label>

          <button type="submit" disabled={loading}>
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
