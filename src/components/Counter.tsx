import React, { useState, } from "react";
import SmartAccount from "@biconomy/smart-account";
import abi from "../utils/counterAbi.json";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  smartAccount: SmartAccount;
  provider: any;
}

const Counter: React.FC<Props> = ({ smartAccount, provider }) => {
    // console.log("provider", provider);
    // console.log("smartAccount", smartAccount);
  const [count, setCount] = useState<number>(0);
  const [counterContract, setCounterContract] = useState<any>(null);

  const counterAddress = "0x4066416332168D6143DA8A5923AA2eAac404b857";

  const getCount = async (isUpdating: boolean) => {
    const contract = new ethers.Contract(counterAddress, abi, provider);
    setCounterContract(contract);
    // console.log("contract",counterContract);
    const currentCount = await contract.count();
    setCount(currentCount.toNumber());
    if (isUpdating) {
      toast.success("count has been updated!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const incrementCount = async () => {
    //   getCount(true);
    try {
      toast.info("processing count on the blockchain!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      const incrementTx =
        await counterContract.populateTransaction.incrementCount();
        console.log("the incrementTx",incrementTx);

      const tx1 = {
        to: counterAddress,
        data: incrementTx.data,
      };
      console.log("the tx1",tx1);
      const txResponse = await smartAccount.sendTransaction({
        transaction: tx1,
      });

      const txHash = await txResponse.wait();
      console.log(txHash);
      getCount(true);
    } catch (error) {
      console.log({ error });
      toast.error("error occured check the console", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <button onClick={() => incrementCount()}>count is {count}</button>
    </>
  );
};

export default Counter;
