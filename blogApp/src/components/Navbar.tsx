/* eslint-disable */ 

export default function NavBar() {
    return (
        <div className="flex justify-end">
            <nav >
            <ul className="flex p-5 gap-3.5">
                <li className="text-red-400 font-semibold"><a href="#Blog">Blog</a></li>
                <li><a href="#Works">Works</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
        </div>
    )
}