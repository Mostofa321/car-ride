"use client";

import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Rating,
} from "@material-tailwind/react";
import Image from 'next/image';
import DriverCard from './DriverCard';

const ServicesSection = () => {
    return (
        <div className='text-center p-5 md:p-0 2xl:container mx-auto mt-20'>
            <Typography
                variant='h3'

            >
                Our Top Drivers
            </Typography>
            <Typography variant='small' className='text-xl text-[#646464] mt-2'>
                Your pick of rides at low pricesYour pick of rides at low <br /> pricesYour pick of rides at low pr
            </Typography>

            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 mx-auto ">
                
                <DriverCard
                    driverImg='/driver1.png'
                    imgBgColor='#f1b133'
                    name='Tamim Hasan'
                />

                <DriverCard
                    driverImg='/driver2.png'
                    imgBgColor='#ef4444'
                    name='Likhon Rahman'
                />

                <DriverCard
                    driverImg='/driver3.png'
                    imgBgColor='#4cc7eb'
                    name='Asif Khan'
                />

                <DriverCard
                    driverImg='/driver4.png'
                    imgBgColor='#29af60'
                    name='Muhammad  Naim'
                />
                
                
            </div>
        </div >
    )
}

export default ServicesSection