const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUserName = state => state.auth.user.name;

const selectToken = state => state.auth.token;

const selectIsFetchingCurrent = state => state.auth.isFetchingCurrent;

const selectIsLoadingLogin = state => state.auth.isLoading;

const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectToken,
  selectIsFetchingCurrent,
  selectIsLoadingLogin,
};
export default authSelectors;
