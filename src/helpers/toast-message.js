import { toast } from "react-toastify";

function useToastMessage() {
  const showError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const showSuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  const showInfo = ({ message, notAutoClose, position }) => {
    toast.info(message, {
      position: position || "bottom-right",
      autoClose: notAutoClose ? false : 3000,
      hideProgressBar: false,
      closeOnClick: notAutoClose ? false : true,
      pauseOnHover: true,
    });
  };

  return { showError, showSuccess, showInfo };
}

export default useToastMessage;
