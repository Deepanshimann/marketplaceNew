// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles'
import './AchivementTable.css'


const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})


const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})



const AchivementTable = () => {
  // ** Hook
  const theme = useTheme()

  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
  
       <Card className='card' >
      <CardContent>
      <Typography variant='h6' sx={{ letterSpacing: '0.25px' }}>
        Vintage Store
        </Typography>
        <Typography variant='body2' >Congratulations 🥳</Typography>
        
        <Typography variant='h5' sx={{ my: 3.1, color: 'primary.main' }}>
          42.8k
        </Typography>
        <Button size='small' variant='contained'>
          View Sales
        </Button>
      
      </CardContent>
    </Card>
   
   
  )
}

export default AchivementTable;
