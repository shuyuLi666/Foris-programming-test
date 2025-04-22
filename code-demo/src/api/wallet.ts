import { http } from "@/utils";
export type CurrencyResType = {
  currencies: [CurrencyItem];
  total: number;
  ok: boolean;
};

export type CurrencyItem = {
  coin_id: string;
  name: string;
  symbol: string;
  token_decimal: number;
  contract_address: string;
  withdrawal_eta: string[];
  colorful_image_url: string;
  gray_image_url: string;
  has_deposit_address_tag: boolean;
  min_balance: number;
  blockchain_symbol: string;
  trading_symbol: string;
  code: string;
  explorer: string;
  is_erc20: boolean;
  gas_limit: number;
  token_decimal_value: string;
  display_decimal: number;
  supports_legacy_address: boolean;
  deposit_address_tag_name: string;
  deposit_address_tag_type: string;
  num_confirmation_required: number;
};

export function getCurrenciesAPI() {
  return http.request<CurrencyResType>({
    url: "/currencies.json",
  });
}

type Rate = {
  amount: string;
  rate: string;
};

export type TierItem = {
  from_currency: string;
  to_currency: string;
  rates: Rate[];
  time_stamp: number;
};

type RateResType = {
  ok: boolean;
  warning: string;
  tiers: TierItem[];
};

export function getLiveRateAPI() {
  return http.request<RateResType>({
    url: "/live-rates.json",
  });
}

export type WalletItem = {
  currency: string;
  amount: number;
};

type WalletBalanceRes = {
  ok: boolean;
  warning: string;
  wallet: WalletItem[];
};

export function getBalanceAPI() {
  return http.request<WalletBalanceRes>({
    url: "/wallet-balance.json",
  });
}


