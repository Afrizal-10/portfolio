"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {Children, cloneElement, useEffect, useRef, useState} from "react";

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full bg-[#060010] border-neutral-700 border-2 shadow-md ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) => cloneElement(child, {isHovered}))}
    </motion.div>
  );
}

function DockLabel({children, className = "", ...rest}) {
  const {isHovered} = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{opacity: 0, y: 0}}
          animate={{opacity: 1, y: -10}}
          exit={{opacity: 0, y: 0}}
          transition={{duration: 0.2}}
          className={`${className} absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-neutral-700 bg-[#060010] px-2 py-0.5 text-xs text-white`}
          role="tooltip"
          style={{x: "-50%"}}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({children, className = ""}) {
  return (
    <div className={`flex items-center justify-center text-white ${className}`}>
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className = "",
  spring = {mass: 0.4, stiffness: 120, damping: 14, restDelta: 0.01},
  magnification = 60,
  distance = 220,
  panelHeight = 64,
  dockHeight = 120,
  baseItemSize = 50,
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  return (
    <div
      style={{
        height: dockHeight,
        backgroundColor: "transparent",
        position: "fixed",
        left: 0,
        right: 0,
        zIndex: 50,
      }}
      className="
        flex justify-center items-center
        px-4 sm:px-6
        bottom-0 md:top-0 md:bottom-auto
      "
    >
      <motion.div
        onMouseMove={({pageX}) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`
          ${className}
          flex justify-center items-end
          w-full max-w-md
          gap-4 rounded-2xl
          border-neutral-700 border-2
          pb-2 px-6 shadow-lg backdrop-blur-md
        `}
        style={{
          height: panelHeight,
          overflow: "visible",
        }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </div>
  );
}
