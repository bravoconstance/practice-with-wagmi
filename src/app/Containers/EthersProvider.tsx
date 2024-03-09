import { useEthersProvider } from '@/hook/useEthersProvider'
import { useEthersSigner } from '@/hook/useEthersSigner'

import { useChainId } from 'wagmi'

export default function EthersProvider () {
  const chainId = useChainId()
  const provider = useEthersProvider()
  const signer = useEthersSigner()

  return(
    <div>
      Ethers Provider & Ethers Signer
    </div>
)}