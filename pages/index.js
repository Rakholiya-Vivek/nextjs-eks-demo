export default function Home() {
  return (
    <div>
      <h1>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
      <p>Welcome to your Next.js app running in Docker & EKS Demo!</p>
    </div>
  );
}
