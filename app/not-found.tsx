import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="max-w-3xl py-28">
      <h1 className="text-4xl font-semibold tracking-tighter md:text-5xl">Page not found</h1>
      <p className="mt-4 text-lg text-muted">The page you are looking for has moved or does not exist.</p>
      <div className="mt-8">
        <ButtonLink href="/">Go to the homepage</ButtonLink>
      </div>
    </Container>
  );
}
