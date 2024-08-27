import tr, { navItems } from '../locales/tr'


const Footer = () => {
    return (
        <div className='flex flex-col'>
            <div className='bg-gray-500 flex flex-col justify-center md:flex-row p-10 gap-4 xl:gap-10 text-white'>
                <div className='flex flex-col md:max-w-[20%] '>
                    <span>{tr.footerAboutTitle}</span>
                    <span>{tr.footerAbout}</span>
                </div>

                <div className='flex flex-col md:max-w-[20%] gap-2 '>
                    <span>{tr.footerMenuTitle}</span>
                    {navItems.map(({ name }) => (
                        <span>
                            {name}
                        </span>
                    ))}
                </div>

                <div className='flex flex-col  md:max-w-[20%] gap-2'>
                    <span>{tr.footerContactTitle}</span>
                    <div className='flex flex-col'>
                        <span>{tr.addressNameTR}</span>
                        <span>{tr.addressDescriptionTR}</span>
                    </div>

                    <div className='flex flex-col'>
                        <span>{tr.phoneTR}</span>
                        <span>{tr.phoneTR2}</span>
                    </div>

                    <div>
                        <span>{tr.emailDE}</span>
                    </div>

                    <div>
                        <span>{tr.url}</span>
                    </div>

                </div>

                <div className='flex flex-col md:max-w-[20%] gap-2'>
                    <span>{tr.footerContactTitle}</span>
                    <div>
                        <span>{tr.addressNameDE}</span>
                    </div>

                    <div className='flex flex-col'>
                        <span>{tr.addressDescriptionDE}</span>
                        <span>{tr.phoneDe}</span>
                    </div>

                    <div>
                        <span>{tr.emailDE}</span>
                    </div>
                </div>

            </div>
            <div className='text-center bg-gray-600 text-white p-10 text-sm'>
                <span> {tr.copyrightText} </span>
            </div>

        </div>
    )
}

export default Footer