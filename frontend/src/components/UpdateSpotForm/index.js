import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SpotForm from "../SpotForm";
import { useDispatch, useSelector } from "react-redux";
import { getSingleSpotThunk } from "../../store/spots";

const UpdateSpotForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allSpotsObj = useSelector((state) => state.spots.allSpots);

  console.log(id);

  const spot = allSpotsObj[id];

  useEffect(() => {
    dispatch(getSingleSpotThunk(id));
  }, [dispatch, id]);

  console.log(spot);

  return (
    <div>
      <h1>Update a new Spot</h1>
      <SpotForm spot={spot} formType="Update Spot" />
    </div>
  );
};

export default UpdateSpotForm;
