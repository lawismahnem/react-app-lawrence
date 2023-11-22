type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <div className="px-2 py-4 border-b">
      <div className="container">
        <p className="text-3xl font-bold text-black">{title}</p>
      </div>
    </div>
  );
}
