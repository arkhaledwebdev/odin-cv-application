import SectionItem from "./components/section_item";
import "./app.css";
import { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

export default function App() {
  const [data, setData] = useState({
    name: "",
    jobTitle: "",
    email: "",
    phone: "",
    school: "",
    studyTitle: "",
    studyDate: "",
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  });

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <h1>Odin CV Application</h1>
      <div className="page-container">
        <div className="page">
          <section>
            <h3 className="section-title">General information</h3>
            <SectionItem
              id="name"
              label="Name"
              hint="full name"
              value={data.name}
              onChange={handleChange}
            />
            <SectionItem
              id="jobTitle"
              label="Job Title"
              hint="Web developer"
              value={data.jobTitle}
              onChange={handleChange}
            />
            <SectionItem
              id="email"
              label="E-mail"
              hint="example@gmail.com"
              value={data.email}
              onChange={handleChange}
            />
            <SectionItem
              id="phone"
              label="Phone number"
              hint="+20 123 456 789 "
              value={data.phone}
              onChange={handleChange}
            />
          </section>

          <section>
            <h3 className="section-title">Educational experience</h3>
            <SectionItem
              id="school"
              label="School name"
              hint="school of ...."
              value={data.school}
              onChange={handleChange}
            />
            <SectionItem
              id="studyTitle"
              label="Study title"
              hint="Computer Science"
              value={data.studyTitle}
              onChange={handleChange}
            />
            <SectionItem
              id="studyDate"
              label="Study date"
              hint="11/11/2011"
              value={data.studyDate}
              onChange={handleChange}
            />
          </section>

          <section>
            <h3 className="section-title">Practical experience</h3>
            <SectionItem
              id="company"
              label="Company name"
              hint="example.inc"
              value={data.company}
              onChange={handleChange}
            />
            <SectionItem
              id="position"
              label="Position title"
              hint="Specialist"
              value={data.position}
              onChange={handleChange}
            />
            <SectionItem
              id="responsibilities"
              label="Main responsibilities"
              hint="responsible for ...."
              value={data.responsibilities}
              onChange={handleChange}
            />

            <SectionItem
              id="dateFrom"
              label="From"
              hint="11/11/2011"
              value={data.dateFrom}
              onChange={handleChange}
            />
            <SectionItem
              id="dateTo"
              label="To"
              hint="12/12/2012"
              value={data.dateTo}
              onChange={handleChange}
            />
          </section>
        </div>

        <div className="page cv-page">
          <h1>{data.name}</h1>
          <hr className="separator" />
          <div>{data.jobTitle}</div>
          <div className="data-item">
            <EnvelopeIcon className="icon" />
            <div>{data.email}</div>
          </div>
          <div className="data-item">
            <PhoneIcon className="icon" />
            <div>{data.phone}</div>
          </div>
          <hr className="separator" />
          <div className="data-item title">
            <AcademicCapIcon className="iconLarge" />
            <h2>Educational experience</h2>
          </div>
          <h3>{data.school}</h3>
          <div>{data.studyTitle}</div>
          <div>{data.studyDate}</div>
          <hr className="separator" />
          <div className="data-item title">
            <BriefcaseIcon className="iconLarge" />
            <h2>Practical experience</h2>
          </div>
          <h3>{data.company}</h3>
          <div>{data.position}</div>
          <div>{data.responsibilities}</div>
          <div className="data-item">
            <div>{data.dateFrom}</div>
            <div>{data.dateTo}</div>
          </div>
        </div>
      </div>
    </>
  );
}
