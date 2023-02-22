import { Stack, Button, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchOption() {

    return(
        <IconButton aria-label="search">
            <SearchIcon sx={{color: 'black'}}/>
        </IconButton>
    );
  }
  