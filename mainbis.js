const { ethers, utils } = require('ethers');
const fs = require('fs');

const provider = new ethers.providers.JsonRpcProvider('https://distinguished-prettiest-bush.bsc.quiknode.pro/6153a7f2821e488f5a6565c160460c2727727898/');
const mnemonic = 'hawk funny rude gate honey leave jealous equip jewel mutual result blossom';
const hdNode = utils.HDNode.fromMnemonic(mnemonic);

const derivationPath = "m/44'/60'/0'/0/"; // Chemin de dérivation standard pour les portefeuilles Ethereum

async function deriveAccounts(targetAddresses) {
    let i = 0;
    while (true) {
        let path = derivationPath + i;
        let wallet = hdNode.derivePath(path);
        let address = wallet.address;
        console.log("Adresse dérivée:", address);
        
        try {
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

        i++;
    }
}

// Utilisation de la fonction
const targetAddresses = [
    '0xf977814e90da44bfa03b6295a0616a897441acec', 
    '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', 
    '0x4b16c5de96eb2117bbe5fd171e4d203624b014aa', 
    '0x489a8756c18c0b8b24ec2a2b9ff3d4d447f79bec', 
    '0xa07c5b74c9b40447a954e1466938b865b6bbea36', 
    '0x8894e0a0c962cb723c1976a4421c95949be2d4e3',  
    '0x0966602e47f6a3ca5692529f1d54ecd1d9b09175', 
    '0x1e34a77868e19a6647b1f2f47b51ed72dede95dd', 
    '0x058a871358c1b01039a265635ea282c3f435a9ed', 
    '0x21d45650db732ce5df77685d6021d7d5d1da807f', 
    '0xcef8b76b76e22d40903590793accce3002908dc4', 
    '0xd183f2bbf8b28d9fec8367cb06fe72b88778c86b', 
    '0xfd6042df3d74ce9959922fec559d7995f3933c55', 
    '0x3b5a23f6207d87b423c6789d2625ea620423b32d', 
    '0x6a0b3611214d5001fa5efae91b7222a316c12b52', 
    '0xac2b6e125059746db1837a874d45b9d74d211caf', 
    '0x36236fa003ac2e5371e3264276f82d355180a102', 
    '0xf9570d56b233ca5ff0211ab20aad93b8b6370b3a', 
    '0x0ecc16d3fa38e1a59c10e44cda4e2e9d9941275a', 
    '0xfc1f4589fc8c4e357c80b8a65a9a0c36976aeb83', 
    '0x7153d2ef9f14a6b1bb2ed822745f65e58d836c3f', 
    '0x5616e2b8acff064bf902b8a93cbd5da2ca1edc7c', 
    '0x4f2f8448f857994ce83ef14cf4ebb7df0bb14667', 
    '0x6560ed767d6003d779f60bccd2d7b168cd4a1583', 
    '0xd6216fc19db775df9774a6e33526131da7d19a2c', 
    '0xf89d7b9c864f589bbf53a82105107622b35eaa40', 
    '0x3f08f17973ab4124c73200135e2b675ab2d263d9', 
    '0x0d0707963952f2fba59dd06f2b425ace40b492fe', 
    '0x94224758540ceb51650388a8861ff84881462a4c', 
    '0x371b4aeabf297e7946abe3be84a6e27a8174e37d', 
    '0xb8e6d31e7b212b2b7250ee9c26c56cebbfbe6b23', 
    '0xd3e9d15c83ad059119e5ca7eba4615f0986533fe', 
    '0x5770815b0c2a09a43c9e5aecb7e2f3886075b605', 
    '0xd5b849c6b2d20fe3861ea1c0a3c9cb23d3ea728b', 
    '0x1fbe2acee135d991592f167ac371f3dd893a508b', 
    '0xa180fe01b906a1be37be6c534a3300785b20d947', 
    '0x161ba15a5f335c9f06bb5bbb0a9ce14076fbb645', 
    '0x0cd6388f6768a4edf88d0e42aa42c87a5a43ae4e', 
    '0x350b73dd5b7c93a5f6ee735343b61b1d044a32ea', 
    '0xf983719ca77ded7e2cb7a6040b8b4c31db5cdcbf', 
    '0x6d624c20292e611d0e1d4dc48e8ca752b2bfeec6', 
    '0xb428523cdda53640a62e9f26c2d8613a9159b282', 
    '0x492dd21b8325379c64bcde5a9db4208938c2fb6a', 
    '0x3a67638883eff7856b286ccd373d36476c45407a', 
    '0x1eccd85c9e21f247fadb70f6cff94b14cb737d03', 
    '0xd8a184bbeb7098e45a7bdce1f88bfb5785cb22ba', 
    '0xa2ff973bf5a7c33ce4591226b03cf0afc5f16d37', 
    '0x427e2cb82551d247daa712ebecf5fac7f1d955ad', 
    '0x515b72ed8a97f42c568d6a143232775018f133c8', 
    '0x4dbd466fa5ab2f1cd1830742fe2bdf3da0c29771', 
    '0xeb20c7b5b86c0ae1f7b314892ec1e2e74fbaac5a', 
    '0x01c952174c24e1210d26961d456a77a39e1f0bb0', 
    '0xbd612a3f30dca67bf60a39fd0d35e39b7ab80774', 
    '0xe66baa0b612003af308d78f066bbdb9a5e00ff6c',
    '0x97255de8f7a2885ce3dcb4bebb8708ce28ec75d4', 
    '0x87b1acce6a1958e522233a737313c086551a5c76', 
    '0xe2e912f0b1b5961be7cb0d6dbb4a920ace06cd99', 
    '0xf47f0b89ac60456a054cd6a03f535d990c83b9ef', 
    '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8', 
    '0x006e2d523ec4ec1ad261fbbcd192659f0b35b975', 
    '0x430b19f04aa885afee205feef5dbf60429f1a9c2', 
    '0xf815ffa6c2ef93affb64bbc3f2d8b61f1b45d350', 
    '0x536d770b8c5e49fb3d4845afc2ad3aa752b01b62', 
    '0xe2fc31f816a9b94326492132018c3aecc4a93ae1', 
    '0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012', 
    '0xfa500178de024bf43cfa69b7e636a28ab68f2741', 
    '0x436f6186cd323abd8433bf1311389e561356b3b5', 
    '0xa6b6f509b205a199962585f094d53bd89be619fc', 
    '0x1514f411b9c7fcc763af4d97182b26e2df162552', 
    '0xe652a5404f5867ba5d9ece2b95f48b3a267f6d69', 
    '0x809817ed1b3d124067c43c79695c816285897673', 
    '0x083937d7b7e7620c63356fdf07bf50dcd8c61551', 
    '0x8660f250d912c528285747da47518a94e56899a6', 
    '0x73e47ed13c96bbfa3301565226f7650c171c65ae', 
    '0xda0f9efb79cca7321adf4bc56fbda57232ded986', 
    '0x91056475a96c5bf3ede4bba4d4b856c4210b70cd', 
    '0x9f04ebdecb2db3b063966dd268f9d28fdf02c6d6', 
    '0x3ed847c6657a30cdb2d75d64963653bb955549df', 
    '0x9a421241c98bbb8ae013e4a5f85e5067e3874d16', 
    '0x4fdb97ed75b9e7e30601e62f7be0694f31eac8dc', 
    '0x99fb6ce36c483d1538db14c58bbb1f967ae17bc7', 
    '0x84a81673851c6c024b825fe58afbb8a5ba0d927d', 
    '0x6c831c124f02ab3df986c640fb36cb70ebec0232', 
    '0xbd9ed5848af944ad0e7796101e50287ee3260426', 
    '0xafedf06777839d59eed3163cc3e0a5057b514399', 
    '0x3bdc69c4e5e13e52a65f5583c23efb9636b469d6', 
    '0xcbad44d01ae887bd0295aebf4bb0c28abfc14a17', 
    '0xfb90d21c9c40153a87058a98bc124529a0500537', 
    '0x15e3d8a0123c33af7d91372e960dccd6b5bb2999', 
    '0x8e352419a619e51b582399872dc41f9bbeb1f637', 
    '0x8408b4ff79195dd2c1b903204b3b41becc4bb486', 
    '0xe47e60f6b8b13c079e3c27e1f855a79e16ca8d54', 
    '0x54b2a8da081b7043f1884b38c0815afb4fba653c', 
    '0xd9083169f5e771ed7c17920c611da1e0a71a1505', 
    '0xf197c6f2ac14d25ee2789a73e4847732c7f16bc9', 
    '0xad1b2f27ffa8459f94f69e2a0084cae31c4ac930', 
    '0x67fad242e46bcae9c23c0ab59b7c55ae7fdff34e', 
    '0x86523c87c8ec98c7539e2c58cd813ee9d1a08d96', 
    '0xaf25663da625032c2f486a28b6d55b8cd22b74cc', 
    '0xb909543fe81a472d5bc9af8f66b896aa3159141e', 
    '0xeb794a13dcc8710f6578070e884a20c1dde4b28d', 
    '0x92982bccb608936be803fad34c03414e888ee1de', 
    '0x4085607d49c5e6eb9af262a156a9089cd04d3e5c', 
    '0x830b9eba30096ee7d8b10dbe4a5912c5ba69b019', 
    '0xb41202826fe31f036d7b805258c9d46aedd4c13b', 
    '0x6dc803efb26f5713d6ae5169b818c3b5dc9a64e8', 
    '0x1d5a591eebb5bcb20f440d121e4f62e8d1689997', 
    '0xcd4a584d5938a431083183055ac7a066aa3e1985', 
    '0xebec795c9c8bbd61ffc14a6662944748f299cacf', 
    '0x184f1960bafd44e8ad8d56ae91ce641678a48602', 
    '0x6a51d95b6f9e24b4ae71fe4751b12ff87ddb19cd', 
    '0xab3c66a06a5940b811ad1d98d8b6ea5456657993', 
    '0xf8092d0679cc835b3d51d46163e649f2de5c680d', 
    '0x14bbf6493b7923284e4957fa4de9f3c2b1bab120', 
    '0xd135913f966d874078822b06b50a645a665d9f6c', 
    '0x02d3e24545ec92951e51a953b4d24068e7c6d8a4', 
    '0x1c4b70a3968436b9a0a9cf5205c787eb81bb558c',
];

deriveAccounts(targetAddresses);
