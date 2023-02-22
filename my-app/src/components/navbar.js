import { navbarData } from "../data/navbarData";
import { Stack, Button } from "@mui/material";
import SearchOption from "./searchOption";
import CheckoutCart from "./checkoutCart";
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Navbar() {
    const navItems = navbarData.map(data =>
        <Button key={data.title}
                sx={{textTransform:'none', color: 'black'}}>
            {data.title}</Button>
        );

    return(
        <Stack direction='row' spacing={8}>
            <FacebookIcon fontSize='large'/>
            <Stack direction='row' spacing={2}>
                {navItems}
            </Stack>
            <SearchOption/>
            <CheckoutCart/>
        </Stack>
    );
  }
  