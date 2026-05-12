import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ImageIcon,
  LayoutDashboard,
  LogOut,
  LockKeyhole,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import "../styles/admin.css";

function AdminLayout({ children }) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const links = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      end: true,
    },
    {
      label: "Fotoğraflar",
      href: "/admin/photos",
      icon: ImageIcon,
    },
    {
      label: "Şifre Değiştir",
      href: "/admin/change-password",
      icon: LockKeyhole,
    },
  ];

  return (
    <main className="admin-shell">
      <aside className={`admin-sidebar ${sidebarOpen ? "is-open" : ""}`}>
        <div className="admin-sidebar-header">
          <Link to="/admin" className="admin-logo">
            <img src="/images/logo-3.png" alt="ATOM OTO" />
          </Link>

          <button
            type="button"
            className="admin-sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="admin-nav">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.end}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `admin-nav-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user-card">
            <span className="admin-user-avatar">A</span>
            <div>
              <strong>Admin</strong>
              <small>ATOM OTO Panel</small>
            </div>
          </div>

          <button type="button" onClick={handleLogout} className="admin-logout">
            <LogOut size={20} />
            <span>Çıkış Yap</span>
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <button
          type="button"
          className="admin-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <section className="admin-main">
        <header className="admin-topbar">
          <button
            type="button"
            className="admin-menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>

          <div>
            <strong>ATOM OTO</strong>
            <span>Yönetim Paneli</span>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="admin-topbar-logout"
          >
            Çıkış Yap
          </button>
        </header>

        <div className="admin-content">{children}</div>
      </section>
    </main>
  );
}

export default AdminLayout;
