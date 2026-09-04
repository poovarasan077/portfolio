"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * `false` during SSR and the first render, `true` afterwards.
 *
 * Preferred over the `useEffect(() => setMounted(true), [])` idiom: it avoids
 * the cascading render that `react-hooks/set-state-in-effect` flags, and reads
 * the value from React's own hydration boundary rather than reconstructing it.
 */
export function useIsHydrated(): boolean {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
