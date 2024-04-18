'use client';

import {useEffect, useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

interface CopyProps {
  text: string;
}

export default function Copy({text}: CopyProps) {
  const [copied, setCopyped] = useState(false);

  useEffect(() => {
    let id: any;

    if (copied) {
      id = setTimeout(() => setCopyped(false), 2000);
    }

    return () => {
      clearInterval(id);
    };
  }, [copied]);

  return (
    <CopyToClipboard text={text} onCopy={() => setCopyped(true)}>
      <button className='bg-tertiary px-3 lg:px-6'>
        {copied ? 'COPIED' : 'COPY'}
      </button>
    </CopyToClipboard>
  );
}
