import { generateFontAwesomeIconClassname } from "@client/utils/generateFontAwesomeIcon";
import { useMemo } from "react";

const useFontAwesomeIconClass = iconClass => {
  const className = useMemo(
    () => generateFontAwesomeIconClassname(iconClass),
    [iconClass]
  );

  return { className };
};

export default useFontAwesomeIconClass;
