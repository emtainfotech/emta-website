const jobs = [
    // --- NEW SWIGGY VACANCY (TOP PRIORITY) ---
    {
        id: 1,
        title: 'Customer Support Executive (Chat & Voice Support)',
        company: 'EMTA', 
        logo: 'img/logo.png',
        location: 'Indore', // Standard EMTA location
        salary: '₹ 15,000 /Month CTC',
        description: 'We are looking for enthusiastic Customer Support Executives to join our team for the Swiggy Process. The role involves handling chat and voice-based queries of customers, ensuring quick resolution, and delivering a smooth customer experience.',
        responsibilities: [
            'Handle inbound/outbound calls and chat support for Swiggy customers.',
            'Resolve customer queries, complaints, and requests with professionalism.',
            'Ensure customer satisfaction through effective communication.',
            'Maintain records of interactions in the system.',
            'Work in coordination with the team to meet daily targets.'
        ],
        requirements: [
            'Minimum 12th Pass qualification.',
            'Freshers and experienced candidates can apply.',
            'Good communication skills in Hindi & English.',
            'Willingness to work in 24x7 rotational shifts.',
            'Ability to handle pressure and multitask.'
        ],
        employmentType: 'Full-Time, Rotational Shifts',
        openings: 300
    },

    // --- VACANCIES FROM PDF (Company set to EMTA) ---
    {
        id: 2,
        title: 'Wealth Management Associate',
        company: 'EMTA',
        logo: 'img/logo.png',
        location: 'Gurugram, Sec 30',
        salary: 'Best in Industry',
        description: 'This role involves market analysis, trade processing, and supporting investment clients with high-quality financial insights. We are seeking highly skilled candidates with strong expertise in cryptocurrency, equity markets, ETFs, mutual funds, wealth management, and trade settlements.',
        responsibilities: [
            'Conduct in-depth analysis of equities, ETFs, cryptocurrencies, and mutual funds ',
            'Monitor market trends, corporate actions, dividends, and company financials ',
            'Evaluate investment opportunities and prepare detailed research reports ',
            'Support strategies for wealth management and investment advisory'
        ],
        requirements: [
            'At least 6 months of relevant experience is mandatory ',
            'Exposure to equities, ETFs, mutual funds, and crypto instruments ',
            'Strong understanding of capital markets & investment products ',
            'Experience in portfolio analysis, market research, or client reporting ',
            'Advanced Excel (pivot tables, lookup formulas, MIS reports)'
        ],
        employmentType: 'Full-time (Backend Only) '
    },
    {
        id: 3,
        title: 'Clearing & Settlement Associate',
        company: 'EMTA',
        logo: 'img/logo.png',
        location: 'Gurugram, Sec 30',
        salary: 'Best in Industry',
        description: 'We are looking for an associate with strong understanding of the trade lifecycle and clearing & settlement processes. The role requires attention to detail, process discipline, and the ability to handle reconciliations and exception handling efficiently.',
        responsibilities: [
            'Execute and monitor equity, ETF, and crypto trades ',
            'Coordinate with exchanges, brokers, and custodians ',
            'Reconcile trades, positions, and funds ',
            'Monitor settlement cycles and resolve exceptions ',
            'Ensure regulatory and NISM compliance',
            'Maintain audit-ready records and reports '
        ],
        requirements: [
            '6 months+ experience in clearing & settlement, trade operations, or middle-office roles ',
            'Hands-on exposure to equity settlement cycles (T+1/T+2) ',
            'Knowledge of reconciliations, settlement breaks, and exception handling ',
            'Exposure to NSE/BSE settlement processes preferred '
        ],
        employmentType: 'Full-time (Backend Only)'
    },
    {
        id: 4,
        title: 'Tax Operations Associate',
        company: 'EMTA',
        logo: 'img/logo.png',
        location: 'Gurugram, Sec 30',
        salary: 'Best in Industry',
        description: 'The Tax Operations Associate will handle tax compliance, including GST, TDS/TCS, and Income Tax filings. Ideally suited for candidates with strong knowledge of Indian taxation laws and experience in financial services or broking firms.',
        responsibilities: [
            'Timely filing of GST, TDS/TCS, and Income Tax returns',
            'Prepare tax computations and reconciliations',
            'Assist during audits and compliance reviews',
            'Handle tax notices and queries',
            'Ensure adherence to latest tax laws and SOPs'
        ],
        requirements: [
            '6 months+ experience in tax operations, accounting, or compliance ',
            'Hands-on exposure to GST, TDS/TCS, and Income Tax filings ',
            'Experience with Form 16/16A, TRACES, and tax reconciliations ',
            'Strong knowledge of Indian taxation laws'
        ],
        employmentType: 'Full-time (Backend Only)'
    },
    {
        id: 5,
        title: 'Asset Servicing Associate',
        company: 'EMTA',
        logo: 'img/logo.png',
        location: 'Gurugram, Sec 30',
        salary: 'Best in Industry',
        description: 'Join our team as an Asset Servicing Associate to process corporate actions and manage entitlement reconciliations. Experience in portfolio accounting or fund operations is a plus.',
        responsibilities: [
            'Process and monitor corporate actions ',
            'Validate announcements, record dates, and payment details ',
            'Coordinate with custodians and internal teams ',
            'Reconcile entitlements and resolve mismatches ',
            'Maintain audit-ready records and MIS '
        ],
        requirements: [
            '6 months+ experience in asset servicing or corporate actions processing',
            'Exposure to dividends, bonuses, rights, mergers, and redemptions',
            'Experience coordinating with custodians, depositories (NSDL/CDSL), brokers',
            'Knowledge of entitlement processing & reconciliation '
        ],
        employmentType: 'Full-time (Backend Only)'
    },
    {
        id: 6,
        title: 'Corporate Actions Associate',
        company: 'EMTA',
        logo: 'img/logo.png',
        location: 'Gurugram, Sec 30',
        salary: 'Best in Industry',
        description: 'Focused on processing and validating corporate action events such as dividends, splits, bonuses, and buybacks. Requires strong reconciliation capabilities and Excel reporting skills.',
        responsibilities: [
            'Process and validate corporate action events',
            'Review announcements and record dates ',
            'Coordinate with custodians and brokers ',
            'Reconcile proceeds and resolve exceptions ',
            'Ensure timely posting of benefits'
        ],
        requirements: [
            '6 months+ experience in corporate actions processing ',
            'Hands-on experience in dividends, splits, bonuses, buybacks, mergers ',
            'Familiarity with exchange announcements and market notifications ',
            'Entitlement calculation skills and regulatory understanding '
        ],
        employmentType: 'Full-time (Backend Only)'
    },
    {
        id: 7,
        title: 'Trading Operations Associate',
        company: 'EMTA',
        logo: 'img/logo.png',
        location: 'Gurugram, Sec 30',
        salary: 'Best in Industry',
        description: 'Responsible for monitoring trading platforms, market connectivity, and resolving latency issues. Ideally suited for candidates with experience in brokerage, prop trading, or fintech firms.',
        responsibilities: [
            'Monitor trading platforms and market connectivity ',
            'Resolve latency, connectivity, or order-routing issues ',
            'Perform daily system health checks ',
            'Support UAT and system upgrades ',
            'Maintain incident logs and audit records '
        ],
        requirements: [
            '6 months+ experience in trading operations or OMS/EMS support ',
            'Exposure to trading platforms, order management systems, or exchange connectivity ',
            'Experience handling trading incidents, connectivity issues, or order failures ',
            'OMS/EMS & FIX protocol knowledge '
        ],
        employmentType: 'Full-time (Backend Only)'
    },

    // --- EXISTING JOBS (RE-INDEXED) ---
    {
        id: 8,
        title: 'Inside Sales Associate',
        company: 'Elite Manpower & Training Academy',
        logo: 'img/logo.png',
        location: 'Indore',
        salary: '₹ 15,000 - ₹ 25,000 /month',
        description: 'This role involves engaging with MediBuddy app users, influencing their healthcare decisions, and converting leads into successful sales. Strong communication, negotiation, and target-driven skills are essential.',
        responsibilities: [
            'Counsel and engage with approx. 100+ customers daily who have downloaded the MediBuddy app',
            'Influence customer preference and convert leads via scripted consultations',
            'Deliver tailored information regarding specialty services and surgery care',
            'Achieve monthly Inside Sales targets (Avg. 12 IPD conversions/month)',
            'Meet daily talk time target of 3.5 hours, and 66 hours monthly',
            'Expedite resolution of queries and complaints to ensure high customer satisfaction',
            'Maintain call quality and process compliance across all communications'
        ]
    },
    {
        id: 9,
        title: 'In-Clinic Operations Executive',
        company: 'Elite Manpower & Training Academy',
        logo: 'img/logo.png',
        location: 'Indore',
        salary: '₹ 15,000 - ₹ 22,000 /month',
        description: 'We are looking for a flexible and adaptable Associate to join our team, responsible for supporting the seamless execution of in-clinic doctor consultations. The role involves a range of responsibilities, including managing patient attendance, collecting prescriptions, and handling escalations. The trainee will be expected to work across multiple functions, ensuring smooth day-to-day operations. Strong communication skills and the ability to handle high call volumes are essential for this role.',
        responsibilities: [
            'Collecting and verifying patient attendance for scheduled in-clinic appointments.',
            'Organizing and managing prescriptions issued by doctors during consultations.',
            'Addressing any patient or appointment-related escalations, ensuring timely resolutions.',
            'Making a high volume of calls to coordinate with patients, doctors, and other stakeholders to ensure all activities are completed efficiently.',
            'Make calls to hospitals to confirm scheduled appointments.',
            'Ensure accurate recording and verification of appointment details.',
            'Conduct high-volume calls to coordinate with hospitals, patients, and other stakeholders.',
            'Maintain clear and effective communication to ensure all activities are completed efficiently.',
            'Handle any escalations related to appointments or patient concerns, ensuring timely and satisfactory resolutions.',
            'Work across multiple functions to support smooth operations.'
        ]
    },
    {
        id: 10,
        title: 'Escalation Desk Executive',
        company: 'Elite Manpower & Training Academy',
        logo: 'img/logo.png',
        location: 'Indore',
        salary: '₹ 13,000 - ₹ 18,000 /month',
        description: 'This role involves handling customer escalations (voice/non-voice), ensuring timely resolutions, and maintaining customer satisfaction in a rotational day shift environment.',
        responsibilities: [
            'Handle customer escalations effectively across voice and non-voice processes.',
            'Provide timely resolutions while maintaining high customer satisfaction levels.',
            'Analyze recurring issues and escalate to relevant teams for long-term solutions.',
            'Coordinate with internal teams to ensure quick turnaround on escalated cases.',
            'Document and maintain escalation logs with accuracy and process compliance.',
            'Maintain professionalism and empathy while handling sensitive customer concerns.',
            'Meet defined SLA timelines, quality standards, and performance targets.'
        ]
    },
    {
        id: 11,
        title: 'Graphic Designer',
        company: 'EMTA',
        logo: 'img/logo.png',
        location: 'Indore',
        salary: '₹ 18,000 - ₹ 25,000 /month',
        description: 'In this role, you will be responsible for creating visual designs and video content for a variety of projects, including social media, marketing materials, and more. This is a great opportunity for interns and entry-level candidates to gain experience and build their skills in graphic design and video editing.',
        responsibilities: [
            'Create visual designs and video content using tools such as Canva, Corel, Photoshop, and other graphic design and video editing software.',
            'Work with the marketing and creative teams to understand project requirements and deliver high-quality designs and videos.',
            'Collaborate with the rest of the team to ensure that designs and videos align with brand guidelines.',
            'Stay up-to-date with new design and video editing trends and technologies.',
            'Troubleshoot and debug issues as they arise.'
        ],
        role: 'Graphic Designer',
        industryType: 'IT Services & Consulting',
        department: 'UX, Design & Architecture',
        employmentType: 'Full Time, Permanent',
        experience: 'Minimum 1 Year (Fresher Not allowed)'
    },
    {
        id: 12,
        title: 'Business Development Executive',
        company: 'EMTA',
        logo: 'img/logo.png',
        location: 'Sudama Nagar, Indore, Madhya Pradesh (Preferred)',
        salary: '₹ 15,000 - ₹ 35,000 /month',
        description: 'As an Inside Sales Executive, you will play a key role in expanding our customer base for enterprise SaaS-based products. You will engage with potential customers through various channels, build relationships, and contribute to lead generation and conversion efforts.',
        responsibilities: [
            'Cold calls and emails to explore sales opportunities.',
            'Identify new sales opportunities and handle both inbound and outbound calls to follow up.',
            'Maintaining long-lasting relationships with existing customers through exceptional after-sales service.',
            'Developing in-depth knowledge of product features and benefits.',
            'Collaborate with teammates and work towards closing deals.',
            'Conduct online demos to prospect clients and seal deals.',
            'Stay current with trends and competitors to identify improvements or recommend new products.',
            'Working towards the achievement of set targets.'
        ],
        requirements: [
            'Graduation/Postgraduation in any discipline (marketing or related fields will be preferred).',
            'Minimum 1 year of relevant industry experience required. Freshers are not eligible.',
            'Excellent verbal and written communication skills.',
            'Self-motivated and driven by targets.',
            'Ability to create and deliver presentations.',
            'Ability to adapt and grow in a competitive environment.'
        ],
        education: 'Diploma (Preferred)',
        experience: 'Marketing: 1 year (Required)',
        language: 'Hindi & English (Preferred)'
    },
    {
        id: 13,
        title: 'Digital Marketing Expert',
        company: 'EMTA',
        logo: 'img/logo.png',
        location: 'Indore (On-site)',
        salary: 'Competitive salary based on experience and skillset',
        description: 'At EMTA, we are committed to building a strong digital presence that reflects our brand and drives real business results. We are currently seeking a highly skilled and creative Digital Marketing Expert to join our growing team in Indore.',
        responsibilities: [
            'Develop and execute digital marketing strategies across multiple channels (SEO, SEM, social media, email marketing, etc.)',
            'Manage and optimize Google Ads campaigns (Search, Display, YouTube, etc.)',
            'Conduct on-page and off-page SEO to improve organic rankings and visibility',
            'Design engaging content using Canva, Adobe Photoshop, or similar tools',
            'Write clear, creative, and compelling content for websites, blogs, social media, and ad campaigns',
            'Manage company and brand presence across social media platforms (Instagram, Facebook, LinkedIn, X, etc.)',
            'Create and edit video content for reels, ads, and promotional campaigns',
            'Track campaign performance and deliver detailed performance reports using analytics tools',
            'Stay up to date with the latest trends and algorithm updates in digital marketing'
        ],
        qualifications: [
            'Minimum 2+ years of hands-on experience in digital marketing',
            'Strong knowledge of SEO (tools like SEMrush, Ahrefs, Google Search Console)',
            'Proficient in Google Ads, Google Analytics, and Meta Business Manager',
            'Skilled in content creation, copywriting, and social media management',
            'Hands-on experience with Canva, Photoshop, and basic video editing tools',
            'Excellent communication and presentation skills',
            'Ability to work both independently and collaboratively in a fast-paced environment'
        ],
        bonusSkills: [
            'Email marketing platforms (e.g., Mailchimp, Sendinblue)',
            'Basic knowledge of HTML/CSS for landing pages',
            'Influencer marketing coordination',
            'Experience with WordPress or CMS platforms'
        ],
        employmentType: 'Full-Time',
        experience: 'Minimum 2 Years'
    },
    {
        id: 14,
        title: 'Business Development Executive / Manager (Real Estate)',
        company: 'EMTA',
        logo: 'img/logo.png',
        location: 'New Palasia, Indore',
        salary: 'Attractive incentives',
        description: 'We are looking for a dynamic and results-driven Business Development Executive / Manager to join our growing team at Aditya Developer. The ideal candidate should have a passion for real estate, excellent communication skills, and a proven track record in sales or client acquisition.',
        responsibilities: [
            'Identify and develop new business opportunities in the real estate sector.',
            'Generate leads through various channels – networking, online platforms, referrals, etc.',
            'Conduct market research to identify trends, opportunities, and competitors.',
            'Meet potential clients to understand their property needs and offer appropriate solutions.',
            'Build and maintain strong relationships with clients, brokers, and channel partners.',
            'Achieve monthly and quarterly sales targets.',
            'Coordinate with the marketing team to execute promotional campaigns.',
            'Provide regular reports on business development activities and pipeline status to management.',
            'Attend site visits and assist in closing property deals.',
            'Stay updated with industry developments, pricing trends, and regulatory changes.'
        ],
        skills: [
            'Excellent communication and negotiation skills',
            'Strong interpersonal and client relationship management',
            'Target-driven with a focus on results',
            'Ability to work independently and in a team',
            'Proficient in MS Office and CRM tools',
            'Knowledge of the Indore real estate market will be a plus'
        ],
        qualifications: [
            'Bachelor’s degree in Business, Marketing, or related field',
            '2+ years of experience in real estate sales or business development (preferred)',
            'Freshers with strong motivation and communication skills may also apply'
        ],
        employmentType: 'Full-Time',
        contact: {
            email: 'hrmetro701@gmail.com',
            phone: '9109710701',
            website: 'https://metrogroupindore.com/'
        }
    },
    {
        id: 15,
        title: 'Site Supervisor / Installation Supervisor / Site Manager',
        company: 'EMTA', 
        logo: 'img/logo.png',
        location: ' Bhopal & other project sites (as per project requirements)', // Standard EMTA location
        salary: '₹ 15,000 - 20,000 /Month CTC',
        description: 'We are hiring Site Supervisors / Installation Supervisors / Site Managers to manage on-site installation andexecution activities. The role involves manpower management, site administration, coordination with government authorities (Nagar Nigam), and handling multiple sites efficiently.',
        responsibilities: [
            'Supervise installation and on-site execution activities',
            'Manage daily site operations and discipline',
            'Plan and allocate labour, plant fitters, and site staff',
            'Maintain daily site records, logs, and reports',
            'Coordinate and independently handle visits with Nagar Nigam / government officials',
            'Ensure smooth coordination between site teams, vendors, management, and authorities',
            'Handle and resolve site-related operational issues'
        ],
        requirements: [
            'Diploma / Degree in Mechanical Engineering or relevant technical field (preferred)',
            'Freshers and experienced candidates can apply.',
            'Graduation in any discipline can also apply.'
        ],
        employmentType: 'Full-Time',
        openings: 04
    }
];

