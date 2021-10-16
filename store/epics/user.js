import { ajax } from 'rxjs/ajax'
import { ofType } from 'redux-observable'
import { mergeMap, map } from 'rxjs/operators'
import { fetchUser, fetchUserFulfilled } from '../actions/user'

export const fetchUserEpic = action$ => action$.pipe(
  ofType('FETCH_USER'),
  mergeMap(action =>
    //ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
    ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/1`).pipe(
      map(response => {
        console.log('in pipe', response)
        return fetchUserFulfilled(response)
      })
    )
  )
)
