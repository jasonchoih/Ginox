import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper/modules';
import { Button } from "@nextui-org/button";
import dynamic from "next/dynamic";
// 
import 'swiper/css';
import 'swiper/css/scrollbar';
// 
const Tokens = dynamic(() => import('components/features/Tokens', {ssr: false}));
const Hardware = dynamic(() => import('components/features/Hardware', {ssr: false}));
const Decision = dynamic(() => import('components/features/Decision', {ssr: false}));
const Play = dynamic(() => import('components/features/Play', {ssr: false}));
const Education = dynamic(() => import('components/features/Education', {ssr: false}));
// 
export default () =>
{
    const swipers = [
        Tokens,
        Hardware,
        Decision,
        Play,
        Education
    ];
    // 
    // return <div className="md:max-w-[1352px] m-auto bg-[url('/static/images/features/bg.svg')]">
    return <div className="md:max-w-[1352px] m-auto">

        <div className='md:pt-16 flex justify-center'>
            <Button variant="flat" className="bg text-white w-[209px] h-[48px] rounded-[44px] text-[16px]">
                <img src='/static/images/feature.svg' alt='feature.svg' />
                Platform Features
            </Button> 
        </div>

        <Swiper
            slidesPerView={1}
            modules={[Scrollbar]}
            autoplay={{
                delay: 1500, disableOnInteraction: false,
            }}
            // className="mySwiper"
        >
            {swipers.map((v,k)=>(
                <SwiperSlide key={k}>
                    {v}
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
}