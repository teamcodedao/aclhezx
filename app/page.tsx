import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import Nav from './nav';
import Triangle from './triangle';
import Hamburger from './hamburger';
import Copy from './copy';
import ListedOn from './listed-on';
import Card from './card';

import alex1Img from './alex-1.png';
import alex2Img from './alex-2.png';
import alex3Img from './alex-3.png';
import doubleTriangleImg from './double-triangle.png';
import clsx from 'clsx';

export default function Home() {
  return (
    <div className='min-h-screen overflow-hidden bg-primary'>
      <div className='relative mx-auto max-w-screen-desktop max-desktop:px-5'>
        <header className='relative z-10 pt-10'>
          <div className='flex items-center gap-x-10 rounded-[28px] border-[5px] border-black bg-secondary p-6 max-[500px]:multi-[`flex-wrap`]'>
            <div className='flex shrink-0 gap-x-3 [&>a:hover]:multi-[`bg-tertiary`] [&>a]:multi-[`border-[3px];border-black;rounded-xl;rounded-xl;bg-white;px-2;py-2;transition`]'>
              <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_twitter'>
                <img src='/twitter.svg' alt='' />
              </a>
              <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_telegram'>
                <img src='/telegram.svg' alt='' />
              </a>
              <a href={process.env.NEXT_PUBLIC_CHART_URL} target='_chart'>
                <img src='/chart.svg' alt='' />
              </a>
            </div>
            <Nav className='max-[991px]:hidden' />
            <div className='ml-auto shrink-0 max-[500px]:multi-[`order-2;ml-0;w-full;mt-3;[&>a]:block;[&>a]:text-center`]'>
              <a
                href={process.env.NEXT_PUBLIC_COIN_URL}
                target='_buy'
                className='inline-block whitespace-nowrap rounded-2xl border-4 border-black bg-tertiary px-5 py-2 text-xl text-black hover:multi-[`bg-white;transition`] sm:text-2xl lg:px-7 lg:py-3 lg:text-4xl'
              >
                BUY NOW
              </a>
            </div>
            <div className='hidden max-[967px]:multi-[`block`] max-[500px]:ml-auto'>
              <Hamburger />
            </div>
          </div>
          <div className='lg: relative mt-10 flex md:mt-10 lg:mt-24'>
            <div className='flex grow flex-col justify-center max-[555px]:multi-[`absolute;inset-0`]'>
              <h1 className='text-7xl uppercase drop-shadow-normal md:text-8xl lg:text-9xl'>
                AcLhEzX
              </h1>
              <h4 className='lg: mt-8 space-y-2 text-2xl uppercase md:text-3xl lg:mt-10 lg:text-4xl'>
                <p>Sey hallo tu da ceo of Chiliz</p>
                <p>FiRsT DeFlATiOnaRy MemEcOiN On CHZ</p>
              </h4>
            </div>
            <div className='flex'>
              <div className='-mr-24 mt-5 flex flex-col justify-between'>
                <Image src={doubleTriangleImg} quality={100} priority alt='' />
                <Triangle className='!relative z-[-1] aspect-square w-[250px] -rotate-45' />
              </div>
              <Image
                src={alex1Img}
                quality={100}
                priority
                alt=''
                className='self-end'
              />
            </div>
          </div>
        </header>
        <Triangle className='-left-40 -top-20 rotate-[-25deg]' />
        <Triangle className='-bottom-14 -left-64 rotate-[-25deg]' />
        <Triangle className='-right-80 bottom-14 w-[650px] rotate-[-240deg] object-cover' />
      </div>
      <section className='-mt-8 border-y-[5px] border-black bg-secondary py-6 lg:py-10'>
        <Marquee autoFill className='overflow-y-hidden'>
          <span className='inline-block px-8 text-4xl text-white lg:text-5xl'>
            $DREYFUS
          </span>
        </Marquee>
      </section>
      <section className='flex justify-center px-2 lg:px-0'>
        <div className='flex overflow-hidden rounded-b-3xl border-[5px] border-t-0 border-black text-xl uppercase text-black lg:rounded-b-[2rem] lg:text-2xl'>
          <div className='flex items-center gap-x-2 overflow-hidden bg-white p-3 lg:px-7 lg:py-6'>
            <span className='shrink-0'>CA</span>
            <span className='inline-block h-[23px] w-1 shrink-0 bg-black'></span>
            <span className='inline-block overflow-hidden break-words'>
              {process.env.NEXT_PUBLIC_COIN_ADDRESS}
            </span>
          </div>
          <Copy text={process.env.NEXT_PUBLIC_COIN_ADDRESS} />
        </div>
      </section>
      <ListedOn className='mt-10 lg:mt-16' />
      <section
        className={clsx(
          'mx-auto mt-20 max-w-screen-desktop max-desktop:px-5 lg:mt-28',
          'grid grid-cols-[repeat(auto-fill,minmax(var(--w),_1fr))] gap-x-5 gap-y-14 sm:gap-x-10 lg:gap-x-20 lg:gap-y-32',
          '[--w:350px] lg:[--w:430px]',
          'mixin/image:multi-[`flex;items-end`]',
          'max-[779px]:[&>*:nth-child(3)]:order-last'
        )}
      >
        <div className='mixin/image'>
          <Image src={alex2Img} alt='' className='w-full' />
        </div>
        <Card
          title='tokenomic'
          position='right'
          description={
            <div>
              <p>
                $AcLhEzX is da hartfelt leeder of CHZ. His mishun is to bild bak
                betta, to unify da divided, n to counter da wild claims . We’re
                here to bring togetha all da Baze memes and support one anotha
                thru da highs and lows, moke sure to stond by Briun far real
                change!
              </p>
              <p>
                Briun can naw count on his frenz lik Jesse, butt alzo, thankz to
                his efforts, on a Bald CHZED communyti. No oane can stap a CHZED
                team.
              </p>
            </div>
          }
          action={{
            text: 'Supply: 100.000.000',
            className: 'mt-auto',
          }}
        />
        <Card
          title='AcLhEzX mechanism'
          description={
            <div>
              <p>
                Reminder: we&apos;re more than just a meme, $aclhezx is the
                first deflationary memecoin thanks to UniV3 fees.
              </p>
              <p>
                This flywheel mechanism has already enabled us to make 35
                buybacks to burn 5,41% of the total supply.
              </p>
              <p>Every day more $aclhezx goes out of circulation.</p>
            </div>
          }
          action={{
            text: 'buy $AcLhEzX',
            href: process.env.NEXT_PUBLIC_COIN_URL,
            target: '_buy',
            className: 'mt-4 lg:mt-14',
          }}
        />
        <div className='mixin/image'>
          <Image src={alex3Img} alt='' className='w-full' />
        </div>
      </section>
    </div>
  );
}
