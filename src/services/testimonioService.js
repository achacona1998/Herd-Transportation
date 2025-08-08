import { supabase } from "../utils/supabaseClient";

const TABLA_TESTIMONIOS = "Herd_DB_Testimonials";

export const getTestimonios = async () => {
  const { data, error } = await supabase
    .from(TABLA_TESTIMONIOS)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error al obtener testimonios:", error);
    return [];
  }
  return data;
};

export const crearTestimonio = async ({ user, rating, comment }) => {
  if (!user) {
    throw new Error("Usuario no autenticado");
  }

  const { error } = await supabase.from(TABLA_TESTIMONIOS).insert([
    {
      user_email: user.email,
      user_name: user.user_metadata.full_name,
      user_avatar_url: user.user_metadata.avatar_url,
      rating,
      comment,
    },
  ]);

  if (error) {
    console.error("Error al crear testimonio:", error);
    throw error;
  }
};
