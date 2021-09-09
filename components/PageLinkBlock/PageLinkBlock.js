import Link from 'next/link'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { random, sample } from 'lodash'
import styles from './PageLinkBlock.module.scss'

export default function PageLinkBlock({ title, icon, iconType, url }) {
  const [isHovering, setIsHovering] = useState(false)

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

  /**
   * Returns a random degree for the roatation on hover. No degree between (-1)
   * and (1) will be returned, because they produce little visual effect.
   * 
   * @param {number} maxLeft - Maximum degrees of left rotation. Use a positive number.
   * @param {number} maxRight - Maximum degrees of right rotation. Use a positive number.
   */
  const randomDegree = (maxLeft, maxRight) => {    
    return sample(['left', 'right']) === 'left'
      ? random(-maxLeft, -1)
      : random(1, maxRight)
  }

  const hoverSpring = useSpring({
    transform: isHovering ? `rotate(${randomDegree(3, 3)}deg)` : 'rotate(0deg)',
    config: { mass: 1, tension: 180, friction: 12, velocity: 0.05 }
  })

  return (
    <animated.div
      className={styles.PageLinkBlock}
      style={hoverSpring}
      onMouseEnter={() => {if (!isHovering) setIsHovering(true)}}
      onMouseLeave={() => {if (isHovering) setIsHovering(false)}}
    >
      <div className={styles.icon}>
        {icon}
      </div>

      <Link href={url}>
        <a>
          <span>{title}</span>
        </a>
      </Link>
    </animated.div>
  )
}
