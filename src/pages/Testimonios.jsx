import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { getTestimonios } from "../services/testimonioService";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";
import { PAGE_HEADERS } from "../constants/headers";
import Ask from "../sections/Testimonios/Ask";
import Testimonials from "../sections/Testimonios/Testimonials";
import CommentModal from "../components/Testimonios/CommentModal";

const Testimonios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [testimonios, setTestimonios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    cargarTestimonios();
    supabase.auth.getUser().then(({ data }) => setUser(data?.user || null));

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
        if (session?.user && !isModalOpen) {
          setIsModalOpen(true);
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [isModalOpen]);

  const cargarTestimonios = async () => {
    setIsLoading(true);
    try {
      const datos = await getTestimonios();
      console.log(datos);
      setTestimonios(datos);
    } catch (error) {
      console.error("Error loading testimonios:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = async () => {
    if (!user) {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/testimonials`,
        },
      });
      if (error) {
        console.error("Error en login:", error.message);
      }
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6">
      <Header
        title={PAGE_HEADERS.TESTIMONIALS.title}
        subtitle={PAGE_HEADERS.TESTIMONIALS.subtitle}
      />

      <div className="w-full flex items-center justify-end container mx-auto -mb-5 px-4 sm:px-6">
        <Button onClick={openModal} className="text-sm sm:text-base">
          Comment Here
        </Button>
        <CommentModal isOpen={isModalOpen} onClose={closeModal} user={user} />
      </div>

      {/* Aquí podrías pasar testimonios a tu componente Testimonials */}
      <Testimonials testimonios={testimonios} isLoading={isLoading} />
      <Ask />
    </div>
  );
};

export default Testimonios;
