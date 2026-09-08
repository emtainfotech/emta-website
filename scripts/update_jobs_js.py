import os
import json

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
jobs_js_path = os.path.join(base_dir, "js", "jobs.js")

new_jobs = """    {
        id: "new-cce-vijay-nagar",
        url: "jobs/customer-care-executive-vijay-nagar/",
        title: "Customer Care Executive | Multiple Processes",
        company: "EMTA",
        logo: "img/emta-gif.gif",
        location: "Vijay Nagar, Indore",
        salary: "₹10,500 - ₹16,500 + Incentives"
    },
    {
        id: "new-inside-sales",
        url: "jobs/inside-sales-executive/",
        title: "Inside Sales Associate / Sr. Associate",
        company: "EMTA",
        logo: "img/emta-gif.gif",
        location: "Indore | On-site",
        salary: "₹17,000 – ₹25,000/month"
    },
    {
        id: "new-cce-swiggy",
        url: "jobs/customer-care-swiggy/",
        title: "Customer Care Executive (Swiggy)",
        company: "EMTA",
        logo: "img/emta-gif.gif",
        location: "Indore",
        salary: "₹11,000 – ₹13,500 In-hand"
    },
    {
        id: "new-csa-vivint",
        url: "jobs/customer-success-associate-vivint/",
        title: "Customer Success Associate - Vivint",
        company: "EMTA",
        logo: "img/emta-gif.gif",
        location: "Sector 30, Gurugram",
        salary: "Up to 32.5K CTC"
    },
    {
        id: "new-cse-walmart",
        url: "jobs/customer-support-walmart/",
        title: "Customer Support Executive (Walmart)",
        company: "EMTA",
        logo: "img/emta-gif.gif",
        location: "Jaipur, Rajasthan",
        salary: "₹30,000 - ₹34,000 CTC"
    },
    {
        id: "new-cse-seller-support",
        url: "jobs/customer-support-seller-support/",
        title: "Customer Support Exec. (Seller Support)",
        company: "EMTA",
        logo: "img/emta-gif.gif",
        location: "Kharadi, Pune",
        salary: "Up to ₹32,000 CTC/month"
    },
    {
        id: "new-senior-accountant",
        url: "jobs/senior-accountant/",
        title: "Senior Accountant",
        company: "EMTA",
        logo: "img/emta-gif.gif",
        location: "Indore",
        salary: "₹30,000 – ₹50,000 per month"
    },
"""

with open(jobs_js_path, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("const jobs = [", "const jobs = [\n" + new_jobs)

with open(jobs_js_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated js/jobs.js")
