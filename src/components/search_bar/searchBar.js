import React, { useContext, useState } from 'react';
import Context from '../common/Context';
import styles from './search-bar-css-modules.module.css';


const SearchBar = () => {

    const { filters, dispatchFilter } = useContext(Context);
    const [filter, setFilter] = useState('');
    const [disabled, setDisabled] = useState(true);

    const addFilters = () => {
        dispatchFilter({type: 'Add_NEW_FILTER', payload: filter });
        setFilter('');
        setDisabled(true);
    }

    const onChange = (event) => {
        let value = event.target.value;
        setDisabled(!value.trim());
        setFilter(value.trim());
    }

    const clearItemFilter = (filter) => {
        let pos = filters.indexOf(filter);
        filters.splice(pos,1);
        dispatchFilter({type: 'DEL_FILTER', payload: [...filters] });
    }

    const renderFilter = (filter, index) => (
        <li key={index} className={styles.search_item}>{filter} <span onClick={() => clearItemFilter(filter)} className={styles.search_item_close}>x</span></li>
    )

    return (
        
        <div className={styles.search_content}>
            <ul className={styles.search_item_filter}>
                    {filters.map((filter, index)=>renderFilter(filter,index))}
            </ul>
            <div className={styles.search_item_search}>
                    <input value={filter} onChange={onChange} type="text" name="" />
                    <input disabled={disabled} onClick={addFilters} type="button" value="SEARCH"/>
            </div>
        </div>

    )

}

export default SearchBar;

