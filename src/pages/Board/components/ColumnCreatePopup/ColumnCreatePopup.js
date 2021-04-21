import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as boardsApi from '../../../../api/boardsApi';
import * as columnsApi from '../../../../api/columnsApi';
import InputPopup from '../../../../components/InputPopup/InputPopup';
import { setBoard, setBoardColumns } from '../../../../store/reducers/boards';

// eslint-disable-next-line object-curly-newline
function ColumnCreatePopup({ id, isOpen, anchorEl, onClose }) {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.boards.board);
  const columns = useSelector((state) => state.boards.boardColumns);

  const routParams = useParams();
  const boardId = Number(routParams.id);

  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (evt) => setInputValue(evt.target.value);

  const createColumn = async () => {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue) {
      try {
        const newColumn = await columnsApi.createColumn(
          boardId,
          trimmedInputValue,
        );

        const newColumns = [
          ...columns,
          {
            ...newColumn.data,
            Tasks: [],
          },
        ];

        const columnsOrder = newColumns.map((item) => item.id);
        const newBoard = { ...board, columnsOrder };

        dispatch(setBoard(newBoard));
        dispatch(setBoardColumns(newColumns));
        onClose();
        setInputValue('');

        await boardsApi.updateBoardColumnsOrder(boardId, columnsOrder);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <InputPopup
      id={id}
      isOpen={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      placeholder="Enter list title..."
      btnText="Add List"
      onChange={handleInputChange}
      onClick={createColumn}
    />
  );
}

export default ColumnCreatePopup;
