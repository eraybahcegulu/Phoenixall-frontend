
import { MdPhone } from 'react-icons/md'

import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import Navigation from './Navigation';
import { useLanguageStore } from '../stores/LanguageStore';
import { PHONE_TR } from '../constants/staticInfos';

const Header = () => {
    const { setIsChanged } = useLanguageStore();
    return (
        <div className='flex flex-col'>
            <div className='bg-purple-900 flex flex-col gap-4 items-center md:flex-row'>
                <div className='flex flex-row p-4 gap-2 md:border-r'>
                    <MdPhone className='text-white text-2xl' />
                    <span className='text-white'> {PHONE_TR}</span>
                </div>
                <div className='flex flex-row gap-2 pb-4 md:pt-4  text-white text-xl'>
                    <FaFacebook />
                    <BsTwitterX />
                    <FaLinkedin />
                    <span className='fixed top-0 right-5 md:top-5 md:right-10 flex flex-col items-end' onClick={setIsChanged}>
                        tr/en
                    </span>
                </div>
            </div>

            <div className='bg-gray-400 flex flex-col md:flex-row justify-between items-center p-6 gap-4'>
                <div className='cursor-pointer'>
                    PHOENIXALL
                </div>
                <Navigation />

            </div>
        </div>
    )
}

export default Header