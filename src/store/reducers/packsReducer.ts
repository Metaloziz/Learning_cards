import {
  PacksActionType,
  RERENDER_PACK,
  SET_CURRENT_PAGE_PACKS,
  SET_IS_MY_PACK,
  SET_MAX_CARDS_COUNT,
  SET_MAX_CARDS_COUNT_LOCAL,
  SET_MIN_CARDS_COUNT,
  SET_MIN_CARDS_COUNT_LOCAL,
  SET_PACKS,
  SET_PAGE_COUNT_PACKS,
  SET_SEARCH_PACK,
  SET_SORT_PACKS,
} from 'store/actions';
import { PacksType } from 'types';

export type InitialStateType = {
  packs: PacksType;
  sort: string;
  searchPack: string;
  isMyPack: boolean;
  flagForRerender: string[]; // for delete
  localMinValue: number;
  localMaxValue: number;
};

enum LocalValue {
  localMinValue,
  localMaxValue,
}

const initialState: InitialStateType = {
  packs: {} as PacksType,
  sort: '',
  searchPack: '',
  isMyPack: false,
  flagForRerender: ['rerender'],
  localMinValue: LocalValue.localMinValue,
  localMaxValue: LocalValue.localMaxValue,
};

export const packsReducer = (
  state = initialState,
  action: PacksActionType,
): InitialStateType => {
  switch (action.type) {
    case SET_PACKS:
      return { ...state, packs: action.payload.cards };
    case SET_SORT_PACKS:
      return { ...state, sort: action.payload.sort };
    case SET_SEARCH_PACK:
      return { ...state, searchPack: action.payload.searchValue };
    case SET_CURRENT_PAGE_PACKS:
      return { ...state, packs: { ...state.packs, page: action.payload.currentPage } };
    case SET_PAGE_COUNT_PACKS:
      return {
        ...state,
        packs: { ...state.packs, pageCount: action.payload.pageCount },
      };
    case SET_IS_MY_PACK:
      return { ...state, isMyPack: action.payload.isMyPack };
    case RERENDER_PACK:
      return { ...state, flagForRerender: { ...state.flagForRerender } };
    case SET_MIN_CARDS_COUNT:
      return {
        ...state,
        packs: { ...state.packs, minCardsCount: action.payload.minCards },
      };
    case SET_MAX_CARDS_COUNT:
      return {
        ...state,
        packs: { ...state.packs, maxCardsCount: action.payload.maxCards },
      };
    case SET_MIN_CARDS_COUNT_LOCAL:
      return { ...state, localMinValue: action.value };
    case SET_MAX_CARDS_COUNT_LOCAL:
      return { ...state, localMaxValue: action.value };
    default:
      return state;
  }
};
