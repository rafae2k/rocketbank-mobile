import { IconProps as RneuiProps } from '@rneui/themed';

export type IconProps = {
  handleClick?: () => void;
  type: RneuiProps['type'];
  color: RneuiProps['color'];
  size: RneuiProps['size'];
  iconName: RneuiProps['name'];
}