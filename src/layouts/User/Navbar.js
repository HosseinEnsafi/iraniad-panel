import React, { useContext, useEffect, useState } from "react";
import { BiUser, BiMoon, BiSun, BiGridAlt } from "../../assets/icons";
import { UIContext } from "../../context/UIState/UIContext";
import LoginModal from "../../components/UI/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";
import { openLogin } from "../../redux";
import { Link } from "react-router-dom";
function Navbar() {
  const { userTheme, setUserTheme, setActiveMenu } = useContext(UIContext);

  const { user } = useSelector((state) => state.auth);
  const { isLoginOpen } = useSelector((state) => state.ui);
  const [initialLoad, setInitialLoad] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }

    localStorage.setItem("userTheme", userTheme);
  }, [userTheme]);

  return (
    <header className="fixed top-0 left-0 z-20 flex h-[50px] w-full items-center justify-between bg-white p-2 shadow-md dark:bg-gray-700 md:z-10 md:pl-12">
      <div className=" flex items-center gap-3">
        <button
          onClick={() => setActiveMenu((prevState) => !prevState)}
          className="hoverAnimation h-10 w-10"
        >
          <BiGridAlt className="h-full w-full" />
        </button>
        <Link to="/">لوگو شرکت</Link>
      </div>
      <div className="flex items-center gap-1">
        <button
          className="hoverAnimation flex h-10 w-10 items-center justify-center text-gray-500"
          onClick={() => {
            setUserTheme(userTheme === "Dark" ? "Light" : "Dark");
          }}
        >
          {userTheme === "Dark" && <BiMoon className="h-full w-full" />}
          {userTheme === "Light" && <BiSun className="h-full w-full" />}
        </button>

        {!user ? (
          <div className="hoverAnimation flex h-10 w-10 items-center text-gray-500">
            <BiUser
              onClick={() => dispatch(openLogin())}
              className="h-full w-full"
            />
          </div>
        ) : (
          <UserProfile />
        )}
      </div>

      {isLoginOpen && <LoginModal />}
    </header>
  );
}

export default Navbar;
