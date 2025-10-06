"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
// import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";
// import   AdminNavbar   from "../components/admin/AdminNavbar";

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  //   const filteredProjects = projectsData.filter((project) =>
  //     project.tag.includes(tag)
  //   );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    fetch('/api/admin/project')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(`data...`, data)
        setLoading(false)
      })
  }, [])

  //   if (isLoading) return <p>Loading...</p>
  //   if (!data) return <p>No profile data</p>



  return (

    <>
      {/* <AdminNavbar /> */}
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          {/* <ProjectTag
          // onClick={handleTagChange}
          name="All"
          // isSelected={tag === "All"}
        />
        <ProjectTag
          // onClick={handleTagChange}
          name="Web"
          // isSelected={tag === "Web"}
        />
        <ProjectTag
          // onClick={handleTagChange}
          name="Mobile"
          // isSelected={tag === "Mobile"}
        /> */}
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {data?.map((project, index) => (
            <motion.li
              key={project._id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project._id}
                title={project.title}
                description={project.description}
                image={project.image}
                github={project.github}
                web={project.web}
                tag2={project.tag2}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    </>

  );
};

export default ProjectsSection;
