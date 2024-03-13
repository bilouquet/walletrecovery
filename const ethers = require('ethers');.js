const ethers = require('ethers');

const mnemonic = 'hawk funny rude gate honey leave jealous equip jewel mutual result blossom';
const hdwallet = ethers.utils.HDNode.fromMnemonic(mnemonic);
const derivePath = "m/44'/60'/0'/0/";

async function deriveAccounts(targetAddresses) {
    for (let i = 0; i < targetAddresses.length; i++) {
        const path = derivePath + i;
        const wallet = hdwallet.derivePath(path).getWallet();
        const address = '0x' + wallet.getAddress().toString('hex');
        console.log("Adresse dérivée:", address);

        try {
            const provider = new ethers.providers.JsonRpcProvider('https://distinguished-prettiest-bush.bsc.quiknode.pro/6153a7f2821e488f5a6565c160460c2727727898/');
            const balance = await provider.getBalance(address);
            console.log("Solde:", ethers.utils.formatEther(balance));

            if (targetAddresses.includes(address.toLowerCase())) {
                console.log("Adresse spécifique trouvée:", address);
                console.log("Clé privée:", wallet.privateKey);
                const content = `${address}\n${ethers.utils.formatEther(balance)}\n${wallet.privateKey}\n`;
                fs.appendFile('address.txt', content, err => {
                    if (err) {
                        console.error(err);
                    }
                });
            }
        } catch (error) {
            console.error("Erreur lors de la récupération du solde:", error);
        }
    }
}

// Utilisation de la fonction
const targetAddresses = [
    '0xf977814e90da44bfa03b6295a0616a897441acec', 
    '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 
    // Ajoutez d'autres adresses cibles ici
];

deriveAccounts(targetAddresses);