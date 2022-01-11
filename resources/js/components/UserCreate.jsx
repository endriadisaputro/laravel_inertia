import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function UserCreate() {
    const { data, setData, reset, post } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value,
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        post("/users", { data, onSuccess: () => reset() });
    };

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">Create new User</div>
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    value={data.name}
                                    onChange={changeHandler}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    value={data.email}
                                    onChange={changeHandler}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    value={data.password}
                                    onChange={changeHandler}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
