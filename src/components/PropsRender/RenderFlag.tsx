/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFeaturesFlags } from "../../hooks";
import { Box, CircularProgress, Typography } from "@mui/material";
import { IInfo } from "../../api/fakeApi";

interface renderFunc {
  render?: ({
    features,
    isLoading,
  }: {
    features: IInfo;
    isLoading: boolean;
  }) => JSX.Element;
}

export const RenderFlag = ({ render }: renderFunc) => {
  const { features, isLoading } = useFeaturesFlags();
  return (
    <Box
      border={1}
      padding={2}
      display={"grid"}
      sx={{ placeItems: "center" }}
      minWidth={"250px"}
    >
      <Typography variant="h2" component="h2" marginTop={3} fontWeight={"bold"}>
        Simple Flag
      </Typography>
      {JSON.stringify(features, null, 2)}

      {render && render({ features, isLoading })}

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
          {isLoading ? (
            <CircularProgress size={15} sx={{ marginTop: 1 }} />
          ) : (
            <Typography component="p">
              Flag {features.infoA ? "true" : "false"}
            </Typography>
          )}

          <Typography
            component={"h3"}
            marginTop={2}
            fontWeight={"bold"}
            fontSize={20}
          >
            Flag B
          </Typography>
          {isLoading ? (
            <CircularProgress size={15} sx={{ marginTop: 1 }} />
          ) : (
            <Typography component="p">
              Flag {features.infoB ? "true" : "false"}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};
