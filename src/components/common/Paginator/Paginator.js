import React from "react";
import styles from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    pages.length = 3
    if (currentPage === 1) {
        pages[1] = currentPage + 1
        pages[2] = currentPage + 2
    } else if (currentPage >= 2) {
        pages[0] = currentPage - 1
        pages[1] = currentPage
        pages[2] = currentPage + 1
    } else if (currentPage === pages.length) {
        pages[0] = currentPage - 2
        pages[1] = currentPage - 1
        pages[2] = currentPage
    }
    return (

        <div>
            {pages.map(p => {
                    return (
                        <span className={currentPage === p ? styles.selectedPage : ''}
                              onClick={(e) => {
                                  onPageChanged(p)
                              }}>
                                    {p}
                        </span>)
                }
            )}

        </div>

    )
}

export default Paginator