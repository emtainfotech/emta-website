import os
import json

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
jobs_dir = os.path.join(base_dir, "jobs")
os.makedirs(jobs_dir, exist_ok=True)

jobs_data = [
    {
        "slug": "customer-care-executive-vijay-nagar",
        "title": "Customer Care Executive | Multiple Processes",
        "short_location": "Indore",
        "location": "Vijay Nagar, Indore",
        "city": "Indore",
        "region": "Madhya Pradesh",
        "postal_code": "452010",
        "street_address": "Flat No. 102, Vatsalya, AF-3, Scheme No. 54, Vijay Nagar",
        "min_salary": 10500,
        "max_salary": 16500,
        "salary": "₹10,500 - ₹16,500 + Incentives",
        "experience": "Freshers & Experienced",
        "employment_type": "Full Time",
        "shift": "Day / Rotational Shifts",
        "image": "cce_vijay_nagar_1788778541977.jpg",
        "meta_desc": "Hiring Customer Care Executives for multiple processes in Vijay Nagar, Indore. Salary up to ₹16,500 + incentives. Freshers and graduates can apply.",
        "description": """
            <p class="lead text-muted">We are hiring enthusiastic Customer Care Executives with strong communication skills and a customer-focused approach to join our growing team in Vijay Nagar, Indore.</p>
            <p>This is a great career opportunity for individuals who want to build a career in customer experience and relationship management. We offer multiple prestigious voice and non-voice processes with attractive incentive structures.</p>
        """,
        "process_breakdown": """
            <div class="table-responsive my-3">
                <table class="table table-bordered table-striped align-middle">
                    <thead class="table-primary">
                        <tr>
                            <th>Process Name</th>
                            <th>Offered Salary</th>
                            <th>Incentives</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Airtel Black Platinum</strong></td><td>₹16,500 / month</td><td>+ Performance Incentives</td></tr>
                        <tr><td><strong>Airtel Black Gold</strong></td><td>₹15,500 / month</td><td>+ Performance Incentives</td></tr>
                        <tr><td><strong>IPRU Process</strong></td><td>₹13,130 / month</td><td>+ Incentives</td></tr>
                        <tr><td><strong>TVS Process</strong></td><td>₹12,000 / month</td><td>+ Performance Incentives</td></tr>
                        <tr><td><strong>Airtel Broadband</strong></td><td>₹11,300 / month</td><td>+ Performance Incentives</td></tr>
                        <tr><td><strong>IBL Process</strong></td><td>₹10,500 / month</td><td>+ Performance Incentives</td></tr>
                    </tbody>
                </table>
            </div>
        """,
        "responsibilities": [
            "Handle inbound and outbound customer calls professionally and courteously.",
            "Resolve customer queries, complaints, and requests with accuracy and empathy.",
            "Maintain a positive and professional attitude while communicating with customers.",
            "Ensure customer satisfaction by providing first-call resolution and timely follow-ups.",
            "Maintain records of customer interactions and update the CRM system accordingly.",
            "Escalate complex, unresolved issues to the respective supervisory team when required.",
            "Consistently meet and exceed individual and team quality and performance targets."
        ],
        "requirements": [
            "Undergraduates and Graduates from any stream can apply.",
            "Freshers and experienced candidates are both welcome.",
            "Good verbal communication skills in Hindi and basic English.",
            "Basic computer knowledge and typing skills.",
            "Customer service orientation with strong problem-solving ability.",
            "Ability to work in team environment and handle customer queries under pressure."
        ],
        "perks": """
            <div class="row g-3">
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-coins text-warning me-2"></i><strong>Attractive Incentives:</strong> Performance bonuses above fixed salary.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-users text-primary me-2"></i><strong>Friendly Environment:</strong> Supportive team and modern work floor.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-graduation-cap text-success me-2"></i><strong>Training Support:</strong> Comprehensive onboarding & product training.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-user-plus text-info me-2"></i><strong>Referral Bonuses:</strong> Candidate references are welcome & rewarded.</div></div>
            </div>
        """
    },
    {
        "slug": "inside-sales-executive",
        "title": "Inside Sales Associate / Sr. Associate",
        "short_location": "Indore",
        "location": "Indore | On-site",
        "city": "Indore",
        "region": "Madhya Pradesh",
        "postal_code": "452010",
        "street_address": "Flat No. 102, Vatsalya, AF-3, Scheme No. 54, Vijay Nagar",
        "min_salary": 17000,
        "max_salary": 25000,
        "salary": "₹17,000 – ₹25,000/month (Up to ₹3.6 LPA + Incentives)",
        "experience": "Freshers to 1 Year",
        "employment_type": "Full Time",
        "shift": "Day Shift (No Night Shifts)",
        "image": "inside_sales_associate_1788778698431.jpg",
        "meta_desc": "Hiring Inside Sales Associate / Sr. Associate in Indore. Day shifts, 6 days working, salary up to ₹25,000/mo + ₹2.5 LPA incentives. Apply now!",
        "description": """
            <p class="lead text-muted">We are hiring dynamic, driven Inside Sales Associates and Senior Associates to join our sales team in Indore. If you have great persuasive communication and love hitting targets, this role offers rapid career progression!</p>
            <p>Enjoy a stable work-life balance with <strong>pure day shifts</strong> (no night shifts), comprehensive paid training, and an uncapped incentive structure allowing you to earn up to ₹2.5 LPA in bonuses.</p>
        """,
        "process_breakdown": """
            <div class="alert alert-primary d-flex align-items-center mb-4">
                <i class="fas fa-award fa-2x me-3 text-primary"></i>
                <div>
                    <strong>Shift & Training Highlights:</strong><br>
                    <span>Day Shift Only • 6 Days Working (Rotational Week-offs) • 1 Week Paid Comprehensive Training + Mock Call Assessment</span>
                </div>
            </div>
        """,
        "responsibilities": [
            "Handle 100+ outbound consultative calls daily to interested prospective clients.",
            "Counsel potential customers, understand their requirements, and provide tailored product/service solutions.",
            "Influence customer preference and convert high-intent leads via structured consultations.",
            "Consistently meet and exceed monthly Inside Sales revenue and conversion targets.",
            "Build and nurture long-lasting customer relationships through high-quality engagement.",
            "Maintain accurate call logs, follow-up schedules, and deal updates in CRM software.",
            "Maintain high call quality, adherence to scripts, and brand compliance."
        ],
        "requirements": [
            "Post Graduate qualification is Mandatory (MBA / PGDM / M.Com etc.).",
            "Freshers to 1 Year experience in Inside Sales / Telesales / Telecounseling.",
            "Excellent verbal and written communication in English & Hindi.",
            "Strong convincing, objection-handling, and negotiation skills.",
            "Target-driven, ambitious, and self-motivated mindset.",
            "Immediate joiners are highly preferred."
        ],
        "perks": """
            <div class="row g-3">
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-trophy text-warning me-2"></i><strong>High Incentives:</strong> Earn up to ₹2.5 LPA over fixed CTC.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-sun text-warning me-2"></i><strong>Pure Day Shift:</strong> 100% Day shift schedule, zero night shifts.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-chalkboard-teacher text-primary me-2"></i><strong>Paid Training:</strong> Full 1-week professional sales training.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-chart-line text-success me-2"></i><strong>Fast Career Track:</strong> Opportunity to advance to Team Lead & Manager.</div></div>
            </div>
        """
    },
    {
        "slug": "customer-care-swiggy",
        "title": "Customer Care Executive – Chat / Voice Process (Swiggy)",
        "short_location": "Indore",
        "location": "Indore, Madhya Pradesh",
        "city": "Indore",
        "region": "Madhya Pradesh",
        "postal_code": "452010",
        "street_address": "Flat No. 102, Vatsalya, AF-3, Scheme No. 54, Vijay Nagar",
        "min_salary": 11000,
        "max_salary": 15644,
        "salary": "₹11,000 – ₹13,500 In-hand (Up to ₹15,644 CTC)",
        "experience": "Freshers & Experienced",
        "employment_type": "Full Time",
        "shift": "Rotational Shifts (6 Days Working)",
        "image": "cce_swiggy_1788778717527.jpg",
        "meta_desc": "Hiring Customer Care Executives for Swiggy Chat and Voice processes in Indore. Freshers welcome, rotational shifts, salary up to ₹15,644 CTC. Apply today!",
        "description": """
            <p class="lead text-muted">Join one of India's leading consumer tech brands! We are hiring enthusiastic Customer Support Executives for the Swiggy Chat and Voice Support processes in Indore.</p>
            <p>You will be responsible for assisting customers, delivery partners, and restaurants with real-time order inquiries, issue resolution, and delivering delight on every interaction.</p>
        """,
        "process_breakdown": """
            <div class="row g-3 mb-4">
                <div class="col-md-4">
                    <div class="card border-primary text-center p-3 h-100">
                        <i class="fas fa-comments fa-2x text-primary mb-2"></i>
                        <h6 class="fw-bold mb-1">Chat Support</h6>
                        <small class="text-muted">Digital chat-based assistance for live Swiggy orders.</small>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-primary text-center p-3 h-100">
                        <i class="fas fa-headset fa-2x text-primary mb-2"></i>
                        <h6 class="fw-bold mb-1">Voice Support</h6>
                        <small class="text-muted">Inbound & outbound telephonic query resolution.</small>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-primary text-center p-3 h-100">
                        <i class="fas fa-language fa-2x text-primary mb-2"></i>
                        <h6 class="fw-bold mb-1">Hindi Voice</h6>
                        <small class="text-muted">Regional voice customer support process.</small>
                    </div>
                </div>
            </div>
        """,
        "responsibilities": [
            "Handle customer queries via chat or voice in a fast-paced, professional manner.",
            "Provide accurate, timely, and effective resolutions for order delays, refunds, or status updates.",
            "De-escalate situations with upset customers through patience and empathy.",
            "Maintain high customer satisfaction scores (CSAT) and adhere to quality guidelines.",
            "Follow company standard operating procedures (SOPs) and safety protocols.",
            "Accurately document customer queries and feedback in the internal CRM tool.",
            "Collaborate with internal teams to resolve courier and restaurant partner discrepancies."
        ],
        "requirements": [
            "Minimum 12th Pass or any Graduate.",
            "Male candidates (for Chat & Voice processes due to rotational shift flexibility).",
            "Basic to good communication skills in English & Hindi.",
            "Basic typing and computer knowledge (minimum 20-25 WPM for chat).",
            "Both freshers and experienced candidates are encouraged to apply.",
            "Willingness to work in rotational 24/7 shifts."
        ],
        "perks": """
            <div class="row g-3">
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-building text-primary me-2"></i><strong>Brand Exposure:</strong> Work on high-volume Swiggy customer care.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-hand-holding-usd text-success me-2"></i><strong>Performance Incentives:</strong> Monthly incentive payout on CSAT.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-clock text-info me-2"></i><strong>Rotational Week-offs:</strong> 6 days working schedule with planned offs.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-certificate text-warning me-2"></i><strong>Skill Development:</strong> Full customer service certification and training.</div></div>
            </div>
        """
    },
    {
        "slug": "customer-success-associate-vivint",
        "title": "Customer Success Associate - Vivint Voice Process",
        "short_location": "Gurugram",
        "location": "Sector 30, Gurugram (Work From Office)",
        "city": "Gurugram",
        "region": "Haryana",
        "postal_code": "122001",
        "street_address": "Sector 30, Gurugram",
        "min_salary": 25000,
        "max_salary": 32500,
        "salary": "Up to ₹32,500 CTC / month",
        "experience": "Min. 6 Months (International Voice)",
        "employment_type": "Full Time",
        "shift": "5 Days Working | Rotational Shifts",
        "image": "csa_vivint_1788778780545.jpg",
        "meta_desc": "Hiring Customer Success Associates for Vivint Voice Process in Sector 30, Gurugram. 5 days working, salary up to 32.5K CTC. International voice experience required.",
        "description": """
            <p class="lead text-muted">We are hiring talented Customer Success Associates for the prestigious <strong>Vivint Voice Process</strong> based in Sector 30, Gurugram. This is a premium opportunity for candidates with international voice support expertise.</p>
            <p>Vivint is a leading smart home technology provider. You will deliver premium customer experience and troubleshooting support to customers across North America.</p>
        """,
        "process_breakdown": """
            <div class="alert alert-info border-0 shadow-sm p-4 mb-4">
                <h5 class="fw-bold text-dark"><i class="fas fa-clipboard-check me-2"></i>Interview & Assessment Process:</h5>
                <ol class="mb-0 ps-3">
                    <li class="mb-1"><strong>Round 1:</strong> Initial HR Screening & Profile Evaluation</li>
                    <li class="mb-1"><strong>Round 2:</strong> AMCAT / Language & Aptitude Assessment</li>
                    <li><strong>Round 3:</strong> Final Operations & Process Round</li>
                </ol>
            </div>
        """,
        "responsibilities": [
            "Handle inbound voice calls from international customers regarding smart-home solutions.",
            "Assist customers with technical troubleshooting, hardware setup, and service inquiries.",
            "Ensure highest levels of customer satisfaction (CSAT) and First Contact Resolution (FCR).",
            "Maintain detailed case logs and notes in CRM software following standard documentation procedures.",
            "Adhere to strict international quality, security, and compliance benchmarks.",
            "Achieve performance KPIs, including Average Handling Time (AHT) and Quality Scores."
        ],
        "requirements": [
            "Graduate or Undergraduate (both eligible).",
            "Minimum 6 months of mandatory experience in an International Voice Process.",
            "Prior technical support / smart home / hardware troubleshooting experience is mandatory.",
            "Flawless written and verbal communication in English (US accent neutralization preferred).",
            "Strong customer empathy, active listening, and problem-solving abilities.",
            "Comfortable working in a 24/7 rotational shift environment (5 days working, 2 days off)."
        ],
        "perks": """
            <div class="row g-3">
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-calendar-alt text-primary me-2"></i><strong>5 Days Working:</strong> 2 consecutive rotational weekly off days.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-laptop-house text-success me-2"></i><strong>Modern Office:</strong> World-class infrastructure at Sector 30, Gurugram.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-money-check-alt text-info me-2"></i><strong>Top Compensation:</strong> Best-in-industry salary up to ₹32,500 CTC.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-globe text-warning me-2"></i><strong>Global Exposure:</strong> Direct interaction with North American clients.</div></div>
            </div>
        """
    },
    {
        "slug": "customer-support-walmart",
        "title": "Customer Support Executive (International Voice - Walmart)",
        "short_location": "Jaipur",
        "location": "Jaipur, Rajasthan",
        "city": "Jaipur",
        "region": "Rajasthan",
        "postal_code": "302001",
        "street_address": "Jaipur Business District",
        "min_salary": 30000,
        "max_salary": 34000,
        "salary": "₹30,000 - ₹34,000 CTC / month",
        "experience": "Min. 6 Months (International Voice)",
        "employment_type": "Full Time",
        "shift": "5.5 Days Working | Rotational Shifts",
        "image": "cse_walmart_1788778917679.jpg",
        "meta_desc": "Hiring Customer Support Executive for Walmart International Voice Process in Jaipur. 25 openings, salary up to ₹34,000 CTC, night shift allowance & cab facility.",
        "description": """
            <p class="lead text-muted">Exciting opportunity to join the global retail leader! We are hiring 25 Customer Support Executives for the Walmart International Voice Process in Jaipur, Rajasthan.</p>
            <p>If you have experience in an international voice process with strong English communication, build your career with a world-renowned brand offering great pay and transportation benefits.</p>
        """,
        "process_breakdown": """
            <div class="card bg-light border-0 p-4 mb-4">
                <div class="row align-items-center">
                    <div class="col-md-6 mb-3 mb-md-0">
                        <span class="badge bg-danger mb-2">Urgent Requirement</span>
                        <h5 class="fw-bold mb-1"><i class="fas fa-users me-2 text-primary"></i>25 Open Vacancies</h5>
                        <p class="text-muted mb-0">5.5 Days Working • Rotational Shifts & Rotational Week Offs</p>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 bg-white rounded border">
                            <strong>Language Requirement:</strong><br>
                            <span class="text-primary font-monospace">Versant Level: C1 US Voice Required</span>
                        </div>
                    </div>
                </div>
            </div>
        """,
        "responsibilities": [
            "Handle customer queries and concerns via voice support for Walmart US/International customers.",
            "Provide accurate, timely, and delightful resolutions regarding orders, shipments, returns, and refunds.",
            "Maintain world-class customer satisfaction (CSAT) and Net Promoter Scores (NPS).",
            "Strictly adhere to Walmart process guidelines, retail compliance policies, and quality standards.",
            "Accurately document customer interactions and case resolutions in CRM databases."
        ],
        "requirements": [
            "Any Graduate or Undergraduate can apply.",
            "Minimum 6 months of mandatory experience in an International Voice Process.",
            "Excellent spoken English communication skills (Versant C1 Level proficiency).",
            "Prior Customer Support experience is mandatory.",
            "Candidates with E-commerce customer care background will be given high preference.",
            "Flexibility to work in rotational shifts including night shifts."
        ],
        "perks": """
            <div class="row g-3">
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-taxi text-primary me-2"></i><strong>Cab Facility:</strong> One-sided cab facility for female staff during odd hours.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-moon text-warning me-2"></i><strong>Night Allowance:</strong> ₹180 per night shift allowance for male employees.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-shopping-cart text-success me-2"></i><strong>E-commerce Giant:</strong> Work on the world's #1 retail giant portfolio.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-wallet text-info me-2"></i><strong>Solid CTC:</strong> High fixed salary range from ₹30,000 to ₹34,000 CTC.</div></div>
            </div>
        """
    },
    {
        "slug": "customer-support-seller-support",
        "title": "Customer Support Executive – International Chat Process (Seller Support)",
        "short_location": "Pune",
        "location": "Kharadi, Pune (In-Office)",
        "city": "Pune",
        "region": "Maharashtra",
        "postal_code": "411014",
        "street_address": "Office No. 214, 2nd Floor, Rush Hub Bliss Bay, Near Kothari Hyundai, Kharadi",
        "min_salary": 22000,
        "max_salary": 32000,
        "salary": "Up to ₹32,000 CTC/month + Incentives",
        "experience": "Min. 1 Year (Voice/Chat)",
        "employment_type": "Full Time",
        "shift": "5.5 Days Working | Rotational Shifts",
        "image": "cse_seller_support_1788778937826.jpg",
        "meta_desc": "Hiring Customer Support Executive for International Chat Process (Seller Support) in Kharadi, Pune. Salary up to ₹32,000 CTC + incentives, cab facility provided.",
        "description": """
            <p class="lead text-muted">Are you experienced in international chat support and seller ecosystem operations? Here is your chance to grow with a global CX leader in Kharadi, Pune!</p>
            <p>This role focuses on assisting e-commerce sellers with their storefronts, listing management, payment reconciliations, order dispatches, and policy queries via live digital chat.</p>
        """,
        "process_breakdown": """
            <div class="card bg-light border-0 p-4 mb-4">
                <h6 class="fw-bold text-dark mb-2"><i class="fas fa-map-marker-alt text-danger me-2"></i>Work & Interview Location:</h6>
                <p class="mb-0 text-muted">
                    Office No. 214, 2nd Floor, Rush Hub Bliss Bay, Near Kothari Hyundai, Kharadi, Pune – 411014.<br>
                    <strong>Schedule:</strong> 5.5 Days Working, Rotational Shifts (Cab facility provided).
                </p>
            </div>
        """,
        "responsibilities": [
            "Handle high-volume international chat queries concurrently with speed and accuracy.",
            "Provide end-to-end seller support for global e-commerce marketplace sellers.",
            "Resolve seller issues regarding product listings, account health, payments, and fulfillment.",
            "Maintain impeccable written standards, grammar, and brand tone throughout chat interactions.",
            "Identify recurring seller pain points and coordinate with technical teams for resolution."
        ],
        "requirements": [
            "Undergraduates and Graduates from any stream are welcome.",
            "Minimum 1 year experience in an International Voice or Chat process.",
            "Prior E-commerce Seller Support experience is MANDATORY.",
            "Excellent written English communication skills and rapid typing speed (35+ WPM).",
            "Comfortable working in a 24/7 rotational shift schedule."
        ],
        "perks": """
            <div class="row g-3">
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-car text-primary me-2"></i><strong>Cab Facility:</strong> Pick & drop cab facility provided as per shift timings.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-money-bill-wave text-success me-2"></i><strong>Attractive Incentives:</strong> Performance-driven bonuses over fixed pay.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-keyboard text-info me-2"></i><strong>Pure Chat Support:</strong> Non-voice, chat-focused seller engagement.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-laptop-code text-warning me-2"></i><strong>Tech Hub Location:</strong> Situated in the premier IT corridor of Kharadi, Pune.</div></div>
            </div>
        """
    },
    {
        "slug": "senior-accountant",
        "title": "Senior Accountant",
        "short_location": "Indore",
        "location": "Indore, Madhya Pradesh",
        "city": "Indore",
        "region": "Madhya Pradesh",
        "postal_code": "452010",
        "street_address": "Flat No. 102, Vatsalya, AF-3, Scheme No. 54, Vijay Nagar",
        "min_salary": 30000,
        "max_salary": 50000,
        "salary": "₹30,000 – ₹50,000 per month",
        "experience": "10 – 15 Years",
        "employment_type": "Full Time",
        "shift": "General Day Shift",
        "image": "senior_accountant_1788779098385.jpg",
        "meta_desc": "Hiring Senior Accountant in Indore with 10-15 years experience. Expert in Tally, GST, TDS, MIS reports, and finalization. Salary up to ₹50,000/month.",
        "description": """
            <p class="lead text-muted">We are hiring a seasoned Senior Accountant to oversee end-to-end accounting operations, statutory compliance, taxation, banking, MIS reporting, and audit activities in Indore.</p>
            <p>If you have extensive experience managing corporate financial accounts, reconciliations, and leadership over accounting operations, this is a strategic role with high responsibility.</p>
        """,
        "process_breakdown": """
            <div class="specs-grid">
                <div class="spec-item">
                    <div class="spec-icon"><i class="fas fa-file-invoice-dollar"></i></div>
                    <div class="spec-text"><small>Core Tool</small><strong>Tally Prime / ERP 9</strong></div>
                </div>
                <div class="spec-item">
                    <div class="spec-icon"><i class="fas fa-calculator"></i></div>
                    <div class="spec-text"><small>Compliance</small><strong>GST, TDS & IT</strong></div>
                </div>
                <div class="spec-item">
                    <div class="spec-icon"><i class="fas fa-table"></i></div>
                    <div class="spec-text"><small>Analytics</small><strong>Advanced Excel</strong></div>
                </div>
                <div class="spec-item">
                    <div class="spec-icon"><i class="fas fa-user-tie"></i></div>
                    <div class="spec-text"><small>Experience</small><strong>10-15 Years</strong></div>
                </div>
            </div>
        """,
        "responsibilities": [
            "Manage daily accounting transactions: purchases, sales, receipts, payments, journals, ledgers, cash books, and voucher verification.",
            "Handle banking and treasury: bank reconciliations, petty cash, NEFT, RTGS, IMPS, cheque issuances, and liquidity monitoring.",
            "Oversee GST and taxation: monthly GST returns (GSTR-1, GSTR-3B), GSTR-2B reconciliations, and TDS calculation and return filings.",
            "Manage accounts receivable and payable: vendor payment cycles, customer collections, and aging analysis.",
            "Prepare monthly MIS reports, financial forecasts, variance analysis, and assist in balance sheet finalization and annual closing.",
            "Oversee inventory control: stock valuation, reconciliation of inventory records with stores and procurement departments.",
            "Lead statutory audits, internal audits, and tax assessments ensuring zero compliance lapses."
        ],
        "requirements": [
            "10 to 15 Years of proven accounting experience.",
            "B.Com / M.Com / MBA (Finance) or equivalent degree.",
            "High proficiency in Tally ERP 9 / Tally Prime.",
            "Advanced MS Excel expertise (Pivot Tables, VLOOKUP, XLOOKUP, Nested Formulas).",
            "In-depth practical knowledge of GST laws, TDS deductions, and Indian Income Tax regulations.",
            "Strong analytical, organizational, and team management capabilities."
        ],
        "perks": """
            <div class="row g-3">
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-landmark text-primary me-2"></i><strong>Stable Leadership Role:</strong> Senior key stakeholder position.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-money-bill-alt text-success me-2"></i><strong>Competitive Salary:</strong> ₹30,000 – ₹50,000/month commensurate with experience.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-sun text-warning me-2"></i><strong>Corporate Hours:</strong> Fixed daytime working schedule.</div></div>
                <div class="col-sm-6"><div class="p-3 bg-light rounded border"><i class="fas fa-building text-info me-2"></i><strong>Central Location:</strong> Established corporate office in Indore.</div></div>
            </div>
        """
    }
]

