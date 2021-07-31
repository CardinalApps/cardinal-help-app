export default function H2({ text, icon, iconType }) {
  switch (iconType) {
    case 'image':
      icon = <img src={icon} />
      break

    case 'font':
      icon = <i className={icon} />
      break

    default:
      icon = <></>
  }

  return (
    <h2>
      <span className="icon">
        {icon}
      </span>
      {text}
    </h2>
  )
}
