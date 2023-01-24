import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x4477CAEe53b65eb7c2F23736Ae25EdB06c382157"
);

export default instance;
