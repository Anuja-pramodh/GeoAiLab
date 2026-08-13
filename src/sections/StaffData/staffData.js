// src/sections/StaffData/staffData.js

import directorImg from "../../assets/images/team/chinthaka.jpg";
import senior1Img from "../../assets/images/team/danushka.jpg";
import senior2Img from "../../assets/images/team/dayan.jpg";
import scientist1Img from "../../assets/images/giolablogo.png";
import scientist2Img from "../../assets/images/giolablogo.png";
import scientist3Img from "../../assets/images/giolablogo.png";
import scientist4Img from "../../assets/images/giolablogo.png";

export const categories = [
  "All",
  "Leadership",
  "Senior Scientists",
  "Scientists",
];

export const STAFF_MEMBERS = [
  {
    id: "chinthaka-rathnasiri",
    name: "Chinthaka Rathnasiri",
    role: "Director (Technical)",
    division: "Human Settlements Planning & Training Division",
    type: "Leadership",
    email: "chinthaka@nbro.gov.lk",
    phone: "+94 112 586 946",
    image: directorImg,
    qualifications: [
      "M.Sc. in Urban Land & Spatial Planning (ITC, Netherlands)",
      "B.Sc. (Hons) in Town & Country Planning (University of Moratuwa)",
      "Chartered Town Planner (ITP Sri Lanka)",
    ],
    bio: "Over 20 years of experience in spatial planning, hazard mitigation, and institutional leadership. Leading technical operations for human settlements planning and disaster risk reduction.",
    focusAreas: [
      "Disaster Risk Reduction",
      "Urban Resilient Infrastructure",
      "Geospatial Analytics",
    ],
  },
  {
    id: "danushka-jayathilaka",
    name: "Danushka Jayathilaka",
    role: "Senior Scientist",
    division: "GeoAI & Spatial Data Analytics",
    type: "Senior Scientists",
    email: "danushka.j@nbro.gov.lk",
    phone: "+94 112 501 834",
    image: senior1Img,
    qualifications: [
      "Ph.D. Candidate in Geoinformatics",
      "M.Sc. in GIS & Remote Sensing (University of Peradeniya)",
      "B.Sc. in Surveying Science (Sabaragamuwa University)",
    ],
    bio: "Specializing in landslide vulnerability modeling, satellite image processing, and integrating machine learning into GIS pipelines for real-time hazard assessment.",
    focusAreas: [
      "Landslide Susceptibility Mapping",
      "Remote Sensing Analysis",
      "Machine Learning in GIS",
    ],
  },
  {
    id: "dayan-munasinghe",
    name: "Dayan Munasinghe",
    role: "Senior Scientist",
    division: "Geotechnical & Landslide Research Division",
    type: "Senior Scientists",
    email: "dayan.m@nbro.gov.lk",
    phone: "+94 112 500 354",
    image: senior2Img,
    qualifications: [
      "M.Sc. in Geotechnical Engineering (University of Moratuwa)",
      "B.Sc. (Hons) in Civil Engineering",
    ],
    bio: "Focuses on slope stability analysis, early warning instrumentation, and AI-driven geotechnical modeling for mountain hazard management.",
    focusAreas: [
      "Slope Stability",
      "Early Warning Systems",
      "Geotechnical Instrumentation",
    ],
  },
  {
    id: "sandun-chathuranga",
    name: "Sandun Chathuranga",
    role: "Scientist / AI Developer",
    division: "GeoAI Research Lab",
    type: "Scientists",
    email: "sandun.c@nbro.gov.lk",
    phone: "+94 112 503 826",
    image: scientist1Img,
    qualifications: [
      "B.Sc. (Hons) in Computer Science & Artificial Intelligence",
      "Certified Deep Learning Specialist",
    ],
    bio: "Building computer vision pipelines for automated disaster detection, aerial drone mapping, and deep learning models for landslide prediction.",
    focusAreas: ["Deep Learning", "Computer Vision", "WebGIS Platforms"],
  },
  {
    id: "chathumini-samarakoon",
    name: "Chathumini Samarakoon",
    role: "Scientist / GIS Specialist",
    division: "Spatial Data Science Division",
    type: "Scientists",
    email: "chathumini.s@nbro.gov.lk",
    phone: "+94 112 503 431",
    image: scientist2Img,
    qualifications: [
      "M.Sc. in Geographic Information Systems",
      "B.Sc. in Geology (University of Peradeniya)",
    ],
    bio: "Expert in spatial database management, environmental modeling, and geospatial web app development for national hazard monitoring.",
    focusAreas: ["Spatial Analysis", "Geodatabase Architecture", "Web Mapping"],
  },
  {
    id: "shashinika-perera",
    name: "Shashinika Perera",
    role: "Scientist / Remote Sensing Specialist",
    division: "Earth Observation & GIS Unit",
    type: "Scientists",
    email: "shashinika.p@nbro.gov.lk",
    phone: "+94 112 502 611",
    image: scientist3Img,
    qualifications: [
      "B.Sc. (Hons) in Geoinformatics",
      "Diploma in Earth Observation & Satellite Data Processing",
    ],
    bio: "Focuses on radar satellite remote sensing (InSAR) for terrain deformation monitoring and landslide precursor identification.",
    focusAreas: [
      "InSAR Deformation Processing",
      "Satellite Imagery",
      "Terrain Analysis",
    ],
  },
  {
    id: "chathuranga-kumarasiri",
    name: "Chathuranga Kumarasiri",
    role: "Scientist / Software Engineer",
    division: "Software Development Unit",
    type: "Scientists",
    email: "chathuranga.k@nbro.gov.lk",
    phone: "+94 112 586 946",
    image: scientist4Img,
    qualifications: [
      "B.Sc. (Hons) in Software Engineering",
      "Full-Stack Web Development Specialist",
    ],
    bio: "Designing cloud-native architectures, API services, and interactive dashboards to deliver real-time spatial data to government agencies.",
    focusAreas: [
      "Cloud Architecture",
      "Full-Stack Web Apps",
      "Geospatial APIs",
    ],
  },
];