import React from "react";

export default function PrimeMembers() {
  return (
    <div className="container">
      <div className="flex justify-end">
        <div
          className="carousel carousel-center max-w-md p-4 space-x-4 bg-blue-400 rounded-box"
          style={{ "max-width": "95rem" }}
        >
          <div className="carousel-item">
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                  className="w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">John deccan wills</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
