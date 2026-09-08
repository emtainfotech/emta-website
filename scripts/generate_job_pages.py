import os
import re

# Base paths
base_dir = r"e:\Projects\EMTA Website"
jobs_dir = os.path.join(base_dir, "jobs")

# Ensure jobs directory exists
os.makedirs(jobs_dir, exist_ok=True)

# Read the base template
with open(os.path.join(base_dir, "job-details.html"), "r", encoding="utf-8") as f:
    template = f.read()

# Define the 7 jobs
jobs_data = [
    {
        "slug": "customer-care-executive-vijay-nagar",
        "title": "Customer Care Executive | Multiple Processes",
        "company": "EMTA",
        "location": "Vijay Nagar, Indore",
        "salary": "₹10,500 - ₹16,500 + Incentives",
        "image": "cce_vijay_nagar_1788778541977.jpg",
        "description": "We are looking for Customer Care Executives with good communication skills and a customer-focused approach to join our team.<br><br><b>Processes & Salary:</b><br><ul><li>Airtel Black Platinum: ₹16,500 + Incentives</li><li>Airtel Black Gold: ₹15,500 + Incentives</li><li>Airtel Broadband: ₹11,300 + Incentives</li><li>IPRU: ₹13,130</li><li>IBL: ₹10,500 + Incentives</li><li>TVS: ₹12,000 + Incentives</li></ul>",
        "responsibilities": [
            "Handle inbound and outbound customer calls professionally.",
            "Resolve customer queries and provide accurate information.",
            "Maintain a positive and professional attitude while communicating with customers.",
            "Ensure customer satisfaction by providing timely resolutions.",
            "Maintain records of customer interactions and update the system accordingly.",
            "Escalate unresolved issues to the concerned team when required.",
            "Achieve individual and team performance targets."
        ],
        "requirements": [
            "Undergraduates and graduates can apply.",
            "Good communication skills in Hindi and basic English.",
            "Basic computer knowledge.",
            "Customer service orientation and problem-solving skills."
        ],
        "perks": "Attractive Incentives, Friendly Work Environment, Career Growth Opportunities, Training & Development Support. Note: References are also acceptable."
    },
    {
        "slug": "inside-sales-executive",
        "title": "Inside Sales Associate / Sr. Associate",
        "company": "EMTA",
        "location": "Indore | On-site",
        "salary": "₹17,000 – ₹25,000/month (Up to ₹3.6 LPA + Incentives)",
        "image": "inside_sales_associate_1788778698431.jpg",
        "description": "🚀 <b>WE’RE HIRING | INSIDE SALES ASSOCIATE</b><br><br><b>Shift:</b> Day Shift | No Night Shifts<br><b>Working:</b> 6 Days | Rotational Week-offs<br><b>Training:</b> 1 Week Paid Training + Mock Call Assessment<br><b>Apply Now & Start Your Career in Inside Sales!</b>",
        "responsibilities": [
            "Handle 100+ outbound calls daily",
            "Counsel customers & understand their requirements",
            "Convert leads through effective sales conversations",
            "Achieve sales & conversion targets",
            "Build strong customer relationships",
            "Handle customer queries professionally"
        ],
        "requirements": [
            "Post Graduate Mandatory",
            "Freshers to 1 Year Experience",
            "Excellent English & Hindi communication",
            "Strong convincing & negotiation skills",
            "Sales-oriented and target-driven mindset",
            "Good customer-handling skills",
            "Immediate joiners preferred"
        ],
        "perks": "Growth & career development opportunities. Incentives up to ₹2.5 LPA."
    },
    {
        "slug": "customer-care-swiggy",
        "title": "Customer Care Executive – Chat / Voice Process (Swiggy)",
        "company": "EMTA",
        "location": "Indore",
        "salary": "₹11,000 – ₹13,500 In-hand (Up to ₹15,644 CTC)",
        "image": "cce_swiggy_1788778717527.jpg",
        "description": "🚀 <b>We Are Hiring</b> 🚀<br>We are looking for enthusiastic candidates to join our team for multiple roles:<br>🔹 Customer Care Executive – Chat Process (Swiggy)<br>🔹 Customer Care Executive – Voice Process (Swiggy)<br>🔹 Customer Care Executive – Hindi Voice Process (Swiggy)<br><br><b>Shift & Working Days:</b> Rotational Shift, 6 Days Working",
        "responsibilities": [
            "Handle customer queries via chat/voice in a professional manner",
            "Provide accurate, timely, and effective resolutions",
            "Understand customer concerns and ensure proper issue handling",
            "Maintain high levels of customer satisfaction and service quality",
            "Follow standard operating procedures (SOPs) and company guidelines",
            "Maintain proper documentation of customer interactions",
            "Maintain data confidentiality and adhere to company policies",
            "Work collaboratively with team members and support team goals",
            "Stay updated with process knowledge and product information",
            "Handle difficult or irate customers with patience and professionalism"
        ],
        "requirements": [
            "Only Male Candidates (Chat & Voice Process)",
            "Basic to good communication skills",
            "Basic computer knowledge",
            "Fresher & Experienced both can apply"
        ],
        "perks": ""
    },
    {
        "slug": "customer-success-associate-vivint",
        "title": "Customer Success Associate - Vivint Voice Process",
        "company": "EMTA",
        "location": "Sector 30, Gurugram (Work From Office)",
        "salary": "Up to 32.5K CTC",
        "image": "csa_vivint_1788778780545.jpg",
        "description": "🚨 <b>Hiring Alert | Vivint – voice Process</b> 🚨<br>We are hiring Customer Success Associates for the Vivint Voice Process. This role is ideal for candidates with international customer support experience and strong communication skills.<br><br><b>Working Details:</b><br>✅ 5 Days Working<br>✅ Rotational Shifts<br>✅ Rotational Weekly Offs",
        "responsibilities": [
            "Handle inbound customer queries through voice support",
            "Assist customers with technical troubleshooting and service-related issues",
            "Ensure high customer satisfaction by providing accurate and timely solutions",
            "Maintain proper documentation of customer interactions",
            "Follow process guidelines and quality standards",
            "Meet individual and team performance metrics",
            "Provide professional and empathetic customer support at all times"
        ],
        "requirements": [
            "Graduate / Undergraduate (Both Eligible)",
            "Minimum 6 months of International Voice Process experience",
            "Technical support / troubleshooting experience is mandatory",
            "Excellent written and verbal communication in English",
            "Strong customer service and problem-solving skills",
            "Ability to handle customers via chat support",
            "Basic technical understanding and troubleshooting skills"
        ],
        "perks": "Interview Process: 1. HR Round, 2. AMCAT Assessment, 3. Operations Round"
    },
    {
        "slug": "customer-support-walmart",
        "title": "Customer Support Executive (International Voice - Walmart)",
        "company": "EMTA",
        "location": "Jaipur, Rajasthan",
        "salary": "₹30,000 - ₹34,000 CTC",
        "image": "cse_walmart_1788778917679.jpg",
        "description": "📢 <b>Hiring Alert – Customer Support Executive (International Voice Process – Walmart)</b><br>Open Positions: 25<br><br><b>Working Schedule:</b> 5.5 Days Working, Rotational Shifts & Rotational Week Offs.<br><b>Assessment:</b> Versant Level: C1 US Voice",
        "responsibilities": [
            "Handle customer queries and concerns via voice support",
            "Provide timely and accurate resolutions",
            "Maintain high customer satisfaction levels",
            "Follow process guidelines and quality standards",
            "Document customer interactions accurately"
        ],
        "requirements": [
            "Any Graduate / Undergraduate can apply",
            "Minimum 6 months of experience in International Voice Process (Mandatory)",
            "Excellent communication skills required",
            "Customer Support experience is mandatory",
            "Candidates with E-commerce experience will be preferred"
        ],
        "perks": "Transportation: Night Shift Allowance: ₹180 per night (for male employees). One-sided cab facility for female employees during odd hours."
    },
    {
        "slug": "customer-support-seller-support",
        "title": "Customer Support Executive – International Chat Process (Seller Support)",
        "company": "EMTA",
        "location": "Kharadi, Pune (In-Office)",
        "salary": "Up to ₹32,000 CTC/month + Incentives",
        "image": "cse_seller_support_1788778937826.jpg",
        "description": "If you have experience in international chat & seller support, this is your chance to grow with a global CX leader.<br><br><b>Venue:</b> Office No. 214, 2nd Floor, Rush Hub Bliss Bay, Near Kothari Hyundai, Kharadi, Pune – 411014.",
        "responsibilities": [
            "Handle international chat queries efficiently.",
            "Provide exceptional seller support for E-commerce platforms.",
            "Resolve seller issues and escalate when necessary.",
            "Maintain high-quality standards in communication and problem-solving."
        ],
        "requirements": [
            "Min. 1 year's experience in an International Voice/Chat process",
            "Prior E-commerce Seller Support experience is MANDATORY",
            "Excellent written English communication & typing speed",
            "Undergraduates & graduates are both welcome"
        ],
        "perks": "Cab Facility Provided | Rotational Shifts (5.5 Days Working)"
    },
    {
        "slug": "senior-accountant",
        "title": "Senior Accountant",
        "company": "EMTA",
        "location": "Indore",
        "salary": "₹30,000 – ₹50,000 per month",
        "image": "senior_accountant_1788779098385.jpg",
        "description": "🚨 <b>WE’RE HIRING | SENIOR ACCOUNTANT</b> 📊<br><br>We are looking for an experienced Senior Accountant to manage accounting operations, financial records, taxation, banking, reporting, compliance, and audit activities.",
        "responsibilities": [
            "Manage daily accounting transactions, including purchase, sales, receipts, payments, journals, ledgers, cash books, and invoice verification.",
            "Handle banking and cash management activities, including bank reconciliation, petty cash, NEFT, RTGS, IMPS, and cheque payments.",
            "Manage GST and taxation activities, including GST returns, GSTR-2B reconciliation, GST compliance, and TDS calculations and returns.",
            "Manage accounts receivable and payable, including customer collections, vendor payments, account reconciliation, and aging reports.",
            "Prepare monthly MIS reports, assist in account finalization, support monthly/quarterly/annual closing, and prepare financial statements.",
            "Handle inventory and cost control by reconciling stock records, verifying stock valuation, and coordinating with stores and production teams.",
            "Maintain accounting documentation and support internal and statutory audits while ensuring compliance with applicable regulations and company policies.",
            "Maintain proper records, invoices, vouchers, and financial documentation for accurate and organized accounting operations."
        ],
        "requirements": [
            "10–15 Years of Experience",
            "B.Com / M.Com / MBA (Finance)",
            "Strong knowledge of accounting principles",
            "Proficiency in Tally ERP / Tally Prime",
            "Good knowledge of MS Excel – VLOOKUP, Pivot Tables & Formulas",
            "Knowledge of GST, TDS & Income Tax",
            "Strong analytical and problem-solving skills",
            "Excellent attention to detail and accuracy",
            "Good communication and teamwork skills"
        ],
        "perks": ""
    }
]


