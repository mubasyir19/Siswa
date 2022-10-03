const express = require("express");
const router = express.Router();
const { listSiswa, getSiswa, addSiswa, updateSiswa, deleteSiswa } = require("./controller");

router.get("/", listSiswa);
router.get("/:id", getSiswa);
router.post("/add", addSiswa);
router.patch("/:id", updateSiswa);
router.delete("/:id", deleteSiswa);

module.exports = router;
