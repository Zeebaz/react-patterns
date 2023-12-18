/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFeaturesFlags } from "../../hooks";
import { Box, Typography } from "@mui/material";
import { IInfo } from "../../api/fakeApi";

interface renderFunc {
  render?: ({ features }: { features: IInfo }) => JSX.Element;
}

export const RenderFlag = ({ render }: renderFunc) => {
  const { features } = useFeaturesFlags();
  return (
    <Box border={1} padding={2} display={"grid"} sx={{ placeItems: "center" }} minWidth={'250px'}>
      <Typography variant="h2" component="h2" marginTop={3} fontWeight={"bold"}>
        Simple Flag
      </Typography>
      {JSON.stringify(features, null, 2)}

      {render && render({ features })}

      {!render && (
        <>
          <Typography
            component={"h3"}
            marginTop={2}
            fontWeight={"bold"}
            fontSize={20}
          >
            Flag A
          </Typography>
          <Typography component="p">
            Flag {features.infoA ? "true" : "false"}
          </Typography>
          <Typography
            component={"h3"}
            marginTop={2}
            fontWeight={"bold"}
            fontSize={20}
          >
            Flag B
          </Typography>
          <Typography component="p">
            Flag {features.infoB ? "true" : "false"}
          </Typography>
        </>
      )}
    </Box>
  );
};
