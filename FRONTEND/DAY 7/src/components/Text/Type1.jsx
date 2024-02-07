import TextTyper from "./TypeTexter";

export default function TApp() {
  const textToRender =
    "I'm a typewriter react text typing animation component."
    const textToRender1 =
    " I can take text via props and render it with typing animation effect." 
  return (
    <div className="TApp">
      <TextTyper text={textToRender} interval={50} Markup={"code"} />
      <br/>
      <TextTyper text={textToRender1} interval={50} Markup={"code"} />
      <p>{/* <span>{showPrompt ? '_' : ' '}</span> */}</p>
    </div>
  );
}
