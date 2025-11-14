import { BadgeDollarSign } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

function App() {
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
                />
              </InputGroup>
            </div>
          </div>

          {/* Divine Orbs : Your Currency */}
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
                  id="divine-currency-divine"
                  type="number"
                  placeholder="Divine Orbs"
                  step="0.01"
                  className="text-2xl!"
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
                />
              </InputGroup>
            </div>
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
