"use client";
import React, { useState, FC } from "react";
import axios from "axios";

import AdminNavbar from "../../components/admin/AdminNavbar";


const Project = () => {
  const [uploadFile, setuploadFile] = useState(null);
  const [uploadFileLoading, setuploadFileLoading] = useState(false);
  const [fileLink, setfileLink] = useState("");
  const [file, setFile] = useState("")
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [github, setGithub] = useState("")
  const [web, setWeb] = useState("")
  const [description, setDescription] = useState("")
  const [tag1, setTag1] = useState("")
  const [tag2, setTag2] = useState("")



  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      setuploadFile(file);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!uploadFile) {
      alert("File is required");
      return;
    }

    let fileUrl = "";

    setuploadFileLoading(true);

    const formData = new FormData();
    formData.append("file", uploadFile);
    const folderName = "cloudinary-tutorial";
    formData.append("folderName", folderName);

    const { data: resData } = await axios.post("/api/admin/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // handle cloudinary error
    if (resData.error) {
      alert("Error uploading file");
      setuploadFileLoading(false);
      return;
    }

    // cloudinary success
    fileUrl = resData.res.secure_url;
    setfileLink(fileUrl)
    setImage(fileUrl)
    console.log(fileUrl)

    setuploadFileLoading(false);
    setuploadFile(null);
    alert("Imagen en Cloudinary.");

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        image: fileUrl,
        title,
        github,
        web,
        description,
        tag1,
        tag2,
      }),
    };

    const response = await fetch(`/api/admin/project/`, requestOptions)
    // const result = await response.json();
    alert("El proyecto se agrego correctamente")
    setImage("");
    setTitle("");
    setGithub("");
    setWeb("");
    setTag1("");
    setTag2("");
    setDescription("");
    window.location.replace("/admin/projects")
    return;
  }

  return (
    <>
      <AdminNavbar />
      <section
        id="contact"
        className="grid md:grid-cols-1  mx-6 md:my-3 py-12 gap-2 relative"
      >
        <div><h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Create Project</h2></div>
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
                type="file"
                id="file-input"
                onChange={handleFileChange}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
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
              // onClick={notify}
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
