import { getAllLottoNumbers, saveLottoNumber } from "../models/LottoModel.js";

export const getLottoNumbers = (req, res) => {
  getAllLottoNumbers((err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
};

export const saveLottoNumbers = (req, res) => {
  const { numbers, bonus } = req.body;
  if (!numbers || bonus === undefined) {
    return res.status(400).json({ error: "번호와 보너스 번호를 입력하세요." });
  }

  saveLottoNumber(numbers, bonus, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "번호 저장 완료!", id: result.insertId });
  });
};
