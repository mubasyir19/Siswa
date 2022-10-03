const { Siswa } = require("../../db/models");

module.exports = {
  listSiswa: async (req, res, next) => {
    try {
      const siswa = await Siswa.findAll();

      res.json({
        message: "Success get All Siswa",
        data: siswa,
      });
    } catch (error) {
      next(error);
    }
  },
  getSiswa: async (req, res, next) => {
    try {
      const { id } = req.params;

      const siswa = await Siswa.findOne({
        where: { id: id },
      });

      res.json({
        message: "Success get one Siswa",
        data: siswa,
      });
    } catch (error) {
      next(error);
    }
  },
  addSiswa: async (req, res, next) => {
    try {
      const { nama, kelas, jurusan, noTelp } = req.body;
      const siswa = await Siswa.create({ nama, kelas, jurusan, noTelp });

      res.json({
        message: "Success add siswa",
        data: siswa,
      });
    } catch (error) {
      next(error);
    }
  },
  updateSiswa: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { nama, kelas, jurusan, noTelp } = req.body;

      const checkSiswa = await Siswa.findOne({ where: { id } });

      const siswa = await checkSiswa.update({ nama, kelas, jurusan, noTelp });

      res.json({
        message: "Success update data Siswa",
        data: siswa,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteSiswa: async (req, res, next) => {
    try {
      const { id } = req.params;

      const checkSiswa = await Siswa.findOne({ where: { id } });

      const siswa = await checkSiswa.destroy();

      res.json({
        message: "Success delete Siswa",
        data: siswa,
      });
    } catch (error) {
      next(error);
    }
  },
};
