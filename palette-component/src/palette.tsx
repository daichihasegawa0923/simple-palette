import React, { useEffect, useState } from 'react';

export interface CanvasProps
{
  width?: string;
  height?: string;
}

export const NormalCompontnt = () => (<><div>normal component</div></>);


export const Palette: React.FC<CanvasProps> = ({ width, height }: CanvasProps) =>
{
  const w = width ?? '400px';
  const h = height ?? '300px';

  const [ ctx, setCtx ] = useState<CanvasRenderingContext2D | null>(null);
  const [ isDrag, setIsDrag ] = useState(false);

  useEffect(() =>
  {
    const ctx2d = (document.getElementById('myCanvas') as HTMLCanvasElement)?.getContext('2d');
    setCtx(ctx2d);
  }, []);

  const onDrag = () =>
  {
    if (!ctx) return;
    ctx.beginPath();
    setIsDrag(true);
  };

  const inDrag = (x: number, y: number) =>
  {
    if (!isDrag) return;
    ctx?.lineTo(x, y);
    ctx?.stroke();
  }

  const endDrag = () =>
  {
    ctx?.closePath();
    setIsDrag(false);
  }

  return (
    <>
      <canvas width={ w } height={ h } id='myCanvas' onClick={ () => { onDrag() } } onMouseMove={ (e) => { inDrag(e.pageX, e.pageY) } } onMouseUp={ () => endDrag() } />
    </>);
}