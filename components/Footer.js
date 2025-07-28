import Image from 'next/image';
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <div className='flex items-center justify-between py-20' id='contact-me'>
            <div className="space-y-3 text-white">
                <h2>Reach Out to me!</h2>
                <p className='text-gray-400'>Discuss a project or just want to say hi? My Inbox is open for all.</p>

                <p>Senior Software Engineer Md. Johurul Islam || Full-Stack</p>

                <SocialLinks/>
            </div>
            <div className="">
                <Image

                    src="https://iili.io/FNCaKN4.jpg"
                    alt="Picture of Md. Johurul Islam"
                    width={300}
                    height={300}
                    className='rounded-2xl'

                />
            </div>
        </div>
    );
};

export default Footer;