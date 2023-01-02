export const getParagraphProps = (content, textProps) => {
  if (typeof content === "string") return { ariaLabel: content, ...textProps };
  return textProps;
};
