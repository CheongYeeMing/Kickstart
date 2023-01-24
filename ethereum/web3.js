import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  console.log("You are on the browser and Metamask is running");
  async function requestAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
      } catch (error) {
        console.log(error);
      }
    }
  }

  requestAccount();

  web3 = new Web3(window.ethereum);
} else {
  console.log("You are on the server OR the user is not running Metamask");
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/469dc3779a3b4000813394f0314e85cd"
  );
  web3 = new Web3(provider);
}

export default web3;
