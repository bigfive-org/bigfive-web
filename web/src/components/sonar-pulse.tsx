'use client';

import { FC, ReactNode, useMemo } from 'react';
import { parseToRgba } from 'color2k';
import clsx from 'clsx';
import { useIsSSR } from '@react-aria/ssr';

export interface SonarPulseProps {
  children: ReactNode;
  icon?: ReactNode;
  size?: number;
  circlesCount?: number;
  playState?: 'running' | 'paused';
  color?: string;
}

export const SonarPulse: FC<SonarPulseProps> = ({
  children,
  color = '#FF4ECD',
  icon,
  size = 80,
  circlesCount = 3
}) => {
  const isSSR = useIsSSR();

  const initialSizeFactor = 1.5;
  const circleSize = size * initialSizeFactor;

  const rgbaColors = useMemo(() => {
    const alpha = 0.4;
    const length = circlesCount;
    const factor = alpha / circlesCount;

    return Array.from({ length }).map((_, i) => {
      const alphaFactor = alpha - i * factor;
      let rgbaColor = parseToRgba(color);

      rgbaColor[3] = alphaFactor;

      return rgbaColor;
    });
  }, [circlesCount, color]);

  const renderCircles = useMemo(() => {
    const circles = [];

    for (let i = 1; i < circlesCount; i++) {
      circles.push(
        <div
          key={i}
          className={clsx('circle', `circle-${i}`, 'absolute', {
            'animate-pulse': true
          })}
          style={{
            width: `${size * (initialSizeFactor + i)}px`,
            height: `${size * (initialSizeFactor + i)}px`,
            borderRadius: '50%',
            top: `calc(${size * (initialSizeFactor + i)}px / 2 * -1)`,
            left: `calc(${size * (initialSizeFactor + i)}px / 2 * -1)`,
            border: `1px solid rgba(${rgbaColors[i - 1]})`,
            background: `linear-gradient(-180deg, rgba(${rgbaColors[i]}) 20%, hsl(var(--nextui-background)) 100%)`,
            animationPlayState: 'running',
            animationDelay: `${i * 0.5}s`
          }}
        />
      );
    }

    return circles;
  }, [rgbaColors, circlesCount]);

  if (isSSR) {
    return null;
  }

  return (
    <div className='relative inline-block'>
      <div
        className='relative flex items-center justify-center text-center rounded-full bg-transparent'
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {icon}
      </div>
      {children}
      <div className='absolute top-1/2 left-1/2 overflow-visible -z-10'>
        <div
          className='absolute rounded-full animate-pulse'
          style={{
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            top: `calc(${circleSize}px / 2 * -1)`,
            left: `calc(${circleSize}px / 2 * -1)`,
            border: `1.5px solid rgba(${rgbaColors[0]})`,
            background: `linear-gradient(-180deg, rgba(${rgbaColors[0]}) 40%, hsl(var(--nextui-background)) 100%)`,
            animationPlayState: 'running',
            animationDelay: '1s'
          }}
        />
        {renderCircles}
      </div>
    </div>
  );
};
