"use client";

import React from 'react';
import { Avatar, Typography } from '@material-tailwind/react';
import Image from 'next/image';
import SubmitSection from './SubmitSection';

const Hero = () => {
    return (
        <div className='2xl:container mx-auto md:flex gap-36 2xl:pl-[22px] pt-16 w-full mx-auto lg:h-[600px] relative'>
            
            {/* Hero Left Side Content  */}
            <div className="md:w-1/2 mx-auto h-4/5 pt-10 bg-[url('/heroBg.png')] bg-no-repeat">
                <div className='text-center lg:text-left'>
                    <Typography
                        variant='h1'
                        className='mb-5'
                    >
                        <span className='text-[#29AF60]'>Looking</span> to <br /> ride a car
                    </Typography>
                    <Typography
                        variant='paragraph'
                    >
                        Lorem ipsum dolor sit amet consectetur. <br /> Pharetra integer interdum
                    </Typography>
                    <div className='flex gap-6 mt-5'>
                        <Image src="/appStore.png" className='ml-auto lg:ml-0' width={105} height={42} alt='' />
                        <Image src="/playStore.png" className='mr-auto lg:mr-0' width={105} height={42} alt='' />
                    </div>
                </div>

                {/* Submit Section  */}
                <SubmitSection />
            </div>

            {/* Hero Right side car  */}
            <div className="hidden lg:block relative pt-20 md:w-1/2 bg-[url('/headerCarBg.png')] bg-no-repeat h-[95%] bg-center bg-contain">
                <Image src="/car.png" alt='' width={550} height={300} className='-ml-6 ' />
                <Avatar src="/steering-wheel.png" className='absolute -bottom-6 left-[47%] bg-[white] p-1' alt="avatar" />
            </div>

        </div>
    )
}

export default Hero