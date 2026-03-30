export function FeatureList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-4 space-y-3 text-base leading-7 text-muted">
        {items.map((item) => <li key={item} className="list-inside list-disc">{item}</li>)}
      </ul>
    </div>
  )
}
