import { Stack, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const history = useNavigate();
  const path = useLocation();

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

  let leColor = "white";
  let lebg = "#1976d2"
  let homeColor = null;
  let productsColor = null;
  let newsColor = null;
  let CompanyColor = null;

  if (path.pathname === "/Home" || path.pathname === "/") {
    leColor = "black";
    homeColor = "#1976d2";
  }

  if (path.pathname === "/Products") {
    productsColor = "#1A6333";
    lebg = "#1A6333"
  }

  if (path.pathname === "/News") {
    newsColor = "#303030";
    lebg = "#303030"
  }

  if (path.pathname === "/Company") {
    CompanyColor = "#1976d2";
  }

  return (
    <Stack height={"100px"} direction={"row"} alignItems={"center"}>
      <Stack direction={"row"} width={"30%"} px={5}>
        <Diversity1Icon sx={{ color: leColor }} />
        <Typography color={leColor}>Heart Turnings</Typography>
      </Stack>
      <Stack width={"70%"} direction={"row"} justifyContent={"space-around"}>
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
          onClick={handleCompany}
          sx={{
            ":hover": {
              bgcolor: lebg,
              color: "white",
            },
            borderRadius: "17px 5px",
            textTransform: "none",
            bgcolor: CompanyColor
          }}
        >
          <Stack direction={"row"}>
            <GroupIcon sx={{ color: leColor }} />
            <Typography color={leColor}>Company</Typography>
          </Stack>
        </Button>
        <Button
          onClick={handleNews}
          sx={{
            ":hover": {
              bgcolor: lebg,
              color: "white",
            },
            borderRadius: "17px 5px",
            textTransform: "none",
            bgcolor: newsColor
          }}
        >
          <Stack direction={"row"}>
            <NewspaperIcon sx={{ color: leColor }} />
            <Typography color={leColor}>News</Typography>
          </Stack>
        </Button>
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
      </Stack>
    </Stack>
  );
}

export default Navbar;
