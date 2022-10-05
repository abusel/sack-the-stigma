import { ReactNode } from "react";

export default function TextTab(props: {
  title: string;
  subtitle?: string;
  body: string | ReactNode;
}) {
  return (
    <div id="main">
      <section className="post">
        <header className="major">
          <h1>{props.title}</h1>
          {props.subtitle}
        </header>
        <p>{props.body}</p>
      </section>
    </div>
  );
}
