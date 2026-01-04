// KPICard.tsx
interface KPICardProps {
  label: string;
  value: number;
  icon: string;
}

const KPICard = ({ label, value, icon }: KPICardProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-6 py-4">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="mt-1 text-3xl font-bold text-brand-600">
          {value}
        </p>
      </div>

      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50">
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="h-6 w-6"
        />
      </div>
    </div>
  );
};

export default KPICard;
