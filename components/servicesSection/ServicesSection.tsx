"use client";

import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from '@material-tailwind/react'
import Image from 'next/image';
import ServiceItem from './ServiceItem';

const ServicesSection = () => {
    return (
        <div className='text-center 2xl:container mx-auto mt-10'>
            <Typography
                variant='h3'

            >
                Lorem ipsum dolor sit <br /> amet consectetur.
            </Typography>
            <Typography className='text-xl text-[#646464] mt-2'>
                Lorem ipsum dolor sit a m dolor
            </Typography>

            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-auto w-full">
                <ServiceItem
                    cardTytle='Your pick of rides at low prices'
                    description='Your pick of rides at low pricesYour pick of rides at low pricesYour pick of rides at low pr'
                    imageSre='/money-coin.png'
                />
                <ServiceItem
                    cardTytle='Trust who you travel with'
                    description='Your pick of rides at low pricesYour pick of rides at low pricesYour pick of rides at low pr'
                    imageSre='/trust.png'
                />
                <ServiceItem
                    cardTytle='Scroll, click, tap and go!'
                    description='Your pick of rides at low pricesYour pick of rides at low pricesYour pick of rides at low pr'
                    imageSre='/power.png'
                />
            </div>
        </div >
    )
}

export default ServicesSection