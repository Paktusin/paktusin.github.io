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
        img: 'https://imgur.com/sikfg7g.jpg'
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
    backend: [
        {name: 'PHP', logo: 'https://cdn.worldvectorlogo.com/logos/php-1.svg'},
        {name: 'Symfony', logo: 'https://cdn.worldvectorlogo.com/logos/symfony.svg'},
        {name: 'Node JS', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs.svg'},
        {name: 'Express JS', logo: 'https://cdn.worldvectorlogo.com/logos/express-109.svg'},
    ],
    frontend: [
        {name: 'JavaScript', logo: 'https://cdn.worldvectorlogo.com/logos/javascript.svg', cert: certs[3]},
        {name: 'Angular', logo: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg', cert: certs[4]},
        {name: 'JQuery', logo: 'https://cdn.worldvectorlogo.com/logos/jquery-1.svg'},
        {name: 'Bootstrap', logo: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg', cert: certs[5]},
        {name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-1.svg', cert: certs[3]},
    ],
    database: [
        {name: 'MySQL', logo: 'https://cdn.worldvectorlogo.com/logos/mysql.svg'},
        {name: 'MSSQL', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg'},
        {name: 'PSQL', logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg'},
        {name: 'Doctrine', logo: 'https://cdn.worldvectorlogo.com/logos/doctrine.svg'},
    ],
    server: [
        {name: 'Ubuntu server', logo: 'https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg'},
        {name: 'Windows server', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg'},
    ],
    vcs: [
        {name: 'Git', logo: 'https://cdn.worldvectorlogo.com/logos/git.svg'}
    ],
};

skills.all = function () {
    return this.groups().reduce((skills, group) => skills.concat(this[group]), [])
};

skills.groups = function () {
    return Object.keys(this).filter(key => typeof this[key] !== 'function')
};


export default skills;