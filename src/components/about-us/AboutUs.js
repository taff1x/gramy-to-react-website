import { PersonCard } from "../../components";
import musicians from "../../data/musicians.json"
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles["container"]}>
      {
        musicians.map( (musician, key) => 
          (
            <PersonCard
              key={key}
              name={musician.name}
              imgUrl={musician.imgUrl}
              note={musician.note}
              fullNote={musician.fullNote}
            />
          )
        ) 
      }
    </div>
  );
};

export default AboutUs;
