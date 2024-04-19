import clsx from 'clsx';

interface CardProps {
  title: string;
  description: React.ReactNode;
  position?: 'left' | 'right';
  action: {
    text: string;
    className?: string;
  } & ({href: string; target: string} | {});
}

export default function Card({
  title,
  description,
  position = 'left',
  action,
}: CardProps) {
  const isActionAnchor = 'href' in action;

  return (
    <article className='flex flex-col'>
      <h3
        className={clsx(
          'text-7xl uppercase drop-shadow-normal lg:text-8xl xl:text-9xl',
          {
            'text-right max-[779px]:text-left': position === 'right',
          }
        )}
      >
        {title}
      </h3>
      <div
        className={clsx(
          'mb-5 mt-10 text-balance text-xl uppercase lg:mt-14 lg:text-2xl [&>*]:space-y-5 lg:[&>*]:space-y-10',
          {
            'justify-end text-right max-[779px]:text-left':
              position === 'right',
          }
        )}
      >
        {description}
      </div>
      <div
        className={clsx(
          action.className,
          'flex uppercase',
          '[&>*]:multi-[`text-3xl;px-7;py-5;border-[5px];border-black;rounded-2xl;bg-secondary;transition;whitespace-nowrap`]',
          'lg:[&>*]:multi-[`text-[3.3rem];px-10;py-10;rounded-3xl`]',
          'xl:[&>*]-multi-[`text-[4rem]`]',
          'hover:[&>a]:multi-[`bg-tertiary;text-black`]',
          {
            'justify-end max-[779px]:justify-start': position === 'right',
          }
        )}
      >
        {isActionAnchor ? (
          <a href={action.href} target={action.target}>
            {action.text}
          </a>
        ) : (
          <span>{action.text}</span>
        )}
      </div>
    </article>
  );
}
