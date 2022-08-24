import React from 'react';
import Empty from './Empty';
import NotesItem from './NotesItem';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const ActiveNotes = ({ notes, onDelete, onChangeArchive }) => {
  const activeNotes = !notes.length
    ? []
    : notes.filter((note) => note.archived === false);

  return (
    <>
      <h2>Catatan Aktif</h2>
      {activeNotes.length === 0 ? (
        <Empty />
      ) : (
        <DragDropContext>
          <Droppable droppableId='notes-list'>
            {(provided) => (
           <div className="notes-list" {...provided.droppableProps} ref={provided.innerRef}>
             {activeNotes.map((note, idx) => {
               return (
                <Draggable key={note} draggableId={note} index={idx}>
                  {(provided) => (
                    <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                   <NotesItem
                     key={idx}
                     note={note}
                     onDelete={onDelete}
                     onChangeArchive={onChangeArchive}
                   />
                   </li>
                  )}
                 </Draggable>
               );
             })}
            {provided.placeholder}
           </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </>
  );
};

export default ActiveNotes;
