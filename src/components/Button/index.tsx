import React, { ComponentProps, FC, memo } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

export enum ButtonType {
  PRIMARY,
  SECONDARY
}

export enum ButtonSize {
  SMALL,
  MIDDLE,
  LARGE
}

interface ButtonPropsInterface extends ComponentProps<"button"> {
  children: React.ReactNode;
  typeButton?: ButtonType;
  sizeButton?: ButtonSize;
}

const Button: FC<ButtonPropsInterface> = ({
  children,
  typeButton,
  sizeButton,
  className,
  ...otherProps
}) => {
  const buttonClassName = cn(
    styles.Button,
    {
      [styles["Button_primary"]]: typeButton === ButtonType.PRIMARY,
      [styles["Button_secondary"]]: typeButton === ButtonType.SECONDARY,
      [styles["Button_large"]]: sizeButton === ButtonSize.LARGE,
      [styles["Button_middle"]]: sizeButton === ButtonSize.MIDDLE,
      [styles["Button_small"]]: sizeButton === ButtonSize.SMALL
    },
    className
  );

  return (
    <button {...otherProps} className={buttonClassName}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  typeButton: ButtonType.PRIMARY,
  sizeButton: ButtonSize.SMALL
};

export default memo(Button);
