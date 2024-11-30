import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/react";
import Marquee from "react-fast-marquee";
// 
export default () =>
{
    const stories = [
        {
            content: 'The signal channels on Ginox provide real-time insights that helped me make smarter, more profitable trades.',
            name: 'Rachel Adams',
            title: 'Crypto Enthusiast'
        },
        {
            content: 'Staking on Ginox’s Crypto Box has been an easy way to earn passive income. Simple and rewarding!',
            name: 'David Lee',
            title: 'Community Member'
        },
        {
            content: 'The token lottery is exciting and profitable—I’ve won twice already and seen my earnings grow.',
            name: 'Sophia Brown',
            title: 'Investor and Gamer'
        },
        {
            content: 'As a beginner, Ginox made crypto trading easy and accessible. I’m seeing great returns with minimal effort.',
            name: 'Rachel Adams',
            title: 'Crypto Enthusiast'
        },
        // 
        {
            content: 'Ginox offers everything I need in one place—copy trading, staking, and even fun games. ',
            name: 'Emily Harris',
            title: 'Investor and Gamer'
        },
        {
            content: 'I love the referral program on Ginox—I’ve earned tokens just by inviting friends to join!',
            name: 'Alex Morgan',
            title: 'Long-term Investor'
        },
        {
            content: 'The Ginox platform has been my go-to for staking and trading. The user experience is fantastic!',
            name: 'Daniel Carter',
            title: 'Active Trader'
        },
        {
            content: 'Ginox offers everything I need: copy trade, staking, and signals—all in one platform. Highly recommend!',
            name: 'Ella Martinez',
            title: 'Long-term Investor'
        },
    ]
    // 
    return <>

        <div className="flex flex-col justify-center items-center py-8 md:py-16 gap-5">

            <div className="text-center flex flex-col gap-2 py-3">
                <h2>Success Stories</h2>
                <p>Discover crypto opportunities, trade smart, and stake with ease.</p>
            </div>
            
            <Marquee>
                <div className="flex gap-5 px-2">
                    {stories.slice(0,4).map((v,k)=>(
                        <div 
                            key={k} 
                            className="flex flex-col gap-3 bg bo bgt border-md p-8 rounded-xl md:min-h-72"
                        >
                            <img src='/static/images/quote.svg' width="32" height="35" />
                            <p className="md:min-h-32 max-w-96">{v.content}</p>
                            <div>
                                <User   
                                    name={v.name}
                                    description={v.title}
                                    avatarProps={{
                                        src: '/static/images/users/'+(k+1)+'.svg'
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>

            <Marquee
                direction="right"
            >
                <div className="flex gap-5 px-2">
                    {stories.slice(0,4).map((v,k)=>(
                        <div 
                            key={k} 
                            className="flex flex-col gap-3 bg bo bgt border-md p-8 rounded-xl md:min-h-72"
                        >
                            <img src='/static/images/quote.svg' width="32" height="35" />
                            <p className="md:min-h-32 max-w-96">{v.content}</p>
                            <div>
                                <User   
                                    name={v.name}
                                    description={v.title}
                                    avatarProps={{
                                        src: '/static/images/users/'+(k+1)+'.svg'
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>

            <div className="py-10">
                <Button variant="flat" className="bg text-white bo md:w-[395px] h-[72px] rounded-[44px] text-[20px]">
                    Start Your Success Story Today
                    <img src='/static/images/signUp.svg' alt='signUp.svg' />
                </Button> 
            </div>


        </div>

        
        
    </>
}