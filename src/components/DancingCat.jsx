import catSvg from '../assets/images/cat.svg'
import AnimationControls from './AnimationControls'
import { useAnimation } from '../hooks/useAnimation'
import '../styles/animations.css'

function DancingCat() {
  const { isAnimating, animationSpeed, toggleAnimation, changeSpeed } = useAnimation()

  const catStyle = {
    animationDuration: isAnimating ? `${2 / animationSpeed}s` : 'paused'
  }

  return (
    <div className="dancing-cat-container">
      <div className={`dancing-cat ${isAnimating ? 'dancing' : ''}`}>
        <img 
          src={catSvg} 
          alt="Dancing Cat" 
          style={catStyle}
        />
      </div>
      <AnimationControls
        isAnimating={isAnimating}
        animationSpeed={animationSpeed}
        onToggle={toggleAnimation}
        onSpeedChange={changeSpeed}
      />
    </div>
  )
}

export default DancingCat