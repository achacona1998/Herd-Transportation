import { useEffect } from "react";

const FormStatus = ({ status }) => {
  useEffect(() => {
    if (status.type) {
      const timer = setTimeout(
        () => status.setStatus?.({ type: "", message: "" }),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [status]);

  if (!status.type) return null;

  if (status.type === "success")
    return (
      <div className="p-3 mt-4 text-green-400 rounded-lg bg-green-500/20">
        ✅ {status.message || "¡Mensaje enviado correctamente!"}
      </div>
    );

  if (status.type === "error")
    return (
      <div className="p-3 mt-4 text-red-400 rounded-lg bg-red-500/20">
        ❌{" "}
        {status.message ||
          "Error al enviar el mensaje. Por favor pruebe otra vez."}
      </div>
    );

  return null;
};

export default FormStatus;
