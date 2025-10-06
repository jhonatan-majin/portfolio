"use client";
import React, { useState, useRef, useEffect } from "react";
import NextLink from "next/link";
import { Api } from "../../api";

// material ui
import { AddOutlined, CategoryOutlined } from "@mui/icons-material";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
// material icon
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AdminNavbar from "../../components/admin/AdminNavbar";

const AboutsSection = () => {

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/about')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (!data) return <></>;

  const rows = data?.map((a) => ({
    id: a._id,
    image: a.image,
    title: a.title,
    description: a.description,

  }));

  const onDelete = async (id) => {
    await Api.delete(`admin/about/${id}`);
    alert("producto eliminado.");
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
          <a href={`/admin/about/${row.id}`} target="_blank" rel="noreferrer">
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
      field: "title",
      headerName: "Title",
      width: 100,
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
      field: "editar",
      headerName: "Editar",
      width: 100,
      renderCell: ({ row }) => {
        return (
          <NextLink href={`about/${row.id}`}>
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

export default AboutsSection;
