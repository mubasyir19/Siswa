import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ListSiswa() {
  const [siswa, setSiswa] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getSiswa();
  }, []);

  const getSiswa = async () => {
    const response = await axios.get("http://localhost:3000/siswa/");
    console.log(response.data.data);
    setSiswa(response.data.data);
  };

  const deleteSiswa = async () => {
    await axios.delete(`http://localhost:3000/siswa/${id}`);
    getSiswa();
  };

  return (
    <div className='container mt-5'>
      {/* <Button href='#' variant='outline-success' className='float-start mb-3'>
        Add New
      </Button> */}
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
              <td>
                <Link to={`/edit/${sw.id}`} className='btn btn-primary me-2 btn-sm'>
                  Edit
                </Link>
                <Button variant='danger' size='sm' onClick={() => deleteSiswa(sw.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          {/* <tr>
            <td>1</td>
            <td>Joe</td>
            <td>11 IPA 3</td>
            <td>IPA</td>
            <td>087123456789</td>
            <td>
              <Link to='/edit' className='btn btn-primary me-2 btn-sm'>
                Edit
              </Link>
              <Button variant='danger' size='sm'>
                Delete
              </Button>
            </td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
}
