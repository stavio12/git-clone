import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import PinnedRepo from "./PinnedRepo";

function PinnedRepos({ gitRepos }) {
  const [repos, setNewRepo] = useState(gitRepos);

  useEffect(() => {
    setNewRepo(gitRepos);
  }, [gitRepos]);

  function handleOnDragEnd(pinned) {
    if (!pinned.destination) return;

    const items = Array.from(repos);
    const [reorderedItem] = items.splice(pinned.source.index, 1);
    items.splice(pinned.destination.index, 0, reorderedItem);
    setNewRepo(items);
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {" "}
        <Droppable droppableId="pinnedRepos">
          {(provided) => (
            <div className="row" {...provided.droppableProps} ref={provided.innerRef}>
              {repos.map((repo, index) => {
                return <PinnedRepo repo={repo} key={`${repo.id}`} index={index} />;
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default PinnedRepos;
