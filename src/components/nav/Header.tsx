import { BoxArrowIcon, SwapIcon } from '@hyperlane-xyz/widgets';
import Image from 'next/image';
import Link from 'next/link';
import { links } from '../../consts/links';
import { ConnectWalletButton } from '../../features/wallet/ConnectWalletButton';

export function Header() {
  return (
    <header className="w-full px-2 pb-2 pt-3 sm:px-6 lg:px-12">
      <div className="flex items-start justify-between">
        <Link href="/" className="flex items-center py-2">
          <Image src={'/logo-full.png'} width={150} height={150} alt="Validium Network Logo" />
        </Link>
        <div className="flex flex-col items-end gap-2 md:flex-row-reverse md:items-start">
          <ConnectWalletButton />
          <BridgeL1toL2Button />
        </div>
      </div>
    </header>
  );
}

function BridgeL1toL2Button() {
  return <Link href={links.bridgel1tol2} target='_blank'>
    <button className='bg-white rounded-lg px-2 py-1 hover:bg-white/90 transition-all'>
      <div className="flex items-center gap-2">
        <div className=""><SwapIcon className='w-[1.5rem]' /></div>
        <div className="flex flex-col items-start">
          <p className="text-[0.75rem] leading-4 text-gray-350">Bridge</p>
          <p className='flex gap-1 text-[0.75rem] leading-4 font-semibold'>{'L1 <> L2'}</p>
        </div>
        <div className="pl-2"><BoxArrowIcon className='w-[0.875rem]' /></div>
      </div>
    </button>
  </Link>
}