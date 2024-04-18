import clsx from 'clsx';

interface NavProps {
  isHamburger?: boolean;
}

export default function Nav({isHamburger}: NavProps) {
  return (
    <ul
      className={clsx(
        'uppercase [&>li:hover]:multi-[`text-tertiary`] [&>li]:multi-[`transition`]',
        {
          'text-4xl': isHamburger,
          'flex gap-x-4 lg:gap-x-8 lg:[&>li:not(:first-child)]:multi-[`pl-8`] [&>li:not(:first-child)]:multi-[`border-l-2;pl-4`] items-center text-2xl md:[&_a]:text-[30px] lg:[&_a]:multi-[`text-4xl`] [&_a]:min-[1024px]:max-[1175px]:text-2xl':
            !isHamburger,
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
