import React, { useContext } from "react";
import  AlertContext  from "../context/alerts/AlertContext";

const Alert = () => {
  const { alert, showAlert } = useContext(AlertContext);

  if (!alert) {
    return null; // If no alert is set, don't render anything
  }

  const { type, msg } = alert;


  return (
    <>
      {type === "Success" ? (
        <div className="fixed top-[56px] w-full bg-blue-700 text-white py-2 px-4 shadow-md">
          {type}:{msg}
        </div>
      ) : (
        <div className="fixed top-[56px] w-full bg-red text-gray-800 py-2 px-4 shadow-md">
          {type}:{msg}
        </div>
        )}

    </>
  );
};

export default Alert;
