import { useDispatch, useSelector } from "react-redux";
import { LayoutSelector } from "../../store/Slices/UI/Layout/layoutSelector";
import { setLayoutKey } from "../../store/Slices/UI/Layout/LayoutSlice";

export const useHeading = () => {
  const dispatch = useDispatch();
  const { heading, subheading, admin } = useSelector(LayoutSelector);

  const setHeading = (value) => {
    dispatch(setLayoutKey({ key: "heading", value }));
  };

  const setSubheading = (value) => {
    dispatch(setLayoutKey({ key: "subheading", value }));
  };

  const setAdmin = () => {
    const value= !admin;
    dispatch(setLayoutKey({ key: "admin", value }));
  };

  return { heading, subheading, admin, setHeading, setSubheading, setAdmin };
};