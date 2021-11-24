import React　from 'react';

export interface CanvasProps{
    width?: string;
    height?: string;
}

export const NormalCompontnt = () => (<><div>normal component</div></>);

export const Palette = ({ width, height }: CanvasProps) =>
{
    const w  = width ?? '400px';
    const h  = height ?? '300px';

    return (
        <>
        <canvas width={w} height={h} id='myCanvas'/>
        <script>
          var canvas = document.getElementById("myCanvas");
          var ctx = canvas.getContext("2d");ctx.beginPath();
          ctx.rect(20, 40, 50, 50);
          ctx.fillStyle = "#FF0000";
          ctx.fill();
          ctx.closePath();
        </script>
        </>);
}