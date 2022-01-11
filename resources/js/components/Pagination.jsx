import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Pagination({ links }) {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {links.map((link, k) => (
                    <li className={`page-item ${link.active && "active"}`}>
                        <Link
                            className="page-link"
                            key={k}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
