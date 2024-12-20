import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
// export const warpRouteConfigs: WarpCoreConfig = {
//   tokens: [],
//   options: {},
// };

export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      chainName: 'validium',
      standard: TokenStandard.EvmNative,
      decimals: 18,
      symbol: 'VLDM',
      name: 'Validium',
      addressOrDenom: '0x3bE033C2ca798152c4bc67b36739904470683029',
      logoURI: '/vldm-logo.png',
      connections: [
        { token: 'ethereum|validiumnexus|0xAF6941d1c6FA0DBD1ECeec6781DE5C2F2fBD0184' },
      ],
    },
    {
      chainName: 'validiumnexus',
      standard: TokenStandard.EvmNative,
      decimals: 18,
      symbol: 'VLDM',
      name: 'Validium',
      addressOrDenom: '0xAF6941d1c6FA0DBD1ECeec6781DE5C2F2fBD0184',
      logoURI: '/vldm-logo.png',
      connections: [{ token: 'ethereum|validium|0x3bE033C2ca798152c4bc67b36739904470683029' }],
    },
  ],
};
