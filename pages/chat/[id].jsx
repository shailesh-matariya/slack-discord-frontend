import React from "react";
import { useRouter } from "next/router";
import Chat from "../../routes/chat";

const ChatPage = () => {
  const router = useRouter();

  if (!router.isReady) return <></>;

  return (
    <>
      <Chat id={id} />
    </>
  );
};

export default ChatPage;
