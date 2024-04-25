import AddonsForm from "../components/AddonsForm";
import Card from "../components/Card";


export default function Addons() {
  return (
    <Card
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <AddonsForm />
    </Card>
  );
}