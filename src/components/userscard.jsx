import { useState } from "react";
const UsersCard = (props) => {

  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="">
      <div className="card rounded-xl px-4 py-2 flex flex-row gap-4">
        <img src={props.image} className="w-full h-80 " />

        <div className="flex flex-col justify-center gap-1">
          <div className="flex flex-row gap-2">
            <p className="text-2xl font-bold">{props.name}</p>
            <p className="text-2xl font-bold">{props.lastname}</p>
            <p className="text-md font-semibold">{props.maideName}</p>
          </div>
          <p className="text-md font-semibold">{props.age}</p>
          <p className="text-md  font-semibold">{props.email}</p>
          <p className="text-md font-semibold">{props.phone}</p>
          <div className="flex flex-row gap-10">
            <p className="text-md font-semibold">{props.address}</p>
            <p className="text-md font-semibold">{props.gender}</p>
          </div>

          {showMore && (
            <>
              <p className="text-md font-semibold">{props.birthdate}</p>
              <div className="flex flex-row gap-10">
                <p className="text-md font-semibold">{props.username}</p>
                <p className="text-md font-semibold">{props.role}</p>
              </div>
              <p className="text-md font-semibold">{props.ip}</p>
              <p className="text-md font-semibold">{props.macAddress}</p>
              <p className="text-md font-semibold">{props.university}</p>
              <div className="flex flex-row gap-10">
                <p className="text-md font-semibold">{props.weight}</p>
                <p className="text-md font-semibold">{props.height}</p>
                <p className="text-md font-semibold">{props.hair}</p>
              </div>
              <p className="text-md font-semibold">{props.ein}</p>
              <div className="flex flex-row gap-15">
                <p className="text-md font-semibold">{props.crypto}</p>
                <p className="text-md font-semibold">{props.bloodgroup}</p>
              </div>
              <p className="text-md font-semibold">{props.company}</p>
            </>
          )}

          <button
            onClick={handleReadMore}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-8"
          >
            {showMore ? "show Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default UsersCard;

