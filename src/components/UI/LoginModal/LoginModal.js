import { Fragment, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { UIContext } from "../../../context/UIState/UIContext";
import Backdrop from "../Backdrop";
import LoginContent from "./LoginContent";
import RegisterContent from "./RegisterContent";

const ModalOverlay = (props) => {
  return (
    <div className=" fixed left-[2%] top-[15vh] z-30 w-[96%] animate-scaleUp rounded-md bg-white p-2 sm:left-[calc(50%-16rem)]   sm:w-[32rem]">
      <div className={props.className}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const LoginModal = (props) => {
  const { setOpenLogin } = useContext(UIContext);
  const { user } = useSelector((state) => state.auth);
  const [curSlide, setCurSlide] = useState(0);
  const goToSlideHandler = (slide) => {
    setCurSlide(slide);
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={() => setOpenLogin(false)} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className="relative overflow-hidden">
          {user ? (
            <>
              <p>با موفقیت وارد شدید</p>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
            </>
          ) : (
            <>
              <LoginContent
                active={curSlide === 0}
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
