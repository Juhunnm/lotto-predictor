import express from "express";
import { getLotto, saveLotto, removeLotto } from "../controllers/lottoController.js";
//라이언트 요청을 처리할 API 엔드포인트 정의
const router = express.Router();

//저장된 로또 번호 가져오기 (GET)
router.get("/lotto", getLotto);

//로또 번호 저장하기 (POST)
router.post("/lotto", saveLotto);

//로또 번호 삭제하기 (DELETE);
router.delete("/lotto/:id", removeLotto)

export default router;
