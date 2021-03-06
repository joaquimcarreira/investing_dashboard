
import './topbar.css'
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import Autocomplete from '@mui/material/Autocomplete';
import MuiAppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box"
import { useState } from "react";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,

    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const TopBar = (props) => {
  const { inputTicker, setInputTicker } = props.appBarData
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      setInputTicker(input)
    }
  }



  return (
    <div className="barContainer">
      <Autocomplete options={companies}

        onInputChange={(event, newInput) => {
          if (newInput !== undefined) {
            setInput(newInput)
          }
        }}
        // onSubmit={handleSubmit}
        renderInput={(params) => <TextField onKeyDown={(e) => handleSubmit(e)}  {...params} label="Search Company" />}
        sx={{ height: "60px", width: "20%" }}></Autocomplete>

    </div>


  );
}
const companies = [
  { label: 'APPLE' },
  { label: 'AMAZON' },
  { label: 'META' },

];



export default TopBar;