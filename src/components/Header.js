import FilterAltIcon from "@mui/icons-material/FilterAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const Header = () => {
  return (
    <div className="h-full w-full flex items-center justify-between pl-8 pr-8">
      <img
        src="https://static.wixstatic.com/media/2d34e5_0edc99ff4ba8476595b2395614f84ac6~mv2.jpg/v1/crop/x_268,y_0,w_3182,h_980/fill/w_308,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GOGAGA%20NEW%20LOGO%20FINAL-JPEG.jpg"
        alt="logo"
        className="w-[150px] h-full"
      />
      <div className="flex items-center justify-between w-[200px]">
        <div className="h-8 w-8 rounded-md flex items-center justify-center border-[2px] border-green-700">
          <FilterAltIcon sx={{ fontSize: "21px", color: "green" }} />
        </div>
        <div className="h-8 w-8 rounded-md flex items-center justify-center border-[2px] border-[#000075]">
          <LocationOnIcon sx={{ fontSize: "21px", color: "#000075" }} />
        </div>
        <div className="h-8 w-8 rounded-md flex items-center justify-center border-[2px] border-red-500">
          <NotificationsIcon sx={{ fontSize: "21px", color: "red" }} />
        </div>
         <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      >
        B
      </Avatar>
      </div>
    </div>
  );
};

export default Header;
