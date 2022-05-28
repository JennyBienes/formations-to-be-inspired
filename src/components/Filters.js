import '../stylesheets/filters.css';

const Filters = (props) => {

    const handleSubmit = (ev) => {
        if (ev.key === 'Enter') {
            ev.preventDefault();
        }
    };

    return (
        <div className="main__filters">
            <form className="form__search" onKeyDown={handleSubmit}>
                <input
                    className="input__search"
                    type="text"
                    placeholder="Qué deseas ver hoy"
                    id="filterName"
                    value={props.filterName}
                    onChange={props.handleFilterName}
                />
            </form >
            <div className="select__filter">
                    <label htmlFor="filterCategory"> O busca por categoría</label>
                    <select
                        className="select__input"
                        name="filterCategory"
                        id="filterCategory"
                        value={props.filterCategory}
                        onChange={props.handleFilterCategory}
                    >
                        <option value="">Todos</option>
                        <option value="Inspire">Inspire</option>
                        <option value="Evolve">Evolve</option>
                        <option value="Empower">Empower</option>
                        <option value="Connect">Connect</option>
                    </select>
            </div>
        </div>
    );
};

export default Filters;