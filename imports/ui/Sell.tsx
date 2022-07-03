import React, { useEffect, useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ItemsCollection } from '../api/items';

const SearchItem = ({ item, onSelect }) => {
    const onClick = () => {
        onSelect(item);
    }

    return (<div className="autocomplete-option" onClick={onClick}>{item.name}</div>)
}

const SearchItems = ({ items }) => {
    const [term, setTerm] = React.useState('');
    const [isSearching, setIsSearching] = React.useState(false);
    const itemList = term.length == 0 ? [] : items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) != -1);

    const onchange = (ev) => {
        setTerm(ev.target.value);
        if (term.length > 0)
            setIsSearching(true);
    }

    const onkeydown = (ev) => {
        if (ev.key === "Enter" && itemList.length > 0)
            onSelect(itemList[0]);
    }

    const onSelect = (item) => {
        setTerm(item.name);
        setIsSearching(false);
    }

    return (
        <div className="search-box">
            {/*<button>Weapons</button>
    <button>Armor</button>
    <button>Clothing</button>*/}
            <input placeholder="Search for an item..." value={term} onChange={onchange} onKeyDown={onkeydown} />
            {isSearching && <div className="autocomplete-box">
                {itemList.map(item => {
                    return (<SearchItem item={item} onSelect={onSelect} />)
                })}
            </div>
        </div>
    )
};

const SellNew = () => {
    //const [items, setItems] = useState([]);
    const items = useTracker((() => ItemsCollection.find({}).fetch()));
    console.log(items);

    return (
        <>
            <div className="sell-new">
                {/* <input placeholder="Item Name" /> */}
                <SearchItems items={items} />
                {/* <button>Select Item...</button> */}
                <select>
                    <option>Default</option>
                </select>
                <input placeholder="Quantity" />
                <input placeholder="Price (aUEC)" />
                <button>List</button>
            </div>

            {/* <div className="sell-new-item-modal">
                {items.map(item => <div className='tile' key={item.name}>{item.name}</div>)}
            </div> */}
        </>
    )
}

export const Sell = () => {
    return (
        <div className="sell">
            <SellNew />
        </div>
    );
};
