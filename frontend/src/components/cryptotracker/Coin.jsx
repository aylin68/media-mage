import React from 'react'
import { Card, Stack, Button, Alert } from 'react-bootstrap'
const Coin = ({name, image, symbol, price, volume }) => {
    const handleCoinPost = () => {
        console.log('hi')
    }
  return (
    <Card className='coinCard' style={{margin: '0'}}>
        <Stack direction='horizontal' gap={2} >
            <img className='coinLogo' src={image} alt={name} style={{width: '2.5rem',}} />
            <h2 className='coinName'>{name}</h2>
            <p className='coinSymbol'>{symbol}</p>
        </Stack>
        <Stack direction='horizontal' gap={2}>
            <h4 className="coinPrice">€{price} </h4>
            <p className="coinVolume">€{volume.toLocaleString()}</p>
        </Stack>
            <Button onClick={handleCoinPost}>post to feed</Button>
    </Card>
  )
}

export default Coin