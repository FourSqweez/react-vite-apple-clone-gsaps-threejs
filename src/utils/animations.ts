import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  timeline: gsap.core.Timeline;
  rotationRef: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>;
  rotationState: number;
  firstTarget: "#view1" | "#view2";
  secondTarget: "#view1" | "#view2";
  animationProps: gsap.TweenVars;
}

interface GsapProps {
  target: string;
  animationProps: gsap.TweenVars;
  scrollProps?: ScrollTrigger.Vars;
}

export const animateWithGsap = ({
  target,
  animationProps,
  scrollProps,
}: GsapProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

export const animateWithGsapTimeline = ({
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps,
}: Props) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};
