import { FC } from "react";
import { ErrorProps } from "../../../types/stateType/statesType";
import { Typography } from "@mui/material";

const Error: FC<ErrorProps> = ({ message }) => {
  return (
    <Typography m="0.5rem 0 0 0" color="error" paragraph>
      {message}
    </Typography>
  );
};

export default Error;
