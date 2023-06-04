import React, { useState } from 'react'
import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Tooltip } from "@chakra-ui/react"
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { ChatState } from '../../context/ChatProvider';
import ProfileModel from './ProfileModel';

const SideDrawer = () => {

   const [search, setSearch] = useState("");
   const [searchResult, setSearchResult] = useState([]);
   const [loading, setLoading] = useState(false);
   const [loadingChat, setloadingChat] = useState()

   const { user } = ChatState();


   return (
      <>
         <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={"white"}
            w={"100%"}
            p={"5px 10px 5px 10px"}
            borderWidth={"5px"}
         >
            <Tooltip label="Search Users" hasArrow placement='bottom-end'>

               <Button variant={"ghost"}>
                  <i class="fas fa-search"></i>
                  <Text display={{ base: "none", md: "flex" }} px={4}>
                     Search User
                  </Text>
               </Button>
            </Tooltip>

            <Text fontSize={"2xl"} fontFamily={"Work sans"}>
               Talk-a-Tive
            </Text>

            <div>
               <Menu>
                  <MenuButton p={1}>
                     <BellIcon fontSize={"2xl"} margin={1} />
                  </MenuButton>
                  {/* <MenuList></MenuList> */}
               </Menu>

               <Menu>
                  <MenuButton
                     as={Button}
                     rightIcon={<ChevronDownIcon />}
                  >
                     <Avatar size={"sm"} cursor={"pointer"} name={user.name} src={user.pic} />
                  </MenuButton>
                  <MenuList>
                     <ProfileModel user={user}>
                        <MenuItem>
                           My Profile
                        </MenuItem>
                     </ProfileModel>
                     <MenuDivider />
                     <MenuItem>Logout</MenuItem>
                  </MenuList>
               </Menu>
            </div>
         </Box >
      </>
   )
}

export default SideDrawer