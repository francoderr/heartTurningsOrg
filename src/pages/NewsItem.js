import React from 'react'
import { Stack, Typography, Divider, Button } from "@mui/material";
import NewsNav from "../components/NewsNav";
import Footer from '../components/footer';
import boxNews from "../assets/boxNews.svg"
import ThumbsUp from "../assets/ThumbsUp.svg"
import ThumbsDown from "../assets/ThumbsDown.svg"
import Eye from "../assets/Eye.svg"
import ArrowLeft from "../assets/ArrowLeft.svg"
import ArrowRight from "../assets/ArrowRight.svg"


const NewsItem = () => {
    return (
        <Stack >
            <Stack
                // height={"100vh"}
                // mt={'100px'}
                width={"100%"}
                bgcolor={"white"}
            >
                <NewsNav zIndex={4} />
                <Stack
                    mt={'100px'}
                    height={'700px'}
                    width={"95%"}
                    bgcolor={"#F4F4F4"}
                    borderRadius={"47px 5px"}
                    alignSelf={'center'}
                // bgcolor={'purple'}
                >
                    <Stack width={'100%'} height={'350px'} direction={'row'} alignItems={'center'} >
                        <Stack
                            ml={2}
                            // mt={2}
                            width={'40%'}
                            borderRadius={"47px 5px"}
                            height={'inherit'}
                            sx={{
                                backgroundImage: `url(${boxNews})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        ></Stack>
                        <Stack width="60%" height={'inherit'} alignItems={'center'} >
                            <Stack direction={"row"} spacing={1} my={2}>
                                <Stack
                                    border={'1px solid #5F9BCE'}
                                    borderRadius={"17px 5px"}
                                    direction={'row'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                >
                                    {/* <Stack > */}
                                    <Button>
                                        <img alt="" src={ThumbsUp} />
                                        <Typography
                                            sx={{ marginLeft: 1 }}
                                            color="#5F9BCE"
                                        >10K</Typography>
                                    </Button>

                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        style={{
                                            width: "1px",
                                            backgroundColor: "#5F9BCE",
                                            height: "inherit",
                                        }}
                                    />
                                    <Button>
                                        <img alt="" src={ThumbsDown} />
                                    </Button>

                                    {/* </Stack> */}
                                </Stack>
                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    style={{
                                        width: "1px",
                                        backgroundColor: "#5F9BCE",
                                        height: "30px",
                                    }}
                                />
                                <Stack
                                    border={'1px solid #5F9BCE'}
                                    borderRadius={"17px 5px"}
                                    direction={'row'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    spacing={2}
                                    px={2}
                                >
                                    <img alt="" src={Eye} />
                                    <Typography
                                        color="#5F9BCE"
                                    >0</Typography>
                                </Stack>
                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    style={{
                                        width: "1px",
                                        backgroundColor: "#5F9BCE",
                                        height: "30px",
                                    }}
                                />
                                <Typography
                                    fontFamily={"Playfair Display"}
                                    fontSize={"20px"}
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
                                        height: "30px",
                                    }}
                                />
                                <Typography
                                    fontFamily={"Playfair Display"}
                                    fontSize={"20px"}
                                    fontWeight={400}
                                    fontStyle={"normal"}
                                    color={"#5F9BCE"}
                                    lineHeight={"30px"}
                                >
                                    Kiambu Town
                                </Typography>
                            </Stack>
                            <Typography
                                fontFamily={"Abril Fatface"}
                                fontSize={"32px"}
                                fontWeight={"bold"}
                                fontStyle={"normal"}
                                color={"black"}
                                lineHeight={"43px"}
                            >Outcome Of Yesterdays Visit</Typography>
                            <Typography
                                fontFamily={"Playfair Display"}
                                fontSize={"20px"}
                                fontWeight={400}
                                fontStyle={"normal"}
                                color={"black"}
                                lineHeight={"32px"}
                                width={'90%'}
                            >Lorem ipsum dolor sit amet consectetur. Est viverra lacus ipsum sed quis tincidunt. Et donec quis egestas cras. Amet congue lectus mauris cursus non.
                                Morbi nunc lorem ac elit lacus orci diam quis. Amet gravida donec tellus sit feugiat amet et. Velit ultricies urna vel at sed diam.
                                Risus hendrerit massa auctor donec feugiat hendrerit. Massa sed aliquet amet ultricies amet arcu lectus in neque.
                                Netus egestas ipsum consequat tincidunt eleifend mattis risus in.
                                Amet rhoncus et tristique ac lacus. Fames aliquam pellentesque platea scelerisque. Eget facilisi nunc pellentesque sapien ac amet rhoncus diam.</Typography>
                        </Stack>
                    </Stack>
                    <Stack alignItems={'center'} mt={3}>
                        <Typography
                            fontFamily={"Playfair Display"}
                            fontSize={"20px"}
                            fontWeight={400}
                            fontStyle={"normal"}
                            color={"black"}
                            lineHeight={"32px"}
                            width={'90%'}
                        >
                            Lorem ipsum dolor sit amet consectetur. Est viverra lacus ipsum sed quis tincidunt. Et donec quis egestas cras. Amet congue lectus mauris cursus non. Morbi nunc lorem ac elit lacus orci diam quis.
                            Amet gravida donec tellus sit feugiat amet et. Velit ultricies urna vel at sed diam. Risus hendrerit massa auctor donec feugiat hendrerit. Massa sed aliquet amet ultricies amet arcu lectus in neque.
                            Netus egestas ipsum consequat tincidunt eleifend mattis risus in. Amet rhoncus et tristique ac lacus. Fames aliquam pellentesque platea scelerisque. Eget facilisi nunc pellentesque sapien ac amet rhoncus diam.
                            Mauris viverra pellentesque ut pellentesque sagittis enim egestas odio lacus. Neque ornare id eu dolor egestas risus. Commodo senectus arcu nam arcu vestibulum mauris nibh enim. Duis nisi in mauris non quam mattis ultrices.
                            Habitant ac tincidunt mus semper posuere. Adipiscing convallis consectetur habitasse scelerisque cras lectus vitae quis. Nulla pretium sem felis ultricies eu posuere. Tellus sapien urna interdum mattis scelerisque.
                            Vitae pulvinar amet ridiculus in laoreet dignissim. Risus tellus urna pulvinar elit nunc porta dui. Dignissim id sit sit mauris.
                        </Typography>
                        <Stack direction={'row'} spacing={3} mt={1}>
                            <Stack
                                border={'1px solid black'}
                                borderRadius={"17px 5px"}
                                direction={'row'}
                                justifyContent={'space-around'}
                                alignItems={'center'}
                                spacing={2}
                                width={'100px'}
                                p={1}
                                onClick={() => {}}
                            >
                                <img alt="" src={ArrowLeft} />
                                <Typography>Prev</Typography>
                            </Stack>
                            <Stack
                                border={'1px solid black'}
                                borderRadius={"17px 5px"}
                                direction={'row'}
                                justifyContent={'space-around'}
                                bgcolor={'black'}
                                alignItems={'center'}
                                spacing={2}
                                p={1}
                                width={'100px'}
                                onClick={() => {}}
                            >
                                <Typography color={'white'}>Next</Typography>
                                <img alt="" src={ArrowRight} />
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Footer />
            </Stack>
        </Stack>
    )
}

export default NewsItem