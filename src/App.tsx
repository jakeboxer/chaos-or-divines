import { BadgeDollarSign } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background p-8">
      <div className="w-full max-w-md space-y-8">
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
            <Label htmlFor="chaos-currency">Chaos Orbs : Your Currency</Label>
            <div className="flex items-center gap-2">
              <InputGroup className="flex-1">
                <InputGroupAddon>
                  <img
                    src="/images/chaos.webp"
                    alt="Chaos Orb"
                    className="size-4"
                  />
                </InputGroupAddon>
                <InputGroupInput
                  id="chaos-currency-chaos"
                  type="number"
                  placeholder="Chaos"
                  step="0.01"
                />
              </InputGroup>
              <span className="text-muted-foreground">:</span>
              <InputGroup className="flex-1">
                <InputGroupAddon>
                  <BadgeDollarSign className="size-4" />
                </InputGroupAddon>
                <InputGroupInput
                  id="chaos-currency-your"
                  type="number"
                  placeholder="Your Currency"
                  step="0.01"
                />
              </InputGroup>
            </div>
          </div>

          {/* Divine Orbs : Your Currency */}
          <div className="space-y-2">
            <Label htmlFor="divine-currency">Divine Orbs : Your Currency</Label>
            <div className="flex items-center gap-2">
              <InputGroup className="flex-1">
                <InputGroupAddon>
                  <img
                    src="/images/divine.webp"
                    alt="Divine Orb"
                    className="size-4"
                  />
                </InputGroupAddon>
                <InputGroupInput
                  id="divine-currency-divine"
                  type="number"
                  placeholder="Divine"
                  step="0.01"
                />
              </InputGroup>
              <span className="text-muted-foreground">:</span>
              <InputGroup className="flex-1">
                <InputGroupAddon>
                  <BadgeDollarSign className="size-4" />
                </InputGroupAddon>
                <InputGroupInput
                  id="divine-currency-your"
                  type="number"
                  placeholder="Your Currency"
                  step="0.01"
                />
              </InputGroup>
            </div>
          </div>

          {/* Divine Orbs : Chaos Orbs */}
          <div className="space-y-2">
            <Label htmlFor="divine-chaos">Divine Orbs : Chaos Orbs</Label>
            <div className="flex items-center gap-2">
              <InputGroup className="flex-1">
                <InputGroupAddon>
                  <img
                    src="/images/divine.webp"
                    alt="Divine Orb"
                    className="size-4"
                  />
                </InputGroupAddon>
                <InputGroupInput
                  id="divine-chaos-divine"
                  type="number"
                  placeholder="Divine"
                  step="0.01"
                />
              </InputGroup>
              <span className="text-muted-foreground">:</span>
              <InputGroup className="flex-1">
                <InputGroupAddon>
                  <img
                    src="/images/chaos.webp"
                    alt="Chaos Orb"
                    className="size-4"
                  />
                </InputGroupAddon>
                <InputGroupInput
                  id="divine-chaos-chaos"
                  type="number"
                  placeholder="Chaos"
                  step="0.01"
                />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
