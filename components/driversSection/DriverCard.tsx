import React, {FC} from 'react'
import { Card, CardFooter, CardHeader, Rating, Typography } from '@material-tailwind/react'
import Image from 'next/image'

interface CardProps {
    driverImg? : string;
    imgBgColor?: string;
    name?: string;
}

const DriverCard: FC<CardProps> = ({driverImg, imgBgColor, name}) => {
    return (
        <Card className="max-w-[24rem] overflow-hidden mx-auto">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className={`m-0 rounded-none  `}
                style={{background: imgBgColor}}
            >
                <Image
                    src={`${driverImg}`}
                    alt="ui/ux review check"
                    width={271}
                    height={244}
                    className='mx-auto'
                />
            </CardHeader>

            <CardFooter className="flex-col items-center justify-center bg-[transparent] ">
                <Typography variant='h5' className="mb-4 ">
                    {name}
                </Typography>
                <Rating value={5} readonly />
            </CardFooter>
        </Card>
    )
}

export default DriverCard