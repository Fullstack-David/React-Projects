
export default function SearchItem(){
  return (
      <form
          className="searchForm"
          onSubmit={(e) => e.preventDefault()}>

          <label htmlFor="search">Search</label>
          <input
              type="text"
              id="search"
              role="searchbox"
              placeholder="Search items"
              value={search}
              onChange={(e) => setSearch(e.target.value)}        
          />
      </form>
  )
}

