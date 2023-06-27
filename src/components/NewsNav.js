import React, { useEffect } from 'react'
import { Stack, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import { useNavigate, useLocation } from "react-router-dom";


const NewsNav = () => {
    const history = useNavigate();
    const path = useLocation();

    const handleHome = () => {
        history("/Home");
    };
    
    const handleNews = () => {
        history("/News");
    };

    let leColor = "black";

    // let homeColor = null;
    // let newsColor = null;

    // if (path.pathname === "/Home" || path.pathname === "/") {
    //     homeColor = "#1976d2";
    // }


    // if (path.pathname === "/News") {
    //     newsColor = "#1976d2";
    // }


    return (
        <Stack height={"100px"} direction={"row"} alignItems={"center"} position={"fixed"} width={"inherit"} bgcolor={"white"}>
            <Stack direction={"row"} width={"60%"} px={5} spacing={2}>
                <Diversity1Icon sx={{ color: leColor }} />
                <Typography color={leColor}>Heart Turnings</Typography>
            </Stack>
            <Stack width={"40%"} direction={"row"} justifyContent={"space-around"}>
                <Button
                    onClick={handleHome}
                    sx={{
                        ":hover": {
                            bgcolor: "#303030",
                            color: "white",
                        },
                        color: 'black',
                        textTransform: "none",
                        borderRadius: "17px 5px"
                    }}
                >
                    <Stack direction={"row"} spacing={1}>
                        <HomeIcon sx={{
                            ":hover": {
                                color: "inherit",
                            },
                            color: "inherit"
                        }} />
                        <Typography
                            sx={{
                                ":hover": {
                                    color: "inherit",
                                },
                                color: "inherit"
                            }} >Home</Typography>
                    </Stack>
                </Button>
                <Button
                    onClick={handleNews}
                    sx={{
                        ":hover": {
                            bgcolor: "#303030",
                            color: "white",
                        },
                        color: 'black',
                        textTransform: "none",
                        borderRadius: "17px 5px"
                    }}
                >
                    <Stack direction={"row"}>
                        <NewspaperIcon sx={{
                            ":hover": {
                                color: "inherit",
                            },
                            color: "inherit"
                        }} />
                        <Typography sx={{
                            ":hover": {
                                color: "inherit",
                            },
                            color: "inherit"
                        }}>News</Typography>
                    </Stack>
                </Button>
                <Button
                    sx={{
                        ":hover": {
                            bgcolor: "#303030",
                            color: "white",
                        },
                        color: 'black',
                        borderRadius: '17px 5px',
                        textTransform: "none",
                    }}
                >
                    <PersonIcon sx={{ color: "inherit" }} />
                </Button>
            </Stack>
        </Stack>
    )
}



export default NewsNav