import SingleCart from './SingleCart';
import SingleWC from './SingleWC';

function Content({ props, wc, total, setTotal }) {
  if (wc) {
    return (
      <>
        {props.map((item) => {
          return (
            <SingleWC
              key={item.id}
              props={item}
              total={total}
              setTotal={setTotal}
            />
          );
        })}
      </>
    );
  } else {
    return (
      <>
        {props.map((item) => {
          return (
            <SingleCart
              key={item.id}
              props={item}
            />
          );
        })}
      </>
    );
  }
}

export default Content;
