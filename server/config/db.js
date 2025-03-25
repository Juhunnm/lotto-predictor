import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config(); // .env 파일에서 환경변수 로드

// MySQL 연결 설정
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_NAME,
});

// MySQL 연결 확인
db.connect((err) => {
  if (err) {
    console.error("❌ MySQL 연결 실패:", err);
    return;
  }
  console.log("✅ MySQL 연결 성공!");
});

export default db;
