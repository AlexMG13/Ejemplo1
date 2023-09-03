import { React, useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const cities = [
  {
    id: "0",
    country: "Argentina",
    city: "Buenos Aires",
    url: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "1",
    country: "USA",
    city: "New York",
    url: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "2",
    country: "France",
    city: "Paris",
    url: "https://plus.unsplash.com/premium_photo-1666283181610-b95ee7e55465?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "3",
    country: "Germany",
    city: "Berlin",
    url: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "4",
    country: "Spain",
    city: "Madrid",
    url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "5",
    country: "England",
    city: "Londres",
    url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "6",
    country: "Czechia",
    city: "Praga",
    url: "https://images.unsplash.com/photo-1564511287568-54483b52a35e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "7",
    country: "Portugal",
    city: "Lisboa",
    url: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
  },
  {
    id: "8",
    country: "Luxembourg",
    city: "Luxembourg",
    url: "https://images.unsplash.com/photo-1588336899745-22da91d8f816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "9",
    country: "Italy",
    city: "Rome",
    url: "https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "10",
    country: "Serbia",
    city: "Belgrade",
    url: "https://images.unsplash.com/photo-1608816747977-4d303f476571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: "11",
    country: "Qatar",
    city: "Doha",
    url: "https://images.unsplash.com/photo-1562823083-3f86817ec7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
];

export default function Carousel() {
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(4);

  const handlerBack = () => {
    if (start != 0) {
      setStart(start - 4);
      setEnd(end - 4);
    }
  };

  const handlerUp = () => {
    if (end != 12) {
      setEnd(end + 4);
      setStart(start + 4);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (end != 12) {
        setStart(start + 4);
        setEnd(end + 4);
      } else {
        setStart(0);
        setEnd(4);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [start, end]);

  return (
    <>
      <h2 className="text-2xl text-center font-bold">Popular MyTinerary</h2>
      <div className="max-w-[900px] h-[800px] py-16 px-4 relative group flex justify-around">
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft
            onClick={() => {
              handlerBack();
            }}
            size={30}
          />
        </div>
        <div className="w-[80%] flex flex-wrap justify-between">
          {cities.slice(start, end).map((city) => (
            <div className="w-[45%]" key={city.id}>
              <img src={city.url} />
            </div>
          ))}
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight
            onClick={() => {
              handlerUp();
            }}
            size={30}
          />
        </div>
      </div>
    </>
  );
}
