import services1 from "@/assets/services/services-1.svg";
import services2 from "@/assets/services/services-2.svg";
import services3 from "@/assets/services/services-3.svg";
import services4 from "@/assets/services/services-4.svg";
import services5 from "@/assets/services/services-5.svg";
import services6 from "@/assets/services/services-6.svg";
import mobileImg from "@/assets/mobile/mobile-img.png";
import mobileCard1 from "@/assets/mobile/card1.svg";
import mobileCard2 from "@/assets/mobile/card2.svg";
import mobileCard3 from "@/assets/mobile/card3.svg";
import erpImg from "@/assets/erp/erp-img.png";
import erpCard1 from "@/assets/erp/card1.svg";
import erpCard2 from "@/assets/erp/card2.svg";
import erpCard3 from "@/assets/erp/card3.svg";
import erpCard4 from "@/assets/erp/card4.svg";
import erpCard5 from "@/assets/erp/card5.svg";
import erpCard6 from "@/assets/erp/card6.svg";
import designImg from "@/assets/design/design-img.png";
import designCard1 from "@/assets/design/design6.svg";
import designCard2 from "@/assets/design/design2.svg";
import designCard3 from "@/assets/design/design3.svg";
import designCard4 from "@/assets/design/design4.svg";
import designCard5 from "@/assets/design/design5.svg";
import designCard6 from "@/assets/design/design1.svg";
import itImg from "@/assets/it/it-img.svg";
import deliverLogo from "@/assets/deliver/section-logo.svg";
import deliverImg from "@/assets/deliver/deleverImg.png";
import portfolio1 from "@/assets/portfolio/portfolio1.svg";
import portfolio2 from "@/assets/portfolio/portfolio2.svg";
import portfolio3 from "@/assets/portfolio/portfolio3.svg";
import portfolio4 from "@/assets/portfolio/portfolio4.svg";
import portfolio5 from "@/assets/portfolio/portfolio5.svg";
import smsImg from "@/assets/sms/sms-img.png";
import smsLogo from "@/assets/sms/sms-logo.svg";
import imanImg from "@/assets/iman/iman-img.png";
import imanLogo from "@/assets/iman/iman-logo.svg";
import goodzoneImg from "@/assets/goodzone/goodzone-img.png";
import goodzoneLogo from "@/assets/goodzone/goodzone-logo.png";
import work1 from "@/assets/work/work1.svg";
import work2 from "@/assets/work/work2.svg";
import work3 from "@/assets/work/work3.svg";
import work4 from "@/assets/work/work4.svg";
import work5 from "@/assets/work/work5.svg";

export const SERVICES = [
    {
        id: 1,
        title: "Team",
        img: services1,
    },
    {
        id: 2,
        title: "Development of mobile applications",
        img: services2,
    },
    {
        id: 3,
        title: "Development and implementation ERP systems",
        img: services3,
    },
    {
        id: 4,
        title: "User interface, User experience design",
        img: services4,
    },
    {
        id: 5,
        title: "Optimization IT consulting infrastructure",
        img: services5,
    },
    {
        id: 6,
        title: "IT consulting",
        img: services6,
    },
];

export const MOBILE = [
    {
        sectionTitle: "Development of mobile applications",
        sectionDesc:
            "In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.",
        sectionImg: mobileImg,
        status: false,
        sectionCards: [
            {
                id: 1,
                sectionCardTitle: "iOS",
                sectionCardImg: mobileCard1,
            },
            {
                id: 2,
                sectionCardTitle: "Android",
                sectionCardImg: mobileCard2,
            },
            {
                id: 3,
                sectionCardTitle: "Crossplatform",
                sectionCardImg: mobileCard3,
            },
        ],
    },
];

export const ERP = [
    {
        sectionTitle: "ERP systems",
        sectionDesc:
            "IT Systems of any level of complexity at a convenient time for you",
        sectionImg: erpImg,
        status: true,
        sectionCards: [
            {
                id: 1,
                sectionCardTitle: "CRM",
                sectionCardImg: erpCard1,
            },
            {
                id: 2,
                sectionCardTitle: "eLearning",
                sectionCardImg: erpCard2,
            },
            {
                id: 3,
                sectionCardTitle: "E-Commerce",
                sectionCardImg: erpCard3,
            },
            {
                id: 4,
                sectionCardTitle: "POS",
                sectionCardImg: erpCard4,
            },
            {
                id: 5,
                sectionCardTitle: "Sms / Email",
                sectionCardImg: erpCard5,
            },
            {
                id: 6,
                sectionCardTitle: "Warehouse",
                sectionCardImg: erpCard6,
            },
        ],
    },
];

export const DESIGN = [
    {
        sectionTitle: "UI / UX design",
        sectionDesc: "Our company takes a human-centered approach to design",
        sectionImg: designImg,
        status: false,
        sectionCards: [
            {
                id: 1,
                sectionCardTitle: "UX",
                sectionCardImg: designCard1,
            },
            {
                id: 2,
                sectionCardTitle: "UI",
                sectionCardImg: designCard2,
            },
            {
                id: 3,
                sectionCardTitle: "Prototyping",
                sectionCardImg: designCard3,
            },
            {
                id: 4,
                sectionCardTitle: "Mobile Design",
                sectionCardImg: designCard4,
            },
            {
                id: 5,
                sectionCardTitle: "Web Design",
                sectionCardImg: designCard5,
            },
            {
                id: 6,
                sectionCardTitle: "Atomic Design",
                sectionCardImg: designCard6,
            },
        ],
    },
];

