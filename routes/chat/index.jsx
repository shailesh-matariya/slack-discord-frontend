import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Channels from "../../core/components/Channels";
import Conversation from "../../core/components/Conversation";
import { styled, alpha } from "@mui/material/styles";
import { httpClient } from "../../core/utils/Api";
import { useEffect, useState } from "react";
import Head from 'next/head';

const msgList = [
  {
    id: 1,
    account_channel_id: 1,
    message: "<@U03SMDS1SUA> has joined the channel",
    type: "message",
    userId: "U03SMDS1SUA",
    ts: "1660025371.233229",
    created_at: "2022-08-09T06:22:52.000000Z",
    updated_at: "2022-08-09T06:22:52.000000Z",
  },
  {
    id: 2,
    account_channel_id: 1,
    message: "",
    type: "message",
    userId: "U03S6SH5W0L",
    ts: "1659774599.659049",
    created_at: "2022-08-09T06:22:52.000000Z",
    updated_at: "2022-08-09T06:22:52.000000Z",
  },
  {
    id: 3,
    account_channel_id: 1,
    message: ":thumbsup:",
    type: "message",
    userId: "U03S6SH5W0L",
    ts: "1659774575.293679",
    created_at: "2022-08-09T06:22:52.000000Z",
    updated_at: "2022-08-09T06:22:52.000000Z",
  },
  {
    id: 4,
    account_channel_id: 1,
    message:
      "<https://www.linen.dev/s/cloudcraftsmen/t/2210094/please-join-the-discord-server-https-discord-gg-y77c2ac5>",
    type: "message",
    userId: "U03RXQWKQG6",
    ts: "1659774454.508469",
    created_at: "2022-08-09T06:22:52.000000Z",
    updated_at: "2022-08-09T06:22:52.000000Z",
  },
  {
    id: 5,
    account_channel_id: 1,
    message: "Please join the discord server: <https://discord.gg/Y77C2Ac5>",
    type: "message",
    userId: "U03RXQWKQG6",
    ts: "1659772585.913149",
    created_at: "2022-08-09T06:22:52.000000Z",
    updated_at: "2022-08-09T06:22:52.000000Z",
  },
  {
    id: 6,
    account_channel_id: 1,
    message: "<@U03RPSESW1M> has joined the channel",
    type: "message",
    userId: "U03RPSESW1M",
    ts: "1659587744.806419",
    created_at: "2022-08-09T06:22:52.000000Z",
    updated_at: "2022-08-09T06:22:52.000000Z",
  },
  {
    id: 7,
    account_channel_id: 1,
    message: "<@U03SU5F76GG> has joined the channel",
    type: "message",
    userId: "U03SU5F76GG",
    ts: "1659556446.724389",
    created_at: "2022-08-09T06:22:52.000000Z",
    updated_at: "2022-08-09T06:22:52.000000Z",
  },
  {
    id: 8,
    account_channel_id: 1,
    message: "<@U03S14T36QN> has joined the channel",
    type: "message",
    userId: "U03S14T36QN",
    ts: "1659550765.962289",
    created_at: "2022-08-09T06:22:52.000000Z",
    updated_at: "2022-08-09T06:22:52.000000Z",
  },
  {
    id: 9,
    account_channel_id: 1,
    message: "<@U03RXR8DYGN> has joined the channel",
    type: "message",
    userId: "U03RXR8DYGN",
    ts: "1659516471.604799",
    created_at: "2022-08-09T06:22:52.000000Z",
    updated_at: "2022-08-09T06:22:52.000000Z",
  },
  {
    id: 10,
    account_channel_id: 1,
    message: "<@U03S6SH5W0L> has joined the channel",
    type: "message",
    userId: "U03S6SH5W0L",
    ts: "1659514634.642449",
    created_at: "2022-08-09T06:22:52.000000Z",
    updated_at: "2022-08-09T06:22:52.000000Z",
  },
  {
    id: 11,
    account_channel_id: 1,
    message: "<@U03RPTCQCA3> has joined the channel",
    type: "message",
    userId: "U03RPTCQCA3",
    ts: "1659514622.295259",
    created_at: "2022-08-09T06:22:52.000000Z",
    updated_at: "2022-08-09T06:22:52.000000Z",
  },
  {
    id: 12,
    account_channel_id: 1,
    message: "<@U03RXQWKQG6> has joined the channel",
    type: "message",
    userId: "U03RXQWKQG6",
    ts: "1659513813.577699",
    created_at: "2022-08-09T06:22:52.000000Z",
    updated_at: "2022-08-09T06:22:52.000000Z",
  },
];

const Chat = ({ id }) => {
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedChannel, setSelectedChannel] = useState();
  var ch;

  const getChannels = () => {
    httpClient
      .get(`/slack-channels?platform=slack&team_id=T03SH2Y8PJM`)
      .then(({ data }) => {
        const channels = data.channel_collection;
        setChannels(channels);
        if (!id) {
          ch = channels[0];
        } else {
          ch = channels.find(ch => ch.channelId === id || ch.name === id);
        }

        setSelectedChannel(ch);
        getMassages(ch.id);
      });
  };

  const getMassages = (chId) => {
    httpClient
    .get(`/channel-messages?platform=slack&team_id=T03SH2Y8PJM&channel_id=${chId}`)
    .then((resp) => setMessages(resp.data.message_collection.data));
    // setMessages(msgList);
  };

  const getUsers = () => {
    httpClient
      .get(`/slack-users?platform=slack&team_id=T03SH2Y8PJM`)
      .then((resp) => setUsers(resp.data.user_collection));
  };

  useEffect(() => {
    getChannels();
    getUsers();
  }, []);

  const ConversationWrapper = styled("div")(({ theme }) => ({
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  }));

  return (
    <>
      <Head>
        <title>Satish</title>
        {/* <title>{selectedChannel?.name}</title>
        <meta property="og:title" content={selectedChannel?.name} key="title" /> */}
      </Head>
      <Grid container>
        <Grid
          item
          md={2}
          xs={12}
          sx={{ display: { lg: "flex", xs: "hidden" }, display: "block" }}
        >
          <Channels list={channels} />
        </Grid>

        <Grid item md={10} xs={12} sx={{ display: "inset" }}>
          <Container>
            <ConversationWrapper>
              <Conversation channel={selectedChannel} messages={messages} users={users} />
            </ConversationWrapper>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Chat;
