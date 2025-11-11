import {Box,
  Typography,
  Button,
  Card,
  Chip,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  Paper,
} from '@mui/material'

import { Wheat, Sprout, Zap, Dot, ArrowRight } from 'lucide-react'


export const About = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        peddingX: 15,
        peddingY: 10,
        justifyItems: 'center',
        textAlign: 'center',
      }}
    >
      <Chip
        label="Sobre a AgroConsult"
        size="small"
        sx={{
          background: '#DBFCE7',
          color: '#016630',
          fontSize: 12,
          fontWeight: 600,
          marginTop: 8,
        }}
      />

      <Typography
        variant="h1"
        sx={{
          fontSize: 36,
          fontWeight: 'bold',
          marginTop: 2,
        }}
      >
        Liderança em Consultoria Agronômica
      </Typography>

      <Typography variant="body1" sx={{ color: 'grey.700', paddingX: 75, marginTop: 2 }}>
        Somos uma empresa especializada em consultoria para o agronegócio, com foco exclusivo em milho, soja e sorgo. Nossa missão é maximizar a produtividade e rentabilidade das propriedades rurais através de soluções inovadoras e sustentáveis.
      </Typography>

        <Box
      sx={{
        marginTop: 3,
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 3,
          width: 300,
          height: 128,
        },
      }}
    >
      <Paper elevation={3} >
        <Typography variant='h5'
            sx={{color:'#00A63E',fontWeight: 600}}
        >500+</Typography>
        <Typography variant='body1'>Propriedades Atendidas</Typography>
      </Paper>

      <Paper elevation={3} >
        <Typography variant='h5'
            sx={{color:'#00A63E',fontWeight: 600}}
        >15</Typography>
        <Typography variant='body1'>Anos de Experiência</Typography>
      </Paper>

      <Paper elevation={3} >
        <Typography variant='h5'
            sx={{color:'#00A63E',fontWeight: 600}}
        >30%</Typography>
        <Typography variant='body1'>Aumento Médio de Produtividade</Typography>
      </Paper>

      <Paper elevation={3} >
        <Typography variant='h5'
            sx={{color:'#00A63E',fontWeight: 600}}
        >98%</Typography>
        <Typography variant='body1'>Satisfação dos Clientes</Typography>
      </Paper>


     
    </Box>


    <Box
      sx={{
        marginTop: 3,
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 3,
          width: 300,
          height: 128,
        },
      }}
    >
       <Paper elevation={3} >
        <Typography sx={{position: 'absolute',
        margin: 1.5, 
        scale: 1.2, 
        bgcolor: '#DBFCE7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
      
      
      }}>
        <Wheat  color='#016636'/>
        </Typography>
        <Typography variant='h5'
            sx={{color:'#00A63E',fontWeight: 600, paddingY: 4.5}}
        >500+</Typography >
        <Typography variant='body1'>Propriedades Atendidas</Typography>
      </Paper>
    </Box>




    </Box>
  )
}