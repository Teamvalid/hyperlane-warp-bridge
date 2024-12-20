import { GithubIcon, LinkedInIcon, TwitterIcon } from '@hyperlane-xyz/widgets';
import Link from 'next/link';
import { ReactNode } from 'react';
import { links } from '../../consts/links';

type FooterLink = {
  title: string;
  url: string;
  external: boolean;
  icon?: ReactNode;
};

const footerLinks: FooterLink[] = [
  { title: 'Homepage', url: links.home, external: true },  
  { title: 'Docs', url: links.docs, external: true },
  { title: 'Explorer', url: links.explorer, external: true },
  { title: 'Whitepaper', url: links.whitepaper, external: true },  
  { title: 'Blog', url: links.blog, external: true },  
  { title: 'Faucet', url: links.faucet, external: true },  
];
const footerSocails: FooterLink[] = [
  { title: 'Twitter', url: links.twitter, external: true, icon: <TwitterIcon color="#fff" /> },
  { title: 'LinkedIn', url: links.linkedin, external: true, icon: <LinkedInIcon color="#fff" /> },
  { title: 'Github', url: links.github, external: true, icon: <GithubIcon color="#fff" /> },
];

export function Footer() {
  return (
    <footer className="relative text-white">
      <div className="relative bg-gradient-to-b from-transparent to-black/40 px-8 pb-5 pt-2 sm:pt-0">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-10">
          <FooterLinks />
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
}

function FooterLinks() {
  return (
    <nav className="text-md font-medium">
      <ul style={{ gridTemplateColumns: 'auto auto auto' }} className="grid gap-x-4 gap-y-1.5">
        {footerLinks.map((item) => (
          <li key={item.title}>
            <Link
              className="flex items-center capitalize underline-offset-2 hover:underline"
              target={item.external ? '_blank' : '_self'}
              href={item.url}
            >
              {item?.icon && <div className="mr-3 mt-1 w-4">{item?.icon}</div>}
              {!item?.icon && <div>{item.title}</div>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
function FooterSocials() {
  return (
    <nav className="text-md font-medium">
      <ul style={{ gridTemplateColumns: 'auto auto auto' }} className="grid gap-x-3 gap-y-1.5">
        {footerSocails.map((item) => (
          <li key={item.title}>
            <Link
              className="flex items-center capitalize underline-offset-2 hover:underline"
              target={item.external ? '_blank' : '_self'}
              href={item.url}
            >
              {item?.icon && <div className="mr-3 mt-1 w-4">{item?.icon}</div>}
              {!item?.icon && <div>{item.title}</div>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
