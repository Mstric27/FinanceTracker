import { auth } from "../public/js/firebase";

export const getLoggedInUserId = function (req) {
  
  return auth.currentUser?.uid

};
