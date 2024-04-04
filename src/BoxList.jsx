import { useState } from "react";
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuid } from 'uuid';

function BoxList() {
    const [boxList, setBoxList] = useState([]);

    function removeBox(n) {
        const index = n;
        setBoxList(currBoxes => currBoxes.filter((box, i) => i !== n ));
    }

    function createBox({ width, height, backgroundColor }) {
        const newBox = <Box
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            id = {uuid()}
            removeBox={removeBox} />;

        setBoxList(currBoxes => [...currBoxes, newBox]);
    }

    return (
        <div>
            <NewBoxForm createBox={createBox} />
            <ul style={{listStyleType: 'none'}}>
                {boxList.map(box =>
                    <li>
                        {box}
                    </li>)}
            </ul>
        </div>
    );
}

export default BoxList;