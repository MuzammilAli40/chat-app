import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
   const [user, setuser] = useState();

   const history = useHistory();

   useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      setuser(userInfo.data)

      if (!userInfo) {
         history.push('/')
      }
   }, [history])

   return (
      <ChatContext.Provider value={{ user, setuser }}>
         {children}
      </ChatContext.Provider>
   )
}

export const ChatState = () => {
   return useContext(ChatContext)
}

export default ChatProvider