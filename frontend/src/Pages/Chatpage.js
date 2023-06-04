import React from 'react'
import { ChatState } from '../context/ChatProvider';
import { Box } from '@chakra-ui/react';
import SideDrawer from '../components/Miscellaneous/SideDrawer';
import ChatBox from '../components/ChatBox';
import MyChats from '../components/MyChats';

export const Chatpage = () => {

   const { user } = ChatState()
   console.log(user);

   return (
      <div style={{ width: "100%" }}>
         {user && <SideDrawer />}
         <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            height="91.5vh"
            padding="10px"

         >
            {user && <MyChats />}
            {user && <ChatBox />}
         </Box>
      </div >
   )
}
