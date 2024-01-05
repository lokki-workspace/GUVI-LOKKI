//DAY5
//TASK 1 - create your own resume in JSON format

const resume =
    {
        "basicsdetails": {
          "name": "Logeshwaran S",
          "title": "Full-Stack-Developer",
          "picture": "",
          "degree": "B.E Computer Science and Engineering",
          "website": "www.lokki.com/",
          "summary": "To work in a dynamic professional environment with a growing organization and utilize my creativity and innovative thinking for benefit of the organization and myself. Excellent capability to explore and learn new skills with quantitative analytical skill.",
             "location": {
                 "address": "Chennai,India",
                 "postalCode": "600098",
                 "city": "Chennai",
                 "countryCode": "MAS"
                 },
             "contact":{
                 "email": "lokeshspl**@gmail.com",
                 "phone": "+91-80720*****",
                 "linkedin": "linkedin.com/in/LogeshwaranS",
                 "github": "github.com/lokki-workvibes"
                 }
             },
        "workExperience": [
             {
                 "company": "Tentacle Infotech India Pvt. Ltd.",
                 "position": "Software Developer - Traniee",
                 "website": "www.tentacle technologies.com",
                 "startDate": "03-2023",
                 "endDate": "",
                 "summary": "",
                 "highlights": [
                     "Gained hands-on experience in understanding the end-to-end loan application.",
                     "Had the opportunity to work collaboratively as a part of a team.",
                     "some touch with client side and handled various technologies and tools used in building a loan application system.",
                     "Honed my problem-solving skills and confidence in different aspects of software.",
                     "Recognized and Appreciated by team for excellence performance."
                     ]
                 },
            {
                 "company": "Reliance Corporate IT Park Limited",
                 "position": "Support & Sales Engineer",
                 "website": "www.Reliancejio.com",
                 "startDate": "03-2021",
                 "endDate": "04-2022",
                 "summary": "",
                 "highlights": [
                     "Well equipped and performed as fibre broadband engineer in reliance Jio.",
                     "Responsible to handle multiple customers and been in single point of contact.",
                     "Have to collaborated with field engineers during escalations and provides support for their quries.",
                     "Involved in part of telecom service and also have experience in mobility operations."
                    ]
                 }
        ],
        "projects": [
             {
                 "title": "Loan Application",
                 "description": ".",
                 "technologies": ["Java 1.8, Spring, Gradle with IntelliJ IDEA and MYSQL & Postman."]
             }
        ],
        "education": [
             {
                 "institution": "Karpagam institute of Technology",
                 "area": "B.E Computer Science and Engineering",
                 "university":"Anna university",
                 "location":"Coimabatore",
                 "studyType": "Full Time",
                 "startDate": "08-2015",
                 "endDate": "06-2019",
                 "gpa": "6.8%",
                 "courses": [
              ""
                 ]
             }
        ],
        "awards": [
             {
                 "title": "Team Man Award",
                 "date": "05-2023",
                 "awarder": "Team Manager",
                 "summary": "Appreciation for leading a team in project and discipline."
             }
        ],
        "certifications": [
             {
                  "title": "Java Intermediate Level",
                 "publisher": "Solo Learn Application",
                 "date": "2018"    
                 },
            {
                 "title": "ZCCA Traning Certification",
                 "publisher": "ZOHO",
                 "date": "2019"    
                 },
             {
                  "title": "Web Development Crash Course",
                 "publisher": "adobe technologies",
                  "date": "2020"    
                }
        ],
        "skills": [
            {
                  "name": "Programming Languages",
                 "level": "",
                 "keywords": [
                    "Keywords under this category (e.g. 'Java', 'C++', etc)"
                 ]
             }
        ],
        "languages": [
             {
                 "language1": "Tamil",
                 "fluencylanguage1": "Native or Bilingual Proficiency",
                  "language2": "English",
                 "fluencylanguage2": "Full professional Proficiency"
            
            }
        ],
        "interests": [
             {
                 "name1": "Sports-Cricket",
                 "keywords1": [
                     "love to spend some times on ground. it will boost me."
                     ],
                 "name2": "Education-Learnings",
                 "keywords2": [
                     "have some interests to learn new things related to my profession."
                     ]
             }
        ]
      }

      console.log(resume);

//OUTPUT:
//Presented as png image in repository