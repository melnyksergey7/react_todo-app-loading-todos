import classNames from 'classnames';
import { FilteredParams } from '../types/FilteredParams';
import { Todo } from '../types/Todo';

interface Props {
  filter: FilteredParams,
  setFilter: (newFilter: FilteredParams) => void,
  todos: Todo[],
}

export const TodoFilter: React.FC<Props> = ({
  filter,
  setFilter,
  todos,
}) => {
  function handleClickAll(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setFilter(FilteredParams.all);
  }

  function handleClickActive(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setFilter(FilteredParams.active);
  }

  function handleClickCompleted(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setFilter(FilteredParams.completed);
  }

  return (
    <footer className="todoapp__footer">
      <span className="todo-count">
        {`${todos.length} items left`}
      </span>

      {/* Active filter should have a 'selected' class */}
      <nav className="filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: filter === FilteredParams.all,
          })}
          onClick={handleClickAll}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: filter === FilteredParams.active,
          })}
          onClick={handleClickActive}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: filter === FilteredParams.completed,
          })}
          onClick={handleClickCompleted}
        >
          Completed
        </a>
      </nav>

      {/* don't show this button if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
      >
        Clear completed
      </button>
    </footer>
  );
};