// Function to generate the HTML for a single job card
function createJobCardHTML(job) {
    return `
        <div class="col-xl-3 col-lg-4 col-md-6">
            <div class="job-card-design">
                <div class="card-top-section">
                    <div class="hiring-status-tag">
                        <i class="fas fa-chart-line"></i> Actively hiring
                    </div>
                    <div class="header-content">
                        <div class="job-info">
                            <h5 class="job-info-title">${job.title}</h5>
                            <p class="job-info-company">${job.company}</p>
                        </div>
                        <img src="${job.logo}" alt="${job.company} Logo" class="company-logo-img">
                    </div>
                </div>
                
                <div class="card-middle-section">
                    <p class="job-detail-item"><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
                    <p class="job-detail-item"><i class="fas fa-rupee-sign"></i> ${job.salary}</p>
                </div>
                
                <div class="card-bottom-section">
                    <span class="job-category-tag">Job</span>
                    <a href="job-details.html?id=${job.id}" class="view-details-link">View details <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const indexContainer = document.getElementById('job-listings-container');
    const careerContainer = document.getElementById('all-jobs-container');

    // --- Logic for the Index Page ---
    if (indexContainer) {
        // Display only the first 4 jobs
        const featuredJobs = jobs.slice(0, 4);
        indexContainer.innerHTML = featuredJobs.map(createJobCardHTML).join('');

        // If there are more than 4 jobs in total, add the "View All" button
        if (jobs.length > 4) {
            const viewAllButtonHTML = `
                <div class="col-12 text-center mt-4">
                    <a href="careers.html" class="btn btn-primary rounded-pill py-3 px-5">View All Openings</a>
                </div>
            `;
            // Insert the button after the container of jobs
            indexContainer.insertAdjacentHTML('afterend', viewAllButtonHTML);
        }
    }

    // --- Logic for the Career Page ---
    if (careerContainer) {
        // Display all jobs
        careerContainer.innerHTML = jobs.map(createJobCardHTML).join('');
    }
});