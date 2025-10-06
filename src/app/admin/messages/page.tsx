"use client";
import React, { useState, useRef, useEffect } from "react";

import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import { Api } from "../../api";
import AdminNavbar from "../../components/admin/AdminNavbar";
import DateFormatter from '../../components/DateFormatter';

const ProjectsSection = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/admin/message')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  const onDelete = async (id: string) => {
    await Api.delete(`admin/message/${id}`);
    alert("Mensaje eliminado.");
    window.location.reload();
  };

  return (

    <>
      <AdminNavbar />
      <section className="grid md:grid-cols-1  mx-6 md:my-3 py-12 gap-2 relative">

        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">List Messages</h2>
        {data?.map((r) => (
          <div className="bg-[#181818]  relative my-3 mx-3 py-3 px-3">
            <div className="grid grid-cols-6 sm:grid-cols-12">
              <div className="col-span-12 sm:text-left justify-self-start">
                <h3 className="text-white py-2" key={r._id}><span className="font-bold">PUBLISHED ON: </span><DateFormatter dateString={r.createdAt} /></h3>
                <h3 className="text-white py-2" key={r._id}><span className="font-bold">ID:</span>{` ${r._id}`}</h3>
                <h3 className="text-white py-2" key={r._id}><span className="font-bold">Email:</span>{` ${r.email}`}</h3>
                <h3 className="text-white py-2" key={r._id}><span className="font-bold">Subject:</span>{` ${r.subject}`}</h3>
                <h3 className="text-white py-2" key={r._id}><span className="font-bold">Message:</span>{` ${r.message}`}</h3>

              </div>


            </div>
            <div className="grid py-3">
              <Button startIcon={<DeleteIcon />} variant="contained" color="error" onClick={() => onDelete(r._id)}>Delete</Button>
            </div>

          </div>
        ))}

      </section>
    </>
  );
};

export default ProjectsSection;
