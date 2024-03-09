'use client'

import Connect from "./Containers/ConnectButton";
import EthersProvider from "./Containers/EthersProvider";
import Profile from "./profile";
import Transfer from "./transfer";


export default function Home() {
  return (
    <div>
      <Connect />
      <Profile />
      <EthersProvider />
      <Transfer />
    </div>
  )
}
