import Image from 'next/image';
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <div className='flex items-center justify-between py-20' id='contact-me'>
            <div className="space-y-3 text-white">
                <h2>Reach Out to me!</h2>
                <p className='text-gray-400'>Discuss a project or just want to say hi? My Inbox is open for all.</p>
                <p>Software Engineer LA Mridul || Full-Stack</p>
                <SocialLinks/>
            </div>
            <div className="">
                <Image
                    src="https://iili.io/FEDTxUX.png"
                    alt="Picture of LA Mridul"
                    width={300}
                    height={300}
                />
            </div>
        </div>
    );
};

export default Footer;