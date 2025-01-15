To solve this issue, consider the following options:

1. **Use a compatible library:** Search for alternative libraries that are specifically designed to work within Expo's managed workflow. This often involves checking the library's documentation to ensure it's compatible with Expo Go.

2. **Use EAS Build:** This is the recommended approach for apps that rely on libraries with native dependencies. EAS Build allows you to build a native version of your app suitable for testing on real devices or emulators, thus bypassing the limitations of Expo Go.

3. **Eject from Expo:** As a last resort, you can eject from Expo to fully utilize native modules. However, this will significantly increase the complexity of your project.