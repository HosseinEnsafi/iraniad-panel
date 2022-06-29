import {
  CHANGE_THEME,
  RESIZE_SCREEN,
  TOGGLE_MODAL,
  TOGGLE_SIDEBAR,
} from "./UI/UITypes";

const initialState = {
  openModal: false,
  openSidebar: false,
  screenSize: null,
  theme: "Light",
};

const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        openModal: !state.openModal,
      };

    case TOGGLE_SIDEBAR:
      return {
        ...state,
        openSidebar: !state.openSidebar,
      };

    case RESIZE_SCREEN:
      return {
        ...state,
        screenSize: action.payload,
      };

    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default UIReducer;
