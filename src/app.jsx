import SectionItem from "./components/section_item";

export default function App() {
  return (
    <>
      <h1>Odin CV Application</h1>
      <section>
        <h3 className="section-title">General information</h3>
        <SectionItem id="input-name" label="name" hint="full name" />
        <SectionItem id="input-email" label="email" hint="example@gmail.com" />
        <SectionItem id="input-phone" label="phone" hint="+20 123 456 789 " />
      </section>

      <section>
        <h3 className="section-title">Educational experience</h3>
        <SectionItem
          id="school-name"
          label="School name"
          hint="school of ...."
        />
        <SectionItem
          id="study-title"
          label="Study title"
          hint="Computer Science"
        />
        <SectionItem id="study-date" label="Study date" hint="11/11/2011" />
      </section>

      <section>
        <h3 className="section-title">Practical experience</h3>
        <SectionItem
          id="company-name"
          label="Company name"
          hint="example.inc"
        />
        <SectionItem id="position-title" label="Position title" hint="CEO" />
        <SectionItem
          id="main-responsibilities"
          label="Main responsibilities"
          hint="........."
        />

        <SectionItem id="date-from" label="From" hint="11/11/2011" />
        <SectionItem id="date-to" label="To" hint="12/12/2012" />
      </section>

      <button>Edit</button>
      <button>Submit</button>
    </>
  );
}
