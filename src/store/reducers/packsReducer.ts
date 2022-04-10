import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PacksType, PackType } from 'types';

export type InitialStateType = {
  packs: PacksType;
  sort: string;
  searchPack: string;
  isMyPack: boolean;
  rerenderFlag: string[]; // for delete
  localMinRage: number;
  localMaxRage: number;
  resultMessageAddPack: string;
};

const initialState: InitialStateType = {
  packs: {
    minCardsCount: 0,
    maxCardsCount: 30,
    pageCount: 5,
    page: 1,
    cardPacks: [] as PackType[],
  } as PacksType,
  sort: '',
  searchPack: '',
  isMyPack: false,
  rerenderFlag: ['rerender'],
  localMinRage: 0,
  localMaxRage: 30,
  resultMessageAddPack: '',
};

export const slicePacks = createSlice({
  name: 'Packs',
  initialState,
  reducers: {
    setPacksAC(state, action: PayloadAction<PacksType>) {
      state.packs = action.payload;
    },
    setSortPacksAC(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setSearchPackAC(state, action: PayloadAction<string>) {
      state.searchPack = action.payload;
    },
    setCurrentPagePacksAC(state, action: PayloadAction<number>) {
      state.packs.page = action.payload;
    },
    setPageCountPacksAC(state, action: PayloadAction<number>) {
      state.packs.pageCount = action.payload;
    },
    setIsMyPackAC(state, action: PayloadAction<boolean>) {
      state.isMyPack = action.payload;
    },
    rerenderPackAC(state) {
      state.rerenderFlag = { ...state.rerenderFlag };
    },
    setMinCardsCountAC(state, action: PayloadAction<number>) {
      state.packs.minCardsCount = action.payload;
    },
    setMaxCardsCountAC(state, action: PayloadAction<number>) {
      state.packs.maxCardsCount = action.payload;
    },
    setLocalMinCardsCountAC(state, action: PayloadAction<number>) {
      state.localMinRage = action.payload;
    },
    setLocalMaxCardsCountAC(state, action: PayloadAction<number>) {
      state.localMaxRage = action.payload;
    },
    setResultMessageAddPackAC(state, action: PayloadAction<string>) {
      state.resultMessageAddPack = action.payload;
    },
  },
});

export const packsReducer = slicePacks.reducer;
