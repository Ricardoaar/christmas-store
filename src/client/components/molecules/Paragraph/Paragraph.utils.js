export const getParagraphProps = (content, textProps) => {
  if (typeof content === "string")
    return { "aria-label": content, ...textProps };
  return textProps;
};
