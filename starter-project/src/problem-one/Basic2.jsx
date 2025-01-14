// Updating arrays in state
// Arrays are another type of mutable JavaScript objects you can store in state and should treat as read - only.
// Just like with objects, when you want to update an array stored in state, you need to create a new one(or make
// a copy of an existing one), and then set state to use the new array:

import { useState } from 'react';

const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
    const [list, setList] = useState(initialList);

    function handleToggle(artworkId, nextSeen) {
        setList(list.map(artwork => {
            if (artwork.id === artworkId) {
                return { ...artwork, seen: nextSeen };
            } else {
                return artwork;
            }
        }));
    }

    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList
                artworks={list}
                onToggle={handleToggle} />
        </>
    );
}

function ItemList({ artworks, onToggle }) {
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}

// Stopping propagation
// Event handlers receive an event object as their only argument.By convention, it’s usually called e,
//     which stands for “event”. You can use this object to read information about the event.

// That event object also lets you stop the propagation.If you want to prevent
// an event from reaching parent components, you need to call e.stopPropagation() like this Button component does:

function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div className="Toolbar" onClick={() => {
            alert('You clicked on the toolbar!');
        }}>
            <Button onClick={() => alert('Playing!')}>
                Play Movie
            </Button>
            <Button onClick={() => alert('Uploading!')}>
                Upload Image
            </Button>
        </div>
    );
}


// e.stopPropagation() stops the event handlers attached to the tags above from firing.
// e.preventDefault() prevents the default browser behavior for the few events that have it.

export default function Signup() {
    return (
        <form onSubmit={() => alert('Submitting!')}>
            <input />
            <button>Send</button>
        </form>
    );
}
//   --------------------------------------
export default function Signup() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submitting!');
        }}>
            <input />
            <button>Send</button>
        </form>
    );
}