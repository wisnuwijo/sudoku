import easy from "./difficulty/easy.js";
import easyDuplicate from "./difficulty/easyDuplicate.js";

const App = function _App() {
    return `
          <table class="main-tile">
            <tr>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[0][0]}" id="input-0-0"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[0][1]}" id="input-0-1"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[0][2]}" id="input-0-2"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[0][3]}" id="input-0-3"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[0][4]}" id="input-0-4"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[0][5]}" id="input-0-5"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[0][6]}" id="input-0-6"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[0][7]}" id="input-0-7"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[0][8]}" id="input-0-8"/>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[1][0]}" id="input-1-0"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[1][1]}" id="input-1-1"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[1][2]}" id="input-1-2"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[1][3]}" id="input-1-3"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[1][4]}" id="input-1-4"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[1][5]}" id="input-1-5"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[1][6]}" id="input-1-6"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[1][7]}" id="input-1-7"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[1][8]}" id="input-1-8"/>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[2][0]}" id="input-2-0"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[2][1]}" id="input-2-1"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[2][2]}" id="input-2-2"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[2][3]}" id="input-2-3"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[2][4]}" id="input-2-4"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[2][5]}" id="input-2-5"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[2][6]}" id="input-2-6"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[2][7]}" id="input-2-7"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[2][8]}" id="input-2-8"/>
                </td>
            </tr>
            <tr style="border-top: 2px solid #000;">
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[3][0]}" id="input-3-0"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[3][1]}" id="input-3-1"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[3][2]}" id="input-3-2"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[3][3]}" id="input-3-3"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[3][4]}" id="input-3-4"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[3][5]}" id="input-3-5"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[3][6]}" id="input-3-6"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[3][7]}" id="input-3-7"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[3][8]}" id="input-3-8"/>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[4][0]}" id="input-4-0"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[4][1]}" id="input-4-1"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[4][2]}" id="input-4-2"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[4][3]}" id="input-4-3"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[4][4]}" id="input-4-4"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[4][5]}" id="input-4-5"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[4][6]}" id="input-4-6"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[4][7]}" id="input-4-7"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[4][8]}" id="input-4-8"/>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[5][0]}" id="input-5-0"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[5][1]}" id="input-5-1"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[5][2]}" id="input-5-2"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[5][3]}" id="input-5-3"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[5][4]}" id="input-5-4"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[5][5]}" id="input-5-5"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[5][6]}" id="input-5-6"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[5][7]}" id="input-5-7"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[5][8]}" id="input-5-8"/>
                </td>
            </tr>
            <tr style="border-top: 2px solid #000;">
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[6][0]}" id="input-6-0"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[6][1]}" id="input-6-1"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[6][2]}" id="input-6-2"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[6][3]}" id="input-6-3"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[6][4]}" id="input-6-4"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[6][5]}" id="input-6-5"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[6][6]}" id="input-6-6"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[6][7]}" id="input-6-7"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[6][8]}" id="input-6-8"/>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[7][0]}" id="input-7-0"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[7][1]}" id="input-7-1"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[7][2]}" id="input-7-2"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[7][3]}" id="input-7-3"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[7][4]}" id="input-7-4"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[7][5]}" id="input-7-5"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[7][6]}" id="input-7-6"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[7][7]}" id="input-7-7"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[7][8]}" id="input-7-8"/>
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[8][0]}" id="input-8-0"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[8][1]}" id="input-8-1"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[8][2]}" id="input-8-2"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[8][3]}" id="input-8-3"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[8][4]}" id="input-8-4"/>
                </td>
                <td style="border-right: 2px solid #000;border-top: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[8][5]}" id="input-8-5"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[8][6]}" id="input-8-6"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[8][7]}" id="input-8-7"/>
                </td>
                <td style="border: 1px solid #000;">
                    <input class="tile-input" type="number" value="${_App.state.data[8][8]}" id="input-8-8"/>
                </td>
            </tr>
          </table>
        `;
};

