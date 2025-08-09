'use client';
import Footer from 'src/components/Footer';
import WalletWrapper from 'src/components/WalletWrapper';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import { Earn } from '@coinbase/onchainkit/earn';
import { VAULT_ADDRESSES } from 'src/config';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          <a
            href={ONCHAINKIT_LINK}
            title="onchainkit"
            target="_blank"
            rel="noreferrer"
          >
            <OnchainkitSvg />
          </a>
          <div className="flex items-center gap-3">
            <SignupButton />
            {!address && <LoginButton />}
          </div>
        </div>
      </section>
      <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-gray-100 px-2 py-4 md:grow">
        <div className="flex flex-col items-center gap-6 w-full max-w-[900px]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Yield Farming</h1>
            <p className="text-lg text-gray-600">Earn yield on your crypto assets with secure vaults</p>
          </div>
          
          {address ? (
            <div className="w-full max-w-[900px] space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {VAULT_ADDRESSES.map((vaultAddress, index) => (
                  <div key={vaultAddress} className="rounded-lg border border-gray-300 p-6 bg-white shadow-sm">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">
                      Vault {index + 1}
                    </h3>
                    <Earn vaultAddress={vaultAddress} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-xl bg-[#030712] px-6 py-4">
                <p className="font-normal text-white text-lg tracking-[-0.5px]">
                  Connect your wallet to start earning yield
                </p>
              </div>
              <WalletWrapper
                className="w-[450px] max-w-full"
                text="Connect Wallet to Start Earning"
              />
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
