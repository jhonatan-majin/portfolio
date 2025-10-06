"use client";
import React, { useState, useEffect, FC } from "react";
import { useParams } from 'next/navigation';

// import { useRouter } from "next/router";
import AdminNavbar from "../../../components/admin/AdminNavbar";



const Project = () => {

  const [data, setData] = useState(null)
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [github, setGithub] = useState("");
  const [web, setWeb] = useState("");
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
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
          github,
          web,
          tag1,
          tag2,
          description
        }),
      };

      await fetch(`/api/admin/project/${id}`, requestOptions)
      alert("Proyecto se actualizo correctamente.");
      setImage("");
      setTitle("");
      setGithub("");
      setWeb("");
      setTag1("");
      setTag2("");
      setDescription("");
      window.location.replace("/admin/projects")
    } catch (error) {
      console.log(error);
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
        <div><h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Update Project</h2></div>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

        <div>
          <form className="flex flex-col" onSubmit={onSubmit}>
            <div className="mb-6">
              <label
                className="text-white block mb-2 text-sm font-medium"
              >
                Image
              </label>
              <input
                name="image"
                type="text"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </div>
            <div className="mb-6">
              <label
                // htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
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
                className="text-white block text-sm mb-2 font-medium"
              >
                Github
              </label>
              <input
                name="github"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setGithub(e.target.value)}
                value={github}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block text-sm mb-2 font-medium"
              >
                Web
              </label>
              <input
                name="web"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setWeb(e.target.value)}
                value={web}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block text-sm mb-2 font-medium"
              >
                Tag 1
              </label>
              <input
                name="tag1"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setTag1(e.target.value)}
                value={tag1}
              />
            </div>
            <div className="mb-6">
              <label
                className="text-white block text-sm mb-2 font-medium"
              >
                Tag 2
              </label>
              <input
                name="tag2"
                type="text"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => setTag2(e.target.value)}
                value={tag2}
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

export default Project;
