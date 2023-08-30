// async function login() {
//   if (!sdkRef.current) {
//     const socialLoginSDK = new SocialLogin();
//     const signature1 = await socialLoginSDK.whitelistUrl(
//       "http://127.0.0.1:5173/"
//     ); // add the production url of your dapp for redirects
//     await socialLoginSDK.init({
//       chainId: ethers.utils.hexValue(ChainId.POLYGON_MUMBAI).toString(),
//       network: "testnet",
//       whitelistUrls: {
//         "http://127.0.0.1:5173/": signature1,
//       },
//     });
//     sdkRef.current = socialLoginSDK;
//   }
//   if (!sdkRef.current.provider) {
//     sdkRef.current.showWallet();
//     enableInterval(true);
//   } else {
//     setupSmartAccount();
//   }
// }
