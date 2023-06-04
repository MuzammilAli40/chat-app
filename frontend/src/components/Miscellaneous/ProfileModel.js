import React from 'react'
import { IconButton, useDisclosure, Button, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalContent, ModalBody, ModalFooter } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons';

const ProfileModel = ({ user, children }) => {

   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <>
         {
            children ? (
               <span onClick={onOpen}>{children}</span>
            ) : (
               <IconButton display={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
            )}

         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>{user.name}</ModalHeader>
               <ModalCloseButton />
               <ModalBody>

               </ModalBody>

               <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                     Close
                  </Button>
                  <Button variant='ghost'>Secondary Action</Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </>
   )
}

export default ProfileModel