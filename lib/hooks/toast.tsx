import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/solid";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext, FC, useRef } from "react";

type ToastType = "error" | "success";

type DispatchToast = (
  type: ToastType,
  message: string,
  duration?: number
) => void;

interface ToastContext {
  dispatchToast: DispatchToast;
}

interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

const ToastContext = createContext({} as ToastContext);

export const useToast = () => useContext(ToastContext);

export const ToastProvider: FC = ({ children }) => {
  //   const toastRef = useRef<HTMLDivElement>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dispatchToast: DispatchToast = (type, message, duration = 3000) => {
    const t: Toast = {
      id: Math.random(),
      type,
      message,
    };

    setToasts((ts) => [...ts, t]);

    setTimeout(() => {
      removeToast(t);
    }, duration);
  };

  const removeToast = (toastToRemove: Toast) => {
    setToasts((ts) => ts.filter((t) => t.id !== toastToRemove.id));
  };

  const addToast = () => {
    dispatchToast(
      Math.random() < 0.5 ? "error" : "success",
      `my random message`,
      30000
    );
  };

  return (
    <ToastContext.Provider
      value={{
        dispatchToast,
      }}
    >
      <div className="h-full relative">
        {children}
        <div className="absolute right-4 bottom-4 flex flex-col gap-y-1">
          {toasts.map((toast, index) => (
            <div
              key={index}
              className="flex flex-row rounded-full bg-black p-2 justify-center w-fit"
            >
              <div className="h-6 aspect-square [&>svg]:fill-white">
                {toast.type === "success" ? (
                  <CheckCircleIcon />
                ) : (
                  <ExclamationCircleIcon />
                )}
              </div>
              <p className="text-white px-2">{toast.message}</p>
            </div>
          ))}
          {/* <button onClick={addToast}>Add toast</button> */}
        </div>
      </div>
    </ToastContext.Provider>
  );
};
