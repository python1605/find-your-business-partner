import React from "react";

export default function PrimeMembers() {
  return (
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
        <div className="carousel-item">
          <div className="card w-96 glass">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            className="rounded-box"
          />
        </div>
      </div>
    </div>
  );
}
