const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLOOW';
const SET_USERS = 'SET_USERS';
const SET_SURENT_PAGE = 'SET_SURENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,

};


const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_SURENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.count
            }
        }

        default:
            return state;
    }

}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_SURENT_PAGE, currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export default friendsReducer;











// [ { id: 2, fullName: 'Viktor', photoUrl: '', status: 'online', followed: true, location: { cantry: 'Ukraine', city: 'Lviv' } },
// { id: 1, fullName: 'Vitalii', photoUrl: '', status: 'online', followed: true, location: { cantry: 'Ukraine', city: 'Lviv' } },
// { id: 3, fullName: 'Volodya', photoUrl: '', status: 'online', followed: true, location: { cantry: 'Ukraine', city: 'Lviv' } },
// { id: 4, fullName: 'Denchik', photoUrl: '', status: 'online', followed: true, location: { cantry: 'Republica Cehă', city: 'Mlada Boleslav' } },
// ]