import db from "../config/db.js";

// 📌 저장된 모든 로또 번호 가져오기
export const getAllLottoNumbers = (callback) => {
  db.query("SELECT * FROM lotto_numbers", (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// 📌 새로운 로또 번호 저장하기
export const saveLottoNumber = (numbers, bonus, callback) => {
  db.query(
    "INSERT INTO lotto_numbers (numbers, bonus) VALUES (?, ?)",
    [JSON.stringify(numbers), bonus],
    (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    }
  );
};
