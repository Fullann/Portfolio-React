const config = {
    name: 'Nathan Füllemann',
    domain: 'fullann.ch',
    email: 'nathan@fullann.ch',

    darkmode: {
        enabled: false
    },
    laguageSwitcher: {
        enabled: true,
    },
    social: {
        github: 'https://github.com/Fullann',
        linkedin: 'https://www.linkedin.com/in/nathan-f%C3%BCllemann-641b32232/',
        codepen: 'https://codepen.io/Fullann',
        twitter: "",
        instagram: ""
    },

    about: {
        enabled: true,
        meta: [
            { title: 'OS', value: 'Windows 11' },
            { title: 'Memory', value: '16 GB 2667 MHz DDR4' },
            { title: 'Keyboard', value: 'Keychron K2 - Gateron Brown Keys' },
            { title: 'Mouse', value: 'Logitech Silent Pebble' },
            { title: 'Monitor', value: 'LG QHD (2560 x 1440) 27 Inch IPS Display' },
            { title: 'Laptop • Processor • Graphics', value: 'MacBook Pro (16-inch, 2019) • 2.6 GHz 6-Core Intel Core i7 • AMD Radeon Pro 5300M 4 GB + Intel UHD Graphics 630 1536 MB' }
        ]
    },
    projects: {
        enabled: true,
    },
    resume: {
        enabled: true,
        pdfUrl: '/NathanFüllemann-CV_2023.pdf'
    },
    buyMeACoffee: {
        enabled: false,
        url: 'https://www.buymeacoffee.com/Fullann'
    },
    contact: {
        enabled: false,
        email: 'nathan@fullann.ch'
    },
    forkProjet: {
        enabled: false,
        link: 'https://github.com/fullann/PortfolioV2',
    },
    workedAt: {
        // add logos in static and at max add 3/4
        enabled: true,
        meta: [
            { name: 'Solmani SA', src: 'Assets/image/entreprise/solmani/solmani.svg', url: 'https://solmani.ch' },
        ]
    },
    recommandations: {
        enabled: true,
    }
}

export default config;