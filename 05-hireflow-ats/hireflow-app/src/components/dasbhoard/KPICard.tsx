interface KPICardProps {
  label: string;
  value: number;
  icon: string;
}

const KPICard = ({ label, value, icon }: KPICardProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-purple-50 p-4">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="mt-1 text-2xl font-semibold text-purple-700">
          {value}
        </p>
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
        <img
          src={icon}
          alt={`${label} icon`}
          className="h-5 w-5"
        />
      </div>
    </div>
  );
};

export default KPICard;
