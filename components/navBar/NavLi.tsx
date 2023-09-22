import { ListItem, Typography } from '@material-tailwind/react'
import Link from 'next/link';
import React from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[];
    link: string;
}

const NavLi = ({ children, link }: Props) => {
    return (
        <Typography
            as="li"
            href="#"
            variant="paragraph"
            color="blue-gray"
            className="font-normal"
        >
            <ListItem className="flex items-center gap-2 py-2 pr-4 ">
                <Link href={link} className='hover:text-[#08B850]'>
                    {children}
                </Link>
            </ListItem>
        </Typography>
    )
}

export default NavLi