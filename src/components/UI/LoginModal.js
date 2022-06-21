import { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../UI/Backdrop";

const ModalOverlay = (props) => {
  return (
    <div className=" fixed top-[10vh] left-[5%] z-30 w-[90%] rounded-md bg-gray-50 p-4  dark:bg-neutral-800 md:left-[calc(50%-16rem)] md:w-[32rem]">
      <div className={props.className}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const LoginModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default LoginModal;
