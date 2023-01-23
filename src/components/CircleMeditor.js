import React from 'react'

const CircleMeditor = ({ percentage, circleWidth }) => {
  const radius = 85
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100

  return (
    <div className='box'>

      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-background"
        />

        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2} )`}
        />

        {/* Nome do hardware  {Nome}*/}
        <text
          x="50%"
          y="25%"
          dy="0.3em"
          textAnchor='middle'
          className='hardware-name'
        >
          temp    
        </text>


        {/* valor variavel  {valor} */}
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor='middle'
          className='circle-text'
        >
          {percentage}
        </text>

        {/* Escala de variação  {escala} */}
        <text
          x="75%"
          y="54%"
          dy="0.3em"
          textAnchor='middle'
          className='symbol'

        >%</text>


      </svg>
    </div>
  )
}

export default CircleMeditor
