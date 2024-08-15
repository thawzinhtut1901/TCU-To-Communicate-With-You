import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 animate-spin" />
      Please wait
    </Button>
  );
};

export function Creating() {
  return (
    <Button
      disabled
    >
      <Loader2 className="mr-2 h-4 animate-spin" />
      Creating, Please Wait!
    </Button>
  );
};