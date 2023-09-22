import React from 'react'
import { Button, Typography } from '@material-tailwind/react'
import { HiOutlineUser, } from 'react-icons/hi'


const SubmitSection = () => {
    return (
        <form className='lg:absolute z-10 bottom-20 w-full 2xl:w-[72%] xl:w-[82%] lg:w-[95%] flex flex-col lg:flex-row lg:items-center justify-around gap-2 mt-5 px-5 py-3 bg-[white] shadow-2xl rounded-lg'>
            {/* Location Input  */}
            <div className="w-full lg:w-48">
                <Typography
                    variant='h6'
                >
                    Location
                </Typography>
                <select className='p-2 bg-[#F1F1F1] rounded-lg w-full lg:w-48 text-sm border-0'>
                    <option>
                        Keraniganj, Dhaka
                    </option>
                    <option>
                        Kamrangirchar, Dhaka
                    </option>
                </select>
            </div>

            {/* Destination Input  */}
            <div className="w-full lg:w-48">
                <Typography
                    variant='h6'
                >
                    Destination
                </Typography>
                <select className='p-2 bg-[#F1F1F1] rounded-lg w-full lg:w-48 text-sm border-0'>
                    <option>
                        Keraniganj, Dhaka
                    </option>
                    <option>
                        Kamrangirchar, Dhaka
                    </option>
                </select>
            </div>

            {/* Date Input  */}
            <div className="w-full lg:w-auto">
                <Typography
                    variant='h6'
                >
                    Date
                </Typography>
                <input type='date' className='p-2 bg-[#F1F1F1] w-full lg:w-auto rounded-lg  text-center' />
            </div>

            {/* People Input  */}
            <div className="">
                <Typography
                    variant='h6'
                >
                    People
                </Typography>
                <div className='bg-[#F1F1F1] relative rounded-lg'>
                    <span className='absolute bottom-3 right-6 text-md'><HiOutlineUser /></span>
                    <input type='number' defaultValue="1" className='p-2   w-24 text-center bg-[transparent]' />
                </div>
            </div>

            {/* Submit Button  */}
            <Button className='bg-[#29AF60] drop-shadow-2xl'>Submit</Button>
        </form>
    )
}

export default SubmitSection