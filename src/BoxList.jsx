import { useState } from "react";
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuid } from 'uuid';

/** Renders a form to create boxes and those created boxes
 *
 * props:
 * - none
 *
 * state:
 * - boxList
 *
 * App -> BoxList -> [Box, ...]
 *                   NewBoxForm
 *
 */

function BoxList() {
    const [boxList, setBoxList] = useState([]);
    //TODO: docstring     filter by box.id instead
    function removeBox(id) {
        setBoxList(currBoxes => currBoxes.filter((box) => box.id !== id ));
    }

    function createBox({ width, height, backgroundColor }) {
      const newBox = {
        width,
        height,
        backgroundColor,
        id: uuid(),
      };

        setBoxList(currBoxes => [...currBoxes, newBox]);
    }

    //TODO: put ul style in css file
    return (
        <div>
            <NewBoxForm createBox={createBox} />
            <ul style={{listStyleType: 'none'}}>
                {boxList.map((box, idx) =>
                    <li key={box.id}>
                        <Box
                          height={box.height}
                          width={box.width}
                          backgroundColor={box.backgroundColor}
                          id={box.id}
                          removeBox={removeBox}
                          idx={idx}/>
                    </li>)}
            </ul>
        </div>
    );
}

export default BoxList;