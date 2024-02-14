import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.eurobin1A',
  appName: 'Eurovision Bingo',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
