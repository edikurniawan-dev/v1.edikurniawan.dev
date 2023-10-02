import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      Article
      <Link href="/">Home</Link>
    </div>
  );
}
