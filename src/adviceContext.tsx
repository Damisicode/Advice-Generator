import { createContext, useState, useEffect, useContext } from "react";
import { AdviceContextType, AdviceSlip } from "./types";

export const AdviceContext = createContext<AdviceContextType | undefined>(
  undefined
);

export const useAdvice = () => {
  const context = useContext(AdviceContext);
  console.log(context);
  if (!context) {
    throw new Error("useAdvice must be used within an AdviceProvider");
  }
  return context;
};

export const AdviceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [slipId, setSlipId] = useState<number>(0);
  const [advice, setAdvice] = useState<string | "">("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAdvice = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) throw new Error("Failed to fetch advice");

      const data: AdviceSlip = await res.json();
      setAdvice(data.slip.advice);
      setSlipId(data.slip.id);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <AdviceContext.Provider
      value={{ slipId, advice, loading, error, fetchAdvice }}
    >
      {children}
    </AdviceContext.Provider>
  );
};
