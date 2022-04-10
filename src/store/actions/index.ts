export {
  setStatusAC,
  SET_STATUS,
  setRegistrationIsCompletedAC,
  SET_REGISTRATION_IS_COMPLETED,
} from 'store/actions/registrationAction';

export { setIsLoginAC } from './loginAction';

export { isLoadingAC, initializeMeAC, setErrorMessageAC } from './appAction';

export {
  authMeAC,
  CHECK_AUTH,
  CHANGE_NAME,
  CHANGE_AVATAR,
  editProfileAC,
  CHANGE_PERSONAL_DATA,
  changePersonalNameAC,
  changePersonalAvatarAC,
} from './profileAction';

export { changePasswordAC, IS_CHANGE_PASSWORD } from './passwordAction';

export {
  setPacksAC,
  setIsMyPackAC,
  setSortPacksAC,
  setSearchPackAC,
  rerenderPackAC,
  setMaxCardsCountAC,
  setMinCardsCountAC,
  setPageCountPacksAC,
  setCurrentPagePacksAC,
  setLocalMinCardsCountAC,
  setLocalMaxCardsCountAC,
  setResultMessageAddPackAC,
} from 'store/actions/packsAction';

export {
  setCardsAC,
  setSortCardsAC,
  rerenderCardAC,
  setPageCountCardsAC,
  setSearchAnswerCardsAC,
  setCurrentPageCardsAC,
  setSearchQuestionCardsAC,
} from 'store/actions/cardsAction';

export * from './type';
