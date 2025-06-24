import "./globals.css";

export default function GfeFooter({
  username,
  name,
}: {
  username: string;
  name: string;
}) {
  return (
    <footer>
      <div className="credits">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by
        <a href={`https://www.greatfrontend.com/u/${username}`} target="_blank">
          {name}
        </a>
        .
      </div>
    </footer>
  );
}
