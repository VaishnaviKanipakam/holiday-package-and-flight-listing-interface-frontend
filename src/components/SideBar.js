import HomeIcon from "@mui/icons-material/Home";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ContactEmergencyOutlinedIcon from '@mui/icons-material/ContactEmergencyOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="h-full w-full p-4">
      <Link to="/" className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <HomeIcon /> <p className="ml-1">Dashboard</p>
        </li>
      </Link>
      <Link to="/leads" className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <FilterAltIcon /> <p className="ml-1">Leads</p>
        </li>
      </Link>
      <Link className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <PlaceIcon /> <p className="ml-1">Itineraries </p>
        </li>
      </Link>
      <Link className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <CalendarMonthIcon /> <p className="ml-1">Bookings </p>
        </li>
      </Link>
      <Link className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <ReceiptIcon /> <p className="ml-1">Payments </p>
        </li>
      </Link>
      <Link className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <ReportGmailerrorredIcon /> <p className="ml-1">Reports </p>
        </li>
      </Link>
      <p className="text-black font-bold text-[17px] mb-5 ml-1">USER CONTROL</p>
       <Link className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <PersonIcon /> <p className="ml-1">Users</p>
        </li>
      </Link>
      <Link className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <ManageAccountsOutlinedIcon /> <p className="ml-1">Roles & Access</p>
        </li>
      </Link>
      <p className="text-black font-bold text-[17px] mb-5 ml-1">PARTICIPANTS</p>
       <Link className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <SupportAgentOutlinedIcon /> <p className="ml-1">Customers</p>
        </li>
      </Link>
       <Link className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <ContactEmergencyOutlinedIcon /> <p className="ml-1">Agents</p>
        </li>
      </Link>
      <Link className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <StorefrontOutlinedIcon /> <p className="ml-1">Vendors</p>
        </li>
      </Link>
      <p className="text-black font-bold text-[17px] mb-5 ml-1">MISCELLANEOUS</p>
       <Link className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <LocalOfferOutlinedIcon /> <p className="ml-1">Offers</p>
        </li>
      </Link>
      <Link className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <SettingsSuggestOutlinedIcon /> <p className="ml-1">Settings</p>
        </li>
      </Link>
      <Link className="no-underline">
        <li className="text-black list-none font-semibold text-[17px] flex items-center mb-5 ml-3">
          <ContactSupportOutlinedIcon /> <p className="ml-1">Support</p>
        </li>
      </Link>
    </div>
  );
};

export default SideBar;
