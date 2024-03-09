import { useAccount, useBalance,useChains } from 'wagmi'
import Balance from './Containers/Balance'


export default function Profile() {
  const { address, chain, chainId, connector, status } = useAccount()

  return (
  <div>
    <h6>address: {address}</h6>
    <h6>chainName: {chain?.name}</h6>
    <h6>chainId: {chainId}</h6>
      <Balance />
    <h6>Connect status: {status}</h6>
    <h6>Connector: {connector?.name}</h6>
  </div>
)}