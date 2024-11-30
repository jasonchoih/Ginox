import { Button } from "@nextui-org/button";
// 
export default () =>
{
    const plans = [
        {
            title: 'Starter Plan',
            subtitle: 'For Crypto Enthusiast',
            trial: 'Free Trial',
            duration: 'month',
            cta: 'Get Started for free',
            features: [
                'Real-Time Analytics',
                'Community Access',
                'Marketplace Access',
                'Free Lottery Access',
                'Deposit and Instant Withdrawals'
            ]
        },
        {
            title: 'Standard Plan',
            subtitle: 'For Crypto Enthusiast',
            trial: '$100',
            duration: 'month',
            cta: 'Go Pro - Join Now',
            features: [
                'Real-Time Analytics',
                '24/7 Support',
                '24/7 Support',
                '24/7 Support',
                'Instant Transfers'
            ]
        },
        {
            title: 'Premium Plan',
            subtitle: 'For Crypto Enthusiast',
            trial: '$250',
            duration: 'month',
            cta: 'Join Elite now',
            features: [
                'Real-Time Analytics',
                '24/7 Support',
                '24/7 Support',
                '24/7 Support',
                'Instant Transfers'
            ]
        },
    ]
    // 
    return <>
        <div className="flex flex-col gap-10 md:max-w-[1300px] m-auto py-10 md:py-16">
            <div className="text-center">
                <h2>Choose Your Plan</h2>
            </div>
            <div className="text-center">
                <p>
                    Whether you’re new to crypto or an experienced Crypto Degen, Ginox has a plan that suits your needs. With flexible pricing, from our free basic plan to our premium features, there’s something for everyone.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {plans.map((v,k)=>(
                    <div 
                        key={k} 
                        className="bg md:col-span-4 p-5 rounded-[22px] bo bgt"
                    >
                        <h3 className="text-[20px]">{v.title}</h3>
                        <p className="text-[16px] text-[#BDBDBD]">{v.subtitle}</p>
                        <h2 className="text-[48px]">{v.trial}</h2>
                        <p className="text-[20px] text-[#BDBDBD] mb-5">/{v.duration}</p>
                        <Button 
                            className="bg h-[56px] text-[20px] text-white"
                            style={k==1? {backgroundColor:'#369FEE'} : {}}
                            fullWidth
                        >
                            {v.cta}
                        </Button>
                        <div className="relative flex items-center pt-8 pb-5 opacity-50">
                            <div className="flex-grow border-t border-[#E0E0E0]"></div>
                        </div>
                        <div className="text-[#BDBDBD] mb-2">Features:</div>
                        <div className="flex flex-col gap-3">
                            {v.features.map((vv,kk)=>(
                                <p key={kk} className="flex gap-2 text-[#BDBDBD] text-[18px]">
                                    <img src='/static/images/check.svg' className="bg-[#0E0D0D66] rounded-full p-1" />
                                    {vv}
                                </p>
                            ))}
                        </div>
                    </div>  
                ))}
            </div>
        </div>
    </>
}