export const OPT = [
    {
        sectionTitle: "Optimization Infrastructure",
        sectionDesc:
            "Our experienced professionals will help you optimize your infrastructure",
        sectionImg: erpImg,
        status: true,
        sectionCards: [
            {
                id: 1,
                sectionCardTitle: "Architecture",
                sectionCardImg: designCard1,
            },
            {
                id: 2,
                sectionCardTitle: "Auto testing",
                sectionCardImg: designCard2,
            },
            {
                id: 3,
                sectionCardTitle: "Stress testing",
                sectionCardImg: designCard3,
            },
            {
                id: 4,
                sectionCardTitle: "Load testing",
                sectionCardImg: designCard4,
            },
            {
                id: 5,
                sectionCardTitle: "Devops",
                sectionCardImg: designCard5,
            },
            {
                id: 6,
                sectionCardTitle: "Cloud",
                sectionCardImg: designCard6,
            },
            {
                id: 7,
                sectionCardTitle: "CI / CD",
                sectionCardImg: designCard3,
            },
        ],
    },
];

export const IT = [
    {
        sectionTitle: "IT consulting",
        sectionDesc:
            "We can improve the qualifications of your employees thereby increasing the efficiency of your company",
        sectionImg: itImg,
        status: false,
        sectionCards: [
            {
                id: 1,
                sectionCardTitle: "Architecture",
                sectionCardImg: designCard1,
            },
            {
                id: 2,
                sectionCardTitle: "Auto testing",
                sectionCardImg: designCard2,
            },
            {
                id: 3,
                sectionCardTitle: "Stress testing",
                sectionCardImg: designCard3,
            },
            {
                id: 4,
                sectionCardTitle: "Load testing",
                sectionCardImg: designCard4,
            },
            {
                id: 5,
                sectionCardTitle: "Devops",
                sectionCardImg: designCard5,
            },
            {
                id: 6,
                sectionCardTitle: "Cloud",
                sectionCardImg: designCard6,
            },
        ],
    },
];

export const DELIVER = [
    {
        sectionLogo: deliverLogo,
        sectionType: "Delivery",
        sectionTypeColor: "#fe5722",
        sectionTypeBg: "#ffddd2",
        sectionDesc:
            "Delever - Delivery service automation targeted at both consumers and restaurants.",
        sectionImg: deliverImg,
        status: true,
        sectionCards: [
            {
                id: 1,
                sectionCardTitle: "Website",
                sectionCardImg: portfolio1,
            },
            {
                id: 2,
                sectionCardTitle: "Admin panel",
                sectionCardImg: portfolio2,
            },
            {
                id: 3,
                sectionCardTitle: "Crossplatform",
                sectionCardImg: portfolio3,
            },
            {
                id: 4,
                sectionCardTitle: "Web design",
                sectionCardImg: portfolio4,
            },
            {
                id: 5,
                sectionCardTitle: "Mobile design",
                sectionCardImg: portfolio5,
            },
        ],
    },
];

export const SMS = [
    {
        sectionLogo: smsLogo,
        sectionType: "Notification",
        sectionTypeColor: "#4473E5",
        sectionTypeBg: "#4473e533",
        sectionDesc: "Smsuz.uz - It is a platform for bulk SMS messaging.",
        sectionImg: smsImg,
        status: false,
        sectionCards: [
            {
                id: 1,
                sectionCardTitle: "Website",
                sectionCardImg: portfolio1,
            },
            {
                id: 2,
                sectionCardTitle: "Admin panel",
                sectionCardImg: portfolio2,
            },
            {
                id: 3,
                sectionCardTitle: "Crossplatform",
                sectionCardImg: portfolio3,
            },
        ],
    },
];
export const GOODZONE = [
    {
        sectionLogo: goodzoneLogo,
        sectionType: "E-Commerce",
        sectionTypeColor: "#F50000",
        sectionTypeBg: "#f5000033",
        sectionDesc:
            "Goodzone - Internet shop of household appliances in Uzbekistan.",
        sectionImg: goodzoneImg,
        status: true,
        sectionCards: [
            {
                id: 1,
                sectionCardTitle: "Website",
                sectionCardImg: portfolio1,
            },
            {
                id: 2,
                sectionCardTitle: "Admin panel",
                sectionCardImg: portfolio2,
            },
            {
                id: 3,
                sectionCardTitle: "Crossplatform",
                sectionCardImg: portfolio3,
            },
            {
                id: 4,
                sectionCardTitle: "Web design",
                sectionCardImg: portfolio4,
            },
            {
                id: 5,
                sectionCardTitle: "Mobile design",
                sectionCardImg: portfolio5,
            },
        ],
    },
];

export const IMAN = [
    {
        sectionLogo: imanLogo,
        sectionType: "Finance",
        sectionTypeColor: "#01CAB0",
        sectionTypeBg: "#01cab033",
        sectionDesc:
            "Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.",
        sectionImg: imanImg,
        status: false,
        sectionCards: [
            {
                id: 1,
                sectionCardTitle: "Website",
                sectionCardImg: portfolio1,
            },
            {
                id: 2,
                sectionCardTitle: "Admin panel",
                sectionCardImg: portfolio2,
            },
            {
                id: 3,
                sectionCardTitle: "Crossplatform",
                sectionCardImg: portfolio3,
            },
        ],
    },
];

export const WORK = [
    {
        id: 1,
        title: "Сontact",
        desc: "Send us your project request or project idea.",
        img: work1,
    },
    {
        id: 2,
        title: "Analysis",
        desc: "We will contact you to clarify your project requirements.",
        img: work2,
    },
    {
        id: 3,
        title: "Offer",
        desc: "We will provide you with our free, non-binding application.",
        img: work3,
    },
    {
        id: 4,
        title: "Team",
        desc: "We provide a team for your requirements.",
        img: work4,
    },
    {
        id: 5,
        title: "Start",
        desc: "You will get to know the team and we'll get started.",
        img: work5,
    },
];
