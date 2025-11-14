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

  // Exchange ratio inputs
  const [chaosChaos, setChaosChaos] = useState<string>("");
  const [chaosYours, setChaosYours] = useState<string>("");
  const [divineDivine, setDivineDivine] = useState<string>("");
  const [divineYours, setDivineYours] = useState<string>("");
  const [baseDivine, setBaseDivine] = useState<string>("");
  const [baseChaos, setBaseChaos] = useState<string>("");

  // Calculate best exchange based on the three ratios
  const calculateBestExchange = (): BestExchange => {
    const chaosChaosVal = parseFloat(chaosChaos);
    const chaosYoursVal = parseFloat(chaosYours);
    const divineDivineVal = parseFloat(divineDivine);
    const divineYoursVal = parseFloat(divineYours);
    const baseDivineVal = parseFloat(baseDivine);
    const baseChaosVal = parseFloat(baseChaos);

    const vals = [
      chaosChaosVal,
      chaosYoursVal,
      divineDivineVal,
      divineYoursVal,
      baseDivineVal,
      baseChaosVal,
    ];

    // Validate all values are numbers and greater than 0.
    if (vals.some((val) => isNaN(val) || val <= 0)) return null;

    // Calculate how much Chaos you get per 1 of Your Currency via each path
    // Path 1: Direct conversion to Chaos
    const chaosPerYours = chaosChaosVal / chaosYoursVal;

    // Path 2: Convert to Divine, then express in Chaos terms
    const divinePerYours = divineDivineVal / divineYoursVal;
    const chaosViaDiv = (divinePerYours * baseChaosVal) / baseDivineVal;

    // Compare: which gives more Chaos per Your Currency?
    return chaosPerYours > chaosViaDiv ? "chaos" : "divine";
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
                  value={chaosChaos}
                  onChange={(e) => {
                    setChaosChaos(e.target.value);
                    handleInputChange();
                  }}
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
                  value={chaosYours}
                  onChange={(e) => {
                    setChaosYours(e.target.value);
                    handleInputChange();
                  }}
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
                  value={divineDivine}
                  onChange={(e) => {
                    setDivineDivine(e.target.value);
                    handleInputChange();
                  }}
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
                  value={divineYours}
                  onChange={(e) => {
                    setDivineYours(e.target.value);
                    handleInputChange();
                  }}
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
                  value={baseDivine}
                  onChange={(e) => {
                    setBaseDivine(e.target.value);
                    handleInputChange();
                  }}
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
                  value={baseChaos}
                  onChange={(e) => {
                    setBaseChaos(e.target.value);
                    handleInputChange();
                  }}
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
                step="1"
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

          {/* Results Section */}
          {bestExchange && parseFloat(amountToSell) >= 1 && (
            <div className="mt-8 p-6 bg-green-500/10 border-4 border-green-500 rounded-lg">
              <h2 className="text-2xl font-bold text-center mb-4">
                Recommended Exchange
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  {bestExchange === "chaos" ? (
                    <>
                      <img
                        src="/images/chaos.webp"
                        alt="Chaos Orb"
                        className="size-12"
                      />
                      <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                        {(
                          (parseFloat(chaosChaos) / parseFloat(chaosYours)) *
                          parseFloat(amountToSell)
                        ).toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}{" "}
                        Chaos Orbs
                      </span>
                    </>
                  ) : (
                    <>
                      <img
                        src="/images/divine.webp"
                        alt="Divine Orb"
                        className="size-12"
                      />
                      <span className="text-3xl text-green-600 dark:text-green-400">
                        <span className="font-bold">
                          {(
                            (parseFloat(divineDivine) /
                              parseFloat(divineYours)) *
                            parseFloat(amountToSell)
                          ).toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}{" "}
                        </span>
                        Divine Orbs
                      </span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl">for</span>
                  <BadgeDollarSign className="size-12" />
                  <span className="text-3xl">
                    <span className="font-bold">
                      {parseFloat(amountToSell).toLocaleString()}
                    </span>{" "}
                    Your Currency
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
