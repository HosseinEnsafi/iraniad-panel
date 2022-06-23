import { Fragment, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { UIContext } from "../../../context/UIState/UIProvider";
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
  const [curSlide, setCurSlide] = useState(0);
  const [success, setSuccess] = useState(false);
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
          {success ? (
            <p>
              با موفقیت وارد شدید
              {/* <p>{data.data.firstName}</p> 
               <p>{data.data.lastName}</p>  */}
            </p>
          ) : (
            <>
              <LoginContent
                active={curSlide === 0}
                onGoToSlide={goToSlideHandler}
                onSuccessHandler={setSuccess}
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
