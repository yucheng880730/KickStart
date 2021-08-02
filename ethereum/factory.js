import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3197FD6f0eE1928fcdBBe31b466e2553c38C0567'
);

export default instance;