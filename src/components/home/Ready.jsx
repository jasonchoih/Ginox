import { Button } from "@nextui-org/button";

export default () =>
{
    return <>
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-5 md:w-[1352px] md:h-[461px] m-auto bg px-3 md:px-10 border40 bo bgt py-8 md:py-0">
            <div className="col-span-6 flex flex-col gap-5 justify-center">
                <h2>Ready to Start? Join Ginox</h2>
                <p className="text-[20px]">Explore the endless possibilities of crypto with Ginox. Join our community, unlock new opportunities, and secure your digital journey with our trusted platform.</p>
                <div className="flex gap-5">
                    <Button variant="flat" className="cta bg-[#369FEE]">
                        Sign Up Now
                        <img src='/static/images/signUp.svg' alt='sign up' />
                    </Button> 
                    <Button className="cta flex bg">
                        <img src='/static/images/learn.svg' alt='learn' />
                        <p>Learn More</p>
                    </Button> 
                </div>
            </div>
            <div className="col-span-6">
                <img src='/static/images/ginox.svg' className="w-full" />
            </div>
        </div>
    </>
}