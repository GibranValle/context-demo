import React, { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';

import { AppBar, Toolbar, IconButton } from '@mui/material'
import { Typography, InputBase, Switch } from '@mui/material'
import { green, grey } from '@mui/material/colors';

import SearchIcon from '@mui/icons-material/Search';

import usa from './usa.svg'
import spain from './spain.svg'
import france from './france.svg'

import { ThemeContext } from './context/ThemeContext'
import { LanguageContext } from './context/LanguageContext';
import { words } from './constants'


const Search=styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.5),
    marginLeft: 'auto',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.9),
        color: alpha(theme.palette.common.black, 0.85),
    },
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },

}));

const SearchIconWrapper=styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase=styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& input': {
        padding: theme.spacing(1, 1, 1, 0),
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '25ch',
            },
        },
    },
}));

const StyledFlag=styled('img')(({ theme, src }) => ({
    width: '15px',
    src: src
}))

const GreenSwitch=styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: green[600],
        '&:hover': {
            backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: grey[900],
    },
}));

export default function SearchAppBar() {
    const { toggleDarkMode }=useContext(ThemeContext)
    const { language }=useContext(LanguageContext)
    const handleChange=() => toggleDarkMode()
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    sx={{
                        mr: 2
                    }}
                >
                    {language==='en'&&<StyledFlag src={usa} />}
                    {language==='fr'&&<StyledFlag src={france} />}
                    {language==='es'&&<StyledFlag src={spain} />}
                </IconButton>
                <GreenSwitch onChange={handleChange} />
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    {words[language].title}
                </Typography>
                <Search className='search'>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder={words[language].search}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Toolbar>
        </AppBar>
    );
}