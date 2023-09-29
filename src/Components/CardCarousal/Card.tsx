import mecanix from "../../assets/mechanix.png";
import styles from  "./CardCarousal.module.css";
const Card = () => {
  return (
    <div className={styles.card_design}>
      <img src={mecanix} alt="" />
      <small>
        Lorem ipsum dolor sit amet consectetur. Mi turpis metus dictum
        sollicitudin bibendum vestibulum. Eros in non amet aenean leo habitant
        pulvinar aliquam pharetra. Pharetra diam a ultricies molestie donec.
        Ultrices egestas feugiat nibh purus lorem.
      </small>
      <p>Juanito Perez</p>
    </div>
  );
};

export default Card;
