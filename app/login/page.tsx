'use client'
import { useState, FC, useEffect } from 'react';
import Image from 'next/Image';
import RedRoomSvg from '../src/customizeSVG/redRoomSvg';
import LogoIcon from '../icon/LogoIcon.svg';
import TM from '../icon/TM.svg';
import Globe from '../icon/Globe.png';
import EN from '../icon/EN.svg';
import Shape from '../icon/Shape.svg';
import { motion } from "framer-motion";
import AnimatedButton from '../src/components/shares/AnimatedButton';
import OtherLoginButton from '../src/components/shares/OtherLoginButton';
import google from '../icon/google-icon.svg';
import twitter from '../icon/twitter-icon.svg';
import facebook from '../icon/facebook-icon.svg';
import metamask from '../icon/metamask-icon.svg';



declare module "framer-motion" {
    interface MotionProps {
        variants?: Record<string, any>;
    }
}

const Login: FC = () => {
    const otherLoginClassName = "bg-[#18181C] border border-[#232329] w-full p-4 flex justify-center items-center rounded-2xl"

    const [isFlashing, setFlashing] = useState(false);

    const flashSequence = () => {
        setFlashing(true);
        setTimeout(() => {
            setFlashing(false);
        }, 100);
    };

    useEffect(() => {
        const flashingInterval = setInterval(() => {
            // Flash two times
            flashSequence();
            setTimeout(() => {
                flashSequence();
            }, 200);

        }, 3000);

        // Clear the interval when the component unmounts
        return () => clearInterval(flashingInterval);
    }, []);
    // console.log('isFlashing', isFlashing)

    const [isHovered, setHovered] = useState(false);
    const [isHoveredSlide, setHoveredSlide] = useState(false);

    const containerVariants = {
        hover: {
            width: '100%',
            transition: { duration: 0.3 },
        },
    };

    const textVariants = {
        hover: {
            opacity: 1,
        },
        initial: {
            opacity: 0,
        },
    };


    return (
        <>
            <div className="w-full h-screen md:w-screen p-10 grid-cols-2 items-center justify-center  ">
                <div className="w-full border-2 h-full p-2 rounded-3xl border-[#18181C] md:flex">
                    <div className="relative w-full h-full rounded-3xl hidden md:inline overflow-hidden">
                        {/* <div ref={ref} className={`relative w-full bg-no-repeat bg-center bg-cover bg-life-easier overflow-hidden h-full ${isFlashing ? 'modified-red-room' : 'red-room'}`}> */}

                        <div className="absolute top-0 left-0 w-full h-full z-0">
                            <RedRoomSvg className='' fill={isFlashing ? 'transparent' : '#FF0000'} />
                        </div>
                        {/* <div className='block z-10'> */}
                        <div className='relative z-10 w-full'>
                            <div className='relative z-10 p-2 flex h-full w-full  '>
                                <motion.div
                                    variants={containerVariants}
                                    initial="initial"
                                    animate={isHovered ? 'hover' : 'initial'}
                                    style={{ width: '45%', height: 'auto', padding: '2px 0px 2px 2px', marginRight: 4 }}
                                    className=' bg-[#F42728] rounded-lg flex overflow-hidden'
                                    // whileHover={{ width: '100%', height: 'auto', transition: { duration: 0.3 }, flexShrink: 1 }}
                                    onMouseEnter={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                >

                                    <span className='relative w-auto h-full flex-shrink-0 flex-grow-0 rounded-lg bg-black flex justify-center items-center p-2 mr-2 '>
                                        <Image src={LogoIcon} alt={'logo'} className="flex-shrink-0 flex-grow-0" />
                                    </span>


                                    <span className={`text-black font-black flex p-1  flex-shrink-0 flex-grow-0`}>
                                        NAKAMOTO
                                        <motion.div
                                            variants={textVariants}
                                            className={`text-black opacity-0
                        } hidden md:inline`}
                                        // whileHover={{ opacity: isHovered ? 100 : 0 }}
                                        >
                                            .GAMES
                                        </motion.div>

                                    </span>
                                    {/* <span className={` text-black font-black p-1 ${!isHovered ? 'pl-1' : 'pl-0'} flex-shrink-0 flex-grow-0`}>.GAMES</span> */}

                                </motion.div>
                                <span className='pr-3 flex-shrink-0'>
                                    <Image src={TM} alt='TM' />
                                </span>
                                <span className='border-r-2 h-3 my-3 border-[#232329]'></span>
                                <span className='flex justify-center items-center pl-4 flex-shrink-0'>
                                    <Image src={Globe} alt='IconLanuage' />
                                    <Image src={EN} alt='EN' className='ml-4 mr-4' />

                                    <motion.div
                                        className='border w-2 h-2 border-r-0 border-l-0  border-[#F42728]'
                                        whileHover={{ height: 0 }}
                                    />
                                </span>

                            </div>
                        </div>
                        <div className='relative z-10 h-5/6 flex items-end overflow-hidden'>
                            <div className=' w-full h-auto p-2 bg-[#18181C]'>
                                <div className='w-full inline-flex justify-start overflow-visible whitespace-nowrap '
                                    onMouseEnter={() => setHoveredSlide(true)}
                                    onMouseLeave={() => setHoveredSlide(false)}
                                >
                                    <motion.div
                                        className='animate-infinite-marquee inline-flex space-x-20'
                                        style={{ animationPlayState: isHoveredSlide ? 'paused' : '' }}
                                        initial={{ x: '0%' }}
                                        animate={{ x: '-100%' }}
                                        transition={{
                                            duration: 10, // Adjust the duration as needed
                                            ease: 'linear',
                                            repeat: Infinity,
                                        }}

                                    >
                                        <Image src={Shape} alt='Shape' />
                                        <span>SECUE. FUN. SIMPLE. EARN $NAKA AND ENJOY</span>
                                        <Image src={Shape} alt='Shape' />
                                        <span>SECUE. FUN. SIMPLE. EARN $NAKA AND ENJOY</span>
                                        <Image src={Shape} alt='Shape' />
                                        <span>SECUE. FUN. SIMPLE. EARN $NAKA AND ENJOY</span>
                                        <Image src={Shape} alt='Shape' />
                                        <span>SECUE. FUN. SIMPLE. EARN $NAKA AND ENJOY</span>
                                        <Image src={Shape} alt='Shape' />
                                        <span>SECUE. FUN. SIMPLE. EARN $NAKA AND ENJOY</span>
                                        <Image src={Shape} alt='Shape' />
                                        <span>SECUE. FUN. SIMPLE. EARN $NAKA AND ENJOY</span>
                                    </motion.div>
                                    <motion.div
                                        className='animate-infinite-marquee inline-flex space-x-20'
                                        style={{ animationPlayState: isHoveredSlide ? 'paused' : '' }}
                                        initial={{ x: '0%' }}
                                        animate={{ x: '-100%' }}
                                        transition={{
                                            duration: 10, // Adjust the duration as needed
                                            ease: 'linear',
                                            repeat: Infinity,
                                        }}
                                    >
                                        <Image src={Shape} alt='Shape' />
                                        <span>SECUE. FUN. SIMPLE. EARN $NAKA AND ENJOY</span>
                                        <Image src={Shape} alt='Shape' />
                                        <span>SECUE. FUN. SIMPLE. EARN $NAKA AND ENJOY</span>
                                        <Image src={Shape} alt='Shape' />
                                        <span>SECUE. FUN. SIMPLE. EARN $NAKA AND ENJOY</span>
                                        <Image src={Shape} alt='Shape' />
                                        <span>SECUE. FUN. SIMPLE. EARN $NAKA AND ENJOY</span>
                                        <Image src={Shape} alt='Shape' />
                                        <span>SECUE. FUN. SIMPLE. EARN $NAKA AND ENJOY</span>
                                        <Image src={Shape} alt='Shape' />
                                        <span>SECUE. FUN. SIMPLE. EARN $NAKA AND ENJOY</span>
                                    </motion.div>

                                </div>

                            </div>

                        </div>
                        {/* </div> */}


                    </div>



                    <div className='relative w-full h-full grid grid-cols-4  justify-center items-center overflow-auto lg:overflow-hidden p-6 lg:p-0 '>
                        <div className='col-span-1 bg-fuchsia-400'></div>

                        <div className='col-span-4 lg:col-span-2 block justify-center items-center'>
                            <div className='flex place-content-between p-2 uppercase font-black border-b border-[#18181C]'>
                                <div>
                                    Login
                                </div>
                                <div>
                                    <motion.div>
                                        button
                                    </motion.div>
                                </div>
                            </div>
                            <div id="content-login" className='p-0 m-0 lg:pt-10 lg:pb-40'>
                                <div className='leading-6 space-y-4 '>
                                    <div id='email' className='space-y-2'>
                                        <span className='uppercase'>email address</span>
                                        <input placeholder={`Email`} type={`email`} className={`w-full h-10 p-2 bg-[#18181C] border border-[#232329] rounded-xl `} />
                                        {/* <input placeholder={`${<Image src={email} alt={`email`}/>} Email`} type={`email`} className='w-full h-10 bg-[#18181C] border border-[#232329] rounded-xl' /> */}
                                    </div>
                                    <div id='password' className='space-y-2'>
                                        <span className='uppercase'>password</span>
                                        <input placeholder='Password' type={`password`} className='w-full' />
                                        <span className='uppercase'>a number or symbol, atleast 6 characters</span>
                                    </div>
                                </div>
                                <div className='w-full block grid-cols-3 gap-4 sm:grid mt-4'>
                                    <AnimatedButton title='Register' className={'w-max bg-red-700 overflow-hidden'} />
                                    <AnimatedButton title='Login' className={'w-max col-span-2  bg-amber-950'} />
                                </div>
                                <div className='uppercase flex justify-end col-span-1'>
                                    forget password
                                </div>
                            </div>


                            <fieldset id='other-login' className='border-t border-[#18181C]  grid-cols-2 grid md:grid-cols-4 gap-3 place-content-evenly  w-full h-auto pt-4 '>
                                <legend className='uppercase pr-10 '>or log in with</legend>
                                <OtherLoginButton icon={facebook} alt='facebook' className={otherLoginClassName}/>
                                <OtherLoginButton icon={google} alt='google' className={otherLoginClassName}/>
                                <OtherLoginButton icon={twitter} alt='twitter' className={otherLoginClassName}/>
                                <OtherLoginButton icon={metamask} alt='metamask' className={otherLoginClassName}/>
                            </fieldset>

                        </div>

                        <div className='col-span-1 bg-red-700'>
                            
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
export default Login