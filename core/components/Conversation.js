import { Typography } from "@mui/material";
import Dialog from "./Dialog";
import { useRouter } from "next/router";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const Conversation = ({ messages, users }) => {
  // const data = [{
  //   id: 1, user: { id: 1, name: 'User 1' }, date: '2021-10-12'
  // }, {
  //   id: 2, user: { id: 2, name: 'User 2' }, date: '2021-10-13'
  // }]

  // const detail = { ...messages, ...users };
  // console.log(detail);
  return (
    <>
      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{ mt: 3, mb: 2 }}
      >
        This is the beginning of the #{" "}
        {typeof window !== "undefined" && (
          <span>{window.location.pathname.split("chat/")[1]}</span>
        )}{" "}
        channel
      </Typography>

      {messages.map((item) => (
        <Dialog key={item.id} msgDetail={item} users={users} />
      ))}

      {/* <iframe width="550" height="240" frameBorder="0"
        src="https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_640_3MG.mp4">
      </iframe>

      <iframe width="550" height="240" frameBorder="0"
        src="/assets/videos/sample.mp4">
      </iframe> */}
    </>
  );
};

export default Conversation;
