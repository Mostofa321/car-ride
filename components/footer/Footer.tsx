import React from 'react'
import { Typography } from '@material-tailwind/react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter, } from 'react-icons/bs'

const LINKS = [
    {
        title: "Quick Link",
        items: ["Home", "Privacy Policy", "Terms & condition",],
    },
    {
        title: "About US",
        items: ["Meet the team", "Our story", "Career",],
    },
];

const Footer = () => {
    return (
        <div className='w-full bg-[black] pt-40 pb-10'>
            <footer className="relative 2xl:container mx-auto text-white">
                <div className="mx-auto w-full max-w-7xl px-8">

                    {/* Footer Grid Start */}
                    <div className="grid grid-cols-1 justify-between gap-8 md:grid-cols-5">
                        {/* First Col Of Footer  */}
                        <div className='col-span-2'>
                            <Typography variant="h3" className="mb-6">
                                Logo
                            </Typography>
                            <Typography className=" opacity-50">
                                Your pick of rides at low pricesYour pick of rides at low pricesYour pick of rides at low praYour pick of rides at low pricesYour pick of rides at low
                            </Typography>
                        </div>

                        {/* Second And Third Col Of Footer */}
                        <div className="col-span-2 grid grid-cols-2 justify-between gap-4">
                            {LINKS.map(({ title, items }) => (
                                <ul key={title}>
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="mb-3 font-medium  text-[white]"
                                    >
                                        {title}
                                    </Typography>
                                    {items.map((link) => (
                                        <li key={link}>
                                            <Typography
                                                as="a"
                                                href="#"
                                                color="white"
                                                className="py-1.5 font-normal opacity-50 transition-colors hover:opacity-75"
                                            >
                                                {link}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>

                        {/* Forth Col Of Footer  */}
                        <div>
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-3 font-medium  text-[white]"
                            >
                                Contact
                            </Typography>
                            <Typography
                                color="white"
                                className="py-1.5 font-normal opacity-50 transition-colors "
                            >
                                301.  Asia Building. Dhaka
                                Bangladesh
                            </Typography>
                            <Typography
                                color="white"
                                className="py-1.5 mt-2 font-normal opacity-50 transition-colors "
                            >
                                +1 - 123 -340 -1455
                                tamimhasa@gmail.com
                            </Typography>
                        </div>
                    </div>
                    {/* Footer Grid End */}

                    {/* Copyright And Social Aria  */}
                    <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                        {/* Copyright Aria  */}
                        <Typography
                            variant="small"
                            className="mb-4 text-center font-normal text-[white] opacity-50 md:mb-0"
                        >
                            Copyright Upnway &copy; All time reserved
                        </Typography>
                        
                        {/* Social Aria */}
                        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                            <Typography as="a" href="#" className="text-[#4AC87E] opacity-80 transition-opacity hover:opacity-100">
                                <FaFacebookF />
                            </Typography>
                            <Typography as="a" href="#" className="text-[#4AC87E] opacity-80 transition-opacity hover:opacity-100">
                                <BsTwitter />
                            </Typography>
                            <Typography as="a" href="#" className="text-[#4AC87E] opacity-80 transition-opacity hover:opacity-100">
                                <FaLinkedinIn />
                            </Typography>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer