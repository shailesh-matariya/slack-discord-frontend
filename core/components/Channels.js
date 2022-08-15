import {
  FormControl,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
} from "@mui/material";
import Link from "@mui/material/Link";
import { styled, alpha } from "@mui/material/styles";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white),
  },
  width: "100%",
  color: "lightgray",
  marginTop: "20px",
  padding: "0 25px",
  // },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#9ca6b4",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    border: "1px solid lightgrey",
    borderRadius: "4px",
  },
}));

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
  [theme.breakpoints.up("md")]: {
    paddingLeft: "18px",
  },
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
  const [state, setstate] = useState();
  const handleChange = (event) => {
    setChannel(event.target.value);
  };
  return (
    <>
      <Search sx={{ display: { md: "none", xs: "inline-block" } }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search messages"
          inputProps={{ "aria-label": "search" }}
          sx={{ color: "#090707", fontSize: "medium", width: "100%" }}
        />
      </Search>

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
              style={{
                width: "100%",
                outline: "none",
                margin: "0 0",
                backgroundColor: "lightgrey",
              }}
              sx={{ display: { md: "none" } }}
            >
              <Select
                value="{channel}"
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
