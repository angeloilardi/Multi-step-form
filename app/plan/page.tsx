import Card from "../components/Card";
import PlanSelectionForm from "../components/PlanSelectionForm";


export default function PlanSlection() {
    return (
      <Card
        title="Select Your Plan"
            description="You have the option of monthly or yearly billing."
        >
            <PlanSelectionForm />
      </Card>
    );
   
}