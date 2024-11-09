export interface AdviceSlip {
  slip: {
    id: number;
    advice: string;
  };
}

export interface AdviceContextType {
  slipId: number;
  advice: string;
  loading: boolean;
  error: string | null;
  fetchAdvice: () => void;
}
