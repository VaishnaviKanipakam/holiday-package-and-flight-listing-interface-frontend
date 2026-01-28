import EastIcon from '@mui/icons-material/East';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const FareSummary = () => {
  return (
    <div className="flex items-start justify-between box-border w-full bg-gradient-to-r from-[#00001A] to-[#0000A3] h-[80px] p-4 rounded-lg mb-4 text-[#ffffff]">
        <div className="flex flex-col">
            <p className="text-[15px] font-medium">Departure.Air India</p>
            <div className="flex items-center">
                <h4 className="text-[15px] font-[600]">11:30</h4>
                <EastIcon sx={{marginLeft: "13px", marginRight: "13px"}}/>
                <h4 className="text-[15px] font-[600]">18:55</h4>
            </div>
        </div>
        <h1 className='text-[17px] font-[600] self-end'><CurrencyRupeeIcon />105,300.00</h1>
        <hr className='h-full border-[1px]'/>
        <div className="flex flex-col">
            <p className="text-[15px] font-medium">Return.Air India</p>
            <div className="flex items-center">
                <h4 className="text-[15px] font-[600]">00:50</h4>
                <EastIcon sx={{marginLeft: "13px", marginRight: "13px"}}/>
                <h4 className="text-[15px] font-[600]">01:55</h4>
            </div>
        </div>
        <h1 className='text-[17px] font-[600] self-end'><CurrencyRupeeIcon />105,300.00</h1>
        <hr className='h-full border-[1px]'/>
        <div className='flex items-center'>
            <p className="text-[15px] font-medium self-end">Total Round fare</p>
            <div className="flex flex-col items-center">
                 <p className="text-[15px] font-medium">for 2 adult, 2 children</p>
                <h1 className='text-[17px] font-[600]'><CurrencyRupeeIcon />210,600.00</h1>
            </div>
        </div>
    </div>
  );
};

export default FareSummary;
