import React, { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import PrimaryButton from "../button/PrimaryButton";
import RatingAPI from "../../shared/RatingAPI";
import { useModal } from "../../context/ModalContext";
import toast from "react-hot-toast";

const ReviewModal = ({ id }) => {
  const { closeModal } = useModal();
  const [rating, setRating] = useState(0);
  const ratingData = [1, 2, 3, 4, 5];
  const handleRating = (event, value) => {
    event.stopPropagation();
    setRating(value);
  };

  const handleSubmitRating = async (event) => {
    event.stopPropagation();
    const response = await RatingAPI.InsertReview({ id: id, rating: rating });
    if (response.status == "success") {
      closeModal();
      toast.success(response.message);
    }
  };

  return (
    <div className="text-black">
      <h1 className="font-bold text-black text-center mb-4 tracking-wide">
        Feedback Support
      </h1>
      <div className="flex gap-2 justify-center items-center">
        {ratingData.map((item) => (
          <BsStarFill
            size={40}
            className={`${
              item <= rating ? "text-yellow-500" : "text-gray-500"
            }`}
            onClick={(e) => handleRating(e, item)}
          />
        ))}
      </div>
      <p className="text-sm my-4">
        Kami ingin tahu seberapa puas kamu dengan bantuan yang kamu terima
      </p>
      <PrimaryButton
        text={"Close Ticket"}
        type="button"
        onClick={(e) => handleSubmitRating(e)}
      />
    </div>
  );
};

export default ReviewModal;
