type PrevButtonProps = {
  parseCsv: () => Promise<void>;
};

export default function PreviewButton({ parseCsv }: PrevButtonProps) {
  return (
    <div>
      <button
        className="bg-white text-black rounded px-2 cursor-pointer my-2"
        onClick={parseCsv}
      >
        Preview Button
      </button>
    </div>
  );
}
