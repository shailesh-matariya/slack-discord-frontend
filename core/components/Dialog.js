import { Card } from '@mui/material';

const Dialog = ({ detail }) => {
  return (
    <Card style={{ padding: 10, margin: 10 }}>
      <p>Individual dialog representing each message</p>
      {JSON.stringify(detail)}
    </Card>
  )
}

export default Dialog;
