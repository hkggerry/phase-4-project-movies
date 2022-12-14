import React from "react";

function ReviewEdit({
  setEditFormReview,
  editFormReview,
  handleEditFormChange,
}) {
  return (
    <div>
      <li>
        <input
          type="text"
          required="required"
          placeholder="Edit Review"
          name="comments"
          value={editFormReview.comments}
          onChange={(e) =>
            setEditFormReview({
              ...editFormReview,
              [e.target.name]: e.target.value,
            })
          }
        />
        <button type="submit" onClick={handleEditFormChange}>
          Save
        </button>
      </li>
    </div>
  );
}

export default ReviewEdit;
