import re

with open('e:/Projects/EMTA Website/crm-in-the-bfsi-sector.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract parts
sidebar_start = content.find('<div class="col-lg-4">')

# Keep everything up to the main content container
header_part = content[:content.find('<div class="col-lg-8">') + len('<div class="col-lg-8">')]

# Keep everything from sidebar start to end
footer_part = content[sidebar_start:]

new_main = '''
                    <img src="img/Blog/resume-tips-for-freshers-2026.png"
                        class="img-fluid rounded mb-4 w-100"
                        alt="Resume Tips for Freshers 2026" width="1280" height="853">

                    <h1 class="mb-3">Resume Tips for Freshers 2026</h1>

                    <div class="d-flex mb-4">
                        <small class="me-3"><i class="fa fa-user text-primary me-2"></i>EMTA Admin</small>
                        <small><i class="fa fa-calendar text-primary me-2"></i>23 Jul 2026</small>
                    </div>

                    <hr class="mb-4">

                    <p>When you are applying for a job you should make sure your resume is just right for that job. Do not use the same resume for every single job you apply for.</p>

<p>There are some mistakes that people who are new to the job market make when they are making their resumes. These mistakes can really hurt their chances of getting the job.</p>

<h2 class="mt-5 mb-3">Here are some mistakes to avoid:</h2>
<ul>
    <li>Spelling and grammar mistakes</li>
    <li>Using a resume format that's old</li>
    <li>Adding details that are not necessary</li>
    <li>Including hobbies that are not relevant to the job</li>
    <li>Using an email address that's not professional</li>
    <li>Writing a career objective that's too long</li>
    <li>Copying someone's resume</li>
    <li>Saying you have skills or experience that you do not really have</li>
    <li>Using a format that's not good</li>
    <li>Forgetting to update your contact information</li>
</ul>

<p>You should always read your resume carefully before you send it to the people who are hiring.</p>

<h2 class="mt-5 mb-3">Before you send in your resume use this checklist:</h2>
<ul>
    <li>Your contact information is correct</li>
    <li>You are using a professional email address</li>
    <li>Your resume is not too long; it should be one page</li>
    <li>Your career objective is customized for the job</li>
    <li>Your education details are right</li>
    <li>You have included skills that are relevant to the job</li>
    <li>You have listed any certifications you have</li>
    <li>You have added any projects or internships you have done</li>
    <li>You have checked your grammar and spelling</li>
    <li>Your resume is saved with a file name that's professional</li>
</ul>

<p>Remember that your resume plays a role in getting a job. So make sure it is really good.</p>

<ul>
    <li>Always change your resume for each job you apply to.</li>
</ul>

<p>This will help you show that you are a fit for the job.<br>
Your resume should be different for each job.<br>
Make sure you do it for every job you want.<br>
It will help you get noticed.</p>

<h2 class="mt-5 mb-3">What Makes A Good Resume</h2>
<p>A nice and simple resume should have the following things:</p>
<ul>
    <li>Full Name</li>
    <li>Phone Number</li>
    <li>Professional Email Address</li>
    <li>City</li>
    <li>LinkedIn Profile if you have one</li>
    <li>What You Want To Do In Your Career</li>
    <li>Where You Went To School</li>
    <li>Things You Are Good At With Computers</li>
    <li>Things You Are Good At With People</li>
    <li>Things You Have Worked On</li>
    <li>Any Internships You Have Done</li>
    <li>Any Special Certificates You Have</li>
    <li>Things You Are Proud Of</li>
    <li>Languages You Can Speak</li>
    <li>A Declaration if you want to add one</li>
</ul>

<h2 class="mt-5 mb-3">How to Write a Resume Step by Step</h2>

<h3>1. Contact Information</h3>
<p>To write a resume you should start with your contact information. This is the first thing that recruiters look at, so make sure it is all correct.</p>
<p>Here is what you should include:</p>
<ul>
    <li>Full Name</li>
    <li>Mobile Number</li>
    <li>Professional Email Address</li>
    <li>Current City</li>
    <li>LinkedIn Profile (if you have one)</li>
</ul>
<p>For example:</p>
<pre>Priyanshu Jat
+91 98765 xxxx
priyanshujat@email.com
Indore, Madhya Pradesh</pre>
<p>When making an email address do not use something like coolboy123@gmail.com. Instead make one with your name.</p>

<h3>2. Career Objective</h3>
<p>A career objective is a paragraph that explains who you are. It should also talk about your career goals and what you can bring to a company.</p>
<p>Keep it short. Make sure it relates to the job you are applying for.</p>
<p>Here is an example:</p>
<p><em>I am a graduate looking for a job where I can use my skills. I want to learn from people and help the company grow.</em></p>
<p>A good career objective shows recruiters that you're serious about your career. It also shows that you are willing to learn and work hard.</p>

<h3>3. Education</h3>
<p>The education part is really important when you are making a resume especially if you are new to the job market. People who hire often look at what you studied before they look at anything else. So you should list the things you studied in order starting with the most recent thing you finished.</p>
<p>You should include these things:</p>
<ul>
    <li>Degree or Course Name</li>
    <li>College or University Name</li>
    <li>Passing Year</li>
    <li>Percentage or CGPA</li>
</ul>
<p>For example it could look like this:</p>
<pre>Bachelor of Commerce (B.Com)
XYZ College, Indore
Devi Ahilya Vishwavidyalaya
2026
CGPA: 8.4</pre>
<p>If you did any courses or got certified in something that is related to the job you want, you should mention those after your main education.</p>

<h3>4. Skills</h3>
<p>Your skills section tells recruiters what you can contribute to the company. Instead of listing every skill you know, focus on those that match the job you're applying for.</p>

<h4>Technical Skills</h4>
<ul>
    <li>MS Excel</li>
    <li>MS Word</li>
    <li>PowerPoint</li>
    <li>Google Workspace</li>
    <li>Email Communication</li>
    <li>Internet Research</li>
    <li>Basic Computer Knowledge</li>
    <li>CRM Software</li>
    <li>Data Entry</li>
    <li>Canva</li>
</ul>

<h4>Soft Skills</h4>
<ul>
    <li>Communication Skills</li>
    <li>Teamwork</li>
    <li>Problem Solving</li>
    <li>Time Management</li>
    <li>Adaptability</li>
    <li>Leadership</li>
    <li>Positive Attitude</li>
    <li>Active Listening</li>
    <li>Customer Service</li>
    <li>Quick Learning</li>
</ul>
<p>Tip: Read the job description before applying and include relevant skills naturally in your resume.</p>

<h3>5. Academic Projects</h3>
<p>A lot of people who are new to the job market worry because they do not have any work experience. This is something that many people go through. Academic projects are a way to show that you have hands-on experience and that you are willing to learn things.</p>
<p>You should talk about these things when you are talking about your project:</p>
<ul>
    <li>Project Objective</li>
    <li>Your Role</li>
    <li>Tools or Technologies Used</li>
    <li>Outcome</li>
</ul>
<p><strong>Example:</strong> Customer Relationship Management System is an example of an academic project.</p>
<p><em>I worked on a Customer Relationship Management System project to learn about how customers interact with companies and to find ways to improve customer service. I did research on this topic I looked at customer data. I made suggestions on how to make customers happier with the service they got. I did this project in my semester of college.</em></p>
<p>Even if you did your project while you were in college, it is still something that's worth putting on your resume.</p>

<h3>6. Internship</h3>
<p>If you have done an internship you should definitely include it on your resume. Having an internship, even if it was only for a short time, shows employers that you know what it is like to work in a professional setting.</p>
<p><strong>Example:</strong></p>
<pre>Customer Care Intern
ABC Solutions, Indore
January 2026 – March 2026

Responsibilities:
- Assisted customers through phone and email support.
- Resolved customer queries.
- Updated customer information in CRM software.
- Worked closely with executives.
- Improved customer happiness by responding on time.</pre>
<p>If you do not have internship experience, just skip this part instead of adding fake information.</p>

<h3>7. Certifications</h3>
<p>Certifications make your resume better because they show that you are always learning things.</p>
<p>Some helpful certifications for newbies include:</p>
<ul>
    <li>Microsoft Excel</li>
    <li>Tally ERP</li>
    <li>Digital Marketing</li>
    <li>Google Digital Garage</li>
    <li>Python Basics</li>
    <li>Customer Service Training</li>
    <li>Spoken English</li>
    <li>Communication Skills</li>
    <li>Data Analytics Basics</li>
</ul>
<p>Only include certifications that are real and related to your job.</p>

<h2 class="mt-5 mb-3">ATS Resume Tips</h2>
<p>Many companies use a system to filter resumes before a recruiter looks at them. This system is called an Applicant Tracking System (ATS).</p>
<p>To make your resume friendly to this system:</p>
<ul>
    <li>Use headings for each section.</li>
    <li>Keep your resume design simple.</li>
    <li>Do not use text boxes or unnecessary pictures.</li>
    <li>When you are making your resume use fonts like Arial or Calibri.</li>
    <li>It is a good idea to use the words from the job description throughout your resume where they fit in.</li>
    <li>If the employer wants to save your resume as a PDF file then you should save your resume as a PDF file.</li>
    <li>Keep the format of your resume consistent throughout the whole resume; this will make your resume look nice and easy to read.</li>
</ul>
<p>A resume that is friendly to the Applicant Tracking System helps your job application reach a recruiter.</p>

<h2 class="mt-5 mb-3">Common Resume Mistakes Freshers Should Avoid</h2>
<p>Errors can give recruiters a bad impression. Before you send your resume, check for these mistakes:</p>
<ul>
    <li>Spelling and grammar errors.</li>
    <li>Wrong contact information.</li>
    <li>Unprofessional email address.</li>
    <li>Long career goals.</li>
    <li>Hobbies that are not relevant to the job.</li>
    <li>Bad formatting.</li>
    <li>Many colors or pictures.</li>
    <li>Fake work and fake certificates.</li>
    <li>Not changing your resume for each job.</li>
    <li>Submitting your resume without checking it.</li>
</ul>
<p>Taking a few minutes to review your resume can make a big difference.</p>

<h2 class="mt-5 mb-3">Resume Checklist Before Applying</h2>
<p>Before you apply make sure your resume meets this checklist:</p>
<ul>
    <li>✅ Contact details are correct.</li>
    <li>✅ Resume is limited to one page.</li>
    <li>✅ Career objective is relevant.</li>
    <li>✅ Education details are accurate.</li>
    <li>✅ Skills match the job requirements.</li>
    <li>✅ Projects or internships are included.</li>
    <li>✅ Grammar and spelling are checked.</li>
    <li>✅ Professional email address is used.</li>
    <li>✅ Resume file name is professional.</li>
</ul>

<h3>Example File Name</h3>
<p><code>Rahul-Sharma-Resume.pdf</code></p>
<p>Avoid file names like:</p>
<p><code>❌ Resume Final New Latest Updated.pdf</code></p>

<h2 class="mt-5 mb-3">8. Resume Headline Examples for Freshers</h2>
<p>A resume headline is a short statement. It tells recruiters about you. It helps them get an idea of who you are.</p>
<p>Here are some examples you can use:</p>
<ul>
    <li>Motivated B.Com Graduate looking for Entry-Level jobs</li>
    <li>Computer Science Graduate with programming skills</li>
    <li>I am an MBA Fresher who wants to build a career in Sales</li>
    <li>Customer Service is my passion. I have excellent communication skills</li>
    <li>I am a Commerce Graduate looking for opportunities in Banking</li>
    <li>Detail-Oriented Graduate with knowledge of MS Excel</li>
    <li>I am an IT Fresher looking for Software Development roles</li>
    <li>I am a fast learner with strong teamwork and communication skills</li>
    <li>Self-Motivated Graduate ready to start my professional career</li>
    <li>Dedicated Fresher looking for growth opportunities</li>
</ul>
<p>Choose a headline that matches the job you're applying for. Avoid statements like "I am looking for a job."</p>

<h2 class="mt-5 mb-3">Resume vs CV: What's the Difference?</h2>
<p>Many freshers think a resume and a CV are the same. They serve different purposes.</p>

<table class="table table-bordered mt-3">
    <thead>
        <tr>
            <th>Resume</th>
            <th>CV</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Usually 1 page</td>
            <td>Can be multiple pages</td>
        </tr>
        <tr>
            <td>Focuses on skills and relevant qualifications</td>
            <td>Includes detailed academic and professional history</td>
        </tr>
        <tr>
            <td>Customized for each job</td>
            <td>Used mainly for academic and research positions</td>
        </tr>
        <tr>
            <td>Common for companies</td>
            <td>Common for universities and research institutes</td>
        </tr>
    </tbody>
</table>

<p>For private jobs in India like BPO, banking, customer care and IT roles, a resume is what they usually want.</p>

<h2 class="mt-5 mb-3">Tips to Make Your Resume Stand Out</h2>
<p>Making a resume is not just about filling out sections. Little things can make a difference.</p>
<p>Here are some tips:</p>
<ul>
    <li>Use a clean design.</li>
    <li>Keep your resume to one page.</li>
    <li>Use bullet points instead of long paragraphs.</li>
    <li>Include information that matters.</li>
    <li>Add achievements with numbers whenever you can.</li>
    <li>Change your resume for every job you apply for.</li>
    <li>Use a font like Calibri or Arial.</li>
    <li>Check your resume for mistakes before sending it.</li>
    <li>Save your resume with a professional name.</li>
</ul>
<p>Recruiters like resumes that are clear, short, and easy to read.</p>

<h2 class="mt-5 mb-3">Frequently Asked Questions (FAQs)</h2>

<h4>1. What is the best resume format for people who are new to a job?</h4>
<p>Ans. The best format for a resume is usually the chronological format because it shows your latest education, skills and the things you have achieved in a clear and easy to understand way.</p>

<h4>2. Should a person who is new to a job have a resume that's only one page?</h4>
<p>Ans. Yes. For people who are new to a job a one-page resume is the best because it gives the important information without giving the person looking at it too much to read.</p>

<h4>3. Can I get a job if I do not have any work experience?</h4>
<p>Ans. Yes. The people who hire also think about the school you went to, the projects you did in school, the time you spent working for free to learn something, the papers you got for learning something, how well you talk to people, and if you are willing to learn new things.</p>

<h4>4. What kind of skills should I put in my resume?</h4>
<p>Ans. You should put in skills that are needed for the job you want, like being able to talk to people, using MS Excel, working with a team, helping customers, solving problems, or knowing how to write code.</p>

<h4>5. What is a resume that is easy for computers to read?</h4>
<p>Ans. A resume that is easy for computers to read uses a clean design, normal headings and words that are related to the job so the computer can understand it easily.</p>

<h4>6. Can I include things I learned online?</h4>
<p>Ans. Yes. If you got a paper from a good online school it can make your resume stronger especially if it is related to the job you want.</p>

<h4>7. What is the difference between a resume and a special paper that lists all your education and work?</h4>
<p>Ans. A resume is short, made for when you are looking for a job, but a CV that lists all your education and work is longer and usually used when you are looking for a job in a school or a place where people do research.</p>

<h4>8. How often should I make my resume new again?</h4>
<p>Ans. You should update your resume when you finish a project, get better at something, or look for a different kind of job.</p>

<h2 class="mt-5 mb-3">Final Resume Checklist</h2>
<p>Before you look for a job make sure you have:</p>
<ul>
    <li>✔ Updated contact information</li>
    <li>✔ Professional email address</li>
    <li>✔ Strong career objective</li>
    <li>✔ Correct education details</li>
    <li>✔ Relevant technical and soft skills</li>
    <li>✔ Projects or internships (if any)</li>
    <li>✔ Certifications</li>
    <li>✔ Error-free content</li>
    <li>✔ ATS-friendly formatting</li>
    <li>✔ Saved the resume with a professional file name</li>
</ul>

<p>It is a good idea to check your resume for a few minutes because this can help you avoid mistakes that may cost you an opportunity to get an interview.</p>
<p>A good resume is more than a piece of paper. It is your first chance to make a good impression on the person who is hiring. Even if you have no work experience you can still make a resume by talking about your education, skills and the things you have achieved.</p>
<p>Keep your resume simple and professional. Make sure it is right for the job you are applying for. Do not put fake things in your resume, check it carefully for mistakes, and update it when you get new skills and experience.</p>
<p>A good resume and being prepared for an interview can really help you get shortlisted and start your career with confidence.</p>

<h2 class="mt-5 mb-3">Start Your Career with EMTA</h2>
<p>Looking for your first job? EMTA is here to help you. We help people who are just starting out with their resume, getting ready for interviews, and finding job openings in different fields like BPO, Banking, BFSI, Customer Care, IT, and more.</p>
<p>If you are ready to take the next step in your career, you can look at our latest job openings and career help on the <a href="https://emta.co.in/">EMTA website</a>.</p>
                </div>
'''

new_html = header_part + new_main + footer_part

# Let's fix up some meta tags
new_html = new_html.replace(
    '<title>Customer Relationship Management (CRM) in the BFSI Sector</title>',
    '<title>Resume Tips for Freshers 2026</title>'
)
new_html = new_html.replace(
    '<meta\n        content="CRM in BFSI, BFSI sector, customer relationship management, BFSI jobs, BFSI course, banking, finance, insurance, EMTA"\n        name="keywords">',
    '<meta content="resume tips, fresher resume, resume format 2026, job application, interview preparation, EMTA, career" name="keywords">'
)
new_html = new_html.replace(
    '<meta\n        content="Learn why Customer Relationship Management (CRM) is the backbone of the BFSI sector, enhancing customer experience, trust, and driving careers in banking, finance, and insurance."\n        name="description">',
    '<meta content="Discover the best resume tips for freshers in 2026. Learn how to craft a perfect resume even with no work experience." name="description">'
)
new_html = new_html.replace(
    '<link rel="canonical" href="https://emta.co.in/blog/crm-in-bfsi-sector" />',
    '<link rel="canonical" href="https://emta.co.in/resume-tips-for-freshers-2026.html" />'
)

# And remove the FAQ JSON-LD from the head
new_html = re.sub(r'<script type="application/ld\+json">\s*\{.*?\}\s*</script>', '', new_html, flags=re.DOTALL)

with open('e:/Projects/EMTA Website/resume-tips-for-freshers-2026.html', 'w', encoding='utf-8') as f:
    f.write(new_html)
print('Blog HTML file generated successfully.')
