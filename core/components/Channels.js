import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from '@mui/material/Link';
import { styled, alpha } from '@mui/material/styles';
import { border, borderRight } from '@mui/system';

const ChannellList = styled('div')(({ theme }) => ({
  padding: '0 20px',
  width: '250px',
}));

const ChannelTitle = styled('div')(({ theme }) => ({
  paddingLeft: '18px',
  fontWeight: 'bold',
  marginBottom: '15px'
}));

const ChannelCard = styled('div')(({ theme }) => ({
  background: '#fff',
  borderRadius: '0.25rem',
  boxShadow: '0 1px 3px rgb(0 0 0 / 5%), 0 20px 25px -5px rgb(0 0 0 / 5%), 0 10px 10px -5px rgb(0 0 0 / 4%)',
  maxWidth: '28rem',
  margin: '0 auto'
}));

const Channels = ({ list }) => {
  const Channel = ({ ch }) => {
    return <ListItem sx={{ p: 0 }}>
      <ListItemButton
        component="a"
        href={`/chat/${ch.name}`}
        sx={{ p: 0 }} >
        <ListItemText
          sx={{
            p: 0,
            m: 0,
            borderLeft: 3,
            borderColor: 'transparent',
            padding: '0.5rem 1rem',
            fontSize: '14px',
            fontWeight: 500
          }}>
          # {ch.name}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  }

  return (
    <>
      <ChannellList>
        <ChannelCard>
          <div style={{ padding: '24px 0', width: '100%' }}>
            <ChannelTitle>
              Channels
            </ChannelTitle>
            <div style={{
              display: 'block',
              height: 'calc(100vh - 200px)',
              overflowY: 'auto',
              marginBottom: '10px',
              fontSize: 'small',
              paddingTop: 0
            }}>
              {list.map(item => <Channel key={item.id} ch={item} />)}
            </div>
            <Link
              href="#!"
              underline="none"
              style={{
                paddingLeft: '27px',
                opacity: '0.7',
                fontSize: 'small',
                color: 'black'
              }}
              target='_blank'
            >
              {'Powered by Linen'}
            </Link>
          </div>
        </ChannelCard>
      </ChannellList>
    </>
  )
}

export default Channels;
