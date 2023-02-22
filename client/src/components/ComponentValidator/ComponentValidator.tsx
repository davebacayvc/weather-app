import React from "react";

/**
 * A standard component where there's a condition if showing null.
 * So instead of putting the condition in the code file itself,
 * I created a component where it can be reusable for some cases.
 */
type ComponentValidatorProps = {
  children: React.ReactNode;
  showNull: boolean;
};
const ComponentValidator: React.FC<ComponentValidatorProps> = (props) => {
  if (props.showNull) {
    return <React.Fragment />;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default ComponentValidator;
