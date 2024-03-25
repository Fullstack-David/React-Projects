import { useState } from "react";


export default function OpenInput() {
    const [isModal, setIsModal] = useState(false);

    const handleModal = () => setIsModal(false)

    return (
        <dialog onClick={setIsModal}>
          <p>Hello</p>
        </dialog>
    );
}
