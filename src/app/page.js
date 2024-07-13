import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";
import ServicesSection from "@/components/services-section/ServicesSection";
import {
    DELIVER,
    DESIGN,
    ERP,
    GOODZONE,
    IMAN,
    IT,
    MOBILE,
    OPT,
    SMS,
} from "@/static";
import Clients from "@/components/clients/Clients";
import PortfolioSection from "@/components/portfolio-section/PortfolioSection";
import Work from "@/components/work/Work";
import Contact from "@/components/contact/Contact";

export default function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Team />
            <ServicesSection data={MOBILE[0]} sectionID={"mobile"} />
            <ServicesSection data={ERP[0]} sectionID={"erp"} />
            <ServicesSection data={DESIGN[0]} sectionID={"design"} />
            <ServicesSection data={OPT[0]} sectionID={"opt"} />
            <ServicesSection data={IT[0]} sectionID={"it"} />
            <Clients />
            <PortfolioSection data={DELIVER[0]} sectionID={"delever"} />
            <PortfolioSection data={SMS[0]} sectionID={"sms"} />
            <PortfolioSection data={GOODZONE[0]} sectionID={"goodzone"} />
            <PortfolioSection data={IMAN[0]} sectionID={"iman"} />
            <Work />
            <Contact />
        </main>
    );
}
