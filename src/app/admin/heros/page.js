"use client";
import React, { useState, useRef, useEffect } from "react";
import NextLink from "next/link";
import { Api } from "../../api";

// material ui
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
// material icon
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AdminNavbar from "../../components/admin/AdminNavbar";




const ProjectsSection = () => {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/hero')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (!data) return <></>;

  const rows = data?.map((hero) => ({
    id: hero._id,
    image: hero.image,
    title0: hero.title0,
    title1: hero.title1,
    title2: hero.title2,
    description: hero.description,

  }));

  const onDelete = async (id) => {
    await Api.delete(`admin/hero/${id}`);
    alert("Hero eliminado.");
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
          <a href={`/admin/hero/${row.id}`} target="_blank" rel="noreferrer">
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
    {
      field: "title0",
      headerName: "Title 1",
      width: 150,
      renderCell: ({ row }) => {
        return <Typography>{row.title0}</Typography>;
      },
    },
    {
      field: "title1",
      headerName: "Title 2",
      width: 150,
      renderCell: ({ row }) => {
        return <Typography>{row.title1}</Typography>;
      },
    },
    {
      field: "title2",
      headerName: "Title 3",
      width: 150,
      renderCell: ({ row }) => {
        return <Typography>{row.title2}</Typography>;
      },
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
      renderCell: ({ row }) => {
        return <Typography>{row.description}</Typography>;
      },
    },
    {
      field: "editar",
      headerName: "Editar",
      width: 100,
      renderCell: ({ row }) => {
        return (
          <NextLink href={`hero/${row.id}`}>
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
