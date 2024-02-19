type USER = {
  name: string;
  age: number;
  haschild: boolean;
  father?: string;
  sum: (a: number, b: number) => number;
};

const User2: React.FC<USER> = ({ name, age, haschild, sum, father }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{`${haschild}`}</div>
      <div>sum: {sum(12, 14)}</div>
      <div>father: {father ?? "ندارد"}</div>
    </div>
  );
};

export default User2;
