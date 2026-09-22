import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_NAME!,
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

const jobs = [
  // ---------------------------------------------------------
  // LEGACY / SEO VACANCIES
  // ---------------------------------------------------------

  {
    title: "Customer Care Executive | Multiple Processes",
    company: "EMTA",
    location: "Vijay Nagar, Indore",
    salary: "₹10,500 - ₹16,500 + Incentives",
    slug: "customer-care-executive-vijay-nagar",
    description:
      "Customer Care Executive vacancy for multiple processes at EMTA in Vijay Nagar, Indore.",
    employmentType: "Full-Time",
  },
  {
    title: "Inside Sales Associate / Sr. Associate",
    company: "EMTA",
    location: "Indore | On-site",
    salary: "₹17,000 – ₹25,000/month",
    slug: "inside-sales-executive",
    description:
      "Inside Sales Associate / Sr. Associate opportunity with EMTA in Indore.",
    employmentType: "Full-Time",
  },
  {
    title: "Customer Care Executive (Swiggy)",
    company: "EMTA",
    location: "Indore",
    salary: "₹11,000 – ₹13,500 In-hand",
    slug: "customer-care-swiggy",
    description:
      "Customer Care Executive opportunity for the Swiggy process in Indore.",
    employmentType: "Full-Time",
  },
  {
    title: "Customer Success Associate - Vivint",
    company: "EMTA",
    location: "Sector 30, Gurugram",
    salary: "Up to 32.5K CTC",
    slug: "customer-success-associate-vivint",
    description:
      "Customer Success Associate opportunity for the Vivint process in Gurugram.",
    employmentType: "Full-Time",
  },
  {
    title: "Customer Support Executive (Walmart)",
    company: "EMTA",
    location: "Jaipur, Rajasthan",
    salary: "₹30,000 - ₹34,000 CTC",
    slug: "customer-support-walmart",
    description:
      "Customer Support Executive opportunity for the Walmart process.",
    employmentType: "Full-Time",
  },
  {
    title: "Customer Support Exec. (Seller Support)",
    company: "EMTA",
    location: "Kharadi, Pune",
    salary: "Up to ₹32,000 CTC/month",
    slug: "customer-support-seller-support",
    description:
      "Customer Support Executive opportunity for seller support operations.",
    employmentType: "Full-Time",
  },
  {
    title: "Senior Accountant",
    company: "EMTA",
    location: "Indore",
    salary: "₹30,000 – ₹50,000 per month",
    slug: "senior-accountant",
    description:
      "Senior Accountant opportunity with EMTA in Indore.",
    employmentType: "Full-Time",
  },

  // ---------------------------------------------------------
  // DETAILED VACANCIES
  // ---------------------------------------------------------

  {
    title: "Customer Support Executive (Chat & Voice Support)",
    company: "EMTA",
    location: "Indore",
    salary: "₹ 15,000 /Month CTC",
    slug: "customer-support-executive-chat-voice-support",
    description:
      "We are looking for enthusiastic Customer Support Executives to join our team for the Swiggy Process. The role involves handling chat and voice-based queries of customers, ensuring quick resolution, and delivering a smooth customer experience.",
    responsibilities: [
      "Handle inbound/outbound calls and chat support for Swiggy customers.",
      "Resolve customer queries, complaints, and requests with professionalism.",
      "Ensure customer satisfaction through effective communication.",
      "Maintain records of interactions in the system.",
      "Work in coordination with the team to meet daily targets.",
    ].join("\n"),
    requirements: [
      "Minimum 12th Pass qualification.",
      "Freshers and experienced candidates can apply.",
      "Good communication skills in Hindi & English.",
      "Willingness to work in 24x7 rotational shifts.",
      "Ability to handle pressure and multitask.",
    ].join("\n"),
    employmentType: "Full-Time, Rotational Shifts",
    openings: 300,
  },

  {
    title: "Wealth Management Associate",
    company: "EMTA",
    location: "Gurugram, Sec 30",
    salary: "Best in Industry",
    slug: "wealth-management-associate",
    description:
      "This role involves market analysis, trade processing, and supporting investment clients with high-quality financial insights. We are seeking highly skilled candidates with strong expertise in cryptocurrency, equity markets, ETFs, mutual funds, wealth management, and trade settlements.",
    responsibilities: [
      "Conduct in-depth analysis of equities, ETFs, cryptocurrencies, and mutual funds.",
      "Monitor market trends, corporate actions, dividends, and company financials.",
      "Evaluate investment opportunities and prepare detailed research reports.",
      "Support strategies for wealth management and investment advisory.",
    ].join("\n"),
    requirements: [
      "At least 6 months of relevant experience is mandatory.",
      "Exposure to equities, ETFs, mutual funds, and crypto instruments.",
      "Strong understanding of capital markets & investment products.",
      "Experience in portfolio analysis, market research, or client reporting.",
      "Advanced Excel (pivot tables, lookup formulas, MIS reports).",
    ].join("\n"),
    employmentType: "Full-time (Backend Only)",
  },

  {
    title: "Clearing & Settlement Associate",
    company: "EMTA",
    location: "Gurugram, Sec 30",
    salary: "Best in Industry",
    slug: "clearing-settlement-associate",
    description:
      "We are looking for an associate with strong understanding of the trade lifecycle and clearing & settlement processes. The role requires attention to detail, process discipline, and the ability to handle reconciliations and exception handling efficiently.",
    responsibilities: [
      "Execute and monitor equity, ETF, and crypto trades.",
      "Coordinate with exchanges, brokers, and custodians.",
      "Reconcile trades, positions, and funds.",
      "Monitor settlement cycles and resolve exceptions.",
      "Ensure regulatory and NISM compliance.",
      "Maintain audit-ready records and reports.",
    ].join("\n"),
    requirements: [
      "6 months+ experience in clearing & settlement, trade operations, or middle-office roles.",
      "Hands-on exposure to equity settlement cycles (T+1/T+2).",
      "Knowledge of reconciliations, settlement breaks, and exception handling.",
      "Exposure to NSE/BSE settlement processes preferred.",
    ].join("\n"),
    employmentType: "Full-time (Backend Only)",
  },

  {
    title: "Tax Operations Associate",
    company: "EMTA",
    location: "Gurugram, Sec 30",
    salary: "Best in Industry",
    slug: "tax-operations-associate",
    description:
      "The Tax Operations Associate will handle tax compliance, including GST, TDS/TCS, and Income Tax filings. Ideally suited for candidates with strong knowledge of Indian taxation laws and experience in financial services or broking firms.",
    responsibilities: [
      "Timely filing of GST, TDS/TCS, and Income Tax returns.",
      "Prepare tax computations and reconciliations.",
      "Assist during audits and compliance reviews.",
      "Handle tax notices and queries.",
      "Ensure adherence to latest tax laws and SOPs.",
    ].join("\n"),
    requirements: [
      "6 months+ experience in tax operations, accounting, or compliance.",
      "Hands-on exposure to GST, TDS/TCS, and Income Tax filings.",
      "Experience with Form 16/16A, TRACES, and tax reconciliations.",
      "Strong knowledge of Indian taxation laws.",
    ].join("\n"),
    employmentType: "Full-time (Backend Only)",
  },

  {
    title: "Asset Servicing Associate",
    company: "EMTA",
    location: "Gurugram, Sec 30",
    salary: "Best in Industry",
    slug: "asset-servicing-associate",
    description:
      "Join our team as an Asset Servicing Associate to process corporate actions and manage entitlement reconciliations. Experience in portfolio accounting or fund operations is a plus.",
    responsibilities: [
      "Process and monitor corporate actions.",
      "Validate announcements, record dates, and payment details.",
      "Coordinate with custodians and internal teams.",
      "Reconcile entitlements and resolve mismatches.",
      "Maintain audit-ready records and MIS.",
    ].join("\n"),
    requirements: [
      "6 months+ experience in asset servicing or corporate actions processing.",
      "Exposure to dividends, bonuses, rights, mergers, and redemptions.",
      "Experience coordinating with custodians, depositories (NSDL/CDSL), brokers.",
      "Knowledge of entitlement processing & reconciliation.",
    ].join("\n"),
    employmentType: "Full-time (Backend Only)",
  },

  {
    title: "Corporate Actions Associate",
    company: "EMTA",
    location: "Gurugram, Sec 30",
    salary: "Best in Industry",
    slug: "corporate-actions-associate",
    description:
      "Focused on processing and validating corporate action events such as dividends, splits, bonuses, and buybacks. Requires strong reconciliation capabilities and Excel reporting skills.",
    responsibilities: [
      "Process and validate corporate action events.",
      "Review announcements and record dates.",
      "Coordinate with custodians and brokers.",
      "Reconcile proceeds and resolve exceptions.",
      "Ensure timely posting of benefits.",
    ].join("\n"),
    requirements: [
      "6 months+ experience in corporate actions processing.",
      "Hands-on experience in dividends, splits, bonuses, buybacks, mergers.",
      "Familiarity with exchange announcements and market notifications.",
      "Entitlement calculation skills and regulatory understanding.",
    ].join("\n"),
    employmentType: "Full-time (Backend Only)",
  },

  {
    title: "Trading Operations Associate",
    company: "EMTA",
    location: "Gurugram, Sec 30",
    salary: "Best in Industry",
    slug: "trading-operations-associate",
    description:
      "Responsible for monitoring trading platforms, market connectivity, and resolving latency issues. Ideally suited for candidates with experience in brokerage, prop trading, or fintech firms.",
    responsibilities: [
      "Monitor trading platforms and market connectivity.",
      "Resolve latency, connectivity, or order-routing issues.",
      "Perform daily system health checks.",
      "Support UAT and system upgrades.",
      "Maintain incident logs and audit records.",
    ].join("\n"),
    requirements: [
      "6 months+ experience in trading operations or OMS/EMS support.",
      "Exposure to trading platforms, order management systems, or exchange connectivity.",
      "Experience handling trading incidents, connectivity issues, or order failures.",
      "OMS/EMS & FIX protocol knowledge.",
    ].join("\n"),
    employmentType: "Full-time (Backend Only)",
  },

  {
    title: "Inside Sales Associate",
    company: "Elite Manpower & Training Academy",
    location: "Indore",
    salary: "₹ 15,000 - ₹ 25,000 /month",
    slug: "inside-sales-associate",
    description:
      "This role involves engaging with MediBuddy app users, influencing their healthcare decisions, and converting leads into successful sales. Strong communication, negotiation, and target-driven skills are essential.",
    responsibilities: [
      "Counsel and engage with approx. 100+ customers daily who have downloaded the MediBuddy app.",
      "Influence customer preference and convert leads via scripted consultations.",
      "Deliver tailored information regarding specialty services and surgery care.",
      "Achieve monthly Inside Sales targets (Avg. 12 IPD conversions/month).",
      "Meet daily talk time target of 3.5 hours, and 66 hours monthly.",
      "Expedite resolution of queries and complaints to ensure high customer satisfaction.",
      "Maintain call quality and process compliance across all communications.",
    ].join("\n"),
  },

  {
    title: "In-Clinic Operations Executive",
    company: "Elite Manpower & Training Academy",
    location: "Indore",
    salary: "₹ 15,000 - ₹ 22,000 /month",
    slug: "in-clinic-operations-executive",
    description:
      "We are looking for a flexible and adaptable Associate to join our team, responsible for supporting the seamless execution of in-clinic doctor consultations. The role involves a range of responsibilities, including managing patient attendance, collecting prescriptions, and handling escalations. The trainee will be expected to work across multiple functions, ensuring smooth day-to-day operations. Strong communication skills and the ability to handle high call volumes are essential for this role.",
    responsibilities: [
      "Collecting and verifying patient attendance for scheduled in-clinic appointments.",
      "Organizing and managing prescriptions issued by doctors during consultations.",
      "Addressing any patient or appointment-related escalations, ensuring timely resolutions.",
      "Making a high volume of calls to coordinate with patients, doctors, and other stakeholders to ensure all activities are completed efficiently.",
      "Make calls to hospitals to confirm scheduled appointments.",
      "Ensure accurate recording and verification of appointment details.",
      "Conduct high-volume calls to coordinate with hospitals, patients, and other stakeholders.",
      "Maintain clear and effective communication to ensure all activities are completed efficiently.",
      "Handle any escalations related to appointments or patient concerns, ensuring timely and satisfactory resolutions.",
      "Work across multiple functions to support smooth operations.",
    ].join("\n"),
  },

  {
    title: "Escalation Desk Executive",
    company: "Elite Manpower & Training Academy",
    location: "Indore",
    salary: "₹ 13,000 - ₹ 18,000 /month",
    slug: "escalation-desk-executive",
    description:
      "This role involves handling customer escalations (voice/non-voice), ensuring timely resolutions, and maintaining customer satisfaction in a rotational day shift environment.",
    responsibilities: [
      "Handle customer escalations effectively across voice and non-voice processes.",
      "Provide timely resolutions while maintaining high customer satisfaction levels.",
      "Analyze recurring issues and escalate to relevant teams for long-term solutions.",
      "Coordinate with internal teams to ensure quick turnaround on escalated cases.",
      "Document and maintain escalation logs with accuracy and process compliance.",
      "Maintain professionalism and empathy while handling sensitive customer concerns.",
      "Meet defined SLA timelines, quality standards, and performance targets.",
    ].join("\n"),
  },

  {
    title: "Graphic Designer",
    company: "EMTA",
    location: "Indore",
    salary: "₹ 18,000 - ₹ 25,000 /month",
    slug: "graphic-designer",
    description:
      "In this role, you will be responsible for creating visual designs and video content for a variety of projects, including social media, marketing materials, and more. This is a great opportunity for interns and entry-level candidates to gain experience and build their skills in graphic design and video editing.",
    responsibilities: [
      "Create visual designs and video content using tools such as Canva, Corel, Photoshop, and other graphic design and video editing software.",
      "Work with the marketing and creative teams to understand project requirements and deliver high-quality designs and videos.",
      "Collaborate with the rest of the team to ensure that designs and videos align with brand guidelines.",
      "Stay up-to-date with new design and video editing trends and technologies.",
      "Troubleshoot and debug issues as they arise.",
    ].join("\n"),
    requirements:
      "Minimum 1 Year (Fresher Not allowed)",
    employmentType: "Full Time, Permanent",
  },

  {
    title: "Business Development Executive",
    company: "EMTA",
    location: "Sudama Nagar, Indore, Madhya Pradesh (Preferred)",
    salary: "₹ 15,000 - ₹ 35,000 /month",
    slug: "business-development-executive",
    description:
      "As an Inside Sales Executive, you will play a key role in expanding our customer base for enterprise SaaS-based products. You will engage with potential customers through various channels, build relationships, and contribute to lead generation and conversion efforts.",
    responsibilities: [
      "Cold calls and emails to explore sales opportunities.",
      "Identify new sales opportunities and handle both inbound and outbound calls to follow up.",
      "Maintaining long-lasting relationships with existing customers through exceptional after-sales service.",
      "Developing in-depth knowledge of product features and benefits.",
      "Collaborate with teammates and work towards closing deals.",
      "Conduct online demos to prospect clients and seal deals.",
      "Stay current with trends and competitors to identify improvements or recommend new products.",
      "Working towards the achievement of set targets.",
    ].join("\n"),
    requirements: [
      "Graduation/Postgraduation in any discipline (marketing or related fields will be preferred).",
      "Minimum 1 year of relevant industry experience required. Freshers are not eligible.",
      "Excellent verbal and written communication skills.",
      "Self-motivated and driven by targets.",
      "Ability to create and deliver presentations.",
      "Ability to adapt and grow in a competitive environment.",
    ].join("\n"),
    employmentType: "Full-Time",
  },

  {
    title: "Digital Marketing Expert",
    company: "EMTA",
    location: "Indore (On-site)",
    salary: "Competitive salary based on experience and skillset",
    slug: "digital-marketing-expert",
    description:
      "At EMTA, we are committed to building a strong digital presence that reflects our brand and drives real business results. We are currently seeking a highly skilled and creative Digital Marketing Expert to join our growing team in Indore.",
    responsibilities: [
      "Develop and execute digital marketing strategies across multiple channels (SEO, SEM, social media, email marketing, etc.).",
      "Manage and optimize Google Ads campaigns (Search, Display, YouTube, etc.).",
      "Conduct on-page and off-page SEO to improve organic rankings and visibility.",
      "Design engaging content using Canva, Adobe Photoshop, or similar tools.",
      "Write clear, creative, and compelling content for websites, blogs, social media, and ad campaigns.",
      "Manage company and brand presence across social media platforms (Instagram, Facebook, LinkedIn, X, etc.).",
      "Create and edit video content for reels, ads, and promotional campaigns.",
      "Track campaign performance and deliver detailed performance reports using analytics tools.",
      "Stay up to date with the latest trends and algorithm updates in digital marketing.",
    ].join("\n"),
    requirements: [
      "Minimum 2+ years of hands-on experience in digital marketing.",
      "Strong knowledge of SEO (tools like SEMrush, Ahrefs, Google Search Console).",
      "Proficient in Google Ads, Google Analytics, and Meta Business Manager.",
      "Skilled in content creation, copywriting, and social media management.",
      "Hands-on experience with Canva, Photoshop, and basic video editing tools.",
      "Excellent communication and presentation skills.",
      "Ability to work both independently and collaboratively in a fast-paced environment.",
    ].join("\n"),
    employmentType: "Full-Time",
  },

  {
    title: "Business Development Executive / Manager (Real Estate)",
    company: "EMTA",
    location: "New Palasia, Indore",
    salary: "Attractive incentives",
    slug: "business-development-executive-manager-real-estate",
    description:
      "We are looking for a dynamic and results-driven Business Development Executive / Manager to join our growing team at Aditya Developer. The ideal candidate should have a passion for real estate, excellent communication skills, and a proven track record in sales or client acquisition.",
    responsibilities: [
      "Identify and develop new business opportunities in the real estate sector.",
      "Generate leads through various channels – networking, online platforms, referrals, etc.",
      "Conduct market research to identify trends, opportunities, and competitors.",
      "Meet potential clients to understand their property needs and offer appropriate solutions.",
      "Build and maintain strong relationships with clients, brokers, and channel partners.",
      "Achieve monthly and quarterly sales targets.",
      "Coordinate with the marketing team to execute promotional campaigns.",
      "Provide regular reports on business development activities and pipeline status to management.",
      "Attend site visits and assist in closing property deals.",
      "Stay updated with industry developments, pricing trends, and regulatory changes.",
    ].join("\n"),
    requirements: [
      "Bachelor’s degree in Business, Marketing, or related field.",
      "2+ years of experience in real estate sales or business development (preferred).",
      "Freshers with strong motivation and communication skills may also apply.",
      "Excellent communication and negotiation skills.",
      "Strong interpersonal and client relationship management.",
      "Target-driven with a focus on results.",
      "Ability to work independently and in a team.",
      "Proficient in MS Office and CRM tools.",
      "Knowledge of the Indore real estate market will be a plus.",
    ].join("\n"),
    employmentType: "Full-Time",
  },

  {
    title: "Site Supervisor / Installation Supervisor / Site Manager",
    company: "EMTA",
    location: "Bhopal & other project sites (as per project requirements)",
    salary: "₹ 15,000 - 20,000 /Month CTC",
    slug: "site-supervisor-installation-supervisor-site-manager",
    description:
      "We are hiring Site Supervisors / Installation Supervisors / Site Managers to manage on-site installation and execution activities. The role involves manpower management, site administration, coordination with government authorities (Nagar Nigam), and handling multiple sites efficiently.",
    responsibilities: [
      "Supervise installation and on-site execution activities.",
      "Manage daily site operations and discipline.",
      "Plan and allocate labour, plant fitters, and site staff.",
      "Maintain daily site records, logs, and reports.",
      "Coordinate and independently handle visits with Nagar Nigam / government officials.",
      "Ensure smooth coordination between site teams, vendors, management, and authorities.",
      "Handle and resolve site-related operational issues.",
    ].join("\n"),
    requirements: [
      "Diploma / Degree in Mechanical Engineering or relevant technical field (preferred).",
      "Freshers and experienced candidates can apply.",
      "Graduation in any discipline can also apply.",
    ].join("\n"),
    employmentType: "Full-Time",
    openings: 4,
  },
];

