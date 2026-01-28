import React from 'react'

const RouteInfo = () => {
  return (
    <div className='grid grid-cols-2 mb-4 gap-4'>
      <div className='flex items-center justify-between border-[1.5px] border-[#898888] h-[65px] rounded-lg p-3'>
        <div className='flex flex-col '>
            <p className='text-[#898888] font-semibold text-[13px]'>From</p>
            <h6 className='text-[#565454] font-medium text-[13px]'>Rajiv Gandhi International Airport(HYD), Hyderabad</h6>
        </div>
        <hr className='h-full border-[#898888] border-[1px]'/>
        <div className='flex flex-col '>
            <p className='text-[#898888] font-semibold text-[13px]'>Departure</p>
            <h6 className='text-[#565454] font-medium text-[13px]'>Mar 12, 2025</h6>
        </div>
      </div>

      <div className='flex items-center justify-between border-[1.5px] border-[#898888] h-[65px] rounded-lg p-3'>
        <div className='flex flex-col '>
            <p className='text-[#898888] font-semibold text-[13px]'>To</p>
            <h6 className='text-[#565454] font-medium text-[13px]'>Mopa, Airport India (GOX), Goa, India</h6>
        </div>
        <hr className='h-full border-[#898888] border-[1px]'/>
        <div className='flex flex-col '>
            <p className='text-[#898888] font-semibold text-[13px]'>Return Date</p>
            <h6 className='text-[#565454] font-medium text-[13px]'>Mar 17, 2025</h6>
        </div>
      </div>
    </div>
  )
}

export default RouteInfo
