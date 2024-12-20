Moralis.initialize("sH702kyAPAKQArlSEHcgCNRW5pwB2yh6tLYKYDu8");
Moralis.serverURL = "https://9ehsoxpcryno.usemoralis.com:2053/server";
const contAdd = "0x93B7978377ddC014972c1FA3b2FD94AAf00521b7";

async function mint(){
    //Moralis.authenticate({
    //    signingMessage: "Seals and Eels Mint Authorization Request",
    //  });
    //Web3 User Account 
    let web3 = await Moralis.Web3.enable();
    let account = await web3.eth.getAccounts();

    //Mint Inputs
    let address = account[0];
    let amount = 1;

    //Contract Deploy
    const contract = new web3.eth.Contract(abi, contAdd);
    //contract.methods.mint(amount).send({from: address, value: 20000000000000000}); // mint compliance on contract so no need to try to manipulate this people
    contract.methods.mint(amount).send({from: address, value: 0}); // mint compliance on contract so no need to try to manipulate this people
}
