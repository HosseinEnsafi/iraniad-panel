import {
  CHANGE_THEME,
  RESIZE_SCREEN,
  TOGGLE_MODAL,
  TOGGLE_SIDEBAR,
} from "./UITypes";

const toggleModal = () => {
  return {
    type: TOGGLE_MODAL,
  };
};

const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR,
  };
};


const resizeScreen = (screenSize) => {
  return {
    type: RESIZE_SCREEN,
    payload: screenSize,
  };
};

const changeTheme = (theme) => {
  return {
    type: CHANGE_THEME,
    payload: theme,
  };
};

export { toggleModal, toggleSidebar, resizeScreen, changeTheme };
