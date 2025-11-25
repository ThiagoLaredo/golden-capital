import HeroSection from '../components/sections/HeroSection/HeroSection';
import Transactions from '../components/sections/Transactions/Transactions';
import Experience from '../components/sections/Experience/Experience';
import Solutions from '../components/sections/Solutions/Solutions';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Transactions />
      <Experience />
      <Solutions />
    </>
  );
}