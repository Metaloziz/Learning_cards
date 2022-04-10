import {
  setMaxCardsCountAC,
  setMinCardsCountAC,
  setCurrentPagePacksAC,
  setPacksAC,
  setPageCountPacksAC,
  setSearchPackAC,
  setSortPacksAC,
  setResultMessageAddPackAC,
  setIsMyPackAC,
  rerenderPackAC,
  setLocalMinCardsCountAC,
  setLocalMaxCardsCountAC,
} from 'store/actions';
import { packsReducer, InitialStateType } from 'store/reducers/packsReducer';
import { PacksType, PackType } from 'types';

let initialState: InitialStateType;
let packs: PacksType;
let cards: PackType[];
let sort: string;
let searchPack: string;
const currentPage: number = 10; // Magic number must be here, not into beForeEach
const pageCount: number = 100;
const minCards: number = 12;
const maxCards: number = 111;
let message: string;
let isMyPack: boolean;

beforeEach(() => {
  initialState = {
    packs: {} as PacksType,
    sort: '',
    searchPack: '',
    isMyPack: false,
    rerenderFlag: ['remind'],
    localMinRage: 0,
    localMaxRage: 0,
    resultMessageAddPack: '',
  };

  cards = [
    {
      cardsCount: 1,
      created: 'alive',
      grade: 2,
      more_id: 'once',
      name: 'pardon',
      path: 'journey',
      private: false,
      rating: 3,
      shots: 4,
      type: 'please',
      updated: 'long',
      user_id: 'red',
      user_name: 'narrow',
      __v: 5,
      _id: 'put',
    },
  ];

  packs = {
    cardPacks: cards,
    cardPacksTotalCount: 10,
    maxCardsCount: 11,
    minCardsCount: 12,
    page: 13,
    pageCount: 20,
    token: 'advance',
    tokenDeathTime: 21,
  };
  sort = 'fame';
  searchPack = 'page';
  message = 'supply';
  isMyPack = true;
});

describe('packs reducer', () => {
  test('set Cards from API', () => {
    const action = setPacksAC(packs);

    const endState = packsReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.packs).toBe(packs);
    expect(endState.packs.cardPacks).toBe(cards);
  });

  test('change sort value for cards', () => {
    const action = setSortPacksAC(sort);

    const endState = packsReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.sort).toBe(sort);
  });

  test('set value for search pack', () => {
    const action = setSearchPackAC(searchPack);

    const endState = packsReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.searchPack).toBe(searchPack);
  });

  test('set current page', () => {
    const action = setCurrentPagePacksAC(currentPage);

    const endState = packsReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.packs.page).toBe(currentPage);
  });

  test('set page count', () => {
    const action = setPageCountPacksAC(pageCount);

    const endState = packsReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.packs.pageCount).toBe(pageCount);
  });

  test('set only my pack', () => {
    const action = setIsMyPackAC(isMyPack);

    const endState = packsReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.isMyPack).toBe(isMyPack);
  });

  test('rerender for API request', () => {
    const action = rerenderPackAC();

    const endState = packsReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.rerenderFlag).not.toBe(initialState.rerenderFlag);
  });

  test('set min cards count', () => {
    const action = setMinCardsCountAC(minCards);

    const endState = packsReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.packs.minCardsCount).toBe(minCards);
  });

  test('set min cards count', () => {
    const action = setMaxCardsCountAC(maxCards);

    const endState = packsReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.packs.maxCardsCount).toBe(maxCards);
  });

  test('set min local cards count', () => {
    const action = setLocalMinCardsCountAC(minCards);

    const endState = packsReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.localMinRage).toBe(minCards);
  });

  test('set max local cards count', () => {
    const action = setLocalMaxCardsCountAC(maxCards);

    const endState = packsReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.localMaxRage).toBe(maxCards);
  });

  test('set result message from API', () => {
    const action = setResultMessageAddPackAC(message);

    const endState = packsReducer(initialState, action);

    expect(endState).not.toBe(initialState);
    expect(endState.resultMessageAddPack).toBe(message);
  });
});
