import { Outlet } from "react-router-dom";
import Nav from "./Nav";
function Home() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}
export default Home;