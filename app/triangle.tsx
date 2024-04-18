import Image from 'next/image';
import clsx from 'clsx';

import triangleImg from './triangle.svg';

interface TriangleProps {
  className?: string;
}

export default function Triangle({className}: TriangleProps) {
  return (
    <Image
      src={triangleImg}
      alt=''
      className={clsx(className, 'absolute z-0 opacity-20')}
    />
  );
}
