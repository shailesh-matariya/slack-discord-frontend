import { Card } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Link from '@mui/material/Link';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import { styled, alpha } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const UserWrapper = styled('div')(({ theme }) => ({

}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Dialog = ({ detail }) => {
  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500], mt: 2 }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <Typography variant='subtitle2' color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              3 months ago
            </Typography>
          }
          title={detail.user.name} sx={{ fontWeight: 'bold', py: 0 }}
        />
        <CardContent sx={{ p: 0, ml: 9 }}>
          <Typography variant="subtitle1" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
          </Typography>
        </CardContent>
        <CardActions sx={{ ml: 8 }}>
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/assets/images/avatar1.jpg" />
            <Avatar alt="Travis Howard" src="/assets/images/avatar2.jpg" />
            <Avatar>+1</Avatar>
          </AvatarGroup>
          <Link href="#" underline="none" sx={{ fontSize: 'small', ml: 2 }}>
            {'2 replies'}
          </Link>
          <ExpandMore
            aria-label="show more"
          >
            <AttachFileOutlinedIcon color="text.primary" />
          </ExpandMore>
        </CardActions>
      </Card>
    </>
  )
}

export default Dialog;
