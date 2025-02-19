
const resumeData = {
    name: "Bao Toan Le",
    phone: "+84 93364 29 30 (WhatsApp)",
    email: "bao.toan.d.le@gmail.com",
    linkedin: "https://linkedin.com/in/bao-toan-d-le",
    location: "York, PA (Open to relocation)",
    summary: "Manager and Data Research Scientist with 10 years of combined experience in the nonprofit and education sectors. Skilled in team management, data analysis, and communications, with a proven track record in improving engagement and re-enrollment rates. Experienced in leveraging technology for decision-making and fostering continuous improvement.",
    experience: [
        "Senior Teacher, ILA Vietnam — Binh Duong, Vietnam (September 2019 – January 2025): Directed and managed a team of 15 educators, optimizing team performance and fostering professional development. Spearheaded the design and delivery of English curriculum, achieving an 80%+ average student pass rate and enhancing student learning outcomes. Mentored junior teachers on instructional strategies, educational technology integration, and classroom management techniques. Partnered with senior leadership to implement teaching methodologies, employee retention strategies, and curriculum standards.",
        "Data Research Scientist, Latin American Youth Center — Washington, DC (September 2012 – May 2017): Led data collection, analysis, and reporting for over 3,000 youth program participants, providing actionable insights to drive program development and strategic decision-making. Designed and developed surveys and assessments to track youth engagement, academic performance, and program effectiveness. Produced detailed data visualizations and reports, enhancing data accuracy by 20% and informing key program strategies. Delivered comprehensive data entry and analysis training for staff across multiple regions (DC, Maryland), increasing operational efficiency and data consistency. Implemented data quality control measures, ensuring integrity and accuracy of large-scale datasets."
    ],
    education: [
        "B.A. in Business Management, Penn State — Middletown, PA (Graduated: December 2009): Relevant Coursework: Information Systems, Statistics, Applied Calculus",
        "A.S. in Computer Information Systems, Harrisburg Area Community College — York, PA (Graduated: May 2019): Relevant Coursework: Data Mining, Data Warehousing, JavaScript, HTML & CSS. Finance Chair: Managed a $10,000+ budget for club activities."
    ],
    skills: [
        "Data Analysis & Visualization: Business Intelligence, Tableau, Excel (Advanced functions, PivotTables, Macros)",
        "Programming: Python, R, SQL, HTML",
        "Web Development: HTML, CSS, JavaScript",
        "Tools: Photoshop, Microsoft Office Suite, Google Suite",
        "Communication: Technical documentation, presentations, and written/verbal communication",
        "Collaboration: Cross-functional teamwork, agile environments",
        "Leadership: Team management, mentoring, training junior staff",
        "Adaptability: Quick to learn new tools and adjust to changing environments",
        "Time Management: Task prioritization, deadline management"
    ],
    volunteer: [
        "Health Educator, AmeriCorps — Washington, DC (September 2010 - September 2012): Delivered health education workshops to 200+ students on nutrition, mental health, and disease prevention. Organized a health fair for 300+ youth and local nonprofits. Collaborated with health professionals to improve community health outcomes."
    ],
    additional_info: [
        "Languages: English, Vietnamese",
        "Certifications: ETO Administrator (Gold Certified) — Social Solutions (June 2013)",
        "Awards/Activities: Dean’s List (2005, 2019), Health Educator AmeriCorps (2010–2012)"
    ]
};

document.getElementById("name").textContent = resumeData.name;
document.getElementById("contact").textContent = `Phone: ${resumeData.phone} | Email: ${resumeData.email}`;
document.getElementById("linkedin").innerHTML = `LinkedIn: <a href="${resumeData.linkedin}">${resumeData.linkedin}</a>`;
document.getElementById("location").textContent = `Location: ${resumeData.location}`;
document.getElementById("summary").textContent = resumeData.summary;

const experienceList = document.getElementById("experience");
resumeData.experience.forEach(exp => {
    const li = document.createElement("li");
    li.textContent = exp;
    experienceList.appendChild(li);
});

const educationList = document.getElementById("education");
resumeData.education.forEach(edu => {
    const li = document.createElement("li");
    li.textContent = edu;
    educationList.appendChild(li);
});

const skillsList = document.getElementById("skills");
resumeData.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

const volunteerList = document.getElementById("volunteer");
resumeData.volunteer.forEach(vol => {
    const li = document.createElement("li");
    li.textContent = vol;
    volunteerList.appendChild(li);
});

const additionalInfoList = document.getElementById("additional_info");
resumeData.additional_info.forEach(info => {
    const li = document.createElement("li");
    li.textContent = info;
    additionalInfoList.appendChild(li);
});
