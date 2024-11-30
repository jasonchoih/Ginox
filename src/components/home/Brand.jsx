import Marquee from "react-fast-marquee";
// 
export default () =>
{
    const brands = [
        1,2,3,4,5
    ]
    // 
    return <div className="flex justify-evenly items-center w-full py-16">
        <Marquee>
            {brands.map((v,k)=>(
                <div key={k}>
                    <img src={`/static/images/brand/${v}.svg`} />
                </div>
            ))}
        </Marquee>
    </div>
}