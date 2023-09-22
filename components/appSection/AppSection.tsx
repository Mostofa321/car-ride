"use client";

import { Button, Typography } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'

const AppSection = () => {
    return (
        <div className="bg-gradient-to-r from-[#29AF60] to-[#2AB162] py-10 w-full mt-32  mb-20">
            <div className='relative 2xl:container mx-auto flex flex-col lg:flex-row items-center justify-around'>
                <div className='text-white text-center lg:text-left w-full lg:w-2/5'>
                    <Typography
                        variant='h2'
                    >
                        Lorem Ipsum
                    </Typography>
                    <Typography
                        className='mt-2 mb-8'
                    >
                        Your pick of rides at low pricesYour pick of <br /> rides at low pricesYour pick of rides
                    </Typography>
                    <Button className='bg-[white] text-[#232325]'>
                        Explore More
                    </Button>
                </div>
                <div className=' w-full lg:w-2/5'>
                    <div className=' lg:absolute -bottom-[28%] right-0 z-0 '>
                        <Image
                            src="/car2.png"
                            width={612}
                            height={408}
                            alt=''
                            className='mx-auto'
                        />
                    </div>
                    <div className='w-40 h-16 p-3 rounded absolute -bottom-[17%] lg:-bottom-[40%] right-0 z-10 bg-[white] shadow-2xl'>
                        <Typography variant='h6'>
                            2000+
                        </Typography>
                        <Typography variant='small'>
                            Apps Downloader
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppSection