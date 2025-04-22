import {create} from 'zustand';
import { getLiveRateAPI, TierItem, getBalanceAPI, WalletItem, getCurrenciesAPI, CurrencyItem } from '@/api/wallet';

interface WalletStore {
  balance: WalletItem[];
  liveRate: TierItem[];
  currencies: CurrencyItem[];
  fetchData: () => Promise<void>;
}

export const useWalletStore = create<WalletStore>((set) => ({
  balance: [],
  liveRate: [],
  currencies: [],
  fetchData: async () => {
    const [balanceRes, rateRes, currenciesRes] = await Promise.all([
      getBalanceAPI(),
      getLiveRateAPI(),
      getCurrenciesAPI()
    ]);
    set({
      balance: balanceRes.data.wallet,
      liveRate: rateRes.data.tiers,
      currencies: currenciesRes.data.currencies
    });
  }
}));