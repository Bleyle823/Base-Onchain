// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://base-yield-farming.vercel.app';
// Add your API KEY from the Coinbase Developer Portal
export const NEXT_PUBLIC_CDP_API_KEY = process.env.NEXT_PUBLIC_CDP_API_KEY;
export const NEXT_PUBLIC_WC_PROJECT_ID = process.env.NEXT_PUBLIC_WC_PROJECT_ID;
// Additional vault addresses for yield farming
export const VAULT_ADDRESSES = [
  '0x7BfA7C4f149E7415b73bdeDfe609237e29CBF34A', // Primary vault
  '0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1', // Secondary vault
] as const;
