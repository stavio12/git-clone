import { DragDropContext, Droppable } from "react-beautiful-dnd";
import PinnedRepo from "./PinnedRepo";

function PinnedRepos({ gitRepos }) {
  return (
    <>
      <DragDropContext>
        <Droppable droppableId="pinnedRepos">
          {(provided) => (
            <div className="row" {...provided.droppableProps} ref={provided.innerRef}>
              {gitRepos.map((repo, index) => {
                return <PinnedRepo repo={repo} key={`${repo.id}`} index={index} />;
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default PinnedRepos;
