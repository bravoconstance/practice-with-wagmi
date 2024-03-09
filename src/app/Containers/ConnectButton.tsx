import { ConnectButton } from '@rainbow-me/rainbowkit';

const Connect = () => {
  return <ConnectButton
  label="Sign in"
  accountStatus={{
    smallScreen: 'avatar',
    largeScreen: 'full',
  }}
  chainStatus="name"/>;
};

export default Connect