import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import { Pagination } from "react-bootstrap";

export const Pages = observer(() => {
    const { devices } = useContext(Context);
    const pages: number[] = [];

    if (devices?.totalCount && devices?.limit) {
        const pagesCount = Math.ceil(devices?.totalCount / devices?.limit);

        for (let i = 0; i < pagesCount; i++) {
            pages.push(i + 1);
        }
    }

    return (
        <Pagination className="mt-5">
            {pages.map((page) => (
                <Pagination.Item
                    key={page}
                    active={devices?.page === page}
                    onClick={() => devices?.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            ))}
        </Pagination>
    );
});
