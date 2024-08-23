function SkillList({ src, skill }) {
    return (
      <span>
        <img src={src} alt="Checkmark icon" style={{width:"25px", maxWidth:"30px", height:"25px"}}/>
        <p>{skill}</p>
      </span>
    );
  }
  
  export default SkillList;