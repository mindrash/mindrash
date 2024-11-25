const openViewer = async () => {
    let tokenID = document.getElementById('tokenID').value;
    if (isNaN(tokenID) || tokenID < 1 || tokenID > 997){
        return false;
    }

    const response = await fetch('https://ipfs.io/ipfs/bafybeiejyqzb725zgpjnosmnwfk32d36ktu5bsqtuv6pb7nrkcaqmyqnmi/' + tokenID + '.json');
    const json = await response.json();
    let tokenHash = json["token_hash"];
    let url = "https://fuckthefloorprice.xyz/art/index.html?hash=" + tokenHash
    window.open(url, '_blank');
  }