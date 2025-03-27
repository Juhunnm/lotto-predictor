import { deleteLottoNumber, getLottoNumbers, insertLottNumber } from "../models/LottoModel.js";
//비즈니스 로직 담당

export const getLotto = (req, res) => {
  getLottoNumbers((err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
};


export const saveLotto = (req, res) => {
  const { numbers, bonus } = req.body;
  if (!numbers || bonus === undefined) {
    return res.status(400).json({ error: "번호와 보너스 번호를 입력하세요." });
  }

  insertLottNumber(numbers, bonus, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "번호 저장 완료!", id: result.insertId });
  });
};

export const removeLotto = (req, res) => {
  const {id} = req.params;
  deleteLottoNumber(id,(err)=>{
    if(err) return res.status(500).json({err:"삭제 실패"});
    res.json({message : "로또 번호 삭제 성공"});
  })
}