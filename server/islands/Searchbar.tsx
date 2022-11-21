import { useState } from "preact/hooks";

const ItemSearchResult = ({ item, onSelect }) => {
    const onClick = () => {
        onSelect(item);
    }

    return (
        <div className="autocomplete-option" onClick={onClick}>{item.name}</div>
    );
}

const items = [
    { name: "item a" },
    { name: "item b" },
    { name: "item c" },
    { name: "item d" },
    { name: "item e" },
    { name: "item f" },
    { name: "item g" },
    { name: "item h" },
    { name: "item i" },
    { name: "item j" },
    { name: "item k" },
    { name: "item l" },
]
export default function Searchbar(props: {}) {
    const [item, setItem] = useState<Item | undefined>(undefined);
    const [term, setTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const itemList = term.length == 0 ? [] : items.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) != -1);

    const oninput = (ev) => {
        console.log(ev.target.value)
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
        setItem(item);
    }

    return (
        <div class="searchcontainer">
            <div class="searchbar">
                <img src="/search.svg" class="icon" />
                <input placeholder="Type an item name to get started..." value={term} onInput={oninput} onKeyDown={onkeydown} autoFocus />
                {isSearching && <div className="results">
                    {itemList.map(item => {
                        return (<ItemSearchResult item={item} onSelect={onSelect} />)
                    })}
                </div>}
            </div>
            <button class="add-listing" disabled={item === undefined}>
                List Yours
            </button>
        </div>
    );
}