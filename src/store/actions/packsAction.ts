import { slicePacks } from 'store/reducers/packsReducer';

export const {
  setCurrentPagePacksAC,
  setPageCountPacksAC,
  setMaxCardsCountAC,
  setMinCardsCountAC,
  setLocalMaxCardsCountAC,
  setLocalMinCardsCountAC,
  setSortPacksAC,
  setSearchPackAC,
  setPacksAC,
  setIsMyPackAC,
  setResultMessageAddPackAC,
  rerenderPackAC,
} = slicePacks.actions;
