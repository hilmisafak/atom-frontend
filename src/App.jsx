import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Photos from './pages/admin/Photos';
import Home from './pages/public/Home';
import Gallery from './pages/public/Gallery';
import ProtectedRoute from './components/ProtectedRoute';
import ChangePassword from "./pages/admin/ChangePassword";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeri" element={<Gallery />} />

      <Route path="/admin/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/photos"
        element={
          <ProtectedRoute>
            <Photos />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/change-password"
        element={
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
