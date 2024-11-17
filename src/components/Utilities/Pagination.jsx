const Pagination = ({page, lastPage, setPage}) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    
    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }
    return (
        <div className="flex justify-center items-center py-5 px-6 gap-5 text-color-primary text-xl">
        {page <= 1 ? null :
            <button onClick={handlePrevPage} className="bg-color-accent p-2 px-5 rounded-sm transition-all hover:bg-color-secondary hover:text-color-accent">PREV</button>
        }
            <p>{page} of {lastPage}</p>
        {page >= lastPage ? null : 
            <button onClick={handleNextPage} className="bg-color-accent p-2 px-5 rounded-sm transition-all hover:bg-color-secondary hover:text-color-accent">NEXT</button>
        }
        </div>
    )
}


export default Pagination