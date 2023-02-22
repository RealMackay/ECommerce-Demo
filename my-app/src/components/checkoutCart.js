import { Stack, Button, IconButton } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function CheckoutCart() {

    return(
        <IconButton aria-label="shopping cart">
            <AddShoppingCartIcon sx={{color: 'black'}}/>
        </IconButton>
    );
  }
  