"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ANIMATION } from "@/lib/constants";

export function useSectionInView() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: ANIMATION.inViewMargin });

  return { ref, isInView };
}
