
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
export default function navbar() {
    return (

        <>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">testShop</a>
                </div>
                    <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[24px]">
                        <li><Link href={"/"} className='btn btn-link no-underline text-black hover:no-underline hover:text-[#00FF93]'>หน้าแรก</Link></li>
                        <li><Link href={"/"} className='btn btn-link no-underline text-black hover:no-underline hover:text-[#00FF93]'>สินค้า</Link></li>
                        <li><Link href={"/"} className='btn btn-link no-underline text-black hover:no-underline hover:text-[#00FF93]'>ติดต่อ</Link></li>
                    </ul>
                </div>
                
                <div className="navbar-end">
                    <a className="btn bg-green-500 border-none text-white">สมัครสมาชิก / เข้าสู่ระบบ</a>
                    
                </div>
            </div>
        </>

    );
}