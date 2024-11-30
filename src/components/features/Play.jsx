export default () =>
{
    const tokens = [
        {
            title: 'Tap-to-Earn Games',
            content: 'Participate in games where you can win tokens just by tapping and playing.',
            icon: 'gift'
        },
        {
            title: 'Multiplayer Games',
            content: 'Dive into a competitive crypto gaming environment with friends or other users for fun and rewards.',
            icon: 'multi'
        },
        {
            title: 'Lottery Games',
            content: 'Test your luck with lottery games for a chance to win rewards and enjoy the thrill—mostly for free!!',
            icon: 'game'
        }
    ]
    // 
    return <div className="py-16 flex flex-col gap-10">
        <h2 className="md:max-w-[590px] m-auto text-center">Crypto-Based Games: Play, Win and Earn</h2>
        <div className="grid grid-col-s md:grid-cols-12 gap-5">
            {tokens.map((v,k)=>(
                <div key={k} className="flex flex-col gap-3 md:col-span-4 rounded-[28px] bg bgt bo p-8 md:h-[446px]">
                    <h3 className="text-[24px] font-bold">{v.title}</h3>
                    <p className="text-[16px] opacity-70">{v.content}</p>
                    <div className="flex justify-center">
                        <img src={'/static/images/features/'+v.icon+'.png'} />
                    </div>
                </div>
            ))}
        </div>
    </div>
}