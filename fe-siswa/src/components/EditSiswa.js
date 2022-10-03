import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditSiswa() {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const { id } = useParams();
  const history = useNavigate();

  const updateSiswa = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3000/siswa/${id}`, {
      nama: nama,
      kelas: kelas,
      jurusan: jurusan,
      noTelp: noTelp,
    });
    history("/");
  };

  useEffect(() => {
    getSiswaById();
  }, []);

  const getSiswaById = async () => {
    const response = await axios.get(`http://localhost:3000/siswa/${id}`);
    console.log(response.data);
    setNama(response.data.data.nama);
    setKelas(response.data.data.kelas);
    setJurusan(response.data.data.jurusan);
    setNoTelp(response.data.data.noTelp);
  };

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-between'>
        <h1>Form Edit Data Siswa</h1>
        <Link to='/' className='btn btn-danger my-auto'>
          Kembali
        </Link>
      </div>
      <Form className='mt-3' onSubmit={updateSiswa}>
        <Form.Group className='mb-3' controlId='formBasicNama'>
          <Form.Label>Nama Siswa</Form.Label>
          <Form.Control type='text' placeholder='Nama' value={nama} onChange={(e) => setNama(e.target.value)} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicKelas'>
          <Form.Label>Kelas Siswa</Form.Label>
          <Form.Control type='text' placeholder='Kelas' value={kelas} onChange={(e) => setKelas(e.target.value)} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicJurusan'>
          <Form.Label>Jurusan Siswa</Form.Label>
          <Form.Control
            type='text'
            placeholder='Jurusan'
            value={jurusan}
            onChange={(e) => setJurusan(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicNoTelpon'>
          <Form.Label>Nomor Telpon Siswa</Form.Label>
          <Form.Control
            type='text'
            placeholder='Nomor Telpon'
            value={noTelp}
            onChange={(e) => setNoTelp(e.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}
