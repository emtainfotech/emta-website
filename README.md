# Elite Manpower & Training Academy (EMTA) — Official Website

> **EMTA (Elite Manpower & Training Academy)** is a premier BFSI training institute and placement consultancy based in Indore, Madhya Pradesh. Founded in 2020, EMTA bridges the gap between ambitious job seekers and top corporate recruiters across Banking, Financial Services, Insurance (BFSI), Customer Care, Inside Sales, and IT Operations.

* **Live Domain:** [https://emta.co.in](https://emta.co.in)
* **Parent Organization:** EMTA (Elite Manpower & Training Academy)
* **Developed By:** [EMTA Infotech](https://emtainfotech.com)

---

## 📋 Table of Contents

1. [Key Features & Modules](#-key-features--modules)
2. [Project Architecture & Directory Structure](#-project-architecture--directory-structure)
3. [Server Configuration & URL Routing (.htaccess)](#-server-configuration--url-routing-htaccess)
4. [Google Jobs Schema.org Structured Data](#-google-jobs-schemaorg-structured-data)
5. [Job Vacancy Management Workflow](#-job-vacancy-management-workflow)
6. [SEO & Performance Optimizations](#-seo--performance-optimizations)
7. [Tech Stack & Libraries](#-tech-stack--libraries)
8. [Local Development & Deployment](#-local-development--deployment)
9. [Contact & Support](#-contact--support)

---

## 🌟 Key Features & Modules

### 1. BFSI Training Program & Course Catalog
* **Dedicated BFSI Portal (`bfsi-training.html`):** In-depth curriculum on retail banking, insurance operations, loan underwriting, financial compliance, mutual funds, and CRM tools.
* **Dynamic Course Details (`course-details.html?id=X`):** Interactive course details loader displaying module breakdown, duration, eligibility, and fee structure. Clean URL mapping via `.htaccess` (`/course/1` $\rightarrow$ `course-details.html?id=1`).

### 2. Job Portal & Dedicated Job Openings
* **Careers Page (`careers.html`):** Grid of all active vacancies with job category tags, salary packages, locations, and direct application links.
* **Dynamic Job Detail View (`job-details.html?id=X`):** Single-page application logic reading from `js/jobs.js` to render full job descriptions, responsibilities, eligibility requirements, and dynamic Google Jobs schema.
* **Dedicated Static Job Landing Pages (`jobs/<slug>/index.html`):** High-converting, SEO-optimized individual static pages for priority vacancies (e.g. Swiggy Customer Care, Walmart International Voice, Vivint CSA, Senior Accountant).

### 3. Employer & Job Seeker Services
* **For Employers (`for-employer.html` / `hire-with-us.html`):** Talent sourcing, bulk hiring, screening, and customized onboarding solutions for corporations.
* **For Job Seekers (`for-employee.html` / `work-with-us.html` / `job-placement.html`):** Resume building, interview preparation, career counseling, and direct placement drives.
* **Recruitment Solutions (`recruitment-solution.html` / `partner-with-us.html`):** Partnership opportunities for training institutes and placement partners.

### 4. Blog & Career Resources
* In-depth guides for freshers and job seekers:
  * *Top 10 BPO Interview Questions & Answers*
  * *How to Get a BFSI Job After Graduation (2026 Guide)*
  * *Resume Tips for Freshers 2026*
  * *What is BFSI & Why is it Important?*
  * *Jobs for Freshers in Indore: Practical Career Guide*

### 5. Custom Branded 404 Error Page (`404.html`)
* Responsive, beautifully styled error page featuring:
  * Primary navigation & quick action buttons (*"Back to Home"*, *"Browse Jobs"*, *"BFSI Training"*, *"Contact Us"*).
  * Popular destination cards for top vacancies and certification programs.
  * Full footer and WhatsApp / call support buttons.
  * Proper `<meta name="robots" content="noindex, follow">` SEO tag.

---

## 📁 Project Architecture & Directory Structure

```text
EMTA Website/
│
├── .htaccess                   # Apache URL rewrite rules, 301 redirects, caching & security headers
├── .gitignore                  # Git ignore rules for clean repository state
├── 404.html                    # Branded 404 Not Found error page
├── index.html                  # Main homepage
├── about.html                  # About EMTA, vision, leadership & team
├── careers.html                # Career portal with all active job listings & Google Jobs schema
├── job-details.html            # Dynamic job detail template (?id=X)
├── contact.html                # Contact page with inquiry forms, map & phone details
├── recruitment-solution.html   # Recruitment and staffing solutions for companies
├── bfsi-training.html          # BFSI academy overview, syllabus & fee structure
├── course-details.html         # Dynamic course structure template (?id=X)
├── for-employee.html           # Portal for job seekers and freshers
├── for-employer.html           # Portal for hiring partners and corporate HR
├── work-with-us.html           # Job application submission form
├── hire-with-us.html           # Corporate talent requisition form
├── study-with-us.html          # Student BFSI course enrollment form
├── partner-with-us.html        # Academic & franchise partnership page
├── job-placement.html          # 100% placement assistance & hiring tie-ups
├── blog.html                   # Blog archive / index page
├── robots.txt                  # Search engine crawling directives
├── web-map.xml                 # XML sitemap for search engines
├── README.md                   # Complete documentation and developer guide
│
├── jobs/                       # Dedicated SEO static landing pages per vacancy
│   ├── customer-care-executive-vijay-nagar/index.html
│   ├── inside-sales-executive/index.html
│   ├── customer-care-swiggy/index.html
│   ├── customer-success-associate-vivint/index.html
│   ├── customer-support-walmart/index.html
│   ├── customer-support-seller-support/index.html
│   └── senior-accountant/index.html
│
├── css/                        # CSS stylesheets
│   ├── bootstrap.min.css       # Bootstrap 5 core CSS
│   └── style.css               # EMTA custom theme stylesheet
│
├── js/                         # Frontend JavaScript
│   ├── main.js                 # Global UI interactions (navbars, counters, animations)
│   └── jobs.js                 # Central database of active job vacancies and card renderers
│
├── lib/                        # Vendor UI libraries
│   ├── animate/                # CSS animation triggers
│   ├── wow/                    # WOW.js scroll animations
│   ├── owlcarousel/            # Touch-enabled carousel sliders
│   ├── lightbox/               # Image modal gallery popups
│   ├── easing/                 # Easing curve utilities
│   ├── waypoints/              # Scroll position triggers
│   └── counterup/              # Animated numerical statistic counters
│
├── img/                        # Project image assets & media
│   ├── Blog/                   # Featured graphics for blog articles
│   ├── jobs/                   # Featured banners for job postings
│   ├── insta-images/           # Footer Instagram gallery feed previews
│   ├── emta-gif.gif            # Animated branding badge
│   └── f.png                   # Primary EMTA logo
│
└── generate_job_pages_v2.py    # Python script to regenerate static job landing pages with Google Jobs schema
```

---

## ⚙️ Server Configuration & URL Routing (`.htaccess`)

The root [`.htaccess`](file:///.htaccess) file manages all web server routing on Apache:

### 1. 301 Permanent Redirects for Broken/Legacy URLs
* `/home` and `/home.html` $\rightarrow$ 301 redirect to `/`
* `/index` and `/index.html` $\rightarrow$ 301 redirect to `/`
* `/job-vacancy` and `/job-vacancy.html` $\rightarrow$ 301 redirect to `/recruitment-solution`
* `/course-structure/*` $\rightarrow$ 301 redirect to `/course/*`

### 2. SEO-Friendly Extensionless URLs
* Requests to `.html` files are redirected to clean URLs (e.g., `https://emta.co.in/about.html` $\rightarrow$ `https://emta.co.in/about`).
* Extensionless URLs are rewritten to `.html` **only if** the corresponding file exists on disk (`RewriteCond %{DOCUMENT_ROOT}/$1.html -f`).
* Missing or non-existent URLs fall through cleanly to `ErrorDocument 404 /404.html`.

### 3. Performance & Caching Rules
* **mod_deflate:** Gzip compression enabled for HTML, CSS, JS, JSON, XML, and WOFF2 web fonts.
* **mod_expires:** 1-year caching for images/fonts, 1-month caching for CSS/JS, and fresh verification for HTML.
* **Security Headers:** `X-Content-Type-Options: nosniff`, `X-XSS-Protection: 1; mode=block`, and `X-Frame-Options: SAMEORIGIN`.

---

## 🔍 Google Jobs Schema.org Structured Data

All active job listings incorporate official [Schema.org `JobPosting`](https://schema.org/JobPosting) structured data to appear in **Google for Jobs** rich search cards.

### Schema Fields Implemented:
* `@context`: `"https://schema.org/"`
* `@type`: `"JobPosting"`
* `title`: Full standardized job title
* `description`: HTML description with responsibilities and requirements
* `identifier`: Unique job reference ID (e.g., `EMTA-SWIGGY-CCE`, `EMTA-INSIDE-SALES`)
* `datePosted` & `validThrough`: ISO 8601 timestamps active through 2026
* `employmentType`: `"FULL_TIME"`
* `hiringOrganization`: `"Elite Manpower and Training Academy (EMTA)"` with verified logo and domain
* `jobLocation`: Complete `PostalAddress` including street address, locality, state region, and postal code
* `baseSalary`: Structured `MonetaryAmount` in `INR` with quantitative `minValue`, `maxValue`, and `unitText: "MONTH"`
* `directApply`: `true`
* `applicantLocationRequirements`: Country: `India`

### Where Schema is Active:
1. **`careers.html`:** Multi-job array of JSON-LD `JobPosting` objects for all primary active openings.
2. **`job-details.html`:** Dynamic client-side JSON-LD injection updating schema based on the query parameter `?id=X`.
3. **`jobs/<slug>/index.html`:** Individual static pages generated with custom, self-contained `JobPosting` blocks.

---

## 🚀 Job Vacancy Management Workflow

### How to Add or Update a Job Vacancy:

1. **Add Job Details to `generate_job_pages_v2.py`:**
   Open `generate_job_pages_v2.py` and add the new vacancy dictionary to `jobs_data`:
   ```python
   {
       "slug": "relationship-officer-bfsi",
       "title": "Relationship Officer – BFSI Banking Sales",
       "short_location": "Indore",
       "location": "Vijay Nagar, Indore",
       "city": "Indore",
       "region": "Madhya Pradesh",
       "postal_code": "452010",
       "min_salary": 18000,
       "max_salary": 35000,
       "salary": "₹18,000 – ₹35,000 / month + Incentives",
       "experience": "Freshers & Experienced",
       "employment_type": "Full Time",
       "shift": "Day Shift",
       "image": "relationship_officer.jpg",
       "meta_desc": "Hiring Relationship Officers for banking and BFSI operations in Indore.",
       "responsibilities": [...],
       "requirements": [...]
   }
   ```

2. **Regenerate Static Landing Pages:**
   Run the Python generator from the terminal:
   ```bash
   python generate_job_pages_v2.py
   ```
   This will automatically create `jobs/relationship-officer-bfsi/index.html` with valid Google Jobs schema.

3. **Update `js/jobs.js`:**
   Add the job object to the `jobs` array in `js/jobs.js` so it renders on the homepage and `careers.html` grid.

---

## 🛠️ Tech Stack & Libraries

* **Core:** HTML5, CSS3, JavaScript (Vanilla ES6+)
* **Styling Framework:** [Bootstrap 5](https://getbootstrap.com/)
* **Typography:** [Google Fonts (DM Sans & Inter)](https://fonts.google.com/)
* **Icons:** [Font Awesome 5.15.4](https://fontawesome.com/) & [Bootstrap Icons](https://icons.getbootstrap.com/)
* **UI Components & Plugins:**
  * [Animate.css](https://animate.style/) & [WOW.js](https://wowjs.uk/) for smooth reveal animations
  * [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/) for mobile-friendly sliders
  * [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/) for image galleries
  * [Waypoints](http://imakewebthings.com/waypoints/) & [Counter-Up](https://github.com/bfintal/Counter-Up) for animated numerical statistics
* **Automation:** Python 3 (Static page and schema generators)

---

## 💻 Local Development & Deployment

### Local Development
You can run a local preview server using Python or VS Code Live Server:

```bash
# Using Python 3 built-in HTTP server
python -m http.server 8000

# Open in browser
http://localhost:8000/
```

### Production Deployment (Apache / cPanel / VPS)
1. Ensure Apache has `mod_rewrite`, `mod_deflate`, `mod_expires`, and `mod_headers` enabled.
2. Upload all files and folders to `public_html/` (or web root).
3. Ensure `.htaccess` is uploaded to the root directory.
4. Verify HTTPS SSL certificate is installed and active.
5. Submit sitemap URL `https://emta.co.in/web-map.xml` to [Google Search Console](https://search.google.com/search-console).

---

## 📞 Contact & Support

* **Organization:** Elite Manpower & Training Academy (EMTA)
* **Head Office:** Flat No. 102, Vatsalya, AF-3, Scheme No. 54, Vijay Nagar, Indore – 452010, MP, India
* **Landmark:** Behind the lane of Golden Gate Hotel, near Satya Sai Square
* **Phone:** [+91 9522257477](tel:+919522257477)
* **Email:** [hr@emta.co.in](mailto:hr@emta.co.in)
* **Official Website:** [https://emta.co.in](https://emta.co.in)
* **Technical Partner:** [EMTA Infotech](https://emtainfotech.com)

---
*© 2026 EMTA (Elite Manpower & Training Academy). All rights reserved.*
