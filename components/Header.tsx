'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
// import MetamaskContext from '@/contexts/EthersContext'
// import { Button } from './ui/button'
import { ModeToggle } from './toggle-theme'

export function Header() {
  // const { signer, account, connectWallet } = React.useContext(
  //   MetamaskContext,
  // ) as any

  return (
    <div className='fixed w-full h-16 top-0 z-20 flex flex-col shadow-xl border-b-[1px] border-secondary justify-center backdrop-blur-md bg-background/15'>
      <div className='w-full bg-transparent flex flex-row justify-between items-center lg:px-24 px-4 h-14'>
        {/* Logo and Brand - Left Side */}
        <Link href='/' className='h-16 flex items-center'>
          <Image
            className='cursor-pointer h-[100%] w-auto py-2 hidden lg:inline-block'
            src="/hodlcoin.png"
            width={100}
            height={100}
            alt='hodlCoin Logo'
          />
          <p
            className="cursor-pointer font-extrabold text-2xl tracking-tight mx-1 
              bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent
              dark:from-purple-400 dark:to-fuchsia-500 dark:bg-gradient-to-r dark:bg-clip-text dark:text-transparent"
            style={{ letterSpacing: '0.01em' }}
          >
            hodlCoin
          </p>
        </Link>

        {/* Theme Toggle - Right Side */}
        <div className='h-[100%] flex flex-row justify-end items-center'>
          {/* <AvatarMenu /> */}

          <ModeToggle />

          {/* <Button onClick={connectWallet}>
            {signer
              ? 'Connected: ' +
                account?.substring(0, 5) +
                '...' +
                account?.substring(38, 42)
              : 'Connect Wallet'}
          </Button> */}
        </div>
      </div>
    </div>
  )
}