for job in jobs_data:
    job_dir = os.path.join(jobs_dir, job['slug'])
    os.makedirs(job_dir, exist_ok=True)
    
    html = template
    
    # Fix paths
    html = re.sub(r'href="css/', r'href="../../css/', html)
    html = re.sub(r'href="lib/', r'href="../../lib/', html)
    html = re.sub(r'src="lib/', r'src="../../lib/', html)
    html = re.sub(r'src="js/', r'src="../../js/', html)
    html = re.sub(r'href="img/', r'href="../../img/', html)
    html = re.sub(r'src="img/', r'src="../../img/', html)
    html = re.sub(r'src="f\.png"', r'src="../../f.png"', html)
    html = re.sub(r'href="m\.png"', r'href="../../m.png"', html)
    html = re.sub(r'src="/company/', r'src="../../company/', html)
    html = re.sub(r'src="/img/', r'src="../../img/', html)
    html = re.sub(r'video\.MOV', r'../../video.MOV', html)
    
    # Fix nav links
    html = re.sub(r'href="([^/:]+\.html)"', r'href="../../\1"', html)
    
    # Set title
    html = html.replace('<title>Top Job Consultancy in Indore | Job Experts</title>', f'<title>{job["title"]} | EMTA Jobs</title>')
    
    # Replace dynamic JS with static HTML
    html = html.replace('<script defer src="../../js/jobs.js"></script>', '')
    html = re.sub(r'<script>[\s\S]*?const urlParams = new URLSearchParams.*?<\/script>', '', html, flags=re.DOTALL)
    
    # Create the HTML for responsibilities
    resp_list = "".join([f"<li>{r}</li>" for r in job["responsibilities"]])
    req_list = "".join([f"<li>{r}</li>" for r in job["requirements"]])
    
    perks_html = f'<h4 class="detail-heading mt-4">Perks & Benefits</h4><p>{job["perks"]}</p>' if job["perks"] else ''
    
    main_content = f'''
                    <h1 class="job-title">{job["title"]}</h1>
                    <p class="company-name">{job["company"]}</p>
                    <hr>
                    <div class="mb-4">
                        <img src="../../img/jobs/{job["image"]}" alt="{job["title"]}" class="img-fluid rounded shadow-sm w-100" style="max-height: 400px; object-fit: cover;">
                    </div>
                    <div class="details-section">
                        <h4 class="detail-heading">Job Description</h4>
                        <p>{job["description"]}</p>
                        
                        <h4 class="detail-heading mt-4">Responsibilities</h4>
                        <ul class="responsibilities-list">{resp_list}</ul>
                        
                        <h4 class="detail-heading mt-4">Eligibility & Requirements</h4>
                        <ul class="responsibilities-list">{req_list}</ul>
                        
                        {perks_html}
                    </div>
'''
    
    sidebar_content = f'''
                    <a href="../../work-with-us.html" class="btn btn-primary w-100 mb-4 apply-now-btn">
                        <i class="fas fa-paper-plane"></i> Apply Now
                    </a>
                    <div class="sidebar-item">
                        <i class="fas fa-money-bill-wave"></i>
                        <div>
                            <strong>Salary</strong><br>
                            <span>{job["salary"]}</span>
                        </div>
                    </div>
                    <div class="sidebar-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>Location</strong><br>
                            <span>{job["location"]}</span>
                        </div>
                    </div>
'''
    
    html = re.sub(r'<div class="job-main-content">.*?</div>\s*</div>\s*<div class="col-lg-4">', f'<div class="job-main-content">{main_content}</div></div><div class="col-lg-4">', html, flags=re.DOTALL)
    html = re.sub(r'<div class="job-sidebar">.*?</div>\s*</div>\s*</div>\s*<a href="\.\.\/\.\.\/index\.html"', f'<div class="job-sidebar">{sidebar_content}</div></div></div><a href="../../index.html"', html, flags=re.DOTALL)
    
    with open(os.path.join(job_dir, "index.html"), "w", encoding="utf-8") as out_f:
        out_f.write(html)
        
print("Generated 7 job pages.")
