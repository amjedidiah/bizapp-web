import {
  FormEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export default function useSaveSettings() {
  const [submitText, setSubmitText] = useState("Save");
  const [loadStep, setLoadStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const interval = useRef<any>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setIsAnimating(true);
        setSubmitText("Saving...");

        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("Promise resolved after 5 seconds");
          }, 7000); // 5000 milliseconds = 5 seconds
        });
      } catch (error) {
      } finally {
        setIsAnimating(false);
        setSubmitText("Saved!");
      }
    },
    []
  );

  useEffect(() => {
    if (isAnimating)
      interval.current = setInterval(() => {
        setLoadStep((prev) => prev + 1);
      }, 1000);
    else {
      if (interval.current) {
        clearInterval(interval.current);
        setLoadStep(1);
      }
    }

    return () => clearInterval(interval.current);
  }, [isAnimating]);

  return { submitText, loadStep, handleSubmit, isAnimating };
}
