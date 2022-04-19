import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from './../../assets/images/computer-user-icon-2.png'

class Users extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
                this.props.setUsers(responce.data.items)
            })
        }
    }

    render() {
        return (
            <div>
                {this.props.users.map(u => < div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
                }
            </div>
        )
    }
}

export default Users