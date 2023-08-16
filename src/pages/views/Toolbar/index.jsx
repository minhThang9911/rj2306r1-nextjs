import Link from "next/link";

function Toolbar() {
    return ( <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/about">About</Link></li>
    </ul> );
}

export default Toolbar;