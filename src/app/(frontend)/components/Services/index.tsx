import {
  Box,
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
} from '@mui/material'
import { write } from 'fs'
import { Wheat, Sprout, Zap, Dot, ArrowRight } from 'lucide-react'

export const Services = () => {
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
        label="Nossos serviços"
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
        Especialização em Três Culturas Estratégicas
      </Typography>

      <Typography variant="body1" sx={{ color: 'grey.700', paddingX: 75, marginTop: 2 }}>
        Nossa expertise abrange as principais commodities do agronegócio brasileiro, oferecendo
        soluções personalizadas para cada cultura.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 4,
        }}
      >
<Card sx={{ maxWidth: 500, borderRadius: 4 }}>{/* primeira imagem */}
  <Box 
    sx={{position: 'absolute',
        margin: 3, 
        scale: 1.5, 
        bgcolor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 2,
      }}
  >
    <Wheat color='#016636'/>
  </Box>
  <CardMedia
    component="img"
    alt="green iguana"
    height="300px"
    width="500px"
    image="https://images-ext-1.discordapp.net/external/AONff36pbmEJCtLjTx_MFXQSr7-f9xVbbdi-CthgwrY/%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JuJTIwZmllbGQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTc2MTgwMDd8MA%26ixlib%3Drb-4.1.0%26q%3D80%26w%3D1080%26utm_source%3Dfigma%26utm_medium%3Dreferral/https/images.unsplash.com/photo-1655131468751-c4210f1c4c5e?format=webp"
  />

  <CardContent>
    <Typography variant="h6" sx={{ textAlign: 'left' }}>
      Consultoria em Milho
    </Typography>

    <Typography variant="body2" sx={{ textAlign: 'left', color: 'grey.700' }}>
      Maximização da produtividade através de técnicas avançadas de manejo, escolha de
      variedades e otimização de recursos.
    </Typography>

    <Typography
      variant="h3"
      sx={{
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'left',
        marginTop: 6,
      }}
    >
      Principais Benefícios:
    </Typography>

    <List>
      <ListItem>
        <ListItemIcon sx={{ scale: 2, marginRight: -5, color: 'grey.700' }}>
          <Dot color="#00A63E" />
        </ListItemIcon>
        Análise de solo especializada
      </ListItem>

      <ListItem>
        <ListItemIcon sx={{ scale: 2, marginRight: -5, color: 'grey.700' }}>
          <Dot color="#00A63E" />
        </ListItemIcon>
        Seleção de híbridos
      </ListItem>

      <ListItem>
        <ListItemIcon sx={{ scale: 2, marginRight: -5, color: 'grey.700' }}>
          <Dot color="#00A63E" />
        </ListItemIcon>
        Manejo integrado de pragas
      </ListItem>

      <ListItem>
        <ListItemIcon sx={{ scale: 2, marginRight: -5, color: 'grey.700' }}>
          <Dot color="#00A63E" />
        </ListItemIcon>
        Otimização de irrigação
      </ListItem>
    </List>

    <Typography
      variant="body2"
      sx={{
        background: '#F0FDF4',
        color: '#016636',
        fontWeight: 600, //grossura da fonte
        fontSize: 14,
        borderRadius: 2, // arredondamento da borda
        lineHeight: 3, // autura da linha
        textAlign: 'left', //alinhamento a esquerda
        paddingLeft: 2, //preenchimento
      }}
    >
      Aumento médio de 25% na produtividade
    </Typography>
  </CardContent>
  
  <CardActions>
    <Button
      sx={{width: '100%', border: '1px solid'}}
    >
      <Typography variant='button'
        sx={{paddingRight: 3}}
      >Saiba mais</Typography>
      <ArrowRight alignmentBaseline="middle"/>
      </Button>
  </CardActions>


</Card>