def build_job_schema_json(job):
    schema_dict = {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": job["title"],
        "description": f"<p>{job['meta_desc']}</p><p>Key Responsibilities: {', '.join(job['responsibilities'])}</p><p>Requirements: {', '.join(job['requirements'])}</p>",
        "identifier": {
            "@type": "PropertyValue",
            "name": "EMTA",
            "value": f"EMTA-{job['slug'].upper()}"
        },
        "datePosted": "2026-01-15T09:00:00+05:30",
        "validThrough": "2026-12-31T23:59:59+05:30",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "Elite Manpower and Training Academy (EMTA)",
            "sameAs": "https://emta.co.in",
            "logo": "https://emta.co.in/f.png"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": job.get("street_address", "Flat No. 102, Vatsalya, AF-3, Scheme No. 54, Vijay Nagar"),
                "addressLocality": job.get("city", "Indore"),
                "addressRegion": job.get("region", "Madhya Pradesh"),
                "postalCode": job.get("postal_code", "452010"),
                "addressCountry": "IN"
            }
        },
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": {
                "@type": "QuantitativeValue",
                "minValue": job.get("min_salary", 15000),
                "maxValue": job.get("max_salary", 25000),
                "unitText": "MONTH"
            }
        },
        "applicantLocationRequirements": {
            "@type": "Country",
            "name": "India"
        },
        "directApply": True,
        "experienceRequirements": job.get("experience", "Freshers to Experienced")
    }
    return json.dumps(schema_dict, indent=2)

