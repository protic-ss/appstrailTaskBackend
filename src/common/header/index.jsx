import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

import TvIcon from "@mui/icons-material/Tv";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { Link } from "react-router-dom";
import "./style.css";

const MenuList = [
  {
    icon: <AccountCircleIcon sx={{ color: "grey" }} />,
    to: "home",
    disabled: true,
  },
  { icon: <HomeIcon sx={{ color: "white" }} />, to: "home", disabled: false },
  {
    icon: <SearchIcon sx={{ color: "white" }} />,
    to: "explore",
    disabled: false,
  },
  { icon: <TvIcon sx={{ color: "grey" }} />, to: "home", disabled: true },
  {
    icon: <MovieCreationOutlinedIcon sx={{ color: "grey" }} />,
    to: "home",
    disabled: true,
  },
  {
    icon: <SportsBaseballOutlinedIcon sx={{ color: "grey" }} />,
    to: "home",
    disabled: true,
  },
  {
    icon: <CategoryOutlinedIcon sx={{ color: "grey" }} />,
    to: "home",
    disabled: true,
  },
];
function Header() {
  return (
    <div className="menuWrapMain">
      <div className="menuWrapSub">
        {MenuList.map((list, index) => (
          <Link key={index} to={list.to}>
            <div className={`navbutton btn ${list.disabled ? "disabled" : ""}`}>
              {list.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
