
import {
    Cpu, Brain, BarChart, Globe, Smartphone, Lock, Coffee, Terminal, Cloud,
    PenTool, Zap, Activity, DollarSign, Briefcase, Users, Monitor, Layout,
    Megaphone, Video, Layers, Anchor, TrendingUp, Settings, Pen, Code
} from 'lucide-react';

export const packDetails = {
    "tech-career-pack": {
        title: "Tech Career Pack",
        headline: "Launch your Tech Career with 9 Essential Skills",
        description: "Master the skills to build successful tech solutions. Choose any 5 courses from the pack and kickstart your journey.",
        newLaunch: true,
        stats: [
            { label: "Students trained", value: "2 Lakh+" },
            { label: "Industry Experts", value: "150+" },
            { label: "Campuses", value: "1000+" },
            { label: "Internship Partners", value: "100+" }
        ],
        courses: [
            { title: "Artificial Intelligence", description: "Master AI concepts, neural networks, and deep learning algorithms.", icon: Cpu, color: "text-purple-400", path: "/program/artificial-intelligence" },
            { title: "Machine Learning", description: "Build predictive models and learn statistical analysis for data-driven decisions.", icon: Brain, color: "text-blue-400", path: "/program/machine-learning" },
            { title: "Data Science", description: "Uncover insights from complex data using Python, R, and visualization tools.", icon: BarChart, color: "text-green-400", path: "/program/data-science" },
            { title: "Web Development", description: "Build dynamic full-stack web applications using MERN stack.", icon: Globe, color: "text-cyan-400", path: "/program/web-development" },
            { title: "Android Development", description: "Create powerful mobile apps for billions of users with Kotlin.", icon: Smartphone, color: "text-green-500", path: "/program/android-app-development" },
            { title: "Cyber Security", description: "Defend digital assets and learn ethical hacking techniques.", icon: Lock, color: "text-red-400", path: "/program/cyber-security" },
            { title: "Java Programming", description: "Master robust enterprise-level programming with Java.", icon: Coffee, color: "text-orange-400", path: "/program/java-programming" },
            { title: "Python Programming", description: "Learn the most versatile language for automation, web, and data.", icon: Terminal, color: "text-yellow-400", path: "/program/python-programming" },
            { title: "Cloud Computing", description: "Master AWS/Azure and deploy scalable cloud solutions.", icon: Cloud, color: "text-blue-500", path: "/program/cloud-computing" },
        ],
        heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop"
    },
    "coders-pack": {
        title: "Coders Pack",
        headline: "Becoming a Top 1% Developer starts here",
        description: "A comprehensive pack for aspiring developers. Master the core languages and frameworks driving the software industry.",
        newLaunch: true,
        stats: [
            { label: "Active Coders", value: "50k+" },
            { label: "Projects Built", value: "20k+" },
            { label: "Hiring Partners", value: "500+" },
            { label: "Avg Salary", value: "12 LPA" }
        ],
        courses: [
            { title: "Java Programming", description: "Master robust enterprise-level programming with Java.", icon: Coffee, color: "text-orange-400", path: "/program/java-programming" },
            { title: "Python Programming", description: "Learn the most versatile language for automation, web, and data.", icon: Terminal, color: "text-yellow-400", path: "/program/python-programming" },
            { title: "Web Development", description: "Build dynamic full-stack web applications using MERN stack.", icon: Globe, color: "text-cyan-400", path: "/program/web-development" },
            { title: "Android Development", description: "Create powerful mobile apps for billions of users with Kotlin.", icon: Smartphone, color: "text-green-500", path: "/program/android-app-development" },
            { title: "Data Structures & Algos", description: "Master the foundation of computer science and crack coding interviews.", icon: Code, color: "text-purple-400", path: "/program/dsa" },
            { title: "C++ Programming", description: "Learn high-performance programming for system applications and games.", icon: Code, color: "text-blue-500", path: "/program/cpp-programming" },
        ],
        heroImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop"
    },
    "financial-analyst-pack": {
        title: "Financial Analyst Pack",
        headline: "Master the Art of Finance & Investment",
        description: "Equip yourself with the skills to analyze markets, manage portfolios, and understand global finance.",
        newLaunch: true,
        stats: [
            { label: "Analysts Trained", value: "10k+" },
            { label: "Avg Hike", value: "80%" },
            { label: "Finance Partners", value: "50+" },
            { label: "Placements", value: "95%" }
        ],
        courses: [
            { title: "Finance", description: "Understand financial markets, banking systems, and investment strategies.", icon: DollarSign, color: "text-green-400", path: "/program/finance" },
            { title: "Stock Market", description: "Master technical and fundamental analysis for trading and investing.", icon: TrendingUp, color: "text-blue-400", path: "/program/stock-market" },
        ],
        heroImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2000&auto=format&fit=crop"
    },
    "medical-pack": {
        title: "Medical Pack",
        headline: "Advance your Career in Life Sciences",
        description: "Specialized courses for careers in healthcare analytics, biotechnology, and psychology.",
        newLaunch: true,
        stats: [
            { label: "Medical Pros", value: "5k+" },
            { label: "Labs Partnered", value: "20+" },
            { label: "Research Papers", value: "100+" },
            { label: "Global Reach", value: "10+" }
        ],
        courses: [
            { title: "Medical Coding", description: "Learn to classify medical diagnoses and procedures for billing.", icon: Activity, color: "text-red-400", path: "/program/medical-coding" },
            { title: "Industrial Biotechnology", description: "Explore biological processes for industrial and other applications.", icon: PenTool, color: "text-green-500", path: "/program/industrial-biotechnology" },
            { title: "Psychology", description: "Understand human behavior and mental processes.", icon: Brain, color: "text-purple-400", path: "/program/psychology" },
            { title: "Neurology", description: "Study the complexities of the human nervous system and brain functions.", icon: Brain, color: "text-pink-400", path: "/program/neurology" },
        ],
        heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop"
    },
    "startup-pack": {
        title: "Startup Pack",
        headline: "Build, Grow, and Scale your Business",
        description: "Everything you need to know to launch your startup or drive growth in a high-paced environment.",
        newLaunch: true,
        stats: [
            { label: "Startups Launched", value: "100+" },
            { label: "Funding Raised", value: "$5M+" },
            { label: "Mentors", value: "50+" },
            { label: "Network", value: "10k+" }
        ],
        courses: [
            { title: "Sales & Marketing", description: "Master the art of selling and reaching your target audience.", icon: Megaphone, color: "text-orange-400", path: "/program/sales-marketing" },
            { title: "Digital Marketing", description: "Dominate the online space with SEO, SEM, and social strategies.", icon: Globe, color: "text-blue-400", path: "/program/digital-marketing" },
            { title: "Human Resources", description: "Learn to build and manage high-performing teams.", icon: Users, color: "text-pink-400", path: "/program/human-resources" },
            { title: "Business Communication", description: "Effective communication strategies for leadership and negotiation.", icon: Users, color: "text-yellow-400", path: '#' },
        ],
        heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop"
    },
    "new-age-technology": {
        title: "New Age Technology",
        headline: "Future-Proof your Career with Next-Gen Tech",
        description: "Dive into the cutting-edge technologies shaping the future of innovation.",
        newLaunch: true,
        stats: [
            { label: "Tech Pioneers", value: "15k+" },
            { label: "Projects", value: "5k+" },
            { label: "Innovation Hubs", value: "10+" },
            { label: "Patents Filed", value: "25+" }
        ],
        courses: [
            { title: "Generative AI", description: "Create content and code using advanced AI models.", icon: Brain, color: "text-purple-500", path: "/program/generative-ai" },
            { title: "Internet of Things", description: "Connect devices and build smart systems.", icon: Activity, color: "text-cyan-400", path: "/program/internet-of-things" },
            { title: "Robotics", description: "Design and program autonomous robots.", icon: Settings, color: "text-gray-400", path: "/program/robotics" },
            { title: "Cloud Computing", description: "Scalable infrastructure with AWS and Azure.", icon: Cloud, color: "text-blue-500", path: "/program/cloud-computing" },
            { title: "Artificial Intelligence", description: "Foundations of AI and intelligent systems.", icon: Cpu, color: "text-indigo-400", path: "/program/artificial-intelligence" },
        ],
        heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop"
    },
    "new-age-marketing": {
        title: "New Age Marketing",
        headline: "Dominate the Digital Landscape",
        description: "Modern marketing strategies for the digital age. From social media to content creation.",
        newLaunch: true,
        stats: [
            { label: "Marketers", value: "12k+" },
            { label: "Campaigns", value: "50k+" },
            { label: "Brands", value: "200+" },
            { label: "Ad Spend Managed", value: "$2M+" }
        ],
        courses: [
            { title: "Digital Marketing", description: "Comprehensive guide to online marketing channels.", icon: Globe, color: "text-blue-400", path: "/program/digital-marketing" },
            { title: "Social Media Marketing", description: "Build brand presence on Instagram, LinkedIn, and more.", icon: Users, color: "text-pink-500", path: "/program/social-media-marketing" },
            { title: "Content Creation", description: "Create compelling content that drives engagement.", icon: Pen, color: "text-yellow-400", path: "/program/content-creation" },
        ],
        heroImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
    },
    "design-pack": {
        title: "Design Pack",
        headline: "Design Experiences that Matter",
        description: "Unlock your creative potential with courses in UI/UX and Graphic Design.",
        newLaunch: true,
        stats: [
            { label: "Designers", value: "8k+" },
            { label: "Portfolios", value: "15k+" },
            { label: "Awards", value: "50+" },
            { label: "Top Studios", value: "20+" }
        ],
        courses: [
            { title: "UI/UX Design", description: "Design intuitive and beautiful user interfaces and experiences.", icon: Layout, color: "text-purple-400", path: "/program/ui-ux-design" },
            { title: "Graphic Design", description: "Master visual communication and design tools.", icon: PenTool, color: "text-orange-400", path: "/program/graphic-design" },
            { title: "Generative AI", description: "Enhance your design workflow with AI tools.", icon: Brain, color: "text-indigo-400", path: "/program/generative-ai" },
        ],
        heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
    }
};
