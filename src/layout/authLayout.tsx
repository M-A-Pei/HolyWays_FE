import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="col-lg-6 col-md-12 p-5 border rounded">
                <Outlet />
            </div>
        </div>
    )
}
