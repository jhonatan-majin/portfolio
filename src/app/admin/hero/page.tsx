"use client";
import React, { useState, FC } from "react";
import axios from "axios";
import AdminNavbar from "../../components/admin/AdminNavbar";

const Project = () => {
    const [uploadFile, setuploadFile] = useState(null);
    const [title0, setTitle0] = useState("")
    const [title1, setTitle1] = useState("")
    const [title2, setTitle2] = useState("")
    const [cv, setCv] = useState("")
    const [description, setDescription] = useState("")

    function handleFileChange(e: any) {
        const file = e.target.files?.[0];
        if (file) {
            setuploadFile(file);
        }
    }

    async function onSubmit(e: any) {
        e.preventDefault();
        if (!uploadFile) {
            alert("File is required");
            return;
        }

        let fileUrl = "";

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
            return;
        }

        // cloudinary success
        fileUrl = resData.res.secure_url;
        setuploadFile(null);
        alert("Imagen en Cloudinary.");

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                image: fileUrl,
                title0,
                title1,
                title2,
                cv,
                description,
            }),
        };

        const response = await fetch(`/api/admin/hero/`, requestOptions)
        alert("El Hero se agrego correctamente")
        setTitle0("");
        setTitle1("");
        setTitle2("");
        setCv("");
        setDescription("");
        window.location.replace("/admin/heros");
        return;
    }

    return (
        <>
            <AdminNavbar />
            <section
                id="contact"
                className="grid md:grid-cols-1  mx-6 md:my-3 py-12 gap-2 relative"
            >
                <div><h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Create Hero</h2></div>
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
                                Title 1
                            </label>
                            <input
                                name="title"
                                type="text"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                onChange={(e) => setTitle0(e.target.value)}
                                value={title0}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                // htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Title 2
                            </label>
                            <input
                                name="title"
                                type="text"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                onChange={(e) => setTitle1(e.target.value)}
                                value={title1}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                // htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Title 3
                            </label>
                            <input
                                name="title"
                                type="text"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                onChange={(e) => setTitle2(e.target.value)}
                                value={title2}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                // htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                CV
                            </label>
                            <input
                                name="cv"
                                type="text"
                                required
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                onChange={(e) => setCv(e.target.value)}
                                value={cv}
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
