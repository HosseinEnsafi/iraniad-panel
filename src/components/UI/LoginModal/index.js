import { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeLogin } from "../../../redux";
import Backdrop from "../Backdrop";
import LoginContent from "./LoginContent";
import RegisterContent from "./RegisterContent";

const ModalOverlay = (props) => {
  return (
    <div className=" fixed left-[2%] top-[15vh] z-30 w-[96%] animate-scaleUp  rounded-md bg-white p-2  pb-4 dark:bg-gray-600 sm:left-[calc(50%-16rem)]   sm:w-[32rem]">
      <div className={props.className}>{props.children}</div>
    </div>
  );
};

const LoginModal = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [curSlide, setCurSlide] = useState(0);
  const goToSlideHandler = (slide) => {
    setCurSlide(slide);
  };

  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {createPortal(
        <Backdrop onClose={() => dispatch(closeLogin())} />,
        portalElement
      )}
      {createPortal(
        <ModalOverlay className="overflow relative dark:text-gray-100 ">
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
