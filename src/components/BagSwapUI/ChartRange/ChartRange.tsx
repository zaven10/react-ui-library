import React from 'react'

import { Bar, BarChart, ResponsiveContainer } from 'recharts'

import { ReactComponent as RangeHandleIcon } from '@/assets/svg/range-handle-icon.svg'

import { IChartRange } from './IChartRange.interface'

import { useChartRange } from './useChartRange'

export const ChartRange: React.FC<IChartRange> = ({ data }) => {
  const { percent, containerRef, onMouseDownHandler, setIsMouseDown } =
    useChartRange()

  return (
    <div
      className="h-[213px] relative w-full"
      ref={containerRef}
      onMouseMove={(e) => e.preventDefault()}
    >
      <div
        className="absolute bg-[#0F111680] top-0 bottom-0 right-0 transition-all rounded-tr-lg z-10"
        style={{ width: percent }}
        onMouseDown={onMouseDownHandler}
      >
        <div
          onMouseDown={() => setIsMouseDown(true)}
          onMouseUp={() => setIsMouseDown(false)}
        >
          <RangeHandleIcon className="absolute -left-5 top-0 cursor-pointer" />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%" className="z-0">
        <BarChart height={213} barSize={6} barGap={0} data={data}>
          <Bar
            dataKey="value"
            shape={(props: any) => (
              <g>
                <rect
                  x={props.x}
                  y={props.y}
                  fill={props.payload.color}
                  width={props.width}
                  height={props.height}
                  rx="0"
                />
              </g>
            )}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
