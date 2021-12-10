export const certs = [
    {
        name: 'JavaScript',
        title: 'geekbrains',
        url: 'https://geekbrains.ru/certificates/459861.en',
        img: 'https://i.imgur.com/xLyri03.png'
    },
    {
        name: 'JavaScript',
        title: 'tests4geeks',
        url: 'https://tests4geeks.com/certificate?cr=pg8h1p8',
        img: 'https://imgur.com/sikfg7g.jpg',
    },
    {
        name: 'React',
        title: 'skillvalue',
        url: 'https://skillvalue.com/en/certificate/pMO560o3r3IWl1f2gVbhRt9VZH5zGZfIXwfbNalgSjR82a2qP158v5Z3UuId',
        img: 'https://imgur.com/SLI5oat.jpg'
    },
    {
        name: 'JavaScript',
        title: 'skillvalue',
        url: 'https://skillvalue.com/en/certificate/9WJud1Fgvu2sA2EDEWUwCVNzvarD6Yqtadm2JvqhmWilgpH8VJUNMhbkSxgU',
        img: 'https://imgur.com/Ff8qoJM.jpg'
    },
    {
        name: 'Angular',
        title: 'skillvalue',
        url: 'https://skillvalue.com/en/certificate/3cnKsBctcyw9nWdeqLMc65OwNTMwIXDKo4w7A1CaCnS387ZJnoAIiWUcwcqh',
        img: 'https://imgur.com/DtHkBKT.jpg'
    },
    {
        name: 'Bootstrap',
        title: 'skillvalue',
        url: 'https://skillvalue.com/en/certificate/JGSGjnx6Co3gSrfax9DZBMuvCuf2t7IpLtj8UHnYj8ON9lq4u3Im5ShjYk3h',
        img: 'https://imgur.com/TOtpaRx.jpg'
    }
];

const skills = {
    frontend: [
        {
            name: 'React',
            logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
            cert: certs[3],
            color: '#222222',
            text: 'Thinking in react',
            more: 'https://reactjs.org/',
        },
        {
            name: 'JavaScript',
            logo: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
            cert: certs[3],
            color: '#f7df1e',
            textColor: 'black',
            text: 'You must enable javascript in your browser to view this label',
            more: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            name: 'TypeScript',
            logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
            color: '#007acc',
            text: 'JavaScript that scales',
            more: 'https://www.typescriptlang.org/'
        },
        {
            name: 'Webpack',
            logo: 'https://cdn.worldvectorlogo.com/logos/webpack-icon.svg',
            color: '#2b3a42',
            text: 'Bundle your whatever',
            more: 'https://webpack.js.org/'
        },
        {
            name: 'Angular',
            text: 'Superheroic JavaScript MVW Framework',
            more: 'https://angular.io/',
            logo: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
            cert: certs[4],
            color: '#2a7bd0'
        },
        {
            name: 'JQuery',
            logo: 'https://cdn.worldvectorlogo.com/logos/jquery-1.svg',
            color: '#78cff5',
            textColor: 'black',
            more: 'https://jquery.com/',
            text: 'Write less, do more'
        },
        {
            name: 'Bootstrap',
            logo: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg',
            text: 'Dev fast, same look',
            cert: certs[5],
            color: '#563d7c',
            more:'https://getbootstrap.com/'
        },
        {
            name: 'Material-UI',
            logo: 'https://cdn.worldvectorlogo.com/logos/material-ui.svg',
            color: '#1976d2',
            text: 'React components for faster and easier web development. Build your own design system, or start with Material Design.',
            more:'https://material-ui.com/'
        },
    ],
    backend: [
        // {name: 'PHP', logo: 'http://php.net/images/logos/php-logo.svg', color:'#8892bf'},
        // {name: 'Symfony', logo: 'https://cdn.worldvectorlogo.com/logos/symfony.svg', color:'#1a171b'},
        {name: 'Node JS', logo: 'https://nodejs.org/static/images/logo.svg', color: '#333333'},
        {name: 'Express JS', logo: 'https://cdn.worldvectorlogo.com/logos/express-109.svg', color: '#eeeeee'},
    ],
    database: [
        {name: 'MySQL', logo: 'https://cdn.worldvectorlogo.com/logos/mysql.svg', color: '#fff'},
        {name: 'PostgreSQL', logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg', color: '#336791'},
        {name: 'MSSQL', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg'},
        // {name: 'Doctrine', logo: 'https://cdn.worldvectorlogo.com/logos/doctrine.svg', color:'#24314b'},
    ],
    server: [
        {name: 'Ubuntu server', logo: 'https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg'},
        {
            name: 'Windows server',
            logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg',
            color: '#222222'
        },
    ],
    vcs: [
        {name: 'Git', logo: 'https://cdn.worldvectorlogo.com/logos/git.svg', color: '#f1f1e9'},
    ],
};

skills.all = function () {
    return this.groups().reduce((skills, group) => skills.concat(this[group]), [])
};

skills.groups = function () {
    return Object.keys(this).filter(key => typeof this[key] !== 'function')
};


export default skills;
