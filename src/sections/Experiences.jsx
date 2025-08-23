import Timeline from "../components/Timeline";
import { experiences, education } from "../constants";

const Experiences = () => {
  // Convert education into Timeline format
  const educationData = education.map((edu) => ({
  date: edu.date,
  title: edu.title,
  job: edu.company_name,   // shown first
  contents: edu.points,    // shown below job
}));

const experienceData = experiences.map((exp) => ({
  date: exp.date,
  title: exp.title,
  job: exp.company,        // shown first
  contents: exp.points,    // shown below job
}));

  return (
    <div className="w-full space-y-12">
      {/* Education Section */}
      <Timeline title="Education" data={educationData} />

      {/* Experience Section */}
      <Timeline title="Experience" data={experienceData} />
    </div>
  );
};

export default Experiences;
