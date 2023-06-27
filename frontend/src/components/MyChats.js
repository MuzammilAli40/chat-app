import React, { useEffect, useState } from 'react'
import { ChatState } from '../context/ChatProvider';
import axios from 'axios';
import { Box, Button, useToast, Stack, Text } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ChatLoading from './ChatLoading';
import { getSender } from '../config/ChatLogics';

const MyChats = () => {

   const [loggedUser, setLoggedUser] = useState()
   const { user, setuser, SelectedChat, setSelectedChat, chats, setchats } = ChatState();

   const toast = useToast();


   const fetchChats = async () => {
      try {
         const config = {
            headers: {
               Authorization: `Bearer ${user.token}`,
            }
         };

         const { data } = await axios.get("/api/chat", config);
         setchats(data);
      } catch (error) {
         toast({
            title: "Error Occurred!",
            description: error.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
         });
      }
   }

   useEffect(() => {
      setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
      fetchChats()
   }, [])

   return (
      <Box
         d={{ base: SelectedChat ? "none" : "flex", md: "flex" }}
         flexDir={"column"}
         alignItems={"center"}
         p={3}
         bg={"white"}
         w={{ base: "100%", md: "31%" }}
         borderRadius={"lg"}
         borderWidth={"1px"}
      >
         <Box
            pb={3}
            px={3}
            fontSize={{ base: "24px", md: "26px" }}
            fontFamily={"Work sans"}
            display={"flex"}
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
         >
            MY CHATS
            <Button
               d="flex"
               fontSize={{ base: "14px", md: "8px", lg: "14px" }}
               rightIcon={<AddIcon />}
            >
               New Group Chat
            </Button>
         </Box>

         <Box
            display={"flex"}
            flexDir={"column"}
            p={3}
            bg={"#F8F8F8"}
            w={"100%"}
            h={"100%"}
            borderRadius={"lg"}
            overflowY={"hidden"}
         >
            {chats ? (
               <Stack overflowY="scroll">
                  {chats.map((chat) => (
                     <Box
                        onClick={() => setSelectedChat(chat)}
                        cursor="pointer"
                        bg={SelectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                        color={SelectedChat === chat ? "white" : "black"}
                        px={3}
                        py={2}
                        borderRadius={"lg"}
                        key={chat._id}
                     >
                        <Text>
                           {!chat.isGroupChat ? (getSender(loggedUser, chat.users)) : (chat.users.name)}
                        </Text>
                     </Box>
                  ))}
               </Stack>
            ) : (
               <ChatLoading />
            )}
         </Box>

      </Box >
   )
}

export default MyChats;