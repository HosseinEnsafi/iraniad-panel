import { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeLogin } from "../../../redux";
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
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [curSlide, setCurSlide] = useState(0);
  const goToSlideHandler = (slide) => {
    setCurSlide(slide);
  };

  return (
    <Fragment>
      {createPortal(
        <Backdrop onClick={() => dispatch(closeLogin())} />,
        portalElement
      )}
      {createPortal(
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
