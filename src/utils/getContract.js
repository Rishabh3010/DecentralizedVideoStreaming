import ContractAbi from "../artifacts/contracts/OurTube.sol/OurTube.json";
import { ethers } from "ethers";

export default function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let contract = new ethers.Contract(
    "0xa37F05a028807eF2E5de0b4c600C8c090A5FcA2e",
    ContractAbi.abi,
    signer
  );
  console.log(contract);
  return contract;
}
