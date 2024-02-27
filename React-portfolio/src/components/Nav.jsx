export default function Nav() {
    return (
        <div className="flex items-center justify-between border-b font-medium font-work border-black py-3 px-3 sticky">
            <a href='#home' id='home'>
                Cassandra Manotham
            </a>
            <div className="flex">
                <a href='#web' className="ml-4 hover:text-green-400">Web</a>
                <a href='#graphic' className="ml-4 hover:text-green-400">Graphic</a>
            </div>
        </div>
    )
}
