import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Channels from '../../core/components/Channels';
import Conversation from '../../core/components/Conversation';
import { styled, alpha } from '@mui/material/styles';

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
  }, {
    id: 7, name: 'Channel 1'
  }, {
    id: 8, name: 'Channel 2'
  }, {
    id: 9, name: 'Channel 3'
  }, {
    id: 10, name: 'Channel 4'
  }, {
    id: 11, name: 'Channel 5'
  }, {
    id: 12, name: 'Channel 6'
  }, {
    id: 13, name: 'Channel 1'
  }, {
    id: 14, name: 'Channel 2'
  }, {
    id: 15, name: 'Channel 3'
  }, {
    id: 16, name: 'Channel 4'
  }, {
    id: 17, name: 'Channel 5'
  }, {
    id: 18, name: 'Channel 6'
  },
  , {
    id: 19, name: 'Channel 1'
  }, {
    id: 20, name: 'Channel 2'
  }, {
    id: 21, name: 'Channel 3'
  }, {
    id: 22, name: 'Channel 4'
  }, {
    id: 23, name: 'Channel 5'
  }, {
    id: 24, name: 'Channel 6'
  },
  ];

  const ConversationWrapper = styled('div')(({ theme }) => ({
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  }));

  return (
    <Grid container>
      <Grid item xs={2} sx={{ display: { lg: 'flex', xs: 'hidden' } }}>
        <Channels list={channels} />
      </Grid>

      <Grid item xs={10}>
        <Container>
          <ConversationWrapper>
            <Conversation />
          </ConversationWrapper>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Chat;
