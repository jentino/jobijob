const express =require('express');
const app = express();

app.listen(80, ()=>{
    console.log('Server is listening on port 80');
});

let jobs = [
    {
        id: 1, 
        companyId: 2,
        title: 'Web Developer',
        description: 'This job requires someone to Code websites.',
        longdescription: "Develop a robust and scalable website to support an app with over 1 million lines of code, ensuring high performance and reliability.  Design and implement customized landing pages for each industry we serve, reflecting their unique needs and characteristics.  Create additional landing pages for various marketing and operational purposes, ensuring brand consistency and message alignment.  Ensure responsive and optimized web design across various devices and platforms.  Integrate a flexible and powerful CMS to manage diverse content efficiently.  Provide ongoing maintenance, updates, and enhancements to the website, addressing complex challenges and ensuring seamless user experience.",
        department: 'Department of Code websites',
        salary: 80000
    },
    {
        id: 2, 
        companyId: 2,
        title: 'Web Designer',
        description: 'This job requires someone to Design websites.',
        longdescription: "Design a robust and scalable website to support an app with over 1 million lines of code, ensuring high performance and reliability.  Design and implement customized landing pages for each industry we serve, reflecting their unique needs and characteristics.  Create additional landing pages for various marketing and operational purposes, ensuring brand consistency and message alignment.  Ensure responsive and optimized web design across various devices and platforms.  Integrate a flexible and powerful CMS to manage diverse content efficiently.  Provide ongoing maintenance, updates, and enhancements to the website, addressing complex challenges and ensuring seamless user experience.",
        department: 'Department of design websites',
        salary: 90000
    },{
        id: 3, 
        companyId: 2,
        title: 'Senior Web Developer',
        description: 'This job requires someone to Oversee Building websites!',
        longdescription: "Oversee a robust and scalable website to support an app with over 1 million lines of code, ensuring high performance and reliability.  Design and implement customized landing pages for each industry we serve, reflecting their unique needs and characteristics.  Create additional landing pages for various marketing and operational purposes, ensuring brand consistency and message alignment.  Ensure responsive and optimized web design across various devices and platforms.  Integrate a flexible and powerful CMS to manage diverse content efficiently.  Provide ongoing maintenance, updates, and enhancements to the website, addressing complex challenges and ensuring seamless user experience.",
        department: 'Department of oversee websites',
        salary: 120000
    }
];


let jobscompanies = [

    {
        id: 1,
        name: 'University of Cape Town',
        location: "Western Cape"
    },
    {
        id: 2,
        name: 'University of the Western Cape',
        location: "Western Cape"
    },
    {
        id: 3,
        name: 'Stellenbosch University',
        location: "Western Cape"
    },
    {
        id: 4,
        name: 'Cape Peninsula University of Technology',
        location: "Western Cape"
    }
];


app.get('/jobs', (req, res)=>{
    res.send(jobs);
});


app.get('/companies', (req, res)=>{
    res.send(jobscompanies);
});

app.get('/', (req, res)=>{
    res.send('Hello JobiJobber. Welcome here!');
});