import { useState } from "react";
import { BadgeDollarSign } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type BestExchange = "chaos" | "divine" | null;

function App() {
  const [bestExchange, setBestExchange] = useState<BestExchange>(null);
  const [amountToSell, setAmountToSell] = useState<string>("");

  // Placeholder calculate function - returns random result
  const calculateBestExchange = (): BestExchange => {
    return Math.random() > 0.5 ? "chaos" : "divine";
  };

  const handleCalculate = () => {
    const result = calculateBestExchange();
    setBestExchange(result);
  };

  const handleInputChange = () => {
    setBestExchange(null);
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background p-8">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Chaos or Divines?
          </h1>
          <p className="text-muted-foreground mt-2">
            Enter exchange ratios to find the best conversion
          </p>
        </div>

        <div className="space-y-6">
          {/* Chaos Orbs : Your Currency */}
          <div className="space-y-2">
            <div
              className={`flex items-center gap-2 transition-all ${
                bestExchange === "chaos"
                  ? "ring-4 ring-green-500 rounded-lg p-2 bg-green-500/10"
                  : ""
              }`}
            >
              <InputGroup className="flex-1 h-20">
                <InputGroupAddon className="px-4">
                  <img
                    src="/images/chaos.webp"
                    alt="Chaos Orb"
                    className="size-16"
                  />
                </InputGroupAddon>
                <InputGroupInput
                  id="chaos-currency-chaos"
                  type="number"
                  placeholder="Chaos Orbs"
                  step="0.01"
                  className="text-2xl!"
                  onChange={handleInputChange}
                />
              </InputGroup>
              <span className="text-2xl text-muted-foreground">:</span>
              <InputGroup className="flex-1 h-20">
                <InputGroupAddon className="px-4">
                  <BadgeDollarSign className="size-16" />
                </InputGroupAddon>
                <InputGroupInput
                  id="chaos-currency-your"
                  type="number"
                  placeholder="Your Currency"
                  step="0.01"
                  className="text-2xl!"
                  onChange={handleInputChange}
                />
              </InputGroup>
            </div>
          </div>

          {/* Divine Orbs : Your Currency */}
          <div className="space-y-2">
            <div
              className={`flex items-center gap-2 transition-all ${
                bestExchange === "divine"
                  ? "ring-4 ring-green-500 rounded-lg p-2 bg-green-500/10"
                  : ""
              }`}
            >
              <InputGroup className="flex-1 h-20">
                <InputGroupAddon className="px-4">
                  <img
                    src="/images/divine.webp"
                    alt="Divine Orb"
                    className="size-16"
                  />
                </InputGroupAddon>
                <InputGroupInput
                  id="divine-currency-divine"
                  type="number"
                  placeholder="Divine Orbs"
                  step="0.01"
                  className="text-2xl!"
                  onChange={handleInputChange}
                />
              </InputGroup>
              <span className="text-2xl text-muted-foreground">:</span>
              <InputGroup className="flex-1 h-20">
                <InputGroupAddon className="px-4">
                  <BadgeDollarSign className="size-16" />
                </InputGroupAddon>
                <InputGroupInput
                  id="divine-currency-your"
                  type="number"
                  placeholder="Your Currency"
                  step="0.01"
                  className="text-2xl!"
                  onChange={handleInputChange}
                />
              </InputGroup>
            </div>
          </div>

          {/* Divine Orbs : Chaos Orbs */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <InputGroup className="flex-1 h-20">
                <InputGroupAddon className="px-4">
                  <img
                    src="/images/divine.webp"
                    alt="Divine Orb"
                    className="size-16"
                  />
                </InputGroupAddon>
                <InputGroupInput
                  id="divine-chaos-divine"
                  type="number"
                  placeholder="Divine Orbs"
                  step="0.01"
                  className="text-2xl!"
                  onChange={handleInputChange}
                />
              </InputGroup>
              <span className="text-2xl text-muted-foreground">:</span>
              <InputGroup className="flex-1 h-20">
                <InputGroupAddon className="px-4">
                  <img
                    src="/images/chaos.webp"
                    alt="Chaos Orb"
                    className="size-16"
                  />
                </InputGroupAddon>
                <InputGroupInput
                  id="divine-chaos-chaos"
                  type="number"
                  placeholder="Chaos Orbs"
                  step="0.01"
                  className="text-2xl!"
                  onChange={handleInputChange}
                />
              </InputGroup>
            </div>
          </div>

          {/* Amount to Sell */}
          <div className="flex items-center gap-4 pt-4">
            <Label
              htmlFor="amount-to-sell"
              className="text-lg whitespace-nowrap"
            >
              How many of your currency do you want to sell?
            </Label>
            <InputGroup className="h-16 flex-1">
              <InputGroupAddon className="px-4">
                <BadgeDollarSign className="size-8" />
              </InputGroupAddon>
              <InputGroupInput
                id="amount-to-sell"
                type="number"
                placeholder="Optional"
                step="0.01"
                value={amountToSell}
                onChange={(e) => {
                  setAmountToSell(e.target.value);
                  handleInputChange();
                }}
                className="text-xl!"
              />
            </InputGroup>
          </div>

          {/* Calculate Button */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={handleCalculate}
              size="lg"
              className="text-xl px-8 py-6"
            >
              Calculate Best Exchange
            </Button>
          </div>
        </div>

        {/* Result */}
        {/* <div className="text-center text-2xl text-muted-foreground">
          Best Exchange Rate
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-20">
                <div className="px-4 py-2 flex items-center gap-2 border-4 border-green-700 bg-green-700/20 rounded-md">
                  <img
                    src="/images/divine.webp"
                    alt="Divine Orb"
                    className="size-16"
                  />
                  <span className="text-2xl text-green-700 font-bold">
                    1 Divine Orb
                  </span>
                </div>
              </div>
              <span className="text-2xl text-muted-foreground">:</span>
              <div className="flex-1 h-20">
                <div className="px-4 py-2 flex items-center gap-2 border-4 border-green-700 bg-green-700/20 rounded-md">
                  <BadgeDollarSign className="size-16 text-green-700" />

                  <span className="text-2xl text-green-700 font-bold">
                    75 Your Currency
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
