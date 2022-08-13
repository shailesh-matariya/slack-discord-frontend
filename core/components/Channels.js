import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "@mui/material/Link";
import { styled, alpha } from "@mui/material/styles";
import { border, borderRight } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const MenuTitle = styled("div")(({ theme }) => ({
  padding: "20px 0 0",
  backgroundColor: "grey",
  "&:focus": {
    border: "none",
    boxShadow: "none",
  },
}));

const ChannellList = styled("div")(({ theme }) => ({
  padding: "0 20px",
  [theme.breakpoints.up("md")]: {
    width: "250px",
  },
}));

const ChannelTitle = styled("div")(({ theme }) => ({
  paddingLeft: "18px",
  fontWeight: "bold",
  marginBottom: "15px",
}));

const ChannelCard = styled("div")(({ theme }) => ({
  background: "#fff",
  [theme.breakpoints.up("md")]: {
    maxWidth: "28rem",
    boxShadow:
      "0 1px 3px rgb(0 0 0 / 5%), 0 20px 25px -5px rgb(0 0 0 / 5%), 0 10px 10px -5px rgb(0 0 0 / 4%)",
    borderRadius: "0.25rem",
  },
  margin: "0 auto",
}));

const ChannelWrapper = styled("div")(({ theme }) => ({
  height: "calc(100vh - 200px)",
  overflowY: "auto",
  marginBottom: "10px",
  fontSize: "small",
  paddingTop: 0,
  // [theme.breakpoints.up("md")]: {
  //   display: "block",
  // },
  // // [theme.breakpoints.up("xs")]: {
  // //   display: "none",
  // // },
}));

const Channel = ({ ch }) => {
  return (
    <ListItem sx={{ p: 0 }}>
      <ListItemButton component="a" href={`/chat/${ch.name}`} sx={{ p: 0 }}>
        <ListItemText
          sx={{
            p: 0,
            m: 0,
            borderLeft: 3,
            borderColor: "transparent",
            padding: "0.5rem 1rem",
            fontSize: "14px",
            fontWeight: 500,
            "&:active": {
              borderColor: "#0f5091",
              color: "#0f5091",
            },
          }}
        >
          # {ch.name}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

const Channels = ({ list }) => {
  const [channel, setChannel] = useState("");

  const handleChange = (event) => {
    setChannel(event.target.value);
  };
  return (
    <>
      <ChannellList sx={{ display: "block" }}>
        <ChannelCard>
          <div
            style={{
              padding: "24px 0",
              width: "100%",
            }}
            sx={{ paddingBottom: { xs: 3, md: 0 } }}
          >
            <ChannelTitle>Channels</ChannelTitle>
            <FormControl
              style={{ width: "100%", outline: "none", padding: "0 18px" }}
              sx={{ display: { md: "none" } }}
            >
              <Select
                value={channel}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                {list.map((item) => (
                  // <Channel key={item.id} ch={item} />
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </FormControl>

            <ChannelWrapper sx={{ display: { xs: "none", md: "block" } }}>
              {list.map((item) => (
                <Channel key={item.id} ch={item} />
              ))}
            </ChannelWrapper>

            <Link
              href="#!"
              underline="none"
              style={{
                paddingLeft: "27px",
                opacity: "0.7",
                fontSize: "small",
                color: "black",
              }}
              sx={{ display: { xs: "none", md: "block" } }}
              target="_blank"
            >
              {"Powered by Linen"}
            </Link>
          </div>
        </ChannelCard>
      </ChannellList>
    </>
  );
};

export default Channels;
