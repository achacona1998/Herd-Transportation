import { useState } from "react";
import Button from "../components/UI/Button";
import Header from "../components/UI/Header";
import Ask from "../sections/Testimonios/Ask";
import Testimonials from "../sections/Testimonios/Testimonials";

const Testimonios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="min-h-screen pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6">
      <Header
        title="What Our Clients Say?"
        subtitle="Real stories from people who have experienced our specialized
        transportation service for seniors."
      />

      <div className="w-full flex items-center justify-end container mx-auto -mb-5 px-4 sm:px-6">
        <Button onClick={openModal} className="text-sm sm:text-base">Comentar</Button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-0">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold">Leave a Comment</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Comment
                  </label>
                  <textarea
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-end gap-2">
                  <Button onClick={closeModal} className="bg-gray-200 w-full sm:w-auto">
                    Cancel
                  </Button>
                  <Button type="submit" className="w-full sm:w-auto">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Testimonials />
      <Ask />
    </div>
  );
};

export default Testimonios;
