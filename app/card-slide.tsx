import Image from 'next/image';
import clsx from 'clsx';

interface CardSlideProps {
  title: string;
  image: React.ComponentProps<typeof Image>['src'];
  description: React.ReactNode;
}

export default function CardSlide({title, image, description}: CardSlideProps) {
  return (
    <div
      className={clsx(
        'embla__slide',
        'flex flex-col overflow-hidden rounded-2xl border-[5px] border-black'
      )}
    >
      <div className='border-b-[5px] border-black bg-secondary'>
        <h1 className='px-2 py-3 text-center text-4xl uppercase'>{title}</h1>
      </div>
      <div className='grow bg-white p-4'>
        <div className='overflow-hidden rounded-2xl border-[3px] border-black'>
          <Image
            src={image}
            alt=''
            width={317}
            height={207}
            className='max-w-none scale-105 object-cover'
          />
        </div>
        <div className='mt-5 max-w-full text-balance text-sm uppercase text-black'>
          {description}
        </div>
      </div>
    </div>
  );
}
