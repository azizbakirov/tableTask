import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { AddBranch } from "../../services/product.service";

function ModalInput({ isOpen, setIsOpen, updateSate }) {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [fromTime, setFromTime] = useState();
  const [toTime, setToTime] = useState();

  const handleSave = () => {
    AddBranch({
      name: name,
      address: address,
      fromtime: fromTime,
      totime: toTime,
    }).then(updateSate);
  };

  return (
    <>
      <Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="From Time"
                onChange={(e) => setFromTime(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="To Time"
                onChange={(e) => setToTime(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSave} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={() => setIsOpen("")}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalInput;
