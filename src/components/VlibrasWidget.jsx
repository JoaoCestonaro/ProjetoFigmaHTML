import { useEffect } from 'react'

const VlibrasWidget = () => {
  useEffect(() => {
    let attempts = 0
    const maxAttempts = 30

    const initWidget = () => {
      try {
        if (window?.VLibras?.Widget) {
          if (!window.__vlibrasWidgetInstance) {
            window.__vlibrasWidgetInstance = new window.VLibras.Widget('https://vlibras.gov.br/app')
            console.log('VLibras Widget initialized successfully')
            
            // Garantir que os eventos de clique funcionem corretamente
            setTimeout(() => {
              const pluginWrapper = document.querySelector('[vw-plugin-wrapper]')
              if (pluginWrapper) {
                pluginWrapper.style.pointerEvents = 'auto'
                // Garantir que todos os botões dentro do plugin funcionem
                const buttons = pluginWrapper.querySelectorAll('button, [onclick], .vw-btn-close, [class*="close"]')
                buttons.forEach(btn => {
                  btn.style.pointerEvents = 'auto'
                  btn.style.cursor = 'pointer'
                  btn.style.zIndex = '10001'
                })
              }
            }, 1000)
          }
          return true
        }
      } catch (error) {
        console.error('Error initializing VLibras Widget:', error)
      }
      return false
    }

    // Try to initialize immediately
    if (!initWidget()) {
      const interval = setInterval(() => {
        attempts += 1
        console.log(`VLibras initialization attempt ${attempts}/${maxAttempts}`)
        
        if (initWidget() || attempts >= maxAttempts) {
          clearInterval(interval)
          if (attempts >= maxAttempts) {
            console.warn('VLibras Widget failed to initialize after maximum attempts')
          }
        }
      }, 200)
      
      return () => clearInterval(interval)
    }

    return undefined
  }, [])

  return (
    <div className="vlibras-container" style={{ pointerEvents: 'none' }}>
      <div vw="true" className="enabled" style={{ pointerEvents: 'auto' }}>
        <div vw-access-button="true" className="active" style={{ pointerEvents: 'auto' }}></div>
        <div vw-plugin-wrapper="true" style={{ pointerEvents: 'auto' }}>
          <div className="vw-plugin-top-wrapper" style={{ pointerEvents: 'auto' }}></div>
        </div>
      </div>
    </div>
  )
}

export default VlibrasWidget
