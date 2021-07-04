import React, { memo } from "react";

import { Container as MaterialContainer, makeStyles } from "@material-ui/core";
import { ContainerProps } from "@material-ui/core/Container/Container";

interface ContainerPropsInterface extends ContainerProps {}

const useStyle = makeStyles({
  root: {
    padding: "25px"
  }
});

const Container: React.FC<ContainerPropsInterface> = (props) => {
  const classes = useStyle();

  return (
    <MaterialContainer className={classes.root} maxWidth="sm">
      {props.children}
    </MaterialContainer>
  );
};

export default memo(Container);
