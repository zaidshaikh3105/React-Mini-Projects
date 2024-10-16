import { useEffect, useState } from "react";

function Accordion({ user, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [originalUser, setOriginalUser] = useState(user);
  const [editableUser, setEditableUser] = useState(user);
  const [isChanged, setIsChanged] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    setEditableUser(user);
  }, [user]);

  const handleEdit = () => {
    setIsEditing(true);
    setOriginalUser(user);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteModal(false);
    // onDelete(user.id);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser((prev) => ({ ...prev, [name]: value }));
    setIsChanged(true);
  };

  const handleSave = () => {
    if (isChanged) {
      setOriginalUser(editableUser);
      setIsEditing(false);
      setIsChanged(false);
    }
  };

  const handleCancel = () => {
    setEditableUser(originalUser);
    setIsEditing(false);
  };

  const isAdult =
    new Date().getFullYear() - new Date(user.dob).getFullYear() >= 18;

  return (
    <div className=" flex justify-center items-center">
      <div className="card  p-4 mb-4 border-spacing-3 w-96">
        <div className="collapse collapse-plus bg-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium flex items-center">
            <img
              src={user.picture}
              alt={`${user.first} ${user.last}`}
              className="w-12 h-12 rounded-full mr-4"
            />
            {isEditing ? (
              <input
                type="text"
                name="first"
                value={editableUser.first}
                onChange={handleChange}
                className="border rounded p-1 mr-2 w-56"
                required
              />
            ) : (
              <span>{`${user.first} ${user.last}`}</span>
            )}
          </div>
          <div className="collapse-content">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="country"
                  value={editableUser.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="border rounded p-1 mb-2"
                  required
                />
                <input
                  type="number"
                  name="country"
                  value={
                    new Date().getFullYear() - new Date(user.dob).getFullYear()
                  }
                  onChange={handleChange}
                  placeholder="Country"
                  className="border rounded p-1 mb-2"
                  required
                />
                <select
                  name="gender"
                  value={editableUser.gender}
                  onChange={handleChange}
                  className="border rounded p-1 mb-2"
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                  <option value="rather not say">Rather not say</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="description"
                  value={editableUser.description}
                  onChange={handleChange}
                  placeholder="Description"
                  className="textarea textarea-bordered triangle-textarea w-80 h-60"
                  required
                />
                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleSave}
                    className="btn btn-outline btn-primary"
                    disabled={!isChanged}
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn btn-outline btn-secondary ml-2"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between mb-2">
                  <p>
                    <strong>Age:</strong>{" "}
                    {new Date().getFullYear() -
                      new Date(user.dob).getFullYear()}{" "}
                    Years
                  </p>
                  <p>
                    <strong>Gender:</strong> {user.gender}
                  </p>
                  <p>
                    <strong>Country:</strong> {user.country}
                  </p>
                </div>
                {/* Description in a separate row */}
                <div className="mb-2">
                  <p>
                    <strong>Description:</strong> {user.description}
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleEdit}
                    className="btn btn-outline btn-warning"
                    disabled={!isAdult}
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDeleteClick}
                    className="btn btn-outline btn-error ml-2"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <dialog id="delete_modal" className="modal modal-open">
          <form method="dialog" className="modal-box">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleCancelDelete}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">
              Are you sure you want to delete?
            </h3>
            <div className="modal-action">
              <button onClick={handleCancelDelete} className="btn btn-outline">
                Cancel
              </button>
              <button onClick={handleConfirmDelete} className="btn btn-error">
                Delete
              </button>
            </div>
          </form>
        </dialog>
      )}
    </div>
  );
}

export default Accordion;
