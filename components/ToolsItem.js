export default function ToolsItem({ dragg }) {
  return (
    <div className="cursor-grab p-2">
      <div>
        <h2>{dragg.title}</h2>
      </div>
    </div>
  );
}
