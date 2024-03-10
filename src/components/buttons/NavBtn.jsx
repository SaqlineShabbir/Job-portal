import Link from 'next/link';

const NavBtn = ({ category, name }) => {
    return (
        <Link href={`/${category}`} className="px-5 py-2.5 font-medium text-lg bg-blue-50 hover:bg-blue-100 hover:text-blue-600 active:bg-blue-300 text-slate-500 rounded-lg">
            {name}
        </Link>
    )
}

export default NavBtn;