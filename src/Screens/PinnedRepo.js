function PinnedRepo({ repo }) {
  // });

  return (
    <>
      <div className="col-6 ">
        <div className="card border rounded pinned-container">
          <div className="card-body position-relative">
            <div className="card-title d-flex flex-row justify-content-between ">
              <a href={`${repo.svn_url}`} target="_blank" rel="noreferrer" className=" text-decoration-none title">
                {repo.name}{" "}
              </a>
              <span className="h6 text-muted text-small">
                <small className="border rounded-pill py-1 px-2 ">Public </small>
                <i class="fas fa-grip-vertical text-muted mx-2 px-1"></i>
              </span>
            </div>
            <div>
              <p className="text-truncate* text-small text-muted">{repo.description?.substring(0, 130)}</p>
              <br />
              <div class="d-flex flex-row align-items-center gap-3 text-small text-muted position-absolute bottom-0 language">
                <div>
                  <span className={`code d-inline-block mx-1 ${repo.language.toLowerCase()}`}></span> <span>{repo.language}</span>
                </div>
                <div>
                  <span>
                    <i class="far fa-star mx-1"></i> {repo.stargazers_count}
                  </span>
                </div>

                <div className={repo.forks === 0 ? "d-none" : "d-block"}>
                  <span>
                    <i class="fas fa-code-branch mx-1 "></i>
                    {repo.forks}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PinnedRepo;
