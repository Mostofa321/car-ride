import React from 'react'
import { IconButton, Typography } from '@material-tailwind/react'
import { IoCall, } from 'react-icons/io5'
import { AiOutlineMail, } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, } from 'react-icons/bi'

const TopBar = () => {
    return (
        <div className='hidden md:block w-full bg-[#4AC87E] text-white '>
            <div className='flex items-center justify-between 2xl:container mx-auto h-10 px-5'>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <IoCall />
                        <Typography
                            variant='small'
                            className='ml-1'
                        >

                            +01790763887
                        </Typography>
                    </div>
                    <div className='flex items-center ml-16'>
                        <AiOutlineMail />
                        <Typography
                            variant='small'
                            className='ml-1'
                        >

                            tamimhasan@gmail.com
                        </Typography>
                    </div>
                </div>
                <div className='flex items-center'>

                    <div className='flex items-center gap-4'>
                        <Typography
                            variant='small'
                            className='ml-1'
                        >

                            Follow
                        </Typography>
                        <IconButton className="rounded text-xl text-[#4AC87E] w-6 h-6 bg-[white] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                            <BiLogoFacebook />
                        </IconButton>
                        <IconButton className="rounded text-xl text-[#4AC87E] w-6 h-6 bg-[white] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
                            <BiLogoTwitter />
                        </IconButton>
                        <IconButton className="rounded text-xl text-[#4AC87E] w-6 h-6 bg-[white] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                            <BiLogoLinkedin />
                        </IconButton>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopBar