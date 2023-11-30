import React, { useState } from 'react';
import {  LightModeOutlined, DarkModeOutlined, Menu as Toggle, Search, SettingsOutlined, ArrowDropDropDownOutlined, Mode } from "@mui/icons-material";
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profileImage from "assets/bla.jpeg"
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';


const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const dispatch = useDispatch();
    const theme = useTheme();

  return (
    <AppBar
    sx = {{
        position: "static",
        background: "none",
        boxShadow: "none"
    }}
    >
        <Toolbar sx={{ justifyContent: "space-between" }}>
            <FlexBetween>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <Toggle></Toggle>
                </IconButton>
                <FlexBetween
                backgroundColor={theme.palette.background.alt}
                borderRadius="10px"
                gap="6rem"
                p="0.1rem 1.5rem"
                >
                    <InputBase placeholder='Search...'></InputBase>
                    <IconButton>
                        <Search></Search>
                    </IconButton>
                </FlexBetween>
            </FlexBetween>


            <FlexBetween gap="1.5rem">
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === "dark" ? (<DarkModeOutlined sx={{ fontSize: "25px" }}></DarkModeOutlined>) : (<LightModeOutlined sx={{ fontSize: "25px" }}></LightModeOutlined>)}
                </IconButton>
                <IconButton>
                    <SettingsOutlined sx={{ fontSize: "25px" }}></SettingsOutlined>
                </IconButton>
            </FlexBetween>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar