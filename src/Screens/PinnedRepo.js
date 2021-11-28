import { Draggable } from "react-beautiful-dnd";

function PinnedRepo({ repo, index }) {
  return (
    <>
      <Draggable draggableId={`${repo.id}`} index={index}>
        {(provided) => (
          <div className="col-md-6" ref={provided.innerRef} {...provided.draggableProps}>
            <div className="card border rounded pinned-container">
              <div className="card-body position-relative">
                <div className="card-title d-flex flex-row justify-content-between align-items-center">
                  <div>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo mr-2 text-muted flex-shrink-0" style={{ fill: "#8b949e" }}>
                      <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                    </svg>

                    <a href={`${repo.svn_url}`} target="_blank" rel="noreferrer" className=" text-decoration-none mx-2 title">
                      {repo.name}{" "}
                    </a>
                  </div>

                  <span className="h6 text-muted text-small d-flex flex-row align-items-center gap-2">
                    <small className="border rounded-pill py-1 px-2 ">Public </small>{" "}
                    <div {...provided.dragHandleProps}>
                      {" "}
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-grabber mx-2" style={{ fill: "#8b949e" }}>
                        <path fillRule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
                      </svg>{" "}
                    </div>
                  </span>
                </div>
                <div>
                  <p className="text-truncate* text-small text-muted">{repo.description?.substring(0, 130)}</p>
                  <br />
                  <div className="d-flex flex-row align-items-center gap-3 text-small text-muted position-absolute bottom-0 language">
                    <div>
                      <span className={`code d-inline-block mx-1 ${repo.language.toLowerCase()}`}></span> <span>{repo.language}</span>
                    </div>
                    <div>
                      <span className="d-flex flex-row align-items-center gap-1">
                        <svg aria-label="stars" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star" style={{ fill: "#8b949e" }}>
                          <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                        </svg>{" "}
                        {repo.stargazers_count}
                      </span>
                    </div>

                    <div className={repo.forks === 0 ? "d-none" : "d-block"}>
                      <span className="d-flex flex-row align-items-center gap-1">
                        <svg aria-label="fork" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" style={{ fill: "#8b949e" }} className="octicon octicon-repo-forked">
                          <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                        </svg>{" "}
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
}

export default PinnedRepo;
