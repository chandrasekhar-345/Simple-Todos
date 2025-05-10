import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTOdo} = props
  const {id, title} = todoDetails

  const onDelete = () => {
    deleteTOdo(id)
  }

  return (
    <li className="list-container">
      <p className="paragraph">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
