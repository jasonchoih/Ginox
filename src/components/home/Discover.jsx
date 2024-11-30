import { Button } from "@nextui-org/button";

export default () =>
{
    return <div className="md:w-[1250px] m-auto text-center pt-5 md:pt-24">
        <div className="flex flex-col gap-5">
            <h1 className="leading-9 md:leading-[70px] md:max-w-[1000px] m-auto">
                Discover Crypto with Ginox - Your Ultimate Web3 Marketplace
            </h1>
            <p className="font-light md:text-[24px] md:w-[600px] m-auto">
                Join the future of crypto with a platform offering diverse crypto assets and products.
            </p>
            <div className="flex justify-center gap-2 mb-5 md:mb-24">
                <Button variant="flat" className="cta bg-[#369FEE]">
                    Sign Up Now
                    <img src='/static/images/signUp.svg' alt='signUp.svg' className="w-[20%]" />
                </Button> 
                <Button className="cta flex bg bo">
                    <img src='/static/images/learn.svg' alt='learn.svg' />
                    <p>Learn More</p>
                </Button> 
            </div>
            <div className="relative">
                <img 
                    src='/static/images/beam_light.png'
                    className="rounded-lg absolute z-10 bottom-0 left-0 md:left-9 w-[1300px] md:max-w-[1180px]"
                    alt="light_beam" 
                />
                <img 
                    src='/static/images/dashboard.svg'
                    className="rounded-lg md:w-[1044px] m-auto relative z-20 w-[88%]"
                    alt="dashboard" 
                />
            </div>
            
        </div>
    </div>
}