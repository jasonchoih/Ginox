export default () =>
{
    const tokens = [
        {
            title: 'Copy Trade',
            content: 'Protect your assets with trusted, top-rated crypto wallets, designed to keep your tokens safe in the digital world',
            icon: 'wallet'
        },
        {
            title: 'Crypto Phones',
            content: 'Connect with crypto on-the-go with phones built for blockchain security, ensuring seamless transactions from wherever you are.',
            icon: 'phone'
        }
    ]
    // 
    return <div className="py-16 flex flex-col gap-10">
        <h2 className="md:max-w-[590px] m-auto text-center">Hardware Crypto Products: Secure Your Digital Assets</h2>
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