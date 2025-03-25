import express from "express";
import { getLottoNumbers, saveLottoNumbers } from "../controllers/lottoController.js";

const router = express.Router();

// 📌 저장된 로또 번호 가져오기 (GET)
router.get("/lotto", getLottoNumbers);

// 📌 로또 번호 저장하기 (POST)
router.post("/lotto", saveLottoNumbers);

export default router;
