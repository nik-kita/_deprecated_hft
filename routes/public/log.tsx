export default function Log(req: Request) {
  return (
    <div>
      <pre>{req.body && JSON.stringify(req.body, null, 2)}</pre>
    </div>
  );
}
