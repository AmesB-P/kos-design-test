'use client'
import { useState, FC, useEffect } from 'react';
import Image from 'next/image';
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
import EmailIcon from '../icon/EmailIcon.svg';
import lock from '../icon/lock-icon.svg';
import hidePassword from '../icon/hide-password-icon.svg';
import showPassword from '../icon/show-password-icon.svg';
import Arrow from '../icon/Arrow-icon.svg';
import ArrowInBox from '../icon/Arrow_in_Box_Right.svg';
import Copyright from '../icon/Copyright.svg';
import Sticker from '../icon/Sticker_animated_looped.svg';


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

    const otherLoginList = [
        {
            icon: facebook,
            alt: 'facebook'
        },
        {
            icon: google,
            alt: 'google'
        },
        {
            icon: twitter,
            alt: 'twitter'
        },
        {
            icon: metamask,
            alt: 'metamask'
        },
    ]

    const [isShowPassord, setIsShowPassord] = useState<boolean>(false);
    const [passwordType, setPasswordType] = useState<string>('password');
    const showPasswordFn = async () => {
        try {
            setIsShowPassord((prev) => {
                setPasswordType(() => !prev ? 'text' : 'password')
                return !prev
            })
        } catch (error) {

        }
    }

    const [isButtonHover, setIsButtonHover] = useState<boolean>(false)
    const [isButtonTap, setIsButtonTap] = useState<boolean>(false)

    return (
        <>
            <div className="w-full h-screen md:w-screen p-10 grid-cols-2 items-center justify-center  ">
                <div className="w-full border-2 h-full p-2 rounded-3xl border-[#18181C] md:flex">
                    <div className="relative w-full h-full rounded-3xl hidden md:inline overflow-hidden">

                        <div className="absolute top-0 left-0 w-full h-full z-0">
                            <RedRoomSvg className='' fill={isFlashing ? 'transparent' : '#FF0000'} />
                        </div>
                        <div className='relative z-10 w-full'>
                            <div className='relative z-10 p-2 flex h-full w-max  '>
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
                                            className={`text-black opacity-0 hidden md:inline`}
                                        >
                                            .GAMES
                                        </motion.div>

                                    </span>

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

                    <div className=' w-full h-full grid grid-cols-1 justify-center items-center overflow-auto lg:overflow-hidden p-6 lg:p-0 '>
                        <div className=' w-full h-full col-span-1 grid grid-cols-4  justify-center items-center overflow-auto lg:overflow-hidden p-6 lg:p-0 '>
                            <div className='col-span-1 bg-fuchsia-400'></div>

                            <div className='col-span-4 lg:col-span-2 block justify-center items-center'>
                                <div className='flex place-content-between p-2 uppercase font-black border-b border-[#18181C]'>
                                    <div>
                                        Login
                                    </div>

                                    <motion.div
                                    className={` w-8 h-8 grid grid-cols-1 justify-center items-center p-2 rounded-md ${isButtonTap ?'bg-[#7B5BE6]' : 'bg-[#FF0000]' } `}
                                    initial={{rotate : isButtonTap ? 0 : 45}}
                                    whileHover={{
                                        scale : 1.2,
                                        rotate : 0
                                    }}
                                    whileTap={{
                                        scale : 0.8
                                    }}
 
                                    onClick={()=>setIsButtonTap((prev)=>!prev)}
                                    onMouseEnter={() => setIsButtonHover(true)}
                                    onMouseLeave={() => setIsButtonHover(false)}
                                    >
                                        <motion.div
                                            initial={{rotate : -45}}
                                            animate={{rotate : isButtonHover ? 0 : isButtonTap ? 0 : -45}}
                                            className={`border border-white col-span-1 items-ceter ${isButtonTap ? 'h-4 border-r-0 border-l-0 transition duration-300 flex justify-center items-center ' : ''}`}
                                        >
                                            <div className={`${isButtonTap ? 'flex' : 'hidden'} border boder-white w-full`}></div>

                                        </motion.div>
                                    </motion.div>

                                </div>
                                <div id="content-login" className='p-0 m-0 lg:pt-10 lg:pb-40'>
                                    <div className='leading-6 space-y-4 '>
                                        <div id='email' className='space-y-2'>
                                            <span className='uppercase text-xs text-[#70727B]'>email address</span>
                                            <div className={`w-full h-10 p-2 flex justify-start items-center space-x-2 bg-[#18181C] border border-[#232329] rounded-xl hover:border-[#7B5BE6]`}>
                                                <Image src={EmailIcon} alt={`email`} className={`w-6 h-6`} />
                                                <input placeholder={`Email`} type={`email`} className={`placeholder:text-[#70727B] bg-transparent w-full h-auto border-0 focus:border-orange-400`} />
                                            </div>

                                        </div>
                                        <div id='password' className='space-y-2'>
                                            <span className='uppercase text-xs text-[#70727B]'>password</span>
                                            <div className={`w-full h-10 p-2 flex justify-start items-center space-x-2 bg-[#18181C] border border-[#232329] rounded-xl hover:border-[#7B5BE6]`}>
                                                <Image src={lock} alt={`email`} className={`w-6 h-6`} />
                                                <input placeholder={`Password`} type={passwordType} className={`placeholder:text-[#70727B]placeholder:text-[#70727B] bg-transparent w-full h-auto border-0 hover:border-0  focus:border-0`} />
                                                <motion.span whileTap={{ scale: 0.8 }} onClick={showPasswordFn}><Image src={isShowPassord ? showPassword : hidePassword} alt={`email`} className={`w-6 h-6`} /></motion.span>
                                            </div>

                                            <span className='uppercase text-xs text-[#4E5057]'>a number or symbol, atleast 6 characters</span>
                                        </div>
                                    </div>
                                    <div className='w-full block grid-cols-3 gap-4 sm:grid mt-4'>

                                        <motion.div
                                            whileHover={{
                                                scaleY: 1.2,
                                                originY: 0
                                            }}
                                            className='w-full h-fit flex justify-center items-center bg-transparent border border-[#232329] p-4 rounded-full overflow-hidden hover:flex-grow-0 hover:flex-shrink-0 '
                                        >
                                            Register
                                        </motion.div>
                                        <AnimatedButton title='Login' icon={ArrowInBox} className={'w-full h-full col-span-2 flex justify-center items-center bg-[#7B5BE6] rounded-full'} />
                                    </div>
                                    <div className='uppercase flex justify-end col-span-1 text-xs text-[#70727B] font-black mt-4'>
                                        forget password
                                    </div>
                                </div>


                                <fieldset id='other-login' className='border-t border-[#18181C]  grid-cols-2 grid md:grid-cols-4 gap-3 place-content-evenly  w-full h-auto pt-4 '>
                                    <legend className='uppercase pr-10 '>or log in with</legend>
                                    {
                                        otherLoginList.map((e, index) => (
                                            <OtherLoginButton key={index} icon={e.icon} alt={e.alt} className={otherLoginClassName} />
                                        ))
                                    }
                                </fieldset>


                            </div>

                            <motion.div
                                className='hidden lg:flex col-span-1 justify-end items-start h-full w-full'
                                
                            >
                                <Image src={Sticker} alt='Sticker' />
                            </motion.div>


                        </div>

                        <div className='col-span-1 flex justify-center items-end w-full h-full'>
                            <Image src={Copyright} alt='Copyright' />
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
export default Login