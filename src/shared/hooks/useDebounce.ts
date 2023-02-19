import {useCallback, useEffect, useRef} from "react";

type Timer = ReturnType<typeof setTimeout>
type SomeFunction = (...args: any[]) => void

export function useDebounce<Func extends SomeFunction>(callback: Func, timeoutMs = 1000) {
    const timer = useRef<Timer>();

    useEffect(() => {
        return () => {
            if (!timer.current) return;
            clearTimeout(timer.current);
        };
    }, []);

    return useCallback(((...args) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, timeoutMs);
    }) as Func, [callback, timeoutMs]);
}