import styles from './Search.module.css';
import { FilterIcon } from '../../assets/icons';
import { ActionButton } from '../../components';

function Search() {
  return (
    <>
      <input className={styles.s} type="search" placeholder='Search' />
      <ActionButton>
        <FilterIcon />
      </ActionButton>
    </>
  );
}

export default Search;
