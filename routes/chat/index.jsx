import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Channels from '../../core/components/Channels';
import Conversation from '../../core/components/Conversation';

const Chat = () => {
  const channels = [{
    id: 1, name: 'Channel 1'
  }, {
    id: 2, name: 'Channel 2'
  }, {
    id: 3, name: 'Channel 3'
  }, {
    id: 4, name: 'Channel 4'
  }, {
    id: 5, name: 'Channel 5'
  }, {
    id: 6, name: 'Channel 6'
  }];

  return (
    <Grid container>
      <Grid item xs={2}>
        <Channels list={channels} />
      </Grid>

      <Grid item xs={10}>
        <Container>
          <Conversation />
        </Container>
      </Grid>
    </Grid>
  );
}

export default Chat;