const courses = [
  {
    id: 1,
    title: "Sales/Collections Officer Training Program",
    duration: "15 Working Days (20 Hours)",
    salaryPotential: "Up to ₹3 LPA",
    image: "/img/services/Job Placement Assistance.png",
    description:
      "Kickstart your career in the BFSI sector with this intensive course. It blends industry-aligned theory with practical exposure to prepare you for high-impact roles in sales, collections, and client servicing.",
    learnings: [
      "Core principles of the Banking & Finance Industry.",
      "Understand Sales/Collections Officer roles and responsibilities.",
      "Master cold calling, client acquisition, and relationship management.",
      "Gain knowledge of Personal, Home, Business, and Vehicle Loans.",
      "Learn collection techniques and how to handle customer objections.",
      "Develop professional communication & negotiation skills.",
    ].join("\n"),
    skills: [
      "Sales Pitching",
      "Customer Handling",
      "Telecalling",
      "Lead Conversion",
      "Debt Recovery",
      "Negotiation & Persuasion",
      "Time Management",
      "Corporate Etiquette",
    ].join(", "),
  },

  {
    id: 2,
    title: "Relationship Manager Training Program",
    duration: "30 Working Days (45 Hours)",
    salaryPotential: "Up to ₹4.5 LPA",
    image: "/img/services/career guidness.png",
    description:
      "Designed for aspiring Relationship Managers, this program focuses on strategic client management and business growth. You will gain insights into managing high-value clients and executing effective banking and insurance solutions through real-life simulations.",
    learnings: [
      "Advanced Banking & Finance concepts.",
      "Client portfolio management and wealth planning.",
      "Cross-selling & upselling banking and insurance products.",
      "Customer relationship building and retention strategies.",
      "Fundamentals of Loan & Investment advisory.",
      "Effective communication, negotiation, and conflict resolution.",
    ].join("\n"),
    skills: [
      "Client Acquisition",
      "Relationship Management",
      "Financial Consultation",
      "Sales Strategy",
      "Problem Solving",
      "Professional Etiquette",
      "Reporting & Presentation",
    ].join(", "),
  },

  {
    id: 3,
    title: "Credit Officer Training Program",
    duration: "30 Working Days (45 Hours)",
    salaryPotential: "Up to ₹4 LPA",
    image: "/img/services/corpurate training.png",
    description:
      "Prepare for a critical role in credit assessment and risk management. This program teaches credit evaluation, documentation, and regulatory compliance, complemented with hands-on experience through loan appraisal exercises and mock audits.",
    learnings: [
      "Principles of Credit & Lending.",
      "Credit appraisal techniques and documentation processes.",
      "Risk assessment and mitigation strategies.",
      "Loan sanctioning and recovery management.",
      "Compliance and ethical banking practices.",
      "Using banking software for credit management.",
    ].join("\n"),
    skills: [
      "Credit Analysis",
      "Loan Structuring",
      "Risk Assessment",
      "Decision Making",
      "Documentation & Compliance",
      "Customer Communication",
      "Problem Solving",
    ].join(", "),
  },

  {
    id: 4,
    title: "Complete BFSI Operations Training Program",
    duration: "60 Working Days (90 Hours)",
    salaryPotential: "Up to ₹5 LPA",
    image: "/img/services/BFSI TRAING.jpg",
    description:
      "Become a versatile BFSI professional with this comprehensive program covering banking, insurance, sales, collections, credit, and customer service. Gain end-to-end operational expertise through live projects, case studies, and industry tools.",
    learnings: [
      "Comprehensive BFSI Industry overview.",
      "Banking Operations: Liability & Asset Management.",
      "Credit Evaluation & Loan Processing.",
      "Sales & Collection Strategies.",
      "Risk Management & Compliance.",
      "Customer Relationship Management and product knowledge.",
    ].join("\n"),
    skills: [
      "Multi-functional BFSI Operations",
      "Client Handling",
      "Telecalling",
      "Loan Appraisal",
      "Recovery Techniques",
      "Cross-Selling",
      "Compliance",
      "Professional Ethics",
    ].join(", "),
  },
];

async function seed() {
  console.log("🌱 Starting EMTA database seed...");

  for (const job of jobs) {
    await prisma.job.upsert({
      where: {
        slug: job.slug,
      },
      update: job,
      create: job,
    });
  }

  console.log(`✅ Seeded ${jobs.length} jobs`);

  for (const course of courses) {
    await prisma.course.upsert({
      where: {
        id: course.id,
      },
      update: course,
      create: course,
    });
  }

  console.log(`✅ Seeded ${courses.length} courses`);
  console.log("🎉 EMTA database seed completed");
}

seed()
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });