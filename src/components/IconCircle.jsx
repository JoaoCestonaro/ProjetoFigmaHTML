const IconCircle = ({ icon: Icon, tone = 'primary', size = 48 }) => {
  const toneClass = tone !== 'primary' ? ` icon-circle--${tone}` : ''
  const style = { width: size, height: size }

  return (
    <div className={`icon-circle${toneClass}`} style={style}>
      {Icon && <Icon aria-hidden="true" />}
    </div>
  )
}

export default IconCircle
