import store from "../redux/store";
import { openLogin, logoutUser } from "../redux";
class ErrorHandler {
  setError(error) {
    this.error = error;
    return this;
  }

  handle() {
    switch (this.error.status) {
      case 401:
        this.logoutActions();
        break;
      case 403:
        break;
      case 404:
        break;
      case 500:
        break;
      default:
        break;
    }
  }

  logoutActions() {
    // let site = store.getState().site.site;
    // if (!site.loginModal) store.dispatch(loginModalToggle());
    // store.dispatch(logout());
    // localStorage.removeItem("user");
    store.dispatch(logoutUser());
    store.dispatch(openLogin());
    localStorage.removeItem("user");
  }
}

export default ErrorHandler;
