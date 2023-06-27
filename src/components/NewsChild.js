import React from 'react'
import { Stack, Typography, Divider } from "@mui/material";
import boxNews from "../assets/boxNews.svg"
import { useNavigate } from "react-router-dom";
// import NewsChild from "../components/NewsChild";

const NewsChild = () => {

    const history = useNavigate();

    const handleNewsClick = () => {
        history("/NewsItem");

    }

    return (
        <Stack width={"30%"}
            onClick={handleNewsClick}
        >
            <Stack
                height={"45%"}
                sx={{
                    backgroundImage: `url(${boxNews})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                borderRadius={"37px 10px"}
            ></Stack>
            <Stack height={"50%"} bgcolor={"#F4F4F4"} borderRadius={"37px 10px"}>
                <Stack
                    width={"90%"}
                    alignSelf={"center"}
                    height={"100%"}
                    justifyContent={"space-between"}
                >
                    <Stack>
                        <Typography
                            sx={{ marginTop: 1, marginBottom: 1 }}
                            fontFamily={"Abril Fatface"}
                            fontSize={"21px"}
                            fontWeight={"bold"}
                            color={"black"}
                            fontStyle={"normal"}
                            textAlign={"left"}
                        >
                            Outcome of yesterday's visit
                        </Typography>
                        <Typography
                            fontSize={"15px"}
                            fontFamily={"Playfair Display"}
                            fontWeight={300}
                            color={"black"}
                            fontStyle={"normal"}
                            textAlign={"left"}
                            lineHeight={"25px"}
                        >
                            Lorem ipsum dolor sit amet consectetur. Magnis aliquet
                            nibh varius mauris ullamcorper eget velit. Bibendum eget
                            risus quis aliquet porttitor. Lorem ipsum dolor sit amet
                            consectetur. Magnis aliquet nibh varius mauris ullamcorper
                            eget velit. Bibendum eget risus quis aliquet porttitor.
                        </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={1} alignSelf={"end"} mb={2}>
                        <Typography
                            fontFamily={"Playfair Display"}
                            fontSize={"15px"}
                            fontWeight={400}
                            fontStyle={"normal"}
                            color={"#5F9BCE"}
                            lineHeight={"30px"}
                        >
                            2hrs Ago
                        </Typography>
                        <Divider
                            orientation="vertical"
                            flexItem
                            style={{
                                width: "1px",
                                backgroundColor: "#5F9BCE",
                                height: "25px",
                            }}
                        />
                        <Typography
                            fontFamily={"Playfair Display"}
                            fontSize={"15px"}
                            fontWeight={400}
                            fontStyle={"normal"}
                            color={"#5F9BCE"}
                            lineHeight={"30px"}
                        >
                            Kiambu Town
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default NewsChild