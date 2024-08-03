import styles from './ProjectsStyles.module.css';
import antiboring from '../../assets/anti-boring.png';
import healthtracker from '../../assets/health-tracker.jpg';
import synergylink from '../../assets/synergy-link.jpg';
import meomoryallocation from '../../assets/memory-allocation.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={antiboring}
          link="https://github.com/infinity-boi/Anti-Boring-android-app-BORED-API"
          h3="Anti Boring App"
          p="Android Application"
          des="Anti boring app provides random tasks to the user to get rid of boredom"
        />
        <ProjectCard
          src={healthtracker}
          link="https://github.com/infinity-boi/Health-Tracker-and-Recommender"
          h3="Health Tracker"
          p="Python Application"
          des="Health Tracker helps in finding the possible disease based on the provided symptoms"
        />
        <ProjectCard
          src={synergylink}
          link="https://github.com/infinity-boi/synergy-link"
          h3="Synergy Link"
          p="MERN Website"
          des="Synergy Link helps connect like-minded people using the MBTI personality types compatiblity"
        />
        <ProjectCard
          src={meomoryallocation}
          link="https://github.com/infinity-boi/Contiguous-Memory-Allocation-Simulation"
          h3="Memory Allocation Simulation"
          p="C Program"
          des="A simulation program to depict the allocation of process into the static memory blocks"
        />
      </div>
    </section>
  );
}

export default Projects;