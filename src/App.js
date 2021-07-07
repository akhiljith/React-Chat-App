import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/LoginForm"

function App() {

  if (!localStorage.getItem('username')) {
    return <LoginForm />
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="4671b462-5257-4b4b-ba7c-b4710d5b586c"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
