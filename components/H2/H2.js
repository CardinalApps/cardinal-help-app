import Icon from '../Icon/Icon'

export default function H2({ text, icon, iconType }) {
  return (
    <h2>
      {icon && <Icon type={iconType} icon={icon} />}
      {text}
    </h2>
  )
}
