import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ErrorBountryProps {
  children: ReactNode;
}

const ErrorBountry: React.FC<ErrorBountryProps> = ({ children }) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const errorHandler = (errorEvent: ErrorEvent) => {
      console.log(errorEvent.error);
      setHasError(true);
    };
    window.addEventListener("error", errorHandler);
    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  const goBack = () => {
    navigate(-1);
    window.location.reload();
  };

  if (hasError) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded p-8 shadow-lg"
        >
          <h1 className="text-4xl font-bold text-blue-950 mb-4">
            Oops! Something went wrong.
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            We're sorry, but something unexpected happened. Please try again
            later.
          </p>
          <button
            className="bg-blue-950 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={goBack}
          >
            Go back
          </button>
        </motion.div>
      </div>
    );
  }
  return children;
};

export default ErrorBountry;
