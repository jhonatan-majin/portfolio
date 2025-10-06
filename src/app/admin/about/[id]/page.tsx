"use client";
import React, { useState, useEffect, FC } from "react";
import { useParams } from 'next/navigation';
import { useForm } from "react-hook-form"

import { IAbout } from "../../../interfaces";
import AdminNavbar from "../../../components/admin/AdminNavbar";


const About = () => {
  const [data, setData] = useState(null)
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [skill0, setSkill0] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [skill4, setSkill4] = useState("");
  const [skill5, setSkill5] = useState("");
  const [education0, setEducation0] = useState("");
  const [education1, setEducation1] = useState("");
  const [education2, setEducation2] = useState("");
  const [certification0, setCertification0] = useState("");
  const [certification1, setCertification1] = useState("");
  const [certification2, setCertification2] = useState("");
  const [description, setDescription] = useState("");

  const params = useParams();
  const { id } = params;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image,
          title,
          skill0,
          skill1,
          skill2,
          skill3,
          skill4,
          skill5,
          education0,
          education1,
          education2,
          certification0,
          certification1,
          certification2,
          description
        }),
      };

      await fetch(`/api/admin/about/${id}`, requestOptions)
      alert("Acerca de se actualizo correctamente.");
      setTitle("");
      setSkill0("");
      setSkill1("");
      setSkill2("");
      setSkill3("");
      setSkill4("");
      setSkill5("");
      setEducation0("");
      setEducation1("");
      setEducation2("");
      setCertification0("");
      setCertification1("");
      setCertification2("");
      setDescription("");
      window.location.replace("/admin/abouts");
    } catch (error) {
      console.log(error);
      // setIsSaving(false);
      console.log(data)
    }
  }



  return (
    <>
      <AdminNavbar />
      <section
        id="contact"
        className="grid md:grid-cols-1  mx-6 md:my-3 py-12 gap-2 relative"
      >
        <div><h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Update About</h2></div>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

        <div>
          <form className="flex flex-col" onSubmit={onSubmit}>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                image
              </label>
              <input
                name="title"
                type="text"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Title
              </label>
              <input
                name="title"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Skill 1
              </label>
              <input
                name="skill0"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setSkill0(e.target.value)}
                value={skill0}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Skill 2
              </label>
              <input
                name="skill1"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setSkill1(e.target.value)}
                value={skill1}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Skill 3
              </label>
              <input
                name="skill2"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setSkill2(e.target.value)}
                value={skill2}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Skill 4
              </label>
              <input
                name="skill3"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setSkill3(e.target.value)}
                value={skill3}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Skill 5
              </label>
              <input
                name="skill4"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setSkill4(e.target.value)}
                value={skill4}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Skill 6
              </label>
              <input
                name="skill5"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setSkill5(e.target.value)}
                value={skill5}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Education 1
              </label>
              <input
                name="education0"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setEducation0(e.target.value)}
                value={education0}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Education 2
              </label>
              <input
                name="education1"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setEducation1(e.target.value)}
                value={education1}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Education 3
              </label>
              <input
                name="education2"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setEducation2(e.target.value)}
                value={education2}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Certification 1
              </label>
              <input
                name="certification0"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setCertification0(e.target.value)}
                value={certification0}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Certification 2
              </label>
              <input
                name="certification1"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setCertification1(e.target.value)}
                value={certification1}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Certification 3
              </label>
              <input
                name="certification2"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setCertification2(e.target.value)}
                value={certification2}
              />
            </div>
            <div className="mb-6">
              <label
                // htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Description
              </label>
              <textarea
                name="description"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>

            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Save
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default About;
