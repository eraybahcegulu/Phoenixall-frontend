
import { MdPhone } from 'react-icons/md'
import tr from "../locales/tr";
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='flex flex-col'>
            <div className='bg-purple-900 flex flex-col gap-4 items-center md:flex-row'>
                <div className='flex flex-row p-4 gap-2 md:border-r'>
                    <MdPhone className='text-white text-2xl' />
                    <span className='text-white'> {tr.phoneTR}</span>
                </div>
                <div className='flex flex-row gap-2 pb-4 md:pt-4  text-white text-xl'>
                    <FaFacebook />
                    <BsTwitterX />
                    <FaLinkedin />
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