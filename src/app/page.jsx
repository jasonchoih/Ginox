'use client'
import dynamic from "next/dynamic";
const Header = dynamic(() => import('components/layout/header', {ssr: false}));
const Discover = dynamic(() => import('components/home/Discover', {ssr: false}));
const About = dynamic(() => import('components/home/About', {ssr: false}));
const Stats = dynamic(() => import('components/home/Stats', {ssr: false}));
const Simplify = dynamic(() => import('components/home/Simplify', {ssr: false}));
const Features = dynamic(() => import('components/home/Features', {ssr: false}));
const Why = dynamic(() => import('components/home/Why', {ssr: false}));
const Plan = dynamic(() => import('components/home/Plan', {ssr: false}));
const Ready = dynamic(() => import('components/home/Ready', {ssr: false}));
// const Success = dynamic(() => import('components/home/Success', {ssr: false}));
const Brand = dynamic(() => import('components/home/Brand', {ssr: false}));
const Footer = dynamic(() => import('components/layout/footer', {ssr: false}));
// 
export default () =>
{
  return <>
    <div className="bgbl px-3 min-h-[525px] md:h-screen md:px-3">
      <Header />
      <Discover />
    </div>
    <div className="px-3 md:px-0">
      <About />
      <Stats />
      <Simplify />
      <Features />
      <Why />
      <Ready />
      {/* <Success /> */}
      <Plan />
      <Ready />
      <Brand />
      <Footer />
    </div>
  </>
}