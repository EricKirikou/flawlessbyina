
import React, { createContext, useContext, useState, useEffect } from "react";

export type Currency = "GBP" | "USD" | "GHS" | "NGN" | "EUR";

interface ExchangeRates {
  [key: string]: number;
}

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (amount: number | string) => string;
  currencySymbol: string;
}

// Exchange rates relative to GBP (1 GBP = X of currency)
const EXCHANGE_RATES: ExchangeRates = {
  GBP: 1,
  USD: 1.27,   // 1 GBP = 1.27 USD
  GHS: 16.36,  // 1 GBP = 16.36 Ghana Cedis
  NGN: 1914.57, // 1 GBP = 1914.57 Nigerian Naira
  EUR: 1.18,   // 1 GBP = 1.18 Euro
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  GBP: "£",
  USD: "$",
  GHS: "GH₵",
  NGN: "₦",
  EUR: "€",
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>("GBP");
  const [currencySymbol, setCurrencySymbol] = useState<string>(CURRENCY_SYMBOLS.GBP);

  useEffect(() => {
    setCurrencySymbol(CURRENCY_SYMBOLS[currency]);
  }, [currency]);

  const formatPrice = (amount: number | string): string => {
    const numericAmount = typeof amount === "string" 
      ? parseFloat(amount.replace(/[^0-9.]/g, "")) 
      : amount;
    
    if (isNaN(numericAmount)) return `${currencySymbol}0.00`;
    
    // Convert from GBP to selected currency
    const convertedAmount = numericAmount * EXCHANGE_RATES[currency];
    
    // Format based on currency
    return `${currencySymbol}${convertedAmount.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, currencySymbol }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
