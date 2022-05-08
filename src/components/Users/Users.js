import React from "react";
import User from "./User";
import PaginatorUniversal from "../common/Paginator/PaginatorUniversal";

let Users = ({currentPage, pageSize, totalUsersCount, onPageChanged, users, ...props}) => {
    return (
        <div>
            <PaginatorUniversal
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            <div>
            {users.map(u => <User
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unFollow={props.unFollow}
                user={u}
                key={u.id}/>)
            }
            </div>
        </div>
    )
}

export default Users