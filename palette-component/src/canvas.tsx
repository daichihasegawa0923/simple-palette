import React, { useEffect, useState } from 'react';
import {Palette} from './palette';

export interface CanvasProps
{
  width?: string;
  height?: string;
}

export const Canvas: React.FC<CanvasProps> = ({ width, height }: CanvasProps) =>
{
  const w = width ?? '500px';
  const h = height ?? '500px';

  const [ color, setColor ] = useState('#000000');

  const [ ctx, setCtx ] = useState<CanvasRenderingContext2D | null>(null);

  const [ canvasElement, setCanvasElement ] = useState<HTMLElement | null>(null);

  const [ lineWidth, setLineWidth ] = useState(1.0);

  useEffect(() =>
  {
    const element = document.getElementById('simple-palette-canvas');
    setCanvasElement(element);
    const ctx2d = (element as HTMLCanvasElement)?.getContext('2d');
    setCtx(ctx2d);
  }, []);

  const startDrag = () =>
  {
    if (!ctx) return;
    ctx.beginPath();
  };

  const inDrag = (x: number, y: number) =>
  {
    if (!canvasElement) return;
    const rect = canvasElement.getBoundingClientRect();
    const dx = ~~(x - rect.left);
    const dy = ~~(y - rect.top);
    ctx?.lineTo(dx, dy);
    if (ctx)
    {
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
    }
    ctx?.stroke();
  }

  const endDrag = () =>
  {
    ctx?.closePath();
  }

  const clear = () =>
  {
    ctx?.clearRect(0, 0, canvasElement?.clientWidth ?? 0, canvasElement?.clientHeight ?? 0);
  }

  const changeLineWidth = (i: number) =>
  {
    setLineWidth(i);
  }

  return (
    <>
      <div>
        <div style={ { border: '1px solid #ccc', width: w } }>
          <div>tool custom</div>
          <div style={ { display: 'flex'} }>
            <div style={{padding: '0px 8px 0px 8px'}}>
              <h5>thickness</h5>
              <input type='radio' name='thickness' value='small' onClick={ () => { changeLineWidth(1.0) } } defaultChecked /><a style={ { fontSize: 10 } }>●</a><br />
              <input type='radio' name='thickness' value='medium' onClick={ () => { changeLineWidth(2.0) } } /><a style={ { fontSize: 20 } }>●</a><br />
              <input type='radio' name='thickness' value='large' onClick={ () => { changeLineWidth(3.0) } } /><a style={ { fontSize: 30 } }>●</a>
            </div>
            <div style={{padding: '0px 8px 0px 8px'}}>
              <h5>color palette</h5>
              <Palette onChangeColor={setColor} />
            </div>
            <div style={{padding: '0px 8px 0px 8px'}}>
              <h5>other</h5>
              <button onClick={ () => clear() }>clear</button>
            </div>
          </div>
        </div>
        <canvas width={ w } height={ h } id='simple-palette-canvas'
          onClick={ (e) => { startDrag() } }
          onMouseMove={ (e) => { if (e.buttons !== 1) { return; } inDrag(e.clientX, e.clientY); } }
          onMouseUp={ () => endDrag() }
          onMouseOut={ () => endDrag() }
          onMouseLeave={ () => endDrag() }
          style={ { border: '1px solid #ccc' } }
        />
      </div>
    </>);
}