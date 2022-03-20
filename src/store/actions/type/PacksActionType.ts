import {
  setPacksAC,
  setSearchPack,
  setSortPacks,
  setCurrentPagePacksAC,
  setPageCountPacksAC,
  setIsMyPack,
  rerenderPackAC,
  setLocalMaxCardsCountAC,
  setLocalMinCardsCountAC,
  setMaxCardsCountAC,
  setMinCardsCountAC,
} from 'store/actions';

export type SetPacksType = ReturnType<typeof setPacksAC>;
export type SetSortPacksType = ReturnType<typeof setSortPacks>;
export type SetSearchPack = ReturnType<typeof setSearchPack>;
export type SetPagesCountPacks = ReturnType<typeof setPageCountPacksAC>;
export type SetCurrentPagePacksType = ReturnType<typeof setCurrentPagePacksAC>;
export type SetIsMyPackType = ReturnType<typeof setIsMyPack>;
export type RerenderPackType = ReturnType<typeof rerenderPackAC>;

export type PacksActionType =
  | SetPacksType
  | SetSearchPack
  | SetSortPacksType
  | SetPagesCountPacks
  | SetCurrentPagePacksType
  | SetIsMyPackType
  | RerenderPackType
  | ReturnType<typeof setMaxCardsCountAC>
  | ReturnType<typeof setMinCardsCountAC>
  | ReturnType<typeof setLocalMinCardsCountAC>
  | ReturnType<typeof setLocalMaxCardsCountAC>;
