const projects = [
    {
        url: 'https://zapiskihomyaka.ru/',
        title: 'Hamster notes',
        descr: 'Cross Stitch site. Users can share their stich work and monitore their progress.Can create competitions and games for cross stich. I was use PHP Symphony3 + Bootstrap + React and jQuery',
        logo: 'https://zapiskihomyaka.ru/build/images/logo.png'
    },
    {
        url: 'https://svod-int.ru/',
        logo: 'https://i.imgur.com/YnTWz3o.png',
        title: 'Svod International internal web apps',
        descr: "I wrote TimeSheet web application to calculate salary for workers by their worked time and calculating vacations days. Before my project operator input all hours of all workers in XLS sheet. My project automated part of this process and make this work easer. For backend I used C# (ASP.NET), MS SQL. For a frontend part i used JavaScript, jQuery, Bootstrap.\n" +
            "Also I migrated winform application to the web application. It was an application for managment of all equipment in company. It store biig list of all technics, and manage it. Like income\\outcome documents, guarantee lists, documents about broken and etc. I used MS SQL and C# (ASP.NET, Windows Form) on backend and JavaScript, jQuery, MetroUI on frontend."
    },
    {
        url: 'https://sochisirius.ru/raspisaniie',
        logo: 'https://i.imgur.com/HjZPPOn.png',
        title: 'Center for gifted education "SIRIUS" internal web apps',
        descr: "Booking and Calendar web app for planning meeting and bus trips for events for students. This application also generate school timetable for students and roadlist for bus drivers. It's also integrated with Google Calendar\\MS Exchange, it automatic send Calendar events on email for participants of meeting and for service departments (like need water on meeting, or need a projector). It's like MS Exchange but better. I used AngularJS\\JavaScript, than migrate it to Angular\\TypeScript. On backend I used MySQL and PHP (Syphony 3)."
    },
    {
        url: 'https://presidentgrants.ru',
        title: 'President grants',
        descr: 'Web Site for registration of children for grants of the president. PHP (Syphony 3) + MySQL, JavaScript, JQuery, React, SCSS (Bootstrap)'
    },
    {
        url: 'https://www.kaspersky.ru/small-to-medium-business-security/pro/unified-monitoring-and-analysis-platform',
        logo: "https://www.kaspersky.ru/content/ru-ru/images/smb/icons/unified-management-and-analysis-platform_black_icon.png",
        title: 'Kaspersky Unified Monitoring and Analysis Platform',
        descr: "I write a frontend part of Kaspersky Unified Monitoring and Analysis Platform. It is a SPA application written in Typescript \\ Angular. I work with d3 library for graphs. Developing structure of application, routing, modules, complex and UI components. Working with a code review in Azure Devops server."
    }
]
export default projects
