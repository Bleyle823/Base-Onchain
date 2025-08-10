'use client';

import { Earn } from '@coinbase/onchainkit/earn';

export default function EarnPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <Earn vaultAddress="0x7BfA7C4f149E7415b73bdeDfe609237e29CBF34A" />
      </div>
    </div>
  );
}