App.state = {
    data: [...easy],
    error: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    changeState: (row, column, e) => {
        const value = e.target.value;
        if (value !== '') {
            App.state.data[row][column] = parseInt(value);
        } else {
            App.state.data[row][column] = '';
        }

        // validate all column
        let modifiedColumns = [];
        for (let i = 0; i < 9; i++) {
            const validateColumn = App.state.validateColumn(i);
            modifiedColumns.push(validateColumn);
        }

        // flatten array
        modifiedColumns = [].concat.apply([], modifiedColumns);
        // remove duplicate
        modifiedColumns = App.state.arrRemoveDuplicate(modifiedColumns);

        // validate all row
        let modifiedRowsAndColumns = [];
        for (let i = 0; i < 9; i++) {
            const validateRow = App.state.validateRow(i, modifiedColumns);
            modifiedRowsAndColumns.push(validateRow);
        }

        // flatten array
        modifiedRowsAndColumns = [].concat.apply([], modifiedRowsAndColumns);
        // remove duplicate
        modifiedRowsAndColumns = App.state.arrRemoveDuplicate(modifiedRowsAndColumns);
        
        // validate all block
        let blockRepresentative = [
            [0, 0],
            [0, 3],
            [0, 6],
            [3, 0],
            [3, 3],
            [3, 6],
            [6, 0],
            [6, 3],
            [6, 6],
        ];
        for (let i = 0; i < 9; i++) {
            const getBlockRepresentative = blockRepresentative[i];
            App.state.validateBlock(getBlockRepresentative[0], getBlockRepresentative[1], modifiedRowsAndColumns);
        }

        updateElement();
    },
    validateColumn: (column) => {
        let columnValue = [];
        for (let i = 0; i < App.state.data.length; i++) {
            const element = App.state.data[i][column];
            columnValue.push(element);
        }

        const findDuplicates = columnValue.filter((val, index) => columnValue.indexOf(val) !== index && val !== '');
        let modifiedColumn = [];

        for (let j = 0; j < columnValue.length; j++) {
            const element = columnValue[j];
            if (findDuplicates.indexOf(element) >= 0) {
                modifiedColumn.push([j, column]);
                App.state.error[j][column] = 1;
            } else {
                App.state.error[j][column] = 0;
            }
        }

        return modifiedColumn;
    },
    validateRow: (row, exception) => {
        const findDuplicates = App.state.data[row].filter((val, index) => App.state.data[row].indexOf(val) !== index && val !== '');
        let modifiedRow = [...exception];

        for (let i = 0; i < App.state.data[row].length; i++) {
            const element = App.state.data[row][i];
            if (findDuplicates.indexOf(element) >= 0) {
                modifiedRow.push([row, i]);
                App.state.error[row][i] = 1;
            } else {
                // do not override exception
                const isException = exception.filter((val) => val[0] === row && val[1] === i).length > 0;
                if (!isException) App.state.error[row][i] = 0;
            }
        }

        return modifiedRow;
    },
    validateBlock: (row, column, exception) => {
        // block map
        // 1 | 2 | 3
        // ---------
        // 4 | 5 | 6
        // ---------
        // 7 | 8 | 9

        const is1stBlock = row >= 0 && row <= 2 && column >= 0 && column <= 2;
        const is2ndBlock = row >= 0 && row <= 2 && column >= 3 && column <= 5;
        const is3rdBlock = row >= 0 && row <= 2 && column >= 6 && column <= 8;

        const is4thBlock = row >= 3 && row <= 5 && column >= 0 && column <= 2;
        const is5thBlock = row >= 3 && row <= 5 && column >= 3 && column <= 5;
        const is6thBlock = row >= 3 && row <= 5 && column >= 6 && column <= 8;

        const is7thBlock = row >= 6 && row <= 8 && column >= 0 && column <= 2;
        const is8thBlock = row >= 6 && row <= 8 && column >= 3 && column <= 5;
        const is9thBlock = row >= 6 && row <= 8 && column >= 6 && column <= 8;

        if (is1stBlock) {
            var arrBlock = [
                ...App.state.data[0].filter((val, index) => index <= 2),
                ...App.state.data[1].filter((val, index) => index <= 2),
                ...App.state.data[2].filter((val, index) => index <= 2)
            ];

            const findDuplicates = arrBlock.filter((val, index) => arrBlock.indexOf(val) !== index && val !== '');
            const blockRowStartIndex = 0;
            const blockRowEndIndex = 2;
            const blockColumnStartIndex = 0;
            const blockColumnEndIndex = 2;
            App.state.setRedBgToErrorBlock(
                findDuplicates,
                exception,
                blockRowStartIndex,
                blockRowEndIndex,
                blockColumnStartIndex,
                blockColumnEndIndex
            );
        } else if (is2ndBlock) {
            var arrBlock = [
                ...App.state.data[0].filter((val, index) => index >= 3 && index <= 5),
                ...App.state.data[1].filter((val, index) => index >= 3 && index <= 5),
                ...App.state.data[2].filter((val, index) => index >= 3 && index <= 5)
            ];

            const findDuplicates = arrBlock.filter((val, index) => arrBlock.indexOf(val) !== index && val !== '');
            const blockRowStartIndex = 0;
            const blockRowEndIndex = 2;
            const blockColumnStartIndex = 3;
            const blockColumnEndIndex = 5;
            App.state.setRedBgToErrorBlock(
                findDuplicates,
                exception,
                blockRowStartIndex,
                blockRowEndIndex,
                blockColumnStartIndex,
                blockColumnEndIndex
            );
        } else if (is3rdBlock) {
            var arrBlock = [
                ...App.state.data[0].filter((val, index) => index >= 6 && index <= 8),
                ...App.state.data[1].filter((val, index) => index >= 6 && index <= 8),
                ...App.state.data[2].filter((val, index) => index >= 6 && index <= 8)
            ];

            const findDuplicates = arrBlock.filter((val, index) => arrBlock.indexOf(val) !== index && val !== '');
            const blockRowStartIndex = 0;
            const blockRowEndIndex = 2;
            const blockColumnStartIndex = 6;
            const blockColumnEndIndex = 8;
            App.state.setRedBgToErrorBlock(
                findDuplicates,
                exception,
                blockRowStartIndex,
                blockRowEndIndex,
                blockColumnStartIndex,
                blockColumnEndIndex
            );
        } else if (is4thBlock) {
            var arrBlock = [
                ...App.state.data[3].filter((val, index) => index <= 2),
                ...App.state.data[4].filter((val, index) => index <= 2),
                ...App.state.data[5].filter((val, index) => index <= 2)
            ];

            const findDuplicates = arrBlock.filter((val, index) => arrBlock.indexOf(val) !== index && val !== '');
            const blockRowStartIndex = 3;
            const blockRowEndIndex = 5;
            const blockColumnStartIndex = 0;
            const blockColumnEndIndex = 2;
            App.state.setRedBgToErrorBlock(
                findDuplicates,
                exception,
                blockRowStartIndex,
                blockRowEndIndex,
                blockColumnStartIndex,
                blockColumnEndIndex
            );
        } else if (is5thBlock) {
            var arrBlock = [
                ...App.state.data[3].filter((val, index) => index >= 3 && index <= 5),
                ...App.state.data[4].filter((val, index) => index >= 3 && index <= 5),
                ...App.state.data[5].filter((val, index) => index >= 3 && index <= 5)
            ];

            const findDuplicates = arrBlock.filter((val, index) => arrBlock.indexOf(val) !== index && val !== '');
            const blockRowStartIndex = 3;
            const blockRowEndIndex = 5;
            const blockColumnStartIndex = 3;
            const blockColumnEndIndex = 5;
            App.state.setRedBgToErrorBlock(
                findDuplicates,
                exception,
                blockRowStartIndex,
                blockRowEndIndex,
                blockColumnStartIndex,
                blockColumnEndIndex
            );
        } else if (is6thBlock) {
            var arrBlock = [
                ...App.state.data[3].filter((val, index) => index >= 6 && index <= 8),
                ...App.state.data[4].filter((val, index) => index >= 6 && index <= 8),
                ...App.state.data[5].filter((val, index) => index >= 6 && index <= 8)
            ];

            const findDuplicates = arrBlock.filter((val, index) => arrBlock.indexOf(val) !== index && val !== '');
            const blockRowStartIndex = 3;
            const blockRowEndIndex = 5;
            const blockColumnStartIndex = 6;
            const blockColumnEndIndex = 8;
            App.state.setRedBgToErrorBlock(
                findDuplicates,
                exception,
                blockRowStartIndex,
                blockRowEndIndex,
                blockColumnStartIndex,
                blockColumnEndIndex
            );
        } else if (is7thBlock) {
            var arrBlock = [
                ...App.state.data[6].filter((val, index) => index <= 2),
                ...App.state.data[7].filter((val, index) => index <= 2),
                ...App.state.data[8].filter((val, index) => index <= 2)
            ];

            const findDuplicates = arrBlock.filter((val, index) => arrBlock.indexOf(val) !== index && val !== '');
            const blockRowStartIndex = 6;
            const blockRowEndIndex = 8;
            const blockColumnStartIndex = 0;
            const blockColumnEndIndex = 2;
            App.state.setRedBgToErrorBlock(
                findDuplicates,
                exception,
                blockRowStartIndex,
                blockRowEndIndex,
                blockColumnStartIndex,
                blockColumnEndIndex
            );
        } else if (is8thBlock) {
            var arrBlock = [
                ...App.state.data[6].filter((val, index) => index >= 3 && index <= 5),
                ...App.state.data[7].filter((val, index) => index >= 3 && index <= 5),
                ...App.state.data[8].filter((val, index) => index >= 3 && index <= 5)
            ];

            const findDuplicates = arrBlock.filter((val, index) => arrBlock.indexOf(val) !== index && val !== '');
            const blockRowStartIndex = 6;
            const blockRowEndIndex = 8;
            const blockColumnStartIndex = 3;
            const blockColumnEndIndex = 5;
            App.state.setRedBgToErrorBlock(
                findDuplicates,
                exception,
                blockRowStartIndex,
                blockRowEndIndex,
                blockColumnStartIndex,
                blockColumnEndIndex
            );
        } else if (is9thBlock) {
            var arrBlock = [
                ...App.state.data[6].filter((val, index) => index >= 6 && index <= 8),
                ...App.state.data[7].filter((val, index) => index >= 6 && index <= 8),
                ...App.state.data[8].filter((val, index) => index >= 6 && index <= 8)
            ];

            const findDuplicates = arrBlock.filter((val, index) => arrBlock.indexOf(val) !== index && val !== '');
            const blockRowStartIndex = 6;
            const blockRowEndIndex = 8;
            const blockColumnStartIndex = 6;
            const blockColumnEndIndex = 8;
            App.state.setRedBgToErrorBlock(
                findDuplicates,
                exception,
                blockRowStartIndex,
                blockRowEndIndex,
                blockColumnStartIndex,
                blockColumnEndIndex
            );
        }
    },
    setRedBgToErrorBlock: (findDuplicates, exception, blockRowStartIndex, blockRowEndIndex, blockColumnStartIndex, blockColumnEndIndex) => {
        for (let i = blockRowStartIndex; i <= blockRowEndIndex; i++) {
            for (let j = blockColumnStartIndex; j <= blockColumnEndIndex; j++) {
                const element = App.state.data[i][j];
                if (findDuplicates.indexOf(element) >= 0) {
                    App.state.error[i][j] = 1;
                } else {
                    // do not override exception
                    const isException = exception.filter((val) => val[0] === i && val[1] === j).length > 0;
                    if (!isException) App.state.error[i][j] = 0;
                }
            }
        }
    },
    arrRemoveDuplicate: (arr) => {
        let history = [];
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            let identifier = arr[i][0].toString() + arr[i][1].toString();
            if (history.indexOf(identifier) === -1) {
                newArr.push(arr[i]);
                history.push(identifier);
            }
        }

        return newArr;
    }
};

const updateElement = () => {
    document.getElementById("app").innerHTML = App();
    for (let i = 0; i < App.state.data.length; i++) {
        const a = App.state.data[i];
        const errorValidation = App.state.error[i];

        for (let j = 0; j < a.length; j++) {
            const elementId = 'input-' + i + '-' + j;
            
            const isError = errorValidation[j];
            if (isError) document
                .getElementById(elementId)
                .style.background = '#F7CFD6';
            
            if (easyDuplicate[i][j] === '') {
                document
                    .getElementById(elementId)
                    .style.color = '#adadad';

                document
                    .getElementById(elementId)
                    .addEventListener("keyup", ((e) => App.state.changeState(i,j, e)));
            } else {
                document
                    .getElementById(elementId)
                    .setAttribute('readonly','');

                document
                    .getElementById(elementId)
                    .style.fontWeight = 'bold';
            }
        }
    }
};

updateElement();