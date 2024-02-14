import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.eurovision.app',
  appName: 'eurovision_bingo',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
};

export default config;
