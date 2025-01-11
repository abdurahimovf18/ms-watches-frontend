import { clsx } from "clsx";

interface Errors {
  [fieldName: string]: {
    message?: string;
  };
}

export function FormErrors({ errors }: { errors: Errors }) {
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className={clsx("w-full h-max", { hidden: !hasErrors })}>
      <h1 className="text-slate-950 font-black sm:text-xl md:text-2xl 
        flex gap-2 items-center md:justify-start sm:justify-center">
        <p style={{ userSelect: 'none' }} className="text-sm">⚠️</p>
        Please adjust the following:
      </h1>

      <ul className="list-disc sm:pl-12 md:pl-5 sm:space-y-1 md:space-y-2 sm:ml-4 
        md:ml-5 mt-3 sm:text-sm md:text-lg">
        {Object.entries(errors).map(([field, error]) => (
          <li key={field} className="text-zinc-700 text-sm">
            {error?.message ?? "Error occurred"}
          </li>
        ))}
      </ul>
    </div>
  );
}
