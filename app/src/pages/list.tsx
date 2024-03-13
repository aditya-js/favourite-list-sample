import { useCallback, useEffect } from "react";
import { rootReducer, setLists, type ItemT, type storeT } from "../store";
import { useDispatch, useSelector } from "react-redux";
import Card, { Header } from "../common";

const { setFavorite } = rootReducer.actions;

export default function List() {
  const list = useSelector((state: storeT) => {
    return state?.list?.list;
  });

  const page = useSelector((state: storeT) => {
    return state?.list?.page;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (list && list.length < 1) {
      // @ts-expect-error
      dispatch(setLists(1));
    }
    const onScroll = () => {
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
      ) {
        // @ts-expect-error
        dispatch(setLists(page + 1));
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [page]);

  const handleClick = useCallback((item: ItemT) => {
    // @ts-expect-error
    dispatch(setFavorite(item));
  }, []);

  return (
    <div>
      <Header to="/" toPath="Back" title="List" />
      <ul className="ul">
        {list &&
          list.map((item: ItemT) => {
            return <Card key={item.id} item={item} handleClick={handleClick} />;
          })}
      </ul>
    </div>
  );
}
