import { writable } from "svelte/store";
import type { ToastOptions } from "./type";

const createToast = () => {
  const { subscribe, update } = writable([]);
  let count = 0;
  let defaults: Partial<ToastOptions> = {};
  const _opts = (obj: Partial<ToastOptions> = {}) => {
    defaults = {
      ...defaults,
      ...obj,
      theme: { ...defaults.theme, ...obj.theme },
    };
    return defaults;
  };
  const push = (msg: string, opts: Partial<ToastOptions> = {}) => {
    const entry = {
      id: ++count,
      msg,
      ...defaults,
      ...opts,
      theme: { ...defaults.theme, ...opts.theme },
    };
    update((n) => [...n, entry]);
    return count;
  };
  const pop = (id: number) => {
    update((n) => (id ? n.filter((item) => item.id !== id) : n.splice(1)));
  };
  return {
    subscribe,
    push,
    pop,
    _opts,
  };
};

export const toast = createToast();
