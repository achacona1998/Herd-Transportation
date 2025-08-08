import { useState, useEffect } from "react";
import Button from "../UI/Button";
import { SECTION_SUBHEADERS } from "../../constants/headers";
import { crearTestimonio } from "../../services/testimonioService";
import { supabase } from "../../utils/supabaseClient";

const CommentModal = ({ isOpen, onClose, user }) => {
  const [formData, setFormData] = useState({
    rating: "",
    comment: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({ rating: "", comment: "" });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Función para cerrar sesión y cerrar modal juntos
  const handleCloseAndSignOut = async () => {
    // Cerrar sesión Supabase
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error cerrando sesión:", error);
    }
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Debes iniciar sesión para comentar");
      return;
    }

    try {
      await crearTestimonio({
        user,
        rating: formData.rating,
        comment: formData.comment,
      });

      onClose();
      // Si quieres cerrar sesión luego de enviar
      await supabase.auth.signOut();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Error al enviar el comentario. Intenta de nuevo.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-0">
      <div
        className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md bg-gradient-to-tl from-[#1BAA6E] to-[#0F3D2E] md:p-6 border border-[#CFB53B]"
        onClick={(e) => e.stopPropagation()} // Evita cerrar modal al click dentro del contenido
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {SECTION_SUBHEADERS.COMMENT_MODAL.title}
          </h3>
          <button
            onClick={handleCloseAndSignOut}
            className="text-white font-semibold hover:scale-125 transition duration-300"
            aria-label="Cerrar modal y cerrar sesión">
            ✕
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <p className="text-white">
            <strong>Name:</strong> {user?.user_metadata?.full_name || "N/A"}
          </p>
          <p className="text-white">
            <strong>Email:</strong> {user?.email || "N/A"}
          </p>

          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block mb-2 font-semibold text-white">
              Rating
            </label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFB53B] mb-4 text-white"
              required>
              <option className="text-gray-600" value="">
                Select a rating
              </option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} className="text-black" value={n}>
                  {n} Star{n > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block text-white font-medium mb-2">
              Comment
            </label>
            <textarea
              rows="4"
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Share your experience..."
              className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFB53B] mb-4 text-white"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-end gap-2">
            <Button
              onClick={handleCloseAndSignOut}
              className="bg-gray-200 w-full sm:w-auto">
              Cancel
            </Button>
            <Button type="submit" className="w-full sm:w-auto">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
