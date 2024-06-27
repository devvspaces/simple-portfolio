import img0 from "../../assets/projects-img/default.jpg";
import img1 from "../../assets/projects-img/tropical.png";
import img3 from "../../assets/projects-img/deeplegal.png";
import img4 from "../../assets/projects-img/aimienpay.png";
import img5 from "../../assets/projects-img/cyta.png";
import img6 from "../../assets/projects-img/newgen.png";
import img7 from "../../assets/projects-img/signia.png";

export const data = [
  {
    title: "Real Time Weather App",
    description:
      "This is a web and mobile application built with React and Kotlin. The API service is built with FastAPI. I lead a backend team of 8 developers.",
    github: "https://github.com/workshopapps/tropicalweather.web",
    image: img1,
    visit: "https://tropicalweather.app/",
  },
  {
    title: "Deep Legal",
    description:
      "Turbo search engine for United States Laws. This project is mainly built with Django. Full text search and Indexing is powered with PostgreSQL. Smart response is enabled via a trained GPT3 model.",
    github: "https://github.com/SingularityUS",
    image: img3,
    visit: "https://www.deeplegal.org/",
  },
  {
    title: "Aimienpay",
    description:
      "It can be used to manage business payroll. I developed the interface connecting it to Providus Bank, Deployed it on a VPS, setup CI/CD pipelines for other developers, and setup a Virtual Private Network inteface on Linux for secured connection with Providus.",
    github: "https://github.com/spacepen-dev/",
    image: img4,
    visit: "https://aimienpay.com/",
  },
  {
    title: "Faculty of Agriculture",
    description:
      "This is a university web application that keeps track of students, lecturers, and courses. A permission based system is built-in. This is built with Django.",
    image: img5,
    github: "https://github.com/devvspaces/faculty",
  },
  {
    title: "Pix Ecoe",
    description:
      "This is a web and mobile application built for a medical university in Spain for conducting exams on a rotation basis. It is fault tolerant and can be used offline. It is built with React Native and Django.",
    image: img0,
    visit: "https://demo.pixecoe.com/",
  },
  {
    title: "NewGenCare",
    description:
      "Built this website, design and implementation of the backend, for a housing and health support agency in the UK. It has a blog platform built-in. It is built with Django.",
    image: img6,
    visit: "https://newgencaregroup.com/",
  },
  {
    title: "AWS VPC Provisioner",
    description:
      "This application was built using Django, Terraform, and ReactJs. It using terraform cli to provision AWS VPCs using inputs provided by the user on the GUI.",
    image: img0,
    github: "https://github.com/devvspaces/aws-vpc-provisioner",
  },
  {
    title: "Signia Homes NG",
    description:
      "Real estate website that allows user to view apartments and book directly from the website. It is built with Django.",
    image: img7,
    visit: "https://signiahomesng.com/",
  },
];
