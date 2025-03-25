import React from "react";
import dressIcon from "../assets/dress.svg";
import coatIcon from "../assets/coat.svg";
import glassesIcon from "../assets/glasses.svg";
import shortsIcon from "../assets/shorts.svg";
import teeIcon from "../assets/tee.svg";
import jacketIcon from "../assets/jacket.svg";
import watchIcon from "../assets/watch.svg";
import hatIcon from "../assets/hat.svg";

const Panel = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          <div className="category-item">
            <div className="category-img-box">
              <img src={dressIcon} alt="dress & frock" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Dress & frock</h3>
                <p className="category-item-amount">(53)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={coatIcon} alt="winter wear" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Winter wear</h3>
                <p className="category-item-amount">(58)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={glassesIcon} alt="glasses & lens" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Glasses & lens</h3>
                <p className="category-item-amount">(68)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={shortsIcon} alt="shorts & jeans" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Shorts & jeans</h3>
                <p className="category-item-amount">(84)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={teeIcon} alt="t-shirts" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">T-shirts</h3>
                <p className="category-item-amount">(35)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={jacketIcon} alt="jacket" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Jacket</h3>
                <p className="category-item-amount">(16)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={watchIcon} alt="watch" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Watch</h3>
                <p className="category-item-amount">(27)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={hatIcon} alt="hat & caps" width="30" />
            </div>
            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Hat & caps</h3>
                <p className="category-item-amount">(39)</p>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
