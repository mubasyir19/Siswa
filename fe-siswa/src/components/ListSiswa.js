import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ListSiswa() {
  const [siswa, setSiswa] = useState([]);

  useEffect(() => {
    getSiswa();
  }, []);

  const getSiswa = async () => {
    const response = await axios.get("http://localhost:3000/siswa");
    console.log(response.data.data);
    setSiswa(response.data.data);
  };

  const deleteSiswa = async (id) => {
    await axios.delete(`http://localhost:3000/siswa/${id}`);
    getSiswa();
  };

  return (
    <div className='container mt-5'>
      <Link className='btn btn-outline-success float-start mb-3 outline-success' to='/add'>
        Add New
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Jurusan</th>
            <th>No Telepon</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {siswa.map((sw, index) => (
            <tr key={sw.id}>
              <td>{index + 1}</td>
              <td>{sw.nama}</td>
              <td>{sw.kelas}</td>
              <td>{sw.jurusan}</td>
              <td>{sw.noTelp}</td>
              <td>{sw.createdAt}</td>
              <td>{sw.updatedAt}</td>
              <td>
                <Link to={`/edit/${sw.id}`} className='btn btn-primary me-2 btn-sm'>
                  Edit
                </Link>
                <Button onClick={() => deleteSiswa(sw.id)} variant='danger' size='sm'>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
