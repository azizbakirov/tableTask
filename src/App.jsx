import { Button, Center, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "./Components/Product/Products";
import { GetBranch } from "./services/product.service";
import "./app.css";

function App() {
  // Data state
  const [saveData, setSaveData] = useState(null);

  // Button state
  const [btnClicked, setBtnClicked] = useState("");

  // Loader spinner
  const [loader, setLoader] = useState(false);

  const updateSate = () => {
    setLoader(true);
    GetBranch()
      .then((data) => {
        setSaveData(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(setLoader(false));
  };

  useEffect(() => {
    updateSate();
  }, []);

  return (
    <Center>
      <Flex flexDirection={"column"} alignContent="center">
        {btnClicked === "Product" && (
          <Products updateSate={updateSate} loader={loader} data={saveData} />
        )}
        {btnClicked ? (
          ""
        ) : (
          <>
            <Button mb={"25px"} onClick={() => setBtnClicked("Product")}>
              Product
            </Button>
            <Button mb={"25px"}>About</Button>
            <Button mb={"25px"}>Info</Button>
          </>
        )}
      </Flex>
    </Center>
  );
}

export default App;
