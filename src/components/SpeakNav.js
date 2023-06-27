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


const SpeakNav = () => {
    const history = useNavigate();
    const path = useLocation();

    const handleHome = () => {
        history("/Home");
    };

    const handleProducts = () => {
        history("/Products");
    };

    let leColor = "white";
    let lebg = "#1A6333"
    let productsColor = null;



    return (
        <Stack height={"100px"} direction={"row"} alignItems={"center"} position={"fixed"} width={"inherit"} >
            <Stack direction={"row"} width={"60%"} px={5} spacing={2}>
                <Diversity1Icon sx={{ color: leColor }} />
                <Typography color={leColor}>Heart Turnings</Typography>
            </Stack>
            <Stack width={"40%"} direction={"row"} justifyContent={"space-around"}>
                <Button
                    onClick={handleHome}
                    sx={{
                        ":hover": {
                            bgcolor: lebg,
                            color: "white",
                        },
                        color: leColor,
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
                    onClick={handleProducts}
                    sx={{
                        ":hover": {
                            bgcolor: lebg,
                            color: "white",
                        },
                        borderRadius: "17px 5px",
                        textTransform: "none",
                        bgcolor: productsColor
                        // borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
                    }}
                >
                    <Stack direction={"row"}>
                        <ShoppingCartIcon sx={{ color: leColor }} />
                        <Typography color={leColor}>Products</Typography>
                    </Stack>
                </Button>
                <Button
                    sx={{
                        ":hover": {
                            bgcolor: lebg,
                            color: "white",
                        },
                        color: leColor,
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



export default SpeakNav;