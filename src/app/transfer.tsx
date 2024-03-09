
import { Box, Divider, Typography } from '@mui/material'
import { useSendTransaction, useWaitForTransactionReceipt, type BaseError } from 'wagmi'
import { parseEther } from 'viem'




export default function Transfer() {
  const { data: hash, error, isPending, sendTransaction  } = useSendTransaction()

  async function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const to = formData.get('address') as `0x${string}`
    const value = formData.get('value') as string

    sendTransaction({to, value: parseEther(value)})
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  return (
  <Box sx={{p:'20px 0'}}>
    <Divider />
    <Box sx={{ m:'20px 0' }}>
    <form onSubmit={handleSubmit}>
      <input name="address" placeholder="0xA0Cf…251e" required />
      <input name="value" placeholder="0.05" required />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Confirming...' : 'Send'}
      </button>
      {hash && <Typography> Transaction Hash: {hash} </Typography>}
      {isConfirming && <Typography> Waiting for confirmation... </Typography>}
      {isConfirmed  && <Typography> Transaction confimed. </Typography>}
      {error  && <Typography> Error: {(error as BaseError).shortMessage || error.message} </Typography>}
    </form>
    </Box>
  </Box>
)}