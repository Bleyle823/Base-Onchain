'use client';

type EarnProps = {
  vaultAddress: string;
};

export function Earn({ vaultAddress }: EarnProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-sm text-gray-600 break-all">{vaultAddress}</div>
      <div className="text-gray-500 text-sm">Yield actions coming soon.</div>
    </div>
  );
}


