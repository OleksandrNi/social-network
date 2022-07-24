import { useState } from "react";

const Pagination = (props) => {
  const [portionNumber, setPortionNumber] = useState(1);

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  if (pagesCount > 100) {
    pagesCount = 98;
  }
  const portionCount = Math.ceil(pagesCount/props.portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
  const rightPortionPageNumber = portionNumber * props.portionSize;

  const pages = Array(pagesCount).fill(0).map((_, i) => i + 1)
  
  return <div className="friends">
    <div className="friends__page">
      {portionNumber > 1 &&
      <button onClick={ () => {setPortionNumber(portionNumber - 1)} }>PREV</button>}
      {pages
      .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
      .map(page => 
        <span 
          className={props.currentPage === page 
          ? "friends__page-selected" 
          : "friends__page-unselected"} 
          key={page}
          onClick={() => { props.onPageChanged(page) }}
          >
            {page}
        </span>
        )
      }
      {portionCount > portionNumber &&
      <button onClick={ () => {setPortionNumber(portionNumber + 1)} }>NEXT</button>}
      {portionCount === portionNumber &&
      <button onClick={ () => {setPortionNumber(1)} }>HOME</button>}

    </div>
  </div>
}

export default Pagination