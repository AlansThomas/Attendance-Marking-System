import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';


export default function Home() {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', width: '100%', position: 'absolute', top: '100px', wordBreak: 'break-word', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                <Outlet />
            </div>
        </>
    )
}