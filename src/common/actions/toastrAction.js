import { ToastrActionConstants } from "../actionConstants";

/** Action method for show Toastr */
export const showToastr = toasterObj => ({
  payload: toasterObj,
  type: ToastrActionConstants.SHOW_TOASTR
});
/** Action method for close Toastr */
export const closeToastr = () => ({
  type: ToastrActionConstants.CLOSE_TOASTR
});
