'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavbarItem({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        'text-muted-foreground transition-colors ',
        {
          '!text-foreground': pathname === href
        }
      )}
    >
      {children}
    </Link>
  );
}