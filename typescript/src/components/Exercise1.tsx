type UserProps = {
  name: string;
  age?: number;
};

export default function Exercise1({ name, age }: UserProps) {
  return <p>{`Name: ${name} - Age: ${age}` ?? "Not found"}</p>;
}
