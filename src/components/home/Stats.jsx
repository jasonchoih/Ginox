import CountUp from 'react-countup';
// 
export default () =>
{
    const stats = [
        {
            stat: 1500,
            title: 'Trained Referral Sellers'
        },
        {
            stat: 2,
            title: 'In Sales in the Last Quarters'
        },
        {
            stat: 50000,
            title: 'Marketplace Users'
        }
    ];
    // 
    return <>
        <div className={"text-center md:max-w-[1300px] m-auto md:h-[675px] bg-[url('/static/images/50.svg')] bg-auto bg-right-bottom bg-no-repeat border40 bo py-8 px-2"}
        >

            <div className="flex flex-col justify-center items-center gap-5 size-full">

                <div>
                    <h2>Key Stats</h2>
                    <p className="text-[20px] md:w-[890px]">
                        Ginox provides a comprehensive crypto solution, offering versatile services that onboard new family members in our Ginox Community. 
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 max-w-[1035px] items-center">
                    {stats.map((v,k) => (
                        <div 
                            key={k} 
                            className={"circle " + (k==1 ? "col-span-6 text-[48px] md:text-[96px] h-[250px] w-[250px] md:h-[443px] md:w-[443px]" : "col-span-3 h-[250px] md:h-[50%] w-[250px] md:w-full text-[20px] md:text-[32px]")}
                        >
                            
                            <h3>
                                <CountUp end={v.stat} delay={2} duration={1} /> {k==1? 'M+' : '+'}
                            </h3>
                            <p className={"opacity-60 w-full " + (k==1 ? "text-[12px] md:text-[24px]" : "text-[16px]") }>
                                {v.title}
                            </p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}