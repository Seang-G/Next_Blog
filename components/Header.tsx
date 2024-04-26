"use client"

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import styles from "../styles/header.module.css";
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathName = usePathname();
  const isActive: (pathname: string) => boolean = (pathname) =>
    pathName === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      <Link href="/" className={styles.bold} data-activate={isActive('/')}>
          Feed
      </Link>
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <div className="left">
        <Link href="/" className={styles.bold} data-active={isActive('/')}>
            Feed
        </Link>
      </div>
    );
    right = (
      <div className={styles.right}>
        <p>Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className={styles.right}>
        <Link href="/api/auth/signin" data-active={isActive('/signup')}>
          Log in
        </Link>
      </div>
    );
  }

  if (session) {
    left = (
      <div className={styles.left}>
        <Link href="/" className={styles.bold} data-active={isActive('/')}>
            Feed
        </Link>
        <Link href="/drafts" data-active={isActive('/drafts')}>
          My drafts
        </Link>
      </div>
    );
    right = (
      <div className={styles.right}>
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <Link href="/create">
          <button>
            New post
          </button>
        </Link>
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
      </div>
    );
  }

  return (
    <nav className={styles.header}>
      {left}
      {right}
    </nav>
  );
};

export default Header;