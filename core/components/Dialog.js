import { Card } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Link from '@mui/material/Link';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const UserWrapper = styled('div')(({ theme }) => ({

}));

const ExpandMore = styled((props) => {
  return <IconButton {...props} sx={{ fontSize: 6 }} />;
})(() => ({
  transform: 'rotate(45deg)',
  marginLeft: 'auto'
}));

const UserName = ({ name }) => {
  return <span style={{ fontWeight: 'bold', color: '#000' }}>
    {name}
  </span>
}

const Dialog = ({ detail }) => {
  return (
    <>
      <Card sx={{ boxShadow: 'none', borderTop: '1px solid rgb(229, 231, 235)', maxWidth: 700 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500], mt: 0, width: 32, height: 32 }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <Typography color="text.secondary">
              3 months ago
            </Typography>
          }
          title={
            <UserName name={detail.user.name}></UserName>
          }
          sx={{ alignItems: 'flex-start', pb: 0 }}
        />
        <CardContent sx={{ p: 0, ml: 8 }}>
          <Typography variant="subtitle1" color="text.secondary">
            <UserName name="@satish" /> has joined a channel.
            This impressive paella is a perfect party dish and a fun meal to cook.
          </Typography>
        </CardContent>
        <CardActions sx={{ ml: 8 }}>
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/assets/images/avatar1.jpg" sx={{ width: 32, height: 32 }} />
            <Avatar alt="Travis Howard" src="/assets/images/avatar2.jpg" sx={{ width: 32, height: 32 }} />
            <Avatar sx={{ width: 32, height: 32 }}>+1</Avatar>
          </AvatarGroup>
          <Link href="#" underline="none" sx={{ fontSize: 'small', ml: 1 }}>
            {'2 replies'}
          </Link>
          <ExpandMore
            aria-label="show more"
          >
            <AttachFileOutlinedIcon color="text.primary" sx={{ fontSize: 20 }} />
          </ExpandMore>
        </CardActions>
      </Card>
    </>
  )
}

export default Dialog;
