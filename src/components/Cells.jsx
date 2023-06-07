import Card from "./Card";

const CellsComponent = ({ info }) => {
  const { cellApp, cellWpp } = info;

  return (
    <aside className="container">
      <h2>Formas de viajar</h2>
      <div className="cells">
        <Card
          image={cellApp.image}
          alt={cellApp.title}
          subtitle={cellApp.title}
          text={cellApp.description}
          buttonText={cellApp.buttonText}
          href={cellApp.href}
        />
        <Card
          image={cellWpp.image}
          alt={cellWpp.title}
          subtitle={cellWpp.title}
          text={cellWpp.description}
          buttonText={cellWpp.buttonText}
          href={cellWpp.href}
        />
      </div>
    </aside>
  );
};

export default CellsComponent;
