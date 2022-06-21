import { Fragment, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { UIContext } from "../../../context/UIState/UIProvider";
import Backdrop from "../Backdrop";
import LoginContent from "./LoginContent";
import RegisterContent from "./RegisterContent";

const ModalOverlay = (props) => {
  return (
    <div className=" fixed left-[2%] top-[15vh] z-30 w-[96%] rounded-md bg-white p-2 md:left-[calc(50%-16rem)]   md:w-[32rem]">
      <div className={props.className}>{props.children}</div>
      {/* top-[10vh] left-[5%] z-30 w-[90%] rounded-md bg-gray-50 p-4  dark:bg-neutral-800 md:left-[calc(50%-16rem)] md:w-[32rem] */}
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const LoginModal = (props) => {
  const { openLogin, setOpenLogin } = useContext(UIContext);

  const [success, setSuccess] = useState(false);
  const [curSlide, setCurSlide] = useState(0);
  const [maxSlides, setMaxSlides] = useState([
    "LoginContent",
    "RegisterContent",
  ]);
  const goToSlideHandler = (slide) => {
    setCurSlide(slide);
  };
  const loginHandler = (username, userpassword) => {};

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={() => setOpenLogin(false)} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className="relative overflow-hidden">
          {success ? (
            <p>
              Succes
              {/* <p>{data.data.firstName}</p> 
               <p>{data.data.lastName}</p>  */}
            </p>
          ) : (
            <>
              <LoginContent
                active={curSlide === 0}
                onLoginHandler={loginHandler}
                onGoToSlide={goToSlideHandler}
              />
              <RegisterContent
                active={curSlide === 1}
                onGoToSlide={goToSlideHandler}
              />
            </>
          )}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default LoginModal;
