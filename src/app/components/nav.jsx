import Link from "next/link";

function Nav() {
    return ( 
        <div className="p-4 text-right">
            <Link href={menu[pos-1]} className="rounded-l-full text-2xl text-blue-800 mr-8">Anterior</Link>
            <Link href={menu[pos+1]} className="rounded-l-full text-2xl text-blue-300 mr-10">Siguiente</Link>
        </div>
     );
}

export default Nav;