import React, { useState } from 'react';
import { FaAngleDoubleUp, FaPlusSquare } from 'react-icons/fa';

const SkillSection = ({ title, skills, isVisible, toggleVisibility }) => (
  <div>
    <div
      className="flex items-center justify-between mt-4 pr-32 cursor-pointer"
      onClick={toggleVisibility}
      role="button"
      tabIndex={0} // Makes the div focusable
      onKeyDown={(e) => (e.key === 'Enter' ? toggleVisibility() : null)} // Allows keyboard interaction
      aria-expanded={isVisible}
      aria-controls={title.replace(/\s+/g, '-').toLowerCase()} // Unique ID for the content
      aria-label={`Toggle ${title} skills`}
    >
      <h1 className="font-bold text-3xl font-montserrat">{title}</h1>
      <FaAngleDoubleUp className="text-2xl" />
    </div>
    {isVisible && (
      <div className="pl-10" id={title.replace(/\s+/g, '-').toLowerCase()}>
        {skills.map(({ skill, percentage }) => (
          <div className="mt-3" key={skill}>
            <h2 className="font-normal text-lg font-merriweather">
              {skill}: <span aria-hidden="true">{percentage}%</span>
            </h2>
            <div className="h-2 bg-gray-200 rounded">
              <div
                className="h-full bg-blue-600 rounded transition-all duration-300"
                style={{ width: `${percentage}%` }}
                aria-label={`${skill} proficiency`}
              />
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

const MySkills = () => {
  // Set the frontEnd section to be always visible
  const [visibleSections, setVisibleSections] = useState({
    frontEnd: true, // Make Front End section always open
    backEnd: true,
    design: true,
    Others: true,
    General: true
  });

  const sections = [
    {
      title: 'Front End',
      skills: [
        { skill: 'HTML', percentage: 100 },
        { skill: 'CSS', percentage: 100 },
        { skill: 'JavaScript', percentage: 95 },
        { skill: 'Vue.js', percentage: 90 },
        { skill: 'React.js', percentage: 90 },
        { skill: 'Tailwind CSS', percentage: 100 },
      ],
      key: 'frontEnd',
    },
    {
      title: 'Back End',
      skills: [
        { skill: 'Node.js', percentage: 90 },
        { skill: 'Express.js', percentage: 85 },
        { skill: 'MongoDB', percentage: 80 },
      ],
      key: 'backEnd',
    },
    {
      title: 'Design',
      skills: [
        { skill: 'Figma', percentage: 45 },
        { skill: 'Adobe XD', percentage: 10 },
      ],
      key: 'design',
    },
    {
      title: 'Others',
      skills: [
        { skill: 'C', percentage: 30 },
        { skill: 'C++', percentage: 30 },
        { skill: 'Python', percentage: 45 }
      ],
      key: 'Others',
    },
    {
      title: 'General',
      skills: [
        { skill: 'Web Development', percentage: 90 },
        { skill: 'Web Design', percentage: 35 }
      ],
      key: 'General',
    }
  ];

  const toggleVisibility = (key) => {
    setVisibleSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-image3 bg-cover bg-center bg-fixed text-white p-5 bg-blend-multiply bg-blue-950">
      <div>
        <h2 className="text-center font-bold underline py-10 text-2xl font-montserrat">My Skills And Experience</h2>
        <p className="text-lg font-normal font-lato">
          I am highly experienced in web development, with a strong understanding of languages used in front-end...
        </p>
      </div>
      <div className="my-5 font-roboto">
        <h2 className='font-merriweather'>Below estimations illustrate my skills in different fields in the industry</h2>
        <div>
          {sections.map(({ title, skills, key }) => (
            <SkillSection
              key={key}
              title={title}
              skills={skills}
              isVisible={visibleSections[key]}
              toggleVisibility={() => toggleVisibility(key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
