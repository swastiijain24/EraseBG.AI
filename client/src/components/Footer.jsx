import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
                <img width={150} src={assets.logo} alt="" />
                <p className='felx-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @SwastiJain | All right reserved.</p>
                <div className='flex gap-1 '>
                    <a href="https://www.linkedin.com/in/swastijain24" target="_blank" rel="noopener noreferrer">
                        <img width={40} src={assets.linkedin} alt="LinkedIn" />
                    </a>

                    <a href="https://github.com/swastiijain24" target="_blank" rel="noopener noreferrer">
                        <img width={40} src={assets.github} alt="GitHub" />
                    </a>

                    <a href="mailto:swastiijain24@gmail.com">
                        <img width={40} src={assets.mail} alt="Gmail" />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Footer