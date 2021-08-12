import Icon from '../Icon/Icon'

export default function H2({ className, text, icon, iconType }) {
  return (
    <h2 className={className}>
      {icon && <Icon type={iconType} icon={icon} />}
      {text}
    </h2>
  )
}
