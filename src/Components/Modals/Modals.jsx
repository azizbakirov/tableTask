import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetByID, UpdateBranch } from "../../services/product.service";

function Modals({ setEditModals, editModal, updateSate }) {
  // Data state
  const [dataSave, setDataSave] = useState();
  const [nameValue, setNameValue] = useState();
  const [addressValue, setAddressValue] = useState();
  const [fromTimeValue, setFromTimeValue] = useState();
  const [toTimeValue, setToTimeValue] = useState();

  console.log(dataSave);

  useEffect(() => {
    GetByID(editModal)
      .then((data) => setDataSave(data.data))
      .catch((err) => {
        console.log(err);
      })
      .finally();
  }, [editModal]);

  const handleSaveData = () => {
    UpdateBranch(editModal, {
      name: nameValue,
      address: addressValue,
      fromtime: fromTimeValue,
      totime: toTimeValue,
    }).then(updateSate);

    setEditModals("");
  };

  return (
    <>
      <Modal isOpen={editModal} onClose={() => setEditModals("")}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Name"
              defaultValue={dataSave?.name}
              size="sm"
              mb="10"
              onChange={(e) => setNameValue(e.target.value)}
            />
            <Input
              placeholder="Address"
              defaultValue={dataSave?.address}
              size="sm"
              mb="10"
              onChange={(e) => setAddressValue(e.target.value)}
            />
            <Input
              placeholder="From Time"
              defaultValue={dataSave?.fromtime}
              size="sm"
              mb="10"
              onChange={(e) => setFromTimeValue(e.target.value)}
            />
            <Input
              placeholder="From Time"
              defaultValue={dataSave?.totime}
              size="sm"
              mb="10"
              onChange={(e) => setToTimeValue(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => setEditModals("")} colorScheme="blue" mr={3}>
              Close
            </Button>
            <Button onClick={handleSaveData} variant="ghost">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modals;
