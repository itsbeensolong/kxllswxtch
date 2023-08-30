export default function ToolsItem({ dragg }) {
  return (
    <div className="cursor-grab border border-white w-32 min-w-full">
      <div className="border-b border-white p-2">
        <h2>{dragg.title}</h2>
      </div>
      <div className="px-1 py-1 text-center">
        <p className="text-sm text-gray-500">{dragg.tools}</p>
      </div>
    </div>
  );
}
