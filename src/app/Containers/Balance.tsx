import { useAccount, useBalance,useChains } from 'wagmi'
import dayjs from 'dayjs'

export default function Balance() {

  const { address } = useAccount()
  const result = useBalance({address})

  if(result.isPending) return 'Pending'

  if(result.error) return 'An error has occurred: ' + result.error.message

  return (
  <div>
    <h6>Balance: {String(result.data.value)}</h6>
    <h6>Balance update at: {dayjs(result.dataUpdatedAt).format('YYYY/MM/DD HH:mm:ss')}</h6>
  </div>
)}