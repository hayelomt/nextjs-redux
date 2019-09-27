import Link from 'next/link';
import './header.scss';

const Header = (props) => (
  <div>
    <span>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/about/team">
        <a>Team</a>
      </Link>
    </span>
  </div>
)

export default Header;