import React from 'react';
import s from './Friends.module.scss';
import photo from '../../../img/ava.jpg'

const Friends = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount;
        i++) {
        pages.push(i);
    }

    return < div >
        <div>
            {pages.map(p => {
                return <button className={props.currentPage === p && s.selekted}
                    onClick={() => { props.onPageChanget(p) }}>{p}</button>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div > <img className={s.aava} src={u.photos.small != null ? u.photos.small : photo} alt="" /></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Follow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>'u.location.country' </div>
                    <div>'u.location.city'</div>
                </span>
            </div>)
        }
    </div >

}
export default Friends;