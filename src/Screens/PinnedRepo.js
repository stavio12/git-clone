import React, { useEffect } from "react";

function PinnedRepo() {
  return (
    <>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <p className="h6">Pinned</p>
        <p className="h6">Customize your pins</p>
      </div>
      <div className="row">
        <div className="col-6 pb-4 mb-2">
          <div className="border rounded p-3 pinned-container">
            <div className="d-flex flex-row justify-content-between ">
              <a href="#" className="h6">
                project title
              </a>
              <span className="h6 text-muted text-small">
                <small className="border rounded-pill p-1">Public </small>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3-gap mx-2" viewBox="0 0 16 16">
                  <path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" />
                </svg>
              </span>{" "}
            </div>
            <div>
              <p className="text-truncate text-small text-muted"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos optio sequi veritatis, velit quisquam, debitis similique itaque deleniti, adipisci eius corrupti eum! Explicabo excepturi sed, mollitia illum exercitationem fuga dolores. </p>
              <br />
              <div class="text-small text-muted">
                {" "}
                <span className="code d-inline-block"></span> Language
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 pb-4 mb-2">
          {" "}
          <div className="border rounded p-3 pinned-container">
            <div className="d-flex flex-row justify-content-between ">
              <a href="#" className="h6">
                project title
              </a>
              <span className="h6 text-muted text-small">
                <small className="border rounded-pill p-1">Public </small>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3-gap mx-2" viewBox="0 0 16 16">
                  <path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" />
                </svg>
              </span>
            </div>
            <div>
              <p className="text-truncate text-small text-muted"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos optio sequi veritatis, velit quisquam, debitis similique itaque deleniti, adipisci eius corrupti eum! Explicabo excepturi sed, mollitia illum exercitationem fuga dolores. </p>
              <br />
              <div class="text-small text-muted">
                {" "}
                <span className="code d-inline-block"></span> Language
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 pb-4 mb-2">
          <div className="border rounded p-3 pinned-container">
            <div className="d-flex flex-row justify-content-between ">
              <a href="#" className="h6">
                project title
              </a>
              <span className="h6 text-muted text-small">
                <small className="border rounded-pill p-1">Public </small>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3-gap mx-2" viewBox="0 0 16 16">
                  <path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" />
                </svg>
              </span>{" "}
            </div>
            <div>
              <p className="text-truncate text-small text-muted"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos optio sequi veritatis, velit quisquam, debitis similique itaque deleniti, adipisci eius corrupti eum! Explicabo excepturi sed, mollitia illum exercitationem fuga dolores. </p>
              <br />
              <div class="text-small text-muted">
                {" "}
                <span className="code d-inline-block"></span> Language
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 pb-4 mb-2">
          {" "}
          <div className="border rounded p-3 pinned-container">
            <div className="d-flex flex-row justify-content-between ">
              <a href="#" className="h6">
                project title
              </a>
              <span className="h6 text-muted text-small">
                <small className="border rounded-pill p-1">Public </small>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3-gap mx-2" viewBox="0 0 16 16">
                  <path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" />
                </svg>
              </span>{" "}
            </div>
            <div>
              <p className="text-truncate text-small text-muted"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos optio sequi veritatis, velit quisquam, debitis similique itaque deleniti, adipisci eius corrupti eum! Explicabo excepturi sed, mollitia illum exercitationem fuga dolores. </p>
              <br />
              <div class="text-small text-muted">
                {" "}
                <span className="code d-inline-block"></span> Language
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PinnedRepo;
