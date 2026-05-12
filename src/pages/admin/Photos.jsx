import { useEffect, useState } from "react";
import {
  ImagePlus,
  Pencil,
  Trash2,
  X,
  UploadCloud,
  ImageIcon,
} from "lucide-react";
import toast from "react-hot-toast";

import AdminLayout from "../../components/AdminLayout";
import api from "../../api/axios";

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [editingPhoto, setEditingPhoto] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    description: "",
    category: "",
  });

  const fetchPhotos = async () => {
    try {
      const response = await api.get("/photos");
      setPhotos(response.data.data);
    } catch (error) {
      console.error(error);
      toast.error("Fotoğraflar alınamadı.");
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];

    if (!selectedImage) return;

    setImage(selectedImage);
    setPreviewImage(URL.createObjectURL(selectedImage));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Fotoğraf seçiniz.");
      return;
    }

    try {
      setLoading(true);

      const submitData = new FormData();
      submitData.append("title", formData.title);
      submitData.append("description", formData.description);
      submitData.append("category", formData.category);
      submitData.append("image", image);

      await api.post("/photos", submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setFormData({
        title: "",
        description: "",
        category: "",
      });

      setImage(null);
      setPreviewImage(null);

      await fetchPhotos();

      toast.success("Fotoğraf yüklendi.");
    } catch (error) {
      console.error(error);
      toast.error("Yükleme başarısız.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditOpen = (photo) => {
    setEditingPhoto(photo);

    setEditFormData({
      title: photo.title || "",
      description: photo.description || "",
      category: photo.category || "",
    });
  };

  const handleEditChange = (event) => {
    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      await api.put(`/photos/${editingPhoto._id}`, editFormData);

      setEditingPhoto(null);
      await fetchPhotos();

      toast.success("Fotoğraf güncellendi.");
    } catch (error) {
      console.error(error);
      toast.error("Güncelleme başarısız.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = confirm("Fotoğraf silinsin mi?");

    if (!confirmed) return;

    try {
      await api.delete(`/photos/${id}`);
      await fetchPhotos();

      toast.success("Fotoğraf silindi.");
    } catch (error) {
      console.error(error);
      toast.error("Silme işlemi başarısız.");
    }
  };

  return (
    <AdminLayout>
      <div className="admin-page-header">
        <div>
          <span className="admin-eyebrow">Galeri Yönetimi</span>
          <h1>Fotoğraflar</h1>
          <p>Cloudinary & MongoDB galeri fotoğraflarını buradan yönet.</p>
        </div>

        <div className="admin-count-card">
          <ImageIcon size={20} />
          <strong>{photos.length}</strong>
          <span>Fotoğraf</span>
        </div>
      </div>

      <div className="admin-photos-layout">
        <section className="admin-upload-card">
          <div className="admin-upload-header">
            <div className="admin-upload-icon">
              <ImagePlus size={24} />
            </div>

            <div>
              <h2>Yeni Fotoğraf Ekle</h2>
              <p>Galeriye yeni bir görsel yükle.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="admin-form">
            <label>
              <span>Başlık</span>
              <input
                type="text"
                name="title"
                placeholder="Örn: Ankara Antalya Araç Taşıma"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              <span>Açıklama</span>
              <textarea
                name="description"
                placeholder="Fotoğraf için kısa açıklama"
                value={formData.description}
                onChange={handleChange}
                rows="4"
              />
            </label>

            <label>
              <span>Kategori</span>
              <input
                type="text"
                name="category"
                placeholder="Örn: Araç Taşıma"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </label>

            <label className="admin-file-box">
              <UploadCloud size={28} />
              <strong>Fotoğraf seç</strong>
              <small>PNG, JPG veya WEBP dosyası yükle</small>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>

            {previewImage && (
              <div className="admin-preview">
                <img src={previewImage} alt="Önizleme" />

                <button
                  type="button"
                  onClick={() => {
                    setImage(null);
                    setPreviewImage(null);
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="admin-submit-btn"
            >
              {loading ? "Yükleniyor..." : "Fotoğraf Yükle"}
            </button>
          </form>
        </section>

        <section className="admin-gallery-panel">
          <div className="admin-panel-header">
            <div>
              <h2>Galeri Listesi</h2>
              <p>Yüklenen fotoğrafları düzenle veya sil.</p>
            </div>
          </div>

          {photos.length === 0 ? (
            <div className="admin-empty-state">
              <ImageIcon size={34} />
              <h3>Henüz fotoğraf yok</h3>
              <p>İlk fotoğrafı sol taraftaki formdan yükleyebilirsin.</p>
            </div>
          ) : (
            <div className="admin-photo-grid">
              {photos.map((photo) => (
                <article key={photo._id} className="admin-photo-card">
                  <div className="admin-photo-image">
                    <img src={photo.imageUrl} alt={photo.title} />
                  </div>

                  <div className="admin-photo-body">
                    <span>{photo.category}</span>
                    <h3>{photo.title}</h3>

                    {photo.description && <p>{photo.description}</p>}

                    <div className="admin-photo-actions">
                      <button
                        type="button"
                        onClick={() => handleEditOpen(photo)}
                      >
                        <Pencil size={16} />
                        Düzenle
                      </button>

                      <button
                        type="button"
                        className="danger"
                        onClick={() => handleDelete(photo._id)}
                      >
                        <Trash2 size={16} />
                        Sil
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      {editingPhoto && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal">
            <div className="admin-modal-header">
              <div>
                <h2>Fotoğraf Düzenle</h2>
                <p>Fotoğraf başlık, açıklama ve kategori bilgisini güncelle.</p>
              </div>

              <button type="button" onClick={() => setEditingPhoto(null)}>
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleUpdate} className="admin-form">
              <label>
                <span>Başlık</span>
                <input
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleEditChange}
                  required
                />
              </label>

              <label>
                <span>Açıklama</span>
                <textarea
                  name="description"
                  value={editFormData.description}
                  onChange={handleEditChange}
                  rows="4"
                />
              </label>

              <label>
                <span>Kategori</span>
                <input
                  type="text"
                  name="category"
                  value={editFormData.category}
                  onChange={handleEditChange}
                  required
                />
              </label>

              <div className="admin-modal-actions">
                <button type="submit" disabled={loading}>
                  {loading ? "Güncelleniyor..." : "Güncelle"}
                </button>

                <button
                  type="button"
                  className="secondary"
                  onClick={() => setEditingPhoto(null)}
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default Photos;
