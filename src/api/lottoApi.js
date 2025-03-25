import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

// 📌 저장된 로또 번호 가져오기
export const fetchLottoNumbers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/lotto`);
    return response.data;
  } catch (error) {
    console.error("로또 번호 가져오기 실패:", error);
    return [];
  }
};

// 📌 로또 번호 저장하기
export const saveLottoNumbers = async (numbers, bonus) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/lotto`, { numbers, bonus });
    return response.data;
  } catch (error) {
    console.error("로또 번호 저장 실패:", error);
    return null;
  }
};
