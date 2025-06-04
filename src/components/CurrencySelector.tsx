
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { useCurrency, Currency } from "@/contexts/CurrencyContext";

const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();

  const handleCurrencyChange = (value: string) => {
    setCurrency(value as Currency);
  };

  return (
    <Select value={currency} onValueChange={handleCurrencyChange}>
      <SelectTrigger className="w-[80px] h-8">
        <SelectValue placeholder={currency} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="GBP">£ GBP</SelectItem>
        <SelectItem value="USD">$ USD</SelectItem>
        <SelectItem value="GHS">GH₵ GHS</SelectItem>
        <SelectItem value="NGN">₦ NGN</SelectItem>
        <SelectItem value="EUR">€ EUR</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CurrencySelector;
