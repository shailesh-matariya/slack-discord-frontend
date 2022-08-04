import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';

const Channels = ({ list }) => {
  const Channel = ({ ch }) => {
    return <ListItem>
      <ListItemButton component="a" href={`/chat/${ch.id}`}>
        <ListItemText># { ch.name }</ListItemText>
      </ListItemButton>
    </ListItem>
  }

  return (
    <>
      <p>Channels</p>

      <List>
        { list.map(item => <Channel key={item.id} ch={item} />) }
      </List>
    </>
  )
}

export default Channels;
