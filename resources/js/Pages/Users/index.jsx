import React from "react";
import Pagination from "../../components/Pagination";
import UserCreate from "../../components/UserCreate";
import App from "../../layouts/App";

export default function index(props) {
    // CARA PERTAMA
    // const users = props.users.data;
    // const links = props.users.links;
    // const from = props.users.from;

    // KEDUA
    const { data: users, links, from } = props.users;
    return (
        <App>
            <UserCreate />
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length
                        ? users.map((user, index) => (
                              <tr key={user.id}>
                                  <th>{from + index}</th>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                              </tr>
                          ))
                        : ""}
                </tbody>
            </table>
            <Pagination links={links} />
        </App>
    );
}
