import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const SiliconDie: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 360;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3.2, 5.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for the entire chip assembly
    const chipGroup = new THREE.Group();
    scene.add(chipGroup);

    // 1. Ceramic Package Base (Dark Matte Substrate)
    const baseGeo = new THREE.BoxGeometry(3.2, 0.18, 3.2);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x111114,
      roughness: 0.7,
      metalness: 0.2,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    chipGroup.add(baseMesh);

    // Substrate Edge Wireframe Hairline
    const baseEdges = new THREE.EdgesGeometry(baseGeo);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x2e2e33,
      linewidth: 1,
    });
    const baseLines = new THREE.LineSegments(baseEdges, lineMat);
    baseMesh.add(baseLines);

    // 2. Central Silicon Die (Elevated glossy dark slab)
    const dieGeo = new THREE.BoxGeometry(1.6, 0.12, 1.6);
    const dieMat = new THREE.MeshStandardMaterial({
      color: 0x050507,
      roughness: 0.18,
      metalness: 0.85,
    });
    const dieMesh = new THREE.Mesh(dieGeo, dieMat);
    dieMesh.position.y = 0.14;
    chipGroup.add(dieMesh);

    // Die Hairline Golden Rim
    const dieEdges = new THREE.EdgesGeometry(dieGeo);
    const dieRimMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.7,
    });
    const dieLines = new THREE.LineSegments(dieEdges, dieRimMat);
    dieMesh.add(dieLines);

    // 3. Etched Micro-Trace Grid on Die Surface
    const traceGroup = new THREE.Group();
    const traceMat = new THREE.LineBasicMaterial({
      color: 0xd97706,
      transparent: true,
      opacity: 0.45,
    });

    // Create algorithmic bus traces
    for (let i = -0.65; i <= 0.65; i += 0.18) {
      // Horizontal traces
      const hPoints = [
        new THREE.Vector3(-0.7, 0.21, i),
        new THREE.Vector3(0.7, 0.21, i),
      ];
      const hGeo = new THREE.BufferGeometry().setFromPoints(hPoints);
      traceGroup.add(new THREE.Line(hGeo, traceMat));

      // Vertical traces
      const vPoints = [
        new THREE.Vector3(i, 0.21, -0.7),
        new THREE.Vector3(i, 0.21, 0.7),
      ];
      const vGeo = new THREE.BufferGeometry().setFromPoints(vPoints);
      traceGroup.add(new THREE.Line(vGeo, traceMat));
    }

    // Concentric core cache rectangle
    const corePoints = [
      new THREE.Vector3(-0.35, 0.215, -0.35),
      new THREE.Vector3(0.35, 0.215, -0.35),
      new THREE.Vector3(0.35, 0.215, 0.35),
      new THREE.Vector3(-0.35, 0.215, 0.35),
      new THREE.Vector3(-0.35, 0.215, -0.35),
    ];
    const coreGeo = new THREE.BufferGeometry().setFromPoints(corePoints);
    const coreLineMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.9,
    });
    traceGroup.add(new THREE.Line(coreGeo, coreLineMat));
    chipGroup.add(traceGroup);

    // 4. Gold Bond Pins / Pads along edges (Nod to BGA / QFP package)
    const pinGeo = new THREE.BoxGeometry(0.1, 0.04, 0.22);
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xd4a359,
      metalness: 0.9,
      roughness: 0.3,
    });

    const numPinsPerSide = 8;
    const pinSpan = 2.6;
    const pinStep = pinSpan / (numPinsPerSide - 1);

    for (let i = 0; i < numPinsPerSide; i++) {
      const pos = -pinSpan / 2 + i * pinStep;

      // North side
      const pNorth = new THREE.Mesh(pinGeo, pinMat);
      pNorth.position.set(pos, 0, -1.65);
      chipGroup.add(pNorth);

      // South side
      const pSouth = new THREE.Mesh(pinGeo, pinMat);
      pSouth.position.set(pos, 0, 1.65);
      chipGroup.add(pSouth);

      // East side
      const pEast = new THREE.Mesh(pinGeo, pinMat);
      pEast.rotation.y = Math.PI / 2;
      pEast.position.set(1.65, 0, pos);
      chipGroup.add(pEast);

      // West side
      const pWest = new THREE.Mesh(pinGeo, pinMat);
      pWest.rotation.y = Math.PI / 2;
      pWest.position.set(-1.65, 0, pos);
      chipGroup.add(pWest);
    }

    // 5. Lighting: Restrained, sharp, photographic
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Cool key light from above
    const keyLight = new THREE.DirectionalLight(0xe4e4e7, 2.0);
    keyLight.position.set(4, 8, 5);
    scene.add(keyLight);

    // Warm amber rim light reflecting ECE / hardware identity
    const amberRimLight = new THREE.DirectionalLight(0xf59e0b, 1.6);
    amberRimLight.position.set(-5, 3, -4);
    scene.add(amberRimLight);

    // Soft fill
    const fillLight = new THREE.DirectionalLight(0x71717a, 0.5);
    fillLight.position.set(0, -3, 2);
    scene.add(fillLight);

    // Interactive mouse tracking
    let targetRotX = 0.45;
    let targetRotY = 0.55;
    let currentRotX = 0.45;
    let currentRotY = 0.55;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotX = 0.45 + y * 0.75;
      targetRotY = 0.55 + x * 0.9;
    };

    const handleMouseEnter = () => setIsInteracting(true);
    const handleMouseLeave = () => {
      setIsInteracting(false);
      targetRotX = 0.45;
      targetRotY = 0.55;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Render loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth lerp towards target rotation
      currentRotX += (targetRotX - currentRotX) * 0.06;
      currentRotY += (targetRotY - currentRotY) * 0.06;

      chipGroup.rotation.x = currentRotX;
      chipGroup.rotation.y = currentRotY + Math.sin(time * 0.4) * 0.06;

      // Subtle breath on the die height
      dieMesh.position.y = 0.14 + Math.sin(time * 1.5) * 0.005;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      baseGeo.dispose();
      baseMat.dispose();
      baseEdges.dispose();
      lineMat.dispose();
      dieGeo.dispose();
      dieMat.dispose();
      dieEdges.dispose();
      dieRimMat.dispose();
      pinGeo.dispose();
      pinMat.dispose();
      traceMat.dispose();
      coreGeo.dispose();
      coreLineMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        aria-label="Interactive 3D Silicon Microchip Die"
      />

      {/* Micro Spec Overlay */}
      <div className="absolute top-2 left-2 pointer-events-none flex items-center gap-1.5 px-2 py-0.5 bg-black/80 border border-white/[0.08] text-[10px] font-mono text-[#808088]">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        <span>DIE // FCBGA-1248</span>
      </div>

      <div className="absolute bottom-2 right-2 pointer-events-none text-[9px] font-mono text-[#505058] tracking-widest uppercase">
        {isInteracting ? '[ ACTIVE TELEMETRY ]' : '[ MOUSE TO ROTATE ]'}
      </div>
    </div>
  );
};
