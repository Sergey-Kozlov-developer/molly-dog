import { createSlice } from "@reduxjs/toolkit";
// инициализация, как в useState(0) то, что в скобках
// другими словами начальное состояние
const initialState = {
  categoryId: 0,
};

// создаем слайс
const filterSlice = createSlice({
  name: "filter", // название слайса
  initialState,
  // создаем action, отвечающий за действия. сохранение категорий и сортировку
  // функции как в [categoryId, setCategoryId] = useState(0)
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;
