export function userReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_USER':
      console.log('in users/fetchUser reducer')
      return {
        ...state,
        'users': [
          {
            first_name: "It's a me, Mario"
          }
        ]
      }

    default:
      return state
  }
}
