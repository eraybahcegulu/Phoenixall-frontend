import { useEffect, useState } from 'react'
import { navItems } from '../locales/tr'
import { FiMenu } from 'react-icons/fi';
import { Drawer } from 'antd';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Navigation = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const closeDrawer = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='max-w-full text-nowrap xl:text-sm text-xs font-bold'>
            <ul className='hidden xl:flex flex-row md:gap-10'>
                {navItems.map(({ name }) => (
                    <span>
                        <li className='cursor-pointer'>
                            {name}
                        </li>
                    </span>
                ))}
            </ul>
            <span className='xl:hidden text-2xl cursor-pointer' onClick={showDrawer}>
                <FiMenu />
            </span>

            <Drawer
                style={{background: 'linear-gradient(to right, #2e026d, #15162c)' }}
                closable={false}
                open={open}
                onClose={closeDrawer}
            >
                <div className='flex flex-col items-center text-center justify-center gap-2 text-white'>
                    <div className='flex w-full  justify-center' >
                        <MdOutlineKeyboardArrowRight className='text-2xl cursor-pointer hover:scale-125 transition-all' onClick={closeDrawer} />
                    </div>
                    <ul className='flex flex-col gap-5 '>
                        {navItems.map(({ name }) => (
                            <span>
                                <li className='text-base flex items-center justify-center cursor-pointer hover:text-black hover:bg-white py-4 px-20 rounded-xl'>
                                    {name}
                                </li>
                            </span>
                        ))}
                    </ul>
                </div>
            </Drawer>
        </div>
    )
}

export default Navigation