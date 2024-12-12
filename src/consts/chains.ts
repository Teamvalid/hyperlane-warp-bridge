// import {
//   eclipsemainnet,
//   eclipsemainnetAddresses,
//   solanamainnet,
//   solanamainnetAddresses,
// } from '@hyperlane-xyz/registry';
import { ChainMap, ChainMetadata, ExplorerFamily } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  validium: {
    protocol: ProtocolType.Ethereum,
    chainId: 273,
    domainId: 273,
    name: 'validium',
    displayName: 'Validium Devnet',
    nativeToken: { name: 'Validium', symbol: 'VLDM', decimals: 18 },
    rpcUrls: [{ http: 'https://devnet.l2.rpc.validium.network' }],
    blockExplorers: [
      {
        name: 'Validium Explorer',
        url: 'https://devnet.explorer.validium.network',
        apiUrl: 'https://devnet.api.validium.network',
        family: ExplorerFamily.Etherscan,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 0,
      estimateBlockTime: 10,
    },
    logoURI: '/logo.svg',
  },

  validiumnexus: {
    protocol: ProtocolType.Ethereum,
    chainId: 274,
    domainId: 274,
    name: 'validiumnexus',
    displayName: 'Validium Nexus',
    nativeToken: { name: 'Validium', symbol: 'VLDM', decimals: 18 },
    rpcUrls: [{ http: 'https://devnet.explorer.validium.network:31520' }],
    blockExplorers: [
      {
        name: 'Validium Nexus Explorer',
        url: 'http://165.232.181.227:3111',
        apiUrl: 'http://165.232.181.227:3121',
        family: ExplorerFamily.Etherscan,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 0,
      estimateBlockTime: 10,
    },
    logoURI: '/logo.svg',
  },
};
