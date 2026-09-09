import os
import glob
import re
from datetime import datetime, timezone

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
today = datetime.now(timezone.utc).strftime("%Y-%m-%d")

# Page configurations with priority and changefreq
pages = [
    # 1. Core Primary Pages
    {"loc": "https://emta.co.in/", "priority": "1.00", "changefreq": "daily"},
    {"loc": "https://emta.co.in/careers", "priority": "0.90", "changefreq": "daily"},
    {"loc": "https://emta.co.in/bfsi-training", "priority": "0.90", "changefreq": "weekly"},
    {"loc": "https://emta.co.in/recruitment-solution", "priority": "0.90", "changefreq": "weekly"},
    {"loc": "https://emta.co.in/about", "priority": "0.80", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/for-employer", "priority": "0.80", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/for-employee", "priority": "0.80", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/blog", "priority": "0.80", "changefreq": "weekly"},
    {"loc": "https://emta.co.in/contact", "priority": "0.80", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/work-with-us", "priority": "0.80", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/study-with-us", "priority": "0.80", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/partner-with-us", "priority": "0.80", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/hire-with-us", "priority": "0.80", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/job-placement", "priority": "0.80", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/job-details", "priority": "0.80", "changefreq": "weekly"},
    {"loc": "https://emta.co.in/course-details", "priority": "0.80", "changefreq": "monthly"},

    # 2. BFSI Course Breakdown
    {"loc": "https://emta.co.in/course/1", "priority": "0.80", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/course/2", "priority": "0.80", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/course/3", "priority": "0.80", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/course/4", "priority": "0.80", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/EMTA-BFSI-Training-Program-3.pdf", "priority": "0.64", "changefreq": "monthly"},

    # 3. Dedicated City / Local SEO Pages (Indore)
    {"loc": "https://emta.co.in/bfsi-training-in-indore", "priority": "0.80", "changefreq": "weekly"},
    {"loc": "https://emta.co.in/job-consultant-in-indore", "priority": "0.80", "changefreq": "weekly"},
    {"loc": "https://emta.co.in/placement-consultancy-in-indore", "priority": "0.80", "changefreq": "weekly"},

    # 4. Active Job Postings (Google Jobs Indexed)
    {"loc": "https://emta.co.in/jobs/customer-care-executive-indore/", "priority": "0.85", "changefreq": "weekly"},
    {"loc": "https://emta.co.in/jobs/inside-sales-executive-indore/", "priority": "0.85", "changefreq": "weekly"},
    {"loc": "https://emta.co.in/jobs/customer-care-swiggy-indore/", "priority": "0.85", "changefreq": "weekly"},
    {"loc": "https://emta.co.in/jobs/customer-success-associate-vivint-gurugram/", "priority": "0.85", "changefreq": "weekly"},
    {"loc": "https://emta.co.in/jobs/customer-support-walmart-pune/", "priority": "0.85", "changefreq": "weekly"},
    {"loc": "https://emta.co.in/jobs/customer-support-seller-support-jaipur/", "priority": "0.85", "changefreq": "weekly"},
    {"loc": "https://emta.co.in/jobs/senior-accountant-indore/", "priority": "0.85", "changefreq": "weekly"},

    # 5. Articles, Guides & Blog Posts
    {"loc": "https://emta.co.in/What-Is-BFSI-A-Complete-Guide-to-the-Sector-and-Its-Importance", "priority": "0.70", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/bfsi-jobs-gateway-to-stable-careers", "priority": "0.70", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/crm-in-the-bfsi-sector", "priority": "0.70", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/how-a-jobs-consultancy-can-help", "priority": "0.70", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/how-to-crack-an-interview-complete-guide-for-freshers", "priority": "0.70", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/how-to-get-a-bfsi-job-after-graduation-guide-for-freshers", "priority": "0.70", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/how-to-introduce-yourself-in-an-interview", "priority": "0.70", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/jobs-for-freshers-in-Indore-a-practical-guide-to-career-opportunities", "priority": "0.70", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/resume-tips-for-freshers-2026", "priority": "0.70", "changefreq": "monthly"},
    {"loc": "https://emta.co.in/top-10-bpo-interview-questions-and-answers-for-freshers-in-indore", "priority": "0.70", "changefreq": "monthly"}
]

xml_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
    '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9',
    '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">'
]

for p in pages:
    xml_lines.append('  <url>')
    xml_lines.append(f'    <loc>{p["loc"]}</loc>')
    xml_lines.append(f'    <lastmod>{today}</lastmod>')
    xml_lines.append(f'    <changefreq>{p["changefreq"]}</changefreq>')
    xml_lines.append(f'    <priority>{p["priority"]}</priority>')
    xml_lines.append('  </url>')

xml_lines.append('</urlset>')
xml_content = "\n".join(xml_lines) + "\n"

# Write both web-map.xml and sitemap.xml
web_map_path = os.path.join(base_dir, "web-map.xml")
sitemap_path = os.path.join(base_dir, "sitemap.xml")

with open(web_map_path, "w", encoding="utf-8") as f:
    f.write(xml_content)
print(f"Generated {web_map_path} with {len(pages)} URLs.")

with open(sitemap_path, "w", encoding="utf-8") as f:
    f.write(xml_content)
print(f"Generated {sitemap_path} with {len(pages)} URLs.")
