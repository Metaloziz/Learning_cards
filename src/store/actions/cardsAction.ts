import { sliceCards } from 'store/reducers/cardsReducer';

export const {
  setSearchQuestionCardsAC,
  setSortCardsAC,
  setCardsAC,
  setCurrentPageCardsAC,
  setPageCountCardsAC,
  setSearchAnswerCardsAC,
  rerenderCardAC,
} = sliceCards.actions;
