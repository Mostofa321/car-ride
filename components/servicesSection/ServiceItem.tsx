"use client";
import React, {FC} from 'react'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import Image from 'next/image'

interface CardProps {
    cardTytle?: string;
    description?: string;
    imageSre?: string;

}

const ServiceItem : FC<CardProps> = ({cardTytle, description, imageSre}) => {
    return (
        <div className="hover:bg-[url('/rectangle.png')] bg-no-repeat bg-right-bottom p-3 transition duration-700 ease-in-out">
            <Card className=" bg-[#F9F9F9] hover:bg-[white] hover:shadow-2xl shadow-none text-center p-5 transition duration-300 ease-in-out">
                <CardBody>
                    <Image src={`${imageSre}`} className='mx-auto mb-7' alt='money-coin image' width={97} height={88} />
                    <Typography variant="h6" color="blue-gray" className="mb-2 text-lg">
                        
                        {cardTytle}
                    </Typography>
                    <Typography className='text-justify'>
                        {description}
                    </Typography>
                </CardBody>
            </Card>
        </div>
    )
}

export default ServiceItem