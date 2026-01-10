import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="mb-16 mt-12">
      <h2 className="text-xl uppercase tracking-wider text-secondary mb-6">
        Projects
      </h2>

      <div className="grid gap-4">
        <ProjectCard
          title="Virtual Omnichord"
          stack={["STM32", "C", "React", "TypeScript", "WebSerial", "AWS"]}
          description="STM32 firmware handling GPIO and ADC inputs, streamed via UART to a React frontend with WebSerial-driven audio synthesis. Containerized and deployed on AWS EC2."
          sourceUrl="https://github.com/ericoletsgo/Theromnihord"
        />

        <ProjectCard
          title="Custom Macropad"
          stack={["KiCad", "QMK Firmware", "C", "Fusion 360", "RP2040"]}
          description="End-to-end hardware design of a 6-key mechanical macropad. Two-layer PCB with 2x3 switch matrix, anti-ghosting diodes, SK6812MINI-E reverse-mount RGB LEDs daisy-chained over a single data line, EC11 rotary encoder, and SSD1306 OLED over I2C. QMK firmware with encoder mapping and RGB driver. 3D-printed enclosure designed in Fusion 360."
          sourceUrl="https://github.com/ericoletsgo/Grammalyse"
          imageUrl="/images/hackpad-pcb.png"
          imageAlt="Custom macropad 3D render from KiCad"
        />

        <ProjectCard
          title="Exoplanet Classifier"
          stack={["Python", "FastAPI", "Docker", "scikit-learn", "AWS"]}
          description="Ensemble ML pipeline processing NASA Kepler data with 82.3% accuracy. Containerized and deployed on AWS EC2."
          sourceUrl="https://github.com/ericoletsgo/Exoplanet-Classifier"
        />

        <ProjectCard
          title="Air Quality Monitor"
          stack={["STM32", "Embedded C", "I2C", "UART", "Sensor Drivers", "Signal Processing", "Real Time Systems", "Fusion 360"]}
          description="Modular embedded firmware for air quality monitoring: custom BME680 driver implementing Bosch compensation algorithms, WMA signal conditioning, checksummed UART protocol for multi-device networks, and SSD1306 OLED graphics rendering.

"
          sourceUrl="https://github.com/ericoletsgo/ECE-198-main"
          imageUrl="/images/air-quality-monitor.png"
          imageAlt="Air quality monitor prototype with wiring and AQI display"
        />
        
      </div>
    </section>
  );
}

