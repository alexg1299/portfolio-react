import Portfolio from '../../models/portfolio'

export const initState: Portfolio = {
    meta: {
        title: 'My Portfolio',
        description: 'Lots of info about you.',
        showRepoLink: true,
    },
    menu: {
        home: 'Hello',
        about: 'Resume',
    },
    intro: {
        headline: "Hi, I'm Alexandra!",
        typed: [
            "I'm a full-stack web developer",
            'who can build UIs and APIs',
            'and deploy it.',
        ],
    },
    resume: {
        headline: 'Full stack web developer',
        summary: [
            'I enjoy designing and creating user interfaces with an impactful user experience.',
            'I love to learn and collaborate with others.',
        ],
        jobsHeadline: 'Employment',
        jobs: [
            {
                title: 'VP of Something',
                company: 'Fancy LLC',
                timeframe: '2015-2020',
                summary:
                    "List all the cool stuff you did here. Don't be shy, but be honest and specific.",
            },
            {
                title: 'Director of Stuff',
                company: 'Neato Inc.',
                timeframe: '2010-2015',
                summary:
                    'Highlight some accomplishments in these descriptions. Sometimes people even read them.',
            },
            {
                title: 'Developer',
                company: 'WorkJob Co.',
                timeframe: '2005-2010',
                summary:
                    'Action works and quantified results help explain what you really did in a job.',
            },
        ],
        toolsHeadline: 'Skills',
        tools: [
            {
                name: 'Front-end',
                list: 'React, Typescript, Javascript, HTML5, CSS, C#, APIs, Redux,',
            },
            {
                name: 'Back-end',
                list: 'APIs, MSSQL, MySQL',
            },
            {
                name: 'Utilities',
                list: 'Git, JIRA, npm, Bamboo',
            },
        ],
        educationHeadline: 'Education',
        educationDetails: [
            {
                schoolName: 'The University of Texas at San Antonio',
                graduationDate: 'May 2021',
                gpa: '3.92/4.0',
                degreeDetails: 'B.S Computer Science, Concentration in Software Engineering'
            }
        ]
    },
    sections: [
        {
            id: 'portfolio',
            menu: 'Portfolio',
            headline: 'Portfolio',
            subhead: 'Projects that mattered.',
            projects: [
                {
                    id: 'section-1-project-1',
                    title: 'My Cool Project',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                    links: [
                        {
                            label: 'Example',
                            url:
                                'https://github.com/alexg1299/portfolio',
                        },
                    ],
                },
                {
                    id: 'section-1-project-2',
                    title: 'Another One',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                },
                {
                    id: 'section-1-project-3',
                    title: 'Something Neat',
                    summary:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
                    image: '',
                },
            ],
        },
    ],
    footer: {
        social: [
            {
                service: 'tumblr',
                link: 'https://www.tumblr.com',
            },
            {
                service: 'github',
                link: 'https://github.com',
            },
            {
                service: 'linkedin',
                link: 'https://www.linkedin.com',
            },
        ],
        footerMessage: 'Thanks for reading.',
        background: '',
    },
}

export default (state: Portfolio = initState) => {
    return state
}
