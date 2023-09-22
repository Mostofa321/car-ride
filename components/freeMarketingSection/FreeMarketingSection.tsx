"use client";

import { Button, Typography } from '@material-tailwind/react'
import React from 'react'

const FreeMarketingSection = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-around 2xl:container mx-auto bg-gradient-to-r from-[#87E8AF] to-[#AED4BE] py-8 rounded-xl -mb-24 mt-10 mx-5 px-3 lg:px-0 lg:mx-0'>
            <div className='md:w-2/5'>
                <Typography
                    variant='h3'
                >
                    Get free marketing analysis?
                </Typography>
                <Typography
                    className='text-[#646464] mt-2'
                >
                    Your pick of rides at low pricesYour pick of rides at low pricesYour pick of rides at low praYour pick of rides at low pricesYour pick of rides at loYour pick of rides at low pricesYour pick of
                </Typography>
            </div>
            <div>
                <Button className='bg-[#29AF60] p-5 mt-5 md:mt-0'>
                    Contact Today
                </Button>
            </div>
        </div>
    )
}

export default FreeMarketingSection