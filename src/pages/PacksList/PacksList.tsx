import { memo, ReactElement, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {
  AddPack,
  DebounceSearchField,
  MultiRangeSlider,
  Pagination,
  SwitcherMyAll,
  TablePacks,
} from 'components';
import { CountDecksOnPage, PATH, TimerForDeBounce } from 'enum';
import { useDebounce } from 'hook';
import {
  rerenderPackAC,
  setCurrentPagePacksAC,
  setLocalMaxCardsCountAC,
  setLocalMinCardsCountAC,
  setPageCountPacksAC,
  setSearchPack,
} from 'store/actions';
import {
  selectCurrentPage,
  selectIsLogin,
  selectIsMyPack,
  selectLocalMaxCardsCount,
  selectLocalMinCardsCount,
  selectMaxCardsCount,
  selectMinCardsCount,
  selectPageCount,
  selectRerender,
} from 'store/selectors';
import { getPacksTC } from 'store/thunks';
import { Flex } from 'styles';
import { getNumberValuesFromEnum } from 'utils';

export const PacksList = memo((): ReactElement => {
  const dispatch = useDispatch();

  const isLogin = useSelector(selectIsLogin);
  const isMyPack = useSelector(selectIsMyPack);
  const rerender = useSelector(selectRerender);
  const pagesCount = useSelector(selectPageCount);
  const currentPage = useSelector(selectCurrentPage);
  const minRange = useSelector(selectMinCardsCount);
  const maxRange = useSelector(selectMaxCardsCount);
  const minRangeLocal = useSelector(selectLocalMinCardsCount);
  const maxRangeLocal = useSelector(selectLocalMaxCardsCount);

  const countDecksOnPage = getNumberValuesFromEnum(CountDecksOnPage);

  const searchByPacks = useCallback((pack: string): void => {
    dispatch(setSearchPack(pack));
    dispatch(rerenderPackAC());
  }, []);

  const setCurrentPage = useCallback((value: number): void => {
    dispatch(setCurrentPagePacksAC(value));
  }, []);

  const setPacksCount = useCallback((value: number): void => {
    dispatch(setPageCountPacksAC(value));
  }, []);

  const changeRange = useCallback(
    ({ minVal, maxVal }: { minVal: number; maxVal: number }): void => {
      dispatch(setLocalMinCardsCountAC(minVal));
      dispatch(setLocalMaxCardsCountAC(maxVal));
    },
    [],
  );

  const handleRange = useDebounce(changeRange, TimerForDeBounce.RANGE_DELAY);

  useEffect(() => {
    dispatch(getPacksTC());
  }, [pagesCount, currentPage, rerender, minRangeLocal, maxRangeLocal, isMyPack]);

  if (!isLogin) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <MultiRangeSlider min={minRange} max={maxRange} onChange={handleRange} />
      <DebounceSearchField placeholder="Name" searchValue={searchByPacks} />
      <Flex>
        <SwitcherMyAll />
        <AddPack />
      </Flex>
      <TablePacks />
      <Pagination
        currentPage={currentPage}
        pagesCount={pagesCount}
        countDecksOnPage={countDecksOnPage}
        setCurrentPage={setCurrentPage}
        setPacksCount={setPacksCount}
      />
    </Flex>
  );
});
