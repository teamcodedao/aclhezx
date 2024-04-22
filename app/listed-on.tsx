'use client';

import Image from 'next/image';
import clsx from 'clsx';
import Tilt from 'react-parallax-tilt';

import Triangle from './triangle';

import triangleImg from './triangle.svg';

interface ListedOnProps extends React.ComponentProps<'section'> {}

export default function ListedOn({className, ...rest}: ListedOnProps) {
  return (
    <section {...rest} className={clsx(className, 'relative max-desktop:px-5')}>
      <h2 className='text-center text-5xl uppercase drop-shadow-normal md:text-6xl lg:text-[4rem]'>
        Listed On
      </h2>
      <div className='relative z-10 mt-8 flex justify-center gap-x-5 sm:gap-x-10 lg:mt-12 lg:gap-x-20 max-[400px]:[&>*:first-child]:hidden max-sm:[&>*:last-child]:hidden'>
        {Array.from({length: 3}).map((_, i) => (
          <Tilt
            key={i}
            className='flex aspect-[316/157] w-[316px] items-center justify-center rounded-3xl border-[5px] border-black bg-white lg:rounded-[1.7rem]'
          >
            <div className='aspect-square h-[calc(100%-2*10px)] rounded-full bg-secondary p-1'>
              <div className='flex size-full items-center justify-center rounded-full border border-white'>
                <Image
                  src={triangleImg}
                  alt=''
                  className='mt-2 h-3/4 object-contain lg:mt-3.5'
                />
              </div>
            </div>
          </Tilt>
        ))}
      </div>
      <Triangle className='-right-48 -top-20 z-0 w-[620px] rotate-[120deg]' />
    </section>
  );
}
