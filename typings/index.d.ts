// support NodeJS modules without type definitions
/* eslint-disable */
declare module '*';

declare let ENV: string;
declare let HMR: boolean;
declare let System: SystemJS;

interface SystemJS {
  import: (path?: string) => Promise<any>;
}

interface GlobalEnvironment {
  ENV: string;
  HMR: boolean;
  SystemJS: SystemJS;
  System: SystemJS;
}

// Extend typings
type Global = GlobalEnvironment;
