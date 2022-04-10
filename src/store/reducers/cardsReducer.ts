import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CardsType } from 'types';

export type InitialStateType = {
  pack: CardsType;
  sort: string;
  searchAnswer: string;
  searchQuestion: string;
  rerenderFlag: string[];
};

export const initialState: InitialStateType = {
  pack: {
    cards: [
      {
        answer: '',
        answerImg: '',
        answerVideo: '',
        cardsPack_id: '',
        comments: '',
        created: '',
        grade: 0,
        more_id: '',
        rating: 0,
        shots: 0,
        type: '',
        updated: '',
        user_id: '',
        __v: 0,
        _id: '',
        question: '',
        questionImg: '',
        questionVideo: '',
      },
    ],
    pageCount: 5,
    page: 1,
  } as CardsType,
  sort: '',
  searchAnswer: '',
  searchQuestion: '',
  rerenderFlag: ['rerender'],
};

export const sliceCards = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCardsAC(state, action: PayloadAction<CardsType>) {
      state.pack = action.payload;
    },
    setSortCardsAC(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setSearchQuestionCardsAC(state, action: PayloadAction<string>) {
      state.searchQuestion = action.payload;
    },
    setSearchAnswerCardsAC(state, action: PayloadAction<string>) {
      state.searchAnswer = action.payload;
    },
    rerenderCardAC(state) {
      state.rerenderFlag = { ...state.rerenderFlag };
    },
    setCurrentPageCardsAC(state, action: PayloadAction<number>) {
      state.pack.page = action.payload;
    },
    setPageCountCardsAC(state, action: PayloadAction<number>) {
      state.pack.pageCount = action.payload;
    },
  },
});

export const cardsReducer = sliceCards.reducer;
