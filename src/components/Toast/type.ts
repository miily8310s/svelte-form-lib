export declare type EasingFunction = (t: number) => number;

export interface FlyParams {
  delay?: number;
  duration?: number;
  easing?: EasingFunction;
  x?: number;
  y?: number;
  opacity?: number;
}

export interface SvelteToastOptions {
  duration: number;
  dismissable: boolean;
  initial: number;
  progress: number;
  reversed: boolean;
  intro: FlyParams;
  theme: { [key: string]: string };
  msg: string;
}
