import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, Input, Spinner } from "@chakra-ui/react";
import Table from "rc-table";
import React, { useState } from "react";
import { formatBranchData } from "../../helpers/formatBranchData";
import { DeleteBranch } from "../../services/product.service";
import ModalInput from "../Modals/ModalInput";
import Modals from "../Modals/Modals";

function Products({ data, loader, updateSate }) {
  // Edit modals
  const [editModal, setEditModals] = useState();
    const [openModal, setOpenModal] = useState(false);

 
  const handleDelete = (id) => {
    DeleteBranch(id).then(updateSate)
  }



  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "one",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "two",
    },

    {
      title: "Address",
      dataIndex: "address",
      key: "three",
    },
    {
      title: "FromTime",
      dataIndex: "fromTime",
      key: "four",
    },
    {
      title: "ToTime",
      dataIndex: "toTime",
      key: "five",
    },
    {
      title: "Edit",
      dataIndex: "edit",
      key: "six",
      render: (children, props) => {
        return (
          <Button onClick={() => setEditModals(props.id)}>
            <EditIcon />
          </Button>
        );
      },
    },
    {
      title: "Delete",
      dataIndex: "delete",
      key: "five",
      render: (children, props) => {
        return (
          <Button onClick={() => handleDelete(props.id)}>
            <DeleteIcon />
          </Button>
        );
      },
    },
  ];

  return (
    <Center>
      {loader ? (
        <Spinner />
      ) : (
        <>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="green.500"
            position="fixed"
            top="90%"
            onClick={() => setOpenModal(true)}
          >
            Add task
          </Button>
          <ModalInput
            updateSate={updateSate}
            isOpen={openModal}
            setIsOpen={setOpenModal}
          />
          <Table columns={columns} data={formatBranchData(data)} />
        </>
      )}
      {editModal ? (
        <Modals
          updateSate={updateSate}
          editModal={editModal}
          setEditModals={setEditModals}
        />
      ) : (
        ""
      )}
    </Center>
  );
}

export default Products;
