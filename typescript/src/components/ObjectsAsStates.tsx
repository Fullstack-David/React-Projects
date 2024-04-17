import { useState } from "react";
import { type User } from "../types/types";

const ObjectsAsStates = () => {
  const [user, setUser] = useState<User | null>(null);

  //   if (user === null) return;

  const name = user?.name;
  // console.log(name);

  return user ? (
    <>
      <p>
        Namn: {user.name}, Ålder: {user.age}
      </p>
      <button>Name</button>
    </>
  ) : (
    <p>Inegn user hittat!</p>
  );
};

export default ObjectsAsStates;
