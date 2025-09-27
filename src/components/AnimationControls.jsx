function AnimationControls({ isAnimating, animationSpeed, onToggle, onSpeedChange }) {
  const speeds = [
    { value: 0.5, label: '0.5x' },
    { value: 1, label: '1x' },
    { value: 1.5, label: '1.5x' },
    { value: 2, label: '2x' }
  ]

  return (
    <div className="animation-controls">
      <button onClick={onToggle} className="toggle-btn">
        {isAnimating ? '⏸️ Pause Dance' : '▶️ Start Dance'}
      </button>
      
      <div className="speed-controls">
        <span className="speed-label">Speed:</span>
        {speeds.map(speed => (
          <button
            key={speed.value}
            onClick={() => onSpeedChange(speed.value)}
            className={`speed-btn ${animationSpeed === speed.value ? 'active' : ''}`}
          >
            {speed.label}
          </button>
        ))}
      </div>
      
      <p className="keyboard-hint">
        💡 Press <kbd>Space</kbd> to toggle animation
      </p>
    </div>
  )
}

export default AnimationControls