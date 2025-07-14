import {useRef, useEffect, useCallback} from "react";
import {gsap} from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import {FaGithub} from "react-icons/fa";

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_GLOW_COLOR = "12, 10, 13";
const MOBILE_BREAKPOINT = 768;

const ParticleCard = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);

  const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
    const el = document.createElement("div");
    el.className = "particle";
    el.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: rgba(${color}, 1);
      box-shadow: 0 0 6px rgba(${color}, 0.6);
      pointer-events: none;
      z-index: 100;
      left: ${x}px;
      top: ${y}px;
    `;
    return el;
  };

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const {width, height} = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({length: particleCount}, () =>
      createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor
      )
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) {
      initializeParticles();
    }
    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          {scale: 0, opacity: 0},
          {scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)"}
        );

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);
      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;
    const element = cardRef.current;
    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
    };
    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
    };
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{...style, position: "relative", overflow: "hidden"}}
    >
      {children}
    </div>
  );
};

const MagicBento = ({
  projects = [],
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT;

  useEffect(() => {
    AOS.init({duration: 800, once: true});
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={isMobile ? index * 150 : 0}
        >
          <ParticleCard
            className="bg-white p-0 rounded-2xl text-black shadow-lg hover:-translate-y-1 ring-2 ring-transparent hover:ring-gray-700 hover:shadow-[0_0_15px_5px_#0c0a0d] transition-all duration-300"
            particleCount={particleCount}
            glowColor={glowColor}
            disableAnimations={isMobile}
          >
            <div className="rounded-t-2xl overflow-hidden">
              <img
                src={project.foto}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
            </div>

            <div className="flex flex-col p-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm opacity-80 mb-2">{project.desc}</p>

              {project.icons?.length > 0 && (
                <div className="flex items-center flex-wrap gap-2 text-xl mt-2">
                  <span className="text-sm text-gray-500">Tech:</span>
                  {project.icons.map((icon, i) => (
                    <span
                      key={i}
                      className="p-2 rounded-full bg-gray-100 text-black shadow hover:scale-105 transition"
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              )}

              {(project.repo || project.repoFE || project.repoBE) && (
                <div className="mt-3 text-sm text-gray-600 flex flex-col gap-2">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm hover:bg-gray-200 transition w-fit"
                    >
                      <FaGithub /> GitHub Repo
                    </a>
                  )}
                  {project.repoFE && (
                    <a
                      href={project.repoFE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm hover:bg-gray-200 transition w-fit"
                    >
                      <FaGithub /> Frontend Repo
                    </a>
                  )}
                  {project.repoBE && (
                    <a
                      href={project.repoBE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm hover:bg-gray-200 transition w-fit"
                    >
                      <FaGithub /> Backend Repo
                    </a>
                  )}
                </div>
              )}
            </div>
          </ParticleCard>
        </div>
      ))}
    </div>
  );
};

export default MagicBento;
