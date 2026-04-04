import { useDispatch, useSelector } from "react-redux";
import { LayoutSelector } from "../../store/Slices/UI/Layout/layoutSelector";
import { setLayoutKey } from "../../store/Slices/UI/Layout/LayoutSlice";

export const useHeading = () => {
  const dispatch = useDispatch();
  const { heading, subheading } = useSelector(LayoutSelector);

  const setHeading = (value) => {
    dispatch(setLayoutKey({ key: "heading", value }));
  };

  const setSubheading = (value) => {
    dispatch(setLayoutKey({ key: "subheading", value }));
  };

  return { heading, subheading, setHeading, setSubheading };
};