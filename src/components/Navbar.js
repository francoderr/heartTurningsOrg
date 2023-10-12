import { Stack, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLeColor } from "../features/navColorsReducer";

function Navbar(props) {
  const history = useNavigate();
  const path = useLocation();
  const dispatch = useDispatch();

  let passedColor = props.homeColor

  const handleHome = () => {
    history("/Home");
  };

  const handleCompany = () => {
    history("/Company");
  };

  const handleNews = () => {
    history("/News");
  };

  const handleProducts = () => {
    history("/Products");
  };

  let leColor = useSelector((state) => state.colors.leColor);
  let lebg = "#1976d2";
  let homeColor = null;
  let productsColor = null;
  let newsColor = null;
  let CompanyColor = null;
  let leNewsColor = leColor;
  

  if (path.pathname === "/Home" || path.pathname === "/") {
    leColor = "black";
    leNewsColor = "black";
    homeColor = passedColor
  }

  if (path.pathname === "/Products") {
    productsColor = "#1A6333";
    lebg = "#1A6333";
  }

  if (path.pathname === "/News") {
    newsColor = "#303030";
    leNewsColor = leColor == "black" ? "white" : leColor
    lebg = "#303030";
  }

  if (path.pathname === "/Company") {
    CompanyColor = "#1976d2";
  }

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // User has scrolled, change the color of the navbar
        setScrolling(true);
        dispatch(setLeColor("black"));
      } else {
        // User is at the top, reset the color of the navbar
        setScrolling(false);
        dispatch(setLeColor("white"));
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  let opacite = scrolling ? 1 : 0;

  return (
    <Stack
      height={"100px"}
      direction={"row"}
      alignItems={"center"}
      // display={{
      //   sx: "none",
      //   md: "flex"
      // }}
     display={{ xs: "none", sm: "none", md: "inherit" }}
      sx={{
        backgroundColor: `rgba(255, 255, 255, ${opacite})`,
        borderRadius: "12px",
        // boxShadow: "3px 3px 20px 0 rgba(145, 158, 171, 0.16)",
      }}
    >
      <Stack direction={"row"} width={"30%"} px={5}>
        <Diversity1Icon sx={{ color: leColor }} />
        <Typography color={leColor}>Heart Turnings</Typography>
      </Stack>
      <Stack width={"70%"} direction={"row"} justifyContent={"space-around"}>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={handleHome}
          sx={{
            ":hover": {
              bgcolor: lebg,
              color: "white",
            },
            borderRadius: "17px 5px",
            bgcolor: homeColor,
            color: "white",
            textTransform: "none",
          }}
        >
          <Stack direction={"row"} spacing={1}>
            <HomeIcon sx={{ color: leColor }} />
            <Typography color={leColor}>Home</Typography>
          </Stack>
        </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <Button
            onClick={handleProducts}
            sx={{
              ":hover": {
                bgcolor: lebg,
              },
              borderRadius: "17px 5px",
              textTransform: "none",
              bgcolor: productsColor,

              // borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
            }}
          >
            <Stack direction={"row"}>
              <ShoppingCartIcon sx={{ color: leColor }} />
              <Typography color={leColor}>Products</Typography>
            </Stack>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={handleCompany}
          sx={{
            ":hover": {
              bgcolor: lebg,
              color: "white",
            },
            borderRadius: "17px 5px",
            textTransform: "none",
            bgcolor: CompanyColor,
          }}
        >
          <Stack direction={"row"}>
            <GroupIcon sx={{ color: leColor }} />
            <Typography color={leColor}>Company</Typography>
          </Stack>
        </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={handleNews}
          sx={{
            ":hover": {
              bgcolor: lebg,
              color: "white",
            },
            borderRadius: "17px 5px",
            textTransform: "none",
            bgcolor: newsColor,
          }}
        >
          <Stack direction={"row"}>
            <NewspaperIcon sx={{ color: leNewsColor }} />
            <Typography color={leNewsColor}>News</Typography>
          </Stack>
        </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <Button
          sx={{
            ":hover": {
              bgcolor: lebg,
              color: "white",
            },
            borderRadius: "17px 5px",
            textTransform: "none",
          }}
        >
          <Stack direction={"row"}>
            <SearchIcon sx={{ color: leColor }} />
            <Typography color={leColor}>Search</Typography>
          </Stack>
        </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <Button
          sx={{
            ":hover": {
              bgcolor: lebg,
              color: "white",
            },
            borderRadius: "17px 5px",
            textTransform: "none",
          }}
        >
          <PersonIcon sx={{ color: leColor }} />
        </Button>
        </motion.div>
      </Stack>
    </Stack>
  );
}

export default Navbar;
