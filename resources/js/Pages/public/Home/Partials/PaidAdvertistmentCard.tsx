
type Props = {
  name: string;
  image: string;
};

export default function PaidAdvertistmentCard({ name, image }: Props) {
  return (
    <div>
      <div className="w-full h-52 shadow  overflow-hidden relative">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <h3 className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded font-semibold text-md">
          {name}
        </h3>
      </div>
    </div>
  );
}
