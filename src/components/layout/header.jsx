'use client'
import { useState } from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
// 
export default () =>
{
    const [ active, setActive ] = useState('home');
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    // 
    const menus = {
        'home': 'Home',
        'services': 'Services',
        'traders': 'Traders list',
        'blog': 'Blog',
        'company': 'Company'
    }
    const menuItems = [
        "Home",
        "Services",
        "Traders list",
        "Blog",
        "Company"
    ];
    // 
    return <div className="md:max-w-[894px] m-auto pt-3"> 
        <div className="bg bo hidden md:grid md:grid-cols-12 items-center border40 p-4">
            <div className="col-span-3">
                <Image 
                    src='/static/images/logo.svg'
                    priority
                    width={136} 
                    height={40} 
                    alt="logo"
                />
            </div>
            <div className="col-span-6 hidden md:flex justify-between px-2">
                {Object.keys(menus).map(k=>
                    <Link 
                        key={k} 
                        href={'#'}
                        onClick={()=>setActive(k)}
                    >
                        <p className={"text-[16px] text-white " + (active==k ? 'font-bold' : 'opacity-80')}>
                            {menus[k]}
                        </p>
                    </Link>
                )}
            </div>
            <div className="col-span-3 flex justify-end">
                <Button variant="bordered" size='md' className="rounded-[200px] border-[1px] px-6 font-extralight text-white">
                    Login
                </Button> 
            </div>
        </div>
        <div className="block md:hidden">
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                    <Image 
                        src='/static/images/logo.svg'
                        width={136} 
                        height={40} 
                        alt="logo"
                    />
                    </NavbarBrand>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={index}>
                            <Link
                                color="primary"
                                className="w-full pt-3"
                                href="#"
                                size="lg"
                            >
                            {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    </div>
}