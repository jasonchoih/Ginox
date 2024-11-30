export default () =>
{
    const tokens = [
        {
            title: 'Copy Trade',
            content: 'Automatically mirror top traders to maximize your returns with zero effort.',
            icon: 'copy'
        },
        {
            title: 'Crypto Signal Channels',
            content: 'Receive real-time trade signals from expert traders straight to your dashboard.',
            icon: 'signal'
        },
        {
            title: 'Crypto Box (Staking)',
            content: 'Earn passive income by staking your tokens in the centralized Crypto Box.',
            icon: 'box'
        }
    ]
    return <div className="py-5 md:py-16 flex flex-col gap-5 md:gap-10">
        <h2 className="md:max-w-[590px] m-auto text-center">Crypto Tokens: A World of Digital Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {tokens.map((v,k)=>(
                <div key={k} className="flex flex-col md:gap-3 md:col-span-4 rounded-[28px] bg bgt bo p-8 md:h-[446px]">
                    <h3 className="text-[24px] font-bold">{v.title}</h3>
                    <p className="text-[16px] opacity-70">{v.content}</p>
                    <div>
                        <img src={'/static/images/features/'+v.icon+'.svg'} />
                    </div>

                </div>
            ))}
        </div>
    </div>
}