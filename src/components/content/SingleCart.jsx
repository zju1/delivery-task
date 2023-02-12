import styles from './content.module.css';

function SingleCart({ props }) {
  return (
    <div className={styles.singleFood}>
      <div className={styles.wrap}>
        <div className={styles.img}>
          <img
            src={props.img}
            alt={props.name}
          />
        </div>
        <div className={styles.foodInfo}>
          <h3>{props.name}</h3>
          <p>{props.restaurant}</p>
        </div>
      </div>
      <div className={styles.foodPrice}>
        <span>${props.price}</span>
      </div>
    </div>
  );
}

export default SingleCart;