<Card sx={{ maxWidth: 500 }}> {/* segunda imagem */}
          <Box 
            sx={{position: 'absolute',
               margin: 3, 
               scale: 1.5, 
               bgcolor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 2,
              }}
          >
            <Sprout color='#016636'/>
          </Box>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300px"
            width="500px"
            image="https://images.unsplash.com/photo-1562702076-c719c8796b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3liZWFuJTIwZmFybXxlbnwxfHx8fDE3NTc2MTgzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          />

          <CardContent>
            <Typography variant="h6" sx={{ textAlign: 'left' }}>
              Consultoria em Milho
            </Typography>

            <Typography variant="body2" sx={{ textAlign: 'left', color: 'grey.700' }}>
              Maximização da produtividade através de técnicas avançadas de manejo, escolha de
              variedades e otimização de recursos.
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: 16,
                fontWeight: 600,
                textAlign: 'left',
                marginTop: 6,
              }}
            >
              Principais Benefícios:
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon sx={{ scale: 2, marginRight: -5, color: 'grey.700' }}>
                  <Dot color="#00A63E" />
                </ListItemIcon>
                Análise de solo especializada
              </ListItem>

              <ListItem>
                <ListItemIcon sx={{ scale: 2, marginRight: -5, color: 'grey.700' }}>
                  <Dot color="#00A63E" />
                </ListItemIcon>
                Seleção de híbridos
              </ListItem>

              <ListItem>
                <ListItemIcon sx={{ scale: 2, marginRight: -5, color: 'grey.700' }}>
                  <Dot color="#00A63E" />
                </ListItemIcon>
                Manejo integrado de pragas
              </ListItem>

              <ListItem>
                <ListItemIcon sx={{ scale: 2, marginRight: -5, color: 'grey.700' }}>
                  <Dot color="#00A63E" />
                </ListItemIcon>
                Otimização de irrigação
              </ListItem>
            </List>

            <Typography
              variant="body2"
              sx={{
                background: '#F0FDF4',
                color: '#016636',
                fontWeight: 600, //grossura da fonte
                fontSize: 14,
                borderRadius: 2, // arredondamento da borda
                lineHeight: 3, // autura da linha
                textAlign: 'left', //alinhamento a esquerda
                paddingLeft: 2, //preenchimento
              }}
            >
              Aumento médio de 25% na produtividade
            </Typography>
          </CardContent>
          
          <CardActions>
            <Button
              sx={{width: '100%', border: '1px solid'}}
            >
              <Typography variant='button'
                sx={{paddingRight: 3}}
              >Saiba mais</Typography>
              <ArrowRight alignmentBaseline="middle"/>
              </Button>
          </CardActions>


</Card>

<Card sx={{ maxWidth: 500 }}>{/* terceira imagem */}
          <Box 
            sx={{position: 'absolute',
               margin: 3, 
               scale: 1.5, 
               bgcolor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: 2,
              }}
          >
            <Zap color='#016636'/>
          </Box>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300px"
            width="500px"
            image='https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3NjE4MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
          />

          <CardContent>
            <Typography variant="h6" sx={{ textAlign: 'left' }}>
              Consultoria em Milho
            </Typography>

            <Typography variant="body2" sx={{ textAlign: 'left', color: 'grey.700' }}>
              Maximização da produtividade através de técnicas avançadas de manejo, escolha de
              variedades e otimização de recursos.
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: 16,
                fontWeight: 600,
                textAlign: 'left',
                marginTop: 6,
              }}
            >
              Principais Benefícios:
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon sx={{ scale: 2, marginRight: -5, color: 'grey.700' }}>
                  <Dot color="#00A63E" />
                </ListItemIcon>
                Análise de solo especializada
              </ListItem>

              <ListItem>
                <ListItemIcon sx={{ scale: 2, marginRight: -5, color: 'grey.700' }}>
                  <Dot color="#00A63E" />
                </ListItemIcon>
                Seleção de híbridos
              </ListItem>

              <ListItem>
                <ListItemIcon sx={{ scale: 2, marginRight: -5, color: 'grey.700' }}>
                  <Dot color="#00A63E" />
                </ListItemIcon>
                Manejo integrado de pragas
              </ListItem>

              <ListItem>
                <ListItemIcon sx={{ scale: 2, marginRight: -5, color: 'grey.700' }}>
                  <Dot color="#00A63E" />
                </ListItemIcon>
                Otimização de irrigação
              </ListItem>
            </List>

            <Typography
              variant="body2"
              sx={{
                background: '#F0FDF4',
                color: '#016636',
                fontWeight: 600, //grossura da fonte
                fontSize: 14,
                borderRadius: 2, // arredondamento da borda
                lineHeight: 3, // autura da linha
                textAlign: 'left', //alinhamento a esquerda
                paddingLeft: 2, //preenchimento
              }}
            >
              Aumento médio de 25% na produtividade
            </Typography>
          </CardContent>
          
          <CardActions>
            <Button
              sx={{width: '100%', border: '1px solid'}}
            >
              <Typography variant='button'
                sx={{paddingRight: 3}}
              >Saiba mais</Typography>
              <ArrowRight alignmentBaseline="middle"/>
              </Button>
          </CardActions>
</Card>
      </Box>

      <Box
      sx={{background: '#009F3C',
        width: '1550px',
        height: '200px',
        marginTop: 4,
      }}
      >
        <Typography variant='h3'
          sx={{fontWeight: 600, //grossura da fonte
            fontSize: 20,
            color: 'white',
            padding: 4, 
           
          }}
        >
          Pronto para Revolucionar sua Produção?
        </Typography>

        <Typography variant='body2'
          sx={{fontSize: 12,
            color: 'white',
          }}
        >
          Nossa equipe de especialistas está pronta para analisar sua propriedade e desenvolver estratégias personalizadas para maximizar seus resultados.
        </Typography>
        
        <Box>
        <Button variant="contained"
          sx={{width: '300px',
              height: '30px',
              fontSize: 12,
              color: '#63AD3E',
              background: 'white',
              fontWeight: 600,
              marginTop: 4
            }}
        >
        Agendar Consultoria Gratuita</Button>
        </Box>

        
        
      </Box>
    </Box>
  )
}
