import { useEffect, useMemo, useState } from 'react'
import { LuDroplet, LuRefreshCw, LuType, LuAccessibility } from 'react-icons/lu'

const COLOR_OPTIONS = [
  { value: 'default', label: 'Cores padrão' },
  { value: 'protanopia', label: 'Protanopia' },
  { value: 'deuteranopia', label: 'Deuteranopia' },
  { value: 'tritanopia', label: 'Tritanopia' },
]

const FONT_OPTIONS = [0.95, 1, 1.05, 1.1]

const getStoredValue = (key, defaultValue) => {
  if (typeof window === 'undefined') return defaultValue
  const stored = window.localStorage.getItem(key)
  return stored ?? defaultValue
}

const AccessibilityControls = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [colorVision, setColorVision] = useState(() => getStoredValue('infocursos-color-vision', 'default'))
  const [fontScale, setFontScale] = useState(() => Number(getStoredValue('infocursos-font-scale', '1')))

  useEffect(() => {
    if (colorVision === 'default') {
      document.documentElement.removeAttribute('data-color-vision')
    } else {
      document.documentElement.setAttribute('data-color-vision', colorVision)
    }

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('infocursos-color-vision', colorVision)
    }
  }, [colorVision])

  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', String(fontScale))
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('infocursos-font-scale', String(fontScale))
    }
  }, [fontScale])

  const canIncrease = useMemo(() => fontScale < FONT_OPTIONS[FONT_OPTIONS.length - 1], [fontScale])
  const canDecrease = useMemo(() => fontScale > FONT_OPTIONS[0], [fontScale])

  const handleIncreaseFont = () => {
    if (canIncrease) {
      const index = FONT_OPTIONS.findIndex((value) => value === fontScale)
      setFontScale(FONT_OPTIONS[index + 1])
    }
  }

  const handleDecreaseFont = () => {
    if (canDecrease) {
      const index = FONT_OPTIONS.findIndex((value) => value === fontScale)
      setFontScale(FONT_OPTIONS[index - 1])
    }
  }

  const handleReset = () => {
    setColorVision('default')
    setFontScale(1)
  }

  const handleToggle = () => {
    setIsOpen((state) => !state)
  }

  const handleOpenVlibras = () => {
    const button = document.querySelector('[vw-access-button] button, [vw-access-button]')
    if (button) {
      button.click()
    }
  }

  return (
    <div className={`accessibility-drawer${isOpen ? ' is-open' : ''}`}>
      <button
        type="button"
        className="accessibility-tab"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        onClick={handleToggle}
      >
        <LuAccessibility size={20} />
        <span>Acessibilidade</span>
      </button>

      <aside id="accessibility-panel" className="accessibility-panel" aria-hidden={!isOpen}>
        <button type="button" className="accessibility-button" onClick={handleReset} title="Restaurar padrões">
          <LuRefreshCw size={18} />
          <span>Resetar</span>
        </button>

        <div className="accessibility-group" role="group" aria-label="Controle de fontes">
          <span className="accessibility-label">
            <LuType size={18} /> Tamanho
          </span>
          <div className="accessibility-actions">
            <button
              type="button"
              className="accessibility-button"
              onClick={handleDecreaseFont}
              disabled={!canDecrease}
              title="Diminuir fonte"
            >
              A-
            </button>
            <span className="accessibility-value">{Math.round(fontScale * 100)}%</span>
            <button
              type="button"
              className="accessibility-button"
              onClick={handleIncreaseFont}
              disabled={!canIncrease}
              title="Aumentar fonte"
            >
              A+
            </button>
          </div>
        </div>

        <label className="accessibility-group" htmlFor="color-vision-select">
          <span className="accessibility-label">
            <LuDroplet size={18} /> Cores para daltonismo
          </span>
          <select
            id="color-vision-select"
            className="accessibility-select"
            value={colorVision}
            onChange={(event) => setColorVision(event.target.value)}
          >
            {COLOR_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <div className="accessibility-group">
          <span className="accessibility-label">Tradução em Libras</span>
          <p className="accessibility-hint">Clique no botão abaixo para abrir o assistente VLibras.</p>
          <button type="button" className="accessibility-button" onClick={handleOpenVlibras}>
            Ativar VLibras
          </button>
        </div>
      </aside>
    </div>
  )
}

export default AccessibilityControls
