import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import React from 'react'
import { Box } from '@mui/system'
import { productAdd } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const ChemicalCard = (item) => {
  const dispatch = useDispatch()
  console.log(item)
  return (
    <Grid item xs={4}>
      <Card
        sx={{
          display: 'flex',
          height: '24.375em',
          width: '20.625em',
          flexDirection: 'column',
          margin: 'auto',
          marginTop: '10em',
          alignItems: 'center',
        }}
      >
        <CardMedia
          image={require(`../images/productImg/NACL.png`)}
          sx={{
            component: 'img',
            height: '16.875em',
            width: '17.625em',
            marginTop: '1em',
          }}
        ></CardMedia>
        <CardContent>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" component="div">
              {item.item.name}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '40%',
                justifyContent: 'space-evenly',
              }}
            >
              <Typography variant="h6">Price :</Typography>
              <Typography variant="h6"> {item.item.price}</Typography>
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            bottom: '0.07em',
          }}
        >
          <div className="form-control text -center">{}</div>

          <Button size="small" onClick={() => dispatch(productAdd(item))}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ChemicalCard
