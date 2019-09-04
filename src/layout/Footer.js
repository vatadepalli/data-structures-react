import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-12">
            <img
              src="assets/WordArt.png"
              style={{ width: 200, marginTop: -7, marginBottom: -45 }}
              alt=""
            />
          </div>
          <div className="col-12">
            <h5>&copy; {new Date().getFullYear()} Book Repo Inc</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}
