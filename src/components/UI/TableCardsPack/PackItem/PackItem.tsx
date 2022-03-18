import { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { TableItem } from './style';

import { SuperButton } from 'components';
import { PATH } from 'enum';
import { RootReducerType } from 'store';
import { setSearchAnswerCards, setSearchQuestionCards } from 'store/actions';
import {
  selectCardsCount,
  selectPackId,
  selectPackName,
  selectUpdateDataPack,
  selectUserId,
  selectUserIdPack,
  selectUserNamePack,
} from 'store/selectors';

type PackItemType = {
  id: string;
  deletePack: (packId: string) => void;
};

export const PackItem = memo(({ id, deletePack }: PackItemType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId = useSelector(selectUserId);
  const packId = useSelector((state: RootReducerType) => selectPackId(state, id));
  const namePack = useSelector((state: RootReducerType) => selectPackName(state, id));
  const userIdPack = useSelector((state: RootReducerType) => selectUserIdPack(state, id));
  const cardsCount = useSelector((state: RootReducerType) => selectCardsCount(state, id));
  const userNamePack = useSelector((state: RootReducerType) =>
    selectUserNamePack(state, id),
  );
  const updateDataPack = useSelector((state: RootReducerType) =>
    selectUpdateDataPack(state, id),
  );

  const dataNew = new Date(updateDataPack);

  const onLearnPackClick = (): void => {
    dispatch(setSearchQuestionCards(''));
    dispatch(setSearchAnswerCards(''));
    navigate(`${PATH.CARD}${packId}/${namePack}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TableItem width="200px">{namePack}</TableItem>
      <TableItem width="50px">{cardsCount}</TableItem>
      <TableItem width="100px">{dataNew.toLocaleDateString()}</TableItem>
      <TableItem width="200px">{userNamePack}</TableItem>
      <TableItem width="180px">
        <SuperButton
          size="small"
          hidden={userId !== userIdPack}
          onClick={() => deletePack(packId)}
        >
          Delete
        </SuperButton>
        <SuperButton size="small" hidden={userId !== userIdPack}>
          Edit
        </SuperButton>
        <SuperButton onClick={onLearnPackClick} size="small">
          Learn
        </SuperButton>
      </TableItem>
    </div>
  );
});
