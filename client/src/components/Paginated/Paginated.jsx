import React from "react";
import style from "./Paginated.module.css";

const Paginated = ({currentPage, pokemonsPerPage, allPokemons, paginated}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i)
    }
    const prevPage = () => {
        if(currentPage !== 1){
            paginated(currentPage-1)
        }
    }
    const nextPage = () => {
        const lastPage = Math.ceil(allPokemons / pokemonsPerPage)
        if(currentPage !== lastPage){
            paginated(currentPage+1)
        }
    }
    return(
        <nav className={style.paginatedContainer}>
            <button className={style.paginatedButton} onClick={prevPage}>Prev</button>
            {pageNumbers?.map(number => (
                <button className={currentPage === number ? style.paginatedButtonActive : style.paginatedButton} onClick={()=> paginated(number)}>{number}</button>
            ))}
            <button className={style.paginatedButton} onClick={nextPage} >Next</button>
        </nav>
    )
}

export default Paginated;