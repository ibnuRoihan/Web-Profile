import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/navbar';

export const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}