// async function setupSmartAccount() {
//   if (!sdkRef?.current?.provider) return;
//   sdkRef.current.hideWallet();
//   setLoading(true);
//   const web3Provider = new ethers.providers.Web3Provider(
//     sdkRef.current.provider
//   );
//   setProvider(web3Provider);
//   try {
//     const smartAccount = new SmartAccount(web3Provider, {
//       activeNetworkId: ChainId.POLYGON_MUMBAI,
//       supportedNetworksIds: [ChainId.POLYGON_MUMBAI],
//       networkConfig: [
//         {
//           chainId: ChainId.POLYGON_MUMBAI,
//           dappAPIKey: "your dapp api key from biconomy dashboard",
//         },
//       ],
//     });
//     await smartAccount.init();
//     setSmartAccount(smartAccount);
//     setLoading(false);
//   } catch (err) {
//     console.log("error setting up smart account... ", err);
//   }
// }

// export default setupSmartAccount;
