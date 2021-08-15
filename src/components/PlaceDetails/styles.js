import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  chip: {
    margin: "5px 5px 5px 0",
  },
  subtitle: {
    display: "flex",
    fontWeight: "900",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "40px",
  },
  spacing: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  placeName: {
    fontWeight: "500",
    textTransform: "capitalize",
  },
}));
