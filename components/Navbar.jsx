"use client";

import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../artifacts/contracts/Revisit.sol/GovernmentLogin.json";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");

  const connectWallet = async () => {
    const contractAddress = "0x46436dcb1b29b111a00bb61f5475b420ef1104eb";
    const contractABI = abi.abi;
    try {
      const { ethereum } = window;

      if (ethereum) {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setAccount(account);
        setState({ provider, signer, contract });
      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          ALTEYE
        </h2>
        <div className="flex flex-col items-center justify-center">
          <button onClick={connectWallet}>
            <img
              src="/metamask.svg"
              alt="metamask"
              className="w-[24px] h-[24px] object-contain "
            />
          </button>
            <p>Connected</p>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
