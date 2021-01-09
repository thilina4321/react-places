import axios from "axios";
export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const LOGOUT = "LOGOUT";

const authStart = () => {
  return {
    type: AUTH_START,
  };
};

const authSuccess = (token, userId) => {
  return {
    type: AUTH_SUCCESS,
    token,
    userId,
  };
};

const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error,
  };
};

export const auth = (login, data) => {
  return async (dispatch) => {
    dispatch(authStart());

    let url = login
      ? "http://localhost:3001/user/login"
      : "http://localhost:3001/user/signup";

    let authData;

    try {
      authData = await axios.post(url, {
        email: data.email,
        password: data.password,
        userName: data.userName,
      });

      const { token, user } = authData.data;
      const expireTime = new Date(new Date().getTime() + 3600000);
      console.log(authData);
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user._id);
      localStorage.setItem("expiresIn", expireTime);

      dispatch(authSuccess(token, user._id));
    } catch (error) {
      dispatch(authFail(error.message));
    }
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiresIn");
  localStorage.removeItem("userId");
  return {
    type: LOGOUT,
  };
};

export const authState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token && !userId) {
      dispatch(logout());
    }

    const expiresIn = localStorage.getItem("expiresIn");

    const expireTime = new Date(expiresIn).getTime();
    const currentTime = new Date().getTime();

    if (expireTime < currentTime) {
      dispatch(logout());
    }

    dispatch(authSuccess(token, userId));
  };
};
