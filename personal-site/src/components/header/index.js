import React from "react";
import { Toolbar, AppBar, Box, Typography, Button, Avatar } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const pages = ['Projects', 'Streaming', 'Photography'];

export default function Header() {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1, p: '10px' }}>
            <AppBar position="static" sx={{backgroundColor: '#121212', borderRadius: "5px"}}>
            <Toolbar>
                <Avatar alt="Quinn Chrest" src="https://i.imgur.com/s0rSzz0.jpg"/>
                <Typography href="/" component="a" sx={{fontFamily: 'monospace', fontWeight: 700, ml: 2, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none'}}>QUINN CHREST</Typography>
                {pages.map((page) => (
                    <Button key={page} sx={{ mx: 2, color: 'white', display: 'block' }} onClick={() => navigate('/' + page) }>
                        {page}
                    </Button>
                ))}
            </Toolbar>
            </AppBar>
        </Box>
    );
}