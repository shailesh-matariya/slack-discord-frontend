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

const ExpandMore = styled((props) => {
  return <IconButton {...props} sx={{ fontSize: 6 }} />;
})(() => ({
  transform: "rotate(45deg)",
  marginLeft: "auto",
}));

const UserName = ({ name }) => {
  return <span style={{ fontWeight: "bold", color: "#000" }}>{name}</span>;
};

const Dialog = ({ msgDetail, users }) => {
  const [user] = users.filter((user) => user.userId === msgDetail.userId);
  return (
    <>
      <div key={msgDetail.id}>
        <Link href="#" sx={{ textDecoration: "none", mb: 4 }}>
          <Card
            sx={{
              boxShadow: "none",
              borderTop: "1px solid rgb(229, 231, 235)",
              maxWidth: 700,
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
                <Typography variant="subtitle2" color="text.secondary" sx={{}}>
                  3 months ago
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
                {user?.username}
                {msgDetail?.message.split(">")[1]}
                <br></br>
                {msgDetail?.message}
              </Box>
            </CardContent>
            <CardActions sx={{ ml: 7 }}>
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
            </CardActions>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default Dialog;
