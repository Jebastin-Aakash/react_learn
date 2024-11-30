import React from 'react'

const List_footer = ({length}) => {
    const year = new Date();
  return (
    <footer>
        <h3>bottom of {length} &copy; {length===1?"page":"pages"} {year.getFullYear()}</h3>
    </footer>
  )
}


// List_footer.defaultProps={
//     title:`bottom of the &copy; page ${year.getFullYear()}`
// }
export default List_footer