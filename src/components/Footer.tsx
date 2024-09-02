import { EMAIL_DE, PHONE_DE, PHONE_TR, PHONE_TR_2, URL } from '../constants/staticInfos';
import {
    footerAboutTitleTexts,
    footerAboutTexts,
    footerMenuTitleTexts,
    footerContactTitleTexts,
    addressNameTRTexts,
    addressDescriptionTRTexts,
    addressNameDETexts,
    copyrightTextTexts,
    addressDescriptionDETexts
} from '../constants/strings'

import { navItems } from '../constants/strings';
import { useLanguageStore } from '../stores/LanguageStore';

const Footer = () => {
    const { language  } = useLanguageStore();
    return (
        <div className='flex flex-col'>
            <div className='bg-gray-500 grid md:grid-cols-2 xl:grid-cols-4 justify-center md:flex-row p-10 gap-10 text-white'>
                <div className='flex flex-col text-center  '>
                    <span>{footerAboutTitleTexts[language]}</span>
                    <span>{footerAboutTexts[language]}</span>
                </div>

                <div className='flex flex-col  gap-2 text-center  '>
                    <span>{footerMenuTitleTexts[language]}</span>
                    {navItems[language].map(({ name }) => (
                        <span>
                            {name}
                        </span>
                    ))}
                </div>

                <div className='flex flex-col gap-2  text-center '>
                    <span>{footerContactTitleTexts[language]}</span>
                    <div className='flex flex-col'>
                        <span>{addressNameTRTexts[language]}</span>
                        <span>{addressDescriptionTRTexts[language]}</span>
                    </div>

                    <div className='flex flex-col'>
                        <span>{PHONE_TR}</span>
                        <span>{PHONE_TR_2}</span>
                    </div>

                    <div>
                        <span>{EMAIL_DE}</span>
                    </div>

                    <div>
                        <span>{URL}</span>
                    </div>

                </div>

                <div className='flex flex-col gap-2  text-center'>
                    <span>{footerContactTitleTexts[language]}</span>
                    <div>
                        <span>{addressNameDETexts[language]}</span>
                    </div>

                    <div className='flex flex-col'>
                        <span>{addressDescriptionDETexts[language]}</span>
                        <span>{PHONE_DE}</span>
                    </div>

                    <div>
                        <span>{EMAIL_DE}</span>
                    </div>
                </div>

            </div>
            <div className='text-center bg-gray-600 text-white p-10 text-sm'>
                <span> {copyrightTextTexts[language]} </span>
            </div>

        </div>
    )
}

export default Footer