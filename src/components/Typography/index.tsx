import React, { FC, memo } from "react";

import { Typography as TypographyMaterial } from "@material-ui/core";
import { TypographyProps } from "@material-ui/core/Typography/Typography";

interface TypographyPropsInterface extends TypographyProps {}

const Typography: FC<TypographyPropsInterface> = (props) => {
  return (
    <TypographyMaterial color="primary" variant="h3" {...props}>
      {props.children}
    </TypographyMaterial>
  );
};

export default memo(Typography);
