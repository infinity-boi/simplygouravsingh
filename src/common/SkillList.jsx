function SkillList({ src, skill }) {
    return (
      <span>
        <img src={src} alt="Checkmark icon" style={{width:"25px"}}/>
        <p>{skill}</p>
      </span>
    );
  }
  
  export default SkillList;