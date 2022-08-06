import { Typography } from '@mui/material';
import Dialog from './Dialog';

const Conversation = () => {
  const data = [{
    id: 1, user: { id: 1, name: 'User 1' }, date: '2021-10-12'
  }, {
    id: 2, user: { id: 2, name: 'User 2' }, date: '2021-10-13'
  }]

  return (
    <>
      <Typography variant='subtitle2' color="text.secondary" sx={{ mt: 3, mb: 2 }}>
        This is the beginning of #xyz
      </Typography>

      {data.map(item => <Dialog detail={item} key={item.id} />)}
    </>
  )
}

export default Conversation;
