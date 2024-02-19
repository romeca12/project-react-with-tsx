type UserName2 = "mohammad" | "Ali" | "Ahmad";

type User = {
  name: string;
  age: number;
  haschild: boolean;
  mother: any;
  name2: UserName2;
  // children: JSX.Element;
  children: React.ReactNode;
  sum: (a: number, b: number) => number;

  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

// type USER = {
//   name: string;
//   age: number;
//   haschild: boolean;
//   mother: any;
//   name2: UserName2;
//   // children: JSX.Element;
//   children: React.ReactNode;
//   sum: (a: number, b: number) => number;

//   value: string;
//   onChange: React.Dispatch<React.SetStateAction<string>>;
// };

function User({
  name,
  age,
  haschild,
  sum,
  mother,
  name2,
  children,
  value,
  onChange,
}: USER) {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{`${haschild}`}</div>
      <div>sum: {sum(12, 12)}</div>
      <div>mother: {`${mother}`}</div>
      <input type="" value={name2} />
      <h1>{children}</h1>

      <h1>{value}</h1>
    </div>
  );
}

export default User;
