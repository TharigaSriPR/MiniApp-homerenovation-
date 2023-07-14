import { ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed.js';
import LoginForm from './components/LoginForm.js';
import './Chat.css';

const projectID = 'bcacc32e-15ad-4b3a-9615-9e039562945e';

const Chat = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => < ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default Chat;
