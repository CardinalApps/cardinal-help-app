// const fetchUser = (username) => {
//   return {
//     type: FETCH_USER,
//     payload: username
//   }
// }

export const fetchUser = username => ({ type: 'FETCH_USER', payload: username });
export const fetchUserFulfilled = payload => ({ type: 'FETCH_USER_FULFILLED', payload });
