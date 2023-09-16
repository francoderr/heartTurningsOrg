import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import painting from "../assets/Vector.png";
import mic from "../assets/mic.png";
import charity from "../assets/charity.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import productBackdrop from "../assets/productBackdrop.svg";
// import Navbar from "../components/Navbar";
// import Drawer from "../components/Drawer";
import scream from "../assets/Scream.jpg";
import painting2 from "../assets/painting2.svg";
import painting3 from "../assets/painting3.svg";
import charity2 from "../assets/charity2.svg";
import mic2 from "../assets/mic2.svg";
// import painting from "../assets/Vector.png";
// import mic from "../assets/mic.png";
// import charity from "../assets/charity.png";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import Footer from "../components/footer";
// import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history = useNavigate();

  const handleSpeak = () => {
    history("/Speak");
  };

  const handleEvents = () => {
    history("/Events");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Stack>
          <Stack
            height={"100vh"}
            width={"100%"}
            sx={{
              backgroundImage: `url(${productBackdrop})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {/* <Stack display={{ xs: "none", sm: "none", md: "inherit" }}>
          <Navbar />
        </Stack> */}

            <Stack ml={{ xs: 40, sm: 40, md: 10 }} mt={20} width="50%">
              <Typography
                color={"#F4F4F4"}
                fontWeight={600}
                fontSize={"55px"}
                fontFamily={"Inter"}
                lineHeight={"67px"}
                fontStyle={"normal"}
                textAlign={"left"}
              >
                Lorem ipsum dolor sit amet consectetur. Suspendisse ac ipsum
                duis eu.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            height={"100vh"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={5}
          >
            <Typography
              color={"#1A6333"}
              fontWeight={700}
              fontSize={"33px"}
              fontFamily={"inter"}
              lineHeight={"40px"}
              fontStyle={"normal"}
            >
              Our Services and products
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              ml={{ xs: 40, sm: 40, md: 10 }}
              width={{ xs: "60%", sm: "60%", md: "100%" }}
              justifyContent={"center"}
              spacing={3}
            >
              <Stack
                height={"400px"}
                width={"30%"}
                bgcolor={"#F4F4F4"}
                borderRadius={"37px 10px"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={8}
              >
                <img alt="" src={painting} />
                <Typography
                  color={"#1A6333"}
                  fontWeight={600}
                  fontSize={"30px"}
                  fontFamily={"inter"}
                  lineHeight={"36px"}
                >
                  Paintings
                </Typography>
              </Stack>
              <Stack
                height={"400px"}
                width={"30%"}
                bgcolor={"#F4F4F4"}
                borderRadius={"37px 10px"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={8}
                onClick={handleSpeak}
              >
                <img alt="" src={mic} />
                <Typography
                  color={"#1A6333"}
                  fontWeight={600}
                  fontSize={"30px"}
                  fontFamily={"inter"}
                  lineHeight={"36px"}
                >
                  Speak your heart out
                </Typography>
              </Stack>
              <Stack
                height={"400px"}
                width={"30%"}
                bgcolor={"#F4F4F4"}
                borderRadius={"37px 10px"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={8}
                onClick={handleEvents}
              >
                <img alt="" src={charity} />
                <Typography
                  color={"#1A6333"}
                  fontWeight={600}
                  fontSize={"30px"}
                  fontFamily={"inter"}
                  lineHeight={"36px"}
                >
                  Charity Events
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            height={"100vh"}
            width={"100%"}
            bgcolor={"rgba(244, 244, 244, 0.5)"}
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              width={"15%"}
              height={"100vh"}
              spacing={2}
            >
              <Stack
                width={"70px"}
                height={"70px"}
                bgcolor={"#1A6333"}
                borderRadius={"15px 5px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <img alt="" src={painting2} />
              </Stack>
              <Stack
                width={"70px"}
                height={"70px"}
                bgcolor={"#D9D9D9"}
                borderRadius={"15px 5px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <img alt="" src={charity2} />
              </Stack>
              <Stack
                width={"70px"}
                height={"70px"}
                bgcolor={"#D9D9D9"}
                borderRadius={"15px 5px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <img alt="" src={mic2} />
              </Stack>
            </Stack>
            <Stack
              width={"80%"}
              height={"500px"}
              bgcolor={"#F4F4F4"}
              borderRadius={"27px 10px"}
              direction={"row"}
            >
              <Stack
                width={"40%"}
                height={"500px"}
                sx={{
                  backgroundImage: `url(${scream})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                borderRadius={"27px 10px 0px"}
                alignItems={"flex-start"}
              >
                <Stack
                  width={"70px"}
                  height={"70px"}
                  bgcolor={" #D9D9D9"}
                  borderRadius={"15px 5px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <img alt="" src={painting3} />
                </Stack>
              </Stack>
              <Stack width={"55%"} margin={2} spacing={2}>
                <Typography
                  color={"#165F2F"}
                  fontWeight={500}
                  fontSize={"20px"}
                  fontFamily={"Inter"}
                  lineHeight={"20px"}
                  fontStyle={"normal"}
                  textAlign={"left"}
                >
                  Lorem ipsum dolor sit amet consectetur. Quam viverra faucibus
                  magna quis aliquet tristique eget. Enim adipiscing lobortis
                  fermentum eu molestie. Maecenas amet netus eget diam leo.Lorem
                  ipsum dolor sit amet consectetur. Quam viverra faucibus magna
                  quis aliquet tristique eget. Enim adipiscing lobortis
                  fermentum eu molestie. Maecenas amet netus eget diam leo.
                </Typography>
                <Stack direction={"row"} spacing={3}>
                  <Stack
                    width={"120px"}
                    height={"120px"}
                    sx={{
                      backgroundImage: `url(${scream})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    borderRadius={"27px 10px 0px"}
                  ></Stack>
                  <Stack
                    width={"120px"}
                    height={"120px"}
                    sx={{
                      backgroundImage: `url(${scream})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    borderRadius={"27px 10px 0px"}
                  ></Stack>
                  <Stack
                    width={"120px"}
                    height={"120px"}
                    sx={{
                      backgroundImage: `url(${scream})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    borderRadius={"27px 10px 0px"}
                  ></Stack>
                  <Stack
                    width={"120px"}
                    height={"120px"}
                    sx={{
                      backgroundImage: `url(${scream})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    borderRadius={"27px 10px 0px"}
                  ></Stack>
                </Stack>
                <Stack direction={"row"} spacing={3}>
                  <Stack
                    width={"120px"}
                    height={"120px"}
                    sx={{
                      backgroundImage: `url(${scream})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    borderRadius={"27px 10px 0px"}
                  ></Stack>
                  <Stack
                    width={"120px"}
                    height={"120px"}
                    sx={{
                      backgroundImage: `url(${scream})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    borderRadius={"27px 10px 0px"}
                  ></Stack>
                  <Stack
                    width={"120px"}
                    height={"120px"}
                    sx={{
                      backgroundImage: `url(${scream})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    borderRadius={"27px 10px 0px"}
                  ></Stack>
                  <Stack
                    width={"120px"}
                    height={"120px"}
                    sx={{
                      backgroundImage: `url(${scream})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    borderRadius={"27px 10px 0px"}
                  ></Stack>
                </Stack>
                <Stack width={"90%"} alignItems={"flex-end"}>
                  <Button
                    sx={{
                      width: "154px",
                      height: "50px",
                      bgcolor: "#1A6333",
                      color: "white",
                      borderRadius: "15px 5px",
                      ":hover": {
                        bgcolor: "black",
                        color: "white",
                      },
                    }}
                  >
                    Visit
                    <ArrowForwardIcon sx={{ marginLeft: 2 }} />
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Footer />
      </Main>
    </Box>
  );
}
