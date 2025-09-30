import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProblemsWeSolve from '@/components/ProblemsWeSolve';
import EtherwaveProduct from '@/components/EtherwaveProduct';
import EtherwaveArchitecture from '@/components/EtherwaveArchitecture';
import Features from '@/components/Features';
import About from '@/components/About';
import Applications from '@/components/Applications';
import BusinessModel from '@/components/BusinessModel';
import CurrentStatus from '@/components/CurrentStatus';
import CTA from '@/components/CTA';

export default function Home() {
    return (
        <div className="min-h-screen dark">
            <Header />
            <main>
                <Hero />
                <ProblemsWeSolve />
                <EtherwaveProduct />
                <EtherwaveArchitecture />
                <Features />
                <About />
                <Applications />
                <BusinessModel />
                <CurrentStatus />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}