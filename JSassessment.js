/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let nftCount = 0;
const nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, sex, cloth, exp, eye_color) {
    const nftMetadata = {
        "name": name,
        "gender": sex,
        "clothing": cloth,
        "expression": exp,
        "eyes": eye_color,
    };

    nfts.push(nftMetadata)
    nftCount++;

    console.log("NFT Minted: ", name, "\n");
    
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("metadata for the NFTs minted:");
    for(let i = 0; i < nfts.length; i++) {
        console.log(nfts[i]);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Amount of NFT minted: ", nftCount);
}

// call your functions below this line

mintNFT("Faceless", "male", "yellow suit", "happy", "blue");
mintNFT("degods", "female", "black suit", "angry", "grey");

listNFTs()
getTotalSupply()
