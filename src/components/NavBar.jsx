import  { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NoteContext from "../context/notes/NoteContext";
import AlertContext from "../context/alerts/AlertContext"

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(true);
  const context = useContext(NoteContext)
  const {clearNotes} = context
  
  const context1 = useContext(AlertContext)
  const {showAlert} = context1
  const [modalOpen, setModalOpen] = useState(false)





  const navigate = useNavigate()

  const handdleHam = () => {
    setMobileNav(!mobileNav);
  };

  // useEffect(() => {
  //   if (!mobileNav) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  // }, [mobileNav]);

  let location = useLocation()

  // useEffect(()=>{
  //   console.log(location.pathname)
  // },[location])



 
  const handleLogout = () => {
    clearNotes(); // Clear the notes data in the context
    localStorage.removeItem("token");
    navigate("/login");
    showAlert("Logout Successfull", "Success")
    modalClose()
  };

  const modalPop =()=>{
    setModalOpen(true)
  }

  const modalClose =()=>{
    setModalOpen(false)
  }


  return (
    <>
{/* MODAL FOR CONFORMATION OF LOGOUT */}
<div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        modalOpen ? '' : 'hidden'
      }`}
    >
       <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
      <div className="bg-white rounded shadow-lg  p-4 max-w-sm w-full z-10">
        <h3 className="text-xl mb-4">Logout Confirmation</h3>
        <p className="mb-6">Are you sure you want to logout?</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 text-white bg-purple-900 hover:bg-purple-600 rounded mr-2"
            onClick={handleLogout}

          >
            Logout
          </button>
          <button
            className="px-4 py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded"
            onClick={modalClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

      {/* FOR BIIGER DEVICES */}
      <nav className=" fixed top-0 w-full flex justify-between h-15 mx-w-[1240px] mx-auto px-4 bg-purple-900 text-white py-3 text-lg  z-10 ">
        <h1 className="w-full text-3xl font-bold text-[#ffffff] ">iNote</h1>
        <div className="nav-list flex justify-center items-center">
          <ul className="hidden md:flex justify-center px-4 mr-16 gap-[4vw] uppercase">
            <Link
              className={`${
                location.pathname === "/" ? "text-orange-400" : ""
              } `}
              to="/"
            >
              <li className={" hover:underline underline-offset-8"}>Home</li>
            </Link>
            <Link
              className={`${
                location.pathname === "/about" ? "text-orange-400" : ""
              }`}
              to="/about"
            >
              <li className="hover:underline underline-offset-8">About</li>
            </Link>
            <Link
              className={`${
                location.pathname === "/contact" ? "text-orange-400" : ""
              }`}
              to="/contact"
            >
              <li className="hover:underline underline-offset-8">Contact</li>
            </Link>
          </ul>

          {/* TOGGLE BETWEEN LOGIN SIGNUP AND LOGOUT */}
          {!localStorage.getItem("token") ? (
            <div className="auth-btn flex">
              <Link className="" to="/login">
                <button className="bg-white hover:bg-black text-black hover:text-white mx-1 py-1 px-4 rounded">
                  Login
                </button>
              </Link>
              <Link className="" to="/signup">
                <button className="bg-white hover:bg-black text-black hover:text-white mx-1 py-1 px-4 rounded">
                  SignUp
                </button>
              </Link>
            </div>
          ) : (
            <button
              onClick={modalPop}
              className="bg-white hover:bg-black text-black hover:text-white mx-1 py-1 px-4 rounded "
               
            >
              Logout
             
            </button>
          )}
        </div>





        {/* FOR MOBILE */}

        <div onClick={handdleHam} className=" flex  items-center md:hidden">
          {!mobileNav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        <div
          className={
            !mobileNav
              ? "nav-list fixed left-0 top-[60px] w-[60%] h-full z-0 border-r border-r-purple-900 bg-purple-200  ease-linear duration-300 md:hidden"
              : "fixed left-[-100%]"
          }
        >
          <ul className="  text-black uppercase text-center ">
            <Link
              className={`${
                location.pathname === "/" ? "text-orange-400" : ""
              }`}
              to="/"
            >
              <li className="p-4  hover:underline underline-offset-8">Home</li>
            </Link>
            <Link
              className={`${
                location.pathname === "/about" ? "text-orange-400" : ""
              }`}
              to="/about"
            >
              <li className="p-4 hover:underline underline-offset-8 ">About</li>
            </Link>
            <Link
              className={`${
                location.pathname === "/contact" ? "text-orange-400" : ""
              }`}
              to="/contact"
            >
              <li className="p-4  hover:underline underline-offset-8">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
