export default function ToolsItem({ dragg }) {
  return (
    <div className="cursor-grab border border-white whitespace-pre-wrap">
      <div className="border-b border-white p-2">
        <h2>{dragg.title}</h2>
      </div>
      <div className="px-1 py-1 text-center whitespace-pre-wrap">
        <p className="text-sm whitespace-pre-wrap">{dragg.tools}</p>
      </div>
    </div>
  );
}
