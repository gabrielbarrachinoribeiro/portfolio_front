'use client';

import { ReactLenis } from 'lenis/react';
import { forwardRef, type ReactNode } from 'react';
import 'lenis/dist/lenis.css';

const SmoothScroll = forwardRef<HTMLDivElement, { children: ReactNode }>(
  function SmoothScroll({ children }, ref) {
    return (
      <ReactLenis root options={{ anchors: true, autoRaf: true }}>
        <div ref={ref}>{children}</div>
      </ReactLenis>
    );
  },
);

export default SmoothScroll;
