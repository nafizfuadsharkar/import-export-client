import { useEffect } from "react";

const DynamicTitle = ({ title }) => {
  useEffect(() => {
    document.title = title; // set the page title
  }, [title]); // runs whenever the title prop changes

  return null; // no need to render anything
};

export default DynamicTitle;
