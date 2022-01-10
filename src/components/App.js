import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { ChakraProvider } from "@chakra-ui/react";
import RegisterCoursePage from "./RegisterCoursePage";
import ListOfStudentInCoursePage from "./ListOfStudentInCoursePage";
import Main from "./Main.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//abi
import RegistrationAbi from "../abis/Registration.json";

//context
import { ContractContext } from "../context/contractContext";

function App() {
  const [ethereumAccount, setEthereumAccount] = useState("");
  const [contract, setContract] = useState(null);

  const initializeWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      alert("Browser doesn't have ethereum");
    }
  };

  const fetchAccount = async () => {
    const accounts = await window.web3.eth.getAccounts();
    if (accounts) {
      setEthereumAccount(accounts[0]);
    } else {
      console.log("unable to detect ethereum account");
    }
  };

  const initializeContract = async () => {
    const networkId = await window.web3.eth.net.getId();
    const networkData = await RegistrationAbi.networks[networkId];
    if (networkData) {
      const contractAddress = networkData.address;
      const contract = await new window.web3.eth.Contract(
        RegistrationAbi.abi,
        contractAddress
      );
      setContract(contract);
    }
  };

  useEffect(() => {
    initializeWeb3();
    fetchAccount();
    initializeContract();
  }, []);

  return (
    <ContractContext.Provider value={[contract]}>
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route index path="/" element={<Main />} />
            <Route
              path="/register_page"
              element={
                <RegisterCoursePage
                  // contract={contract}
                  account={ethereumAccount}
                />
              }
            />
            <Route
              path="/list_of_students"
              element={
                <ListOfStudentInCoursePage
                  // contract={contract}
                  account={ethereumAccount}
                />
              }
            />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </ContractContext.Provider>
  );
}

export default App;
