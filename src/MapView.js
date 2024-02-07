import React, { useEffect, useState } from "react";

const { kakao } = window;

const MapView = () => {
  const [isClickKids, setIsClickKids] = useState();
  const [isClickPet, setIsClickPet] = useState();

  const onClickKids = () => {
    setIsClickKids(!isClickKids);
  };

  const onClickPet = () => {
    setIsClickPet(!isClickPet);
  };

  useEffect(() => {
    if (isClickKids) {
      setIsClickPet(false);
    }
    if (isClickPet) {
      setIsClickKids(false);
    }
  }, [isClickKids, isClickPet]);

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.2841, 127.0454),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  useEffect(() => {
    console.log(window);
  }, [window]);

  return (
    <div>
      <div id="map" className="w-screen h-screen"></div>
      <div className="w-36 h-32 rounded-lg bg-white border-[#65A3FF] border-2 top-24 right-7 absolute z-20 p-3">
        {isClickKids ? (
          <div className="flex gap-3 flex-col">
            <button
              className="rounded-2xl bg-[#65A3FF] text-white text-lg text-center px-2 py-2 font-bold"
              onClick={onClickKids}
            >
              KIDS
            </button>
            <button
              className="rounded-2xl bg-[#65A3FF] text-white text-lg text-center px-2 py-2 font-bold opacity-50"
              onClick={onClickPet}
            >
              PET
            </button>
          </div>
        ) : (
          <div className="flex gap-3 flex-col">
            <button
              className="rounded-2xl bg-[#65A3FF] text-white text-lg text-center px-2 py-2 font-bold opacity-50"
              onClick={onClickKids}
            >
              KIDS
            </button>
            <button
              className="rounded-2xl bg-[#65A3FF] text-white text-lg text-center px-2 py-2 font-bold"
              onClick={onClickPet}
            >
              PET
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapView;
