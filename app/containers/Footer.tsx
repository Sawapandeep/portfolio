'use client';

import { github, instagram, linkedin, twitter } from '@/public/Icon/import';
import possibility from '@/public/Images/possibility.png';
import bg from '@/public/Svg/bg.svg';

import Image from 'next/image';
import Link from 'next/link';
import NewtonCradle from '../components/myui/NewtonCradle';

// Ensure that newtonsCradle is registered if needed


const Footer = () => {


    return (
        <div id="SectionFooter" className="relative" >
            <div
                id="BackgroundLayer"
                className="absolute inset-0 z-0 h-auto bg-[linear-gradient(180deg,black,transparent_76%)]"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8) 100%), linear-gradient(180deg,rgba(0, 0, 0, 1),rgba(0,0,0,0)76%) ,url(${possibility.src}) ,url(${bg.src})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <div id="FooterContainer" className="w-[90vw] max-w-[1360px] mx-auto">
                <div id="PaddingFooter" className="pt-[120px] pb-[40px] max-md:pt-[80px] max-md:pb-[64px]">
                    <div id="FooterTextWrapper" className="relative max-w-[640px] mx-auto mb-[120px] text-white text-center">
                        <div id="MarginBottomSmall" className="mb-[24px]">
                            <h2 id="FooterHeading" className="text-[56px] font-medium leading-[1.2]">Much more to explore and implement <NewtonCradle /></h2>
                        </div>
                        <div id="MarginBottomMedium" className="mb-[32px] max-md:mb-[24px]">
                            <h4 id="FooterSubheading" className="text-[32px] leading-[1.2] drop-shadow-lg" style={{ textShadow: '2px 2px 14px #67e8f9' }}>
                                Stay in the loop for future Updates
                            </h4>
                        </div>
                        <div id="MarginBottomLarge" className="mb-[40px] "></div>
                    </div>
                    <div id="FooterCreditsWrapper" className="relative z-3 flex justify-between items-center max-md:flex-col-reverse">
                        <p id="Copyright" className="text-xl leading-[1.2] font-normal">&copy; 2024</p>
                        <p id="FooterLinks" className='flex flex-row justify-between gap-3 max-md:gap-2'>
                            <Link href="https://github.com/Sawapandeep" target="_blank" rel="noreferrer">
                                <Image src={github} alt="github" className='w-[50px] h-[50px] transition-all duration-[400ms] ease-[ease] hover:translate-x-0 hover:-translate-y-0.5 hover:scale-110' />
                            </Link>
                            <Link href="https://www.linkedin.com/in/sawapandeep-singh-6984aa243/" target="_blank" rel="noreferrer">
                                <Image src={linkedin} alt="linkedin" className='w-[50px] h-[50px] transition-all duration-[400ms] ease-[ease] hover:translate-x-0 hover:-translate-y-0.5 hover:scale-110' />
                            </Link>
                            <Link href="https://x.com/_LuWii_" target="_blank" rel="noreferrer">
                                <Image src={twitter} alt="twitter" className='w-[50px] h-[50px] transition-all duration-[400ms] ease-[ease] hover:translate-x-0 hover:-translate-y-0.5 hover:scale-110' />
                            </Link>
                            <Link href="https://www.instagram.com/_sawapan/" target="_blank" rel="noreferrer">
                                <Image src={instagram} alt="instagram" className='w-[50px] h-[50px] transition-all duration-[400ms] ease-[ease] hover:translate-x-0 hover:-translate-y-0.5 hover:scale-110' />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

