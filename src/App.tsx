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

  const getChaosRate = (yours: number) => {
    return (parseFloat(chaosChaos) / yours).toLocaleString(undefined, {
      maximumFractionDigits: 3,
    });
  };

  const getDivineRate = (yours: number) => {
    return (
      (parseFloat(divineDivine) / yours) *
      (parseFloat(baseChaos) / parseFloat(baseDivine))
    ).toLocaleString(undefined, {
      maximumFractionDigits: 3,
    });
  };

  const getBestRate = () => {
    return bestExchange === "chaos"
      ? getChaosRate(parseFloat(chaosYours))
      : getDivineRate(parseFloat(divineYours));
  };

  const handleCalculate = () => {
    const result = calculateBestExchange();
    setBestExchange(result);
  };

  const handleInputChange = () => {
    setBestExchange(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCalculate();
  };

  return (
    <div className="flex min-h-svh flex-col items-center bg-background p-8">
      <div className="w-full max-w-3xl space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Chaos or Divines?
          </h1>
          <p className="text-muted-foreground mt-2">
            Enter exchange ratios to find the best conversion
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Chaos Orbs : Your Currency */}
          <div className="space-y-2">
            <div
              className={`transition-all ${
                bestExchange === "chaos"
                  ? "ring-4 ring-green-500 rounded-lg p-2 bg-green-500/10 space-y-2"
                  : ""
              }`}
            >
              {bestExchange === "chaos" && (
                <div className="text-center text-lg font-bold">
                  Best Exchange
                </div>
              )}
              {bestExchange && (
                <div
                  className={`text-center text-sm ${
                    bestExchange === "chaos"
                      ? "font-bold text-green-600"
                      : "pb-2 text-muted-foreground"
                  }`}
                >
                  <span className="font-bold">
                    {getChaosRate(parseFloat(chaosYours))}
                  </span>{" "}
                  Chaos per unit
                </div>
              )}
              <div className="flex items-center gap-2">
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
          </div>

          {/* Divine Orbs : Your Currency */}
          <div className="space-y-2">
            <div
              className={`transition-all ${
                bestExchange === "divine"
                  ? "ring-4 ring-green-500 rounded-lg p-2 bg-green-500/10 space-y-2"
                  : ""
              }`}
            >
              {bestExchange === "divine" && (
                <div className="text-center text-lg font-bold">
                  Best Exchange
                </div>
              )}
              {bestExchange && (
                <div
                  className={`text-center text-sm ${
                    bestExchange === "divine"
                      ? "font-bold text-green-600"
                      : "pb-2 text-muted-foreground"
                  }`}
                >
                  <span className="font-bold">
                    {getDivineRate(parseFloat(divineYours))}
                  </span>{" "}
                  Chaos per unit
                </div>
              )}
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
          </div>

          {/* Divine Orbs : Chaos Orbs */}
          <div className="space-y-2 pt-6 border-t">
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
            <Button type="submit" size="lg" className="text-xl px-8 py-6">
              Calculate Best Exchange
            </Button>
          </div>
        </form>

        {/* Results Section */}
        {bestExchange &&
          parseFloat(amountToSell) >= 1 &&
          (() => {
            let flooredOrbs: number;
            let flooredChaos: number;
            let adjustedYours: number;

            if (bestExchange === "chaos") {
              // Calculate floored Chaos Orbs
              flooredOrbs = Math.floor(
                (parseFloat(chaosChaos) / parseFloat(chaosYours)) *
                  parseFloat(amountToSell)
              );
              flooredChaos = flooredOrbs;
              // Recalculate Your Currency needed for that exact amount
              adjustedYours =
                flooredOrbs * (parseFloat(chaosYours) / parseFloat(chaosChaos));
            } else {
              // Calculate floored Divine Orbs
              flooredOrbs = Math.floor(
                (parseFloat(divineDivine) / parseFloat(divineYours)) *
                  parseFloat(amountToSell)
              );
              flooredChaos =
                flooredOrbs * (parseFloat(baseChaos) / parseFloat(baseDivine));
              // Recalculate Your Currency needed for that exact amount
              adjustedYours =
                flooredOrbs *
                (parseFloat(divineYours) / parseFloat(divineDivine));
            }

            const showRoundingNotice =
              adjustedYours - Math.floor(adjustedYours) >= 0.01;
            const roundedUpYours = Math.ceil(adjustedYours);
            const roundedUpRate = flooredChaos / roundedUpYours;
            return (
              <div className="mt-8 p-6 bg-green-500/10 border-4 border-green-500 rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-4">
                  Recommended Exchange
                </h2>
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center gap-2">
                    {bestExchange === "chaos" ? (
                      <>
                        <img
                          src="/images/chaos.webp"
                          alt="Chaos Orb"
                          className="size-12"
                        />
                        <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                          {flooredOrbs.toLocaleString()} Chaos
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
                            {flooredOrbs.toLocaleString()}{" "}
                          </span>
                          Divine
                        </span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">for</span>
                    <BadgeDollarSign className="size-12" />
                    <span className="text-3xl">
                      <span className="font-bold">
                        {adjustedYours.toLocaleString(undefined, {
                          maximumFractionDigits: 3,
                        })}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="text-center pt-2">
                  <span className="font-bold">{getBestRate()}</span> Chaos per
                  unit
                </div>
                {showRoundingNotice && (
                  <div className="text-center text-sm text-muted-foreground pt-8">
                    <p>
                      Note: If you want to round up to sell exactly{" "}
                      <span className="font-bold">
                        {roundedUpYours.toLocaleString()}
                      </span>{" "}
                      of your currency, <br />
                      your exchange rate will go down to{" "}
                      <span className="font-bold">
                        {roundedUpRate.toLocaleString(undefined, {
                          maximumFractionDigits: 3,
                        })}
                      </span>{" "}
                      Chaos per unit.
                    </p>
                  </div>
                )}
              </div>
            );
          })()}
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-8 pb-4 text-center text-sm text-muted-foreground">
        <p>
          Made by{" "}
          <a
            href="https://github.com/jakeboxer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Jake Card
          </a>
        </p>
        <p className="mt-2">
          {" "}
          <a
            href="https://github.com/jakeboxer/chaos-or-divines"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            View this project on GitHub
          </a>
        </p>
        <p className="mt-2 flex items-center justify-center gap-3">
          <a
            href="https://x.com/jakecard"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Twitter
          </a>
          <span>•</span>
          <a
            href="https://www.threads.com/@jake__card"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Threads
          </a>
          <span>•</span>
          <a
            href="https://bsky.app/profile/jakecard.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Bluesky
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
