require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind mistake hunt merry fog thumb'; 
let testAccounts = [
"0x3bb52cf84ee2b6531ba0635ac4030a676e1d459a6b5633078a58c2de47c042da",
"0xe5b095e3c49ed5d5da3f3a8b97d57f37daa3c9b5f5c1e766e1bccca4fa7df0a9",
"0x30d7abd24c5f27d5f2f453e2a597921e283260aedc41a2dc3d512d697a99252d",
"0xcf0eceb29a9a923b5b45560b54e92097067f09bb51610a3f97e5535cde04a9ad",
"0xdd0b3d225e7be1e8422222f8e1af7150f6be02b38c8e4c1246783b1208d80c76",
"0x5a3ff4817b5910831cd2b31a96074a8692093bec702d7b66a8dc8922c7bf277c",
"0x2cf27903304f26858555e25c9321098df09468beee31108c84f68714b080fa2f",
"0x360ab65c373ac485d540668d7d1156d090013c1a2a9b925d27ec03a98fe9ea50",
"0x43d78637c7f3e2d50128ec1f7ded5ec12f8bc4c065476386dff1f5b84b54928a",
"0xddca9f1fe37f0116a483564d742ba2a393fbce8b697f380d9a4bddf0cffdbbdf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

