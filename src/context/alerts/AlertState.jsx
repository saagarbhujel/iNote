
import { useState, } from "react";
import AlertContext from "./AlertContext";
import PropTypes from "prop-types";

const AlertState = (props) => {

    const [alert, setAlert] = useState(null)

    const showAlert = (message, type)=>{
        setAlert({
            msg:message,
            type:type
        });

         setTimeout(() => {
           setAlert(null);
         }, 1500);
    }
  return (
    <>
    <AlertContext.Provider value={{alert,showAlert}} >
        {props.children}
    </AlertContext.Provider>
    </>
  )
}
AlertState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AlertState