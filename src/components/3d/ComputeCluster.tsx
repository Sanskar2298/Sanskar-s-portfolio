import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ComputeCluster: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 360;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 4.5, 7);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Main group
    const clusterGroup = new THREE.Group();
    scene.add(clusterGroup);

    // --- Node definitions: Distributed compute cluster topology ---
    const nodePositions = [
      // Core cluster ring
      new THREE.Vector3(0, 0, 0),         // Central orchestrator
      new THREE.Vector3(2.2, 0.3, 0),     // Node A
      new THREE.Vector3(-2.2, 0.3, 0),    // Node B
      new THREE.Vector3(0, 0.3, 2.2),     // Node C
      new THREE.Vector3(0, 0.3, -2.2),    // Node D
      // Outer relay nodes
      new THREE.Vector3(1.6, 0.6, 1.6),   // Relay 1
      new THREE.Vector3(-1.6, 0.6, 1.6),  // Relay 2
      new THREE.Vector3(1.6, 0.6, -1.6),  // Relay 3
      new THREE.Vector3(-1.6, 0.6, -1.6), // Relay 4
    ];

    const nodeMeshes: THREE.Mesh[] = [];
    const nodeGlows: THREE.Mesh[] = [];

    // Create compute nodes
    nodePositions.forEach((pos, idx) => {
      const isCenter = idx === 0;
      const size = isCenter ? 0.38 : 0.22;

      // Node core — glossy dark cube
      const nodeGeo = new THREE.BoxGeometry(size, size, size);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: isCenter ? 0x0a0a0f : 0x111118,
        roughness: isCenter ? 0.15 : 0.25,
        metalness: 0.85,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pos);
      clusterGroup.add(nodeMesh);
      nodeMeshes.push(nodeMesh);

      // Golden edge wireframe
      const edgeGeo = new THREE.EdgesGeometry(nodeGeo);
      const edgeMat = new THREE.LineBasicMaterial({
        color: isCenter ? 0xf59e0b : 0xd97706,
        transparent: true,
        opacity: isCenter ? 0.9 : 0.55,
      });
      const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
      nodeMesh.add(edgeLines);

      // Ambient glow sphere
      const glowGeo = new THREE.SphereGeometry(size * 1.8, 16, 16);
      const glowMat = new THREE.MeshBasicMaterial({
        color: isCenter ? 0xf59e0b : 0xd97706,
        transparent: true,
        opacity: 0.04,
      });
      const glowMesh = new THREE.Mesh(glowGeo, glowMat);
      glowMesh.position.copy(pos);
      clusterGroup.add(glowMesh);
      nodeGlows.push(glowMesh);
    });

    // --- Connection lines between nodes (data links) ---
    const connections: [number, number][] = [
      [0, 1], [0, 2], [0, 3], [0, 4], // Center to cardinal
      [1, 5], [1, 7],  // Node A to relays
      [2, 6], [2, 8],  // Node B to relays
      [3, 5], [3, 6],  // Node C to relays
      [4, 7], [4, 8],  // Node D to relays
      [5, 6], [7, 8],  // Relay crosslinks
    ];

    const connectionLines: THREE.Line[] = [];
    connections.forEach(([a, b]) => {
      const points = [nodePositions[a], nodePositions[b]];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xd97706,
        transparent: true,
        opacity: 0.2,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      clusterGroup.add(line);
      connectionLines.push(line);
    });

    // --- Data packet particles traveling along connections ---
    const packetGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.9,
    });

    interface Packet {
      mesh: THREE.Mesh;
      fromIdx: number;
      toIdx: number;
      progress: number;
      speed: number;
    }

    const packets: Packet[] = [];
    // Create packets for each connection
    connections.forEach(([a, b]) => {
      const mesh = new THREE.Mesh(packetGeo, packetMat.clone());
      clusterGroup.add(mesh);
      packets.push({
        mesh,
        fromIdx: a,
        toIdx: b,
        progress: Math.random(),
        speed: 0.3 + Math.random() * 0.4,
      });
    });

    // --- Base platform grid ---
    const gridHelper = new THREE.GridHelper(8, 20, 0x1a1a1f, 0x111115);
    gridHelper.position.y = -0.3;
    clusterGroup.add(gridHelper);

    // --- Hexagonal platform base ---
    const platformGeo = new THREE.CylinderGeometry(3.5, 3.5, 0.06, 6);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0e,
      roughness: 0.6,
      metalness: 0.3,
      transparent: true,
      opacity: 0.7,
    });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -0.3;
    clusterGroup.add(platform);

    // Platform edge glow
    const platformEdge = new THREE.EdgesGeometry(platformGeo);
    const platformEdgeMat = new THREE.LineBasicMaterial({
      color: 0xd97706,
      transparent: true,
      opacity: 0.25,
    });
    platform.add(new THREE.LineSegments(platformEdge, platformEdgeMat));

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xe4e4e7, 2.2);
    keyLight.position.set(5, 10, 6);
    scene.add(keyLight);

    const amberRimLight = new THREE.DirectionalLight(0xf59e0b, 1.4);
    amberRimLight.position.set(-6, 4, -5);
    scene.add(amberRimLight);

    const fillLight = new THREE.DirectionalLight(0x71717a, 0.4);
    fillLight.position.set(0, -3, 3);
    scene.add(fillLight);

    // --- Interactive mouse tracking ---
    let targetRotX = 0.35;
    let targetRotY = 0.55;
    let currentRotX = 0.35;
    let currentRotY = 0.55;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotX = 0.35 + y * 0.6;
      targetRotY = 0.55 + x * 0.8;
    };

    const handleMouseEnter = () => setIsInteracting(true);
    const handleMouseLeave = () => {
      setIsInteracting(false);
      targetRotX = 0.35;
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

    // --- Render loop ---
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth lerp rotation
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      clusterGroup.rotation.x = currentRotX;
      clusterGroup.rotation.y = currentRotY + Math.sin(time * 0.3) * 0.05;

      // Animate node pulses (subtle breathing)
      nodeMeshes.forEach((mesh, idx) => {
        const phase = time * 1.2 + idx * 0.8;
        const scale = 1 + Math.sin(phase) * 0.04;
        mesh.scale.set(scale, scale, scale);
      });

      // Animate glow pulses
      nodeGlows.forEach((glow, idx) => {
        const phase = time * 1.5 + idx * 0.6;
        const mat = glow.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.03 + Math.sin(phase) * 0.02;
      });

      // Animate data packets along connections
      packets.forEach((pkt) => {
        pkt.progress += pkt.speed * 0.008;
        if (pkt.progress > 1) {
          pkt.progress = 0;
          // Reverse direction
          const tmp = pkt.fromIdx;
          pkt.fromIdx = pkt.toIdx;
          pkt.toIdx = tmp;
        }
        const from = nodePositions[pkt.fromIdx];
        const to = nodePositions[pkt.toIdx];
        pkt.mesh.position.lerpVectors(from, to, pkt.progress);

        // Fade near endpoints
        const mat = pkt.mesh.material as THREE.MeshBasicMaterial;
        const edge = Math.min(pkt.progress, 1 - pkt.progress);
        mat.opacity = Math.min(1, edge * 6);
      });

      // Subtle connection line pulse
      connectionLines.forEach((line, idx) => {
        const mat = line.material as THREE.LineBasicMaterial;
        mat.opacity = 0.15 + Math.sin(time * 2 + idx * 0.4) * 0.08;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Dispose geometries and materials
      nodeMeshes.forEach((m) => {
        (m.geometry as THREE.BufferGeometry).dispose();
        (m.material as THREE.Material).dispose();
      });
      nodeGlows.forEach((m) => {
        (m.geometry as THREE.BufferGeometry).dispose();
        (m.material as THREE.Material).dispose();
      });
      connectionLines.forEach((l) => {
        (l.geometry as THREE.BufferGeometry).dispose();
        (l.material as THREE.Material).dispose();
      });
      packets.forEach((p) => {
        p.mesh.geometry.dispose();
        (p.mesh.material as THREE.Material).dispose();
      });
      platformGeo.dispose();
      platformMat.dispose();
      platformEdge.dispose();
      platformEdgeMat.dispose();
      packetGeo.dispose();
      packetMat.dispose();
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
        aria-label="Interactive 3D Distributed Compute Cluster Visualization"
      />

      {/* Telemetry Overlay */}
      <div className="absolute top-2 left-2 pointer-events-none flex items-center gap-1.5 px-2 py-0.5 bg-black/80 border border-white/[0.08] text-[10px] font-mono text-[#808088]">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>CLUSTER // 9 NODES ACTIVE</span>
      </div>

      <div className="absolute bottom-2 right-2 pointer-events-none text-[9px] font-mono text-[#505058] tracking-widest uppercase">
        {isInteracting ? '[ INSPECTING TOPOLOGY ]' : '[ MOUSE TO ROTATE ]'}
      </div>
    </div>
  );
};
