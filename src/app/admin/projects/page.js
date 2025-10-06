"use client";
import React, { useState, useRef, useEffect } from "react";
import NextLink from "next/link";
import ProjectCard from "../../components/ProjectCard";
import ProjectTag from "../../components/ProjectTag";
import { motion, useInView } from "framer-motion";
import { IProject } from "../../interfaces";
import { Api } from "../../api";

// material ui
import { AddOutlined, CategoryOutlined } from "@mui/icons-material";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// material icon
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AdminNavbar from "../../components/admin/AdminNavbar";




const ProjectsSection = () => {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/project')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (!data) return <></>;

  const rows = data?.map((product) => ({
    id: product._id,
    image: product.image,
    title: product.title,
    github: product.github,
    web: product.web,
    description: product.description,
    tag1: product.tag1,
    tag2: product.tag2
  }));

  const onDelete = async (id) => {
    await Api.delete(`admin/project/${id}`);
    alert("proyecto eliminado.");
    window.location.reload();
  };


  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 75,
      renderCell: ({ row }) => {
        return <Typography>{`${row.id.substring(0, 7)}...`}</Typography>;
      },
    },
    {
      field: "image",
      headerName: "Image",
      renderCell: ({ row }) => {
        return (
          <a href={`/admin/project/${row.id}`} target="_blank" rel="noreferrer">
            <CardMedia
              component="img"
              alt={row.title}
              className="fadeIn"
              image={row.image}
            />
            {row.image}
          </a>
        );
      },
    },

    //   {
    //   field: "image",
    //   headerName: "Image",
    //   width: 250,
    //   renderCell: ({ row }: GridValueGetterParams) => {
    //     return <Typography>{row.image}</Typography>;
    //   },
    // },
    {
      field: "title",
      headerName: "Title",
      width: 250,
      renderCell: ({ row }) => {
        return <Typography>{row.title}</Typography>;
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 250,
      renderCell: ({ row }) => {
        return <Typography>{row.description}</Typography>;
      },
    },
    {
      field: "tag1",
      headerName: "Tag 1",
      width: 75,
      renderCell: ({ row }) => {
        return <Typography>{row.tag1}</Typography>;
      },
    },
    {
      field: "tag2",
      headerName: "Tag 2",
      width: 75,
      renderCell: ({ row }) => {
        return <Typography>{row.tag2}</Typography>;
      },
    },
    {
      field: "editar",
      headerName: "Editar",
      width: 100,
      renderCell: ({ row }) => {
        return (
          <NextLink href={`project/${row.id}`}>
            <Button color="warning">
              <ModeEditOutlineOutlinedIcon />
            </Button>
          </NextLink>
        );
      },
    },
    {
      field: "eliminar",
      headerName: "Eliminar",
      width: 100,
      renderCell: ({ row }) => {
        return (
          <Button onClick={() => onDelete(row.id)} color="error">
            <DeleteOutlineOutlinedIcon />
          </Button>
        );
      },
    },


  ];
  return (
    <div>
      <AdminNavbar />
      <Grid container className="fadeIn">
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectsSection;
