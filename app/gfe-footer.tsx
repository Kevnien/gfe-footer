export default function GfeFooter({
  username,
  name,
}: {
  username: string;
  name: string;
}) {
  return (
    <footer>
      <div
        className="credits"
        style={{
          color: "#777",
          position: "fixed",
          bottom: "24px",
          left: "24px",
          fontSize: "11px",
          textAlign: "center",
        }}
      >
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
          style={{ color: "#000", fontWeight: "bold" }}
        >
          GreatFrontEnd Projects
        </a>
        . Built by
        <a
          href={`https://www.greatfrontend.com/u/${username}`}
          target="_blank"
          style={{ color: "#000", fontWeight: "bold" }}
        >
          {name}
        </a>
        .
      </div>
    </footer>
  );
}
