'use client'

import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultConfig, RainbowKitProvider, RainbowKitAuthenticationProvider, } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora, sepolia } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { authenticationAdapter } from './AuthenticationAdapter'


const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'xxx',
  chains: [mainnet, polygon, optimism, arbitrum, base, zora, sepolia],
  ssr: true,
});

const queryClient = new QueryClient();


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* <RainbowKitAuthenticationProvider adapter={authenticationAdapter} status={'unauthenticated'}> */}
          <RainbowKitProvider>
            {children}
          </RainbowKitProvider>
        {/* </RainbowKitAuthenticationProvider> */}

      </QueryClientProvider>
    </WagmiProvider>
  );
}
