import { Canvas } from '@react-three/fiber'
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { Computer } from "../components/Computer" 


const Hero = () => {
  return (
    <section
      id="home"
     className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
        <HeroText />
      <ParallaxBackground />
      <figure className="absolute inset-0" style={{ width: "100vw", height: "100vh" }}>
    {/* <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
        <Computer />
        </Canvas>  */}
      </figure>
    </section>
  )
}

export default Hero
