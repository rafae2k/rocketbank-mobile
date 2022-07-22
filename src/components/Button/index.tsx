import { Icon } from '@rneui/themed'
import { IconProps } from '../../types/IconTypes'
import * as S from './styles'

export type ButtonProps = {
  handleClick?: () => void
  label: string
  icon?: IconProps
  radius?: 'none' | 'full' | 'half'
  iconPosition?: 'left' | 'right'
  type?: 'filled' | 'outlined' | 'text'
  margin?: 'left' | 'right'
  operation?: 'buy' | 'sell'
  disabled?: boolean
}

export default function Button({
  operation,
  margin,
  type = 'filled',
  radius = 'half',
  iconPosition,
  label,
  icon,
  handleClick,
  ...rest
}: ButtonProps) {
  return (
    <S.Container
      onPress={handleClick}
      type={type}
      radius={radius}
      margin={margin}
      operation={operation}
      disabled={rest.disabled}
    >
      {icon && iconPosition === 'left' && (
        <Icon
          type={icon.type}
          name={icon.iconName}
          size={icon.size}
          color={icon.color}
        />
      )}

      <S.Label iconPosition={iconPosition} type={type} operation={operation}>
        {label}
      </S.Label>
      {icon && iconPosition === 'right' && (
        <Icon
          type={icon.type}
          name={icon.iconName}
          size={icon.size}
          color={icon.color}
        />
      )}
    </S.Container>
  )
}
