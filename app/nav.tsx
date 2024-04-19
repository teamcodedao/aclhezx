import clsx from 'clsx';

interface NavProps extends React.ComponentProps<'ul'> {
  isHamburger?: boolean;
}

export default function Nav({isHamburger, className}: NavProps) {
  return (
    <ul
      className={clsx(
        className,
        'uppercase [&>li:hover]:multi-[`text-tertiary`] [&>li]:multi-[`transition`]',
        {
          'text-3xl lg:text-4xl space-y-3': isHamburger,
          [clsx(
            'flex items-center gap-x-4 text-2xl [&>li:not(:first-child)]:multi-[`border-l-2;pl-4`] lg:[&>li:not(:first-child)]:multi-[`pl-8`] md:[&_a]:text-[30px] lg:[&_a]:multi-[`text-4xl`]',
            'lg:gap-x-8 min-[1024px]:max-[1199px]:multi-[`[&_a]:!text-[1.7rem];[&+div>a]:text-2xl;[&+div>a]:px-5`]'
          )]: !isHamburger,
        }
      )}
    >
      <li>
        <a href='#how-to-buy'>HOW TO BUY</a>
      </li>
      <li>
        <a href='#about'>ABOUT</a>
      </li>
      <li>
        <a href='#mechanism'>ACLHEZX MECHANISM</a>
      </li>
    </ul>
  );
}
