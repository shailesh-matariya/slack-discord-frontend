import { Card } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Link from "@mui/material/Link";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import Emoji, { toArray } from "react-emoji-render";
import moment from "moment";

const ExpandMore = styled((props) => {
  return <IconButton {...props} sx={{ fontSize: 6 }} />;
})(() => ({
  transform: "rotate(45deg)",
  marginLeft: "auto",
}));

const Dialog = ({ msgDetail, users }) => {
  const usersMap = {};
  users.forEach((user) => {
    usersMap[user.userId] = user;
  });

  const user = usersMap[msgDetail.userId];
  const msg = msgDetail.message;
  const message = msg.replace(/<@(.*?)>/g, function replacer(match, p1) {
    return `<strong>@${usersMap[p1]?.username}</strong>`;
  });

  const parseEmojis = (value) => {
    const emojisArray = toArray(value);

    // toArray outputs React elements for emojis and strings for other
    const newValue = emojisArray.reduce((previous, current) => {
      if (typeof current === "string") {
        return previous + current;
      }
      return previous + current.props.children;
    }, "");

    return newValue;
  };

  return (
    <>
      <div key={msgDetail.id} sx={{ width: { xs: "100%", md: 700 } }}>
        <Link href="#" sx={{ textDecoration: "none", mb: 4 }}>
          <Card
            sx={{
              boxShadow: "none",
              borderTop: "1px solid rgb(229, 231, 235)",
              maxWidth: { md: 700 },
              minWidth: 700,
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: red[500], mt: 0, width: 32, height: 32 }}
                  src={user?.profile}
                  aria-label="Profile"
                />
              }
              action={
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: 400, color: "#999999" }}
                >
                  {moment(msgDetail?.ts * 1000).fromNow()}
                </Typography>
              }
              title={
                <Typography
                  variant="captipn"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 500,
                  }}
                >
                  {user?.username}
                </Typography>
              }
              sx={{ alignItems: "flex-start", pb: 0 }}
            />

            <CardContent sx={{ p: 0, ml: 8, pr: 1 }}>
              <Box
                sx={{
                  color: "text.primary",
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: parseEmojis(message) }}
                ></div>
              </Box>
            </CardContent>
            {/* <CardActions sx={{ ml: 7 }}>
              <AvatarGroup max={4}>
                <Avatar
                  alt="Remy Sharp"
                  src="/assets/images/avatar1.jpg"
                  sx={{ width: 32, height: 32 }}
                />
                <Avatar
                  alt="Travis Howard"
                  src="/assets/images/avatar2.jpg"
                  sx={{ width: 32, height: 32 }}
                />
                <Avatar sx={{ width: 32, height: 32 }}>+1</Avatar>
              </AvatarGroup>
              <Link href="#" underline="none" sx={{ fontSize: "small", ml: 2 }}>
                {"2 replies"}
              </Link>
              <ExpandMore aria-label="show more" sx={{ p: 0 }}>
                <AttachFileOutlinedIcon color="primary" fontSize="small" />
              </ExpandMore>
            </CardActions> */}
          </Card>
        </Link>
      </div>
    </>
  );
};

export default Dialog;
