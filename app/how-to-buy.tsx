'use client';

import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {WheelGesturesPlugin} from 'embla-carousel-wheel-gestures';

import CardSlide from './card-slide';

interface HowToBuyProps extends React.ComponentProps<'section'> {}

export default function HowToBuy({className}: HowToBuyProps) {
  const [emblaRef, embla] = useEmblaCarousel({loop: false, align: 'center'}, [
    Autoplay({
      stopOnInteraction: false,
    }),
    WheelGesturesPlugin(),
  ]);

  return (
    <section className={clsx(className)}>
      <div className='mx-auto flex items-end justify-end gap-x-5 px-5'>
        <h2
          className={clsx(
            'whitespace-nowrap text-center text-[2.7rem] uppercase drop-shadow-normal sm:text-5xl md:text-6xl lg:text-[4rem]',
            'hidden'
          )}
        >
          How to buy
        </h2>
        <div
          className={clsx(
            'flex shrink-0 gap-x-4',
            '[&>button]:multi-[`border-2;border-black;px-2;py-2;rounded-xl;bg-white;transition`]',
            'hover:[&>button]:multi-[`bg-tertiary`]'
          )}
        >
          <button
            aria-label='Previous'
            onClick={() => {
              if (embla?.canScrollPrev()) {
                return embla.scrollPrev();
              }
              embla?.scrollTo(embla.slideNodes().length - 1);
            }}
          >
            <img src='/arrow.svg' alt='' className='rotate-[-170deg]' />
          </button>
          <button
            aria-label='Next'
            onClick={() => {
              if (embla?.canScrollNext()) {
                return embla.scrollNext();
              }
              embla?.scrollTo(0);
            }}
          >
            <img src='/arrow.svg' alt='' className='rotate-[-10deg]' />
          </button>
        </div>
      </div>
      <div
        ref={emblaRef}
        className='embla mt-8 [--embla-gap:theme(spacing.3)] lg:mt-14'
      >
        <div className='embla__container'>
          <CardSlide
            title='creat a wallet'
            image='/slide/slide-1.png'
            description={`
            Download Metamask or your wallet of choice from the app store or
            Google Play for free. Desktop users, download the Google Chrome
            extension by going to Metamask.
          `}
          />
          <CardSlide
            title='get some CHZ'
            image='/slide/slide-2.png'
            description={`
            Have ETH in your wallet to switch to $AcLhEzX. If you don’t have any ETH, 
            you can buy directly on Metamask, transfer from another wallet, or buy on
            another exchange and send it to your wallet.
          `}
          />
          <CardSlide
            title='go to uniswap'
            image='/slide/slide-3.png'
            description={`
            Connect to Uniswap. Go to Uniswap in google chrome or on the browser inside 
            your Metamask app. Connect your wallet. Paste the $AcLhEzX token address into Uniswap, 
            select $AcLhEzX, and confirm. When Metamask prompts you for a wallet signature, sign.
          `}
          />
          <CardSlide
            title='zwap'
            image='/slide/slide-4.png'
            description={`
            Switch ETH for $AcLhEzX. We have Zero taxes so you don’t need 
            to worry about buying with a specific slippage, although you may.
          `}
          />
          <CardSlide
            title='chz wallet'
            image='/slide/slide-5.png'
            description={`
            You can now find and buy $AcLhEzX directly from your CHZ wallet.
          `}
          />
          <CardSlide
            title='poloniex'
            image='/slide/slide-6.png'
            description={`
            $AcLhEzX is now listed on CHZ, you can swap directly on it.
          `}
          />
        </div>
      </div>
    </section>
  );
}
