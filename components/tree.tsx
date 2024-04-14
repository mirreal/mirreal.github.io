import { useEffect, useRef } from 'react';

function createTree(canvasElem: HTMLCanvasElement | null, width: number, height: number) {
  if (!canvasElem) return;

  const ctx = canvasElem.getContext('2d');

  const startX = width / 2;
  const startY = height * 0.98;
  const branchLength = width / 10;
  const branchWidth = width / 52;
  const angle = -Math.PI / 2;
  const depth = 12;

  drawTree(ctx, startX, startY, branchLength, angle, depth, branchWidth);

  function drawTree(ctx, startX, startY, length, angle, depth, branchWidth) {
    if (depth == 0) return;

    const MAX_ANGLE = Math.PI / 2;

    const rand = Math.random;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineCap = 'round';
    ctx.lineWidth = branchWidth;
    const endX = startX + length * Math.cos(angle);
    const endY = startY + length * Math.sin(angle);
    ctx.lineTo(endX, endY);

    if (depth <= 2) {
      ctx.strokeStyle = 'rgb(0,' + (((rand() * 64) + 64) >> 0) + ',0)';
    } else {
      ctx.strokeStyle = 'rgb(' + (((rand() * 64) + 64) >> 0) + ', 50, 25)';
    }
    ctx.stroke();

    depth -= 1;
    branchWidth *= 0.7;

    const subBranches = rand() < 0.9 ? 2 : 3;
    for (let i = 0; i < subBranches; i++) {
      const newAngle = angle + (rand() - 0.5) * MAX_ANGLE;
      const newLength = length * (0.7 + rand() * 0.3);
      drawTree(ctx, endX, endY, newLength, newAngle, depth, branchWidth);
    }
  }
}

function getCanvasSize() {
  const { innerWidth, innerHeight } = window;

  let height = 480;
  let width = 640;

  if (innerHeight > innerWidth * 1.3) {
    width = height * innerWidth / innerHeight;
    if (width < 320) width = 320;

    height = width;
  }

  return {
    width,
    height
  }
}

function createCanvas(elem) {
  const canvasElem = document.createElement('canvas');

  const { width, height } = getCanvasSize();
  canvasElem.width = width;
  canvasElem.height = height;

  createTree(canvasElem, width, height);

  elem.appendChild(canvasElem);
}

export function Tree() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    createCanvas(canvasRef.current);
  }, []);

  return (
    <div ref={canvasRef} />
  )
}
