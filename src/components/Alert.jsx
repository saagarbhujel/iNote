import React, { useContext } from "react";
import  AlertContext  from "../context/alerts/AlertContext";

const Alert = () => {
  const { alert, showAlert } = useContext(AlertContext);

  if (!alert) {
    return null; // If no alert is set, don't render anything
  }

  return (
    <div className="fixed top-[56px] w-full bg-blue-700 text-gray-800 py-2 px-4 shadow-md">
      {alert.msg}
    </div>
  );
};

export default Alert;
