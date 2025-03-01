/* eslint-disable react/prop-types */
// import { useStore } from "../store/store";

export default function Description({ challengeDescription }) {
  // const { challengeDescription } = useStore();

  // console.log(challengeDescription);
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Description</h3>
        <p className="py-4 text-xs">Press ESC key or click outside to close</p>
        <p className="py-4 text-lg font-semibold">{challengeDescription}</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
