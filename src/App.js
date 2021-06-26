import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from "./components/ChatFeed"

function App() {
  return (
     <ChatEngine 
     height="100vh"
     projectID="4671b462-5257-4b4b-ba7c-b4710d5b586c"
     userName="jack"
     userSecret="123"
     renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
     />
  );
}

export default App;