def build_job_page_html(job):
    duty_items = "\n".join([f"<li>{r}</li>" for r in job["responsibilities"]])
    req_items = "\n".join([f"<li>{r}</li>" for r in job["requirements"]])
    job_schema_json = build_job_schema_json(job)
    
    html = f"""<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>{job["title"]} | EMTA Job Openings</title>
    <meta name="description" content="{job["meta_desc"]}" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta name="keywords" content="EMTA jobs, {job["title"]}, Indore jobs, careers, job consultancy" />

    <link rel="shortcut icon" href="../../m.png" type="image/x-icon">
    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:slnt,wght@-10..0,100..900&display=swap" rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link rel="preload" href="../../lib/animate/animate.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="../../lib/animate/animate.min.css"></noscript>
    <link rel="preload" href="../../lib/lightbox/css/lightbox.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="../../lib/lightbox/css/lightbox.min.css"></noscript>
    <link rel="preload" href="../../lib/owlcarousel/assets/owl.carousel.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="../../lib/owlcarousel/assets/owl.carousel.min.css"></noscript>

    <!-- Customized Bootstrap Stylesheet -->
    <link href="../../css/bootstrap.min.css" rel="stylesheet">
    <link rel="canonical" href="https://emta.co.in/jobs/{job["slug"]}/">
    <!-- Template Stylesheet -->
    <link href="../../css/style.css" rel="stylesheet">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-LEH0WEMW59"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {{ dataLayer.push(arguments); }}
        gtag('js', new Date());
        gtag('config', 'G-LEH0WEMW59');
    </script>
    
    <!-- Google Jobs Structured Data (Schema.org) -->
    <script type="application/ld+json">
{job_schema_json}
    </script>

    <style>
        body {{
            background-color: #f8f9fa;
        }}
        .page-header-job {{
            background: linear-gradient(135deg, #071e3d 0%, #1a3c61 100%);
            color: #fff;
            padding: 45px 0 35px 0;
            margin-bottom: 35px;
            border-bottom: 3px solid #0d6efd;
        }}
        .page-header-job .breadcrumb {{
            background: transparent;
            margin-bottom: 12px;
            padding: 0;
        }}
        .page-header-job .breadcrumb-item, 
        .page-header-job .breadcrumb-item a {{
            color: rgba(255,255,255,0.75);
            font-size: 0.9rem;
            text-decoration: none;
        }}
        .page-header-job .breadcrumb-item.active {{
            color: #fff;
            font-weight: 600;
        }}
        .page-header-job .breadcrumb-item+.breadcrumb-item::before {{
            color: rgba(255,255,255,0.5);
        }}
        .job-main-card {{
            background-color: #fff;
            padding: 35px;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 16px rgba(0,0,0,0.04);
            margin-bottom: 30px;
        }}
        .job-banner-img {{
            width: 100%;
            max-height: 420px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 0 4px 14px rgba(0,0,0,0.08);
            margin-bottom: 25px;
        }}
        .badge-tag {{
            display: inline-block;
            padding: 6px 14px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-right: 8px;
            margin-bottom: 8px;
        }}
        .badge-tag-primary {{
            background-color: #e0f2fe;
            color: #0369a1;
        }}
        .badge-tag-success {{
            background-color: #dcfce7;
            color: #15803d;
        }}
        .badge-tag-info {{
            background-color: #fef3c7;
            color: #b45309;
        }}
        .specs-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 15px;
            background: #f8fafc;
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #edf2f7;
            margin: 25px 0;
        }}
        .spec-item {{
            display: flex;
            align-items: center;
            gap: 12px;
        }}
        .spec-icon {{
            width: 42px;
            height: 42px;
            background: #ffffff;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #0d6efd;
            font-size: 1.1rem;
            box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }}
        .spec-text small {{
            display: block;
            color: #64748b;
            font-size: 0.75rem;
            text-transform: uppercase;
            font-weight: 600;
        }}
        .spec-text strong {{
            color: #1e293b;
            font-size: 0.95rem;
        }}
        .section-subheading {{
            font-size: 1.25rem;
            font-weight: 700;
            color: #0f172a;
            margin-top: 30px;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 2px solid #f1f5f9;
            position: relative;
        }}
        .section-subheading::after {{
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 50px;
            height: 2px;
            background: #0d6efd;
        }}
        .duty-list {{
            list-style: none;
            padding-left: 0;
            margin-bottom: 25px;
        }}
        .duty-list li {{
            position: relative;
            padding-left: 28px;
            margin-bottom: 12px;
            color: #334155;
            line-height: 1.6;
        }}
        .duty-list li::before {{
            content: "\\f00c";
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            position: absolute;
            left: 0;
            top: 2px;
            color: #0d6efd;
            font-size: 0.85rem;
        }}
        .sidebar-sticky-card {{
            background-color: #fff;
            padding: 30px 24px;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 16px rgba(0,0,0,0.04);
            position: sticky;
            top: 25px;
        }}
        .apply-btn-main {{
            font-size: 1.15rem;
            font-weight: 600;
            padding: 14px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(13, 110, 253, 0.25);
            transition: all 0.2s ease;
        }}
        .apply-btn-main:hover {{
            transform: translateY(-2px);
            box-shadow: 0 6px 18px rgba(13, 110, 253, 0.35);
        }}
        .whatsapp-btn-sidebar {{
            background-color: #25d366;
            color: #fff;
            font-weight: 600;
            padding: 12px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            text-decoration: none;
            transition: background 0.2s ease;
        }}
        .whatsapp-btn-sidebar:hover {{
            background-color: #1ebc59;
            color: #fff;
        }}
        .help-box {{
            background-color: #f8fafc;
            border-radius: 8px;
            padding: 18px;
            border-left: 4px solid #0d6efd;
            margin-top: 25px;
        }}
    </style>
</head>

<body>

    <!-- Navbar & Hero Start -->
    <div class="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a href="../../index.html" class="navbar-brand p-0" style="margin-top:-10px;">
                    <img src="../../f.png" alt="EMTA" width="160" height="48">
                </a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-0 mx-lg-auto">
                        <a href="../../index.html" class="nav-item nav-link">Home</a>
                        <a href="../../about.html" class="nav-item nav-link">About</a>
                        <div class="nav-item dropdown">
                            <a href="../../recruitment-solution.html" class="nav-link dropdown-toggle"
                                id="recruitmentDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                                style="text-decoration: none; white-space: nowrap;">
                                Jobs
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="recruitmentDropdown">
                                <li><a class="dropdown-item" href="../../for-employer.html">For Employers</a></li>
                                <li><a class="dropdown-item" href="../../for-employee.html">For Job Seekers</a></li>
                            </ul>
                        </div>
                        <a href="../../bfsi-training.html" class="nav-item nav-link"
                            style="text-decoration: none; white-space: nowrap;">BFSI Training</a>
                        <a href="../../blog.html" class="nav-item nav-link">Blog</a>
                        <a href="../../careers.html" class="nav-item nav-link active">Careers</a>
                        <a href="../../contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                </div>
                <div class="nav-btn px-3">
                    <a href="../../work-with-us.html" class="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0 d-none d-md-block">
                        Apply for Job
                    </a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="d-none d-xl-flex flex-shrink-0 ps-4">
                    <a href="tel:+919522257477"
                        class="btn btn-light btn-lg-square rounded-circle position-relative wow tada"
                        data-wow-delay=".9s">
                        <i class="fa fa-phone-alt fa-2x"></i>
                        <div class="position-absolute" style="top: 7px; right: 12px;">
                            <span><i class="fa fa-comment-dots"></i></span>
                        </div>
                    </a>
                    <div class="d-flex flex-column ms-3">
                        <span>Call Us</span>
                        <a href="tel:+919522257477"><span class="text-dark"> + 91 9522257477</span></a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar & Hero End -->

    <!-- Page Header Start -->
    <div class="container-fluid page-header-job">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="../../index.html"><i class="fas fa-home me-1"></i> Home</a></li>
                    <li class="breadcrumb-item"><a href="../../careers.html">Careers</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{job["title"]}</li>
                </ol>
            </nav>
            <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
                <span class="badge-tag badge-tag-primary"><i class="fas fa-chart-line me-1"></i> Actively Hiring</span>
                <span class="badge-tag badge-tag-success"><i class="fas fa-briefcase me-1"></i> {job["employment_type"]}</span>
                <span class="badge-tag badge-tag-info"><i class="fas fa-map-marker-alt me-1"></i> {job["short_location"]}</span>
            </div>
            <h1 class="display-6 fw-bold text-white mb-2">{job["title"]}</h1>
            <p class="mb-0 text-white-50"><i class="fas fa-building me-1"></i> Elite Manpower and Training Academy (EMTA) &bull; <i class="fas fa-map-pin me-1"></i> {job["location"]}</p>
        </div>
    </div>
    <!-- Page Header End -->

    <!-- Job Content Start -->
    <div class="container job-details-container mb-5">
        <div class="row g-4">
            <!-- Left Main Column -->
            <div class="col-lg-8">
                <div class="job-main-card">
                    <!-- Banner Image -->
                    <img src="../../img/jobs/{job["image"]}" alt="{job["title"]}" class="job-banner-img img-fluid">

                    <!-- Quick Specs Grid -->
                    <div class="specs-grid">
                        <div class="spec-item">
                            <div class="spec-icon"><i class="fas fa-rupee-sign"></i></div>
                            <div class="spec-text">
                                <small>Salary Package</small>
                                <strong>{job["salary"]}</strong>
                            </div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-icon"><i class="fas fa-map-marker-alt"></i></div>
                            <div class="spec-text">
                                <small>Job Location</small>
                                <strong>{job["location"]}</strong>
                            </div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-icon"><i class="fas fa-user-clock"></i></div>
                            <div class="spec-text">
                                <small>Experience Required</small>
                                <strong>{job["experience"]}</strong>
                            </div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-icon"><i class="fas fa-business-time"></i></div>
                            <div class="spec-text">
                                <small>Work Shift</small>
                                <strong>{job["shift"]}</strong>
                            </div>
                        </div>
                    </div>

                    <!-- Description -->
                    <h3 class="section-subheading">About the Role</h3>
                    {job["description"]}

                    {job["process_breakdown"]}

                    <!-- Responsibilities -->
                    <h3 class="section-subheading">Key Responsibilities</h3>
                    <ul class="duty-list">
                        {duty_items}
                    </ul>

                    <!-- Requirements -->
                    <h3 class="section-subheading">Eligibility & Key Skills</h3>
                    <ul class="duty-list">
                        {req_items}
                    </ul>

                    <!-- Perks & Benefits -->
                    <h3 class="section-subheading">Perks, Benefits & Culture</h3>
                    {job["perks"]}

                    <!-- Bottom Apply Banner -->
                    <div class="mt-5 p-4 bg-primary text-white rounded-3 d-flex flex-wrap justify-content-between align-items-center gap-3">
                        <div>
                            <h4 class="text-white mb-1">Interested in this vacancy?</h4>
                            <p class="text-white-50 mb-0">Apply today and start your career with EMTA.</p>
                        </div>
                        <a href="../../work-with-us.html" class="btn btn-light rounded-pill px-4 py-2 fw-bold text-primary">
                            Apply for Job <i class="fas fa-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>

                <a href="../../careers.html" class="btn btn-outline-secondary mb-4">
                    <i class="fas fa-arrow-left me-2"></i> Back to all openings
                </a>
            </div>

            <!-- Right Sidebar Column -->
            <div class="col-lg-4">
                <div class="sidebar-sticky-card">
                    <h4 class="fw-bold text-dark mb-3">Apply for this Role</h4>
                    <p class="text-muted small mb-4">Submit your profile directly to our talent acquisition team.</p>

                    <a href="../../work-with-us.html" class="btn btn-primary w-100 apply-btn-main mb-3">
                        <i class="fas fa-paper-plane me-2"></i> Apply Now
                    </a>

                    <a href="https://wa.me/919522257477?text=Hi%20EMTA%20Team%2C%20I%20am%20interested%20in%20applying%20for%20{job["title"].replace(' ', '%20')}" target="_blank" class="whatsapp-btn-sidebar mb-4">
                        <i class="fab fa-whatsapp fa-lg"></i> Quick Apply via WhatsApp
                    </a>

                    <hr class="my-4">

                    <h5 class="fw-bold mb-3">Job Snapshot</h5>
                    <ul class="list-unstyled mb-0">
                        <li class="d-flex align-items-start mb-3">
                            <i class="fas fa-building text-primary mt-1 me-3"></i>
                            <div>
                                <small class="text-muted d-block">Company</small>
                                <strong>EMTA</strong>
                            </div>
                        </li>
                        <li class="d-flex align-items-start mb-3">
                            <i class="fas fa-money-bill-wave text-success mt-1 me-3"></i>
                            <div>
                                <small class="text-muted d-block">Offered CTC / Salary</small>
                                <strong>{job["salary"]}</strong>
                            </div>
                        </li>
                        <li class="d-flex align-items-start mb-3">
                            <i class="fas fa-map-marker-alt text-danger mt-1 me-3"></i>
                            <div>
                                <small class="text-muted d-block">Location</small>
                                <strong>{job["location"]}</strong>
                            </div>
                        </li>
                        <li class="d-flex align-items-start mb-3">
                            <i class="fas fa-clock text-warning mt-1 me-3"></i>
                            <div>
                                <small class="text-muted d-block">Shift Details</small>
                                <strong>{job["shift"]}</strong>
                            </div>
                        </li>
                        <li class="d-flex align-items-start mb-3">
                            <i class="fas fa-briefcase text-info mt-1 me-3"></i>
                            <div>
                                <small class="text-muted d-block">Job Category</small>
                                <strong>Customer Support / Sales / Operations</strong>
                            </div>
                        </li>
                    </ul>

                    <div class="help-box">
                        <h6 class="fw-bold text-dark mb-1"><i class="fas fa-headset me-2 text-primary"></i>Need Assistance?</h6>
                        <p class="small text-muted mb-2">Speak directly with our recruitment team:</p>
                        <p class="mb-1 small"><strong>Phone:</strong> <a href="tel:+919522257477" class="text-decoration-none">+91 9522257477</a></p>
                        <p class="mb-0 small"><strong>Email:</strong> <a href="mailto:hr@emta.co.in" class="text-decoration-none">hr@emta.co.in</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Job Content End -->

    <!-- Toggle Button Container -->
    <div class="cta-toggle-container" id="ctaToggleContainer">
        <button class="cta-toggle-button" id="toggleButton1" aria-label="Quick Actions">+</button>
        <div class="cta-button-group">
            <a href="../../work-with-us.html" class="cta-button">Work with Us</a>
            <a href="../../partner-with-us.html" class="cta-button">Partner with Us</a>
            <a href="../../study-with-us.html" class="cta-button">Study with Us</a>
            <a href="../../hire-with-us.html" class="cta-button">Hire with Us</a>
        </div>
    </div>

    <script>
        const toggleButton1 = document.getElementById('toggleButton1');
        const ctaToggleContainer = document.getElementById('ctaToggleContainer');
        if (toggleButton1 && ctaToggleContainer) {{
            toggleButton1.addEventListener('click', () => {{
                ctaToggleContainer.classList.toggle('open');
            }});
        }}
    </script>

    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/919522257477" target="_blank" class="whatsapp-float" title="Chat with Us on WhatsApp">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="60" height="60" loading="lazy">
    </a>

    <!-- Footer Start -->
    <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-xl-9">
                    <div class="mb-5">
                        <div class="row g-4">
                            <div class="col-md-6 col-lg-6 col-xl-5">
                                <div class="footer-item">
                                    <a href="../../index.html" class="p-0">
                                        <h3><img src="../../f.png" width="200" height="60" loading="lazy" alt="Logo"></h3>
                                    </a>
                                    <div class="footer-btn d-flex">
                                        <a class="btn btn-md-square rounded-circle me-3" href="https://www.facebook.com/people/EMTA/100076544892050/?paipv=0&eav=AfbXq3U78y0pbd2H_FttF7WA0BS0qfYH053dyEVKd0eIm1buJ6xPKJlNyEU3GXUlZfU" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-md-square rounded-circle me-3" href="https://x.com/EliteManpowerT1/status/1553354721330692098" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-md-square rounded-circle me-3" href="https://www.instagram.com/emta.placements/?igsh=eXN6cXdxNHFpZzAy" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                                        <a class="btn btn-md-square rounded-circle me-0" href="https://www.linkedin.com/company/elite-manpower-training-academy/about/" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6 col-xl-3">
                                <div class="footer-item">
                                    <h4 class="text-white mb-4">Useful Links</h4>
                                    <a href="../../about.html"><i class="fas fa-angle-right me-2"></i> About Us</a>
                                    <a href="../../blog.html"><i class="fas fa-angle-right me-2"></i> Blog</a>
                                    <a href="../../recruitment-solution.html"><i class="fas fa-angle-right me-2"></i> Recruitment Solution</a>
                                    <a href="../../bfsi-training.html#course-structure"><i class="fas fa-angle-right me-2"></i> Courses & Fees</a>
                                    <a href="../../careers.html"><i class="fas fa-angle-right me-2"></i> Careers</a>
                                    <a href="../../bfsi-training.html"><i class="fas fa-angle-right me-2"></i> BFSI</a>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6 col-xl-4">
                                <div class="footer-item">
                                    <h4 class="mb-4 text-white">Instagram</h4>
                                    <div class="row g-3">
                                        <div class="col-4"><div class="footer-instagram rounded"><img src="../../img/insta-images/1.png" class="img-fluid w-100" alt="Instagram Image" width="80" height="80" loading="lazy"></div></div>
                                        <div class="col-4"><div class="footer-instagram rounded"><img src="../../img/insta-images/2.png" class="img-fluid w-100" alt="Instagram Image" width="80" height="80" loading="lazy"></div></div>
                                        <div class="col-4"><div class="footer-instagram rounded"><img src="../../img/insta-images/3.png" class="img-fluid w-100" alt="Instagram Image" width="80" height="80" loading="lazy"></div></div>
                                        <div class="col-4"><div class="footer-instagram rounded"><img src="../../img/insta-images/4.png" class="img-fluid w-100" alt="Instagram Image" width="80" height="80" loading="lazy"></div></div>
                                        <div class="col-4"><div class="footer-instagram rounded"><img src="../../img/insta-images/5.png" class="img-fluid w-100" alt="Instagram Image" width="80" height="80" loading="lazy"></div></div>
                                        <div class="col-4"><div class="footer-instagram rounded"><img src="../../img/insta-images/6.png" class="img-fluid w-100" alt="Instagram Image" width="80" height="80" loading="lazy"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-5" style="border-top: 1px solid rgba(255, 255, 255, 0.08);">
                        <div class="row g-0">
                            <div class="col-12">
                                <div class="row g-4">
                                    <div class="col-lg-6 col-xl-4">
                                        <div class="d-flex">
                                            <div class="btn-xl-square bg-primary text-white rounded p-4 me-4">
                                                <i class="fas fa-map-marker-alt fa-2x"></i>
                                            </div>
                                            <div>
                                                <h4 class="text-white">Address</h4>
                                                <p class="mb-0 text-white-50">Flat No. 102, Vatsalya<br>AF-3, Scheme No. 54, Vijay Nagar<br>Indore – 452010<br><br>Landmark: Behind the lane of Golden Gate Hotel, near Satya Sai Square.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-xl-4">
                                        <div class="d-flex">
                                            <div class="btn-xl-square bg-primary text-white rounded p-4 me-4">
                                                <i class="fas fa-envelope fa-2x"></i>
                                            </div>
                                            <div>
                                                <h4 class="text-white">Mail Us</h4>
                                                <p class="mb-0 text-white-50">hr@emta.co.in</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-xl-4">
                                        <div class="d-flex">
                                            <div class="btn-xl-square bg-primary text-white rounded p-4 me-4">
                                                <i class="fa fa-phone-alt fa-2x"></i>
                                            </div>
                                            <div>
                                                <h4 class="text-white">Telephone</h4>
                                                <p class="mb-0 text-white-50">+91 9522257477</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-3">
                    <div class="footer-item">
                        <h4 class="text-white mb-4">Newsletter</h4>
                        <p class="text-white mb-3">Subscribe to EMTA's newsletter for the latest updates on BFSI training programs, job openings, industry insights, and career tips.</p>
                        <div class="d-flex flex-shrink-0">
                            <div class="footer-btn">
                                <a href="tel:+919522257477" class="btn btn-lg-square rounded-circle position-relative wow tada" data-wow-delay=".9s" aria-label="Call Us">
                                    <i class="fa fa-phone-alt fa-2x"></i>
                                    <div class="position-absolute" style="top: 2px; right: 12px;">
                                        <span><i class="fa fa-comment-dots"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div class="d-flex flex-column ms-3 flex-shrink-0">
                                <span>Call to Our Team</span>
                                <a href="tel:+919522257477"><span class="text-white">Free: +91 9522257477</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->

    <!-- Copyright Start -->
    <div class="container-fluid copyright py-4">
        <div class="container">
            <div class="row g-4 align-items-center">
                <div class="col-md-6 text-center text-md-end mb-md-0">
                    <span class="text-body"><a href="https://emta.co.in" class="border-bottom text-white"><i class="fas fa-copyright text-light me-2"></i>EMTA</a>, All right reserved.</span>
                </div>
                <div class="col-md-6 text-center text-md-start text-body">
                    Designed By <a class="border-bottom text-white" href="https://emtainfotech.com">EMTA INFOTECH</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Copyright End -->

    <!-- JavaScript Libraries -->
    <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script defer src="../../lib/wow/wow.min.js"></script>
    <script defer src="../../lib/easing/easing.min.js"></script>
    <script defer src="../../lib/waypoints/waypoints.min.js"></script>
    <script defer src="../../lib/counterup/counterup.min.js"></script>
    <script defer src="../../lib/lightbox/js/lightbox.min.js"></script>
    <script defer src="../../lib/owlcarousel/owl.carousel.min.js"></script>

    <!-- Template Javascript -->
    <script defer src="../../js/main.js"></script>
</body>

</html>
"""
    return html

for job in jobs_data:
    folder = os.path.join(jobs_dir, job["slug"])
    os.makedirs(folder, exist_ok=True)
    file_path = os.path.join(folder, "index.html")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(build_job_page_html(job))
    print(f"Generated: {job['slug']}/index.html")

print("All 7 job pages rebuilt successfully with Google Jobs Schema!")
