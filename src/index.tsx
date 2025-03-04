import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'b-lang-ts-library' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type BLangTsLibraryProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'BLangTsLibraryView';

export const BLangTsLibraryView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<BLangTsLibraryProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
