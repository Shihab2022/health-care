/* eslint-disable @typescript-eslint/no-unused-vars */
export function setToken(userToken: string) {
  try {
    localStorage.setItem("token", userToken);
  } catch (error) {
    return null;
  }
}

export function getToken() {
  try {
    const tokenString = localStorage.getItem("token");
    return tokenString;
  } catch (error) {
    return "";
  }
}
