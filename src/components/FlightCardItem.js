import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';


const FlightCardItem = props => {
    const {flightDetails} = props 
    const {Airline, FlightNo, From, To, Departure, Arrival, Duration, Fare, Baggage, Stops} = flightDetails
  return (
    <li className='bg-white flex flex-col items-start justify-start p-4 h-fit shadow-lg rounded-xl mb-3 mt-3 box-border w-full hover:bg-[#F0FFFF] transition transform hover:scale-105 duration-300'>
      <div className='flex flex-row items-center justify-between box-border w-full'>
        <div className='flex flex-row items-center'>
          {/* <img src={<AirlineLogo />} alt={Airline} className='w-[40px] h-[40px]'/> */}
          <FlightTakeoffOutlinedIcon />
          <div className='flex flex-col'>
            <h4 className='text-black text-[20px] font-semibold'>{Airline}</h4>
            <p className='text-[#616161] font-medium text-[15px]'>{FlightNo}</p>
          </div>
          <div className='flex flex-row items-center'>
            <div className='flex flex-col'>
              <h5 className='text-black font-medium text-[14px]'>{Departure}</h5>
              <h6 className='text-black font-medium text-[13px]'>{From}</h6>
            </div>
            <div className='flex flex-col ml-5 mr-5'>
              <h6 className='text-[#616161] font-medium text-[13px]'>{Duration}</h6>
            <SwapHorizIcon sx={{color: "#616161", marginRight: "12px"}}/>
            </div>
            <div className='flex flex-col'>
                <h6 className='text-black font-medium text-[14px]'>{Arrival}</h6>
                <h6 className='text-black font-medium text-[13px]'>{To}</h6>
            </div>
            
          </div>
        </div>
      </div>
      <hr className='border-[#b2b1b1] border-[1px] w-full mt-3 mb-3'/>
      <h6 className='text-black font-medium text-[16px]'>{Fare}</h6>
      <hr className='border-[#b2b1b1] border-[1px] w-full mt-3 mb-3'/>
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row items-center'>
          <ShoppingBagOutlinedIcon sx={{color: "#000000", fontSize: "15px"}}/>
          <h6 className='text-black font-medium text-[14px] ml-1'>Hand Baggage - {Baggage}</h6>
        </div>
        <div className='flex flex-row items-center'>
          <PlaceOutlinedIcon sx={{color: "#000000", fontSize: "15px"}}/>
          <h6 className='text-black font-medium text-[14px] ml-1'>{Stops}</h6>
        </div>
        <div className='flex flex-row items-center'>
          <RuleOutlinedIcon sx={{color: "#000000", fontSize: "15px"}}/>
          <h6 className='text-black font-medium text-[14px] ml-1'>Rules</h6>
        </div>
      </div>
    </li>
  )
}

export default FlightCardItem
 