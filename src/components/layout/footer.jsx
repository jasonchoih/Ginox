export default () =>
{
    const company = {
        logo: '/static/images/logo.svg',
        street: <>647 The Hawthorns, <br/> Daughertytown 35641-3026</>,
        phone: '643-289-4646 x58296',
        mail: 'info@ginox.io'
    }
    // 
    const menus = [
        {
            title: 'Buy with Confidence',
            sub: {
                cash: 'Cash Back',
                safety: 'Safety Guidlines',
                pr: 'Payment and Refunds'
            }
        },
        {
            title: 'Sell with Pride',
            sub: {
                rules: 'Rules',
                payout: 'Payouts',
                donate: 'We Donate Together'
            }
        },
        {
            title: 'Support and Help Center',
            sub: {
                help: 'Help Center',
                influence: 'Influencer Programs'
            }
        }
    ];
    // 
    const socials = ['fb', 'gg', 'ig'];
    // 
    return <>
        <div className="grid grid-cols-1 md:grid-cols-12 md:w-3/4 m-auto md:px-0 px-2">

            <div className="md:col-span-4 flex flex-col gap-5">
                {Object.keys(company).map(k=>(
                    <div key={k}> 
                        {k=='logo' ? <img src={company[k]} className="w-1/3" /> : <p className="text-[16px]">{company[k]}</p>}
                    </div>
                ))}
            </div>

            <div className="md:col-span-8 grid grid-cols-1 md:flex md:justify-evenly">
                {Object.keys(menus).map(k=>(
                    <div key={k} className="flex flex-col gap-5">
                        <h3 className="mb-5 text-[20px]">{menus[k].title}</h3>
                        {Object.keys(menus[k]['sub']).map(kk=>(
                            <p key={kk} className="text-[16px]">{menus[k]['sub'][kk]}</p>
                        ))}
                        {k==2&&<div className="flex gap-2">
                            {socials.map((vvv,kkk)=>(
                                <div key={kkk}>
                                    <img src={`/static/images/footer/${vvv}.svg`} />
                                </div>
                            ))}
                        </div>}
                       
                    </div>
                ))}
            </div>
        
        </div>

        <div className="relative flex items-center md:w-3/4 m-auto py-10 opacity-50">
            <div className="flex-grow border-t border-[#E0E0E0]"></div>
        </div>

        <div className="flex justify-center w-full pb-10">
            <p className="text-[16px] text-[#E0E0E0]">© 2024 — Copyright Ginox</p>
        </div>
    </>
}