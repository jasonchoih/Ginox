export default () =>
{
    const tokens = [
        {
            title: 'Crypto Signals Subscriptions',
            content: 'Gain insights from crypto experts with our subscription service, designed to guide you in the fast-paced crypto market.',
            icon: 'graph'
        },
        {
            title: 'Crypto-Based VPNs',
            content: 'Ensure private, encrypted online access with crypto-based VPNs, giving you an added layer of security in every transaction.',
            icon: 'lock'
        }
    ]
    // 
    return <div className="py-16 flex flex-col gap-10">
        <h2 className="md:max-w-[590px] m-auto text-center">Crypto-Based Services: Tools for Smarter Decisions</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {tokens.map((v,k)=>(
                <div key={k} className="flex flex-col gap-3 md:col-span-6 rounded-[28px] bg bgt bo p-8 md:h-[446px]">
                    <h3 className="text-[24px] font-bold">{v.title}</h3>
                    <p className="text-[16px] opacity-70">{v.content}</p>
                    <div className="flex justify-center">
                        <img src={'/static/images/features/'+v.icon+'.svg'} />
                    </div>
                </div>
            ))}
        </div>
    </div>
}