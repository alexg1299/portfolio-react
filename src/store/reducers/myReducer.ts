import Portfolio from '../../models/portfolio'

export const initState: Portfolio = {
    meta: {
        title: 'Alexandra Garcia',
        description: 'Hello!',
        showRepoLink: true,
    },
    menu: {
        home: 'Hello',
        about: 'Resume',
    },
    intro: {
        headline: "Hi, I'm Alexandra!",
        typed: [
            "I'm a full stack web developer",
            'who can build UIs and APIs',
            'and deploy it.',
        ],
    },
    resume: {
        headline: 'Full stack web developer',
        summary: [
            'I enjoy designing and creating user interfaces with an impactful user experience.',
            'I love to learn and collaborate with others.'
        ],
        jobsHeadline: 'Employment',
        jobs: [
            {
                title: 'Computer Scientist',
                company: 'Southwest Research Institute',
                timeframe: 'June 2021-Present',
                previousTitle: 'Student Computer Scientist',
                previousTimeFrame: 'May 2020-June 2021',
                summaryList: [
                    "Designed and implemented modular React UI components, APIs, and C# backend subsystems for a full-stack web application which is used by traffic operators in New England to monitor traffic conditions and send updates to various traffic monitors and devices.",
                    "Assisted in the transition of our monolithic windows application to a dockerized, decentralized system of microservices. Updated RESTful API from Swagger to OpenAPI3. Upgraded our backend legacy codebase to match updated advanced traffic management software (ATMS) and created scripts to update MSSQL database tables.",
                    "Utilized Git, JIRA, Bamboo, and Bitbucket for source control. Assisted in the transition from a waterfall to an agile development cycle.",
                    "Led the development and implementation of unit tests using NUnit for all ATMS applications across the division.",
                    "Reviewed and provided feedback on pull requests to ensure code merged into production was of the highest quality. Onboarded and provided technical support for 3 new hires.",
                    "Provided 24/7 on-call troubleshooting and support for traffic monitoring software to ensure client satisfaction.",
                    "Ensured new hire candidates met institute expectations/qualifications by conducting behavioral and technical interviews. Also participated in project cost estimation to ensure clients were charged at reasonable rate."
                ]
            },
        ],
        toolsHeadline: 'Skills',
        tools: [
            {
                name: 'Front-end',
                list: 'React, Typescript, Javascript, HTML5, CSS, Redux, Webpack',
            },
            {
                name: 'Back-end',
                list: 'C#, APIs, MSSQL, AWS, .NET, C, Java, Python, C++',
            },
            {
                name: 'Utilities',
                list: 'Git, npm, Material UI, JIRA, Bamboo, Confluence, Balsamiq Wireframes',
            },
        ],
        educationHeadline: 'Education & Certification',
        educationDetails: [
            {
                schoolName: 'The University of Texas at San Antonio',
                graduationDate: 'May 2021',
                gpa: 'Summa Cum Laude | 3.92/4.0',
                degreeDetails: 'B.S Computer Science, Concentration in Software Engineering'
            },
            {
                schoolName: 'SCRUM Master Certification',
                degreeDetails: 'Scrum Alliance',
                graduationDate: 'Sept 2021-Oct. 2023'
            }
        ]
    },
    sections: [
        {
            id: 'portfolio',
            menu: 'Portfolio',
            headline: 'Portfolio',
            subhead: 'Learning while making cool projects!',
            projects: [
                {
                    id: 'section-1-project-0',
                    title: 'Personal Portfolio',
                    summary:
                        'You are here :) This is my personal portfolio React website showcasing who I am and the cool projects I have done!',
                    image: 'react.svg',
                    links: [
                        {
                            label: 'See me on GitHub',
                            url:
                                'https://github.com/alexg1299/portfolio',
                        },
                    ],
                },
                {
                    id: 'section-1-project-1',
                    title: 'Dont Go Broke',
                    summary:
                        'Python script that parses bank statement files and organizes the data as a csv file.',
                    image: 'saveBank.png',
                    links: [
                        {
                            label: 'See me on GitHub',
                            url:
                                'https://github.com/alexg1299/DontGoBroke',
                        },
                    ],
                },
                {
                    id: 'section-1-project-2',
                    title: 'Circle',
                    summary:
                        'Mental Wellness mobile application that provides resources, support, and education materials to its users.' +
                        'Collaborated with developers and client to research UX and created UI components using Java in Android Studio.',
                    image: 'circleImage.jpg',
                },
                {
                    id: 'section-1-project-3',
                    title: 'Fare Escape',
                    summary:
                        'An endless runner game made with Unity. Utilized C# to create algorithms to keep track of player\'s scoring and health.',
                    image: 'fareEscapeMainMenu.png',
                    links: [
                        {
                            label: 'See me on GitHub',
                            url:
                                'https://github.com/alexg1299/Fare-Escape',
                        },
                    ],
                },
            ],
        },
    ],
    footer: {
        social: [
            {
                service: 'github',
                link: 'https://github.com/alexg1299',
            },
            {
                service: 'linkedin',
                link: 'https://www.linkedin.com/in/alexandra-g1299/',
            },
            {
                service: 'email',
                link: 'mailto:alexgarcia1299@yahoo.com?subject=Hey! Checked out your portfolio!'
            }
        ],
        footerMessage: 'Thanks for reading.',
        background: '',
    },
}

export default (state: Portfolio = initState) => {
    return state
}
