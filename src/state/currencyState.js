import create from "zustand";

const useCurrencyState = create((set) => ({
  currencyDetail: { id: 1, currency: "$" },
  setCurrencyDetail: (payload) => set((state) => ({ currencyDetail: payload })),
}));

export default useCurrencyState;
