import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import lottoRoutes from "./routes/lottoRoutes.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// 미들웨어 설정
app.use(cors()); // CORS 문제 해결
app.use(express.json()); // JSON 데이터 사용 가능

// 라우트 설정
app.use("/api", lottoRoutes);

// 서버 실행
app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
