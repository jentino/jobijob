const express =require('express');
const app = express();
const mysql = require('mysql');



app.listen(80, ()=>{
    console.log('Server is listening on port 80');
});


var connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    // password: 'password123',
    database: 'jobijobapi'

});

let jobs = [];

connection.connect((err)=>{
    if(err) throw err;
    console.log('Connected to mysql server');
});

connection.query('SELECT * FROM jobs',(error, results, fields)=>{
    if(error) throw error;
    console.log(results);
});

connection.end();   


// let jobs = [
//     {
//         id: 1, 
//         companyId: 1,
//         title: 'Web Developer',
//         description: 'This job requires someone to Code websites.',
//         longdescription: "Develop a robust and scalable website to support an app with over 1 million lines of code, ensuring high performance and reliability.  Design and implement customized landing pages for each industry we serve, reflecting their unique needs and characteristics.  Create additional landing pages for various marketing and operational purposes, ensuring brand consistency and message alignment.  Ensure responsive and optimized web design across various devices and platforms.  Integrate a flexible and powerful CMS to manage diverse content efficiently.  Provide ongoing maintenance, updates, and enhancements to the website, addressing complex challenges and ensuring seamless user experience.",
//         department: 'Department of Code websites',
//         salary: 80000
//     },
//     {
//         id: 2, 
//         companyId: 1,
//         title: 'Web Designer',
//         description: 'This job requires someone to Design websites.',
//         longdescription: "Design a robust and scalable website to support an app with over 1 million lines of code, ensuring high performance and reliability.  Design and implement customized landing pages for each industry we serve, reflecting their unique needs and characteristics.  Create additional landing pages for various marketing and operational purposes, ensuring brand consistency and message alignment.  Ensure responsive and optimized web design across various devices and platforms.  Integrate a flexible and powerful CMS to manage diverse content efficiently.  Provide ongoing maintenance, updates, and enhancements to the website, addressing complex challenges and ensuring seamless user experience.",
//         department: 'Department of design websites',
//         salary: 90000
//     },
//     {
//         id: 3, 
//         companyId: 2,
//         title: 'Senior Web Developer',
//         description: 'This job requires someone to Oversee Building websites!',
//         longdescription: "Oversee a robust and scalable website to support an app with over 1 million lines of code, ensuring high performance and reliability.  Design and implement customized landing pages for each industry we serve, reflecting their unique needs and characteristics.  Create additional landing pages for various marketing and operational purposes, ensuring brand consistency and message alignment.  Ensure responsive and optimized web design across various devices and platforms.  Integrate a flexible and powerful CMS to manage diverse content efficiently.  Provide ongoing maintenance, updates, and enhancements to the website, addressing complex challenges and ensuring seamless user experience.",
//         department: 'Department of oversee websites',
//         salary: 120000
//     },
//     {
//         id: 4, 
//         companyId: 3,
//         title: 'Senior Web Developer',
//         description: 'This job requires someone to Oversee Building websites!',
//         longdescription: "Oversee a robust and scalable website to support an app with over 1 million lines of code, ensuring high performance and reliability.  Design and implement customized landing pages for each industry we serve, reflecting their unique needs and characteristics.  Create additional landing pages for various marketing and operational purposes, ensuring brand consistency and message alignment.  Ensure responsive and optimized web design across various devices and platforms.  Integrate a flexible and powerful CMS to manage diverse content efficiently.  Provide ongoing maintenance, updates, and enhancements to the website, addressing complex challenges and ensuring seamless user experience.",
//         department: 'Department of oversee websites',
//         salary: 120000
//     },
//     {
//         id: 5, 
//         companyId: 3,
//         title: 'Senior Web Developer',
//         description: 'This job requires someone to Oversee Building websites!',
//         longdescription: "Oversee a robust and scalable website to support an app with over 1 million lines of code, ensuring high performance and reliability.  Design and implement customized landing pages for each industry we serve, reflecting their unique needs and characteristics.  Create additional landing pages for various marketing and operational purposes, ensuring brand consistency and message alignment.  Ensure responsive and optimized web design across various devices and platforms.  Integrate a flexible and powerful CMS to manage diverse content efficiently.  Provide ongoing maintenance, updates, and enhancements to the website, addressing complex challenges and ensuring seamless user experience.",
//         department: 'Department of oversee websites',
//         salary: 120000
//     },
//     {
//         id: 6, 
//         companyId: 4,
//         title: 'Senior Web Developer',
//         description: 'This job requires someone to Oversee Building websites!',
//         longdescription: "Oversee a robust and scalable website to support an app with over 1 million lines of code, ensuring high performance and reliability.  Design and implement customized landing pages for each industry we serve, reflecting their unique needs and characteristics.  Create additional landing pages for various marketing and operational purposes, ensuring brand consistency and message alignment.  Ensure responsive and optimized web design across various devices and platforms.  Integrate a flexible and powerful CMS to manage diverse content efficiently.  Provide ongoing maintenance, updates, and enhancements to the website, addressing complex challenges and ensuring seamless user experience.",
//         department: 'Department of oversee websites',
//         salary: 120000
//     },
//     {
//         id: 7, 
//         companyId: 5,
//         title: 'Senior Web Developer',
//         description: 'This job requires someone to Oversee Building websites!',
//         longdescription: "Oversee a robust and scalable website to support an app with over 1 million lines of code, ensuring high performance and reliability.  Design and implement customized landing pages for each industry we serve, reflecting their unique needs and characteristics.  Create additional landing pages for various marketing and operational purposes, ensuring brand consistency and message alignment.  Ensure responsive and optimized web design across various devices and platforms.  Integrate a flexible and powerful CMS to manage diverse content efficiently.  Provide ongoing maintenance, updates, and enhancements to the website, addressing complex challenges and ensuring seamless user experience.",
//         department: 'Department of oversee websites',
//         salary: 120000
//     }
// ];


// let jobscompanies = [

//     {
//         id: 1,
//         name: 'University of Cape Town',
//         location: "Western Cape",
//         imgurl: 'https://mediaportfolio.uct.ac.za:8095/logo_downloads/api/v1/asset/564502/thumbnail'
//     },
//     {
//         id: 2,
//         name: 'University of the Western Cape',
//         location: "Western Cape",
//         imgurl: 'https://e7.pngegg.com/pngimages/575/175/png-clipart-institute-for-poverty-land-and-agrarian-studies-stellenbosch-university-university-of-the-western-cape-faculty-of-dentistry-student-student-emblem-label.png'
//     },
//     {
//         id: 3,
//         name: 'Stellenbosch University',
//         location: "Western Cape",
//         imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIkr5F9dpDHCkEywfgf63O3O-ZH_X4BuDYg&s'
//     },
//     {
//         id: 4,
//         name: 'Cape Peninsula University of Technology',
//         location: "Western Cape",
//         imgurl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSLrObjJIHqhlSQ0QXL-iS5GdjzqWy-PfidAZp48vggUzUeSYL4'
//     },
//     {
//         id: 5,
//         name: 'University of South Africa',
//         location: "Western Cape",
//         imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrZ9hExNMmJNSNTwwciAwL-L-aZnzQk8rOw&s'
//     }
// ];


app.get('/jobs', (req, res)=>{
    res.send(jobs);
});


// app.get('/companies', (req, res)=>{
//     res.send(jobscompanies);
// });

// app.get('/', (req, res)=>{
//     res.send('Hello JobiJobber. Welcome here!');
// });