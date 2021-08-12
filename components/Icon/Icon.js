import styles from './Icon.module.scss'

/**
 * @param {String} [classes]
 * @param {String} type - `font` for a FontAwesome icon; `image` for a
 * raster/vector image.
 * @parap {String} icon - If using type `font`, pass the FontAwesome icon
 * classes. If using type `image`, pass the path to the image in the `/public`
 * dir.
 * @param {String} [size] - `xl`
 * @param {Function} [onClick]
 */
export default function Icon({ classes = '', type, icon, size = 'm', onClick }) {
  if (!type) throw new Error('<Icon /> requires the type prop.')
  if (!icon) throw new Error('<Icon /> requires the icon prop.')

  switch (type) {
    case 'image':
      icon = <img src={icon} className={styles.img} />
      break

    case 'font':
      icon = <i className={`${styles.i} ${icon}`} />
      break

    default:
      icon = <></>
  }

  return (
    <div
      className={`${styles.Icon} ${classes} ${styles[size]}`}
      onClick={onClick}
    >
      {icon}
    </div>
  )
}
